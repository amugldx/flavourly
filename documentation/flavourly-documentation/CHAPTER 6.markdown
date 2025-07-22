# CHAPTER 6

## Testing (Software Quality Attributes)

#### 1. Test Case Specification

Test Case Specification document described detailed summary of what scenarios will be tested, how they will be tested, how often they will be tested, and so on and so forth, for a given feature. It specifies the purpose of a specific test, identifies the required inputs and expected results, provides step-by-step procedures for executing the test, and outlines the pass/fail criteria for determining acceptance.

#### 2. User sign in -Valid Email

|                     |                                   |                                         |
| ------------------- | --------------------------------- | --------------------------------------- |
| **Test Case Id:**   | TC-1                              | Test Data                               |
| **Test Case**       | User sign in -Valid Email         |                                         |
| **Objective**       | To user sign in Process via Email |                                         |
| **Perquisites**     | User must have an Email account   |                                         |
| **Input**           | EnterValidEmail account           | [user@gmail.com](mailto:user@gmail.com) |
| **Expected Result** | Sign in should be successful      |                                         |
| **Actual Result**   | User Successfully sign in         |                                         |
| **Status**          | Successfully signed in            | Pass                                    |

**\*Table 6.1.1: \*\*\*\***User sign in**\*\***-Valid Email\*\*\*

#### Description:

This test case describes the user sign in-valid email process. Sign in screen is loaded is the perquisites for this test case. After providing the valid email and password, user gone to main activity and seen the home screen.

#### 1. **User sign up -Recipe Developer**

|                     |                                                     |                                                                                |
| ------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Test Case Id:**   | TC-2                                                | Test Data                                                                      |
| **Test Case**       | User sign up -Recipe Developer                      |                                                                                |
| **Objective**       | To user sign up Process as Recipe Developer         |                                                                                |
| **Perquisites**     | User must not have an existing account              |                                                                                |
| **Input**           | EnterValidEmail, username, fullName, password, role | john@example.com<br/>john_doe<br/>John Doe<br/>password123<br/>RecipeDeveloper |
| **Expected Result** | Sign up should be successful                        |                                                                                |
| **Actual Result**   | User Successfully sign up                           |                                                                                |
| **Status**          | Successfully signed up                              | Pass                                                                           |

**Table 6.1.2 User sign up -Recipe Developer**

**Description:**

This test case describes the user sign up-valid email process. Sign up screen is loaded is the perquisites for this test case. After providing the valid email, username, full name, password, and selecting Recipe Developer role, user gone to main activity and seen the dashboard.

#### 2. **User sign up -Nutritionist**

|                     |                                                     |                                                                                              |
| ------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Test Case Id:**   | TC-3                                                | Test Data                                                                                    |
| **Test Case**       | User sign up -Nutritionist                          |                                                                                              |
| **Objective**       | To User sign up Process as Nutritionist             |                                                                                              |
| **Perquisites**     | User must not have an existing account              |                                                                                              |
| **Input**           | EnterValidEmail, username, fullName, password, role | nutritionist@example.com<br/>dr_nutrition<br/>Dr. Nutrition<br/>password123<br/>Nutritionist |
| **Expected Result** | Sign up should be successful                        |                                                                                              |
| **Actual Result**   | User Successfully sign up                           |                                                                                              |
| **Status**          | Successfully signed up                              | Pass                                                                                         |

**Table 6.1.3:User sign up -Nutritionist**

**Description:**

This test case describes the User sign up process as Nutritionist. Providing the valid credentials user will create a new account with Nutritionist role and access to recipe verification features.

#### 3. **Update profile**

