-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name TEXT NOT NULL,
  author_title TEXT,
  company_name TEXT,
  quote TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  avatar_url TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  status content_status NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Public can view published testimonials"
  ON public.testimonials
  FOR SELECT
  TO anon
  USING (status = 'published');

CREATE POLICY "Authenticated users can view all testimonials"
  ON public.testimonials
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create testimonials"
  ON public.testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON public.testimonials
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete testimonials"
  ON public.testimonials
  FOR DELETE
  TO authenticated
  USING (true);

-- Trigger for updated_at
CREATE TRIGGER update_testimonials_updated_at
  BEFORE UPDATE ON public.testimonials
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Seed testimonials from marketing template
INSERT INTO public.testimonials (author_name, author_title, company_name, quote, rating, avatar_url, featured, sort_order, status) VALUES
  (
    'Emma Richard',
    'CEO',
    'Nexatech',
    'Devmart transformed our digital presence with a custom web application that streamlined our operations. Their attention to detail and technical expertise exceeded our expectations. The team was professional, responsive, and delivered exactly what we needed.',
    5,
    '/marko-digital-marketing-agency-html/image/Photo-8.jpg',
    true,
    1,
    'published'
  ),
  (
    'David Mont',
    'Marketing Director',
    NULL,
    'Working with Devmart was a game-changer for our business. They developed a government portal that handles thousands of users seamlessly. The project was completed on time and within budget. I highly recommend their services.',
    5,
    '/marko-digital-marketing-agency-html/image/Photo-11.jpg',
    true,
    2,
    'published'
  ),
  (
    'Sophia Lewis',
    'Founder',
    NULL,
    'The AI-powered tools Devmart built for us have revolutionized our workflow. Their team understood our unique requirements and delivered a solution that perfectly fits our needs. Outstanding work from start to finish.',
    5,
    '/marko-digital-marketing-agency-html/image/Photo-12.jpg',
    false,
    3,
    'published'
  ),
  (
    'James Peterson',
    'COO',
    'BrightWave',
    'Devmart''s enterprise system implementation was flawless. They handled complex integration challenges with ease and provided excellent ongoing support. Their technical knowledge and customer service are top-notch.',
    5,
    '/marko-digital-marketing-agency-html/image/Photo-13.jpg',
    false,
    4,
    'published'
  );