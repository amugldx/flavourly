# CHAPTER 6

## Testing (Software Quality Attributes)

#### 1. Test Case Specification

Test Case Specification document described detailed summary of what scenarios will be tested, how they will be tested, how often they will be tested, and so on and so forth, for a given feature. It specifies the purpose of a specific test, identifies the required inputs and expected results, provides step-by-step procedures for executing the test, and outlines the pass/fail criteria for determining acceptance.

#### 2. User sign in -Valid Gmail

|                     |                                   |                                         |
| ------------------- | --------------------------------- | --------------------------------------- |
| **Test Case Id:**   | TC-1                              | Test Data                               |
| **Test Case**       | User sign in -Valid Gmail         |                                         |
| **Objective**       | To user sign in Process via Gmail |                                         |
| **Perquisites**     | User must have an Gmail account   |                                         |
| **Input**           | EnterValidGmail account           | [User@gmail.com](mailto:User@gmail.com) |
| **Expected Result** | Sign in should be successful      |                                         |
| **Actual Result**   | User Successfully sign in         |                                         |
| **Status**          | Successfully signed in            | Pass                                    |

***Table 6.1.1: ******User sign in******-Valid Email***

#### Description:

This test case describes the user sign in-valid email process. Sign in screen is loaded is the perquisites for this test case. After providing the valid Gmail and password, user gone to main activity and seen the home screen.

#### 1. **User sign in-Valid phone No**

|                     |                                       |                        |
| ------------------- | ------------------------------------- | ---------------------- |
| **Test Case Id:**   | TC-2                                  | Test Data              |
| **Test Case**       | User sign in -Valid phone No          |                        |
| **Objective**       | To user sign in Process via phone No  |                        |
| **Perquisites**     | User must have a valid phone No       |                        |
| **Input**           | EnterValidPhone No and valid OTP code | 03123456789<br/>7****8 |
| **Expected Result** | Sign in should be successful          |                        |
| **Actual Result**   | User Successfully sign in             |                        |
| **Status**          | Successfully signed in                | Pass                   |

**Table 6.1.2 User sign in-Valid phone No**

**Description:**

This test case describes the user sign in-valid phone No process. Sign in screen is loaded is the perquisites for this test case. After providing the valid phone No and OTP user gone to main activity and seen the home screen.

#### 2. **User setup profile**

|                     |                                                                                               |                                                                                                                                                  |
| ------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Test Case Id:**   | TC-3                                                                                          | Test Data                                                                                                                                        |
| **Test Case**       | User setup profile                                                                            |                                                                                                                                                  |
| **Objective**       | To User setup profile Process                                                                 |                                                                                                                                                  |
| **Perquisites**     | User must be sign in                                                                          |                                                                                                                                                  |
| **Input**           | Select picture Name<br/>Email Phone No Gender<br/>Select country Add bio<br/><br/>Add address | Image=”URL” Safeer [user@gmail.com](mailto:user@gmail.com) 03000000000<br/>Male<br/>Pakistan Electronic product seller<br/><br/>Grw Pakistan |
| **Expected Result** | Profile setup should be successful                                                            |                                                                                                                                                  |
| **Actual Result**   | Profile set up successfully                                                                   |                                                                                                                                                  |
| **Status**          | Profile set up successfully                                                                   | Pass                                                                                                                                             |

**Table 6.1.3:User setup profile**

**Description:**

This test case describes the User setup profile process. Providing the valid credentials user will setup his profile.

#### 3. **Update profile**

|                     |                                                                                          |                                                                                                                                |
| ------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Test Case Id:**   | TC-4                                                                                     | Test Data                                                                                                                      |
| **Test Case**       | Update profile                                                                           |                                                                                                                                |
| **Objective**       | To Update profile Process                                                                |                                                                                                                                |
| **Perquisites**     | User must have a registered profile                                                      |                                                                                                                                |
| **Input**           | Select picture Name<br/>Email Phone No Gender<br/>Select country Add bio<br/>Add address | Image=”URL” Huraira [user@gmail.com](mailto:user@gmail.com) 03001111111<br/>Male<br/>Pakistan Garments seller Grw Pakistan |
| **Expected Result** | Profile should be update successful                                                      |                                                                                                                                |
| **Actual Result**   | Profile updated successfully                                                             |                                                                                                                                |
| **Status**          | Profile updated successfully                                                             | Pass                                                                                                                           |

**Table 6.1.4 Update profile**

