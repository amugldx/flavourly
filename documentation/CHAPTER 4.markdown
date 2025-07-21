# CHAPTER 4

## <a name="_bookmark15"></a>System Design

#### 1. **<a name="_bookmark16"></a>****Architecture Diagram**

**Fig 4.1 System Architecture Diagram**

**Description:**

Application system architecture acts as a blueprint. It establishes a communication and coordination mechanism among components and offers an abstraction to control the complexity of the system.

- It outlines an organized approach to address all technical and practical needs while maximizing standard quality characteristics like performance and security.
- Additionally, it entails a number of important organizational decisions connected to application development, and each of these choices can have a substantial influence on the end product's quality, maintainability, performance, and overall success. These selections include:
- Choice of the structural components and their connections, which make up thesystem.
- As stated in the interactions between those elements.
- These structural and behavioral components are put together to form a sizablesubsystem.
- Architectural choices support corporate goals.
- The arrangement is guided by architectural trends.

#### 2. **<a name="_bookmark17"></a>****Entity Relation Diagram**

**Fig 4.2 Entity Relation Diagram**

**Description:**

[Detailed description of the diagram: This is an Entity-Relationship Diagram (ERD) for the Spark Buy Live auction system. The diagram visually represents the key entities and their relationships within the system, illustrating how data is structured and interconnected. Each entity is depicted as a rectangle, with attributes listed inside, and relationships are shown as lines connecting entities with labels indicating the type of relationship (e.g., one-to-one, one-to-many, many-to-many).

Entities include:
- **Users**: Attributes include Id (Primary Key), Name, Phone, Email, password, Address, user_type, Image, Rating, next_live, Gender.
- **Products**: Attributes include Id (Primary Key), name, starting_price, image, short_desp, final_bid, seller_id, no_of_piece, user_id (Foreign Key referencing Users).
- **Orders**: Attributes include Id (Primary Key), product_id (Foreign Key), total_amount, auction_id (Foreign Key), quantity, order_status, buyer_id (Foreign Key referencing Users).
- **Auctions**: Attributes include Id (Primary Key), Title, agora_token, stream_id, viewer_count, live_status, start_time, end_time, live_thumbnail, user_id (Foreign Key referencing Users).
- **Wallet**: Attributes include Id (Primary Key), user_id (Foreign Key), balance, last_tran_date, tran_amount, tran_status.
- **Reviews**: Attributes include Id (Primary Key), User_id (Foreign Key), Rating, Review, Date_time.

Relationships are depicted as follows:
- **Users to Products**: One-to-many (a user can have multiple products, linked via user_id).
- **Users to Orders**: One-to-many (a user can have multiple orders as a buyer, linked via buyer_id).
- **Users to Auctions**: One-to-many (a user can participate in multiple auctions, linked via user_id).
- **Users to Wallet**: One-to-one (each user has one wallet, linked via user_id).
- **Users to Reviews**: One-to-many (a user can submit multiple reviews, linked via User_id).
- **Products to Orders**: One-to-many (a product can be part of multiple orders, linked via product_id).
- **Auctions to Orders**: One-to-many (an auction can have multiple orders, linked via auction_id).

The diagram uses standard ERD notation, with primary keys underlined and foreign keys indicating relationships between tables, providing a clear view of data flow and dependencies within the system.]

#### 3. <a name="_bookmark18"></a>Data Dictionary

The database for this project contains the following collections:

#### 4. Users Table Schema

Database Table Name: users

|            |           |      |                                  |             |
| ---------- | --------- | ---- | -------------------------------- | ----------- |
| Field Name | Data type | Size | Description                      | Constraint  |
| Id         | integer   | 11   | Store unique id (auto increment) | Primary key |
| Name       | varchar   | 100  | Define the name of user          |             |
| Phone      | varchar   | 20   | Define the phone no of user      |             |
| Email      | varchar   | 100  | Verify e-mail of users           |             |
| password   | varchar   | 250  | Specify value of passwords       |             |
| Address    | text      | 255  | Verify the address of user       |             |
| user_type  | text      | 255  | Identify the user type           |             |
| Image      | text      | 255  | Specify the image of user        |             |
| Rating     | text      | 255  | Define the user profile rating   |             |
| next_live  | text      | 255  | Identify the time of next live   |             |
| Gender     | text      | 255  | Identify the gender of the user  |             |

