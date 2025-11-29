-- Migration: RLS Policies (Development-Friendly for Phase 2 MVP)
-- Phase 2 MVP - Backend Integration
--
-- NOTE: These policies are intentionally permissive for development/testing.
-- In a future "Security Hardening" phase, we will tighten access controls
-- to enforce strict admin-only write access using has_role(auth.uid(), 'admin').

-- ============================================================================
-- SERVICES: RLS POLICIES (Dev-Friendly)
-- ============================================================================

CREATE POLICY "Authenticated users can view all services"
ON public.services
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can create services"
ON public.services
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update services"
ON public.services
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete services"
ON public.services
FOR DELETE
TO authenticated
USING (true);

-- ============================================================================
-- BLOG POSTS: RLS POLICIES (Dev-Friendly)
-- ============================================================================

CREATE POLICY "Authenticated users can view all blog posts"
ON public.blog_posts
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can create blog posts"
ON public.blog_posts
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
ON public.blog_posts
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
ON public.blog_posts
FOR DELETE
TO authenticated
USING (true);

-- ============================================================================
-- CONTACT SUBMISSIONS: RLS POLICIES (Dev-Friendly)
-- ============================================================================

CREATE POLICY "Public can submit contact forms"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can update contact submissions"
ON public.contact_submissions
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete contact submissions"
ON public.contact_submissions
FOR DELETE
TO authenticated
USING (true);

-- ============================================================================
-- SITE SETTINGS: RLS POLICIES (Dev-Friendly)
-- ============================================================================

CREATE POLICY "Public can view site settings"
ON public.site_settings
FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can update site settings"
ON public.site_settings
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can modify site settings"
ON public.site_settings
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete site settings"
ON public.site_settings
FOR DELETE
TO authenticated
USING (true);