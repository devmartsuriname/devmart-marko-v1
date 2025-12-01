-- Create faq_items table
CREATE TABLE public.faq_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.faq_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Public can view active FAQ items"
ON public.faq_items
FOR SELECT
USING (status = 'active');

CREATE POLICY "Authenticated users can view all FAQ items"
ON public.faq_items
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can create FAQ items"
ON public.faq_items
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update FAQ items"
ON public.faq_items
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete FAQ items"
ON public.faq_items
FOR DELETE
TO authenticated
USING (true);

-- Trigger for updated_at
CREATE TRIGGER update_faq_items_updated_at
BEFORE UPDATE ON public.faq_items
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Seed data from FaqPage.tsx
INSERT INTO public.faq_items (question, answer, category, sort_order, is_featured, status) VALUES
('What services does Devmart offer?', 'Devmart specializes in custom web application development, government portal solutions, enterprise system integration, AI-powered tools, UX/UI design, and ongoing maintenance and support. We build scalable, secure digital solutions tailored to your business needs.', 'Services', 1, true, 'active'),
('How long does a typical project take?', 'Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while complex web applications or government portals can take 3-6 months. We provide detailed timelines during our initial consultation and maintain transparent communication throughout the development process.', 'Process', 2, true, 'active'),
('Do you offer ongoing support after project completion?', 'Yes! We provide comprehensive maintenance and support packages to ensure your application remains secure, up-to-date, and performs optimally. Our support includes bug fixes, security updates, feature enhancements, and technical assistance.', 'Support', 3, true, 'active'),
('What technologies do you use?', 'We work with modern, industry-standard technologies including React, TypeScript, Node.js, Python, PostgreSQL, and cloud platforms like AWS and Supabase. Our technology choices are always driven by your project requirements and long-term scalability needs.', 'General', 4, false, 'active'),
('Can you work with government and enterprise clients?', 'Absolutely. We have extensive experience building secure, compliant solutions for government agencies and enterprise organizations in Suriname. We understand the unique requirements for data security, accessibility standards, and regulatory compliance.', 'General', 5, false, 'active'),
('How do you handle project communication?', 'We believe in transparent, regular communication. You will have direct access to our project team through your preferred channels (email, WhatsApp, video calls). We provide weekly progress updates, maintain detailed documentation, and are always available to address questions or concerns.', 'Process', 6, false, 'active');