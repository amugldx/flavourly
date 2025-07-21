# CHAPTER 5

## <a name="_bookmark34"></a>Implementation

#### <a name="_bookmark35"></a>5.1 Component Diagram

**Fig5.1 Component Diagram**

[Detailed description of the diagram: This is a UML Component Diagram for the Spark Buy Live auction system. It provides a static view of the system's structure, illustrating the organization and relationships among its components. Each component is represented as a rectangle with two smaller rectangles on the left side, indicating interfaces. The diagram includes the following components:

- **User Management Component**: Handles user-related operations such as sign-in, sign-up, and profile updates.
- **Auction Management Component**: Manages auction creation, bidding, and live streaming functionalities.
- **Product Management Component**: Responsible for adding, updating, and displaying product details.
- **Order Management Component**: Processes order placement, acceptance, and tracking.
- **Wallet Management Component**: Manages wallet balances, transactions, and recharges.
- **Feedback Management Component**: Handles submission and display of user reviews and ratings.
- **Database Component**: Stores all system data, including users, products, orders, auctions, wallets, and reviews.

Relationships are shown as lines with interfaces (e.g., provided and required interfaces) indicating dependencies, such as the Auction Management Component depending on the Database Component for data storage. The diagram uses standard UML notation to depict how components collaborate to implement the system's functionalities.]

#### <a name="_bookmark36"></a>5.2 Deployment Diagram

**Fig 5.2 Deployment Diagram**

[Detailed description of the diagram: This is a UML Deployment Diagram for the Spark Buy Live auction system, illustrating the physical deployment of software components on hardware nodes. The diagram uses rectangular nodes to represent hardware and artifacts to represent software components, with lines showing their interconnections.

- **Nodes**:
  - **Client Device**: Represents user devices (e.g., smartphones, tablets) running the Spark Buy Live mobile application.
  - **Application Server**: Hosts the application logic, including user management, auction management, and order processing.
  - **Database Server**: Stores the system's data, such as user profiles, products, auctions, and orders.
  - **Streaming Server**: Manages live video streaming for auctions.
- **Artifacts**:
  - **Mobile Application**: Deployed on the Client Device, providing the user interface for interacting with the system.
  - **Backend Services**: Deployed on the Application Server, handling business logic and API calls.
  - **Database**: Deployed on the Database Server, managing data storage and retrieval.
  - **Streaming Service**: Deployed on the Streaming Server, handling live video broadcasts.
- **Connections**: Lines represent communication protocols (e.g., HTTP/HTTPS for client-server communication, database protocols for server-database interaction, and streaming protocols for live video).

The diagram uses standard UML notation, with nodes connected by associations to show real-time data processing and hardware-software mapping.]

#### <a name="_bookmark37"></a>5.3 Database Architecture

- A Spark by Live is based on a 3-tier architecture approach serving as a comprehensive blueprint. Its purpose is to provide a structured framework. The application breaks down the DBMS into discrete components, the architecture facilitates independent modifications, changes, replacements, and alterations, thereby ensuring optimal flexibility and scalability.
- This modular approach empowers the database systems as a foundation for efficient data storage, retrieval, and management, allowing businesses to efficiently handle large volumes of data while maintaining data integrity and security. It also enables effective performance optimization, as each component can be individually fine-tuned and optimized to achieve optimal efficiency and responsiveness.
- The structure of application is designed to provide the most enhanced security measures and also streamlines the deployment process. The three distinct tiers or layers, each assigned specific functions that collectively enhance the efficiency and reliability of the entire system.
- The presentation tier is providing all of the user interface related services and handles user interactions. It is providing an intuitive and user-friendly interface to the users of system to make auctions, make purchases, and interact with the system.
- The business logic tier is providing all of the implemented constrained processing and the business rules, and processing functions calls. All of the application logic processing including orders processing, and user’s management.
- The data tier is stored data all of the application. It incorporates a robust and scalable database management system (DBMS) that ensures efficient data storage, retrieval, and management.

**Fig 5.3 Tier Database Architecture**

[Detailed description of the diagram: This is a diagram illustrating the 3-tier database architecture of the Spark Buy Live auction system. It visually represents the three layers of the system and their interactions. The diagram includes:

- **Presentation Tier**: Depicted as the top layer, showing the user interface (e.g., mobile application screens) where users interact with the system for actions like signing in, bidding, or viewing auctions.
- **Business Logic Tier**: The middle layer, representing the application server that processes business rules, such as auction management, order processing, and user authentication. It communicates with both the presentation and data tiers.
- **Data Tier**: The bottom layer, showing the database server that stores all system data, including user profiles, products, auctions, orders, and reviews.
- **Connections**: Arrows indicate data flow between tiers, with the presentation tier sending user inputs to the business logic tier, which processes requests and interacts with the data tier for storage and retrieval.

The diagram uses a layered structure to emphasize the separation of concerns, with each tier labeled and connected to show the flow of data and interactions.]