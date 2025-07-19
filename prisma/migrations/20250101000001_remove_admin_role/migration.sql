-- Remove Admin from RoleName enum
ALTER TYPE "RoleName" RENAME TO "RoleName_old";
CREATE TYPE "RoleName" AS ENUM ('RecipeDeveloper', 'Nutritionist');
ALTER TABLE "User" ALTER COLUMN "roleId" TYPE "RoleName" USING "roleId"::text::"RoleName";
ALTER TABLE "Role" ALTER COLUMN "name" TYPE "RoleName" USING "name"::text::"RoleName";
DROP TYPE "RoleName_old";