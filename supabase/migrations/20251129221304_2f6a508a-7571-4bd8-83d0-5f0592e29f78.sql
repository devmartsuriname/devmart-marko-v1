-- Migration: Seed Default Site Settings for Devmart
-- Phase 2 MVP - Backend Integration
--
-- This migration is idempotent (safe to run multiple times).
-- Uses INSERT ... ON CONFLICT to update existing values.

INSERT INTO public.site_settings (key, value, description) VALUES
  ('site_name', 'Devmart Suriname', 'Brand name displayed across the site'),
  ('contact_email', 'info@devmart.sr', 'Primary contact email address'),
  ('contact_phone', '+597 854-1211', 'Primary phone number'),
  ('contact_address', 'Jagernath Lachmon straat nr. 152, Paramaribo, Suriname', 'Physical business address'),
  ('facebook_url', 'https://www.facebook.com/DevmartSuriname/', 'Facebook page URL'),
  ('copyright_text', '© 2025 Devmart Suriname. All Rights Reserved.', 'Footer copyright text'),
  ('seo_default_title', 'Devmart - Web Development & Digital Solutions', 'Default meta title for SEO'),
  ('seo_default_description', 'Professional web development and digital solutions in Suriname. We build custom web apps, government portals, enterprise systems, and AI tools.', 'Default meta description for SEO')
ON CONFLICT (key) 
DO UPDATE SET 
  value = EXCLUDED.value,
  description = EXCLUDED.description,
  updated_at = NOW();