#### Table 4.1: Users Database Schema

**Description:**

The user table is used to store the user’s accounts information. This information is used in the login process to match the user credentials. The information from the user table is used to show the details on the user profile.

#### 5. <a name="_bookmark19"></a>Products Table Schema

Database Table Name: products

|                |               |          |                                                       |                |
| -------------- | ------------- | -------- | ----------------------------------------------------- | -------------- |
| **Field Name** | **Data Type** | **Size** | **Description**                                       | **Constraint** |
| Id             | integer       | 11       | Store unique id<br/>(autoincrement)                   | Primarykey     |
| name           | text          | 255      | Identify the name of the<br/>product                  |                |
| starting_price | integer       | 11       | It describes the starting<br/>price of bidding        |                |
| image          | text          | 255      | Identify the image of the<br/>product                 |                |
| short_desp     | text          | 255      | It describes the short<br/>description of the product |                |
| final_bid      | integer       | 11       | Identify the winner of the<br/>Final bid              |                |
| seller_id      | integer       | 11       | Identify the seller id                                |                |
| no_of_piece    | integer       | 11       | Define the counts for<br/>products                    |                |
| user_id        | integer       | 11       | Identify the user id of<br/>products                  | Foreign key    |

#### Table 4.2: Products Database Schema

**Description:**

The "Products" table stores information about various products available in an auction.

It represents a collection of products that can be managed within a platform.

#### 6. <a name="_bookmark20"></a>Orders Table Schema

Database Table Name: orders

|                    |                   |              |                                                                                                  |                  |
| ------------------ | ----------------- | ------------ | ------------------------------------------------------------------------------------------------ | ---------------- |
| Field Name         | DataType          | Size         | Description                                                                                      | Constraint       |
| Id                 | integer           | 11           | Store unique id(auto<br/>increment)                                                              | Primary key      |
| product_id         | integer           | 11           | Identify the product id for<br/>order                                                            | Foreign<br/>key  |
| total_amount       | integer           | 11           | It describes the total amount<br/>associated with each order                                     |                  |
| auction_id         | integer           | 11           | It describes unique identifier<br/>for a specific auction                                        | Foreign<br/>key  |
| <br/><br/>quantity | <br/><br/>integer | <br/><br/>11 | It represents the number of items or products ordered by the customer for a particular<br/>order |                  |
| order_status       | text              | 255          | It represents the status of an<br/>order                                                         |                  |
| <br/><br/>buyer_id | <br/><br/>integer | <br/><br/>11 | A reference to the buyer unique identifier indicating the buyer who placed the<br/>order         | <br/>Foreign key |

#### Table 4.3: Orders Database Schema

**Description:**

The Orders Table Schema is designed to store information related to buyer’s orders in an auction. It represents the structure of the table that will hold the order data.

#### 7. <a name="_bookmark21"></a>Auctions Table Schema

Database Table Name: auctions

|                        |                   |              |                                                                                                      |             |
| ---------------------- | ----------------- | ------------ | ---------------------------------------------------------------------------------------------------- | ----------- |
| Field Name             | Data Type         | Size         | Description                                                                                          | Constraint  |
| Id                     | integer           | 11           | Store unique id (auto<br/>increment)                                                                 | Primary key |
| <br/>Title             | <br/>text         | <br/>255     | To convey information about the type of<br/>auction                                                  |             |
| <br/>agora_token       | <br/>text         | <br/>255     | It represents the unique<br/>token associated with each auction event                                |             |
| <br/>stream_id         | <br/>text         | <br/>255     | The identifier of the live stream associated<br/>with the auction                                    |             |
| <br/><br/>viewer_count | <br/><br/>integer | <br/><br/>11 | specifically captures the number of viewers or participants observing an auction at<br/>a given time |             |
| <br/>live_status       | <br/>text         | <br/>255     | A field indicating the<br/>current status of the auction                                             |             |
| <br/><br/>start_time   | <br/><br/>bigint  | <br/><br/>20 | The date and time when the auction started, stored as a timestamp<br/>or date time                   |             |
| end_time               | bigint            | 20           | Date and time when the<br/>auction will end                                                          |             |
| <br/>live_thumbnail    | <br/>text         | <br/>255     | Pointing to the thumbnail image<br/>associated with the                                              |             |
|              |              |         | auction                                                     |             |
| <br/>user_id | <br/>integer | <br/>11 | The identifier of the user participating in the<br/>auction | Foreign key |

