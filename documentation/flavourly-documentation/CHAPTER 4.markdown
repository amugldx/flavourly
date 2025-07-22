# CHAPTER 4

## <a name="_bookmark15"></a>System Design

#### 1. **<a name="_bookmark16"></a>\*\***Architecture Diagram\*\*

**Fig 4.1 System Architecture Diagram**

**Description:**

The Flavourly application system architecture serves as a comprehensive blueprint for our recipe management platform. It establishes a robust communication and coordination mechanism among all components while offering an abstraction layer to control the complexity of the system.

The architecture outlines an organized approach to address all technical and practical needs while maximizing standard quality characteristics like performance, security, and scalability. Additionally, it encompasses several important organizational decisions connected to application development, and each of these choices has a substantial influence on the end product's quality, maintainability, performance, and overall success. These selections include:

The choice of the structural components and their connections, which make up the system. As stated in the interactions between those elements. These structural and behavioral components are put together to form sizable subsystems. Architectural choices support corporate goals. The arrangement is guided by architectural trends and modern web development best practices.

**Draw.io Instructions for System Architecture Diagram:**

1. Create a new diagram in draw.io
2. Use the "Software" template category
3. Add the following components from the left panel:
   - **Client Layer**: Add a rectangle labeled "Web Browser (React/Next.js)"
   - **Frontend Layer**: Add rectangles for "Next.js App Router", "React Components", "Tailwind CSS", "Framer Motion"
   - **API Layer**: Add rectangles for "Next.js API Routes", "Authentication (NextAuth)", "Cloudinary Integration"
   - **Database Layer**: Add a cylinder labeled "PostgreSQL Database"
   - **External Services**: Add rectangles for "Cloudinary CDN", "Vercel Hosting"
4. Connect components with arrows showing data flow
5. Use different colors for each layer (Client: Blue, Frontend: Green, API: Orange, Database: Purple, External: Gray)
6. Add labels on arrows showing data types (JSON, Images, Authentication tokens)

#### 2. **<a name="_bookmark17"></a>\*\***Entity Relation Diagram\*\*

**Fig 4.2 Entity Relation Diagram**

**Description:**

This is an Entity-Relationship Diagram (ERD) for the Flavourly recipe management system. The diagram visually represents the key entities and their relationships within the system, illustrating how data is structured and interconnected. Each entity is depicted as a rectangle, with attributes listed inside, and relationships are shown as lines connecting entities with labels indicating the type of relationship (e.g., one-to-one, one-to-many, many-to-many).

Entities include:

- **Users**: Attributes include Id (Primary Key), username, email, passwordHash, fullName, bio, profilePicture, dietaryRestrictions, allergies, cuisinePreferences, cookingSkill, spiceTolerance, mealSize, roleId (Foreign Key), createdAt, updatedAt.
- **Roles**: Attributes include Id (Primary Key), name (RecipeDeveloper or Nutritionist).
- **Recipes**: Attributes include Id (Primary Key), title, description, cookingTimeMinutes, servings, status (pending_verification/verified/needs_revision), verifiedAt, healthTips, authorId (Foreign Key), verifiedById (Foreign Key), createdAt, updatedAt.
- **Ingredients**: Attributes include Id (Primary Key), name.
- **MeasurementUnits**: Attributes include Id (Primary Key), unitName, abbreviation.
- **RecipeIngredients**: Attributes include recipeId (Foreign Key), ingredientId (Foreign Key), unitId (Foreign Key), quantity, notes.
- **PreparationSteps**: Attributes include Id (Primary Key), recipeId (Foreign Key), stepNumber, instruction.
- **Media**: Attributes include Id (Primary Key), recipeId (Foreign Key), mediaType (image/video), url, caption.
- **TagTypes**: Attributes include Id (Primary Key), typeName.
- **Tags**: Attributes include Id (Primary Key), tagTypeId (Foreign Key), tagName.
- **RecipeTags**: Attributes include recipeId (Foreign Key), tagId (Foreign Key).
- **Reviews**: Attributes include Id (Primary Key), recipeId (Foreign Key), userId (Foreign Key), rating, comment, createdAt.
- **FavoriteRecipes**: Attributes include userId (Foreign Key), recipeId (Foreign Key), createdAt.
- **Collections**: Attributes include Id (Primary Key), userId (Foreign Key), collectionName, description, createdAt.
- **CollectionRecipes**: Attributes include collectionId (Foreign Key), recipeId (Foreign Key).
- **NutritionalInformation**: Attributes include recipeId (Primary Key), calories, proteinGrams, carbohydratesGrams, fatGrams, fiberGrams, sugarGrams, sodiumMg, dataSource.
- **MealPlans**: Attributes include Id (Primary Key), userId (Foreign Key), planName, startDate, endDate, createdAt.
- **MealPlanEntries**: Attributes include Id (Primary Key), planId (Foreign Key), recipeId (Foreign Key), mealDate, mealType, servingsToPrepare.
- **ShoppingLists**: Attributes include Id (Primary Key), userId (Foreign Key), mealPlanId (Foreign Key), listName, createdAt, updatedAt.
- **ShoppingListItems**: Attributes include Id (Primary Key), listId (Foreign Key), itemName, quantity, unit, notes, isCompleted, sortOrder, createdAt.

