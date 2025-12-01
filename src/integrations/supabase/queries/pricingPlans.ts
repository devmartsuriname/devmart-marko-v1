import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type PricingPlan = Tables<"pricing_plans">;

export const getAllPricingPlans = async () => {
  const { data, error } = await supabase
    .from("pricing_plans")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });

  return { data, error };
};

export const getPricingPlanById = async (id: string) => {
  const { data, error } = await supabase
    .from("pricing_plans")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  return { data, error };
};

export const createPricingPlan = async (
  payload: Omit<PricingPlan, "id" | "created_at" | "updated_at">
) => {
  const { data, error } = await supabase
    .from("pricing_plans")
    .insert([payload])
    .select()
    .single();

  return { data, error };
};

export const updatePricingPlan = async (
  id: string,
  payload: Partial<Omit<PricingPlan, "id" | "created_at" | "updated_at">>
) => {
  const { data, error } = await supabase
    .from("pricing_plans")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  return { data, error };
};

export const deletePricingPlan = async (id: string) => {
  const { error } = await supabase
    .from("pricing_plans")
    .delete()
    .eq("id", id);

  return { error };
};

export const getPublishedPricingPlans = async () => {
  const { data, error } = await supabase
    .from("pricing_plans")
    .select("*")
    .eq("status", "published")
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });

  return { data, error };
};
