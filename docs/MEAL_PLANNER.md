# Meal Planner Feature Documentation

## Overview

The Meal Planner feature allows users to create and manage meal plans with a weekly calendar interface. Users can add recipes to specific meal slots, view their plans, and generate shopping lists from their meal plans.

## Features

### 🗓️ **Core Functionality**

- **Weekly Calendar View**: Visual calendar interface showing days and meal types
- **Recipe Management**: Add and remove recipes from meal slots
- **Meal Types**: Support for Breakfast, Lunch, Dinner, and Snack
- **Servings Control**: Specify how many servings to prepare for each recipe
- **Recipe Selection**: Advanced combobox with search functionality for both user recipes and favorited recipes

### 📱 **User Interface**

- **Week/Day Views**: Toggle between weekly overview and daily detail views
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Visual Indicators**: Color-coded meal types and progress tracking
- **Intuitive Navigation**: Easy switching between views and meal slots

## Architecture

### Database Schema

```prisma
model MealPlan {
  id              Int       @id @default(autoincrement())
  planName        String
  startDate       DateTime  @db.Date
  endDate         DateTime  @db.Date
  createdAt       DateTime  @default(now())

  // Relations
  userId          Int
  user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  entries         MealPlanEntry[]
  shoppingLists   ShoppingList[]

  /// @db.Check(constraint: "end_date >= start_date")
}

model MealPlanEntry {
  id                  Int       @id @default(autoincrement())
  mealDate            DateTime  @db.Date
  mealType            MealType
  servingsToPrepare   Int       @default(1) /// @db.Check(constraint: "servings_to_prepare > 0")

  // Relations
  planId              Int
  plan                MealPlan @relation(fields: [planId], references: [id], onDelete: Cascade)

  recipeId            Int
  recipe              Recipe   @relation(fields: [recipeId], references: [id], onDelete: Cascade)

  @@index([recipeId])
}

enum MealType {
  Breakfast
  Lunch
  Dinner
  Snack
}
```

### API Routes

#### `/api/meal-plans`

- `GET`: Fetch all meal plans for the user
- `POST`: Create a new meal plan

#### `/api/meal-plans/[planId]`

- `GET`: Fetch specific meal plan with entries
- `PUT`: Update meal plan details
- `DELETE`: Delete meal plan and all entries

#### `/api/meal-plans/[planId]/entries`

- `POST`: Add a new meal plan entry
- `DELETE`: Remove a meal plan entry

### React Hooks

#### Queries

- `useMealPlans()`: Fetch all meal plans
- `useMealPlan(planId)`: Fetch specific meal plan
- `useMealPlanEntries(planId)`: Fetch entries for a meal plan

#### Mutations

- `useCreateMealPlan()`: Create new meal plan
- `useUpdateMealPlan()`: Update meal plan
- `useDeleteMealPlan()`: Delete meal plan
- `useAddMealPlanEntry()`: Add recipe to meal plan
- `useDeleteMealPlanEntry()`: Remove recipe from meal plan

## User Flow

### 1. **Creating Meal Plans**

1. User navigates to Meal Planner page
2. Clicks "Create New Plan" button
3. Enters plan name and date range
4. System creates empty meal plan with calendar view

### 2. **Adding Recipes to Meal Plans**

#### Enhanced Recipe Selection

1. User clicks "Add Recipe" button on any meal slot
2. **Combobox Dialog Opens**: Modern search interface with:
   - **Search Functionality**: Real-time search through recipes
   - **Dual Recipe Sources**: Shows both user's own recipes and favorited recipes
   - **Recipe Details**: Displays cooking time and servings information
   - **Smart Deduplication**: Automatically removes duplicates between user and favorited recipes
3. User searches and selects desired recipe
4. User specifies number of servings to prepare
5. Recipe is added to the meal slot

#### Recipe Sources

- **User's Own Recipes**: All recipes created by the user
- **Favorited Recipes**: All recipes the user has marked as favorites
- **Automatic Deduplication**: If a recipe exists in both sources, it appears only once

### 3. **Managing Meal Plans**

#### Week View

- **Calendar Grid**: Visual representation of the week
- **Meal Type Columns**: Breakfast, Lunch, Dinner, Snack
- **Recipe Cards**: Shows recipe details in each slot
- **Quick Actions**: Add/remove recipes with one click

#### Day View

- **Detailed View**: Focus on single day
- **Full Recipe Information**: Complete recipe details
- **Servings Management**: Easy adjustment of servings
- **Recipe Removal**: Quick removal of recipes

### 4. **Recipe Management**

#### Adding Recipes

- **Combobox Interface**: Modern search and select experience
- **Real-time Search**: Instant filtering as user types
- **Rich Recipe Information**: Shows title, cooking time, and servings
- **Visual Feedback**: Clear indication of selected recipe

#### Removing Recipes

- **One-click Removal**: Trash icon on each recipe card
- **Confirmation**: Optional confirmation for destructive actions
- **Immediate Update**: UI updates instantly after removal

