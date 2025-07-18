# Authentication System

This project uses NextAuth.js v5 with a custom credentials provider that supports both sign-in and sign-up functionality.

## Features

- **Sign In**: Users can authenticate with their email and password
- **Sign Up**: New users can register with username, email, full name, and password
- **Role-based Access**: Users are assigned roles (RecipeDeveloper, Nutritionist, Admin)
- **Password Security**: Passwords are hashed using bcryptjs
- **Type Safety**: Full TypeScript support with custom type definitions

## Database Setup

Before using the authentication system, you need to seed the roles in the database:

```bash
pnpm seed:roles
```

This creates the three default roles:

- `RecipeDeveloper` (default role for new users)
- `Nutritionist`
- `Admin`

## Usage

### Sign In

```typescript
import { signIn } from "@/lib/auth";

// Sign in with email and password
await signIn("credentials", {
  email: "user@example.com",
  password: "password123",
  action: "signin",
  redirect: false,
});
```

### Sign Up

```typescript
import { signIn } from "@/lib/auth";

// Sign up with user details
await signIn("credentials", {
  email: "newuser@example.com",
  password: "password123",
  username: "newuser",
  fullName: "New User",
  action: "signup",
  redirect: false,
});
```

### Getting User Session

```typescript
import { auth } from "@/lib/auth";

// In a server component or API route
const session = await auth();
console.log(session?.user); // { id, email, name, username, role }
```

### Role Checking

```typescript
import { hasRole } from "@/lib/auth-helpers";
import { RoleName } from "@/generated/prisma/client";

// Check if user has required role
const canEditRecipes = hasRole(user.role, RoleName.Nutritionist);
```

## API Routes

The authentication handlers are automatically available at:

- `/api/auth/signin` - Sign in page
- `/api/auth/signout` - Sign out
- `/api/auth/session` - Get current session

## Environment Variables

Make sure to set the following environment variables:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
DATABASE_URL=your-database-url
```

## User Schema

The authentication system integrates with the following user schema:

```prisma
model User {
  id           Int      @id @default(autoincrement())
  username     String   @unique
  email        String   @unique
  passwordHash String
  fullName     String?
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  roleId       Int
  role         Role     @relation(fields: [roleId], references: [id])
  // ... other relations
}

model Role {
  id    Int      @id @default(autoincrement())
  name  RoleName @unique
  users User[]
}

enum RoleName {
  RecipeDeveloper
  Nutritionist
  Admin
}
```

## Error Handling

The authentication system handles common errors:

- Duplicate email/username during signup
- Invalid credentials during signin
- Missing required fields
- Database connection issues

All errors are logged to the console and return `null` to NextAuth, which will display appropriate error messages to the user.
