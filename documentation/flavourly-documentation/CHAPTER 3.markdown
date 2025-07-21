# CHAPTER 3

## Software Analysis

#### 1. <a name="_bookmark11"></a>Identifying Actors and Use Cases using Textual Analysis

Use-case diagrams describe the high-level functions and scope of a system. This diagram also identifies the interactions between the system and its actors. The use cases and actors in use-case diagrams describe what the system does and how the actors use it, but not how the system operates internally. The Use Case Diagram is a graphic depiction of the interaction among the elements of the Flavourly recipe management system. It represents the methodology used in system analysis to identify, clarify, and organize system requirements of the Flavourly platform. Use Case describes proposed functionality of the system. A Use Case represents a discrete unit of interaction between a user and the system. Different actors perform different types of use cases such as manage recipes, manage verifications, manage user profiles, manage meal plans, and manage collections. There are three types of users or actors who can perform different tasks. These are:

- Actor 1: Public User
- Actor 2: Recipe Developer
- Actor 3: Nutritionist

#### Actions those are performed by Public User (Actor 1):

- First public user can browse recipes without registration.
- Public user can register and create an account.
- Public user can sign in to access additional features.
- Public user can browse and search verified recipes.
- Public user can view recipe details and nutritional information.
- Public user can create meal plans and shopping lists.
- Public user can add recipes to collections.
- Public user can provide reviews and ratings.
- Public user can sign out.

#### Actions those are performed by Recipe Developer (Actor 2):

- First recipe developer signs in to the application.
- Recipe developer can create profile or update profile.
- Recipe developer can create and submit recipes for verification.
- Recipe developer can track verification status of submitted recipes.
- Recipe developer can edit recipes based on nutritionist feedback.
- Recipe developer can manage recipe collections.
- Recipe developer can view recipe analytics and performance.
- Recipe developer can communicate with nutritionists through feedback system.
- Recipe developer can sign out.

#### Actions those are performed by Nutritionist (Actor 3):

- First nutritionist signs in to the application.
- Nutritionist can create profile or update profile.
- Nutritionist can review pending recipe submissions.
- Nutritionist can verify recipes and provide health tips.
- Nutritionist can request revisions from recipe developers.
- Nutritionist can view verification history and statistics.
- Nutritionist can manage verification queue.
- Nutritionist can provide nutritional guidance and recommendations.
- Nutritionist can sign out.

#### 2. Forming Use Case Diagram with Candidate and Use Cases

#### 3. <a name="_TOC_250000"></a>Use Case

Use-case diagrams describe the high-level functions and scope of a system. This diagram also identifies the interactions between the system and its actors. The use cases and actors in use-case diagrams describe what the system does and how the actors use it, but not how the system operates internally.

**Instructions for Draw.io:**

1. Create a new diagram in draw.io
2. Add a large rectangle as the system boundary labeled "Flavourly Recipe Management System"
3. Add three stick figure actors outside the boundary:
   - "Public User" on the left
   - "Recipe Developer" in the center-left
   - "Nutritionist" on the right
4. Inside the system boundary, add use case ovals connected to actors:
   - Public User connections: Browse Recipes, Register, Sign In, View Recipe Details, Create Meal Plan, Add to Collection, Provide Review, Sign Out
   - Recipe Developer connections: Sign In, Manage Profile, Create Recipe, Submit Recipe, Track Status, Edit Recipe, Manage Collections, View Analytics, Sign Out
   - Nutritionist connections: Sign In, Manage Profile, Review Recipes, Verify Recipe, Request Revision, View History, Manage Queue, Provide Guidance, Sign Out
5. Use solid lines to connect actors to their use cases
6. Add proper spacing and organization
7. Export as PNG or SVG

**Figure 3.2.1 Use Case Diagram**

