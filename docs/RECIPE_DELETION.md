# Recipe Deletion Functionality

This document describes the recipe deletion functionality in the Flavourly application, including the UI components, API endpoints, and Cloudinary integration.

## Overview

Recipe deletion allows users to permanently remove their recipes from the system. This includes:

- Deleting the recipe from the database
- Removing associated images from Cloudinary
- Cleaning up all related data (ingredients, steps, media records)

## Features

### 🔒 Security

- Only recipe authors can delete their own recipes
- Confirmation dialog prevents accidental deletions
- Proper authentication and authorization checks

### 🗑️ Complete Cleanup

- Deletes recipe from database with cascade
- Removes all associated images from Cloudinary
- Cleans up related data (ingredients, steps, media records)

### 🎨 User Experience

- Delete button in recipe cards on dashboard
- Confirmation dialog with recipe title
- Loading states during deletion
- Automatic UI updates after deletion
- Navigation to dashboard after create/edit operations

## Implementation

### API Endpoint

**DELETE** `/api/recipes/[recipeId]`

**Authentication Required:** Yes (user must own the recipe)

**Request:**

```typescript
// No request body needed
```

**Response:**

```typescript
// Success (200)
{
	message: 'Recipe deleted successfully';
}

// Error (401)
{
	error: 'Unauthorized';
}

// Error (404)
{
	error: 'Recipe not found';
}

// Error (500)
{
	error: 'Failed to delete recipe';
}
```

### Database Operations

The deletion process follows this sequence:

1. **Verify Ownership**: Check that the recipe belongs to the authenticated user
2. **Fetch Media**: Get all media records associated with the recipe
3. **Delete Cloudinary Assets**: Remove images from Cloudinary storage
4. **Delete Recipe**: Remove recipe from database (cascade deletes related data)

### Cloudinary Integration

The system automatically deletes associated images from Cloudinary:

```typescript
// Extract public ID from URL
const urlParts = media.url.split('/');
const filename = urlParts[urlParts.length - 1];
const publicId = filename.split('.')[0]; // Remove file extension

// Delete from Cloudinary
await cloudinary.uploader.destroy(publicId);
```

**Error Handling**: If Cloudinary deletion fails, the process continues to ensure the recipe is still deleted from the database.

## UI Components

### Delete Button

Located in recipe cards on the dashboard:

```tsx
<Button
	variant='outline'
	size='sm'
	className='text-destructive hover:text-destructive hover:bg-destructive/10'>
	<Trash2 className='w-4 h-4 mr-1' />
	Delete
</Button>
```

### Confirmation Dialog

```tsx
<Dialog
	open={isOpen}
	onOpenChange={setIsOpen}>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Delete Recipe</DialogTitle>
			<DialogDescription>
				Are you sure you want to delete "{recipe.title}"? This action cannot be undone and will
				permanently remove the recipe and all associated images.
			</DialogDescription>
		</DialogHeader>
		<DialogFooter>
			<Button
				variant='outline'
				onClick={() => setIsOpen(false)}>
				Cancel
			</Button>
			<Button
				variant='destructive'
				onClick={handleDelete}
				disabled={deleteRecipe.isPending}>
				{deleteRecipe.isPending ? 'Deleting...' : 'Delete Recipe'}
			</Button>
		</DialogFooter>
	</DialogContent>
</Dialog>
```

## TanStack Query Integration

### Centralized Query System

The recipe deletion follows our centralized query system architecture:

#### Mutation Hook

```typescript
export function useDeleteRecipe() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (recipeId: number): Promise<void> => {
			const response = await fetch(`/api/recipes/${recipeId}`, {
				method: 'DELETE',
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.error || 'Failed to delete recipe');
			}
		},
		onSuccess: async (_, recipeId) => {
			toast.success('Recipe deleted successfully!');
			await Promise.all([
				refetchHelpers.refetchAllRecipes(queryClient),
				refetchHelpers.refetchDashboard(queryClient),
			]);
		},
		onError: (error: Error) => {
			toast.error(error.message || 'Failed to delete recipe');
		},
	});
}
```

#### Query Keys Refetched

The deletion automatically refetches these query keys:

