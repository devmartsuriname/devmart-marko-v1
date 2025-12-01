-- Fix contact_submissions RLS INSERT policy to target correct roles
-- Drop the existing policy that incorrectly targets 'public' role
DROP POLICY IF EXISTS "Public can submit contact forms" ON public.contact_submissions;

-- Create new policy targeting 'anon' and 'authenticated' roles
-- This allows both anonymous visitors and logged-in users to submit contact forms
CREATE POLICY "Public can submit contact forms" 
ON public.contact_submissions 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);