#### Table 4.4: Auction table Schema

**Description:**

The Auctions table stores information about various auctions, including the items being auctioned, the auction participants, and relevant details such as the start and end times, live status, and final winning bid.

#### 8. Wallet Table Schema

Database Table Name: wallet

|                   |                   |              |                                                                                |                  |
| ----------------- | ----------------- | ------------ | ------------------------------------------------------------------------------ | ---------------- |
| Field Name        | Data Type         | Size         | Description                                                                    | Constraint       |
| Id                | integer           | 11           | Store unique id (auto<br/>increment)                                           | Primary key      |
| <br/><br/>user_id | <br/><br/>integer | <br/><br/>11 | It represents the unique identifier of a user associated with<br/>their wallet | <br/>Foreign key |
| <br/><br/>balance | <br/><br/>bigint  | <br/><br/>20 | It represents the current amount available in a user<br/>wallet                |                  |
| last_tran_date    | bigint            | 20           | It stored last<br/>transaction date                                            |                  |
| tran_amount       | integer           | 11           | It stored transaction<br/>amount                                               |                  |
| tran_status       | varchar           | 250          | It represents the status<br/>of a transaction                                  |                  |

#### Table 4.5: Wallet table schema

**Description:**

The Wallet table stores information related to individual wallets in a financial system. It serves as a central repository for managing and tracking financial transactions and balances associated with each wallet. This table is designed to capture essential details about wallets.

#### 9. <a name="_bookmark22"></a>Reviews Table Schema

Database Table Name: Reviews

|                |               |          |                                                                      |                 |
| -------------- | ------------- | -------- | -------------------------------------------------------------------- | --------------- |
| **Field Name** | **Data Type** | **Size** | **Description**                                                      | **Constraint**  |
| Id             | Integer       | 11       | Store unique id (auto increment)                                     | Primary key     |
| **User_id**    | **Integer**   | **11**   | **Identify the user id**                                             | **Foreign key** |
| Rating         | Integer       | 11       | Describe rating given by a user for a particular item or<br/>service |                 |
| Review         | Integer       | 11       | Describe the review of<br/>user                                      |                 |
| Date_time      | Integer       | 11       | Indentify the date and time when the review<br/>was submitted        |                 |

#### Table 4.6: Reviews Database Schema

**Description:**

The Reviews table is designed to store information about user reviews. It captures relevant details such as the reviewer's information, rating, and the date and time of the review

#### 10. <a name="_bookmark23"></a>Data Flow Diagram

A data flow diagram (DFD) illustrates the information flow within a process or system. It employs specific symbols such as rectangles, circles, and arrows, accompanied by brief textual descriptions.

#### 11. **Data Flow Diagram-Level 0**

**Fig 4.3.1 Data Flow Diagram – Level 0**

**Description:**

