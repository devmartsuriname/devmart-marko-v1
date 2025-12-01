-- Create team_members table
CREATE TABLE public.team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  role TEXT NOT NULL,
  title TEXT,
  short_bio TEXT,
  photo_url TEXT,
  email TEXT,
  linkedin_url TEXT,
  facebook_url TEXT,
  instagram_url TEXT,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Public can view active team members"
  ON public.team_members FOR SELECT
  USING (status = 'active');

CREATE POLICY "Authenticated users can view all team members"
  ON public.team_members FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create team members"
  ON public.team_members FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update team members"
  ON public.team_members FOR UPDATE TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete team members"
  ON public.team_members FOR DELETE TO authenticated
  USING (true);

-- Trigger for updated_at
CREATE TRIGGER update_team_members_updated_at
  BEFORE UPDATE ON public.team_members
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Seed initial team members from TeamPage.tsx
INSERT INTO public.team_members (full_name, role, sort_order, status) VALUES
  ('Jordan Lee', 'Lead Developer', 1, 'active'),
  ('Chloe Tan', 'Project Manager', 2, 'active'),
  ('Daniel Cruz', 'Technical Architect', 3, 'active'),
  ('Olivia Bennett', 'UX/UI Designer', 4, 'active'),
  ('Daniel White', 'DevOps Engineer', 5, 'active'),
  ('Chloe Ramirez', 'Frontend Developer', 6, 'active')
ON CONFLICT DO NOTHING;