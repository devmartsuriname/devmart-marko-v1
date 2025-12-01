-- Add public read access to published services
CREATE POLICY "Public can view published services"
ON public.services
FOR SELECT
TO anon, authenticated
USING (status = 'published'::content_status);