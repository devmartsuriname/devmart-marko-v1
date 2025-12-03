import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

export type AppRole = Database["public"]["Enums"]["app_role"];

/**
 * Check if a user has a specific role using the has_role RPC
 */
export async function checkUserRole(userId: string, role: AppRole): Promise<boolean> {
  const { data, error } = await supabase.rpc("has_role", {
    _user_id: userId,
    _role: role,
  });

  if (error) {
    console.error("Error checking user role:", error);
    return false;
  }

  return data === true;
}

/**
 * Get all roles for a user
 */
export async function getUserRoles(userId: string): Promise<AppRole[]> {
  const { data, error } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", userId);

  if (error) {
    console.error("Error fetching user roles:", error);
    return [];
  }

  return data?.map((r) => r.role) || [];
}

/**
 * Assign a role to a user (admin only)
 */
export async function assignUserRole(userId: string, role: AppRole) {
  const { data, error } = await supabase
    .from("user_roles")
    .insert({ user_id: userId, role })
    .select()
    .single();

  return { data, error };
}

/**
 * Remove a role from a user (admin only)
 */
export async function removeUserRole(userId: string, role: AppRole) {
  const { error } = await supabase
    .from("user_roles")
    .delete()
    .eq("user_id", userId)
    .eq("role", role);

  return { error };
}

/**
 * Update a user's role (remove old, add new)
 */
export async function updateUserRole(userId: string, oldRole: AppRole, newRole: AppRole) {
  // First remove the old role
  const { error: removeError } = await supabase
    .from("user_roles")
    .delete()
    .eq("user_id", userId)
    .eq("role", oldRole);

  if (removeError) {
    return { error: removeError };
  }

  // Then add the new role
  const { data, error } = await supabase
    .from("user_roles")
    .insert({ user_id: userId, role: newRole })
    .select()
    .single();

  return { data, error };
}
