import { ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";
import { hasPermission, Module, Permission, AppRole } from "@/lib/permissions";

interface RequirePermissionProps {
  children: ReactNode;
  module: Module;
  action?: Permission;
  fallback?: ReactNode;
}

/**
 * Component that conditionally renders children based on user permissions.
 * Use this to hide UI elements that the user doesn't have access to.
 */
export const RequirePermission = ({
  children,
  module,
  action = "read",
  fallback = null,
}: RequirePermissionProps) => {
  const { userRole } = useAuth();

  if (!hasPermission(userRole as AppRole, module, action)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};
