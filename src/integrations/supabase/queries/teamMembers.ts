import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

export type TeamMember = Tables<"team_members">;

export async function getAllTeamMembers() {
  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("full_name", { ascending: true });

  return { data, error };
}

export async function getTeamMemberById(id: string) {
  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  return { data, error };
}

export async function createTeamMember(payload: TablesInsert<"team_members">) {
  const { data, error } = await supabase
    .from("team_members")
    .insert([payload])
    .select()
    .single();

  return { data, error };
}

export async function updateTeamMember(
  id: string,
  payload: TablesUpdate<"team_members">
) {
  const { data, error } = await supabase
    .from("team_members")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  return { data, error };
}

export async function deleteTeamMember(id: string) {
  const { error } = await supabase
    .from("team_members")
    .delete()
    .eq("id", id);

  return { error };
}