Relationships are depicted as follows:

- **Users to Roles**: Many-to-one (users belong to roles, linked via roleId).
- **Users to Recipes**: One-to-many (a user can create multiple recipes, linked via authorId).
- **Users to Recipes (Verification)**: One-to-many (a nutritionist can verify multiple recipes, linked via verifiedById).
- **Users to Reviews**: One-to-many (a user can submit multiple reviews, linked via userId).
- **Users to FavoriteRecipes**: One-to-many (a user can have multiple favorite recipes, linked via userId).
- **Users to Collections**: One-to-many (a user can have multiple collections, linked via userId).
- **Users to MealPlans**: One-to-many (a user can have multiple meal plans, linked via userId).
- **Users to ShoppingLists**: One-to-many (a user can have multiple shopping lists, linked via userId).
- **Recipes to RecipeIngredients**: One-to-many (a recipe can have multiple ingredients, linked via recipeId).
- **Recipes to PreparationSteps**: One-to-many (a recipe can have multiple preparation steps, linked via recipeId).
- **Recipes to Media**: One-to-many (a recipe can have multiple media files, linked via recipeId).
- **Recipes to RecipeTags**: One-to-many (a recipe can have multiple tags, linked via recipeId).
- **Recipes to Reviews**: One-to-many (a recipe can have multiple reviews, linked via recipeId).
- **Recipes to FavoriteRecipes**: One-to-many (a recipe can be favorited by multiple users, linked via recipeId).
- **Recipes to CollectionRecipes**: One-to-many (a recipe can be in multiple collections, linked via recipeId).
- **Recipes to NutritionalInformation**: One-to-one (a recipe has one nutritional information record, linked via recipeId).
- **Recipes to MealPlanEntries**: One-to-many (a recipe can be in multiple meal plan entries, linked via recipeId).
- **Ingredients to RecipeIngredients**: One-to-many (an ingredient can be used in multiple recipes, linked via ingredientId).
- **MeasurementUnits to RecipeIngredients**: One-to-many (a unit can be used for multiple ingredients, linked via unitId).
- **TagTypes to Tags**: One-to-many (a tag type can have multiple tags, linked via tagTypeId).
- **Tags to RecipeTags**: One-to-many (a tag can be applied to multiple recipes, linked via tagId).
- **Collections to CollectionRecipes**: One-to-many (a collection can contain multiple recipes, linked via collectionId).
- **MealPlans to MealPlanEntries**: One-to-many (a meal plan can have multiple entries, linked via planId).
- **MealPlans to ShoppingLists**: One-to-many (a meal plan can generate multiple shopping lists, linked via mealPlanId).
- **ShoppingLists to ShoppingListItems**: One-to-many (a shopping list can have multiple items, linked via listId).

The diagram uses standard ERD notation, with primary keys underlined and foreign keys indicating relationships between tables, providing a clear view of data flow and dependencies within the Flavourly recipe management system.

**Draw.io Instructions for Entity Relationship Diagram:**

1. Create a new diagram in draw.io
2. Use the "Entity Relationship" template
3. Add entities as rectangles with three sections: Entity Name, Attributes, Primary Keys
4. Use diamonds for relationships and label them with relationship types
5. Connect entities with lines showing cardinality (1, M, N)
6. Use different colors for different entity types (Core: Blue, User-related: Green, Recipe-related: Orange, Planning: Purple)

#### 3. <a name="_bookmark18"></a>Data Dictionary

The database for the Flavourly project contains the following collections:

#### 4. Users Table Schema

Database Table Name: users

