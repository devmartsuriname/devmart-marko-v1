import { createContext, useEffect, useState, ReactNode } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import type { AppRole } from "@/lib/permissions";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  isLoading: boolean;
  isAdmin: boolean;
  isEditor: boolean;
  userRole: AppRole | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isRoleLoading, setIsRoleLoading] = useState(true);
  const [userRole, setUserRole] = useState<AppRole | null>(null);

  const fetchUserRole = async (userId: string) => {
    setIsRoleLoading(true);
    try {
      // Check admin role first
      const { data: isAdmin } = await supabase.rpc("has_role", {
        _user_id: userId,
        _role: "admin",
      });

      if (isAdmin) {
        setUserRole("admin");
        return;
      }

      // Check editor role
      const { data: isEditor } = await supabase.rpc("has_role", {
        _user_id: userId,
        _role: "editor",
      });

      if (isEditor) {
        setUserRole("editor");
        return;
      }

      setUserRole(null);
    } finally {
      setIsRoleLoading(false);
    }
  };

  useEffect(() => {
    // Set up auth state listener FIRST (prevents race conditions)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsAuthLoading(false);

        if (session?.user) {
          // Fetch role and wait for completion
          await fetchUserRole(session.user.id);
        } else {
          setUserRole(null);
          setIsRoleLoading(false);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsAuthLoading(false);

      if (session?.user) {
        await fetchUserRole(session.user.id);
      } else {
        setUserRole(null);
        setIsRoleLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return { error: error ? new Error(error.message) : null };
    } catch (error) {
      return { error: error as Error };
    }
  };

  const signOut = async () => {
    setUserRole(null);
    await supabase.auth.signOut();
  };

  const isAdmin = userRole === "admin";
  const isEditor = userRole === "editor";
  
  // Combined loading state - wait for BOTH auth AND role to be determined
  const isLoading = isAuthLoading || isRoleLoading;

  return (
    <AuthContext.Provider value={{ 
      user, 
      session, 
      signIn, 
      signOut, 
      isLoading, 
      isAdmin, 
      isEditor, 
      userRole 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
