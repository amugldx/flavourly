# Favorites System

## Overview

The favorites system allows users to save and organize their favorite recipes for quick access. Users can add recipes to their favorites, view their collection, and remove recipes from their favorites list.

## Features

### Core Functionality

- **Add to Favorites**: Users can bookmark recipes they like
- **View Favorites**: Grid view of all favorited recipes with rich information
- **Remove from Favorites**: Users can remove recipes from their favorites
- **Real-time Updates**: UI updates immediately when favorites are modified
- **Responsive Design**: Works seamlessly across all device sizes

### User Experience

- **Visual Feedback**: Loading states, success/error notifications
- **Hover Effects**: Interactive cards with smooth animations
- **Quick Actions**: View recipe and remove from favorites with one click
- **Empty State**: Helpful guidance when no favorites exist

## Technical Implementation

### Database Schema

The favorites system uses the `FavoriteRecipe` model with a many-to-many relationship:

```prisma
model FavoriteRecipe {
  createdAt   DateTime @default(now())

  // Relations
  userId      Int
  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)

  recipeId    Int
  recipe      Recipe    @relation(fields: [recipeId], references: [id], onDelete: Cascade)

  @@id([userId, recipeId])
}
```

### API Endpoints

#### GET `/api/favorites`

Fetches all favorite recipes for the authenticated user.

**Response:**

```typescript
interface FavoriteRecipe {
	id: number;
	createdAt: string;
	recipe: {
		id: number;
		title: string;
		description: string | null;
		cookingTimeMinutes: number | null;
		servings: number | null;
		status: 'pending_verification' | 'verified' | 'needs_revision';
		media: Array<{
			id: number;
			url: string;
			caption: string | null;
			mediaType: string;
		}>;
		averageRating: number | null;
		reviewCount: number;
		// ... other recipe fields
	};
}
```

#### DELETE `/api/favorites/[recipeId]`

Removes a recipe from the user's favorites.

**Response:**

```json
{
	"message": "Recipe removed from favorites"
}
```

### Frontend Components

#### Favorites Page (`/dashboard/favorites`)

**Features:**

- Grid layout with responsive design
- Recipe cards with images, titles, and metadata
- Status badges (Verified, Pending, Needs Revision)
- Quick action buttons (View, Remove)
- Loading states and error handling
- Empty state with navigation options

**Key Components:**

- `FavoritesPage`: Main page component
- Recipe cards with hover effects
- Action buttons with confirmation
- Skeleton loading states

#### Navigation Integration

The favorites page is accessible through:

- Dashboard sidebar navigation
- Direct URL: `/dashboard/favorites`
- Breadcrumb navigation

### Data Management

#### TanStack Query Integration

**Query Hook:**

```typescript
export function useUserFavorites() {
	return useQuery({
		queryKey: queryKeys.favorites.user,
		queryFn: async (): Promise<FavoriteRecipe[]> => {
			const response = await fetch('/api/favorites');
			if (!response.ok) {
				throw new Error('Failed to fetch favorites');
			}
			return response.json();
		},
	});
}
```

**Mutation Hook:**

```typescript
export function useRemoveFromFavorites() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (recipeId: number): Promise<void> => {
			const response = await fetch(`/api/favorites/${recipeId}`, {
				method: 'DELETE',
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.error || 'Failed to remove from favorites');
			}
		},
		onSuccess: async (_, recipeId) => {
			toast.success('Removed from favorites!');
			await Promise.all([
				queryClient.refetchQueries({ queryKey: queryKeys.favorites.user }),
				refetchHelpers.refetchRecipe(queryClient, recipeId),
			]);
		},
		onError: (error: Error) => {
			toast.error(error.message || 'Failed to remove from favorites');
		},
	});
}
```

### Query Key Management

```typescript
export const queryKeys = {
	// ... other keys
	favorites: {
		user: ['favorites', 'user'] as const,
		byRecipe: (recipeId: number) => ['favorites', 'recipe', recipeId] as const,
	},
};
```

## User Interface Design

### Visual Design

**Color Scheme:**

- Primary: Heart icon and interactive elements
- Secondary: Status badges and metadata
- Muted: Descriptions and timestamps

**Typography:**

- Headings: Bold, large text for hierarchy
- Body: Readable text for descriptions
- Metadata: Small, muted text for details

**Layout:**

- Grid system: 1-4 columns based on screen size
- Card-based design with consistent spacing
- Responsive breakpoints for mobile, tablet, desktop

### Interactive Elements

**Recipe Cards:**

- Hover effects with shadow and image scaling
- Action buttons that appear on hover
- Status badges for recipe verification status
- Metadata display (cooking time, servings, rating)

**Action Buttons:**

- View recipe: Navigate to recipe detail page
- Remove from favorites: Delete with confirmation
- Loading states during operations

**Empty State:**

- Heart icon illustration
- Helpful messaging
- Navigation buttons to browse recipes

## Error Handling

### API Error Handling

- Network errors with retry options
- Authentication errors with redirect
- Server errors with user-friendly messages

### UI Error States

- Loading skeletons during data fetch
- Error messages with retry buttons
- Graceful degradation for missing data

### Data Validation

- Recipe existence validation
- User permission checks
- Input sanitization

## Performance Considerations

### Optimization Strategies

- **Lazy Loading**: Images load as needed
- **Pagination**: Future implementation for large collections
- **Caching**: TanStack Query provides intelligent caching
- **Optimistic Updates**: UI updates immediately on actions

### Database Optimization

- **Indexes**: Proper indexing on user and recipe IDs
- **Eager Loading**: Include related data in single queries
- **Cascade Deletes**: Automatic cleanup when recipes are deleted

## Security

### Authentication

- All endpoints require valid session
- User can only access their own favorites
- CSRF protection via NextAuth

### Authorization

- Recipe ownership validation
- Role-based access control
- Input validation and sanitization

## Future Enhancements

### Planned Features

1. **Collections Integration**: Add favorites to custom collections
2. **Bulk Operations**: Select and manage multiple favorites
3. **Sorting Options**: Sort by date added, rating, cooking time
4. **Search**: Filter favorites by recipe name or ingredients
5. **Sharing**: Share favorite recipes with other users
6. **Export**: Export favorites list for backup

### Technical Improvements

1. **Real-time Updates**: WebSocket integration for live updates
2. **Offline Support**: Service worker for offline access
3. **Analytics**: Track favorite interactions and patterns
4. **Performance**: Virtual scrolling for large lists
5. **Accessibility**: Enhanced screen reader support

## Testing

### Test Coverage

- **Unit Tests**: Individual component testing
- **Integration Tests**: API endpoint testing
- **E2E Tests**: Full user workflow testing
- **Performance Tests**: Load testing for large datasets

### Test Scenarios

1. Add recipe to favorites
2. Remove recipe from favorites
3. View favorites list
4. Handle empty state
5. Error handling and recovery
6. Responsive design validation

## Monitoring and Analytics

### Key Metrics

- Favorites added per user
- Most favorited recipes
- User engagement patterns
- Error rates and performance

### Logging

- User actions logged for analytics
- Error tracking for debugging
- Performance monitoring for optimization

## Conclusion

The favorites system provides a seamless way for users to save and organize their favorite recipes. With robust backend APIs, responsive frontend design, and comprehensive error handling, it delivers a smooth user experience that encourages engagement and recipe discovery.

The system is built with scalability in mind, using modern technologies like TanStack Query for state management, Prisma for database operations, and Next.js for the full-stack framework. This foundation allows for easy extension and enhancement as the application grows.
