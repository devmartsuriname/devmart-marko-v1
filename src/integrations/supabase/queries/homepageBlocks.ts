import { supabase } from "@/integrations/supabase/client";

export interface HomepageBlock {
  id: string;
  key: string;
  block_type: string;
  title: string | null;
  subtitle: string | null;
  content: string | null;
  image_url: string | null;
  button_label: string | null;
  button_url: string | null;
  sort_order: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export type HomepageBlockInsert = Omit<HomepageBlock, "id" | "created_at" | "updated_at">;
export type HomepageBlockUpdate = Partial<HomepageBlockInsert>;

export async function getAllHomepageBlocks() {
  const { data, error } = await supabase
    .from("homepage_blocks")
    .select("*")
    .order("sort_order", { ascending: true });

  return { data: data as HomepageBlock[] | null, error };
}

export async function getActiveHomepageBlocks() {
  const { data, error } = await supabase
    .from("homepage_blocks")
    .select("*")
    .eq("status", "active")
    .order("sort_order", { ascending: true });

  return { data: data as HomepageBlock[] | null, error };
}

export async function getHomepageBlockByKey(key: string) {
  const { data, error } = await supabase
    .from("homepage_blocks")
    .select("*")
    .eq("key", key)
    .eq("status", "active")
    .maybeSingle();

  return { data: data as HomepageBlock | null, error };
}

export async function createHomepageBlock(payload: HomepageBlockInsert) {
  const { data, error } = await supabase
    .from("homepage_blocks")
    .insert([payload])
    .select()
    .single();

  return { data: data as HomepageBlock | null, error };
}

export async function updateHomepageBlock(id: string, payload: HomepageBlockUpdate) {
  const { data, error } = await supabase
    .from("homepage_blocks")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  return { data: data as HomepageBlock | null, error };
}

export async function deleteHomepageBlock(id: string) {
  const { error } = await supabase
    .from("homepage_blocks")
    .delete()
    .eq("id", id);

  return { error };
}