## Technical Implementation

### Enhanced Recipe Selection

#### Combobox Component

```typescript
// Custom RecipeCombobox component using shadcn Command
interface Recipe {
	id: number;
	title: string;
	cookingTimeMinutes?: number | string;
	servings?: number | string;
}

// Features:
// - Real-time search functionality
// - Keyboard navigation support
// - Rich recipe information display
// - Flexible data type handling
```

#### Recipe Data Integration

```typescript
// Combine user recipes and favorited recipes
const allRecipes = useMemo(() => {
	const userRecipeIds = new Set(userRecipes?.map(r => r.id) || []);
	const combined = [...(userRecipes || [])];

	// Add favorited recipes that aren't already in user recipes
	favoritedRecipes?.forEach(recipe => {
		if (!userRecipeIds.has(recipe.id)) {
			combined.push(recipe);
		}
	});

	return combined;
}, [userRecipes, favoritedRecipes]);
```

### State Management

#### Local State

- `selectedRecipe`: Currently selected recipe ID
- `servingsToPrepare`: Number of servings for the recipe
- Dialog open/close states

#### Server State

- TanStack Query for data fetching and caching
- Automatic cache invalidation on mutations
- Optimistic updates for better UX

### Error Handling

#### API Errors

- Proper error responses with meaningful messages
- Client-side error handling with toast notifications
- Fallback UI for error states

#### Validation

- Required field validation
- Data type validation
- Business logic validation (e.g., meal plan ownership)

## UI Components

### Main Components

- `MealPlannerPage`: Overview page with meal plan cards
- `EditMealPlanPage`: Detailed editing interface
- `AddRecipeDialog`: Enhanced recipe selection dialog
- `WeekView`: Weekly calendar interface
- `DayView`: Daily detailed view

### Enhanced Components

- `RecipeCombobox`: Modern search and select interface
- `MealSlot`: Individual meal slot with recipe cards
- `RecipeCard`: Recipe display with actions

## Data Flow

### 1. **Fetching Data**

```
User visits page → useMealPlans hook → API call → Cache data → Render UI
```

### 2. **Adding Recipes**

```
User opens dialog → useUserRecipes + useFavoritedRecipes → Combine data →
RecipeCombobox renders → User selects recipe → useAddMealPlanEntry mutation →
API call → Cache invalidation → UI update
```

### 3. **Removing Recipes**

```
User clicks remove → useDeleteMealPlanEntry mutation → API call →
Cache invalidation → UI update
```

## Performance Considerations

### Optimization Strategies

- **Lazy Loading**: Load meal plans on demand
- **Efficient Queries**: Optimized database queries with proper indexing
- **Caching**: TanStack Query for efficient data management
- **Memoization**: Prevent unnecessary re-renders

### Database Indexes

- `userId` index for user-specific queries
- `planId` index for meal plan entries
- `recipeId` index for recipe lookups

## Security

### Access Control

- User authentication required for all operations
- User ownership validation for all resources
- Proper authorization checks in API routes

### Data Validation

- Input sanitization and validation
- SQL injection prevention through Prisma ORM
- XSS prevention through proper escaping

## Testing Strategy

### Unit Tests

- Hook functionality testing
- Component rendering tests
- Recipe selection logic testing

### Integration Tests

- API endpoint testing
- Database operation testing
- User flow testing

### E2E Tests

- Complete user journey testing
- Cross-browser compatibility
- Mobile responsiveness testing

## Future Enhancements

### Planned Features

- **Drag and Drop**: Drag recipes between meal slots
- **Recipe Templates**: Save and reuse common meal combinations
- **Nutritional Tracking**: Track daily nutritional intake
- **Meal Prep Instructions**: Generate step-by-step prep instructions
- **Shopping List Integration**: Direct integration with shopping list feature

### Technical Improvements

- **Real-time Updates**: WebSocket integration for collaborative planning
- **Offline Support**: Service worker for offline functionality
- **Advanced Search**: Full-text search across recipe descriptions
- **Bulk Operations**: Select multiple recipes for batch actions

## Troubleshooting

### Common Issues

#### Recipe Selection Not Working

- Check if user has recipes or favorited recipes
- Verify API endpoints are responding correctly
- Check browser console for errors

#### Recipes Not Loading

- Check network connectivity
- Verify user authentication
- Check API response format

#### Performance Issues

- Monitor database query performance
- Check for large recipe lists
- Verify proper indexing is in place

### Debug Tools

- Browser developer tools for client-side debugging
- Database logs for server-side issues
- TanStack Query DevTools for state debugging

## Conclusion

The Meal Planner feature provides a comprehensive solution for meal planning with an enhanced recipe selection experience. The new combobox implementation offers users access to both their own recipes and favorited recipes through a modern, searchable interface. The feature seamlessly integrates with the overall application architecture and maintains consistency with established patterns.
