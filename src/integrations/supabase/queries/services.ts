import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

export type Service = Tables<"services">;

export async function getAllServices() {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("sort_order", { ascending: true });
  
  return { data, error };
}

export async function createService(service: TablesInsert<"services">) {
  const { data, error } = await supabase
    .from("services")
    .insert([service])
    .select()
    .single();
  
  return { data, error };
}

export async function updateService(id: string, service: TablesUpdate<"services">) {
  const { data, error } = await supabase
    .from("services")
    .update(service)
    .eq("id", id)
    .select()
    .single();
  
  return { data, error };
}

export async function deleteService(id: string) {
  const { error } = await supabase
    .from("services")
    .delete()
    .eq("id", id);
  
  return { error };
}

/**
 * Get all published services, ordered by sort_order ASC, then name ASC
 */
export async function getPublishedServices() {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("status", "published")
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });
  
  return { data, error };
}

/**
 * Get single service by slug
 */
export async function getServiceBySlug(slug: string) {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  
  return { data, error };
}