|                     |           |      |                                  |             |
| ------------------- | --------- | ---- | -------------------------------- | ----------- |
| Field Name          | Data type | Size | Description                      | Constraint  |
| Id                  | integer   | 11   | Store unique id (auto increment) | Primary key |
| username            | varchar   | 255  | Define the unique username       | Unique      |
| email               | varchar   | 255  | Verify e-mail of users           | Unique      |
| passwordHash        | varchar   | 255  | Specify hashed password value    |             |
| fullName            | varchar   | 255  | Define the full name of user     |             |
| bio                 | text      | 255  | User biography description       |             |
| profilePicture      | varchar   | 255  | Specify the profile image URL    |             |
| dietaryRestrictions | text[]    | 255  | User dietary restrictions array  |             |
| allergies           | text[]    | 255  | User allergies array             |             |
| cuisinePreferences  | text[]    | 255  | User cuisine preferences array   |             |
| cookingSkill        | varchar   | 255  | User cooking skill level         |             |
| spiceTolerance      | varchar   | 255  | User spice tolerance level       |             |
| mealSize            | varchar   | 255  | User preferred meal size         |             |
| roleId              | integer   | 11   | Reference to user role           | Foreign key |
| createdAt           | timestamp | 8    | User account creation date       |             |
| updatedAt           | timestamp | 8    | User account last update date    |             |

#### Table 4.1: Users Database Schema

**Description:**

The user table is used to store the user's account information. This information is used in the login process to match the user credentials. The information from the user table is used to show the details on the user profile and manage user preferences for recipe recommendations and dietary restrictions.

#### 5. <a name="_bookmark19"></a>Recipes Table Schema

Database Table Name: recipes

|                    |               |          |                                              |                |
| ------------------ | ------------- | -------- | -------------------------------------------- | -------------- |
| **Field Name**     | **Data Type** | **Size** | **Description**                              | **Constraint** |
| Id                 | integer       | 11       | Store unique id<br/>(autoincrement)          | Primarykey     |
| title              | varchar       | 255      | Identify the title of the<br/>recipe         |                |
| description        | text          | 255      | It describes the recipe<br/>description      |                |
| cookingTimeMinutes | integer       | 11       | It describes the cooking<br/>time in minutes |                |
| servings           | integer       | 11       | It describes the number of<br/>servings      |                |
| status             | enum          | 255      | Recipe verification status                   |                |
| verifiedAt         | timestamp     | 8        | Date when recipe was verified                |                |
| healthTips         | text          | 255      | Health tips from nutritionist                |                |
| authorId           | integer       | 11       | Identify the recipe author id                | Foreign key    |
| verifiedById       | integer       | 11       | Identify the nutritionist who verified       | Foreign key    |
| createdAt          | timestamp     | 8        | Recipe creation date                         |                |
| updatedAt          | timestamp     | 8        | Recipe last update date                      |                |

#### Table 4.2: Recipes Database Schema

**Description:**

The "Recipes" table stores information about various recipes available in the Flavourly platform. It represents a collection of recipes that can be managed within the platform, including their verification status and nutritional information.

#### 6. <a name="_bookmark20"></a>Ingredients Table Schema

Database Table Name: ingredients

|            |          |      |                                     |             |
| ---------- | -------- | ---- | ----------------------------------- | ----------- |
| Field Name | DataType | Size | Description                         | Constraint  |
| Id         | integer  | 11   | Store unique id(auto<br/>increment) | Primary key |
| name       | varchar  | 255  | Identify the ingredient name        | Unique      |

#### Table 4.3: Ingredients Database Schema

**Description:**

The Ingredients Table Schema is designed to store information related to recipe ingredients in the Flavourly system. It represents the structure of the table that will hold the ingredient data for all recipes in the platform.

#### 7. <a name="_bookmark21"></a>RecipeIngredients Table Schema

Database Table Name: recipe_ingredients

|              |           |      |                                                 |             |
| ------------ | --------- | ---- | ----------------------------------------------- | ----------- |
| Field Name   | Data Type | Size | Description                                     | Constraint  |
| recipeId     | integer   | 11   | Reference to recipe<br/>(foreign key)           | Primary key |
| ingredientId | integer   | 11   | Reference to ingredient<br/>(foreign key)       | Primary key |
| unitId       | integer   | 11   | Reference to measurement unit<br/>(foreign key) | Foreign key |
| quantity     | decimal   | 10,2 | The quantity of ingredient needed               |             |
| notes        | text      | 255  | Additional notes about the ingredient           |             |

#### Table 4.4: RecipeIngredients table Schema

**Description:**

The RecipeIngredients table stores information about the relationship between recipes and ingredients, including quantities and measurement units. This table enables the many-to-many relationship between recipes and ingredients with additional metadata.

#### 8. Reviews Table Schema

Database Table Name: reviews

|            |           |      |                                       |             |
| ---------- | --------- | ---- | ------------------------------------- | ----------- |
| Field Name | Data Type | Size | Description                           | Constraint  |
| Id         | integer   | 11   | Store unique id (auto<br/>increment)  | Primary key |
| recipeId   | integer   | 11   | Reference to recipe<br/>(foreign key) | Foreign key |
| userId     | integer   | 11   | Reference to user<br/>(foreign key)   | Foreign key |
| rating     | integer   | 11   | User rating (1-5 stars)               |             |
| comment    | text      | 255  | User review comment                   |             |
| createdAt  | timestamp | 8    | Review creation date                  |             |

