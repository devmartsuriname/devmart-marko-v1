import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

export type ContactSubmission = Tables<"contact_submissions">;

/**
 * Get all contact submissions, ordered by created_at DESC
 */
export async function getAllContactSubmissions() {
  const { data, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });
  return { data, error };
}

/**
 * Get single contact submission by ID
 */
export async function getContactSubmissionById(id: string) {
  const { data, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  return { data, error };
}

/**
 * Create new contact submission
 */
export async function createContactSubmission(submission: TablesInsert<"contact_submissions">) {
  const { error } = await supabase
    .from("contact_submissions")
    .insert([submission]);
  return { data: null, error };
}

/**
 * Update existing contact submission
 */
export async function updateContactSubmission(id: string, submission: TablesUpdate<"contact_submissions">) {
  const { data, error } = await supabase
    .from("contact_submissions")
    .update(submission)
    .eq("id", id)
    .select()
    .single();
  return { data, error };
}

/**
 * Delete contact submission
 */
export async function deleteContactSubmission(id: string) {
  const { error } = await supabase
    .from("contact_submissions")
    .delete()
    .eq("id", id);
  return { error };
}
