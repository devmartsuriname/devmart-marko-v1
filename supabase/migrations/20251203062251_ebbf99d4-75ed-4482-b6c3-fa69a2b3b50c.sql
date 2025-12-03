-- Phase D: Deferred Modules (V2 Backend)
-- Create partner_logos, newsletter_subscribers, and homepage_blocks tables

-- =====================================================
-- D1: PARTNER LOGOS TABLE
-- =====================================================
CREATE TABLE public.partner_logos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  logo_url TEXT NOT NULL,
  website_url TEXT,
  sort_order INTEGER NOT NULL DEFAULT 1,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.partner_logos ENABLE ROW LEVEL SECURITY;

-- Public can view active partner logos
CREATE POLICY "Public can view active partner logos"
ON public.partner_logos
FOR SELECT
USING (status = 'active');

-- Admins can view all partner logos
CREATE POLICY "Admins can view all partner logos"
ON public.partner_logos
FOR SELECT
USING (has_role(auth.uid(), 'admin'));

-- Admins can create partner logos
CREATE POLICY "Admins can create partner logos"
ON public.partner_logos
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'));

-- Admins can update partner logos
CREATE POLICY "Admins can update partner logos"
ON public.partner_logos
FOR UPDATE
USING (has_role(auth.uid(), 'admin'))
WITH CHECK (has_role(auth.uid(), 'admin'));

-- Admins can delete partner logos
CREATE POLICY "Admins can delete partner logos"
ON public.partner_logos
FOR DELETE
USING (has_role(auth.uid(), 'admin'));

-- Trigger for updated_at
CREATE TRIGGER update_partner_logos_updated_at
BEFORE UPDATE ON public.partner_logos
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- =====================================================
-- D2: NEWSLETTER SUBSCRIBERS TABLE
-- =====================================================
CREATE TABLE public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'subscribed' CHECK (status IN ('subscribed', 'unsubscribed')),
  subscribed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  unsubscribed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create unique index on email
CREATE UNIQUE INDEX idx_newsletter_subscribers_email ON public.newsletter_subscribers(email);

-- Enable RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Public can subscribe (INSERT only)
CREATE POLICY "Public can subscribe to newsletter"
ON public.newsletter_subscribers
FOR INSERT
WITH CHECK (true);

-- Admins can view all subscribers
CREATE POLICY "Admins can view all subscribers"
ON public.newsletter_subscribers
FOR SELECT
USING (has_role(auth.uid(), 'admin'));

-- Admins can update subscribers
CREATE POLICY "Admins can update subscribers"
ON public.newsletter_subscribers
FOR UPDATE
USING (has_role(auth.uid(), 'admin'))
WITH CHECK (has_role(auth.uid(), 'admin'));

-- Admins can delete subscribers
CREATE POLICY "Admins can delete subscribers"
ON public.newsletter_subscribers
FOR DELETE
USING (has_role(auth.uid(), 'admin'));

-- =====================================================
-- D3: HOMEPAGE BLOCKS TABLE
-- =====================================================
CREATE TABLE public.homepage_blocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT NOT NULL UNIQUE,
  block_type TEXT NOT NULL,
  title TEXT,
  subtitle TEXT,
  content TEXT,
  image_url TEXT,
  button_label TEXT,
  button_url TEXT,
  sort_order INTEGER NOT NULL DEFAULT 1,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create unique index on key
CREATE UNIQUE INDEX idx_homepage_blocks_key ON public.homepage_blocks(key);

-- Enable RLS
ALTER TABLE public.homepage_blocks ENABLE ROW LEVEL SECURITY;

-- Public can view active homepage blocks
CREATE POLICY "Public can view active homepage blocks"
ON public.homepage_blocks
FOR SELECT
USING (status = 'active');

-- Admins can view all homepage blocks
CREATE POLICY "Admins can view all homepage blocks"
ON public.homepage_blocks
FOR SELECT
USING (has_role(auth.uid(), 'admin'));

-- Admins can create homepage blocks
CREATE POLICY "Admins can create homepage blocks"
ON public.homepage_blocks
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'));

-- Admins can update homepage blocks
CREATE POLICY "Admins can update homepage blocks"
ON public.homepage_blocks
FOR UPDATE
USING (has_role(auth.uid(), 'admin'))
WITH CHECK (has_role(auth.uid(), 'admin'));

-- Admins can delete homepage blocks
CREATE POLICY "Admins can delete homepage blocks"
ON public.homepage_blocks
FOR DELETE
USING (has_role(auth.uid(), 'admin'));

-- Trigger for updated_at
CREATE TRIGGER update_homepage_blocks_updated_at
BEFORE UPDATE ON public.homepage_blocks
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Force PostgREST schema reload
NOTIFY pgrst, 'reload schema';