#### Table 4.5: Reviews table schema

**Description:**

The Reviews table stores information related to user reviews and ratings for recipes. It serves as a central repository for managing and tracking user feedback associated with each recipe. This table is designed to capture essential details about user experiences with recipes.

#### 9. <a name="_bookmark22"></a>Collections Table Schema

Database Table Name: collections

|                |               |          |                                  |                 |
| -------------- | ------------- | -------- | -------------------------------- | --------------- |
| **Field Name** | **Data Type** | **Size** | **Description**                  | **Constraint**  |
| Id             | Integer       | 11       | Store unique id (auto increment) | Primary key     |
| **userId**     | **Integer**   | **11**   | **Reference to user**            | **Foreign key** |
| collectionName | varchar       | 255      | Name of the recipe collection    |                 |
| description    | text          | 255      | Description of the collection    |                 |
| createdAt      | timestamp     | 8        | Collection creation date         |                 |

#### Table 4.6: Collections Database Schema

**Description:**

The Collections table is designed to store information about user-created recipe collections. It captures relevant details such as the collection name, description, and the user who created it, enabling users to organize their favorite recipes into themed collections.

#### 10. <a name="_bookmark23"></a>Data Flow Diagram

A data flow diagram (DFD) illustrates the information flow within a process or system. It employs specific symbols such as rectangles, circles, and arrows, accompanied by brief textual descriptions.

#### 11. **Data Flow Diagram-Level 0**

**Fig 4.3.1 Data Flow Diagram – Level 0**

**Description:**

This is a Level 0 Data Flow Diagram (DFD) for the Flavourly recipe management system, also known as a context diagram. It provides a high-level overview of the entire system as a single process interacting with external entities. The diagram is centered around a single circular process labeled "Flavourly Recipe Management System." External entities, represented as rectangles, include Public User, Recipe Developer, and Nutritionist. Arrows indicate data flows between these entities and the system.

- **Public User**: Sends data such as recipe browsing requests, search queries, and review submissions to the system. Receives recipe information, search results, and browsing recommendations.
- **Recipe Developer**: Provides recipe details, ingredient information, cooking instructions, and media uploads to the system. Receives verification status updates, feedback from nutritionists, and recipe management tools.
- **Nutritionist**: Sends verification decisions, nutritional information updates, and health tips to the system. Receives pending recipes for review, verification queue data, and recipe analysis tools.
- **Data Store**: A data store (represented as an open-ended rectangle) labeled "Database" is connected to the system, indicating where user, recipe, ingredient, review, collection, and nutritional data are stored and retrieved.

The diagram uses standard DFD notation, with arrows labeled to indicate the type of data flow (e.g., "User Data," "Recipe Data," "Reviews," "Verification Data"). It provides a high-level view of the system's interactions with external entities and the central database.

**Draw.io Instructions for Data Flow Diagram Level 0:**

1. Create a new diagram in draw.io
2. Use the "Data Flow" template
3. Add a central circle labeled "Flavourly Recipe Management System"
4. Add rectangles for external entities: "Public User", "Recipe Developer", "Nutritionist"
5. Add an open rectangle for "Database" data store
6. Connect entities to the system with arrows showing data flow direction
7. Label arrows with data types (User Data, Recipe Data, Reviews, etc.)

#### 12. **Data Flow Diagram-Level 1**

**Fig 4.3.2 Data Flow Diagram – Level 1**

**Description:**

This is a Level 1 Data Flow Diagram (DFD) for the Flavourly recipe management system, providing a more detailed breakdown of the system's sub-processes compared to the Level 0 DFD. The diagram includes multiple processes, each represented as a circle, connected to external entities (Public User, Recipe Developer, Nutritionist) and data stores. The processes include User Management, Recipe Management, Verification Management, Review Management, Collection Management, and Meal Planning Management.

- **User Management**: Interacts with Public User, Recipe Developer, and Nutritionist for user registration, profile updates, and user preferences. Connected to the "Users" data store.
- **Recipe Management**: Interacts with Recipe Developer for adding and managing recipe details, ingredients, and cooking instructions. Generates recipe reports and connects to the "Recipes" data store.
- **Verification Management**: Interacts with Nutritionist for recipe verification, nutritional analysis, and health tips. Generates verification reports and connects to the "Recipes" and "NutritionalInformation" data stores.
- **Review Management**: Interacts with Public User and Recipe Developer for review submission and management. Generates review reports and connects to the "Reviews" data store.
- **Collection Management**: Interacts with Recipe Developer for creating and managing recipe collections. Generates collection reports and connects to the "Collections" data store.
- **Meal Planning Management**: Interacts with Recipe Developer for meal plan creation and shopping list generation. Connected to the "MealPlans" and "ShoppingLists" data stores.

