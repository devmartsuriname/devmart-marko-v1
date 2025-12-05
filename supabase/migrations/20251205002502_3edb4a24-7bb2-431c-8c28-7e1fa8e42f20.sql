-- Fix pricing data consistency: Only Business Platform should be highlighted
-- Government/Enterprise should not have the special highlight styling

UPDATE public.pricing_plans 
SET highlighted = false 
WHERE name = 'Government/Enterprise' AND highlighted = true;

-- Verify sort_order is correct for proper column display
-- Column 1: Starter (sort_order 1)
-- Column 2: Business Platform - highlighted (sort_order 2)  
-- Column 3: Government/Enterprise (sort_order 3)
UPDATE public.pricing_plans SET sort_order = 1 WHERE name = 'Starter';
UPDATE public.pricing_plans SET sort_order = 2 WHERE name = 'Business Platform';
UPDATE public.pricing_plans SET sort_order = 3 WHERE name = 'Government/Enterprise';