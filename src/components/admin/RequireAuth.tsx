import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import "@/styles/admin.css";

export const RequireAuth = () => {
  const { user, isLoading, isAdmin, isEditor } = useAuth();

  if (isLoading) {
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
    return <Navigate to="/auth/login" replace />;
  }

  // Logged in but no admin/editor role - redirect to unauthorized
  if (!isAdmin && !isEditor) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};