Arrows indicate data flows between processes, external entities, and data stores, with labels such as "User Data," "Recipe Details," "Reviews," "Verification Data," and "Collection Data." The diagram uses standard DFD notation to show how data moves through the system's sub-processes, providing a detailed view of the system's internal operations.

**Draw.io Instructions for Data Flow Diagram Level 1:**

1. Create a new diagram in draw.io
2. Use the "Data Flow" template
3. Add circles for processes: "User Management", "Recipe Management", "Verification Management", "Review Management", "Collection Management", "Meal Planning Management"
4. Add rectangles for external entities: "Public User", "Recipe Developer", "Nutritionist"
5. Add open rectangles for data stores: "Users", "Recipes", "Reviews", "Collections", "MealPlans", "ShoppingLists"
6. Connect processes to entities and data stores with arrows
7. Label arrows with specific data types

#### 13. **<a name="_bookmark24"></a>\*\***Class Diagram\*\*

**Fig 4.4 Class Diagram for Flavourly**

**Description:**

This is a UML Class Diagram for the Flavourly recipe management system. It outlines the classes, their attributes, methods, and relationships within the system. Each class is represented as a rectangle with three sections: class name, attributes, and methods. Relationships between classes are shown with lines indicating associations, aggregations, or compositions.

Classes include:

- **User**: Attributes (Id, username, email, passwordHash, fullName, bio, profilePicture, dietaryRestrictions, allergies, cuisinePreferences, cookingSkill, spiceTolerance, mealSize, roleId, createdAt, updatedAt), Methods (signIn(), signUp(), updateProfile(), createRecipe(), addToFavorites()).
- **Role**: Attributes (Id, name), Methods (assignRole(), getRoleName()).
- **Recipe**: Attributes (Id, title, description, cookingTimeMinutes, servings, status, verifiedAt, healthTips, authorId, verifiedById, createdAt, updatedAt), Methods (createRecipe(), updateRecipe(), verifyRecipe(), addIngredient(), addStep()).
- **Ingredient**: Attributes (Id, name), Methods (createIngredient(), updateIngredient(), getRecipes()).
- **MeasurementUnit**: Attributes (Id, unitName, abbreviation), Methods (createUnit(), getAbbreviation()).
- **RecipeIngredient**: Attributes (recipeId, ingredientId, unitId, quantity, notes), Methods (addIngredient(), updateQuantity(), getIngredient()).
- **PreparationStep**: Attributes (Id, recipeId, stepNumber, instruction), Methods (addStep(), updateStep(), reorderSteps()).
- **Media**: Attributes (Id, recipeId, mediaType, url, caption), Methods (uploadMedia(), updateCaption(), deleteMedia()).
- **TagType**: Attributes (Id, typeName), Methods (createTagType(), getTags()).
- **Tag**: Attributes (Id, tagTypeId, tagName), Methods (createTag(), applyToRecipe()).
- **Review**: Attributes (Id, recipeId, userId, rating, comment, createdAt), Methods (createReview(), updateReview(), deleteReview()).
- **FavoriteRecipe**: Attributes (userId, recipeId, createdAt), Methods (addToFavorites(), removeFromFavorites(), getFavorites()).
- **Collection**: Attributes (Id, userId, collectionName, description, createdAt), Methods (createCollection(), updateCollection(), addRecipe()).
- **NutritionalInformation**: Attributes (recipeId, calories, proteinGrams, carbohydratesGrams, fatGrams, fiberGrams, sugarGrams, sodiumMg, dataSource), Methods (calculateNutrition(), updateNutrition(), getNutritionData()).
- **MealPlan**: Attributes (Id, userId, planName, startDate, endDate, createdAt), Methods (createMealPlan(), addEntry(), generateShoppingList()).
- **MealPlanEntry**: Attributes (Id, planId, recipeId, mealDate, mealType, servingsToPrepare), Methods (addEntry(), updateEntry(), removeEntry()).
- **ShoppingList**: Attributes (Id, userId, mealPlanId, listName, createdAt, updatedAt), Methods (createList(), addItem(), markComplete()).
- **ShoppingListItem**: Attributes (Id, listId, itemName, quantity, unit, notes, isCompleted, sortOrder, createdAt), Methods (addItem(), updateItem(), toggleComplete()).

Relationships include:

