# Flavourly Query & Mutation System

This document describes the comprehensive query and mutation system implemented for the Flavourly app, ensuring automatic refetching of relevant data after all mutations.

## 🏗️ **Architecture Overview**

The system is built on three core pillars:

1. **Centralized Query Keys** (`lib/query-keys.ts`)
2. **Comprehensive Query Hooks** (`lib/hooks/use-queries.ts`)
3. **Comprehensive Mutation Hooks** (`lib/hooks/use-mutations.ts`)

## 📋 **Query Key Management**

### **Centralized Query Keys**

All query keys are defined in `lib/query-keys.ts` to ensure consistency and prevent typos:

```typescript
export const queryKeys = {
	recipes: {
		all: ['recipes'] as const,
		user: ['user-recipes'] as const,
		detail: (id: number) => ['recipe', id] as const,
		byStatus: (status: string) => ['recipes', 'status', status] as const,
	},
	reviews: {
		byRecipe: (recipeId: number) => ['reviews', 'recipe', recipeId] as const,
		user: ['reviews', 'user'] as const,
	},
	// ... more query keys
};
```

### **Refetch Helpers**

Centralized helper functions for refetching related queries:

```typescript
export const refetchHelpers = {
	refetchAllRecipes: queryClient => {
		return Promise.all([
			queryClient.refetchQueries({ queryKey: queryKeys.recipes.all }),
			queryClient.refetchQueries({ queryKey: queryKeys.recipes.user }),
			queryClient.refetchQueries({ queryKey: queryKeys.recipes.verified }),
		]);
	},

	refetchRecipe: (queryClient, recipeId) => {
		return Promise.all([
			queryClient.refetchQueries({ queryKey: queryKeys.recipes.detail(recipeId) }),
			queryClient.refetchQueries({ queryKey: queryKeys.media.byRecipe(recipeId) }),
			queryClient.refetchQueries({ queryKey: queryKeys.reviews.byRecipe(recipeId) }),
		]);
	},
	// ... more helpers
};
```

## 🔄 **Automatic Refetching System**

### **How It Works**

1. **User performs action** (create/update/delete)
2. **Mutation executes** and updates the database
3. **`onSuccess` callback triggers** with success toast
4. **`refetchQueries` executes** to get fresh data
5. **UI updates immediately** with new data

### **Benefits**

- ✅ **Immediate Updates**: Data is refetched immediately after mutations
- ✅ **Better UX**: Users see changes instantly without manual refresh
- ✅ **Consistent State**: Ensures UI always reflects the latest data
- ✅ **Optimized Performance**: Only refetches relevant queries

## 📚 **Available Query Hooks**

### **Recipe Queries**

```typescript
import {
	useUserRecipes,
	useRecipe,
	useAllRecipes,
	useVerifiedRecipes,
} from 'lib/hooks/use-queries';

// Fetch user's recipes
const { data: recipes, isLoading } = useUserRecipes();

// Fetch single recipe
const { data: recipe } = useRecipe(recipeId);

// Fetch all recipes (nutritionist)
const { data: allRecipes } = useAllRecipes();

// Fetch verified recipes
const { data: verifiedRecipes } = useVerifiedRecipes();
```

### **Review Queries**

```typescript
import { useRecipeReviews, useUserReviews } from 'lib/hooks/use-queries';

// Fetch reviews for a recipe
const { data: reviews } = useRecipeReviews(recipeId);

// Fetch user's reviews
const { data: userReviews } = useUserReviews();
```

### **Collection Queries**

```typescript
import { useUserCollections, useCollection } from 'lib/hooks/use-queries';

// Fetch user's collections
const { data: collections } = useUserCollections();

// Fetch single collection
const { data: collection } = useCollection(collectionId);
```

### **Dashboard Queries**

```typescript
import { useDashboardStats, useRecentActivity, useVerificationQueue } from 'lib/hooks/use-queries';

// Fetch dashboard statistics
const { data: stats } = useDashboardStats();

// Fetch recent activity
const { data: activity } = useRecentActivity();

// Fetch verification queue (nutritionists)
const { data: queue } = useVerificationQueue();
```

