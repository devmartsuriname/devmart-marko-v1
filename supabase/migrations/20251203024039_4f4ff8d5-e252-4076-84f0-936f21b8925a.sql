-- Insert branding color settings with default Devmart green
INSERT INTO site_settings (key, value, description)
VALUES 
  ('primary_color', '#4be89b', 'Primary brand color (hex) for marketing site'),
  ('accent_color', '#4be89b', 'Secondary accent color (hex) for marketing site')
ON CONFLICT (key) DO NOTHING;