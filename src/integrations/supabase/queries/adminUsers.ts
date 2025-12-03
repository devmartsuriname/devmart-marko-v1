import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type AdminUser = Tables<"admin_users">;

export interface AdminUserWithRole extends AdminUser {
  role: "admin" | "editor" | null;
}

/**
 * Get all admin users with their roles
 */
export async function getAllAdminUsers(): Promise<{ data: AdminUserWithRole[] | null; error: Error | null }> {
  // First get all admin users
  const { data: adminUsers, error: usersError } = await supabase
    .from("admin_users")
    .select("*")
    .order("full_name", { ascending: true });

  if (usersError) {
    return { data: null, error: usersError };
  }

  // Then get all user roles
  const { data: userRoles, error: rolesError } = await supabase
    .from("user_roles")
    .select("user_id, role");

  if (rolesError) {
    return { data: null, error: rolesError };
  }

  // Map roles to users
  const usersWithRoles: AdminUserWithRole[] = (adminUsers || []).map((user) => {
    const roleEntry = userRoles?.find((r) => r.user_id === user.id);
    return {
      ...user,
      role: roleEntry?.role || null,
    };
  });

  return { data: usersWithRoles, error: null };
}

/**
 * Get a single admin user by ID
 */
export async function getAdminUserById(id: string) {
  const { data, error } = await supabase
    .from("admin_users")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  return { data, error };
}

/**
 * Update admin user profile
 */
export async function updateAdminUser(id: string, updates: Partial<AdminUser>) {
  const { data, error } = await supabase
    .from("admin_users")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  return { data, error };
}

/**
 * Update user's role
 */
export async function updateUserRole(userId: string, newRole: "admin" | "editor") {
  // First, delete existing roles for this user
  const { error: deleteError } = await supabase
    .from("user_roles")
    .delete()
    .eq("user_id", userId);

  if (deleteError) {
    return { data: null, error: deleteError };
  }

  // Then insert the new role
  const { data, error } = await supabase
    .from("user_roles")
    .insert({ user_id: userId, role: newRole })
    .select()
    .single();

  return { data, error };
}
