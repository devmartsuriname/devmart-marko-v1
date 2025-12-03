import { supabase } from "@/integrations/supabase/client";

export interface PartnerLogo {
  id: string;
  name: string;
  logo_url: string;
  website_url: string | null;
  sort_order: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export type PartnerLogoInsert = Omit<PartnerLogo, "id" | "created_at" | "updated_at">;
export type PartnerLogoUpdate = Partial<PartnerLogoInsert>;

export async function getAllPartnerLogos() {
  const { data, error } = await supabase
    .from("partner_logos")
    .select("*")
    .order("sort_order", { ascending: true });

  return { data: data as PartnerLogo[] | null, error };
}

export async function getActivePartnerLogos() {
  const { data, error } = await supabase
    .from("partner_logos")
    .select("*")
    .eq("status", "active")
    .order("sort_order", { ascending: true });

  return { data: data as PartnerLogo[] | null, error };
}

export async function createPartnerLogo(payload: PartnerLogoInsert) {
  const { data, error } = await supabase
    .from("partner_logos")
    .insert([payload])
    .select()
    .single();

  return { data: data as PartnerLogo | null, error };
}

export async function updatePartnerLogo(id: string, payload: PartnerLogoUpdate) {
  const { data, error } = await supabase
    .from("partner_logos")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  return { data: data as PartnerLogo | null, error };
}

export async function deletePartnerLogo(id: string) {
  const { error } = await supabase
    .from("partner_logos")
    .delete()
    .eq("id", id);

  return { error };
}
