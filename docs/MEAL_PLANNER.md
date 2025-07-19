# Meal Planner Documentation

## Overview

The Meal Planner is a comprehensive feature that allows users to create weekly meal plans and organize their recipes by day and meal type. It provides a calendar-based interface with drag-and-drop functionality for easy meal planning.

## Features

### Core Functionality

1. **Create Meal Plans**: Users can create new meal plans with custom names and date ranges
2. **Calendar View**: Weekly calendar interface showing all meal types (Breakfast, Lunch, Dinner, Snack)
3. **Add Recipes**: Add recipes to specific meal slots with customizable serving sizes
4. **Remove Recipes**: Remove recipes from meal plans with confirmation
5. **Visual Organization**: Color-coded meal types for easy identification
6. **Responsive Design**: Works on desktop and mobile devices

### Meal Types

- **Breakfast** (Orange theme)
- **Lunch** (Blue theme)
- **Dinner** (Purple theme)
- **Snack** (Green theme)

## Database Schema

### MealPlan Model

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
}
```

### MealPlanEntry Model

```prisma
model MealPlanEntry {
  id                  Int       @id @default(autoincrement())
  mealDate            DateTime  @db.Date
  mealType            MealType
  servingsToPrepare   Int       @default(1)

  // Relations
  planId              Int
  plan                MealPlan @relation(fields: [planId], references: [id], onDelete: Cascade)

  recipeId            Int
  recipe              Recipe   @relation(fields: [recipeId], references: [id], onDelete: Cascade)
}
```

## API Endpoints

### Meal Plans

#### GET /api/meal-plans

- **Description**: Get all meal plans for the authenticated user
- **Response**: Array of meal plans with entries and recipe details
- **Authentication**: Required

#### POST /api/meal-plans

- **Description**: Create a new meal plan
- **Body**: `{ planName: string, startDate: string, endDate: string }`
- **Response**: Created meal plan with entries
- **Authentication**: Required

### Meal Plan Entries

#### GET /api/meal-plans/[planId]/entries

- **Description**: Get all entries for a specific meal plan
- **Response**: Array of meal plan entries with recipe details
- **Authentication**: Required

#### POST /api/meal-plans/[planId]/entries

- **Description**: Add a recipe to a meal plan
- **Body**: `{ recipeId: number, mealDate: string, mealType: MealType, servingsToPrepare?: number }`
- **Response**: Created meal plan entry
- **Authentication**: Required

#### DELETE /api/meal-plans/[planId]/entries/[entryId]

- **Description**: Remove a recipe from a meal plan
- **Response**: Success confirmation
- **Authentication**: Required

## React Hooks

### Queries

#### useMealPlans()

- **Description**: Fetch all meal plans for the current user
- **Returns**: `{ data, isLoading, error }`
- **Query Key**: `['meal-plans', 'list']`

#### useMealPlanEntries(planId: number)

- **Description**: Fetch entries for a specific meal plan
- **Returns**: `{ data, isLoading, error }`
- **Query Key**: `['meal-plans', 'detail', planId, 'entries']`
- **Enabled**: Only when planId is provided

### Mutations

#### useCreateMealPlan()

- **Description**: Create a new meal plan
- **Parameters**: `CreateMealPlanData`
- **Invalidates**: Meal plans list
- **Toast**: Success/error notifications

#### useAddMealPlanEntry()

- **Description**: Add a recipe to a meal plan
- **Parameters**: `{ planId: number, data: AddMealPlanEntryData }`
- **Invalidates**: Specific meal plan entries and meal plans list
- **Toast**: Success/error notifications

#### useDeleteMealPlanEntry()

- **Description**: Remove a recipe from a meal plan
- **Parameters**: `{ planId: number, entryId: number }`
- **Invalidates**: Specific meal plan entries and meal plans list
- **Toast**: Success/error notifications

## Pages

### /dashboard/meal-planner

**Main Meal Planner Page**

- **Features**:

  - Overview of all meal plans
  - Create new meal plan dialog
  - Visual calendar cards showing meal distribution
  - Navigation to detailed views

- **Components**:
  - `CreateMealPlanDialog`: Modal for creating new meal plans
  - `MealPlanCard`: Card showing meal plan summary with mini calendar
  - `MealPlanSkeleton`: Loading skeleton for meal plan cards

### /dashboard/meal-planner/[planId]

**Detailed Meal Plan View**

- **Features**:

  - Full weekly calendar grid
  - Add recipes to specific meal slots
  - Remove recipes from meal slots
  - Visual meal type organization

- **Components**:
  - `AddRecipeDialog`: Modal for adding recipes to meal slots
  - `RecipeCard`: Card showing recipe in meal slot with remove option
  - `MealSlot`: Container for each meal type with recipes

## User Interface

### Design Principles

1. **Consistent Theme**: Uses the established green theme with color-coded meal types
2. **Responsive Layout**: Grid-based layout that adapts to screen size
3. **Visual Hierarchy**: Clear distinction between different meal types and days
4. **Interactive Elements**: Hover effects and smooth transitions
5. **Accessibility**: Proper ARIA labels and keyboard navigation

### Color Scheme

- **Breakfast**: Orange (`bg-orange-100 text-orange-800 border-orange-200`)
- **Lunch**: Blue (`bg-blue-100 text-blue-800 border-blue-200`)
- **Dinner**: Purple (`bg-purple-100 text-purple-800 border-purple-200`)
- **Snack**: Green (`bg-green-100 text-green-800 border-green-200`)

### Navigation Flow

1. **Dashboard** → **Meal Planner** (via sidebar)
2. **Meal Planner** → **Create Meal Plan** (via dialog)
3. **Meal Plan Card** → **View Details** (via button)
4. **Meal Plan Details** → **Add Recipe** (via meal slot)
5. **Back Navigation**: Consistent back buttons throughout

## Data Flow

### Creating a Meal Plan

1. User clicks "Create Meal Plan" button
2. Dialog opens with form (name, start date, end date)
3. Form submission triggers `useCreateMealPlan` mutation
4. API creates meal plan in database
5. Query cache is invalidated
6. UI updates to show new meal plan
7. Success toast is displayed

### Adding a Recipe

1. User clicks "Add Recipe" in a meal slot
2. Dialog opens with recipe search and selection
3. User selects recipe and serving size
4. Form submission triggers `useAddMealPlanEntry` mutation
5. API creates meal plan entry in database
6. Query cache is invalidated
7. UI updates to show recipe in meal slot
8. Success toast is displayed

### Removing a Recipe

1. User clicks remove button on recipe card
2. `useDeleteMealPlanEntry` mutation is triggered
3. API deletes meal plan entry from database
4. Query cache is invalidated
5. UI updates to remove recipe from meal slot
6. Success toast is displayed

## Error Handling

### API Errors

- **401 Unauthorized**: Redirect to signin page
- **404 Not Found**: Show error message with retry option
- **500 Server Error**: Show generic error with retry option

### Validation Errors

- **Missing Fields**: Form validation prevents submission
- **Invalid Dates**: Date picker ensures valid date ranges
- **Duplicate Entries**: API prevents duplicate recipe entries

### Network Errors

- **Connection Issues**: Retry mechanism with exponential backoff
- **Timeout**: User-friendly timeout messages
- **Offline**: Graceful degradation with cached data

## Performance Considerations

### Query Optimization

- **Selective Loading**: Only load meal plan entries when viewing details
- **Pagination**: Future enhancement for large meal plans
- **Caching**: TanStack Query provides intelligent caching

### UI Performance

- **Virtual Scrolling**: For large meal plans (future enhancement)
- **Lazy Loading**: Images and media content
- **Debounced Search**: Recipe search with debounced input

## Testing

### Test Script

Run the meal planner test script to verify functionality:

```bash
npx tsx scripts/test-meal-planner.ts
```

### Test Coverage

- ✅ Database operations (create, read, delete)
- ✅ API endpoints
- ✅ React hooks
- ✅ UI components
- ✅ Navigation flows

## Future Enhancements

### Planned Features

1. **Drag and Drop**: Visual drag-and-drop for moving recipes between slots
2. **Bulk Operations**: Add multiple recipes at once
3. **Meal Plan Templates**: Pre-built meal plan templates
4. **Shopping List Integration**: Auto-generate shopping lists from meal plans
5. **Nutritional Analysis**: Calculate total nutrition for meal plans
6. **Sharing**: Share meal plans with other users
7. **Recurring Plans**: Set up recurring weekly meal plans

### Technical Improvements

1. **Real-time Updates**: WebSocket integration for collaborative planning
2. **Offline Support**: Service worker for offline meal planning
3. **Advanced Search**: Filter recipes by dietary restrictions, cooking time, etc.
4. **Meal Plan Analytics**: Track meal planning habits and preferences

## Troubleshooting

### Common Issues

1. **Meal Plan Not Loading**

   - Check user authentication
   - Verify database connection
   - Check browser console for errors

2. **Can't Add Recipes**

   - Ensure user has created recipes
   - Check recipe permissions
   - Verify meal plan belongs to user

3. **Date Display Issues**
   - Check date-fns installation
   - Verify date format consistency
   - Check timezone settings

### Debug Commands

```bash
# Test meal planner functionality
npx tsx scripts/test-meal-planner.ts

# Check database schema
npx prisma db pull

# Reset database (if needed)
npx prisma db push --force-reset
```

## Security Considerations

### Authentication

- All API endpoints require authentication
- User can only access their own meal plans
- Session validation on every request

### Data Validation

- Input sanitization for all user inputs
- Date range validation
- Recipe ownership verification

### Authorization

- Users can only modify their own meal plans
- Recipe access is restricted to user's recipes
- No cross-user data access

## Integration Points

### Recipe System

- Meal planner integrates with existing recipe system
- Uses `useUserRecipes` hook for recipe selection
- Maintains recipe relationships and metadata

### User System

- Integrates with NextAuth.js authentication
- Uses user session for authorization
- Respects user role permissions

### Navigation System

- Integrated with dashboard sidebar navigation
- Consistent back navigation patterns
- Breadcrumb navigation support

---

This documentation provides a comprehensive overview of the Meal Planner feature, including its architecture, implementation details, and usage guidelines.
