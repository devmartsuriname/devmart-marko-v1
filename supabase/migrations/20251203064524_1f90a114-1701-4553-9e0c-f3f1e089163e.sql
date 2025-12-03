-- Seed example data for V2 modules (Phase D)
-- This migration is idempotent using ON CONFLICT DO NOTHING

-- Partner Logos seed data
INSERT INTO public.partner_logos (name, logo_url, website_url, sort_order, status) VALUES
  ('TechNova Labs', '/marko-digital-marketing-agency-html/image/client-1.png', 'https://technovalabs.com', 1, 'active'),
  ('Global Finance Group', '/marko-digital-marketing-agency-html/image/client-2.png', 'https://globalfinancegroup.com', 2, 'active'),
  ('Suriname Digital Council', '/marko-digital-marketing-agency-html/image/client-3.png', 'https://sdc.sr', 3, 'inactive')
ON CONFLICT DO NOTHING;

-- Newsletter Subscribers seed data
INSERT INTO public.newsletter_subscribers (email, status, subscribed_at, unsubscribed_at) VALUES
  ('test@example.com', 'subscribed', now(), NULL),
  ('client@company.com', 'subscribed', now() - interval '7 days', NULL),
  ('info@demo.org', 'unsubscribed', now() - interval '30 days', now() - interval '5 days')
ON CONFLICT (email) DO NOTHING;

-- Homepage Blocks seed data (backend-only, not yet wired to frontend)
INSERT INTO public.homepage_blocks (key, block_type, title, subtitle, content, image_url, button_label, button_url, sort_order, status) VALUES
  ('hero', 'hero', 'Transforming Ideas Into Digital Reality', 'We build custom web applications, government portals, and AI-powered tools that drive business growth.', 'Partner with Devmart to create exceptional digital experiences that set you apart from the competition.', '/marko-digital-marketing-agency-html/image/Photo-1.jpg', 'Get Started', '/contact', 1, 'active'),
  ('stats', 'stat-grid', 'Our Impact in Numbers', 'Delivering results that matter', NULL, NULL, NULL, NULL, 2, 'active'),
  ('cta', 'cta', 'Ready to Start Your Project?', 'Let''s discuss how we can help you achieve your digital goals.', 'Contact our team today for a free consultation and project estimate.', NULL, 'Contact Us', '/contact', 3, 'active')
ON CONFLICT (key) DO NOTHING;