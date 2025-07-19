# Shopping List Feature Documentation

## Overview

The Shopping List feature provides users with a comprehensive tool to manage their grocery shopping needs. It includes auto-generation from meal plans, manual list creation, and item management with progress tracking.

## Features

### 🛒 **Core Functionality**

- **Auto-Generation**: Create shopping lists from meal plans with ingredient aggregation
- **Manual Creation**: Build custom shopping lists from scratch
- **Item Management**: Add, edit, remove, and check off items
- **Progress Tracking**: Visual progress indicators and completion statistics
- **Customization**: Add quantities, units, and notes to items

### 📱 **User Interface**

- **Overview Page**: Grid view of all shopping lists with progress indicators
- **Detail Page**: Full editing interface with real-time updates
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Consistent Theme**: Matches the overall application design

## Architecture

### Database Schema

```prisma
model ShoppingList {
  id              Int       @id @default(autoincrement())
  listName        String
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  // Relations
  userId          Int
  user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)

  mealPlanId      Int?
  mealPlan        MealPlan? @relation(fields: [mealPlanId], references: [id], onDelete: SetNull)

  items           ShoppingListItem[]

  @@index([userId])
  @@index([mealPlanId])
}

model ShoppingListItem {
  id              Int       @id @default(autoincrement())
  itemName        String
  quantity        Decimal
  unit            String?
  notes           String?
  isCompleted     Boolean   @default(false)
  sortOrder       Int       @default(0)
  createdAt       DateTime  @default(now())

  // Relations
  listId          Int
  list            ShoppingList @relation(fields: [listId], references: [id], onDelete: Cascade)

  @@index([listId])
  @@index([sortOrder])
}
```

### API Routes

#### `/api/shopping-lists`

- `GET`: Fetch all shopping lists (with optional meal plan filter)
- `POST`: Create new shopping list

#### `/api/shopping-lists/[listId]`

- `GET`: Fetch specific shopping list
- `PUT`: Update shopping list
- `DELETE`: Delete shopping list

#### `/api/shopping-lists/generate`

- `POST`: Generate shopping list from meal plan

### React Hooks

#### Queries

- `useShoppingLists(mealPlanId?)`: Fetch shopping lists
- `useShoppingList(listId)`: Fetch specific shopping list

#### Mutations

- `useCreateShoppingList()`: Create new shopping list
- `useGenerateShoppingList()`: Generate from meal plan
- `useUpdateShoppingList()`: Update shopping list
- `useDeleteShoppingList()`: Delete shopping list

## User Flow

### 1. **Creating Shopping Lists**

#### Auto-Generation from Meal Plan

1. User navigates to Shopping Lists page
2. Clicks "Generate from Meal Plan" button
3. Selects a meal plan from dropdown
4. Optionally provides custom list name
5. System aggregates all ingredients from meal plan recipes
6. Scales quantities based on servings in meal plan
7. Creates shopping list with all items

#### Manual Creation

1. User clicks "Create List" button
2. Enters list name
3. Adds items with quantities, units, and notes
4. Saves the list

### 2. **Managing Shopping Lists**

#### Overview Page

- View all shopping lists in card format
- See progress indicators and completion stats
- Quick access to edit or delete lists
- Filter by meal plan association

#### Detail Page

- Full editing interface for list items
- Real-time progress tracking
- Add/remove items dynamically
- Check off completed items
- Save changes automatically

### 3. **Item Management**

#### Adding Items

- Click "Add Item" button
- Fill in item name, quantity, unit, notes
- Items are added to the list immediately

#### Editing Items

- Click on any field to edit
- Changes are saved automatically
- Visual feedback for completed items

#### Removing Items

- Click trash icon next to item
- Item is removed from list
- Changes are saved automatically

## Technical Implementation

### Auto-Generation Algorithm

