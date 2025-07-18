# Recipe Detail Page System

## Overview

The Recipe Detail Page (`/recipes/[recipeId]`) provides a comprehensive view of individual recipes with full information, interactive features, and a modern, responsive design. This page serves as the main destination for users viewing recipe details and is accessible to all users (both authenticated and unauthenticated).

## Features

### 🎯 Core Functionality

- **Complete Recipe Information**: Displays all recipe data including title, description, cooking time, servings, and status
- **Media Gallery**: Interactive image gallery with navigation arrows and thumbnail previews
- **Preparation Steps**: Numbered step-by-step instructions
- **Ingredients List**: Detailed ingredients with quantities, units, and notes
- **Nutritional Information**: Complete nutritional data with verification status
- **User Reviews**: Community reviews with ratings and comments
- **Recipe Statistics**: Creation date, update date, verification date, and usage stats

### 🎨 User Interface

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Tabbed Interface**: Organized content in Overview, Ingredients, and Reviews tabs
- **Status Badges**: Clear visual indicators for recipe verification status
- **Loading States**: Skeleton loaders for better user experience
- **Error Handling**: User-friendly error messages and fallback states

### 🔧 Interactive Features

- **Favorite Toggle**: Add/remove recipes from favorites (authenticated users)
- **Share Functionality**: Native share API or clipboard fallback
- **Image Navigation**: Arrow controls and thumbnail selection for multiple images
- **Quick Actions**: Direct links to edit, meal planning, and collections
- **Back Navigation**: Seamless return to previous page

### 📱 Navigation & UX

- **Breadcrumb Navigation**: Clear path back to previous pages
- **Consistent Design**: Matches the overall app theme and design system
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized loading with TanStack Query caching

## Technical Implementation

### API Routes

#### `GET /api/recipes/[recipeId]`

Returns complete recipe data including all related information:

```typescript
{
  id: number;
  title: string;
  description: string | null;
  cookingTimeMinutes: number | null;
  servings: number | null;
  status: 'pending_verification' | 'verified' | 'needs_revision';
  verifiedAt: string | null;
  healthTips: string | null;
  author: { id: number; username: string; fullName: string | null; };
  verifiedBy: { id: number; username: string; fullName: string | null; } | null;
  media: Array<{ id: number; url: string; caption: string | null; mediaType: string; }>;
  nutritionalInfo: {
    calories: number | null;
    proteinGrams: number | null;
    carbohydratesGrams: number | null;
    fatGrams: number | null;
    fiberGrams: number | null;
    sugarGrams: number | null;
    sodiumMg: number | null;
    dataSource: 'estimated_api' | 'verified_nutritionist';
  } | null;
  steps: Array<{ id: number; stepNumber: number; instruction: string; }>;
  ingredients: Array<{
    recipeId: number;
    ingredientId: number;
    quantity: number;
    notes: string | null;
    ingredient: { id: number; name: string; };
    unit: { id: number; unitName: string; abbreviation: string | null; };
  }>;
  tags: Array<{ id: number; name: string; type: string; }>;
  reviews: Array<{
    id: number;
    rating: number;
    comment: string | null;
    createdAt: string;
    user: { id: number; username: string; fullName: string | null; };
  }>;
  averageRating: number | null;
  reviewCount: number;
}
```

#### `GET /api/recipes/[recipeId]/reviews`

Returns reviews for a specific recipe:

```typescript
Array<{
	id: number;
	rating: number;
	comment: string | null;
	createdAt: string;
	user: { id: number; username: string; fullName: string | null };
}>;
```

### Data Fetching

Uses TanStack Query hooks for efficient data fetching and caching:

```typescript
// Fetch recipe details
const { data: recipe, isLoading: recipeLoading, error: recipeError } = useRecipe(recipeId);

// Fetch recipe reviews
const { data: reviews, isLoading: reviewsLoading } = useRecipeReviews(recipeId);

// Fetch user favorites for favorite toggle
const { data: userFavorites } = useUserFavorites();
```

### State Management

- **Image Gallery**: Manages current image index and navigation
- **Active Tab**: Tracks which tab is currently selected
- **Favorite Status**: Determines if recipe is in user's favorites
- **Loading States**: Handles loading and error states for different data

