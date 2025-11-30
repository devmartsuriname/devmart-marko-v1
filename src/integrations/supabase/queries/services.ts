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