|                     |                                                                                              |                                                                                                                           |
| ------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Test Case Id:**   | TC-4                                                                                         | Test Data                                                                                                                 |
| **Test Case**       | Update profile                                                                               |                                                                                                                           |
| **Objective**       | To Update profile Process                                                                    |                                                                                                                           |
| **Perquisites**     | User must have a registered profile                                                          |                                                                                                                           |
| **Input**           | Select picture Name<br/>Email Bio<br/>Dietary restrictions Allergies<br/>Cuisine preferences | Image="URL" John Doe [user@gmail.com](mailto:user@gmail.com) Food enthusiast<br/>Vegetarian<br/>Nuts<br/>Italian, Mexican |
| **Expected Result** | Profile should be update successful                                                          |                                                                                                                           |
| **Actual Result**   | Profile updated successfully                                                                 |                                                                                                                           |
| **Status**          | Profile updated successfully                                                                 | Pass                                                                                                                      |

**Table 6.1.4 Update profile**

**Description:**

This test case describes the update profile process. Profile setting screen is loaded is the perquisites for this test case. After providing the required information user seen his profile updated with new dietary preferences and personal information.

#### 4. **Create recipe**

|                     |                                                                       |                                                                                                                                      |
| ------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Test Case Id:**   | TC-5                                                                  | Test Data                                                                                                                            |
| **Test Case**       | Create recipe                                                         |                                                                                                                                      |
| **Objective**       | To create a new recipe                                                |                                                                                                                                      |
| **Perquisites**     | User should be sign in<br/>User should be Recipe Developer            |                                                                                                                                      |
| **Input**           | Recipe title, description, ingredients, steps, cooking time, servings | Chicken Pasta<br/>Delicious pasta dish<br/>Chicken, Pasta, Sauce<br/>Boil pasta, Cook chicken, Combine<br/>30 minutes<br/>4 servings |
| **Expected Result** | Recipe should be created successfully                                 |                                                                                                                                      |
| **Actual Result**   | Recipe created successfully                                           |                                                                                                                                      |
| **Status**          | Recipe created successfully                                           | Pass                                                                                                                                 |

**Table 6.1.5: Create recipe**

**Description:**

This test case describes the create recipe process. User will add recipe title, description, ingredients, preparation steps, cooking time, and servings, by providing these info he will create a new recipe that goes to verification queue.

#### 5. **Nutritionist verify recipe**

|                     |                                                   |                                                   |
| ------------------- | ------------------------------------------------- | ------------------------------------------------- |
| **Test Case Id:**   | TC-6                                              | Test Data                                         |
| **Test Case**       | Nutritionist verify recipe                        |                                                   |
| **Objective**       | To verify recipe as nutritionist                  |                                                   |
| **Perquisites**     | Nutritionist should be signed in                  |                                                   |
| **Input**           | Recipe review, health tips, verification decision | Recipe looks good<br/>High in protein<br/>Approve |
| **Expected Result** | Recipe should be verified successfully            |                                                   |
| **Actual Result**   | Recipe successfully verified                      |                                                   |
| **Status**          | Recipe successfully verified                      | Pass                                              |

**Table 6.1.6: Nutritionist verify recipe**

**Description:**

This test case describes the nutritionist recipe verification process. Recipe verification screen should loaded is the perquisites for this test case. After reviewing the recipe details, nutritional information, and safety aspects, nutritionist can approve, request revisions, or reject the recipe.

#### 6. **Add review**

|                     |                                                         |                            |
| ------------------- | ------------------------------------------------------- | -------------------------- |
| **Test Case Id:**   | TC-7                                                    | Test Data                  |
| **Test Case**       | Add review                                              |                            |
| **Objective**       | To add review on recipe                                 |                            |
| **Perquisites**     | User should sign in User should view recipe<br/>details |                            |
| **Input**           | Rating, comment                                         | 5 stars, Delicious recipe! |
| **Expected Result** | Review should be posted                                 |                            |
| **Actual Result**   | Review posted                                           |                            |
| **Status**          | User can view review<br/>successfully                   | Pass                       |

**Table 6.1.7: Add review**

**Description:**

This test case describes the add review process. Recipe detail page is loaded is the perquisites for this test case. User will write a review with rating and comment and submit it, by this process review will posted and visible to other users.

#### 7. **Create meal plan**

