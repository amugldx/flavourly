# CHAPTER 3

## Software Analysis

#### 1. <a name="_bookmark11"></a>Identifying Actors and Use Cases using Textual Analysis

Use-case diagrams describe the high-level functions and scope of a system. This diagram also identifies the interactions between the system and its actors. The use cases and actors in use-case diagrams describe what the system does and how the actors use it, but not how the system operates internally. The Use Case Diagram is a graphic depiction of the interaction among the elements of online auction system. It represents the methodology used in system analysis to identify, clarify, and organize system Requirements of Online auction system. Use Case describes proposed functionality of the system. A Use Case represents a discrete unit of interaction betweena user and the system. Different actors perform the different type of use cases such as manage auction, manage order, manage products, manage payment, and manage bidders.There are three types of user or actors who can perform different tasks. These are:

- Actor 1: Admin
- Actor 2: seller
- Actor 3: buyer

#### Actions those are performed by Admin (Actor 1):

- First admin Sign up through admin application.
- Admin can monitor order list.
- Admin can view user’s wallet.
- Admin can recharge user’s wallet.
- Admin can Sign Out.

#### Actions those are performed by seller (Actor 2):

- First seller Sign in into the application.
- Seller can create profile or update profile.
- Seller can add his product detail.
- Seller can start a live auction.
- Seller can chat with buyers.
- Seller can view his orders list
- Seller can accept or reject order.
- Seller can sign out.

#### Actions those are performed by buyer (Actor 3):

- First buyer Sign in into the application.
- Buyer can create his profile or update profile.
- Buyer can give feedback.
- Buyer can join auction.
- Buyer can bid on a product.
- Buyer can communicate with the seller.
- Buyer can view the seller’s accounts.
- Buyer can pay for a product.
- Buyer can sign out.

#### 2. Forming Use Case Diagram with Candidate and Use Cases

#### 3. <a name="_TOC_250000"></a>Use Case

Use-case diagrams describe the high-level functions and scope of a system. This diagram also identifies the interactions between the system and its actors. The use cases and actors in use-case diagrams describe what the system does and how the actors use it, but not how the system operates internally.

![cc.png](./media/image1.png)

**Figure 3.2.1 Use Case Diagram**

[Detailed description of the diagram: This is a UML Use Case Diagram for the live streaming auction system. The diagram visually represents the interactions between the system and its actors: Admin, Seller, and Buyer. Each actor is depicted as a stick figure, labeled with their respective roles. The system is represented as a rectangular boundary labeled "Live Streaming Auction System." Inside this boundary are various use cases, depicted as ovals, connected to the actors via lines indicating their interactions.

- **Admin Use Cases**: The Admin is connected to use cases such as "Sign up," "Monitor order list," "View user’s wallet," "Recharge user’s wallet," and "Sign out."
- **Seller Use Cases**: The Seller is connected to use cases including "Sign in," "Create/Update profile," "Add product detail," "Start live auction," "Chat with buyers," "View orders list," "Accept/Reject order," and "Sign out."
- **Buyer Use Cases**: The Buyer is connected to use cases such as "Sign in," "Create/Update profile," "Give feedback," "Join auction," "Bid on product," "Communicate with seller," "View seller’s accounts," "Pay for product," and "Sign out."

The diagram uses standard UML notation, with solid lines indicating associations between actors and use cases, clearly illustrating the functionalities available to each actor within the system.]

#### 4. Admin

**Figure 3.2.2 Administrator Use Case**

