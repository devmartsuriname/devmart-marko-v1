-- Force PostgREST to reload schema cache and pick up updated RLS policies
-- This ensures the API layer uses the latest policy configuration immediately
NOTIFY pgrst, 'reload schema';