## UI Components

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│ Back Button | Recipe Title & Meta | Action Buttons         │
├─────────────────────────────────────────────────────────────┤
│ Media Gallery (with navigation)                             │
├─────────────────────────────────────────────────────────────┤
│ Status Badge                                                │
├─────────────────────────────────────────────────────────────┤
│ Main Content (2/3)          │ Sidebar (1/3)                │
│ ┌─────────────────────────┐ │ ┌─────────────────────────┐  │
│ │ Tabbed Interface        │ │ │ Author Info             │  │
│ │ - Overview              │ │ ├─────────────────────────┤  │
│ │ - Ingredients           │ │ │ Recipe Stats            │  │
│ │ - Reviews               │ │ ├─────────────────────────┤  │
│ └─────────────────────────┘ │ │ Quick Actions           │  │
│                             │ └─────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Key Components

1. **Recipe Header**: Title, description, meta information, and action buttons
2. **Media Gallery**: Image carousel with navigation and thumbnails
3. **Tabbed Content**: Overview, Ingredients, and Reviews sections
4. **Recipe Stats**: Author information, creation dates, and usage statistics
5. **Quick Actions**: Edit, meal planning, and collection buttons

## User Experience Features

### Loading States

- Skeleton loaders for all content areas
- Progressive loading of different sections
- Smooth transitions between states

### Error Handling

- 404 page for non-existent recipes
- Graceful fallbacks for missing data
- User-friendly error messages

### Responsive Design

- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly interactions

### Accessibility

- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader compatibility

## Integration Points

### Navigation

- **From Dashboard**: Recipe cards link to detail pages
- **From Search**: Search results link to detail pages
- **From Favorites**: Favorite recipes link to detail pages
- **From Collections**: Collection items link to detail pages

### Actions

- **Edit Recipe**: Links to edit page (for recipe authors)
- **Add to Meal Plan**: Links to meal planning
- **Add to Collection**: Links to collections
- **Share**: Native share or clipboard copy
- **Favorite**: Toggle favorite status

### Data Flow

- **Recipe Data**: Fetched from API with full related data
- **Reviews**: Separate API call for better performance
- **Favorites**: Integrated with user's favorite system
- **Caching**: TanStack Query provides efficient caching

## Performance Considerations

### Data Optimization

- Separate API calls for different data types
- Efficient database queries with proper includes
- Pagination for large datasets (reviews)

### Caching Strategy

- TanStack Query caching for recipe data
- Stale-while-revalidate pattern
- Background refetching for fresh data

### Image Optimization

- Responsive images with proper sizing
- Lazy loading for better performance
- Optimized image formats

## Security & Permissions

### Access Control

- Public access to all recipe details
- Authentication required for interactive features
- Role-based access for editing capabilities

### Data Validation

- Input validation on all user interactions
- Sanitization of user-generated content
- Protection against XSS attacks

## Future Enhancements

### Planned Features

- **Recipe Comments**: User comments and discussions
- **Recipe Variations**: Alternative versions and modifications
- **Nutritional Calculator**: Adjustable serving sizes
- **Print/Export**: PDF generation and printing
- **Social Sharing**: Enhanced social media integration
- **Recipe Collections**: Related recipes and recommendations

### Technical Improvements

- **Real-time Updates**: WebSocket integration for live data
- **Offline Support**: Service worker for offline viewing
- **Advanced Search**: Full-text search within recipes
- **Analytics**: User interaction tracking and insights

## Testing

### Test Coverage

- **Unit Tests**: Component functionality and data handling
- **Integration Tests**: API endpoints and data flow
- **E2E Tests**: Complete user workflows
- **Performance Tests**: Loading times and responsiveness

### Test Scenarios

- Recipe viewing with all data types
- Image gallery navigation
- Tab switching and content display
- Favorite toggle functionality
- Share functionality
- Error states and edge cases
- Responsive design on different devices

## Monitoring & Analytics

### Performance Metrics

- Page load times
- Image loading performance
- API response times
- User interaction patterns

### User Analytics

- Most viewed recipes
- Popular features and interactions
- User engagement metrics
- Conversion tracking

## Documentation & Maintenance

### Code Documentation

- Comprehensive TypeScript interfaces
- Component documentation with examples
- API documentation with schemas
- Usage examples and best practices

### Maintenance Guidelines

- Regular dependency updates
- Performance monitoring and optimization
- Security updates and patches
- User feedback integration

---

This recipe detail page provides a comprehensive, user-friendly interface for viewing recipe information while maintaining excellent performance and accessibility standards. The modular design allows for easy maintenance and future enhancements.