|                     |                                             |                                                                 |
| ------------------- | ------------------------------------------- | --------------------------------------------------------------- |
| **Test Case Id:**   | TC-8                                        | Test Data                                                       |
| **Test Case**       | Create meal plan                            |                                                                 |
| **Objective**       | To create meal plan                         |                                                                 |
| **Perquisites**     | User should be signed in                    |                                                                 |
| **Input**           | Plan name<br/>Start date, end date, recipes | Weekly Plan<br/>2024-01-01, 2024-01-07<br/>Chicken Pasta, Salad |
| **Expected Result** | Meal plan should be created                 |                                                                 |
| **Actual Result**   | Meal plan created successfully              |                                                                 |
| **Status**          | Meal plan created successfully              | Pass                                                            |

**Table 6.1.8: Create meal plan**

**Description:**

This test case describes the create meal plan process. User will enter plan name, select start and end dates, and add recipes to the plan. User gets a complete meal plan by this process.

#### 8. **Generate shopping list**

|                     |                                                             |                                        |
| ------------------- | ----------------------------------------------------------- | -------------------------------------- |
| **Test Case Id:**   | TC-9                                                        | Test Data                              |
| **Test Case**       | Generate shopping list                                      |                                        |
| **Objective**       | To generate shopping list from meal plan                    |                                        |
| **Perquisites**     | User should be signed in<br/>User should have<br/>meal plan |                                        |
| **Input**           | Meal plan selection, generate list                          | Weekly Plan<br/>Generate shopping list |
| **Expected Result** | Shopping list should be generated successfully              |                                        |
| **Actual Result**   | Shopping list has been generated successfully               |                                        |
| **Status**          | Shopping list has been generated successfully               | Pass                                   |

**Table 6.1.9: Generate shopping list**

**Description**

This test case describes the shopping list generation process. Meal plan selection is the perquisites for this test case. A user will select a meal plan and generate a shopping list containing all ingredients needed for the recipes in the plan.

#### 3. Black Box Test Case

Black Box Testing is a software testing method in which the functionalities of software applications are tested without having knowledge of internal code structure, implementation details and internal paths. Black Box Testing mainly focuses on input and output of software applications and it is entirely based on software requirements and specifications. It is also known as Behavioral Testing.

The above Black-Box can be any software system you want to test. For Example, an operating system like Windows, a website like Google, a database like Oracle or even your own custom application. Under Black Box Testing, you can test these applications by just focusing on the inputs and outputs without knowing their internal code implementation.

#### 4. Boundary Value Analysis

Boundary value analysis is based on testing at the boundaries between partitions. It includes maximum, minimum, inside or outside boundaries, typical values and error values. It is generally seen that a large number of errors occur at the boundaries of the defined input values rather than the center. It is also known as BVA and gives a selection of test cases which exercise bounding values. This black box testing technique complements equivalence partitioning.

#### 5. Sign in Form Boundary value analysisBVA on Email

In our web application we have text field (Email) which accepts a valid email format with length between 5-50 characters.

|                                           |                                       |                 |
| ----------------------------------------- | ------------------------------------- | --------------- |
| Boundary Value Analysis<br/><br/>Of Email |                                       |                 |
| Invalid (Min-1)                           | Valid<br/><br/>(Min, +min, max, -max) | Invalid (max+1) |
| 4 characters                              | 5,15,25,40,50 characters              | 51 characters   |

#### 6. BVA on Password

In our app we have password field (password) which accepts the length between 8-30 characters and must contain both letters and numbers.

|                                              |                                       |                 |
| -------------------------------------------- | ------------------------------------- | --------------- |
| Boundary Value Analysis<br/><br/>Of Password |                                       |                 |
| Invalid (Min-1)                              | Valid<br/><br/>(Min, +min, max, -max) | Invalid (max+1) |
| 7 characters                                 | 8,16,25,30 characters                 | 31 characters   |

#### 7. Equivalence Class Partitioning

