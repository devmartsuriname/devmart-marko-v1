-- Create pricing_plans table
CREATE TABLE public.pricing_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  billing_period billing_period NOT NULL DEFAULT 'month',
  features TEXT[] DEFAULT '{}',
  target_segment TEXT,
  highlighted BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  status content_status NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.pricing_plans ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Public can view published pricing plans"
ON public.pricing_plans
FOR SELECT
USING (status = 'published');

CREATE POLICY "Authenticated users can view all pricing plans"
ON public.pricing_plans
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can create pricing plans"
ON public.pricing_plans
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update pricing plans"
ON public.pricing_plans
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete pricing plans"
ON public.pricing_plans
FOR DELETE
TO authenticated
USING (true);

-- Indexes
CREATE INDEX idx_pricing_plans_status ON public.pricing_plans(status);
CREATE INDEX idx_pricing_plans_sort_order ON public.pricing_plans(sort_order);

-- Updated_at trigger
CREATE TRIGGER update_pricing_plans_updated_at
  BEFORE UPDATE ON public.pricing_plans
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Seed data (3 pricing plans from PricingPage.tsx)
INSERT INTO public.pricing_plans (name, slug, description, price, billing_period, features, target_segment, highlighted, sort_order, status)
VALUES
  (
    'Starter Website',
    'starter-website',
    'Perfect for small businesses and startups looking to establish their online presence.',
    99.00,
    'month',
    ARRAY[
      'Custom website design',
      'Up to 5 pages',
      'Mobile responsive',
      'Basic SEO optimization',
      'Contact form integration',
      '1 month support'
    ],
    'Small businesses and startups',
    false,
    1,
    'published'
  ),
  (
    'Business Platform',
    'business-platform',
    'Ideal for growing businesses that need advanced features and scalability.',
    299.00,
    'month',
    ARRAY[
      'Everything in Starter',
      'Up to 15 pages',
      'Advanced SEO optimization',
      'Blog integration',
      'Analytics dashboard',
      'E-commerce ready',
      '3 months support',
      'Priority support'
    ],
    'Growing businesses',
    false,
    2,
    'published'
  ),
  (
    'Government/Enterprise',
    'government-enterprise',
    'Comprehensive solution for government agencies and large enterprises.',
    399.00,
    'month',
    ARRAY[
      'Everything in Business',
      'Unlimited pages',
      'Custom features',
      'Government compliance',
      'Advanced security',
      'Multi-language support',
      'Dedicated account manager',
      '12 months support',
      '24/7 priority support'
    ],
    'Government agencies and enterprises',
    true,
    3,
    'published'
  )
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  price = EXCLUDED.price,
  billing_period = EXCLUDED.billing_period,
  features = EXCLUDED.features,
  target_segment = EXCLUDED.target_segment,
  highlighted = EXCLUDED.highlighted,
  sort_order = EXCLUDED.sort_order,
  status = EXCLUDED.status;