import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import "@/styles/admin.css";

export const RequireAuth = () => {
  const { user, isLoading, isAdmin, isEditor, userRole } = useAuth();

  // Debug logging to trace auth state during hot reloads
  console.log("[RequireAuth] State:", { 
    userEmail: user?.email ?? null, 
    isLoading, 
    isAdmin, 
    isEditor,
    userRole
  });

  if (isLoading) {
    console.log("[RequireAuth] Auth loading - showing spinner");
    return (
      <div className="admin-loading-fullscreen">
        <div className="admin-loading-content">
          <div className="admin-loading-spinner" />
          <span className="admin-loading-text">Checking session...</span>
        </div>
      </div>
    );
  }

  // Not logged in - redirect to login
  if (!user) {
    console.log("[RequireAuth] No user found - redirecting to login");
    return <Navigate to="/auth/login" replace />;
  }

  // Logged in but no admin/editor role - redirect to unauthorized
  if (!isAdmin && !isEditor) {
    console.log("[RequireAuth] User has no admin/editor role - redirecting to unauthorized");
    return <Navigate to="/unauthorized" replace />;
  }

  console.log("[RequireAuth] Access granted for:", user.email);
  return <Outlet />;
};
