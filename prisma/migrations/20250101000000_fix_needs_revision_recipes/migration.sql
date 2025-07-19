-- Fix existing needs_revision recipes that don't have verifiedById set
-- This ensures that we can display who requested the revision

-- First, find a nutritionist to assign as the reviewer for existing needs_revision recipes
WITH nutritionist AS (
  SELECT id FROM "User"
  WHERE "roleId" = (SELECT id FROM "Role" WHERE name = 'Nutritionist')
  LIMIT 1
)
UPDATE "Recipe"
SET "verifiedById" = (SELECT id FROM nutritionist),
    "verifiedAt" = NOW()
WHERE status = 'needs_revision'
  AND "verifiedById" IS NULL
  AND EXISTS (SELECT 1 FROM nutritionist);