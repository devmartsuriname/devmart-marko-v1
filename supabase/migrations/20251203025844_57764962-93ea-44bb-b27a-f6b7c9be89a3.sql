-- Seed initial admin user
-- Assigns admin role to the primary Devmart account

-- Insert into user_roles (admin role)
INSERT INTO public.user_roles (user_id, role)
VALUES ('b4731dce-6a97-4cb3-bc83-4cb38d01dd73', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;

-- Insert into admin_users
INSERT INTO public.admin_users (id, email, full_name)
VALUES (
  'b4731dce-6a97-4cb3-bc83-4cb38d01dd73',
  'info@devmart.sr',
  'Devmart Admin'
)
ON CONFLICT (id) DO UPDATE SET
  email = EXCLUDED.email,
  full_name = EXCLUDED.full_name;

-- Verify the seed worked
SELECT 
  au.email,
  au.full_name,
  ur.role
FROM admin_users au
LEFT JOIN user_roles ur ON au.id = ur.user_id
WHERE au.id = 'b4731dce-6a97-4cb3-bc83-4cb38d01dd73';