[Detailed description of the diagram: This is a Level 0 Data Flow Diagram (DFD) for the Spark Buy Live auction system, also known as a context diagram. It provides a high-level overview of the entire system as a single process interacting with external entities. The diagram is centered around a single circular process labeled "Spark Buy Live Auction System." External entities, represented as rectangles, include Admin, Seller, and Buyer. Arrows indicate data flows between these entities and the system.

- **Admin**: Sends data such as user management requests, wallet recharge requests, and order monitoring data to the system. Receives reports and system responses.
- **Seller**: Provides product details, auction schedules, and live broadcast data to the system. Receives order confirmations and bidder interactions.
- **Buyer**: Sends bids, feedback, and payment information to the system. Receives auction details, product information, and order confirmations.
- **Data Store**: A data store (represented as an open-ended rectangle) labeled "Database" is connected to the system, indicating where user, product, order, auction, and feedback data are stored and retrieved.

The diagram uses standard DFD notation, with arrows labeled to indicate the type of data flow (e.g., "User Data," "Product Data," "Bids," "Feedback"). It provides a high-level view of the system's interactions with external entities and the central database.]

#### 12. **Data Flow Diagram-Level 1**

**Fig 4.3.2 Data Flow Diagram – Level 1**

**Description:**

[Detailed description of the diagram: This is a Level 1 Data Flow Diagram (DFD) for the Spark Buy Live auction system, providing a more detailed breakdown of the system's sub-processes compared to the Level 0 DFD. The diagram includes multiple processes, each represented as a circle, connected to external entities (Admin, Seller, Buyer) and data stores. The processes include User Management, Live Video Broadcast Management, Products Management, Orders Management, Auction Management, and Feedback Management.

- **User Management**: Interacts with Admin, Seller, and Buyer for user registration, profile updates, and user reports. Connected to the "Users" data store.
- **Live Video Broadcast Management**: Interacts with Seller for scheduling and streaming live auctions. Generates live schedule reports and connects to the "Auctions" data store.
- **Products Management**: Interacts with Seller for adding and managing product details. Generates product reports and connects to the "Products" data store.
- **Orders Management**: Interacts with Seller and Buyer for order placement and confirmation. Generates order reports and connects to the "Orders" data store.
- **Auction Management**: Interacts with Seller and Buyer for auction creation, bidding, and auction reports. Connected to the "Auctions" data store.
- **Feedback Management**: Interacts with Buyer for submitting feedback. Generates feedback reports and connects to the "Reviews" data store.

Arrows indicate data flows between processes, external entities, and data stores, with labels such as "User Data," "Product Details," "Bids," "Order Data," and "Feedback." The diagram uses standard DFD notation to show how data moves through the system's sub-processes, providing a detailed view of the system's internal operations.]

#### 13. **<a name="_bookmark24"></a>****Class Diagram**

**Fig 4.4 Class Diagram for Spark Buy Live**

**Description:**

[Detailed description of the diagram: This is a UML Class Diagram for the Spark Buy Live auction system. It outlines the classes, their attributes, methods, and relationships within the system. Each class is represented as a rectangle with three sections: class name, attributes, and methods. Relationships between classes are shown with lines indicating associations, aggregations, or compositions.

Classes include:
- **User**: Attributes (Id, Name, Phone, Email, password, Address, user_type, Image, Rating, next_live, Gender), Methods (signIn(), signUp(), updateProfile(), viewWallet()).
- **Product**: Attributes (Id, name, starting_price, image, short_desp, final_bid, seller_id, no_of_piece, user_id), Methods (addProduct(), updateProduct(), viewProduct()).
- **Order**: Attributes (Id, product_id, total_amount, auction_id, quantity, order_status, buyer_id), Methods (placeOrder(), acceptOrder(), viewOrder()).
- **Auction**: Attributes (Id, Title, agora_token, stream_id, viewer_count, live_status, start_time, end_time, live_thumbnail, user_id), Methods (createAuction(), startLive(), endAuction()).
- **Wallet**: Attributes (Id, user_id, balance, last_tran_date, tran_amount, tran_status), Methods (rechargeWallet(), viewBalance()).
- **Review**: Attributes (Id, User_id, Rating, Review, Date_time), Methods (submitReview(), viewReview()).

Relationships include:
- **User to Product**: One-to-many (via user_id).
- **User to Order**: One-to-many (via buyer_id).
- **User to Auction**: One-to-many (via user_id).
- **User to Wallet**: One-to-one (via user_id).
- **User to Review**: One-to-many (via User_id).
- **Product to Order**: One-to-many (via product_id).
- **Auction to Order**: One-to-many (via auction_id).

The diagram uses standard UML notation, with multiplicity indicators (e.g., 1..*, 1..1) to show the nature of relationships, providing a comprehensive view of the system's structure and behavior.]

#### 1. **<a name="_bookmark25"></a>****Object Diagram**

**Fig 4.5 Object Diagram for Spark Buy Live**

**Description:**

[Detailed description of the diagram: This is a UML Object Diagram for the Spark Buy Live auction system, depicting a snapshot of the system's runtime state at a specific moment. It shows individual object instances of classes and their relationships. Each object is represented as a rectangle with the object name, class name, and attribute values. Lines between objects indicate relationships.

Objects include instances of:
- **User**: E.g., "admin1:User" (Id=1, Name="John Doe", user_type="Admin"), "seller1:User" (Id=2, Name="Jane Smith", user_type="Seller"), "buyer1:User" (Id=3, Name="Bob Johnson", user_type="Buyer").
- **Product**: E.g., "product1:Product" (Id=1, name="Vintage Watch", starting_price=100, user_id=2).
- **Order**: E.g., "order1:Order" (Id=1, product_id=1, buyer_id=3, total_amount=150).
- **Auction**: E.g., "auction1:Auction" (Id=1, Title="Vintage Auction", live_status="Active", user_id=2).
- **Wallet**: E.g., "wallet1:Wallet" (Id=1, user_id=3, balance=500).
- **Review**: E.g., "review1:Review" (Id=1, User_id=3, Rating=4, Review="Great product").

Relationships mirror those in the class diagram, with links showing associations (e.g., seller1:User linked to product1:Product, buyer1:User linked to order1:Order). The diagram provides a concrete example of how objects interact at runtime, illustrating specific attribute values and connections during system execution.]

#### 2. **<a name="_bookmark26"></a>****Sequence Diagram**

#### 3. **<a name="_bookmark27"></a>****Users Sequence Diagram**

**Fig 4.6.1 User Sequence Diagram for Spark Buy Live**

**Description:**

[Detailed description of the diagram: This is a UML Sequence Diagram for the user interactions in the Spark Buy Live auction system. It illustrates the sequence of actions and system responses during user-related processes, such as signing in. The diagram includes lifelines for actors (User, System, Database) and shows interactions as arrows representing messages or method calls.

- **Lifelines**: Represented as vertical dashed lines for User, System, and Database.
- **Interactions**:
  - User sends a "signIn()" message to the System.
  - System sends a "validateCredentials()" message to the Database.
  - Database responds with "credentialsValid" or "error".
  - System sends a "displayDashboard()" message back to the User if credentials are valid.
  - Alternate scenario: If credentials are invalid or no internet, System sends an "errorMessage" to the User.

The diagram includes activation bars to show when objects are active and uses standard UML notation, with synchronous messages (filled arrowheads) and asynchronous messages (open arrowheads). It captures the flow of user authentication and dashboard access.]

#### **<a name="_bookmark28"></a>****6.6.2 Auction Sequence Diagram**

**Fig 4.6.2 Auction Sequence Diagram for Spark Buy Live**

**Description:**

[Detailed description of the diagram: This is a UML Sequence Diagram for the auction process in the Spark Buy Live auction system. It depicts the sequence of interactions between actors (User, Seller, Buyer, System, Database) during auction-related activities, such as logging in, searching, bidding, and providing feedback.

- **Lifelines**: Represented for User, Seller, Buyer, System, and Database.
- **Interactions**:
  - User sends "login()" to System.
  - System validates credentials with Database.
  - Seller sends "addItem()" to System, which stores item data in Database.
  - Buyer sends "searchItems()" to System, which retrieves auction data from Database.
  - Buyer sends "placeBid()" to System, which updates bid data in Database.
  - System sends "updateBidStatus()" to Buyer and Seller.
  - Buyer sends "submitFeedback()" to System, which stores feedback in Database.
  - Alternate scenario: If no internet, System sends "errorMessage" to User.

The diagram uses activation bars, synchronous and asynchronous messages, and includes alternate flows for error conditions, providing a detailed view of the auction process interactions.]

#### 4. **<a name="_bookmark29"></a>****Activity Diagram**

#### 5. **<a name="_bookmark30"></a>****Sign in Activity Diagram**

**Fig 4.7.1 Sign in Activity Diagram for Spark Buy Live Description:**

[Detailed description of the diagram: This is a UML Activity Diagram for the sign-in process in the Spark Buy Live auction system. It represents the workflow and decision points involved when a user logs into the system. The diagram uses standard UML activity diagram symbols: ovals for start/end points, rectangles for activities, diamonds for decision points, and arrows for flow transitions.

- **Start**: The process begins at an initial node.
- **Activities**:
  - User enters credentials.
  - System validates credentials.
- **Decision Points**:
  - If credentials are valid, flow proceeds to "Display Dashboard."
  - If credentials are invalid or no internet, flow proceeds to "Show Error Message."
- **End**: The process ends at a final node after displaying the dashboard or error message.

The diagram provides a clear, step-by-step view of the sign-in process, including decision logic for handling valid and invalid credentials.]

#### 6. **<a name="_bookmark31"></a>****Feature Activity Diagram**

**Fig 4.7.2 Feature Activity Diagram for Spark Buy Live**

**Description:**

[Detailed description of the diagram: This is a UML Activity Diagram for a specific feature in the Spark Buy Live auction system, such as bidding or product management. It illustrates the workflow and activities involved in executing the feature. The diagram includes:

- **Start**: Initial node where the process begins.
- **Activities**: Steps such as "Select Auction," "Place Bid," "Update Bid Status," or "Add Product."
- **Decision Points**: Conditions like "Is bid valid?" or "Is product data complete?"
- **Flows**: Arrows connecting activities and decisions, showing the sequence of actions.
- **End**: Final node after completing the feature or encountering an error.

The diagram uses standard UML notation to depict the sequence of actions, decision logic, and possible outcomes, providing a concise representation of the feature's workflow.]

#### 7. **<a name="_bookmark32"></a>****Collaboration Diagram**

**Fig 4.8 Collaboration Diagram for Spark Buy Live**

**Description:**

[Detailed description of the diagram: This is a UML Collaboration Diagram for the Spark Buy Live auction system. It illustrates the interactions and collaborations between objects or components to accomplish specific functionalities, such as bidding or order processing. Objects are represented as rectangles, and numbered lines indicate messages exchanged between them.

- **Objects**: Instances of classes like User, Product, Auction, Order, Wallet, and Review.
- **Messages**: Numbered interactions, e.g., "1: signIn()", "2: validateCredentials()", "3: placeBid()", "4: updateOrder()".
- **Links**: Lines connecting objects, showing relationships like User to Auction or Buyer to Order.
- **Sequence**: Numbers on messages indicate the order of interactions.

The diagram focuses on how objects collaborate to achieve a goal, using standard UML notation to highlight the system's structure and behavior during specific use cases.]

#### **<a name="_bookmark33"></a>****4.8 State Transition Diagram**

**Fig 4.9 State Transition Diagram for Spark Buy Live**

**Description:**

[Detailed description of the diagram: This is a UML State Transition Diagram for the Spark Buy Live auction system, depicting the states and transitions of an auction item. It shows the lifecycle of an auction item and how it moves between states based on events.

- **States**: Represented as rounded rectangles, including "Available," "Bidding," "Closed," and "Sold."
- **Transitions**: Arrows between states, labeled with events like "Place Bid," "Reach Closing Time," or "Accept Offer."
- **Start/End**: Initial state (e.g., "Available") and final state (e.g., "Sold").
- **Events**: Triggers causing state changes, such as "User places bid" or "Auction timer expires."

The diagram uses standard UML notation to illustrate the behavior and lifecycle of an auction item, showing how it responds to events like bidding or closing.]