- **User to Role**: Many-to-one (via roleId).
- **User to Recipe**: One-to-many (via authorId for creation, verifiedById for verification).
- **User to Review**: One-to-many (via userId).
- **User to FavoriteRecipe**: One-to-many (via userId).
- **User to Collection**: One-to-many (via userId).
- **User to MealPlan**: One-to-many (via userId).
- **User to ShoppingList**: One-to-many (via userId).
- **Recipe to RecipeIngredient**: One-to-many (via recipeId).
- **Recipe to PreparationStep**: One-to-many (via recipeId).
- **Recipe to Media**: One-to-many (via recipeId).
- **Recipe to Review**: One-to-many (via recipeId).
- **Recipe to FavoriteRecipe**: One-to-many (via recipeId).
- **Recipe to NutritionalInformation**: One-to-one (via recipeId).
- **Recipe to MealPlanEntry**: One-to-many (via recipeId).
- **Ingredient to RecipeIngredient**: One-to-many (via ingredientId).
- **MeasurementUnit to RecipeIngredient**: One-to-many (via unitId).
- **TagType to Tag**: One-to-many (via tagTypeId).
- **Tag to RecipeTag**: One-to-many (via tagId).
- **Collection to CollectionRecipe**: One-to-many (via collectionId).
- **MealPlan to MealPlanEntry**: One-to-many (via planId).
- **MealPlan to ShoppingList**: One-to-many (via mealPlanId).
- **ShoppingList to ShoppingListItem**: One-to-many (via listId).

The diagram uses standard UML notation, with multiplicity indicators (e.g., 1..\*, 1..1) to show the nature of relationships, providing a comprehensive view of the system's structure and behavior.

**Draw.io Instructions for Class Diagram:**

1. Create a new diagram in draw.io
2. Use the "UML" template
3. Add classes as rectangles with three sections: Class Name, Attributes, Methods
4. Use different colors for different class types (Core: Blue, User-related: Green, Recipe-related: Orange, Planning: Purple)
5. Connect classes with lines showing relationships and multiplicities
6. Use standard UML notation for associations, aggregations, and compositions

#### 1. **<a name="_bookmark25"></a>\*\***Object Diagram\*\*

**Fig 4.5 Object Diagram for Flavourly**

**Description:**

This is a UML Object Diagram for the Flavourly recipe management system, depicting a snapshot of the system's runtime state at a specific moment. It shows individual object instances of classes and their relationships. Each object is represented as a rectangle with the object name, class name, and attribute values. Lines between objects indicate relationships.

Objects include instances of:

- **User**: E.g., "johnDoe:User" (Id=1, username="john_doe", email="john@example.com", roleId=1), "janeSmith:User" (Id=2, username="jane_smith", email="jane@example.com", roleId=2), "nutritionist1:User" (Id=3, username="dr_nutrition", email="nutrition@example.com", roleId=2).
- **Recipe**: E.g., "recipe1:Recipe" (Id=1, title="Chicken Pasta", status="verified", authorId=1, verifiedById=3).
- **Ingredient**: E.g., "ingredient1:Ingredient" (Id=1, name="Chicken Breast"), "ingredient2:Ingredient" (Id=2, name="Pasta").
- **Review**: E.g., "review1:Review" (Id=1, recipeId=1, userId=2, rating=5, comment="Delicious recipe!").
- **Collection**: E.g., "collection1:Collection" (Id=1, userId=1, collectionName="Italian Favorites").
- **MealPlan**: E.g., "mealPlan1:MealPlan" (Id=1, userId=1, planName="Week 1 Plan").
- **ShoppingList**: E.g., "shoppingList1:ShoppingList" (Id=1, userId=1, listName="Weekly Groceries").

Relationships mirror those in the class diagram, with links showing associations (e.g., johnDoe:User linked to recipe1:Recipe, janeSmith:User linked to review1:Review). The diagram provides a concrete example of how objects interact at runtime, illustrating specific attribute values and connections during system execution.

**Draw.io Instructions for Object Diagram:**

1. Create a new diagram in draw.io
2. Use the "UML" template
3. Add object instances as rectangles with format "objectName:ClassName"
4. Show attribute values for each object
5. Connect objects with lines showing relationships
6. Use different colors for different object types

#### 2. **<a name="_bookmark26"></a>\*\***Sequence Diagram\*\*

#### 3. **<a name="_bookmark27"></a>\*\***User Authentication Sequence Diagram\*\*

**Fig 4.6.1 User Authentication Sequence Diagram for Flavourly**

**Description:**

This is a UML Sequence Diagram for the user authentication process in the Flavourly recipe management system. It illustrates the sequence of actions and system responses during user-related processes, such as signing in and signing up. The diagram includes lifelines for actors (User, System, Database) and shows interactions as arrows representing messages or method calls.

