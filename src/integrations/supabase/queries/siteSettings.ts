import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type SiteSetting = Tables<"site_settings">;
export type SiteSettingsMap = Record<string, string>;

/**
 * Fetch all site settings and return as key-value map
 */
export async function getAllSiteSettings() {
  const { data, error } = await supabase
    .from("site_settings")
    .select("*")
    .order("key", { ascending: true });

  if (error) {
    return { data: null, error };
  }

  // Convert array to key-value map
  const settingsMap: SiteSettingsMap = {};
  data?.forEach((setting) => {
    settingsMap[setting.key] = setting.value;
  });

  return { data: settingsMap, error: null };
}

/**
 * Fetch a single setting by key
 */
export async function getSiteSettingByKey(key: string) {
  const { data, error } = await supabase
    .from("site_settings")
    .select("*")
    .eq("key", key)
    .maybeSingle();

  return { data, error };
}

/**
 * Update a single setting by key
 */
export async function updateSiteSetting(key: string, value: string) {
  const { data, error } = await supabase
    .from("site_settings")
    .update({ value })
    .eq("key", key)
    .select()
    .single();

  return { data, error };
}

/**
 * Batch update multiple settings
 */
export async function updateSiteSettings(settings: Record<string, string>) {
  const updates = Object.entries(settings).map(([key, value]) =>
    supabase
      .from("site_settings")
      .update({ value })
      .eq("key", key)
  );

  const results = await Promise.all(updates);
  
  // Check if any update failed
  const errors = results.filter(result => result.error);
  if (errors.length > 0) {
    return { data: null, error: errors[0].error };
  }

  return { data: true, error: null };
}