**Description:**

This test case describes the update profile process. Profile setting screen is loaded is the perquisites for this test case. After providing the required information user seen his profile updated.

#### 4. **Add auction**

|                     |                                                                     |                                  |
| ------------------- | ------------------------------------------------------------------- | -------------------------------- |
| **Test Case Id:**   | TC-5                                                                | Test Data                        |
| **Test Case**       | Add auction                                                         |                                  |
| **Objective**       | To make a live auction                                              |                                  |
| **Perquisites**     | User should be sign in<br/>User should be register as a seller      |                                  |
| **Input**           | Select product image Product name Product description Product price | Image=”URL” ABC<br/>XYZ 1000 |
| **Expected Result** | Auction should be live successfully                                 |                                  |
| **Actual Result**   | Live auction start successfully                                     |                                  |
| **Status**          | Live auction start successfully                                     | Pass                             |

**Table 6.1.5: Add auction**

**Description:**

This test case describes the add auction process. User will add a picture, description, bid price and product name, by providing these info he will start a new auction

#### 5. **Admin sign in**

|                     |                                   |                                                        |
| ------------------- | --------------------------------- | ------------------------------------------------------ |
| **Test Case Id:**   | TC-6                              | Test Data                                              |
| **Test Case**       | Admin sign in                     |                                                        |
| **Objective**       | To sign in admin application      |                                                        |
| **Perquisites**     | Admin should have an Gmail        |                                                        |
| **Input**           | Gmail password                    | [ali@123gmail.com](mailto:ali@123gmail.com)<br/>Ab12jk |
| **Expected Result** | Admin should sign in successfully |                                                        |
| **Actual Result**   | Admin successfully sign in        |                                                        |
| **Status**          | Admin successfully sign in        | Pass                                                   |

**Table 6.1.6: Admin sign in**

**Description:**

This test case describes the admin sign in process. Sign in screen should loaded is the perquisites for this test case. After providing the valid Gmail and password, admin will seen the home page. First user provides the valid Gmail if they registered otherwise, they must be registered and then they sign in to the application and go to the homepage.

#### 6. **Comment**

|                     |                                                                 |           |
| ------------------- | --------------------------------------------------------------- | --------- |
| **Test Case Id:**   | TC-7                                                            | Test Data |
| **Test Case**       | Comment                                                         |           |
| **Objective**       | To comment on live session                                      |           |
| **Perquisites**     | User should sign in User should participate in live<br/>session |           |
| **Input**           | Comment                                                         | Xyz       |
| **Expected Result** | Comment should be posted                                        |           |
| **Actual Result**   | Comment posted                                                  |           |
| **Status**          | User can view comment<br/>successfully                          | Pass      |

**Table 6.1.7: Comment**

**Description:**

This test case describes the comment process. Live auction is loaded isthe perquisites for this test case. During live session user will write a comment and send it and by this process comment will posted.

#### 7. **Recharge wallet**

|                     |                               |                                                         |
| ------------------- | ----------------------------- | ------------------------------------------------------- |
| **Test Case Id:**   | TC-8                          | Test Data                                               |
| **Test Case**       | Recharge wallet               |                                                         |
| **Objective**       | To recharge wallet            |                                                         |
| **Perquisites**     | Admin should sign in          |                                                         |
| **Input**           | User id<br/>Amount            | [Ahmad11@gmail.com](mailto:Ahmad11@gmail.com)<br/>15000 |
| **Expected Result** | Credit should be recharge     |                                                         |
| **Actual Result**   | Recharged wallet successfully |                                                         |
| **Status**          | Recharged wallet successfully | Pass                                                    |

**Table 6.1.8: recharge wallet**

**Description:**

This test case describes the recharge wallet process. Admin will enter an user id and add some amount to submit. User gets recharged by this process.

#### 8. **User message Test Case**

|                     |                                                        |                                           |
| ------------------- | ------------------------------------------------------ | ----------------------------------------- |
| **Test Case Id:**   | TC-9                                                   | Test Data                                 |
| **Test Case**       | User message                                           |                                           |
| **Objective**       | To message the users                                   |                                           |
| **Perquisites**     | User should be sign in<br/>User should have<br/>access |                                           |
| **Input**           | User id message                                        | [@gmail.com](mailto:ali@gmail.com) hello! |
| **Expected Result** | The message should send successfully                   |                                           |
| **Actual Result**   | The message has been send successfully                 |                                           |
| **Status**          | The message has been send successfully                 | Pass                                      |

