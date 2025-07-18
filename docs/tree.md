### High-Level Routing Strategy

1.  **Public Routes:** Accessible to everyone, including unauthenticated visitors. These are primarily for discovering content.
2.  **Protected Routes (Recipe Developer):** Core application features available only to logged-in users. This is the main experience for recipe creators.
3.  **Protected Routes (Nutritionist):** A dedicated dashboard for nutritionists to perform their specific tasks.
4.  **Common Routes:** Pages like user profiles that are accessible to all authenticated users but may display slightly different information depending on who is viewing them.

---

### Frontend Route Tree

Below is the detailed breakdown of the pages to be developed, organized by user access and functionality.

#### 1. Public & Core Routes (Accessible to All)

These are the main entry points for new and returning users.

- `/` or `/home`

  - **Page:** **Homepage**
  - **Description:** A visually appealing landing page featuring a prominent search bar, a feed of "Nutritionist-Verified" recipes, popular recipes, and recently added content. It encourages users to sign up or log in.

- `/recipes`

  - **Page:** **Recipe Discovery / Search Results**
  - **Description:** The main page for browsing all public recipes. It will feature advanced search and filtering capabilities (keywords, ingredients, meal times, dietary preferences, cuisine). Users can sort by rating, popularity, or date.

- `/recipes/:recipeId`

  - **Page:** **Recipe Detail Page**
  - **Description:** Displays a single recipe in full, including its title, description, image/video, ingredients, preparation steps, cooking time, and user reviews. It will clearly show if the nutritional information is "Estimated" or "Nutritionist-Verified" with a badge.

- `/users/:userId`

  - **Page:** **Public User Profile**
  - **Description:** A public view of a user's profile, showing their name, bio, and a gallery of the recipes they have created.

- `/about`

  - **Page:** **About Us**
  - **Description:** A static page explaining the mission of the application, the importance of verified nutritional information, and introducing the roles.

- `/contact`
  - **Page:** **Contact Page**
  - **Description:** A form for users to send inquiries or feedback.

#### 3. Protected Routes: Recipe Developer Dashboard

These pages are accessible only to authenticated users with the "Recipe Developer" role. They are typically nested under a dashboard layout.

- `/dashboard`

  - **Page:** **My Recipes Dashboard**
  - **Description:** The main landing page for a logged-in user. It displays a list of their own recipes with their current status (e.g., "Verified," "Pending Verification").

- `/dashboard/recipes/new`

  - **Page:** **Create New Recipe**
  - **Description:** A step-by-step form to add a new recipe, including fields for title, description, ingredients, quantities, units, preparation steps, and media uploads. Initial nutritional values are auto-populated via an API.

- `/dashboard/recipes/edit/:recipeId`

  - **Page:** **Edit Recipe**
  - **Description:** Pre-populates the recipe creation form with existing data, allowing the user to modify and save their own recipes.

- `/dashboard/favorites`

  - **Page:** **My Favorites**
  - **Description:** A grid or list view of all the recipes the user has bookmarked.

- `/dashboard/collections`

  - **Page:** **My Collections**
  - **Description:** A page to view and manage personal recipe collections (e.g., "Quick Weeknight Dinners," "Holiday Baking").
    - `/dashboard/collections/:collectionId` - View a specific collection.

- `/dashboard/meal-planner`

  - **Page:** **Meal Planner**
  - **Description:** A calendar-based interface where users can drag and drop recipes to plan their meals for the week.

- `/dashboard/shopping-list`

  - **Page:** **Shopping List**
  - **Description:** An auto-generated shopping list based on the recipes in their meal plan. Users can check off items and customize the list.

- `/dashboard/settings`
  - **Page:** **User Settings**
  - **Description:** A section with nested tabs for managing account details.
    - `/dashboard/settings/profile` - Edit profile information (name, bio, profile picture).
    - `/dashboard/settings/account` - Change email or password.
    - `/dashboard/settings/dietary-preferences` - Set personal dietary preferences to personalize recommendations.

#### 4. Protected Routes: Nutritionist Dashboard

This is a separate, dedicated interface for users with the "Nutritionist" role.

- `/nutritionist`

  - **Page:** **Nutritionist Dashboard Home**
  - **Description:** The main view for a nutritionist, showing stats like pending reviews, verified recipes, and quick access to the review queue.

- `/nutritionist/queue`

  - **Page:** **Recipe Review Queue**
  - **Description:** A list of all recipes that are "pending verification." The nutritionist can pick a recipe from this queue to review.

- `/nutritionist/review/:recipeId`

  - **Page:** **Recipe Verification Page**
  - **Description:** A specialized interface where the nutritionist can:
    1.  View the recipe details submitted by the user.
    2.  Verify, edit, or recalculate the nutritional information (calories, macros, etc.).
    3.  Add or modify dietary tags (e.g., "gluten-free," "low-carb").
    4.  Provide optional health tips or suggestions for ingredient swaps.
    5.  Mark the recipe as "Verified" or send it back for revision.

- `/nutritionist/verified`
  - **Page:** **My Verified Recipes**
  - **Description:** A history of all recipes this nutritionist has personally reviewed and verified.

#### 5. Universal & Utility Routes

- `/unauthorized`

  - **Page:** **Unauthorized Access**
  - **Description:** A page shown when a user tries to access a route they do not have permission for (e.g., a Recipe Developer trying to access the nutritionist dashboard).

- `/*` or `/404`
  - **Page:** **404 Not Found**
  - **Description:** A user-friendly page to inform users that the requested URL does not exist.