[Detailed description of the diagram: This is a UML Use Case Diagram for the Flavourly recipe management system. The diagram visually represents the interactions between the system and its actors: Public User, Recipe Developer, and Nutritionist. Each actor is depicted as a stick figure, labeled with their respective roles. The system is represented as a rectangular boundary labeled "Flavourly Recipe Management System." Inside this boundary are various use cases, depicted as ovals, connected to the actors via lines indicating their interactions.

- **Public User Use Cases**: The Public User is connected to use cases such as "Browse Recipes," "Register," "Sign In," "View Recipe Details," "Create Meal Plan," "Add to Collection," "Provide Review," and "Sign Out."
- **Recipe Developer Use Cases**: The Recipe Developer is connected to use cases including "Sign In," "Manage Profile," "Create Recipe," "Submit Recipe," "Track Status," "Edit Recipe," "Manage Collections," "View Analytics," and "Sign Out."
- **Nutritionist Use Cases**: The Nutritionist is connected to use cases such as "Sign In," "Manage Profile," "Review Recipes," "Verify Recipe," "Request Revision," "View History," "Manage Queue," "Provide Guidance," and "Sign Out."

The diagram uses standard UML notation, with solid lines indicating associations between actors and use cases, clearly illustrating the functionalities available to each actor within the system.]

#### 4. Public User

**Instructions for Draw.io:**

1. Create a new diagram in draw.io
2. Add a large rectangle as the system boundary labeled "Flavourly Recipe Management System"
3. Add one stick figure actor labeled "Public User" on the left side
4. Inside the system boundary, add use case ovals connected to the Public User:
   - Browse Recipes
   - Register Account
   - Sign In
   - View Recipe Details
   - Search Recipes
   - Create Meal Plan
   - Generate Shopping List
   - Add to Collection
   - Provide Review
   - Follow Users
   - Sign Out
5. Use solid lines to connect the actor to use cases
6. Organize use cases in logical groups
7. Export as PNG or SVG

**Figure 3.2.2 Public User Use Case**