```typescript
// From refetchHelpers.refetchAllRecipes
queryKeys.recipes.all,        // ['recipes']
queryKeys.recipes.user,       // ['user-recipes']
queryKeys.recipes.my,         // ['my-recipes']
queryKeys.recipes.verified,   // ['recipes', 'verified']
queryKeys.recipes.pending,    // ['recipes', 'pending']

// From refetchHelpers.refetchDashboard
queryKeys.dashboard.stats,    // ['dashboard', 'stats']
queryKeys.dashboard.recent,   // ['dashboard', 'recent']
queryKeys.dashboard.queue,    // ['dashboard', 'queue']
```

### Usage in Components

```tsx
const deleteRecipe = useDeleteRecipe();

const handleDelete = async () => {
	try {
		await deleteRecipe.mutateAsync(recipe.id);
		// The centralized query system automatically refetches all relevant data
		// No manual refetch needed - UI updates immediately
	} catch (error) {
		// Error is handled by the mutation hook
	}
};
```

### Dashboard Integration

The dashboard uses the centralized `useUserRecipes` hook:

```tsx
export default function DashboardPage() {
	const { data: recipes, isLoading, error } = useUserRecipes();

	const handleRecipeDelete = () => {
		// The centralized query system will automatically refetch the data
		// No manual refetch needed
	};

	// ... rest of component
}
```

## Error Handling

### API Level

- **401 Unauthorized**: User not authenticated or doesn't own the recipe
- **404 Not Found**: Recipe doesn't exist
- **500 Internal Server Error**: Database or Cloudinary errors

### UI Level

- **Loading States**: Show loading indicator during deletion
- **Error Messages**: Display user-friendly error messages
- **Fallback Behavior**: Continue with database deletion even if Cloudinary fails

## Testing

### Test Script

Run the test script to verify deletion functionality:

```bash
npx tsx scripts/test-recipe-deletion.ts
```

The test script:

1. Creates a test recipe with ingredients, steps, and media
2. Simulates the deletion process
3. Verifies complete cleanup of all related data
4. Tests Cloudinary deletion simulation

### Manual Testing

1. **Create a recipe** with images
2. **Navigate to dashboard**
3. **Click delete button** on a recipe card
4. **Confirm deletion** in the dialog
5. **Verify recipe is removed** from the dashboard
6. **Check Cloudinary** to confirm images are deleted

## Best Practices

### Security

- Always verify recipe ownership before deletion
- Use proper authentication middleware
- Validate recipe ID format

### Performance

- Use database transactions for consistency
- Handle Cloudinary errors gracefully
- Implement proper error logging

### User Experience

- Provide clear confirmation messages
- Show loading states during operations
- Give users the ability to cancel
- Provide feedback on success/failure

## Future Enhancements

### Potential Improvements

- **Soft Delete**: Add option to archive instead of permanently delete
- **Bulk Delete**: Allow deletion of multiple recipes at once
- **Recovery Period**: Add time-limited recovery option
- **Analytics**: Track deletion reasons and patterns
- **Notifications**: Notify other users if shared recipes are deleted

### Technical Improvements

- **Background Processing**: Move Cloudinary deletion to background jobs
- **Retry Logic**: Implement retry mechanism for failed Cloudinary deletions
- **Audit Trail**: Log all deletion activities
- **Caching**: Invalidate relevant caches after deletion

## Troubleshooting

### Common Issues

1. **Cloudinary Deletion Fails**

   - Check Cloudinary credentials
   - Verify public ID extraction logic
   - Ensure proper error handling

2. **Database Cascade Issues**

   - Verify foreign key constraints
   - Check Prisma schema relationships
   - Test with sample data

3. **UI Not Updating**
   - Verify TanStack Query refetch logic
   - Check component re-rendering
   - Ensure proper state management

### Debug Steps

1. Check browser network tab for API calls
2. Verify Cloudinary dashboard for image status
3. Check database for remaining records
4. Review server logs for error messages
5. Test with different recipe types (with/without media)

## Related Files

- `app/api/recipes/[recipeId]/route.ts` - DELETE API endpoint
- `app/dashboard/page.tsx` - Dashboard with delete functionality
- `lib/hooks/use-mutations.ts` - Delete mutation hook
- `lib/hooks/use-queries.ts` - Centralized query hooks
- `lib/query-keys.ts` - Centralized query key management
- `lib/cloudinary.ts` - Cloudinary configuration
