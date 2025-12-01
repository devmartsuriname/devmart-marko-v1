import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

export type FaqItem = Tables<"faq_items">;

export async function getAllFaqItems() {
  const { data, error } = await supabase
    .from("faq_items")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("question", { ascending: true });

  return { data, error };
}

export async function getFaqItemById(id: string) {
  const { data, error } = await supabase
    .from("faq_items")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  return { data, error };
}

export async function createFaqItem(payload: TablesInsert<"faq_items">) {
  const { data, error } = await supabase
    .from("faq_items")
    .insert([payload])
    .select()
    .single();

  return { data, error };
}

export async function updateFaqItem(
  id: string,
  payload: TablesUpdate<"faq_items">
) {
  const { data, error } = await supabase
    .from("faq_items")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  return { data, error };
}

export async function deleteFaqItem(id: string) {
  const { error } = await supabase
    .from("faq_items")
    .delete()
    .eq("id", id);

  return { error };
}