- **Lifelines**: Represented as vertical dashed lines for User, System, Database.
- **Interactions**:
  - User sends a "signIn()" message to the System with email and password.
  - System sends a "validateCredentials()" message to the Database.
  - Database responds with "credentialsValid" or "error".
  - System sends a "displayDashboard()" message back to the User if credentials are valid.
  - For signup: User sends "signUp()" message with user details.
  - System sends "createUser()" message to Database.
  - Database responds with "userCreated" or "error".
  - System sends "displayWelcome()" message to User.
  - Alternate scenario: If credentials are invalid or no internet, System sends an "errorMessage" to the User.

The diagram includes activation bars to show when objects are active and uses standard UML notation, with synchronous messages (filled arrowheads) and asynchronous messages (open arrowheads). It captures the flow of user authentication and dashboard access.

**Draw.io Instructions for User Authentication Sequence Diagram:**

1. Create a new diagram in draw.io
2. Use the "UML" template
3. Add lifelines for "User", "System", "Database"
4. Add activation bars for each lifeline
5. Add messages between lifelines with arrows
6. Include alternate flows for error scenarios
7. Use standard UML notation for synchronous and asynchronous messages

#### **<a name="_bookmark28"></a>\*\***4.6.2 Recipe Creation Sequence Diagram\*\*

**Fig 4.6.2 Recipe Creation Sequence Diagram for Flavourly**

**Description:**

This is a UML Sequence Diagram for the recipe creation process in the Flavourly recipe management system. It depicts the sequence of interactions between actors (User, Recipe Developer, System, Database, Cloudinary) during recipe-related activities, such as creating a recipe, adding ingredients, uploading media, and submitting for verification.

- **Lifelines**: Represented for User, Recipe Developer, System, Database, and Cloudinary.
- **Interactions**:
  - User sends "login()" to System.
  - System validates credentials with Database.
  - Recipe Developer sends "createRecipe()" to System with recipe details.
  - System stores recipe data in Database.
  - Recipe Developer sends "addIngredients()" to System.
  - System updates recipe with ingredient data in Database.
  - Recipe Developer sends "uploadMedia()" to System.
  - System uploads media to Cloudinary.
  - Cloudinary responds with media URL.
  - System stores media URL in Database.
  - Recipe Developer sends "submitForVerification()" to System.
  - System updates recipe status to "pending_verification" in Database.
  - System sends "notifyNutritionist()" to notify nutritionists of new recipe.
  - Alternate scenario: If upload fails, System sends "errorMessage" to Recipe Developer.

The diagram uses activation bars, synchronous and asynchronous messages, and includes alternate flows for error conditions, providing a detailed view of the recipe creation process interactions.

**Draw.io Instructions for Recipe Creation Sequence Diagram:**

1. Create a new diagram in draw.io
2. Use the "UML" template
3. Add lifelines for "User", "Recipe Developer", "System", "Database", "Cloudinary"
4. Add activation bars for each lifeline
5. Add messages between lifelines showing the recipe creation flow
6. Include alternate flows for error conditions
7. Use standard UML notation for messages and timing

#### 4. **<a name="_bookmark29"></a>\*\***Activity Diagram\*\*

#### 5. **<a name="_bookmark30"></a>\*\***Recipe Verification Activity Diagram\*\*

**Fig 4.7.1 Recipe Verification Activity Diagram for Flavourly**

**Description:**

This is a UML Activity Diagram for the recipe verification process in the Flavourly recipe management system. It represents the workflow and decision points involved when a nutritionist verifies a recipe submitted by a recipe developer. The diagram uses standard UML activity diagram symbols: ovals for start/end points, rectangles for activities, diamonds for decision points, and arrows for flow transitions.

- **Start**: The process begins at an initial node when a recipe is submitted for verification.
- **Activities**:
  - Nutritionist receives notification of pending recipe.
  - Nutritionist reviews recipe details and ingredients.
  - Nutritionist analyzes nutritional information.
  - Nutritionist checks recipe safety and accuracy.
- **Decision Points**:
  - If recipe meets all criteria, flow proceeds to "Approve Recipe."
  - If recipe needs modifications, flow proceeds to "Request Revisions."
  - If recipe is unsafe or inaccurate, flow proceeds to "Reject Recipe."
- **End**: The process ends at a final node after approving, requesting revisions, or rejecting the recipe.

The diagram provides a clear, step-by-step view of the recipe verification process, including decision logic for handling different verification outcomes.

**Draw.io Instructions for Recipe Verification Activity Diagram:**