## ⚡ **Available Mutation Hooks**

### **Recipe Mutations**

```typescript
import { useCreateRecipe, useUpdateRecipe, useDeleteRecipe } from 'lib/hooks/use-mutations';

const createRecipe = useCreateRecipe();
const updateRecipe = useUpdateRecipe();
const deleteRecipe = useDeleteRecipe();

// Create recipe - automatically refetches dashboard and recipe details
createRecipe.mutate(recipeData);

// Update recipe - automatically refetches dashboard and recipe details
updateRecipe.mutate({ id: recipeId, ...recipeData });

// Delete recipe - automatically refetches dashboard
deleteRecipe.mutate(recipeId);
```

### **Review Mutations**

```typescript
import { useCreateReview, useUpdateReview, useDeleteReview } from 'lib/hooks/use-mutations';

const createReview = useCreateReview();
const updateReview = useUpdateReview();
const deleteReview = useDeleteReview();

// Create review - automatically refetches recipe reviews and user reviews
createReview.mutate({ recipeId, rating: 5, comment: 'Great recipe!' });

// Update review - automatically refetches related data
updateReview.mutate({ id: reviewId, recipeId, rating: 4, comment: 'Updated comment' });

// Delete review - automatically refetches related data
deleteReview.mutate(reviewId);
```

### **Collection Mutations**

```typescript
import {
	useCreateCollection,
	useUpdateCollection,
	useDeleteCollection,
	useAddRecipeToCollection,
	useRemoveRecipeFromCollection,
} from 'lib/hooks/use-mutations';

const createCollection = useCreateCollection();
const addToCollection = useAddRecipeToCollection();

// Create collection - automatically refetches user collections
createCollection.mutate({ name: 'My Favorites', description: 'Best recipes' });

// Add recipe to collection - automatically refetches collection details
addToCollection.mutate({ collectionId, recipeId });
```

### **Meal Plan Mutations**

```typescript
import { useCreateMealPlan, useUpdateMealPlan, useDeleteMealPlan } from 'lib/hooks/use-mutations';

const createMealPlan = useCreateMealPlan();

// Create meal plan - automatically refetches user meal plans
createMealPlan.mutate({
  name: 'Weekly Plan',
  startDate: '2024-01-01',
  endDate: '2024-01-07',
  entries: [...]
});
```

### **Nutritionist Mutations**

```typescript
import { useVerifyRecipe } from 'lib/hooks/use-mutations';

const verifyRecipe = useVerifyRecipe();

// Verify recipe - automatically refetches all recipe data
verifyRecipe.mutate({
	recipeId,
	status: 'verified',
	healthTips: 'Great nutritional value!',
});
```

## 🎯 **Best Practices**

### **1. Always Use Centralized Query Keys**

```typescript
// ✅ Good
import { queryKeys } from 'lib/query-keys';
const queryKey = queryKeys.recipes.detail(recipeId);

// ❌ Bad
const queryKey = ['recipe', recipeId];
```

### **2. Use Refetch Helpers for Complex Refetching**

```typescript
// ✅ Good
import { refetchHelpers } from 'lib/query-keys';
await refetchHelpers.refetchAllRecipes(queryClient);

// ❌ Bad
await Promise.all([
	queryClient.refetchQueries({ queryKey: ['recipes'] }),
	queryClient.refetchQueries({ queryKey: ['user-recipes'] }),
	// ... manually listing all queries
]);
```

### **3. Handle Loading and Error States**

```typescript
const { data, isLoading, error } = useUserRecipes();

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;
if (!data) return <div>No data</div>;

return (
	<div>
		{data.map(recipe => (
			<RecipeCard
				key={recipe.id}
				recipe={recipe}
			/>
		))}
	</div>
);
```

### **4. Use Optimistic Updates When Appropriate**

