# Role-Based Routing Documentation

## Overview

Flavourly implements a comprehensive role-based routing system that directs users to different dashboards based on their assigned role. This ensures that users only access features relevant to their role and maintains proper security boundaries.

## User Roles

### 1. Recipe Developer

- **Role Name**: `RecipeDeveloper`
- **Primary Dashboard**: `/dashboard`
- **Description**: Users who create and manage recipes
- **Permissions**: Create, edit, and manage their own recipes

### 2. Nutritionist

- **Role Name**: `Nutritionist`
- **Primary Dashboard**: `/nutritionist`
- **Description**: Users who verify and review recipes
- **Permissions**: Review pending recipes, verify nutritional information

## Authentication Flow

### Sign In Process

1. User enters credentials on `/signin`
2. Authentication is processed via NextAuth
3. User role is retrieved from session
4. **Automatic redirect** based on role:
   - `Nutritionist` → `/nutritionist`
   - `RecipeDeveloper` → `/dashboard`

### Sign Up Process

1. User selects role during registration
2. Account is created with assigned role
3. **Automatic redirect** based on selected role:
   - `Nutritionist` → `/nutritionist`
   - `RecipeDeveloper` → `/dashboard`

## Route Protection

### Protected Routes by Role

#### Recipe Developer Routes (`/dashboard/*`)

- **Access**: `RecipeDeveloper`
- **Layout**: `app/dashboard/layout.tsx`
- **Features**: Recipe management, favorites, collections, meal planning

#### Nutritionist Routes (`/nutritionist/*`)

- **Access**: `Nutritionist` only
- **Layout**: `app/nutritionist/layout.tsx`
- **Features**: Recipe review, verification, health tips

#### Public Routes

- **Access**: All users (authenticated and unauthenticated)
- **Examples**: `/`, `/recipes`, `/about`

### Unauthorized Access Handling

- **Route**: `/unauthorized`
- **Trigger**: When users try to access routes they don't have permission for
- **Features**:
  - Shows user's current role
  - Provides navigation to appropriate dashboard
  - Clear explanation of access restrictions

## Implementation Details

### Authentication Hooks

```typescript
// lib/hooks/use-auth.ts
export function useSignIn() {
	// ... authentication logic
	onSuccess: (data: AuthResponse) => {
		if (data.user.role === 'Nutritionist') {
			router.push('/nutritionist');
		} else {
			router.push('/dashboard');
		}
	};
}
```

### Layout Protection

```typescript
// app/nutritionist/layout.tsx
if (session.user?.role !== 'Nutritionist') {
	redirect('/unauthorized');
}
```

### Session Management

- **Provider**: `components/session-provider.tsx`
- **Scope**: Global application
- **Data**: User ID, email, name, username, role

## Navigation Structure

### Recipe Developer Navigation

```
/dashboard
├── /dashboard (My Recipes)
├── /dashboard/recipes/new (Create Recipe)
├── /dashboard/favorites (Favorites)
├── /dashboard/collections (Collections)
├── /dashboard/meal-planner (Meal Planner)
├── /dashboard/shopping-list (Shopping List)
└── /dashboard/settings (Settings)
```

### Nutritionist Navigation

```
/nutritionist
├── /nutritionist (Dashboard)
├── /nutritionist/queue (Review Queue)
└── /nutritionist/verified (Verified Recipes)
```

## Testing

### Test Users

```bash
# Recipe Developer
Username: test
Password: test123
Expected Redirect: /dashboard

# Nutritionist
Username: ammar
Password: ammar123
Expected Redirect: /nutritionist
```

### Test Commands

```bash
# Test role-based redirects
npx tsx scripts/test-role-redirects.ts

# Test dashboard functionality
npx tsx scripts/test-dashboard.ts
```

### Manual Testing Steps

1. **Recipe Developer Login**:

   - Go to `/signin`
   - Sign in as `test` / `test123`
   - Should redirect to `/dashboard`

2. **Nutritionist Login**:

   - Go to `/signin`
   - Sign in as `ammar` / `ammar123`
   - Should redirect to `/nutritionist`

3. **Unauthorized Access**:
   - Sign in as Recipe Developer
   - Try to access `/nutritionist`
   - Should redirect to `/unauthorized`

## Security Features

### Route-Level Protection

- **Authentication Check**: All protected routes require valid session
- **Role Verification**: Routes check user role before allowing access
- **Automatic Redirects**: Unauthorized users are redirected to appropriate pages

### Session Security

- **JWT Strategy**: NextAuth uses JWT for session management
- **Role Persistence**: User role is stored in session and verified on each request
- **Secure Redirects**: All redirects are handled server-side

## Future Enhancements

### Planned Features

1. **Role Management**: Allow nutritionists to manage user roles (future)
2. **Permission Granularity**: More detailed permission system
3. **Permission Granularity**: More detailed permission system
4. **Audit Logging**: Track user access and role changes

### UI Improvements

1. **Role Indicators**: Visual badges showing user role
2. **Navigation Highlights**: Active route highlighting based on role
3. **Contextual Help**: Role-specific help and guidance

## Troubleshooting

### Common Issues

1. **Wrong Redirect After Login**

   - Check user role in database
   - Verify session data includes role
   - Clear browser cache and cookies

2. **Unauthorized Access Errors**

   - Verify user role assignment
   - Check route protection logic
   - Ensure proper session handling

3. **Navigation Not Working**
   - Check role-based navigation logic
   - Verify route permissions
   - Test with different user roles

### Debug Commands

```bash
# Check user roles
npx tsx scripts/test-role-redirects.ts

# View database state
npx prisma studio

# Test authentication flow
npx tsx scripts/test-signup.ts
```

## File Structure

```
app/
├── dashboard/           # Recipe Developer routes
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
├── nutritionist/        # Nutritionist routes
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
├── unauthorized/        # Access denied page
│   └── page.tsx
└── signin/             # Authentication
    └── page.tsx

components/
├── session-provider.tsx # NextAuth provider
└── ...

lib/
├── hooks/
│   └── use-auth.ts     # Authentication hooks
└── auth.ts            # NextAuth configuration
```

## Best Practices

1. **Always Check Role**: Verify user role before rendering protected content
2. **Use Layout Protection**: Implement role checks in layout components
3. **Provide Clear Feedback**: Show appropriate messages for unauthorized access
4. **Test All Roles**: Ensure all user roles work correctly
5. **Maintain Security**: Never expose role information unnecessarily
