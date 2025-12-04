import { createContext, useEffect, useState, useRef, ReactNode } from "react";
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

  // Refs to prevent race conditions during hot reloads
  const mountedRef = useRef(true);
  const fetchingRoleRef = useRef(false);
  const lastFetchedUserIdRef = useRef<string | null>(null);

  const fetchUserRole = async (userId: string) => {
    // Prevent duplicate fetches for the same user
    if (fetchingRoleRef.current && lastFetchedUserIdRef.current === userId) {
      console.log("[AuthContext] Role fetch already in progress for this user, skipping");
      return;
    }

    fetchingRoleRef.current = true;
    lastFetchedUserIdRef.current = userId;
    setIsRoleLoading(true);
    console.log("[AuthContext] Fetching role for user:", userId);
    
    try {
      // Check admin role first
      const { data: isAdmin, error: adminError } = await supabase.rpc("has_role", {
        _user_id: userId,
        _role: "admin",
      });

      if (!mountedRef.current) {
        console.log("[AuthContext] Component unmounted, aborting role update");
        return;
      }

      if (adminError) {
        console.error("[AuthContext] Admin role check failed:", adminError);
      } else {
        console.log("[AuthContext] Admin role check result:", isAdmin);
      }

      if (isAdmin === true) {
        console.log("[AuthContext] User is admin");
        setUserRole("admin");
        setIsRoleLoading(false);
        fetchingRoleRef.current = false;
        return;
      }

      // Check editor role
      const { data: isEditor, error: editorError } = await supabase.rpc("has_role", {
        _user_id: userId,
        _role: "editor",
      });

      if (!mountedRef.current) {
        console.log("[AuthContext] Component unmounted, aborting role update");
        return;
      }

      if (editorError) {
        console.error("[AuthContext] Editor role check failed:", editorError);
      } else {
        console.log("[AuthContext] Editor role check result:", isEditor);
      }

      if (isEditor === true) {
        console.log("[AuthContext] User is editor");
        setUserRole("editor");
        setIsRoleLoading(false);
        fetchingRoleRef.current = false;
        return;
      }

      console.log("[AuthContext] User has no admin/editor role");
      setUserRole(null);
    } catch (err) {
      console.error("[AuthContext] Unexpected error fetching role:", err);
      if (mountedRef.current) {
        setUserRole(null);
      }
    } finally {
      if (mountedRef.current) {
        setIsRoleLoading(false);
      }
      fetchingRoleRef.current = false;
    }
  };

  useEffect(() => {
    mountedRef.current = true;
    
    // Set up auth state listener - this is the SINGLE source of truth
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        console.log("[AuthContext] Auth event:", event, "User:", newSession?.user?.email);
        
        if (!mountedRef.current) return;

        setSession(newSession);
        setUser(newSession?.user ?? null);
        setIsAuthLoading(false);

        if (newSession?.user) {
          // Set role loading IMMEDIATELY to prevent race condition before setTimeout
          setIsRoleLoading(true);
          // Defer Supabase calls with setTimeout to prevent deadlock
          setTimeout(() => {
            if (mountedRef.current) {
              fetchUserRole(newSession.user.id);
            }
          }, 0);
        } else {
          setUserRole(null);
          setIsRoleLoading(false);
        }
      }
    );

    // Check for existing session - only for initial hydration
    // The onAuthStateChange will handle the actual role fetching
    supabase.auth.getSession().then(({ data: { session: existingSession } }) => {
      console.log("[AuthContext] Initial session check:", existingSession?.user?.email ?? "no session");
      
      if (!mountedRef.current) return;
      
      // If no existing session, mark loading as complete
      if (!existingSession) {
        setIsAuthLoading(false);
        setIsRoleLoading(false);
      }
      // If there IS a session, onAuthStateChange will handle it
      // Don't duplicate the role fetch here
    });

    return () => {
      console.log("[AuthContext] Cleanup - unmounting");
      mountedRef.current = false;
      subscription.unsubscribe();
    };
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
    console.log("[AuthContext] Signing out...");
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