Equivalence Partitioning Method is also known as Equivalence class partitioning (ECP). It is a software testing technique or black-box testing that divides input domain into classes of data, and with the help of these classes of data, test cases can be derived.

#### 8. Recipe Title Boundary value analysisECP on recipe title

|                                                         |           |            |
| ------------------------------------------------------- | --------- | ---------- |
| Equivalence Class Partitioning<br/><br/>Of Recipe Title |           |            |
| Invalid                                                 | Invalid   | Valid      |
| Empty title                                             | Title < 3 | Title >= 3 |

#### 9. **State Transition Testing**

State Transition Testing is a black box testing technique in which changes made in input conditions cause state changes or output changes in the Application under Test (AUT). State Transition Testing helps to analyze behavior of an application for different input conditions.

#### 1. State Transition Diagram

**Figure 6.2.5 State Transition Diagram**

This is a UML State Transition Diagram for the Flavourly recipe management system, illustrating the states and transitions of a recipe verification process. The diagram uses standard UML notation with rounded rectangles for states, arrows for transitions, and labels for events triggering transitions.

- **States**:
  - **Draft**: The initial state when a recipe is created by a Recipe Developer.
  - **Pending Verification**: The state when the recipe is submitted for nutritionist review.
  - **Needs Revision**: The state when the nutritionist requests changes to the recipe.
  - **Verified**: The state when the recipe is approved and published.
  - **Rejected**: The state when the recipe is rejected by the nutritionist.
- **Transitions**:
  - From **Draft** to **Pending Verification**: Triggered by the event "Submit for Review" (e.g., Recipe Developer submits the recipe).
  - From **Pending Verification** to **Needs Revision**: Triggered by the event "Request Changes" (e.g., nutritionist finds issues with the recipe).
  - From **Pending Verification** to **Verified**: Triggered by the event "Approve Recipe" (e.g., nutritionist approves the recipe).
  - From **Pending Verification** to **Rejected**: Triggered by the event "Reject Recipe" (e.g., nutritionist rejects the recipe).
  - From **Needs Revision** to **Pending Verification**: Triggered by the event "Resubmit Recipe" (e.g., Recipe Developer makes changes and resubmits).
- **Events**: Labels on transitions indicate actions like "Submit for Review," "Request Changes," "Approve Recipe," or "Reject Recipe."

The diagram captures the verification workflow of the recipe system, showing how user actions (e.g., submitting or reviewing) influence state changes in the recipe lifecycle.

**Draw.io Instructions for State Transition Diagram:**

1. Create a new diagram in draw.io
2. Use the "UML" template
3. Add states as rounded rectangles: "Draft", "Pending Verification", "Needs Revision", "Verified", "Rejected"
4. Add an initial state (black circle) pointing to "Draft"
5. Add final states (black circle with inner circle) for "Verified" and "Rejected"
6. Connect states with arrows labeled with events
7. Use different colors for different state types
8. Add event labels on transition arrows

#### 10. Decision Table Testing

Decision table testing is a software testing technique used to test system behavior for different input combinations. This is a systematic approach where the different input combinations and their corresponding system behavior (Output) are captured in a tabular form. That is why it is also called as a Cause-Effect table where Cause and effects are captured for better test coverage.

#### 11. Decision Table for Sign in Form

|                |               |               |                |                |
| -------------- | ------------- | ------------- | -------------- | -------------- |
| <br/>Condition | <br/>Case 1/G | <br/>Case 2/G | <br/>Case 3/No | <br/>Case 4/No |
| <br/>Email/No  | <br/>T        | <br/>F        | <br/>F         | <br/>T         |

|             |        |        |        |        |
| ----------- | ------ | ------ | ------ | ------ |
| <br/>Output | <br/>H | <br/>E | <br/>E | <br/>H |

Legend:

T – Correct Format/Size F – Wrong Format/Size

E – Error message is displayed

#### Interpretation:

Case 1 – Email was correct and the user navigated to home screen. Case 2 – Email was wrong. The user is shown an error message.

