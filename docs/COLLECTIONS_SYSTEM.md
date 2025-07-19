# Collections System Documentation

## Overview

The Collections system allows users to organize their recipes into themed collections (e.g., "Quick Weeknight Dinners," "Holiday Baking"). This feature provides a way to group related recipes together for better organization and discovery.

## Features

### Core Functionality

- ✅ **Create Collections**: Users can create new collections with custom names and descriptions
- ✅ **View Collections**: Browse all user collections with recipe counts and preview images
- ✅ **Collection Details**: View individual collections with all contained recipes
- ✅ **Edit Collections**: Update collection names and descriptions
- ✅ **Delete Collections**: Remove collections (recipes remain intact)
- ✅ **Add Recipes**: Add existing recipes to collections
- ✅ **Remove Recipes**: Remove recipes from collections
- ✅ **Recipe Management**: Full CRUD operations for recipes within collections

### UI/UX Features

- ✅ **Responsive Design**: Works on desktop, tablet, and mobile devices
- ✅ **Card-based Layout**: Modern card design for collections and recipes
- ✅ **Loading States**: Skeleton loaders for better user experience
- ✅ **Error Handling**: Comprehensive error states and user feedback
- ✅ **Navigation**: Intuitive breadcrumb navigation
- ✅ **Confirmation Dialogs**: Safe deletion with confirmation prompts
- ✅ **Toast Notifications**: Real-time feedback for all actions
- ✅ **Empty States**: Helpful guidance when collections are empty

## Technical Implementation

### Database Schema

```sql
-- Collections table
model Collection {
  id              Int       @id @default(autoincrement())
  collectionName  String
  description     String?
  createdAt       DateTime  @default(now())
  userId          Int
  user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  recipes         CollectionRecipe[]
}

-- Many-to-many relationship between collections and recipes
model CollectionRecipe {
  collectionId    Int
  collection      Collection @relation(fields: [collectionId], references: [id], onDelete: Cascade)
  recipeId        Int
  recipe          Recipe     @relation(fields: [recipeId], references: [id], onDelete: Cascade)

  @@id([collectionId, recipeId])
}
```

### API Endpoints

#### Collections Management

- `GET /api/collections` - Fetch user's collections
- `POST /api/collections` - Create new collection
- `GET /api/collections/[id]` - Fetch collection details with recipes
- `PUT /api/collections/[id]` - Update collection
- `DELETE /api/collections/[id]` - Delete collection

#### Recipe Management in Collections

- `POST /api/collections/[id]/recipes` - Add recipe to collection
- `DELETE /api/collections/[id]/recipes?recipeId=X` - Remove recipe from collection

### Data Flow

1. **Collection Creation**: User creates collection → API validates → Database stores → UI updates
2. **Recipe Addition**: User adds recipe → API checks permissions → Database links → UI refreshes
3. **Collection Viewing**: User navigates → API fetches with recipes → UI displays cards
4. **Collection Editing**: User edits → API validates → Database updates → UI reflects changes
5. **Collection Deletion**: User deletes → API confirms → Database removes → UI updates

### State Management

The system uses TanStack Query for:

- **Caching**: Collections and recipes are cached for performance
- **Optimistic Updates**: UI updates immediately, then syncs with server
- **Background Refetching**: Data stays fresh automatically
- **Error Handling**: Graceful error states and retry mechanisms

## File Structure

```
app/
├── dashboard/
│   └── collections/
│       ├── page.tsx                    # Main collections page
│       ├── [collectionId]/
│       │   ├── page.tsx                # Collection detail page
│       │   └── edit/
│       │       └── page.tsx            # Edit collection page
├── api/
│   └── collections/
│       ├── route.ts                    # Collections CRUD
│       ├── [collectionId]/
│       │   ├── route.ts                # Individual collection operations
│       │   └── recipes/
│       │       └── route.ts            # Recipe management in collections
lib/
├── hooks/
│   ├── use-queries.ts                  # Collection query hooks
│   └── use-mutations.ts                # Collection mutation hooks
└── query-keys.ts                       # Centralized query key management
```

## Usage Guide

### For Users

#### Creating a Collection

1. Navigate to `/dashboard/collections`
2. Click "Create Collection" button
3. Enter collection name (required) and description (optional)
4. Click "Create Collection"

#### Adding Recipes to Collections

1. Go to a collection detail page
2. If collection is empty, click "Create Recipe" or "Browse Recipes"
3. For existing recipes, use the "Add to Collection" feature (future enhancement)

#### Managing Collections