[Detailed description of the diagram: This is a UML Use Case Diagram specifically for the Administrator in the live streaming auction system. The diagram focuses on the Admin actor, depicted as a stick figure labeled "Admin." The system boundary is labeled "Live Streaming Auction System." The Admin is connected to several use cases, represented as ovals, including "Sign up," "View wallet credit," "Manage user," "Update profile," "Handle feedback," and "Sign out." Each use case is connected to the Admin via solid lines, indicating the actions the Admin can perform within the system. The diagram provides a clear, high-level view of the Administrator's interactions with the system, focusing on user management, wallet management, profile updates, feedback handling, and authentication processes.]

#### 5. Seller

**Figure 3.2.3 Seller Use Case**

[Detailed description of the diagram: This is a UML Use Case Diagram for the Seller in the live streaming auction system. The diagram highlights the Seller actor, depicted as a stick figure labeled "Seller." The system boundary is labeled "Live Streaming Auction System." The Seller is connected to use cases such as "Sign in," "Update profile," "Manage auction," "Manage products," "Manage orders," and "Live broadcast." These use cases are represented as ovals and connected to the Seller via solid lines, illustrating the Seller's ability to manage their profile, auctions, products, orders, and conduct live broadcasts within the system. The diagram emphasizes the Seller's key functionalities in the auction platform.]

#### 6. Buyer

**Figure 3.2.4 Buyer Use Case**

[Detailed description of the diagram: This is a UML Use Case Diagram for the Buyer in the live streaming auction system. The diagram features the Buyer actor, depicted as a stick figure labeled "Buyer." The system boundary is labeled "Live Streaming Auction System." The Buyer is connected to use cases including "Sign in," "Sign out," "Update profile," "View products," "Bid on product," "Communicate with seller," "Follow seller profiles," and "Give feedback." These use cases, shown as ovals, are linked to the Buyer via solid lines, representing the Buyer's interactions with the system, such as browsing products, bidding, communicating with sellers, following profiles, providing feedback, and managing authentication.]

#### 7. **<a name="_bookmark13"></a>****<a name="_bookmark12"></a>****Describe the Events Flow for Use Case**

#### 8. **Sign in**

|                          |                                                                                              |                                             |
| ------------------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Identifier               | Sign in                                                                                      |                                             |
| Primary Actor            | Admin, Seller ,Buyer                                                                         |                                             |
| Purpose                  | To Sign in the application                                                                   |                                             |
| Priority                 | High                                                                                         |                                             |
| Pre-conditions           | Users should be registered with the system                                                   |                                             |
| Post-conditions          | After successful sign in user will go to dashboard.                                          |                                             |
| Typical Course of Action |                                                                                              |                                             |
| Sr#                      | Actor Action                                                                                 | System Response                             |
| 1                        | Admin click on the Sign in Button                                                            | System will open the Sign in activity       |
| 2                        | Admin add Sign in credentials                                                                | System will check and match details.        |
| 3                        |                                                                                              | System will display dashboard to the admin. |
| Sr#                      | Alternate Scenarios                                                                          |                                             |
| 1                        | In case of non-availability of internet, Error message will be<br/><br/>displayed.           |                                             |
| 2                        | In case of blank, wrong formatted inputs, system will generate alert/error<br/><br/>message. |                                             |
| Cross References         |                                                                                              |                                             |
| Not any                  |                                                                                              |                                             |

**Table 3.3.1: Sign in**

**Description:**

The Sign in feature allows users to securely access their accounts and participate in live auctions. It ensures that only authorized individuals can interact with the platform and perform actions such as bidding, buying, or selling items.

#### 9. **Set up profile**

|                          |                                                                                              |                                      |
| ------------------------ | -------------------------------------------------------------------------------------------- | ------------------------------------ |
| Identifier               | Set up profile                                                                               |                                      |
| Primary Actor            | Seller , buyer                                                                               |                                      |
| Purpose                  | To set up their profiles                                                                     |                                      |
| Priority                 | High                                                                                         |                                      |
| Pre-conditions           | Users must be sign in with application.                                                      |                                      |
| Post-conditions          | After successful sign in user will go to home page.                                          |                                      |
| Typical Course of Action |                                                                                              |                                      |
| Sr#                      | Actor Action                                                                                 | System Response                      |
| 1                        | User click on set up profile Button                                                          | System will open the set up activity |
| 2                        | User add their info                                                                          | System will store the details.       |
| 3                        |                                                                                              | System will display Main activity.   |
| Sr#                      | Alternate Scenarios                                                                          |                                      |
| 1                        | In case of non-availability of internet, Error message will be displayed.                    |                                      |
| 2                        | In case of blank, wrong formatted inputs, system will generate alert/error<br/><br/>message. |                                      |
| Cross References         |                                                                                              |                                      |
| Not any                  |                                                                                              |                                      |

**Table 3.3.2: Set up profile**

**Description:**

The Set up Profile feature in a live auction system allows users to create and personalize their profile within the platform. This feature is typically available to both buyers and sellers. This typically includes providing basic information such as name, contact details, and a profile picture. Users may also have the option to add additional details such as a bio, location.

#### 10. **Update profile**

|                          |                                                                                              |                                      |
| ------------------------ | -------------------------------------------------------------------------------------------- | ------------------------------------ |
| Identifier               | update profile                                                                               |                                      |
| Primary Actor            | Seller Buyer                                                                                 |                                      |
| Purpose                  | To update profile                                                                            |                                      |
| Priority                 | High                                                                                         |                                      |
| Pre-conditions           | User must be sign in with application.                                                       |                                      |
| Post-conditions          | After successful sign in user will go to profile setting                                     |                                      |
| Typical Course of Action |                                                                                              |                                      |
| Sr#                      | Actor Action                                                                                 | System Response                      |
| 1                        | User click on the profile update<br/>button                                                  | System will open the profile setting |
| 2                        | User will update his information                                                             | System will update his profile.      |
| 3                        |                                                                                              | System will display Main activity.   |
| Sr#                      | Alternate Scenarios                                                                          |                                      |
| 1                        | In case of non-availability of internet, Error message will be displayed.                    |                                      |
| 2                        | In case of blank, wrong formatted inputs, system will generate alert/error<br/><br/>message. |                                      |
| Cross References         |                                                                                              |                                      |
| Not any                  |                                                                                              |                                      |

**Table 3.3.3 Update profile**

**Description:**

The Profile Update Process is of paramount importance, as it empowers users to refine and personalize their profiles, laying the foundation for a robust engagement within the auction system. This use case prioritizes the seamless enhancement of user profiles, facilitating a more tailored and meaningful interaction on the platform

#### 11. **Create live auction**

|                          |                                                                          |                                                                         |
| ------------------------ | ------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| Identifier               | create live auction                                                      |                                                                         |
| Primary Actor            | Seller                                                                   |                                                                         |
| Purpose                  | To make a live video auction                                             |                                                                         |
| Priority                 | High                                                                     |                                                                         |
| Pre-conditions           | Seller should be sign in                                                 |                                                                         |
| Post-conditions          | Seller can make live video auction                                       |                                                                         |
| Typical Course of Action |                                                                          |                                                                         |
| Sr#                      | Actor Action                                                             | System Response                                                         |
| 1                        | seller click on the user live<br/>auction button                         | Systemwillopentheseller’s<br/>live auction activity                   |
| 2                        | Seller click on start button                                             | System wills response according to theaction and starts a live session. |
| Sr#                      | Alternate Scenarios                                                      |                                                                         |
| 1                        | In case of non-availability of internet, Error message will be displayed |                                                                         |
| Cross References         |                                                                          |                                                                         |
| Not any                  |                                                                          |                                                                         |

**Table 3.3.4 Create live auction**

**Description:**

This use case describes the processes of live video auction. Which have the high priority because live auction an important part of an auction system application. User can buy products in live video broadcast.

#### 12. **<a name="_bookmark14"></a>****View live auction**

|                           |                                                                                   |                                                                                  |      |      |                      |
| ------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---- | ---- | -------------------- |
| Identifier                | view live auction                                                                 |                                                                                  |      |      |                      |
| Primary Actor             | Seller , Buyer                                                                    |                                                                                  |      |      |                      |
| Purpose                   | To manage auction                                                                 |                                                                                  |      |      |                      |
| Priority                  | High                                                                              |                                                                                  |      |      |                      |
| Pre-conditions            | Seller should be sign in                                                          |                                                                                  |      |      |                      |
| Post-conditions           | Seller go to the Main activity.                                                   |                                                                                  |      |      |                      |
| Typical Course            | of Action                                                                         |                                                                                  |      |      |                      |
| Sr#                       | Actor Action                                                                      | System Response                                                                  |      |      |                      |
| 1                         | User click on the auctions button                                                 | System                                                                           | Will | open | the auction activity |
| 2                         | User will open a specific auction                                                 | System will response according to<br/>the action. User can view the live auction |      |      |                      |
| Sr#                       | Alternate Scenario                                                                |                                                                                  |      |      |                      |
| 1                         | In case of non-availability of internet, Error message will be<br/><br/>Displayed |                                                                                  |      |      |                      |
| <br/><br/>Cross Reference |                                                                                   |                                                                                  |      |      |                      |
| Not any                   |                                                                                   |                                                                                  |      |      |                      |

**Table 3.3.5 View live auction**

**Description:**

This use case describes the processes of view auction. Which have the high priority because auction is an important part of a bidding application. User can make auction. Seller and buyer also can view the participants. They can also view the all existing auction.

#### 13. **Comment**

|                           |                                                                                   |                                                                                                 |      |                     |
| ------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---- | ------------------- |
| Identifier                | Comment                                                                           |                                                                                                 |      |                     |
| Primary Actor             | Seller, Buyer                                                                     |                                                                                                 |      |                     |
| Purpose                   | To comment on post                                                                |                                                                                                 |      |                     |
| Priority                  | Medium                                                                            |                                                                                                 |      |                     |
| Pre-conditions            | User should be sign in                                                            |                                                                                                 |      |                     |
| Post-conditions           | User can comment on a product                                                     |                                                                                                 |      |                     |
| Typical Course            | of Action                                                                         |                                                                                                 |      |                     |
| Sr#                       | Actor Action                                                                      | System Response                                                                                 |      |                     |
| 1                         | User click on the comment<br/><br/>Button.                                        | System activity.                                                                                | open | the comment section |
| 2                         | User will write a comment in text bar and click to send button.                   | System will response according to<br/>the action. User can view the comment in comment section. |      |                     |
| Sr#                       | Alternate Scenarios                                                               |                                                                                                 |      |                     |
| 1                         | In case of non-availability of internet, Error message will be<br/><br/>Displayed |                                                                                                 |      |                     |
| <br/><br/>Cross Reference |                                                                                   |                                                                                                 |      |                     |
| Not any                   |                                                                                   |                                                                                                 |      |                     |

**Table 3.3.6 Comment**

**Description:**

This use case enables Sellers and Buyers to engage in discussions by leaving comments on posts related to products or items in a bidding application. This feature allows users to share their thoughts, ask questions, or provide feedback on various auction listings.

#### 14. **Chat**

|                           |                                                                                   |                                                                               |      |                |
| ------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ---- | -------------- |
| Identifier                | Chat                                                                              |                                                                               |      |                |
| Primary Actor             | Seller, Buyer                                                                     |                                                                               |      |                |
| Purpose                   | To communicate                                                                    |                                                                               |      |                |
| Priority                  | Medium                                                                            |                                                                               |      |                |
| Pre-conditions            | User should be sign in                                                            |                                                                               |      |                |
| Post-conditions           | Users can chat with each others                                                   |                                                                               |      |                |
| Typical Course            | of Action                                                                         |                                                                               |      |                |
| Sr#                       | Actor Action                                                                      | System Response                                                               |      |                |
| 1                         | User click on the chat button                                                     | System                                                                        | Open | the  chat room |
| 2                         | User will write a massage to other user and click on send button.                 | System will response according to<br/>the action. User can view the massages. |      |                |
| Sr#                       | Alternate Scenarios                                                               |                                                                               |      |                |
| 1                         | In case of non-availability of internet, Error message will be<br/><br/>Displayed |                                                                               |      |                |
| <br/><br/>Cross Reference |                                                                                   |                                                                               |      |                |
| Not any                   |                                                                                   |                                                                               |      |                |

**Table 3.3.7 Chat**

**Description:**

The Chat feature facilitates communication between Sellers and Buyers within the application. This use case allows signed-in users to exchange messages in a chat room, enabling seamless and direct interaction between them.

#### 15. **Feedback**

|                          |                                                                           |                                            |
| ------------------------ | ------------------------------------------------------------------------- | ------------------------------------------ |
| Identifier               | Feedback                                                                  |                                            |
| Primary Actor            | User                                                                      |                                            |
| Purpose                  | To feedback of service                                                    |                                            |
| Priority                 | Low                                                                       |                                            |
| Pre-conditions           | User should be sign in                                                    |                                            |
| Post-conditions          | User can rate to a profile                                                |                                            |
| Typical Course of Action |                                                                           |                                            |
| Sr#                      | Actor Action                                                              | System Response                            |
| 1                        | User click on feedbackbutton                                              | System will open the feedback activity     |
| 2                        | User write a feedback                                                     | System will send a feedback about services |
| Sr#                      | Alternate Scenarios                                                       |                                            |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                                            |
| Cross References         |                                                                           |                                            |
| Not any                  |                                                                           |                                            |

**Table 3.3.8 Feedback**

**Description:**

The feedback use case allows users to feedback on the platform. This feature enables users to provide feedback and express their satisfaction or experience with other users. The priority of this use case is low, as it does not involve critical functionalities.

#### 16. **Bidding**

|                          |                                                                           |                                                |
| ------------------------ | ------------------------------------------------------------------------- | ---------------------------------------------- |
| Identifier               | Bidding                                                                   |                                                |
| Primary Actor            | Seller, Buyer                                                             |                                                |
| Purpose                  | To bid on a product                                                       |                                                |
| Priority                 | Medium                                                                    |                                                |
| Pre-conditions           | User should be sign in                                                    |                                                |
| Post-conditions          | User can bid the products in auction                                      |                                                |
| Typical Course of Action |                                                                           |                                                |
| Sr#                      | Actor Action                                                              | System Response                                |
| 1                        | User click to an live auction                                             | System will open the live auction              |
| 2                        | User enter a bid amount                                                   | System will show the latest bid for a product  |
|                          |                                                                           | System will display main activity to the user. |
| Sr#                      | Alternate Scenarios                                                       |                                                |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                                                |
| Cross References         |                                                                           |                                                |
| Not any                  |                                                                           |                                                |

**Table 3.3.9 Bidding**

**Description:**

The Bidding Feature is designed to empower Sellers and Buyers to actively participate in and monitor the bidding activities of other users on the platform. This use case aims to facilitate dynamic bidding interactions, allowing users to engage with the auction process, stay informed about ongoing bids, and make timely decisions. The priority for this feature is considered medium, underlining its significance in elevating the overall user engagement within the platform.

#### 17. **View current bid**

|                          |                                                                           |                                         |
| ------------------------ | ------------------------------------------------------------------------- | --------------------------------------- |
| Identifier               | View current bid                                                          |                                         |
| Primary Actor            | Seller, Buyer                                                             |                                         |
| Purpose                  | To view current bid                                                       |                                         |
| Priority                 | High                                                                      |                                         |
| Pre-conditions           | User may Sign in.                                                         |                                         |
| Post-conditions          | User can view auctions listing                                            |                                         |
|                          | User can see current bid                                                  |                                         |
| Typical Course of Action |                                                                           |                                         |
| Sr#                      | Actor Action                                                              | System Response                         |
| 1                        | User click on an auction                                                  | System will open the live auction       |
| 2                        |                                                                           | System will show the latest current bid |
| Sr#                      | Alternate Scenarios                                                       |                                         |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                                         |
| Cross References         |                                                                           |                                         |
| Not any                  |                                                                           |                                         |

**Table 3.3.10 View current bid**

**Description:**

The "View Current Bidding" use case stands as a pivotal feature in our live auction system, providing Sellers and Buyers with real-time access to ongoing bidding activities. The primary objective is to furnish users with a dynamic and comprehensive overview of the current bids.

#### 18. **Add Product**

|                          |                                                                                   |                                               |
| ------------------------ | --------------------------------------------------------------------------------- | --------------------------------------------- |
| Identifier               | Add product                                                                       |                                               |
| Primary Actor            | Seller                                                                            |                                               |
| Purpose                  | To add product                                                                    |                                               |
| Priority                 | High                                                                              |                                               |
| Pre-conditions           | Seller  should be sign in                                                         |                                               |
| Post-conditions          | Seller go to the add product activity                                             |                                               |
| Typical Course of Action |                                                                                   |                                               |
| Sr#                      | Actor Action                                                                      | System Response                               |
| 1                        | Seller click on the add product button.                                           | Systemwillopenthe product adding activity.    |
| 2                        | Seller add the product like.                                                      | System will response according to the action. |
| Sr#                      | Alternate Scenarios                                                               |                                               |
| 1                        | In case of non-availability of internet, Error message will be<br/><br/>Displayed |                                               |
| Cross References         |                                                                                   |                                               |
| Not any                  |                                                                                   |                                               |

**Table 3.3.11 Add product**

**Description:**

The "Add Product" use case describes the process by which a Seller, who is signed into the system, can add the details of a product on the platform. The purpose of this use case is to enable Sellers to make changes to their product listings, such as updating descriptions or other relevant information. Due to its importance in ensuring accurate and up-to-date product information, the priority of this use case is set to high.

#### 19. **View wallet payment**

|                          |                                                                           |                                                       |
| ------------------------ | ------------------------------------------------------------------------- | ----------------------------------------------------- |
| Identifier               | View wallet payment                                                       |                                                       |
| Primary Actor            | Seller ,Buyer                                                             |                                                       |
| Purpose                  | To view wallet payment                                                    |                                                       |
| Priority                 | High                                                                      |                                                       |
| Pre-conditions           | User should be sign in                                                    |                                                       |
| Post-conditions          | Seller go to view wallet payment                                          |                                                       |
| Typical Course of Action |                                                                           |                                                       |
| S#                       | Actor Action                                                              | System Response                                       |
| 1                        | User click on wallet button                                               | System will show the wallet<br/>activity successfully |
| S#                       | Alternate Scenarios                                                       |                                                       |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                                                       |
| Cross References         |                                                                           |                                                       |
| Not Any                  |                                                                           |                                                       |

**Table 3.3.12 View wallet payment**

**Description:**

The "View Wallet Payment" use case is an essential feature in the platform, enabling both Sellers and Buyers to access and review their wallet transactions. By providing this functionality, users can conveniently track their payment history and current wallet balance.

#### 20. **View order listing**

|                          |                                                                           |                                                     |
| ------------------------ | ------------------------------------------------------------------------- | --------------------------------------------------- |
| Identifier               | Seller                                                                    |                                                     |
| Purpose                  | To view order listing                                                     |                                                     |
| Priority                 | High                                                                      |                                                     |
| Pre-conditions           | Seller should be registered                                               |                                                     |
| Post-conditions          | After getting order seller can view order list                            |                                                     |
| Typical Course of Action |                                                                           |                                                     |
| S#                       | Actor Action                                                              | System Response                                     |
| 1                        | Seller must be sign in                                                    | System will show the main activity to<br/><br/>User |
| 2                        | Seller click on order listing                                             | System will show t h e<br/>o r d e rlist            |
| S#                       | Alternate Scenarios                                                       |                                                     |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                                                     |
| Cross References         |                                                                           |                                                     |
| Not Any                  |                                                                           |                                                     |

**Table 3.3.13 View order listing**

**Description:**

This use case Order Listing View is a high-priority use case that allows registered sellers to access and view their order list on the platform. By logging into their account, sellers gain access to the main activity, where they can easily navigate to the order listing section. This use case ensures that sellers have a clear overview of their orders, streamlining their management and fulfillment processes.

#### 21. **Feedback**

|                          |                                                                                           |                                    |
| ------------------------ | ----------------------------------------------------------------------------------------- | ---------------------------------- |
| Identifier               | User                                                                                      |                                    |
| Purpose                  | Feedback                                                                                  |                                    |
| Priority                 | Medium                                                                                    |                                    |
| Pre-conditions           | User should be logged in.                                                                 |                                    |
| Post-conditions          | User send feedback                                                                        |                                    |
| Typical Course of Action |                                                                                           |                                    |
| S#                       | Actor Action                                                                              | System Response                    |
| 1                        | User clicks on the feedback.                                                              | System will show the feedback box. |
| 2                        | Userwritethecommentor<br/><br/>complaint                                                  | System will show the written data  |
| 3                        | User click on save button                                                                 | System will upload the feedback    |
| S#                       | Alternate Scenarios                                                                       |                                    |
| 1                        | In case of non-availability of internet, Error message will be displayed on the web page. |                                    |
| Cross References         |                                                                                           |                                    |
| Not any                  |                                                                                           |                                    |

**Table 3.3.14 Feedback**

**Description:**

This use case describes the process of sending the feedback of the Auction. Both buyer and sealer can give feedback to the system. After completion of auction they can give feedback. Which will be helpful for both upcoming users sealer and buyer.

#### 22. **View all existing auction**

|                          |                                                                           |                                               |
| ------------------------ | ------------------------------------------------------------------------- | --------------------------------------------- |
| Identifier               | View all existing auction                                                 |                                               |
| Primary Actor            | Seller ,Buyer                                                             |                                               |
| Purpose                  | To view all existing auction                                              |                                               |
| Priority                 | High                                                                      |                                               |
| Pre-conditions           | User should be sign in                                                    |                                               |
| Post-conditions          | Seller go to view all existing auction                                    |                                               |
| Typical Course of Action |                                                                           |                                               |
| S#                       | Actor Action                                                              | System Response                               |
| 1                        | User click on auction                                                     | System will show the all<br/>existing auction |
| S#                       | Alternate Scenarios                                                       |                                               |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                                               |
| Cross References         |                                                                           |                                               |
| Not Any                  |                                                                           |                                               |

**Table 3.3.15 View all existing auction**

**Description:**

The "View Existing Auctions" use case is a pivotal feature within our dynamic live auction system. This functionality enables both Sellers and Buyers to access and explore the ongoing live auctions on the platform. By logging into their respective accounts, users gain seamless entry to the main activity dashboard, where they can effortlessly navigate to the dedicated section for viewing existing live auctions.

#### 23. **View bidding timer**

|                          |                                                                           |                                                                |
| ------------------------ | ------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Identifier               | View bidding timer                                                        |                                                                |
| Primary Actor            | Seller ,Buyer                                                             |                                                                |
| Purpose                  | To view bidding timer                                                     |                                                                |
| Priority                 | High                                                                      |                                                                |
| Pre-conditions           | User should be sign in                                                    |                                                                |
| Post-conditions          | User go to view bidding timer                                             |                                                                |
| Typical Course of Action |                                                                           |                                                                |
| S#                       | Actor Action                                                              | System Response                                                |
| 1                        | User click on auction                                                     | System will show the all existing auction and timer on the top |
| S#                       | Alternate Scenarios                                                       |                                                                |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                                                                |
| Cross References         |                                                                           |                                                                |
| Not Any                  |                                                                           |                                                                |

**Table 3.3.16 View bidding timer**

**Description:**

The "View bidding timer” use case is a pivotal feature within our dynamic live auction system. This functionality enables both Sellers and Buyers to see the time slot in live auction. This use case is pivotal in granting sellers immediate visibility into the real-time countdown of ongoing auctions.

#### 24. **Recharge wallet**

|                          |                                                                           |                                    |
| ------------------------ | ------------------------------------------------------------------------- | ---------------------------------- |
| Identifier               | recharge wallet                                                           |                                    |
| Primary Actor            | Admin                                                                     |                                    |
| Purpose                  | To recharge wallet                                                        |                                    |
| Priority                 | High                                                                      |                                    |
| Pre-conditions           | Admin should be sign in Admin applications                                |                                    |
| Post-conditions          | Admin can recharge credit                                                 |                                    |
| Typical Course of Action |                                                                           |                                    |
| S#                       | Actor Action                                                              | System Response                    |
| 1                        | Admin click on recharge option                                            | System will show recharge activity |
| S#                       | Alternate Scenarios                                                       |                                    |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                                    |
| Cross References         |                                                                           |                                    |
| Not Any                  |                                                                           |                                    |

**Table 3.3.17 Recharge wallet**

**Description:**

The "Recharge Wallet" use case is a crucial feature within our platform, facilitating users, both Sellers and Buyers, to replenish their wallet balances seamlessly. This functionality ensures that users have a straightforward and efficient process for adding funds to their accounts.

#### 25. **View user profile**

|                          |                                                                           |                              |
| ------------------------ | ------------------------------------------------------------------------- | ---------------------------- |
| Identifier               | view user profile                                                         |                              |
| Primary Actor            | Seller ,buyer                                                             |                              |
| Purpose                  | To view user profile                                                      |                              |
| Priority                 | Medium                                                                    |                              |
| Pre-conditions           | User should be sign in                                                    |                              |
| Post-conditions          | User can view profile                                                     |                              |
| Typical Course of Action |                                                                           |                              |
| S#                       | Actor Action                                                              | System Response              |
| 1                        | User click on a user’s profile                                          | System will open the profile |
| S#                       | Alternate Scenarios                                                       |                              |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                              |
| Cross References         |                                                                           |                              |
| Not Any                  |                                                                           |                              |

**Table 3.3.18 View user profile**

**Description:**

The "View User Profile" use case is a fundamental feature in our platform, offering both Sellers and Buyers a comprehensive view of their user profiles. This functionality allows users to conveniently access and reviews their profile information, providing insights into personal details, transaction history, and engagement activities on the platform.

#### 26. **Accept order**

|                          |                                                                           |                                 |
| ------------------------ | ------------------------------------------------------------------------- | ------------------------------- |
| Identifier               | Accept order                                                              |                                 |
| Primary Actor            | Seller                                                                    |                                 |
| Purpose                  | To accept order                                                           |                                 |
| Priority                 | high                                                                      |                                 |
| Pre-conditions           | Seller should be sign in                                                  |                                 |
| Post-conditions          | Seller can accept order                                                   |                                 |
| Typical Course of Action |                                                                           |                                 |
| S#                       | Actor Action                                                              | System Response                 |
| 1                        | Seller click on the order list                                            | System will open the order list |
| 2                        | Seller accept the order                                                   | System confirmed the to buyer   |
| S#                       | Alternate Scenarios                                                       |                                 |
| 1                        | In case of non-availability of internet, Error message will be displayed. |                                 |
| Cross References         |                                                                           |                                 |
| Not Any                  |                                                                           |                                 |

**Table 3.3.19 Accept order**

**Description:**

This feature is crucial for Sellers to confirm their commitment to fulfilling customer requests and maintain a responsive and customer-centric approach on the platform. Its high priority underscores its significance in optimizing the order acceptance process and enhancing the overall efficiency of the transaction workflow.

#### 27. **Sign-out**

|                          |                                                                                                                 |                     |
| ------------------------ | --------------------------------------------------------------------------------------------------------------- | ------------------- |
| Identifier               | Sign-out                                                                                                        |                     |
| Primary Actor            | User                                                                                                            |                     |
| Purpose                  | To sign out from application                                                                                    |                     |
| Priority                 | High                                                                                                            |                     |
| Pre-conditions           | User should signed in                                                                                           |                     |
| Post-conditions          | User can sign out                                                                                               |                     |
| Typical Course of Action |                                                                                                                 |                     |
| S#                       | Actor Action                                                                                                    | System Response     |
| 1                        | User click on logout option                                                                                     | Logout successfully |
| S#                       | Alternate Scenarios                                                                                             |                     |
| 1                        | In case of non-availability of internet, Error message will be displayed that, there is no internet connection. |                     |
| Cross References         |                                                                                                                 |                     |
|                          |                                                                                                                 |                     |

**Table 3.3.20 Sign-out**

**Description:**

The Sign-out use case allows users to securely log out from the application after completing their session. It is of high priority as it ensures the protection of user accounts and data. The primary actor in this use case is the User, who must be signed in before initiating the sign-out process. After successfully signing out, the user's session is terminated, and they no longer have access to their account.