Case 3 – Password was wrong. The user is shown an error message. Case 4 –Password was correct, and the user navigated to home screen.

#### 12. Graph Base Testing

**Figure 6.2.6 Graph Base Testing**

This is a Graph-Based Testing diagram for the Flavourly recipe management system, illustrating the relationship between inputs (causes) and outputs (effects) in the system. The diagram uses nodes to represent inputs and outputs and directed edges to show the cause-effect relationships.

- **Nodes**:
  - **Input Nodes**: Represent causes, such as "Enter Email," "Enter Password," "Select Role," or "Submit Recipe."
  - **Output Nodes**: Represent effects, such as "Display Dashboard," "Show Error Message," or "Navigate to Recipe Creation."
- **Edges**: Directed arrows connecting input nodes to output nodes, labeled with conditions or actions (e.g., "Valid Email -> Display Dashboard," "Invalid Password -> Show Error Message").
- **Flow**: The diagram shows multiple paths, such as:
  - Valid email and password leading to the appropriate dashboard based on role.
  - Invalid email or password leading to an error message.
  - Recipe Developer role leading to recipe creation interface.
  - Nutritionist role leading to verification queue.

The diagram uses standard graph notation to visualize the flow of inputs and outputs, helping to understand the software's functional performance and test case generation for various input-output combinations.

**Draw.io Instructions for Graph Base Testing:**

1. Create a new diagram in draw.io
2. Use the "Flowchart" template
3. Add input nodes as rectangles: "Enter Email", "Enter Password", "Select Role"
4. Add output nodes as rectangles: "Display Dashboard", "Show Error Message", "Navigate to Recipe Creation"
5. Connect nodes with arrows showing cause-effect relationships
6. Add labels on arrows showing conditions
7. Use different colors for input and output nodes
8. Include decision diamonds for conditional flows

#### 13. White Box Testing

#### 14. **Statement Coverage**

Statement coverage is one of the widely used software testing. It comes under white box testing. Statement coverage technique is used to design white box test cases. This technique involves execution of all statements of the source code at least once. It is used to calculate the total number of executed statements in the source code out of total statements present in the source code. Statement coverage derives scenario of test cases under the white box testing process which is based upon the structure of the code.

#### Source Code Structure:

15. Take input of user credentials like email and password.

16. Validate the email format and password requirements.

17. If the credentials are valid, then authenticate the user and redirect to dashboard.

18. If the credentials are invalid, then display an error message.

#### 19. **Branch Coverage**

Branch coverage technique is used to cover all branches of the control flow graph. It covers all the possible outcomes (true and false) of each condition of decision point at least once. Branch coverage technique is a White box testing technique that ensures that every branch of each decision point must be executed. However, branch coverage technique and decision coverage technique are very similar, but there is a key difference between the two. Decision coverage technique covers all branches of each decision point whereas branch testing covers all branches of every decision point of the code. In other words, branch coverage follows decision point and branch coverage edges. Many different metrics can be used to find branch coverage and decision coverage, but some of the most basic metrics are: finding the percentage of program and paths of execution during the execution of the program. In this method, the number of paths of executed branches is used to calculate Branch coverage. Branch coverage technique can be used as the alternative of decision coverage. Somewhere, it is not defined as an individual technique, but it is distinct from decision coverage and essential to test all branches of the control flow graph.

#### 20. **Path Coverage**

Basis Path Testing in software engineering is a White Box Testing method in which test cases are defined based on flows or logical paths that can be taken through the program. The objective of basis path testing is to define the number of independent Paths, so the number of test cases needed can be defined explicitly to maximize test coverage. In software engineering, Basis path testing involves execution of all possible blocks in a program and achieves maximum path coverage with the least number of test cases. It is a hybrid method of branch testing and path testing methods.

#### Steps for Basis Path testing

The basic steps involved in basis path testing include

21. Draw a control graph (to determine different program paths)

22. Calculate Cyclamate complexity (metrics to determine the number of independent paths)

23. Find a basis set of paths

24. Generate test cases to exercise each path.
