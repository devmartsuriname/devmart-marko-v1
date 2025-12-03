import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const RequireAuth = () => {
  const { user, isLoading, isAdmin, isEditor, userRole } = useAuth();

  if (isLoading) {
    return (
      <div className="admin-loading-state" style={{ minHeight: "100vh" }}>
        Checking session...
      </div>
    );
  }

  // Not logged in - redirect to login
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  // Logged in but no admin/editor role - redirect to unauthorized
  if (!isAdmin && !isEditor) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};
