# Homepage Implementation

## Overview

The Flavourly homepage is a modern, responsive landing page that showcases the platform's key features and encourages user engagement. It's designed to be accessible to all users (both authenticated and unauthenticated) and provides a clear path to sign up or access the dashboard.

## Key Features

### 1. Hero Section

- **Prominent Search Bar**: Allows users to search for recipes, ingredients, or cuisines
- **Clear Value Proposition**: Highlights nutritionist-verified recipes
- **Call-to-Action Buttons**: Different CTAs for authenticated vs unauthenticated users
- **Visual Design**: Gradient text, icons, and badges for visual appeal

### 2. Recipe Sections

- **Nutritionist-Verified Recipes**: Showcases expert-reviewed recipes
- **Most Popular**: Displays recipes with high engagement
- **Recently Added**: Shows fresh content from the community
- **Recipe Cards**: Consistent design with images, ratings, and nutritional info

### 3. Features Section

- **Expert Verification**: Highlights the nutritionist review process
- **Community Driven**: Emphasizes user-generated content
- **Smart Planning**: Promotes meal planning and shopping list features

### 4. Navigation

- **Enhanced Navbar**: Includes navigation links for authenticated users
- **Role-Based Navigation**: Different links for Recipe Developers vs Nutritionists
- **Responsive Design**: Works on all device sizes

## Technical Implementation

### Data Fetching

- Uses TanStack Query for efficient data fetching
- Separate API route (`/api/recipes/public`) for public recipe data
- Three different query types: verified, popular, and recent recipes
- Proper loading states with skeleton components

### Components

- `RecipeSearch`: Search component with filter functionality
- `RecipeCard`: Reusable card component for displaying recipes
- Skeleton loading states for better UX
- Responsive grid layouts

### API Routes

```typescript
// /api/recipes/public
GET /api/recipes/public?type=verified&limit=6
GET /api/recipes/public?type=popular&limit=6
GET /api/recipes/public?type=recent&limit=6
```

### Query Hooks

```typescript
// Fetch different types of recipes
const { data: verifiedRecipes, isLoading } = usePublicRecipes('verified', 6);
const { data: popularRecipes, isLoading } = usePublicRecipes('popular', 6);
const { data: recentRecipes, isLoading } = usePublicRecipes('recent', 6);
```

## Design System

### Colors

- Primary: Green theme for health/nutrition focus
- Secondary: Muted colors for supporting text
- Accent: Orange for popular content, blue for recent content

### Typography

- Large, bold headings for impact
- Gradient text effects for hero section
- Consistent font hierarchy throughout

### Layout

- Responsive grid system (1 column mobile, 2-3 columns desktop)
- Proper spacing and padding
- Card-based design for content organization

## User Experience

### For Unauthenticated Users

- Clear value proposition
- Easy sign-up process
- Preview of available content
- Search functionality to explore recipes

### For Authenticated Users

- Quick access to dashboard
- Personalized navigation
- Role-specific features
- Seamless transition to full app

### Accessibility

- Proper semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## Performance Considerations

### Optimizations

- Image optimization with Next.js Image component
- Lazy loading for recipe cards
- Efficient data fetching with TanStack Query
- Skeleton loading states

### Caching

- Query caching for recipe data
- Static generation where possible
- Optimized re-renders

## Testing

### Sample Data

Run the sample data script to populate the homepage with test recipes:

```bash
npx tsx scripts/create-sample-homepage-data.ts
```

### Manual Testing

1. Test search functionality
2. Verify recipe card interactions
3. Check responsive design on different screen sizes
4. Test navigation links
5. Verify loading states

## Future Enhancements

### Potential Improvements

- Recipe recommendations based on user preferences
- Featured collections or seasonal content
- User testimonials or success stories
- Integration with social media sharing
- Advanced search filters
- Recipe categories or tags display

### Analytics

- Track user engagement with different sections
- Monitor search queries
- Analyze conversion rates from homepage to signup
- Measure recipe card click-through rates
