# Dashboard Documentation

## Overview

The Flavourly dashboard is a comprehensive interface for authenticated users to manage their recipes and access various features of the application. It provides role-based navigation and displays recipe status with proper indicators.

## Features

### 🏠 Main Dashboard (`/dashboard`)

The main dashboard page displays:

- **Recipe Statistics**: Total recipes, verified recipes, and pending reviews
- **Recipe Grid**: All user recipes with status indicators
- **Quick Actions**: Create new recipe button
- **Status Badges**: Visual indicators for recipe verification status
  - 🟢 **Verified**: Green badge with checkmark
  - 🟡 **Pending Review**: Yellow badge with alert icon
  - 🔴 **Needs Revision**: Red badge with X icon

### 📊 Recipe Cards

Each recipe card displays:

- Recipe title and description
- Cooking time and servings
- Average rating and review count
- Nutritional information (if available)
- Verification status badge
- Action buttons (View, Edit)

### 🧭 Navigation Sidebar

The dashboard includes a responsive sidebar with navigation to:

- **My Recipes** (`/dashboard`) - Main dashboard
- **Create Recipe** (`/dashboard/recipes/new`) - New recipe form
- **Favorites** (`/dashboard/favorites`) - Saved recipes
- **Collections** (`/dashboard/collections`) - Recipe collections
- **Meal Planner** (`/dashboard/meal-planner`) - Meal planning
- **Shopping List** (`/dashboard/shopping-list`) - Shopping lists
- **Settings** (`/dashboard/settings`) - User settings

#### Nutritionist-Specific Navigation

For users with the "Nutritionist" role, additional navigation items appear:

- **Review Queue** (`/nutritionist/queue`) - Pending recipe reviews
- **Verified Recipes** (`/nutritionist/verified`) - Personally verified recipes

## Technical Implementation

### API Endpoints

- `GET /api/recipes/my-recipes` - Fetches current user's recipes with status and metadata

### Data Fetching

Uses TanStack Query for efficient data fetching:

```typescript
const { data: recipes, isLoading, error } = useMyRecipes();
```

### Authentication

- Protected routes require authentication
- Role-based navigation based on user session
- Automatic redirect to signin page for unauthenticated users

### UI Components

Built with shadcn/ui components:

- **Cards**: Recipe display and statistics
- **Badges**: Status indicators
- **Buttons**: Actions and navigation
- **Skeleton**: Loading states
- **Icons**: Lucide React icons for visual consistency

## Status System

### Recipe Verification Status

1. **Pending Verification** (`pending_verification`)

   - Default status for new recipes
   - Awaiting nutritionist review
   - Yellow badge with alert icon

2. **Verified** (`verified`)

   - Approved by nutritionist
   - Includes verification date and nutritionist info
   - Green badge with checkmark
   - Nutritional information available

3. **Needs Revision** (`needs_revision`)
   - Requires changes before approval
   - Includes feedback from nutritionist
   - Red badge with X icon

### Nutritional Information

- **Estimated**: Auto-calculated nutritional values
- **Verified**: Nutritionist-verified nutritional information

## Testing

### Sample Data

Use the provided scripts to create test data:

```bash
# Create sample recipes
npx tsx scripts/create-sample-recipes.ts

# Test dashboard functionality
npx tsx scripts/test-dashboard.ts
```

### Test Users

- **Recipe Developer**: `test` / `test123`
- **Nutritionist**: `ammar` / `ammar123`

## Future Enhancements

### Planned Features

1. **Recipe Creation Form**

   - Step-by-step recipe creation
   - Ingredient management
   - Media uploads
   - Nutritional estimation

2. **Advanced Filtering**

   - Filter by status
   - Sort by date, rating, popularity
   - Search functionality

3. **Bulk Actions**

   - Select multiple recipes
   - Bulk status updates
   - Export functionality

4. **Analytics Dashboard**
   - Recipe performance metrics
   - Engagement statistics
   - Popular recipes tracking

### UI Improvements

1. **Responsive Design**

   - Mobile-optimized layout
   - Touch-friendly interactions

2. **Dark Mode Support**

   - Consistent theming
   - Theme persistence

3. **Accessibility**
   - Screen reader support
   - Keyboard navigation
   - High contrast mode

## File Structure

```
app/dashboard/
├── layout.tsx              # Dashboard layout with sidebar
├── page.tsx               # Main dashboard page
└── recipes/
    └── new/
        └── page.tsx       # New recipe form (placeholder)

components/
├── dashboard-sidebar.tsx   # Navigation sidebar
└── ui/                    # shadcn/ui components

lib/
├── hooks/
│   └── use-my-recipes.ts  # TanStack Query hook
└── auth.ts               # Authentication configuration

app/api/recipes/
└── my-recipes/
    └── route.ts          # API endpoint for user recipes
```

## Usage

1. **Start the development server**:

   ```bash
   pnpm dev
   ```

2. **Sign in** with a test user account

3. **Navigate to dashboard**:

   ```
   http://localhost:3000/dashboard
   ```

4. **Explore features**:
   - View recipe statistics
   - Browse recipe cards
   - Navigate to different sections
   - Test role-based navigation

## Troubleshooting

### Common Issues

1. **No recipes displayed**

   - Ensure user has created recipes
   - Check API endpoint response
   - Verify authentication status

2. **Navigation not working**

   - Check user role in session
   - Verify route permissions
   - Clear browser cache

3. **Status badges not showing**
   - Verify recipe status in database
   - Check status mapping in component
   - Ensure proper enum values

### Debug Commands

```bash
# Check database state
npx tsx scripts/test-dashboard.ts

# Create test data
npx tsx scripts/create-sample-recipes.ts

# View database in Prisma Studio
npx prisma studio
```
