/**
 * Permission Matrix for Admin Roles
 * Phase A3: Editor Permissions Structure
 */

export type AppRole = "admin" | "editor";
export type Permission = "read" | "create" | "update" | "delete";
export type Module = 
  | "dashboard"
  | "services"
  | "projects"
  | "pricing"
  | "testimonials"
  | "blog"
  | "team"
  | "faqs"
  | "contacts"
  | "settings"
  | "users";

/**
 * Permission matrix defining what each role can do
 */
export const PERMISSIONS: Record<AppRole, Record<Module, Permission[]>> = {
  admin: {
    dashboard: ["read"],
    services: ["read", "create", "update", "delete"],
    projects: ["read", "create", "update", "delete"],
    pricing: ["read", "create", "update", "delete"],
    testimonials: ["read", "create", "update", "delete"],
    blog: ["read", "create", "update", "delete"],
    team: ["read", "create", "update", "delete"],
    faqs: ["read", "create", "update", "delete"],
    contacts: ["read", "create", "update", "delete"],
    settings: ["read", "update"],
    users: ["read", "create", "update", "delete"],
  },
  editor: {
    dashboard: ["read"],
    services: [],
    projects: [],
    pricing: [],
    testimonials: ["read", "create", "update", "delete"],
    blog: ["read", "create", "update", "delete"],
    team: [],
    faqs: ["read", "create", "update", "delete"],
    contacts: ["read"],
    settings: [],
    users: [],
  },
};

/**
 * Route to module mapping
 */
const ROUTE_MODULE_MAP: Record<string, Module> = {
  "/admin": "dashboard",
  "/admin/services": "services",
  "/admin/projects": "projects",
  "/admin/pricing": "pricing",
  "/admin/testimonials": "testimonials",
  "/admin/blog": "blog",
  "/admin/team": "team",
  "/admin/faqs": "faqs",
  "/admin/contacts": "contacts",
  "/admin/settings": "settings",
  "/admin/users": "users",
};

/**
 * Check if a role has a specific permission on a module
 */
export function hasPermission(
  role: AppRole | null,
  module: Module,
  action: Permission
): boolean {
  if (!role) return false;
  const permissions = PERMISSIONS[role]?.[module] || [];
  return permissions.includes(action);
}

/**
 * Check if a role can access a specific route
 */
export function canAccessRoute(role: AppRole | null, route: string): boolean {
  if (!role) return false;
  
  // Find the matching module for the route
  const module = ROUTE_MODULE_MAP[route];
  if (!module) return false;
  
  // Check if the role has at least read permission
  return hasPermission(role, module, "read");
}

/**
 * Get all accessible routes for a role
 */
export function getAccessibleRoutes(role: AppRole | null): string[] {
  if (!role) return [];
  
  return Object.entries(ROUTE_MODULE_MAP)
    .filter(([_, module]) => hasPermission(role, module, "read"))
    .map(([route]) => route);
}

/**
 * Get modules a role can access
 */
export function getAccessibleModules(role: AppRole | null): Module[] {
  if (!role) return [];
  
  return Object.entries(PERMISSIONS[role] || {})
    .filter(([_, permissions]) => permissions.length > 0)
    .map(([module]) => module as Module);
}