**Table 6.1.9: User massage**

**Description**

This test case describes the user messaging process. User registration is the perquisites for this test case. A registered user will write a message on a specific user inbox by user and sent the message to the users.

#### 3. Black Box Test Case

Black Box Testing is a software testing method in which the functionalities of software applications are tested without having knowledge of internal code structure, implementation details and internal paths. Black Box Testing mainly focuses on input and output of software applications and it is entirely based on software requirements and specifications. It is also known as Behavioral Testing.

The above Black-Box can be any software system you want to test. For Example, an operating system like Windows, a website like Google, a database like Oracle or even your own custom application. Under Black Box Testing, you can test these applications by just focusing on the inputs and outputs without knowing their internal code implementation.

#### 4. Boundary Value Analysis

Boundary value analysis is based on testing at the boundaries between partitions. It includes maximum, minimum, inside or outside boundaries, typical values and error values. It is generally seen that a large number of errors occur at the boundaries of the defined input values rather than the center. It is also known as BVA and gives a selection of test cases which exercise bounding values. This black box testing technique complements equivalence partitioning.

#### 5. Sign in Form Boundary value analysisBVA on Name

In our web we have text field (Name) which accepts a length between 3-30 characters.

|                                          |                                       |                 |
| ---------------------------------------- | ------------------------------------- | --------------- |
| Boundary Value Analysis<br/><br/>Of Name |                                       |                 |
| Invalid (Min-1)                          | Valid<br/><br/>(Min, +min, max, -max) | Invalid (max+1) |
| 2 characters                             | 3,7,16,25,30, characters              | 31 characters   |

#### 6. BVA on Password

In our app we have password field (password) which accepts the length between 8-30 characters and numbers.

|                                              |                                       |                 |
| -------------------------------------------- | ------------------------------------- | --------------- |
| Boundary Value Analysis<br/><br/>Of Password |                                       |                 |
| Invalid (Min-1)                              | Valid<br/><br/>(Min, +min, max, -max) | Invalid (max+1) |
| 7 characters                                 | 8,16,25,30, characters                | 31 characters   |

#### 7. Equivalence Class Partitioning

Equivalence Partitioning Method is also known as Equivalence class partitioning (ECP). It is a software testing technique or black-box testing that divides input domain into classes of data, and with the help of these classes of data, test cases can be derived.

#### 8. Mobile Number Boundary value analysisECP on mobile number

|                                                          |             |             |
| -------------------------------------------------------- | ----------- | ----------- |
| Equivalence Class Partitioning<br/><br/>Of Mobile Number |             |             |
| Invalid                                                  | Invalid     | Valid       |
| Number >=11                                              | Number = 11 | Number <=11 |

#### 9. **State Transition Testing**

State Transition Testing is a black box testing technique in which changes made in input conditions cause state changes or output changes in the Application under Test (AUT). State Transition Testing helps to analyze behavior of an application for different input conditions.

#### 1. State Transition Diagram

**Figure 6.2.5 State Transition Diagram**

[Detailed description of the diagram: This is a UML State Transition Diagram for the Spark Buy Live auction system, illustrating the states and transitions of an auction process. The diagram uses standard UML notation with rounded rectangles for states, arrows for transitions, and labels for events triggering transitions.

- **States**:
  - **Idle**: The initial state before an auction begins.
  - **Active**: The state when the auction is live and users can place bids.
  - **Ignored**: The state when the auction timer expires without any bids or actions.
  - **Closed**: The state when the auction ends, either due to timer expiration or manual closure.
- **Transitions**:
  - From **Idle** to **Active**: Triggered by the event "Start Auction" (e.g., seller initiates the live auction).
  - From **Active** to **Ignored**: Triggered by the event "Timer Expired" (no bids placed within the time limit).
  - From **Active** to **Closed**: Triggered by the event "End Auction" (e.g., timer expires with bids or seller closes the auction).
  - From **Idle** to **Closed**: Triggered by the event "Cancel Auction" (e.g., seller cancels before starting).
- **Events**: Labels on transitions indicate actions like "Start Auction," "Timer Expired," "End Auction," or "Cancel Auction."

The diagram captures the real-time nature of the auction system, showing how user actions (e.g., starting or bidding) and the auction timer influence state changes.]

#### 10. Decision Table Testing

