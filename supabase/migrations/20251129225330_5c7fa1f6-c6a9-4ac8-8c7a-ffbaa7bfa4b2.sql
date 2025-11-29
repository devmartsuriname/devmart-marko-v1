-- Seed core Devmart services from existing frontend content
-- This migration is idempotent and can be run multiple times

INSERT INTO public.services (name, slug, description, short_description, icon, status, featured, sort_order, meta_title, meta_description)
VALUES 
  ('Custom Web Applications', 'custom-web-applications', 
   'Build powerful, scalable web applications tailored to your business needs with modern tech stacks.', 
   'Scalable web applications with modern tech stacks.',
   '/marko-digital-marketing-agency-html/image/Icon-7.png', 
   'published', true, 1, 
   'Custom Web Applications | Devmart', 
   'Build powerful, scalable web applications tailored to your business needs.'),
   
  ('Government Portals', 'government-portals', 
   'Secure, accessible government portals designed for efficient public service delivery and digital transformation.', 
   'Secure government portals for digital transformation.',
   '/marko-digital-marketing-agency-html/image/digital-marketing-icons-F4LJ4W8.png', 
   'published', true, 2, 
   'Government Portals | Devmart', 
   'Secure, accessible government portals for efficient public service delivery.'),
   
  ('Enterprise Systems', 'enterprise-systems', 
   'Robust enterprise solutions that streamline operations, improve efficiency, and scale with your organization.', 
   'Enterprise solutions that streamline operations.',
   '/marko-digital-marketing-agency-html/image/Icon-8.png', 
   'published', true, 3, 
   'Enterprise Systems | Devmart', 
   'Robust enterprise solutions that improve efficiency and scale.'),
   
  ('AI-Powered Tools', 'ai-powered-tools', 
   'Intelligent automation and AI solutions that transform how your organization processes data and serves users.', 
   'AI solutions that transform data processing.',
   '/marko-digital-marketing-agency-html/image/Icon-5.png', 
   'published', true, 4, 
   'AI-Powered Tools | Devmart', 
   'Intelligent automation and AI solutions for your organization.'),
   
  ('UX/UI Design', 'ux-ui-design', 
   'Beautiful, intuitive interfaces that prioritize user experience and drive engagement across all devices.', 
   'Intuitive interfaces that drive engagement.',
   '/marko-digital-marketing-agency-html/image/Icon-6.png', 
   'published', false, 5, 
   'UX/UI Design | Devmart', 
   'Beautiful, intuitive interfaces that prioritize user experience.'),
   
  ('Maintenance & Support', 'maintenance-support', 
   'Reliable ongoing maintenance and technical support to keep your digital systems running smoothly 24/7.', 
   '24/7 maintenance and technical support.',
   '/marko-digital-marketing-agency-html/image/Icon-4.png', 
   'published', false, 6, 
   'Maintenance & Support | Devmart', 
   'Reliable ongoing maintenance and technical support for your systems.')

ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  short_description = EXCLUDED.short_description,
  icon = EXCLUDED.icon,
  status = EXCLUDED.status,
  featured = EXCLUDED.featured,
  sort_order = EXCLUDED.sort_order,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = NOW();