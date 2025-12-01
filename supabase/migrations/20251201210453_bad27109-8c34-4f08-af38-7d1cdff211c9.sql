-- Add public read access for published blog posts
CREATE POLICY "Public can view published blog posts"
ON public.blog_posts
FOR SELECT
TO anon, authenticated
USING (status = 'published'::content_status);