Decision table testing is a software testing technique used to test system behavior for different input combinations. This is a systematic approach where the different input combinations and their corresponding system behavior (Output) are captured in a tabular form. That is why it is also called as a Cause-Effect table where Cause and effects are captured for better test coverage.

#### 11. Decision Table for Sign in Form

|                |               |               |                |                |
| -------------- | ------------- | ------------- | -------------- | -------------- |
| <br/>Condition | <br/>Case 1/G | <br/>Case 2/G | <br/>Case 3/No | <br/>Case 4/No |
| <br/>Gmail/No  | <br/>T        | <br/>F        | <br/>F         | <br/>T         |

|             |        |        |        |        |
| ----------- | ------ | ------ | ------ | ------ |
| <br/>Output | <br/>H | <br/>E | <br/>E | <br/>H |

Legend:

T – Correct Format/Size F – Wrong Format/Size

E – Error message is displayed

#### Interpretation:

Case 1 – Email was correct and the user navigated to home screen. Case 2 – Email was wrong. The user is shown an error message.

Case 3 – Phone No was wrong. The user is shown an error message. Case 4 –Phone no was correct, and the user navigated to home screen.

#### 12. Graph Base Testing

**Figure 6.2.6 Graph Base Testing**

[Detailed description of the diagram: This is a Graph-Based Testing diagram for the Spark Buy Live auction system, illustrating the relationship between inputs (causes) and outputs (effects) in the system. The diagram uses nodes to represent inputs and outputs and directed edges to show the cause-effect relationships.

- **Nodes**:
  - **Input Nodes**: Represent causes, such as "Enter Email," "Enter Password," "Enter Phone Number," or "Submit OTP."
  - **Output Nodes**: Represent effects, such as "Display Home Screen," "Show Error Message," or "Validate Credentials."
- **Edges**: Directed arrows connecting input nodes to output nodes, labeled with conditions or actions (e.g., "Valid Email -> Display Home Screen," "Invalid Password -> Show Error Message").
- **Flow**: The diagram shows multiple paths, such as:
    - Valid email and password leading to the home screen.
    - Invalid email or password leading to an error message.
    - Valid phone number and OTP leading to successful sign-in.

The diagram uses standard graph notation to visualize the flow of inputs and outputs, helping to understand the software’s functional performance and test case generation for various input-output combinations.]

#### 13. White Box Testing

#### 14. **Statement Coverage**

Statement coverage is one of the widely used software testing. It comes under white box testing. Statement coverage technique is used to design white box test cases. This technique involves execution of all statements of the source code at least once. It is used to calculate the total number of executed statements in the source code out of total statements present in the source code. Statement coverage derives scenario of test cases under the white box testing process which is based upon the structure of the code.

#### Source Code Structure:

15. Take input of two values like a=0 and b=1.

16. Find the sum of these two values.

17. If the sum is greater than 0, then print "This is the positive result."

18. If the sum is less than 0, then print "This is the negative result."

#### 19. **Branch Coverage**

Branch coverage technique is used to cover all branches of the control flow graph. It covers all the possible outcomes (true and false) of each condition of decision point at least once. Branch coverage technique is a White box testing technique that ensures thatevery branch of each decision point must be executed. However, branch coverage technique and decision coverage technique are very similar, but there is a key difference between the two. Decision coverage technique covers all branches of each decision point whereas branch testing covers all branches of every decision point of the code. In other words, branch coverage follows decision point and branch coverage edges. Many different metrics can be used to find branch coverage and decision coverage, butsome of the most basic metrics are: finding the percentage of program and paths of execution during the execution of the program. In this method, the number of paths of executed branches is used to calculate Branch coverage. Branch coverage technique can be used as the alternative of decision coverage. Somewhere, it

is not defined as anindividual technique, but it is distinct from decision coverage and essential to test all branches of the control flow graph.

#### 20. **Path Coverage**

Basis Path Testing in software engineering is a White Box Testing method in which test cases are defined based on flows or logical paths that can be taken through the program. The objective of basis path testing is to define the number of independent

Paths, so the number of test cases needed can be defined explicitly to maximize test coverage. In software engineering, Basis path testing involves execution of all possible blocks in a program and achieves maximum path coverage with the least number of test cases. Itis a hybrid method of branch testing and path testing methods.

#### Steps for Basis Path testing

The basic steps involved in basis path testing include

21. Draw a control graph (to determine different program paths)

22. Calculate Cyclamate complexity (metrics to determine the number of independent paths)

23. Find a basis set of paths

24. Generate test cases to exercise each path.