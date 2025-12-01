-- Phase 5H: Add missing settings keys for tagline and social links
INSERT INTO public.site_settings (key, value, description)
VALUES
  ('tagline', 'Building Digital Solutions for Suriname', 'Company tagline'),
  ('linkedin_url', '', 'LinkedIn company page URL'),
  ('instagram_url', '', 'Instagram profile URL'),
  ('twitter_url', '', 'Twitter/X profile URL'),
  ('github_url', '', 'GitHub organization URL')
ON CONFLICT (key) DO NOTHING;