[Detailed description of the diagram: This is a UML Use Case Diagram specifically for the Public User in the Flavourly recipe management system. The diagram focuses on the Public User actor, depicted as a stick figure labeled "Public User." The system boundary is labeled "Flavourly Recipe Management System." The Public User is connected to several use cases, represented as ovals, including "Browse Recipes," "Register Account," "Sign In," "View Recipe Details," "Search Recipes," "Create Meal Plan," "Generate Shopping List," "Add to Collection," "Provide Review," "Follow Users," and "Sign Out." Each use case is connected to the Public User via solid lines, indicating the actions the Public User can perform within the system. The diagram provides a clear, high-level view of the Public User's interactions with the system, focusing on recipe discovery, account management, meal planning, and social features.]

#### 5. Recipe Developer

**Instructions for Draw.io:**

1. Create a new diagram in draw.io
2. Add a large rectangle as the system boundary labeled "Flavourly Recipe Management System"
3. Add one stick figure actor labeled "Recipe Developer" on the left side
4. Inside the system boundary, add use case ovals connected to the Recipe Developer:
   - Sign In
   - Manage Profile
   - Create Recipe
   - Submit Recipe
   - Track Verification Status
   - Edit Recipe
   - Resubmit Recipe
   - Manage Collections
   - View Analytics
   - Receive Feedback
   - Sign Out
5. Use solid lines to connect the actor to use cases
6. Organize use cases in logical groups
7. Export as PNG or SVG

**Figure 3.2.3 Recipe Developer Use Case**

[Detailed description of the diagram: This is a UML Use Case Diagram for the Recipe Developer in the Flavourly recipe management system. The diagram highlights the Recipe Developer actor, depicted as a stick figure labeled "Recipe Developer." The system boundary is labeled "Flavourly Recipe Management System." The Recipe Developer is connected to use cases such as "Sign In," "Manage Profile," "Create Recipe," "Submit Recipe," "Track Verification Status," "Edit Recipe," "Resubmit Recipe," "Manage Collections," "View Analytics," "Receive Feedback," and "Sign Out." These use cases are represented as ovals and connected to the Recipe Developer via solid lines, illustrating the Recipe Developer's ability to manage their profile, create and submit recipes, track verification processes, and manage their culinary content within the system. The diagram emphasizes the Recipe Developer's key functionalities in the recipe creation and management platform.]

#### 6. Nutritionist

**Instructions for Draw.io:**

1. Create a new diagram in draw.io
2. Add a large rectangle as the system boundary labeled "Flavourly Recipe Management System"
3. Add one stick figure actor labeled "Nutritionist" on the left side
4. Inside the system boundary, add use case ovals connected to the Nutritionist:
   - Sign In
   - Manage Profile
   - Review Pending Recipes
   - Verify Recipe
   - Request Revision
   - Provide Health Tips
   - View Verification History
   - Manage Queue
   - Generate Reports
   - Provide Guidance
   - Sign Out
5. Use solid lines to connect the actor to use cases
6. Organize use cases in logical groups
7. Export as PNG or SVG

**Figure 3.2.4 Nutritionist Use Case**

[Detailed description of the diagram: This is a UML Use Case Diagram for the Nutritionist in the Flavourly recipe management system. The diagram features the Nutritionist actor, depicted as a stick figure labeled "Nutritionist." The system boundary is labeled "Flavourly Recipe Management System." The Nutritionist is connected to use cases including "Sign In," "Manage Profile," "Review Pending Recipes," "Verify Recipe," "Request Revision," "Provide Health Tips," "View Verification History," "Manage Queue," "Generate Reports," "Provide Guidance," and "Sign Out." These use cases, shown as ovals, are linked to the Nutritionist via solid lines, representing the Nutritionist's interactions with the system, such as reviewing and verifying recipes, providing professional guidance, managing verification workflows, and maintaining professional standards within the platform.]

#### 7. **<a name="_bookmark13"></a>\*\***<a name="_bookmark12"></a>\***\*Describe the Events Flow for Use Case**

#### 8. **Sign in**

|                          |                                                                                     |                                                        |
| ------------------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Identifier               | Sign in                                                                             |                                                        |
| Primary Actor            | Public User, Recipe Developer, Nutritionist                                         |                                                        |
| Purpose                  | To sign in to the application                                                       |                                                        |
| Priority                 | High                                                                                |                                                        |
| Pre-conditions           | Users should be registered with the system                                          |                                                        |
| Post-conditions          | After successful sign in user will go to their respective dashboard.                |                                                        |
| Typical Course of Action |                                                                                     |                                                        |
| Sr#                      | Actor Action                                                                        | System Response                                        |
| 1                        | User clicks on the Sign in Button                                                   | System will open the Sign in page                      |
| 2                        | User adds sign in credentials                                                       | System will check and match details.                   |
| 3                        |                                                                                     | System will display appropriate dashboard to the user. |
| Sr#                      | Alternate Scenarios                                                                 |                                                        |
| 1                        | In case of non-availability of internet, Error message will be displayed.           |                                                        |
| 2                        | In case of blank, wrong formatted inputs, system will generate alert/error message. |                                                        |
| Cross References         |                                                                                     |                                                        |
| Not any                  |                                                                                     |                                                        |

**Table 3.3.1: Sign in**

**Description:**

The Sign in feature allows users to securely access their accounts and participate in recipe management activities. It ensures that only authorized individuals can interact with the platform and perform actions such as creating recipes, verifying recipes, or browsing verified content.

#### 9. **Set up profile**

|                          |                                                                                     |                                         |
| ------------------------ | ----------------------------------------------------------------------------------- | --------------------------------------- |
| Identifier               | Set up profile                                                                      |                                         |
| Primary Actor            | Recipe Developer, Nutritionist                                                      |                                         |
| Purpose                  | To set up their profiles                                                            |                                         |
| Priority                 | High                                                                                |                                         |
| Pre-conditions           | Users must be signed in with application.                                           |                                         |
| Post-conditions          | After successful profile setup user will go to home page.                           |                                         |
| Typical Course of Action |                                                                                     |                                         |
| Sr#                      | Actor Action                                                                        | System Response                         |
| 1                        | User clicks on set up profile Button                                                | System will open the profile setup page |
| 2                        | User adds their information                                                         | System will store the details.          |
| 3                        |                                                                                     | System will display Main activity.      |
| Sr#                      | Alternate Scenarios                                                                 |                                         |
| 1                        | In case of non-availability of internet, Error message will be displayed.           |                                         |
| 2                        | In case of blank, wrong formatted inputs, system will generate alert/error message. |                                         |
| Cross References         |                                                                                     |                                         |
| Not any                  |                                                                                     |                                         |

**Table 3.3.2: Set up profile**

**Description:**

The Set up Profile feature in the Flavourly platform allows users to create and personalize their profile within the platform. This feature is typically available to Recipe Developers and Nutritionists. This typically includes providing basic information such as name, contact details, and a profile picture. Users may also have the option to add additional details such as culinary expertise, dietary preferences, and professional qualifications.

#### 10. **Update profile**

|                          |                                                                                     |                                       |
| ------------------------ | ----------------------------------------------------------------------------------- | ------------------------------------- |
| Identifier               | Update profile                                                                      |                                       |
| Primary Actor            | Recipe Developer, Nutritionist                                                      |                                       |
| Purpose                  | To update profile                                                                   |                                       |
| Priority                 | High                                                                                |                                       |
| Pre-conditions           | User must be signed in with application.                                            |                                       |
| Post-conditions          | After successful update user will go to profile settings                            |                                       |
| Typical Course of Action |                                                                                     |                                       |
| Sr#                      | Actor Action                                                                        | System Response                       |
| 1                        | User clicks on the profile update button                                            | System will open the profile settings |
| 2                        | User will update their information                                                  | System will update their profile.     |
| 3                        |                                                                                     | System will display Main activity.    |
| Sr#                      | Alternate Scenarios                                                                 |                                       |
| 1                        | In case of non-availability of internet, Error message will be displayed.           |                                       |
| 2                        | In case of blank, wrong formatted inputs, system will generate alert/error message. |                                       |
| Cross References         |                                                                                     |                                       |
| Not any                  |                                                                                     |                                       |

**Table 3.3.3 Update profile**

**Description:**

The Profile Update Process is of paramount importance, as it empowers users to refine and personalize their profiles, laying the foundation for a robust engagement within the recipe management system. This use case prioritizes the seamless enhancement of user profiles, facilitating a more tailored and meaningful interaction on the platform.

#### 11. **Create recipe**

|                          |                                                                          |                                                                   |
| ------------------------ | ------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| Identifier               | Create recipe                                                            |                                                                   |
| Primary Actor            | Recipe Developer                                                         |                                                                   |
| Purpose                  | To create and submit a recipe for verification                           |                                                                   |
| Priority                 | High                                                                     |                                                                   |
| Pre-conditions           | Recipe Developer should be signed in                                     |                                                                   |
| Post-conditions          | Recipe Developer can submit recipe for verification                      |                                                                   |
| Typical Course of Action |                                                                          |                                                                   |
| Sr#                      | Actor Action                                                             | System Response                                                   |
| 1                        | Recipe Developer clicks on the create recipe button                      | System will open the recipe creation form                         |
| 2                        | Recipe Developer fills in recipe details and clicks submit               | System will process the submission and add to verification queue. |
| Sr#                      | Alternate Scenarios                                                      |                                                                   |
| 1                        | In case of non-availability of internet, Error message will be displayed |                                                                   |
| Cross References         |                                                                          |                                                                   |
| Not any                  |                                                                          |                                                                   |

**Table 3.3.4 Create recipe**

**Description:**

This use case describes the process of creating and submitting recipes for professional verification. Which has high priority because recipe creation is an important part of the recipe management system application. Users can create and submit recipes for professional review by nutritionists.

#### 12. **<a name="_bookmark14"></a>\*\***Browse recipes\*\*

|                           |                                                                          |                                                               |     |     |     |
| ------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------- | --- | --- | --- |
| Identifier                | Browse recipes                                                           |                                                               |     |     |     |
| Primary Actor             | Public User, Recipe Developer, Nutritionist                              |                                                               |     |     |     |
| Purpose                   | To browse and discover recipes                                           |                                                               |     |     |     |
| Priority                  | High                                                                     |                                                               |     |     |     |
| Pre-conditions            | User should be able to access the platform                               |                                                               |     |     |     |
| Post-conditions           | User can view available recipes                                          |                                                               |     |     |     |
| Typical Course            | of Action                                                                |                                                               |     |     |     |
| Sr#                       | Actor Action                                                             | System Response                                               |     |     |     |
| 1                         | User clicks on the recipes button                                        | System will open the recipe browsing page                     |
| 2                         | User will browse through available recipes                               | System will display recipes with filtering and search options |
| Sr#                       | Alternate Scenario                                                       |                                                               |     |     |     |
| 1                         | In case of non-availability of internet, Error message will be displayed |                                                               |     |     |     |
| <br/><br/>Cross Reference |                                                                          |                                                               |     |     |     |
| Not any                   |                                                                          |                                                               |     |     |     |

**Table 3.3.5 Browse recipes**

**Description:**

This use case describes the process of browsing and discovering recipes. Which has high priority because recipe discovery is an important part of the recipe management application. Users can browse through available recipes, filter by various criteria, and discover new culinary creations.

#### 13. **Review recipe**

|                           |                                                                          |                                                         |     |     |
| ------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------- | --- | --- |
| Identifier                | Review recipe                                                            |                                                         |     |     |
| Primary Actor             | Nutritionist                                                             |                                                         |     |     |
| Purpose                   | To review and verify submitted recipes                                   |                                                         |     |     |
| Priority                  | High                                                                     |                                                         |     |     |
| Pre-conditions            | Nutritionist should be signed in                                         |                                                         |     |     |
| Post-conditions           | Nutritionist can provide verification feedback                           |                                                         |     |     |
| Typical Course            | of Action                                                                |                                                         |     |     |
| Sr#                       | Actor Action                                                             | System Response                                         |     |     |
| 1                         | Nutritionist clicks on the review recipe button                          | System will open the recipe review interface            |
| 2                         | Nutritionist reviews recipe and provides feedback                        | System will process the review and update recipe status |
| Sr#                       | Alternate Scenarios                                                      |                                                         |     |     |
| 1                         | In case of non-availability of internet, Error message will be displayed |                                                         |     |     |
| <br/><br/>Cross Reference |                                                                          |                                                         |     |     |
| Not any                   |                                                                          |                                                         |     |     |

**Table 3.3.6 Review recipe**

**Description:**

This use case enables Nutritionists to evaluate submitted recipes by reviewing their nutritional content, ingredients, and preparation methods. This feature allows nutritionists to provide professional feedback and ensure recipes meet nutritional standards.

#### 14. **Verify recipe**

|                           |                                                                          |                                                    |     |     |
| ------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------- | --- | --- |
| Identifier                | Verify recipe                                                            |                                                    |     |     |
| Primary Actor             | Nutritionist                                                             |                                                    |     |     |
| Purpose                   | To verify and approve recipes                                            |                                                    |     |     |
| Priority                  | High                                                                     |                                                    |     |     |
| Pre-conditions            | Nutritionist should be signed in                                         |                                                    |     |     |
| Post-conditions           | Recipe status is updated and developer is notified                       |                                                    |     |     |
| Typical Course            | of Action                                                                |                                                    |     |     |
| S#                        | Actor Action                                                             | System Response                                    |     |     |
| 1                         | Nutritionist clicks on verify recipe button                              | System will process verification and update status |
| 2                         | Nutritionist provides health tips and approval                           | System will send notification to recipe developer  |
| S#                        | Alternate Scenarios                                                      |                                                    |     |     |
| 1                         | In case of non-availability of internet, Error message will be displayed |                                                    |     |     |
| <br/><br/>Cross Reference |                                                                          |                                                    |     |     |
| Not Any                   |                                                                          |                                                    |     |     |

**Table 3.3.7 Verify recipe**

**Description:**

The Verify Recipe feature facilitates the professional verification process between Nutritionists and Recipe Developers within the application. This use case allows signed-in nutritionists to review and approve recipes, enabling seamless and professional interaction between them.

#### 15. **Create meal plan**

|                          |                                                                           |                                                           |
| ------------------------ | ------------------------------------------------------------------------- | --------------------------------------------------------- |
| Identifier               | Create meal plan                                                          |                                                           |
| Primary Actor            | Public User, Recipe Developer                                             |                                                           |
| Purpose                  | To create meal plans                                                      |                                                           |
| Priority                 | Medium                                                                    |                                                           |
| Pre-conditions           | User should be signed in                                                  |                                                           |
| Post-conditions          | User can create and manage meal plans                                     |                                                           |
| Typical Course of Action |                                                                           |                                                           |
| S#                       | Actor Action                                                              | System Response                                           |
| 1                        | User clicks on create meal plan button                                    | System will open the meal plan creation form              |
| 2                        | User adds recipes and schedules to meal plan                              | System will save the meal plan and generate shopping list |
| S#                       | Alternate Scenarios                                                       |                                                           |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                                                           |
| Cross References         |                                                                           |                                                           |
| Not any                  |                                                                           |                                                           |

**Table 3.3.8 Create meal plan**

**Description:**

The Create Meal Plan use case allows users to organize their culinary activities by creating structured meal plans. This feature enables users to plan their meals and generate shopping lists based on their selected recipes. The priority of this use case is medium, as it provides organizational functionality.

#### 16. **Generate shopping list**

|                          |                                                                           |                                                   |
| ------------------------ | ------------------------------------------------------------------------- | ------------------------------------------------- |
| Identifier               | Generate shopping list                                                    |                                                   |
| Primary Actor            | Public User, Recipe Developer                                             |                                                   |
| Purpose                  | To generate shopping lists from meal plans                                |                                                   |
| Priority                 | Medium                                                                    |                                                   |
| Pre-conditions           | User should be signed in                                                  |                                                   |
| Post-conditions          | User can generate and manage shopping lists                               |                                                   |
| Typical Course of Action |                                                                           |                                                   |
| S#                       | Actor Action                                                              | System Response                                   |
| 1                        | User clicks on generate shopping list button                              | System will create shopping list from meal plan   |
| 2                        | User can edit and manage shopping list items                              | System will save the shopping list for future use |
| S#                       | Alternate Scenarios                                                       |                                                   |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                                                   |
| Cross References         |                                                                           |                                                   |
| Not any                  |                                                                           |                                                   |

**Table 3.3.9 Generate shopping list**

**Description:**

The Generate Shopping List Feature is designed to empower users to automatically create shopping lists based on their meal plans and recipe selections. This use case aims to facilitate efficient meal planning and grocery shopping, allowing users to organize their culinary activities and stay informed about required ingredients.

#### 17. **Add to collection**

|                          |                                                                           |                                                |
| ------------------------ | ------------------------------------------------------------------------- | ---------------------------------------------- |
| Identifier               | Add to collection                                                         |                                                |
| Primary Actor            | Public User, Recipe Developer                                             |                                                |
| Purpose                  | To add recipes to personal collections                                    |                                                |
| Priority                 | High                                                                      |                                                |
| Pre-conditions           | User should be signed in                                                  |                                                |
| Post-conditions          | Recipe is added to user's collection                                      |                                                |
| Typical Course of Action |                                                                           |                                                |
| S#                       | Actor Action                                                              | System Response                                |
| 1                        | User clicks on add to collection button                                   | System will add recipe to user's collection    |
| 2                        |                                                                           | System will confirm the addition to collection |
| S#                       | Alternate Scenarios                                                       |                                                |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                                                |
| Cross References         |                                                                           |                                                |
| Not any                  |                                                                           |                                                |

**Table 3.3.10 Add to collection**

**Description:**

The "Add to Collection" use case stands as a pivotal feature in our recipe management system, providing users with the ability to organize and save their favorite recipes in personalized collections. The primary objective is to furnish users with a convenient way to manage and access their preferred recipes.

#### 18. **Provide review**

|                          |                                                                          |                                                      |
| ------------------------ | ------------------------------------------------------------------------ | ---------------------------------------------------- |
| Identifier               | Provide review                                                           |                                                      |
| Primary Actor            | Public User, Recipe Developer                                            |                                                      |
| Purpose                  | To provide reviews and ratings for recipes                               |                                                      |
| Priority                 | Medium                                                                   |                                                      |
| Pre-conditions           | User should be signed in                                                 |                                                      |
| Post-conditions          | Review is submitted and recipe rating is updated                         |                                                      |
| Typical Course of Action |                                                                          |                                                      |
| S#                       | Actor Action                                                             | System Response                                      |
| 1                        | User clicks on the provide review button                                 | System will open the review form                     |
| 2                        | User writes review and provides rating                                   | System will save the review and update recipe rating |
| S#                       | Alternate Scenarios                                                      |                                                      |
| 1                        | In case of non-availability of internet, Error message will be displayed |                                                      |
| Cross References         |                                                                          |                                                      |
| Not any                  |                                                                          |                                                      |

**Table 3.3.11 Provide review**

**Description:**

The "Provide Review" use case describes the process by which a User, who is signed into the system, can provide feedback and ratings for recipes they have tried. The purpose of this use case is to enable users to share their experiences and help other users make informed decisions about recipes.

#### 19. **Track verification status**

|                          |                                                                           |                                               |
| ------------------------ | ------------------------------------------------------------------------- | --------------------------------------------- |
| Identifier               | Track verification status                                                 |                                               |
| Primary Actor            | Recipe Developer                                                          |                                               |
| Purpose                  | To track the status of submitted recipes                                  |                                               |
| Priority                 | High                                                                      |                                               |
| Pre-conditions           | Recipe Developer should be signed in                                      |                                               |
| Post-conditions          | Recipe Developer can view verification status                             |                                               |
| Typical Course of Action |                                                                           |                                               |
| S#                       | Actor Action                                                              | System Response                               |
| 1                        | Recipe Developer clicks on track status button                            | System will show the verification status page |
| S#                       | Alternate Scenarios                                                       |                                               |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                                               |
| Cross References         |                                                                           |                                               |
| Not Any                  |                                                                           |                                               |

**Table 3.3.12 Track verification status**

**Description:**

The "Track Verification Status" use case is an essential feature in the platform, enabling Recipe Developers to monitor the progress of their submitted recipes through the verification process. By providing this functionality, users can conveniently track their recipe status and receive updates on the verification process.

#### 20. **View recipe details**

|                          |                                                                           |                                           |
| ------------------------ | ------------------------------------------------------------------------- | ----------------------------------------- |
| Identifier               | View recipe details                                                       |                                           |
| Primary Actor            | Public User, Recipe Developer, Nutritionist                               |                                           |
| Purpose                  | To view detailed recipe information                                       |                                           |
| Priority                 | High                                                                      |                                           |
| Pre-conditions           | User should be able to access the platform                                |                                           |
| Post-conditions          | User can view comprehensive recipe information                            |                                           |
| Typical Course of Action |                                                                           |                                           |
| S#                       | Actor Action                                                              | System Response                           |
| 1                        | User clicks on a recipe                                                   | System will show the detailed recipe page |
| 2                        | User can view ingredients, steps, and nutritional info                    | System will display all recipe details    |
| S#                       | Alternate Scenarios                                                       |                                           |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                                           |
| Cross References         |                                                                           |                                           |
| Not Any                  |                                                                           |                                           |

**Table 3.3.13 View recipe details**

**Description:**

This use case Recipe Details View is a high-priority use case that allows users to access and view comprehensive recipe information on the platform. By clicking on a recipe, users gain access to detailed information including ingredients, preparation steps, nutritional information, and verification status.

#### 21. **Request revision**

|                          |                                                                                           |                                                      |
| ------------------------ | ----------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Identifier               | Request revision                                                                          |                                                      |
| Primary Actor            | Nutritionist                                                                              |                                                      |
| Purpose                  | To request revisions from recipe developers                                               |                                                      |
| Priority                 | Medium                                                                                    |                                                      |
| Pre-conditions           | Nutritionist should be signed in                                                          |                                                      |
| Post-conditions          | Recipe developer receives revision request                                                |                                                      |
| Typical Course of Action |                                                                                           |                                                      |
| S#                       | Actor Action                                                                              | System Response                                      |
| 1                        | Nutritionist clicks on request revision button                                            | System will open revision form                       |
| 2                        | Nutritionist provides feedback and revision requirements                                  | System will send notification to recipe developer    |
| 3                        |                                                                                           | System will update recipe status to "needs revision" |
| S#                       | Alternate Scenarios                                                                       |                                                      |
| 1                        | In case of non-availability of internet, Error message will be displayed on the web page. |                                                      |
| Cross References         |                                                                                           |                                                      |
| Not any                  |                                                                                           |                                                      |

**Table 3.3.14 Request revision**

**Description:**

This use case describes the process of requesting revisions from recipe developers. Both nutritionists and recipe developers can participate in this feedback process. After reviewing a recipe, nutritionists can provide detailed feedback and request specific revisions. Which will be helpful for both recipe developers and nutritionists to maintain quality standards.

#### 22. **View verification history**

|                          |                                                                           |                                                |
| ------------------------ | ------------------------------------------------------------------------- | ---------------------------------------------- |
| Identifier               | View verification history                                                 |                                                |
| Primary Actor            | Nutritionist                                                              |                                                |
| Purpose                  | To view verification history and statistics                               |                                                |
| Priority                 | High                                                                      |                                                |
| Pre-conditions           | Nutritionist should be signed in                                          |                                                |
| Post-conditions          | Nutritionist can view verification history                                |                                                |
| Typical Course of Action |                                                                           |                                                |
| S#                       | Actor Action                                                              | System Response                                |
| 1                        | Nutritionist clicks on verification history                               | System will show the verification history page |
| S#                       | Alternate Scenarios                                                       |                                                |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                                                |
| Cross References         |                                                                           |                                                |
| Not Any                  |                                                                           |                                                |

**Table 3.3.15 View verification history**

**Description:**

The "View Verification History" use case is a pivotal feature within our recipe management system. This functionality enables Nutritionists to access and review their verification activities on the platform. By logging into their respective accounts, nutritionists gain seamless entry to the verification dashboard, where they can effortlessly navigate to the dedicated section for viewing verification history.

#### 23. **Manage verification queue**

|                          |                                                                           |                                                  |
| ------------------------ | ------------------------------------------------------------------------- | ------------------------------------------------ |
| Identifier               | Manage verification queue                                                 |                                                  |
| Primary Actor            | Nutritionist                                                              |                                                  |
| Purpose                  | To manage pending recipe verifications                                    |                                                  |
| Priority                 | High                                                                      |                                                  |
| Pre-conditions           | Nutritionist should be signed in                                          |                                                  |
| Post-conditions          | Nutritionist can manage verification queue                                |                                                  |
| Typical Course of Action |                                                                           |                                                  |
| S#                       | Actor Action                                                              | System Response                                  |
| 1                        | Nutritionist clicks on verification queue                                 | System will show the pending verifications queue |
| S#                       | Alternate Scenarios                                                       |                                                  |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                                                  |
| Cross References         |                                                                           |                                                  |
| Not Any                  |                                                                           |                                                  |

**Table 3.3.16 Manage verification queue**

**Description:**

The "Manage Verification Queue" use case is a pivotal feature within our recipe management system. This functionality enables Nutritionists to efficiently manage and process pending recipe verifications. This use case is pivotal in granting nutritionists immediate visibility into the real-time queue of pending verifications.

#### 24. **Sign-out**

|                          |                                                                                                                 |                     |
| ------------------------ | --------------------------------------------------------------------------------------------------------------- | ------------------- |
| Identifier               | Sign-out                                                                                                        |                     |
| Primary Actor            | User                                                                                                            |                     |
| Purpose                  | To sign out from application                                                                                    |                     |
| Priority                 | High                                                                                                            |                     |
| Pre-conditions           | User should be signed in                                                                                        |                     |
| Post-conditions          | User can sign out                                                                                               |                     |
| Typical Course of Action |                                                                                                                 |                     |
| S#                       | Actor Action                                                                                                    | System Response     |
| 1                        | User clicks on logout option                                                                                    | Logout successfully |
| S#                       | Alternate Scenarios                                                                                             |                     |
| 1                        | In case of non-availability of internet, Error message will be displayed that, there is no internet connection. |                     |
| Cross References         |                                                                                                                 |                     |
|                          |                                                                                                                 |                     |

**Table 3.3.17 Sign-out**

**Description:**

The Sign-out use case allows users to securely log out from the application after completing their session. It is of high priority as it ensures the protection of user accounts and data. The primary actor in this use case is the User, who must be signed in before initiating the sign-out process. After successfully signing out, the user's session is terminated, and they no longer have access to their account.
