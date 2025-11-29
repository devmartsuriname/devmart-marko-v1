import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesInsert } from "@/integrations/supabase/types";

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
