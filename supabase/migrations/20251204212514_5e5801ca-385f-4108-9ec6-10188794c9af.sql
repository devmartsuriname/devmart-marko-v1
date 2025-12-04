-- Add highlight columns to pricing_plans table
ALTER TABLE pricing_plans 
ADD COLUMN IF NOT EXISTS highlight_1 text,
ADD COLUMN IF NOT EXISTS highlight_2 text,
ADD COLUMN IF NOT EXISTS highlight_3 text;

-- Update the Business Platform plan with highlight data and set highlighted to true
UPDATE pricing_plans 
SET 
  highlighted = true,
  highlight_1 = 'Dedicated Account Manager',
  highlight_2 = 'Priority Support 24/7',
  highlight_3 = 'Customized Growth Strategy'
WHERE slug = 'business-platform';

-- Notify PostgREST to reload schema
NOTIFY pgrst, 'reload schema';