```typescript
// 1. Fetch meal plan with all entries and recipe ingredients
const mealPlan = await prisma.mealPlan.findFirst({
	where: { id: mealPlanId, userId },
	include: {
		entries: {
			include: {
				recipe: {
					include: {
						ingredients: {
							include: {
								ingredient: true,
								unit: true,
							},
						},
					},
				},
			},
		},
	},
});

// 2. Aggregate ingredients by name and unit
const ingredientMap = new Map();

mealPlan.entries.forEach(entry => {
	entry.recipe.ingredients.forEach(recipeIngredient => {
		const key = `${recipeIngredient.ingredient.name}-${recipeIngredient.unit.unitName}`;
		const scaledQuantity = Number(recipeIngredient.quantity) * entry.servingsToPrepare;

		if (ingredientMap.has(key)) {
			ingredientMap.get(key).quantity += scaledQuantity;
		} else {
			ingredientMap.set(key, {
				itemName: recipeIngredient.ingredient.name,
				quantity: scaledQuantity,
				unit: recipeIngredient.unit.unitName,
				notes: recipeIngredient.notes,
			});
		}
	});
});

// 3. Create shopping list items
const shoppingListItems = Array.from(ingredientMap.values());
```

### State Management

#### Local State

- `items`: Array of shopping list items
- `listName`: Current list name
- Form states for dialogs

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

- `ShoppingListPage`: Overview page with grid layout
- `ShoppingListDetailPage`: Detailed editing interface
- `CreateShoppingListDialog`: Manual list creation
- `GenerateFromMealPlanDialog`: Auto-generation from meal plan
- `DeleteShoppingListDialog`: Confirmation dialog for deletion

### Reusable Components

- `ShoppingListCard`: Card view for overview page
- `ShoppingListItemRow`: Individual item row for editing
- Progress bars and completion indicators

## Data Flow

### 1. **Fetching Data**

```
User visits page → useShoppingLists hook → API call → Cache data → Render UI
```

### 2. **Creating Lists**

```
User submits form → useCreateShoppingList mutation → API call → Cache invalidation → UI update
```

### 3. **Updating Lists**

```
User makes changes → useUpdateShoppingList mutation → API call → Cache invalidation → UI update
```

### 4. **Auto-Generation**

```
User selects meal plan → useGenerateShoppingList mutation → API processes ingredients → Creates list → Cache invalidation → UI update
```

## Performance Considerations

### Optimization Strategies

- **Lazy Loading**: Load shopping lists on demand
- **Pagination**: Handle large numbers of lists efficiently
- **Debouncing**: Prevent excessive API calls during editing
- **Caching**: TanStack Query for efficient data management

### Database Indexes

- `userId` index for user-specific queries
- `mealPlanId` index for meal plan associations
- `listId` and `sortOrder` indexes for item queries

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
- Utility function testing

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

- **Smart Categorization**: Auto-categorize items by store section
- **Price Tracking**: Add price fields and budget tracking
- **Sharing**: Share lists with family members
- **Templates**: Save and reuse common shopping lists
- **Integration**: Connect with grocery delivery services

### Technical Improvements

- **Real-time Updates**: WebSocket integration for collaborative editing
- **Offline Support**: Service worker for offline functionality
- **Advanced Search**: Full-text search across items and notes
- **Bulk Operations**: Select multiple items for batch actions

## Troubleshooting

### Common Issues

#### Auto-Generation Not Working

- Check meal plan has recipes with ingredients
- Verify ingredient quantities are properly set
- Ensure meal plan belongs to current user

#### Items Not Saving

- Check network connectivity
- Verify form validation passes
- Check browser console for errors

#### Performance Issues

- Monitor database query performance
- Check for large shopping lists
- Verify proper indexing is in place

### Debug Tools

- Browser developer tools for client-side debugging
- Database logs for server-side issues
- TanStack Query DevTools for state debugging

## Conclusion

The Shopping List feature provides a comprehensive solution for managing grocery shopping needs. It seamlessly integrates with the meal planning system while offering flexibility for manual list creation. The feature follows established patterns and maintains consistency with the overall application architecture.
