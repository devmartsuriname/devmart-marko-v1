import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

export type CaseStudy = Tables<"case_studies">;

export async function getAllCaseStudies() {
  const { data, error } = await supabase
    .from("case_studies")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("title", { ascending: true });
  
  return { data, error };
}

export async function getCaseStudyById(id: string) {
  const { data, error } = await supabase
    .from("case_studies")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  
  return { data, error };
}

export async function createCaseStudy(payload: TablesInsert<"case_studies">) {
  const { data, error } = await supabase
    .from("case_studies")
    .insert([payload])
    .select()
    .single();
  
  return { data, error };
}

export async function updateCaseStudy(id: string, payload: TablesUpdate<"case_studies">) {
  const { data, error } = await supabase
    .from("case_studies")
    .update(payload)
    .eq("id", id)
    .select()
    .single();
  
  return { data, error };
}

export async function deleteCaseStudy(id: string) {
  const { error } = await supabase
    .from("case_studies")
    .delete()
    .eq("id", id);
  
  return { error };
}

export async function getPublishedCaseStudies() {
  const { data, error } = await supabase
    .from("case_studies")
    .select("*")
    .eq("status", "published")
    .order("sort_order", { ascending: true })
    .order("title", { ascending: true });
  
  return { data, error };
}

export async function getCaseStudyBySlug(slug: string) {
  const { data, error } = await supabase
    .from("case_studies")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();
  
  return { data, error };
}