1. Create a new diagram in draw.io
2. Use the "UML" template
3. Add an initial node (black circle)
4. Add activities as rectangles: "Receive Recipe", "Review Recipe", "Analyze Nutrition", "Check Safety"
5. Add decision points as diamonds: "Meets Criteria?", "Needs Revisions?"
6. Add final nodes for outcomes: "Approve Recipe", "Request Revisions", "Reject Recipe"
7. Connect elements with arrows showing flow direction
8. Use standard UML notation for activities and decisions

#### 6. **<a name="_bookmark31"></a>\*\***Meal Planning Activity Diagram\*\*

**Fig 4.7.2 Meal Planning Activity Diagram for Flavourly**

**Description:**

This is a UML Activity Diagram for the meal planning feature in the Flavourly recipe management system. It illustrates the workflow and activities involved in creating meal plans and generating shopping lists. The diagram includes:

- **Start**: Initial node where the meal planning process begins.
- **Activities**: Steps such as "Select Recipes," "Choose Meal Types," "Set Dates," "Generate Shopping List," or "Save Meal Plan."
- **Decision Points**: Conditions like "Are recipes selected?" or "Is meal plan complete?"
- **Flows**: Arrows connecting activities and decisions, showing the sequence of actions.
- **End**: Final node after completing the meal plan or encountering an error.

The diagram uses standard UML notation to depict the sequence of actions, decision logic, and possible outcomes, providing a concise representation of the meal planning workflow.

**Draw.io Instructions for Meal Planning Activity Diagram:**

1. Create a new diagram in draw.io
2. Use the "UML" template
3. Add an initial node
4. Add activities as rectangles: "Browse Recipes", "Select Recipes", "Choose Meal Types", "Set Dates", "Generate Shopping List"
5. Add decision points as diamonds: "Recipes Selected?", "Plan Complete?"
6. Add final nodes for outcomes: "Save Meal Plan", "Generate List"
7. Connect elements with arrows showing flow direction
8. Use standard UML notation

#### 7. **<a name="_bookmark32"></a>\*\***Collaboration Diagram\*\*

**Fig 4.8 Collaboration Diagram for Flavourly**

**Description:**

This is a UML Collaboration Diagram for the Flavourly recipe management system. It illustrates the interactions and collaborations between objects or components to accomplish specific functionalities, such as recipe creation, verification, and meal planning. Objects are represented as rectangles, and numbered lines indicate messages exchanged between them.

- **Objects**: Instances of classes like User, Recipe, Ingredient, Review, Collection, MealPlan, and ShoppingList.
- **Messages**: Numbered interactions, e.g., "1: createRecipe()", "2: addIngredients()", "3: submitForVerification()", "4: verifyRecipe()", "5: addToCollection()".
- **Links**: Lines connecting objects, showing relationships like User to Recipe or Recipe to Review.
- **Sequence**: Numbers on messages indicate the order of interactions.

The diagram focuses on how objects collaborate to achieve a goal, using standard UML notation to highlight the system's structure and behavior during specific use cases.

**Draw.io Instructions for Collaboration Diagram:**

1. Create a new diagram in draw.io
2. Use the "UML" template
3. Add objects as rectangles with object names
4. Connect objects with lines showing relationships
5. Add numbered messages on the lines showing interaction sequence
6. Use different colors for different object types
7. Include message numbers to show sequence

#### **<a name="_bookmark33"></a>\*\***4.8 State Transition Diagram\*\*

**Fig 4.9 State Transition Diagram for Flavourly**

**Description:**

This is a UML State Transition Diagram for the Flavourly recipe management system, depicting the states and transitions of a recipe throughout its lifecycle. It shows the lifecycle of a recipe and how it moves between states based on events.

- **States**: Represented as rounded rectangles, including "Draft," "Pending Verification," "Needs Revision," "Verified," and "Published."
- **Transitions**: Arrows between states, labeled with events like "Submit for Review," "Nutritionist Reviews," "Request Changes," or "Approve Recipe."
- **Start/End**: Initial state (e.g., "Draft") and final state (e.g., "Published").
- **Events**: Triggers causing state changes, such as "Recipe Developer submits recipe" or "Nutritionist approves recipe."

The diagram uses standard UML notation to illustrate the behavior and lifecycle of a recipe, showing how it responds to events like submission, verification, and approval.

**Draw.io Instructions for State Transition Diagram:**

1. Create a new diagram in draw.io
2. Use the "UML" template
3. Add states as rounded rectangles: "Draft", "Pending Verification", "Needs Revision", "Verified", "Published"
4. Add an initial state (black circle)
5. Add final states (black circle with inner circle)
6. Connect states with arrows labeled with events
7. Use standard UML notation for states and transitions
