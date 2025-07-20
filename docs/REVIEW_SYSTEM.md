# Review and Rating System

## Overview

The review and rating system allows users to rate recipes from 1-5 stars and leave optional comments. This functionality is available on recipe detail pages and is reflected throughout the application.

## Features

### For Users (Recipe Developers)

- **Rate recipes**: 1-5 star rating system
- **Leave comments**: Optional text comments (up to 500 characters)
- **Edit reviews**: Modify existing ratings and comments
- **Delete reviews**: Remove their own reviews
- **View all reviews**: See reviews from other users

### For Nutritionists

- **View reviews**: Can see all reviews but cannot create/edit/delete them
- **No review actions**: Review functionality is restricted for nutritionists

### For Unauthenticated Users

- **View reviews**: Can see all existing reviews
- **Sign-in prompt**: Encouraged to sign in to write reviews

## User Interface

### Recipe Detail Page (`/recipes/[recipeId]`)

- **Reviews Tab**: Contains all review functionality
- **Review Form**: Always visible, handles authentication internally
- **User Review Management**: Edit/delete buttons for user's own reviews
- **All Reviews**: Display of all reviews with ratings and comments
- **Authentication Handling**: Form shows appropriate messages for different user states

### Recipe Cards

- **Star Rating Display**: Shows average rating with stars
- **Review Count**: Displays total number of reviews
- **Consistent Display**: Ratings shown across all recipe listings

## API Endpoints

### Create Review

```
POST /api/reviews
{
  "recipeId": number,
  "rating": number (1-5),
  "comment": string (optional)
}
```

### Update Review

```
PUT /api/reviews/[reviewId]
{
  "rating": number (1-5),
  "comment": string (optional)
}
```

### Delete Review

```
DELETE /api/reviews/[reviewId]
```

### Get Recipe Reviews

```
GET /api/recipes/[recipeId]/reviews
```

### Get User Reviews

```
GET /api/reviews/my-reviews
```

## Database Schema

### Review Model

```prisma
model Review {
  id        Int      @id @default(autoincrement())
  rating    Int      // 1-5 stars
  comment   String?  // Optional comment
  createdAt DateTime @default(now())

  // Relations
  recipeId Int
  recipe   Recipe @relation(fields: [recipeId], references: [id], onDelete: Cascade)

  userId Int
  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([recipeId, userId]) // One review per user per recipe
  @@index([userId])
}
```

## Components

### ReviewForm Component

- **Location**: `components/review-form.tsx`
- **Features**:
  - Interactive star rating (1-5 stars)
  - Comment textarea with character limit
  - Create/Edit modes
  - Form validation
  - Loading states

### Recipe Card Rating Display

- **Location**: `components/recipe-card.tsx`
- **Features**:
  - Star rating visualization
  - Review count display
  - Consistent styling

## Business Rules

1. **One Review Per User**: Users can only review each recipe once
2. **Rating Validation**: Ratings must be between 1-5 stars
3. **Comment Length**: Comments limited to 500 characters
4. **User Ownership**: Users can only edit/delete their own reviews
5. **Nutritionist Restriction**: Nutritionists cannot create/edit/delete reviews
6. **Authentication Required**: Must be signed in to create/edit/delete reviews
7. **Role-Based Access**: Only Recipe Developers can write reviews
8. **Always Visible Form**: Review form is always shown, with appropriate authentication handling

## Data Flow

1. **User submits review** → API validates and saves to database
2. **Review created** → Recipe's average rating and review count updated
3. **UI updates** → Recipe cards and detail pages reflect new ratings
4. **Cache invalidation** → React Query refetches relevant data

## Error Handling

- **Duplicate Reviews**: Prevents multiple reviews from same user
- **Invalid Ratings**: Validates rating range (1-5)
- **Unauthorized Actions**: Prevents editing others' reviews
- **Authentication Errors**: Redirects to sign-in when needed

## Testing

Use the test script to verify functionality:

```bash
pnpx tsx scripts/test-review-functionality.ts
```

## Future Enhancements

- **Review helpfulness**: Allow users to mark reviews as helpful
- **Review responses**: Allow recipe authors to respond to reviews
- **Review moderation**: Admin tools for managing inappropriate reviews
- **Review analytics**: Dashboard showing review statistics
- **Review notifications**: Notify users when their recipes receive reviews
