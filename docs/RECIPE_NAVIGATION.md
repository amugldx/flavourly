# Recipe Navigation System

This document describes the navigation system for recipe creation and editing in the Flavourly application, ensuring users are automatically redirected to the dashboard after successful operations.

## Overview

The recipe navigation system provides a seamless user experience by automatically redirecting users to the dashboard after successful recipe creation or editing operations. This ensures users can immediately see their updated recipe list and continue with their workflow.

## Features

### 🎯 **Automatic Navigation**

- **Create Recipe**: Users are automatically navigated to `/dashboard` after successful recipe creation
- **Edit Recipe**: Users are automatically navigated to `/dashboard` after successful recipe updates
- **Consistent Flow**: Both create and edit operations follow the same navigation pattern

### 🎨 **User Experience**

- **Success Feedback**: Toast notifications confirm successful operations
- **Immediate Updates**: Dashboard data is refreshed via centralized query system
- **Seamless Workflow**: No manual navigation required after operations
- **Loading States**: Clear indication during processing

### 🔄 **Integration with Query System**

- **Automatic Refetching**: Dashboard data is updated immediately
- **Consistent State**: All components reflect the latest data
- **No Manual Refresh**: Users see changes instantly

## Implementation

### Create Recipe Navigation

**File**: `app/dashboard/recipes/new/page.tsx`

```tsx
import { useRouter } from 'next/navigation';

export default function CreateRecipePage() {
	const router = useRouter();
	const createRecipeMutation = useCreateRecipe();

	// Handle successful recipe creation
	const handleCreateSuccess = (data: { recipeId: number }) => {
		// Navigate to dashboard after successful creation
		router.push('/dashboard');
	};

	const handleSubmit = async (e: React.FormEvent) => {
		// ... form validation and data preparation

		createRecipeMutation.mutate(recipeData, {
			onSuccess: handleCreateSuccess,
		});
	};

	// ... rest of component
}
```

### Edit Recipe Navigation

**File**: `app/dashboard/recipes/edit/[recipeId]/page.tsx`

```tsx
import { useRouter } from 'next/navigation';

export default function EditRecipePage() {
	const router = useRouter();
	const updateRecipeMutation = useUpdateRecipe();

	const handleSubmit = async (e: React.FormEvent) => {
		// ... form validation and data preparation

		updateRecipeMutation.mutate(recipeData, {
			onSuccess: () => {
				router.push('/dashboard');
			},
		});
	};

	// ... rest of component
}
```

## Navigation Flow

### Create Recipe Flow

1. **User clicks "Create Recipe"** button on dashboard
2. **User is taken to** `/dashboard/recipes/new`
3. **User fills out** multi-step recipe form
4. **User clicks "Create Recipe"** button on final step
5. **Recipe is created** via API call
6. **Success toast** shows: "Recipe created successfully!"
7. **User is automatically navigated** to `/dashboard`
8. **Dashboard shows** updated recipe count and new recipe in list

### Edit Recipe Flow

1. **User clicks "Edit"** button on recipe card
2. **User is taken to** `/dashboard/recipes/edit/[recipeId]`
3. **Form is pre-populated** with existing recipe data
4. **User makes changes** and clicks "Update Recipe"
5. **Recipe is updated** via API call
6. **Success toast** shows: "Recipe updated successfully!"
7. **User is automatically navigated** to `/dashboard`
8. **Dashboard shows** updated recipe data

## Integration with Centralized Query System

### Automatic Data Updates

Both create and edit operations trigger the centralized query system:

```typescript
// From useCreateRecipe and useUpdateRecipe mutations
onSuccess: async data => {
  toast.success('Recipe created/updated successfully!');
  await Promise.all([
    refetchHelpers.refetchAllRecipes(queryClient),
    refetchHelpers.refetchRecipe(queryClient, data.recipeId),
    refetchHelpers.refetchDashboard(queryClient),
  ]);
  // Navigation happens in component's onSuccess callback
},
```

### Query Keys Refetched

After navigation, these queries are automatically refetched:

```typescript
// Recipe queries
queryKeys.recipes.all,        // ['recipes']
queryKeys.recipes.user,       // ['user-recipes']
queryKeys.recipes.my,         // ['my-recipes']
queryKeys.recipes.verified,   // ['recipes', 'verified']
queryKeys.recipes.pending,    // ['recipes', 'pending']

// Dashboard queries
queryKeys.dashboard.stats,    // ['dashboard', 'stats']
queryKeys.dashboard.recent,   // ['dashboard', 'recent']
queryKeys.dashboard.queue,    // ['dashboard', 'queue']
```

## Error Handling

### Navigation on Error

If recipe creation or editing fails:

1. **No navigation occurs** - user stays on the form page
2. **Error toast** shows the specific error message
3. **Form data is preserved** - user can fix issues and retry
4. **Loading state is cleared** - user can interact with form again

### Error States

```typescript
onError: (error: Error) => {
  toast.error(error.message || 'Failed to create/update recipe');
  // No navigation - user stays on form page
},
```

## Best Practices

### 1. Consistent Navigation Pattern

```typescript
// ✅ Good - Consistent navigation pattern
const handleSuccess = (data: { recipeId: number }) => {
	router.push('/dashboard');
};

// ✅ Good - Same pattern for both create and edit
updateRecipeMutation.mutate(recipeData, {
	onSuccess: () => {
		router.push('/dashboard');
	},
});
```

### 2. Success Feedback Before Navigation

```typescript
// ✅ Good - Toast shows before navigation
onSuccess: async data => {
  toast.success('Recipe created successfully!');
  // Navigation happens after toast
  router.push('/dashboard');
},
```

### 3. Error Handling Without Navigation

```typescript
// ✅ Good - No navigation on error
onError: (error: Error) => {
  toast.error(error.message);
  // User stays on form to fix issues
},
```

## Testing

### Manual Testing

1. **Create Recipe Test**:

   - Navigate to `/dashboard/recipes/new`
   - Fill out recipe form completely
   - Click "Create Recipe"
   - Verify navigation to `/dashboard`
   - Verify new recipe appears in list

2. **Edit Recipe Test**:
   - Click "Edit" on any recipe card
   - Make changes to recipe data
   - Click "Update Recipe"
   - Verify navigation to `/dashboard`
   - Verify changes are reflected in recipe card

### Automated Testing

The navigation system can be tested by:

1. **Mocking router.push** calls
2. **Verifying onSuccess callbacks** are triggered
3. **Checking toast notifications** appear
4. **Confirming query refetching** occurs

## Future Enhancements

### Potential Improvements

- **Custom Navigation**: Allow users to choose where to go after operations
- **Breadcrumb Navigation**: Add breadcrumbs for better navigation context
- **Undo Functionality**: Add ability to undo recent operations
- **Batch Operations**: Support for creating/editing multiple recipes

### Technical Improvements

- **Navigation Guards**: Prevent navigation if form has unsaved changes
- **Deep Linking**: Support for direct links to specific recipe forms
- **Progressive Enhancement**: Fallback navigation for JavaScript-disabled users
- **Analytics Integration**: Track navigation patterns for UX improvements

## Related Files

- `app/dashboard/recipes/new/page.tsx` - Create recipe page with navigation
- `app/dashboard/recipes/edit/[recipeId]/page.tsx` - Edit recipe page with navigation
- `lib/hooks/use-mutations.ts` - Create and update mutation hooks
- `lib/query-keys.ts` - Centralized query key management
- `lib/hooks/use-queries.ts` - Centralized query hooks
