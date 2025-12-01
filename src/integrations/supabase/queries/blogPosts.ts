import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

export type BlogPost = Tables<"blog_posts">;

/**
 * Get all blog posts, ordered by published_at DESC, then created_at DESC
 */
export async function getAllBlogPosts() {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false });
  return { data, error };
}

/**
 * Get single blog post by ID
 */
export async function getBlogPostById(id: string) {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  return { data, error };
}

/**
 * Create new blog post
 */
export async function createBlogPost(post: TablesInsert<"blog_posts">) {
  const { data, error } = await supabase
    .from("blog_posts")
    .insert([post])
    .select()
    .single();
  return { data, error };
}

/**
 * Update existing blog post
 */
export async function updateBlogPost(id: string, post: TablesUpdate<"blog_posts">) {
  const { data, error } = await supabase
    .from("blog_posts")
    .update(post)
    .eq("id", id)
    .select()
    .single();
  return { data, error };
}

/**
 * Delete blog post
 */
export async function deleteBlogPost(id: string) {
  const { error } = await supabase
    .from("blog_posts")
    .delete()
    .eq("id", id);
  return { error };
}

/**
 * Get published blog posts for public display
 */
export async function getPublishedBlogPosts() {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("title", { ascending: true });
  return { data, error };
}

/**
 * Get single published blog post by slug
 */
export async function getBlogPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();
  return { data, error };
}
