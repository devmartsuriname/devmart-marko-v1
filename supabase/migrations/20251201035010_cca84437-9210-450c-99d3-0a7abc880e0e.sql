-- Create case_studies table
CREATE TABLE public.case_studies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  client_name TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  featured_image TEXT,
  results_summary TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  status content_status NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Public can view published case studies"
ON public.case_studies
FOR SELECT
TO anon
USING (status = 'published');

CREATE POLICY "Authenticated users can view all case studies"
ON public.case_studies
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can create case studies"
ON public.case_studies
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update case studies"
ON public.case_studies
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete case studies"
ON public.case_studies
FOR DELETE
TO authenticated
USING (true);

-- Add updated_at trigger
CREATE TRIGGER update_case_studies_updated_at
BEFORE UPDATE ON public.case_studies
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Seed initial case studies from CaseStudiesPage.tsx
INSERT INTO public.case_studies (title, slug, description, client_name, tags, featured_image, results_summary, featured, sort_order, status) VALUES
(
  'Housing Subsidy Application Portal',
  'housing-subsidy-application-portal',
  'Comprehensive government portal enabling citizens to apply for housing subsidies online. Features include application tracking, document upload, eligibility verification, and automated approval workflows. Built with modern web technologies for accessibility and performance.',
  'Ministry of Social Affairs',
  ARRAY['Gov-Tech', 'Portal', 'React', 'Supabase'],
  '/marko-digital-marketing-agency-html/image/Photo-11.jpg',
  'Reduced application processing time by 60% and increased citizen satisfaction scores to 92%.',
  true,
  1,
  'published'
),
(
  'Immigration Case Management System',
  'immigration-case-management-system',
  'Enterprise-grade case management solution for immigration services. Streamlines visa processing, document verification, and inter-department coordination. Includes real-time status tracking, automated notifications, and comprehensive reporting dashboards.',
  'Immigration Department',
  ARRAY['Enterprise', 'Case Management', 'Government'],
  '/marko-digital-marketing-agency-html/image/Photo-12.jpg',
  'Increased case processing efficiency by 45% while maintaining 99.7% data accuracy.',
  true,
  2,
  'published'
),
(
  'Enterprise Resource Planning System',
  'enterprise-resource-planning-system',
  'Custom ERP implementation for large organization managing inventory, finance, HR, and operations. Integrated modules provide real-time insights and streamline business processes across departments. Cloud-based architecture ensures scalability and security.',
  'Corporate Client',
  ARRAY['ERP', 'Integration', 'Enterprise'],
  '/marko-digital-marketing-agency-html/image/Photo-13.jpg',
  'Consolidated 7 legacy systems into one unified platform, reducing operational costs by 35%.',
  false,
  3,
  'published'
),
(
  'Healthcare Management Portal',
  'healthcare-management-portal',
  'Digital health platform connecting patients, healthcare providers, and administrators. Features appointment scheduling, electronic health records, prescription management, and telemedicine capabilities. HIPAA-compliant architecture with robust security measures.',
  'National Health Service',
  ARRAY['Healthcare', 'Portal', 'Web App'],
  '/marko-digital-marketing-agency-html/image/collaborative-process-of-multicultural-skilled-peo-5EHBQRG-1024x683.jpg',
  'Improved patient access to healthcare services with 24/7 online appointment booking and reduced wait times by 40%.',
  false,
  4,
  'published'
);