import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

export type Testimonial = Tables<"testimonials">;

export async function getAllTestimonials() {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("author_name", { ascending: true });

  return { data, error };
}

export async function getTestimonialById(id: string) {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  return { data, error };
}

export async function createTestimonial(payload: TablesInsert<"testimonials">) {
  const { data, error } = await supabase
    .from("testimonials")
    .insert([payload])
    .select()
    .single();

  return { data, error };
}

export async function updateTestimonial(
  id: string,
  payload: TablesUpdate<"testimonials">
) {
  const { data, error } = await supabase
    .from("testimonials")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  return { data, error };
}

export async function deleteTestimonial(id: string) {
  const { error } = await supabase
    .from("testimonials")
    .delete()
    .eq("id", id);

  return { error };
}
