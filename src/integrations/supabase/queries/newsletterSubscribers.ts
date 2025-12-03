import { supabase } from "@/integrations/supabase/client";

export interface NewsletterSubscriber {
  id: string;
  email: string;
  status: string;
  subscribed_at: string;
  unsubscribed_at: string | null;
  created_at: string;
}

export type NewsletterSubscriberUpdate = {
  status?: string;
  unsubscribed_at?: string | null;
};

export async function getAllSubscribers() {
  const { data, error } = await supabase
    .from("newsletter_subscribers")
    .select("*")
    .order("subscribed_at", { ascending: false });

  return { data: data as NewsletterSubscriber[] | null, error };
}

export async function subscribeToNewsletter(email: string) {
  const { error } = await supabase
    .from("newsletter_subscribers")
    .insert([{ email }]);

  return { error };
}

export async function updateSubscriberStatus(id: string, status: string) {
  const updates: NewsletterSubscriberUpdate = { status };
  if (status === "unsubscribed") {
    updates.unsubscribed_at = new Date().toISOString();
  }

  const { data, error } = await supabase
    .from("newsletter_subscribers")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  return { data: data as NewsletterSubscriber | null, error };
}

export async function deleteSubscriber(id: string) {
  const { error } = await supabase
    .from("newsletter_subscribers")
    .delete()
    .eq("id", id);

  return { error };
}
