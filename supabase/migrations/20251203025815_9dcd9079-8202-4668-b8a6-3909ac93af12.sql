-- Phase A2: Harden RLS Policies for Admin-Only Write Operations
-- This migration enforces that only admins can create, update, or delete content

-- ========================================
-- SERVICES TABLE
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can create services" ON services;
DROP POLICY IF EXISTS "Authenticated users can update services" ON services;
DROP POLICY IF EXISTS "Authenticated users can delete services" ON services;

CREATE POLICY "Admins can create services" ON services
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update services" ON services
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete services" ON services
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ========================================
-- CASE_STUDIES TABLE
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can create case studies" ON case_studies;
DROP POLICY IF EXISTS "Authenticated users can update case studies" ON case_studies;
DROP POLICY IF EXISTS "Authenticated users can delete case studies" ON case_studies;

CREATE POLICY "Admins can create case studies" ON case_studies
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update case studies" ON case_studies
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete case studies" ON case_studies
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ========================================
-- PRICING_PLANS TABLE
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can create pricing plans" ON pricing_plans;
DROP POLICY IF EXISTS "Authenticated users can update pricing plans" ON pricing_plans;
DROP POLICY IF EXISTS "Authenticated users can delete pricing plans" ON pricing_plans;

CREATE POLICY "Admins can create pricing plans" ON pricing_plans
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update pricing plans" ON pricing_plans
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete pricing plans" ON pricing_plans
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ========================================
-- TEAM_MEMBERS TABLE
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can create team members" ON team_members;
DROP POLICY IF EXISTS "Authenticated users can update team members" ON team_members;
DROP POLICY IF EXISTS "Authenticated users can delete team members" ON team_members;

CREATE POLICY "Admins can create team members" ON team_members
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update team members" ON team_members
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete team members" ON team_members
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ========================================
-- SITE_SETTINGS TABLE
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can modify site settings" ON site_settings;
DROP POLICY IF EXISTS "Authenticated users can update site settings" ON site_settings;
DROP POLICY IF EXISTS "Authenticated users can delete site settings" ON site_settings;

CREATE POLICY "Admins can create site settings" ON site_settings
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update site settings" ON site_settings
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete site settings" ON site_settings
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ========================================
-- CONTACT_SUBMISSIONS TABLE (special handling)
-- Public can INSERT, only admins can SELECT/UPDATE/DELETE
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can view contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can delete contact submissions" ON contact_submissions;

CREATE POLICY "Admins can view contact submissions" ON contact_submissions
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Admins can update contact submissions" ON contact_submissions
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete contact submissions" ON contact_submissions
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ========================================
-- BLOG_POSTS TABLE (admins + editors)
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can create blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can delete blog posts" ON blog_posts;

CREATE POLICY "Admins and editors can create blog posts" ON blog_posts
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Admins and editors can update blog posts" ON blog_posts
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'))
  WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Admins and editors can delete blog posts" ON blog_posts
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

-- ========================================
-- TESTIMONIALS TABLE (admins + editors)
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can create testimonials" ON testimonials;
DROP POLICY IF EXISTS "Authenticated users can update testimonials" ON testimonials;
DROP POLICY IF EXISTS "Authenticated users can delete testimonials" ON testimonials;

CREATE POLICY "Admins and editors can create testimonials" ON testimonials
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Admins and editors can update testimonials" ON testimonials
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'))
  WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Admins and editors can delete testimonials" ON testimonials
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

-- ========================================
-- FAQ_ITEMS TABLE (admins + editors)
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can create FAQ items" ON faq_items;
DROP POLICY IF EXISTS "Authenticated users can update FAQ items" ON faq_items;
DROP POLICY IF EXISTS "Authenticated users can delete FAQ items" ON faq_items;

CREATE POLICY "Admins and editors can create FAQ items" ON faq_items
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Admins and editors can update FAQ items" ON faq_items
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'))
  WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Admins and editors can delete FAQ items" ON faq_items
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

-- ========================================
-- Update SELECT policies to require role for viewing ALL items (admin area)
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can view all services" ON services;
DROP POLICY IF EXISTS "Authenticated users can view all case studies" ON case_studies;
DROP POLICY IF EXISTS "Authenticated users can view all pricing plans" ON pricing_plans;
DROP POLICY IF EXISTS "Authenticated users can view all testimonials" ON testimonials;
DROP POLICY IF EXISTS "Authenticated users can view all blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can view all team members" ON team_members;
DROP POLICY IF EXISTS "Authenticated users can view all FAQ items" ON faq_items;

CREATE POLICY "Admins can view all services" ON services
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view all case studies" ON case_studies
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view all pricing plans" ON pricing_plans
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins and editors can view all testimonials" ON testimonials
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Admins and editors can view all blog posts" ON blog_posts
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Admins can view all team members" ON team_members
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins and editors can view all FAQ items" ON faq_items
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

-- Force PostgREST schema reload
NOTIFY pgrst, 'reload schema';