```typescript
const updateRecipe = useUpdateRecipe();

updateRecipe.mutate(
	{ id: recipeId, ...newData },
	{
		onMutate: async newRecipe => {
			// Cancel outgoing refetches
			await queryClient.cancelQueries({ queryKey: queryKeys.recipes.detail(recipeId) });

			// Snapshot previous value
			const previousRecipe = queryClient.getQueryData(queryKeys.recipes.detail(recipeId));

			// Optimistically update
			queryClient.setQueryData(queryKeys.recipes.detail(recipeId), newRecipe);

			return { previousRecipe };
		},
		onError: (err, newRecipe, context) => {
			// Rollback on error
			queryClient.setQueryData(queryKeys.recipes.detail(recipeId), context.previousRecipe);
		},
	},
);
```

## 🔧 **Adding New Features**

### **1. Add Query Keys**

```typescript
// In lib/query-keys.ts
export const queryKeys = {
	// ... existing keys
	newFeature: {
		all: ['new-feature'] as const,
		detail: (id: number) => ['new-feature', id] as const,
	},
};
```

### **2. Add Query Hook**

```typescript
// In lib/hooks/use-queries.ts
export function useNewFeature(id: number) {
	return useQuery({
		queryKey: queryKeys.newFeature.detail(id),
		queryFn: async () => {
			const response = await fetch(`/api/new-feature/${id}`);
			if (!response.ok) throw new Error('Failed to fetch');
			return response.json();
		},
		enabled: !!id,
	});
}
```

### **3. Add Mutation Hook**

```typescript
// In lib/hooks/use-mutations.ts
export function useCreateNewFeature() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async data => {
			const response = await fetch('/api/new-feature', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
			if (!response.ok) throw new Error('Failed to create');
			return response.json();
		},
		onSuccess: async data => {
			toast.success('Created successfully!');
			await queryClient.refetchQueries({ queryKey: queryKeys.newFeature.all });
		},
		onError: error => {
			toast.error(error.message);
		},
	});
}
```

### **4. Add Refetch Helper**

```typescript
// In lib/query-keys.ts
export const refetchHelpers = {
	// ... existing helpers
	refetchNewFeature: (queryClient, id) => {
		return Promise.all([
			queryClient.refetchQueries({ queryKey: queryKeys.newFeature.all }),
			queryClient.refetchQueries({ queryKey: queryKeys.newFeature.detail(id) }),
		]);
	},
};
```

## 🚀 **Performance Optimizations**

### **1. Stale Time Configuration**

```typescript
export function useUserRecipes() {
	return useQuery({
		queryKey: queryKeys.recipes.user,
		queryFn: fetchUserRecipes,
		staleTime: 5 * 60 * 1000, // 5 minutes
	});
}
```

### **2. Background Refetching**

```typescript
export function useRecipe(recipeId: number) {
	return useQuery({
		queryKey: queryKeys.recipes.detail(recipeId),
		queryFn: fetchRecipe,
		refetchOnWindowFocus: false, // Disable refetch on window focus
		refetchOnMount: false, // Only refetch if data is stale
	});
}
```

### **3. Selective Refetching**

```typescript
// Only refetch specific queries instead of all
onSuccess: async data => {
	await queryClient.refetchQueries({
		queryKey: queryKeys.recipes.detail(data.recipeId),
		exact: true, // Only refetch exact match
	});
};
```

## 📊 **Monitoring and Debugging**

### **1. Query DevTools**

Enable React Query DevTools in development:

```typescript
// In your app
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
	return (
		<>
			{/* Your app */}
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
}
```

### **2. Debug Logging**

```typescript
// Add to mutation hooks for debugging
onSuccess: async (data) => {
  console.log('Mutation successful, refetching queries...');
  await refetchHelpers.refetchAllRecipes(queryClient);
  console.log('Queries refetched successfully');
},
```

## 🎉 **Summary**

This comprehensive system provides:

- **Automatic refetching** for all mutations
- **Centralized query key management**
- **Type-safe interfaces** for all data
- **Optimized performance** with selective refetching
- **Future-proof architecture** for easy expansion
- **Consistent patterns** across the entire app

The system ensures that users always see the most up-to-date data without manual refreshes, providing a seamless and responsive user experience.
