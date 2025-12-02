import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const RequireAuth = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="admin-loading-state" style={{ minHeight: "100vh" }}>
        Checking session...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};