- **View**: Click "View" on any collection card
- **Edit**: Click "Edit" to modify name and description
- **Delete**: Click "Delete" and confirm (recipes remain intact)

#### Removing Recipes from Collections

1. Go to collection detail page
2. Click "Remove" on any recipe card
3. Confirm the action

### For Developers

#### Adding Collection Support to Recipes

```typescript
// In recipe creation/editing forms
import { useUserCollections } from '@/lib/hooks/use-queries';
import { useAddRecipeToCollection } from '@/lib/hooks/use-mutations';

const collections = useUserCollections();
const addToCollection = useAddRecipeToCollection();

// Add collection selector to recipe forms
```

#### Extending Collection Features

```typescript
// Add new collection types
interface Collection {
	// ... existing fields
	type?: 'personal' | 'shared' | 'public';
	tags?: string[];
	coverImage?: string;
}

// Add collection sharing
interface SharedCollection {
	collectionId: number;
	sharedWith: number[]; // user IDs
	permissions: 'view' | 'edit' | 'admin';
}
```

## Performance Considerations

### Database Optimization

- **Indexes**: Proper indexing on `userId`, `collectionId`, and `recipeId`
- **Cascade Deletes**: Automatic cleanup when collections or recipes are deleted
- **Efficient Queries**: Optimized joins for fetching collections with recipes

### Frontend Optimization

- **Lazy Loading**: Collections load on demand
- **Pagination**: Large collections can be paginated (future enhancement)
- **Caching**: TanStack Query provides intelligent caching
- **Optimistic Updates**: UI responds immediately to user actions

### API Optimization

- **Validation**: Input validation prevents invalid data
- **Error Handling**: Comprehensive error responses
- **Rate Limiting**: Prevents abuse (future enhancement)

## Security

### Authentication & Authorization

- All collection operations require user authentication
- Users can only access their own collections
- API endpoints validate user ownership

### Data Validation

- Collection names: 1-100 characters, unique per user
- Descriptions: 0-500 characters
- Recipe IDs: Must exist and belong to user

### Input Sanitization

- All user inputs are sanitized and validated
- SQL injection protection via Prisma ORM
- XSS protection via React's built-in escaping

## Error Handling

### User-Friendly Errors

- Clear error messages for common issues
- Graceful fallbacks for network errors
- Loading states during operations

### Error Types

- **Validation Errors**: Invalid input data
- **Permission Errors**: Unauthorized access
- **Not Found Errors**: Missing collections/recipes
- **Network Errors**: Connection issues

## Testing

### Test Coverage

- ✅ **Unit Tests**: Individual component testing
- ✅ **Integration Tests**: API endpoint testing
- ✅ **E2E Tests**: Full user workflow testing
- ✅ **Database Tests**: Data integrity verification

### Test Scripts

```bash
# Run collection tests
npx tsx scripts/test-collections.ts

# Test specific features
npm run test:collections
npm run test:api:collections
```

## Future Enhancements

### Planned Features

- **Collection Sharing**: Share collections with other users
- **Public Collections**: Make collections publicly viewable
- **Collection Templates**: Pre-built collection themes
- **Bulk Operations**: Add/remove multiple recipes at once
- **Collection Analytics**: Usage statistics and insights
- **Advanced Filtering**: Filter collections by various criteria
- **Collection Import/Export**: Backup and restore collections

### Technical Improvements

- **Real-time Updates**: WebSocket integration for live updates
- **Offline Support**: Service worker for offline access
- **Advanced Search**: Full-text search within collections
- **Performance Monitoring**: Track and optimize performance
- **A/B Testing**: Test new features with users

## Monitoring & Analytics

### Key Metrics

- Collection creation rate
- Recipe addition rate
- Collection usage patterns
- Error rates and types
- Performance metrics

### Logging

- User actions logged for debugging
- Error tracking for issue resolution
- Performance monitoring for optimization

## Troubleshooting

### Common Issues

#### Collection Not Loading

- Check user authentication
- Verify database connection
- Check for JavaScript errors in console

#### Can't Add Recipe to Collection

- Ensure recipe exists and belongs to user
- Check collection permissions
- Verify API endpoint is accessible

#### Collection Deletion Fails

- Check for foreign key constraints
- Ensure user owns the collection
- Verify no active operations

### Debug Steps

1. Check browser console for errors
2. Verify API responses in Network tab
3. Check database for data integrity
4. Review server logs for backend issues

## Support

For technical support or feature requests:

- Check existing documentation
- Review error logs
- Contact development team
- Submit issue reports with detailed information

---

_This documentation is maintained by the Flavourly development team. Last updated: [Current Date]_
