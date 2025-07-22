# CHAPTER 5

## <a name="_bookmark34"></a>Implementation

#### <a name="_bookmark35"></a>5.1 Component Diagram

**Fig5.1 Component Diagram**

This is a UML Component Diagram for the Flavourly recipe management system. It provides a static view of the system's structure, illustrating the organization and relationships among its components. Each component is represented as a rectangle with two smaller rectangles on the left side, indicating interfaces. The diagram includes the following components:

- **User Management Component**: Handles user-related operations such as sign-in, sign-up, profile updates, and role-based access control for Recipe Developers and Nutritionists.
- **Recipe Management Component**: Manages recipe creation, editing, ingredient management, preparation steps, and media uploads with Cloudinary integration.
- **Verification Management Component**: Responsible for recipe verification workflow, nutritional analysis, and health tips from nutritionists.
- **Review Management Component**: Processes review submission, rating systems, and user feedback for recipes.
- **Collection Management Component**: Manages user-created recipe collections, adding and removing recipes from collections.
- **Meal Planning Component**: Handles meal plan creation, scheduling, and shopping list generation from meal plans.
- **Shopping List Component**: Manages shopping list creation, item management, and completion tracking.
- **Media Management Component**: Handles image and video uploads, Cloudinary integration, and media optimization.
- **Database Component**: Stores all system data, including users, recipes, ingredients, reviews, collections, meal plans, and shopping lists using PostgreSQL with Prisma ORM.

Relationships are shown as lines with interfaces (e.g., provided and required interfaces) indicating dependencies, such as the Recipe Management Component depending on the Database Component for data storage, and the Media Management Component depending on Cloudinary for file storage. The diagram uses standard UML notation to depict how components collaborate to implement the system's functionalities.

**Draw.io Instructions for Component Diagram:**

1. Create a new diagram in draw.io
2. Use the "UML" template
3. Add components as rectangles with two small rectangles on the left side for interfaces
4. Add the following components:
   - "User Management Component"
   - "Recipe Management Component"
   - "Verification Management Component"
   - "Review Management Component"
   - "Collection Management Component"
   - "Meal Planning Component"
   - "Shopping List Component"
   - "Media Management Component"
   - "Database Component"
5. Connect components with lines showing dependencies
6. Use different colors for different component types (Core: Blue, User-related: Green, Recipe-related: Orange, Planning: Purple)
7. Add interface labels on the connection lines

#### <a name="_bookmark36"></a>5.2 Deployment Diagram

**Fig 5.2 Deployment Diagram**

This is a UML Deployment Diagram for the Flavourly recipe management system, illustrating the physical deployment of software components on hardware nodes. The diagram uses rectangular nodes to represent hardware and artifacts to represent software components, with lines showing their interconnections.

- **Nodes**:
  - **Client Device**: Represents user devices (e.g., desktop computers, laptops, smartphones, tablets) running the Flavourly web application through modern web browsers.
  - **Vercel Application Server**: Hosts the Next.js application logic, including user management, recipe management, verification processing, and API endpoints.
  - **PostgreSQL Database Server**: Stores the system's data, such as user profiles, recipes, ingredients, reviews, collections, meal plans, and shopping lists.
  - **Cloudinary CDN**: Manages media file storage, optimization, and delivery for recipe images and videos.
- **Artifacts**:
  - **Web Application**: Deployed on the Client Device, providing the user interface for interacting with the system through React components and Next.js pages.
  - **Next.js Backend Services**: Deployed on the Vercel Application Server, handling business logic, API routes, authentication, and database operations.
  - **PostgreSQL Database**: Deployed on the Database Server, managing data storage and retrieval through Prisma ORM.
  - **Cloudinary Media Service**: Deployed on the Cloudinary CDN, handling image and video uploads, transformations, and delivery.
- **Connections**: Lines represent communication protocols (e.g., HTTP/HTTPS for client-server communication, database protocols for server-database interaction, and CDN protocols for media delivery).

The diagram uses standard UML notation, with nodes connected by associations to show real-time data processing and hardware-software mapping, demonstrating how the Flavourly system is deployed across multiple services and platforms.

**Draw.io Instructions for Deployment Diagram:**

1. Create a new diagram in draw.io
2. Use the "UML" template
3. Add nodes as rectangles:
   - "Client Device" (representing user browsers)
   - "Vercel Application Server" (hosting Next.js app)
   - "PostgreSQL Database Server" (database)
   - "Cloudinary CDN" (media storage)
4. Add artifacts as rectangles within nodes:
   - "Web Application" in Client Device
   - "Next.js Backend Services" in Vercel Server
   - "PostgreSQL Database" in Database Server
   - "Cloudinary Media Service" in Cloudinary CDN
5. Connect nodes with lines showing communication protocols
6. Use different colors for different node types
7. Add protocol labels on connection lines

#### <a name="_bookmark37"></a>5.3 Database Architecture

Flavourly is based on a 3-tier architecture approach serving as a comprehensive blueprint for our recipe management platform. Its purpose is to provide a structured framework that ensures optimal performance, security, and scalability. The application breaks down the database management system into discrete components, and the architecture facilitates independent modifications, changes, replacements, and alterations, thereby ensuring optimal flexibility and scalability.

This modular approach empowers the database systems as a foundation for efficient data storage, retrieval, and management, allowing the platform to efficiently handle large volumes of recipe data, user information, and nutritional data while maintaining data integrity and security. It also enables effective performance optimization, as each component can be individually fine-tuned and optimized to achieve optimal efficiency and responsiveness for recipe searches, user interactions, and meal planning features.

The structure of the Flavourly application is designed to provide the most enhanced security measures for user data and recipe information, and also streamlines the deployment process through modern cloud infrastructure. The three distinct tiers or layers, each assigned specific functions that collectively enhance the efficiency and reliability of the entire recipe management system.

The presentation tier is providing all of the user interface related services and handles user interactions. It is providing an intuitive and user-friendly interface to the users of the system to browse recipes, create recipes, manage meal plans, and interact with the verification system. This tier includes React components, Next.js pages, and responsive design elements that work across different devices and screen sizes.

The business logic tier is providing all of the implemented constrained processing and the business rules, and processing functions calls. All of the application logic processing including recipe creation and verification, user authentication and authorization, meal planning algorithms, shopping list generation, and nutritional data processing. This tier includes Next.js API routes, authentication middleware, data validation, and business rule enforcement.

The data tier is stored data for all of the application. It incorporates a robust and scalable PostgreSQL database management system with Prisma ORM that ensures efficient data storage, retrieval, and management for recipes, users, ingredients, reviews, collections, meal plans, and shopping lists. The data tier also includes data backup, recovery, and optimization strategies to maintain system reliability and performance.

**Fig 5.3 Tier Database Architecture**

This is a diagram illustrating the 3-tier database architecture of the Flavourly recipe management system. It visually represents the three layers of the system and their interactions. The diagram includes:

- **Presentation Tier**: Depicted as the top layer, showing the user interface (e.g., web application screens, mobile-responsive design) where users interact with the system for actions like signing in, browsing recipes, creating meal plans, or submitting recipes for verification.
- **Business Logic Tier**: The middle layer, representing the Next.js application server that processes business rules, such as recipe management, user authentication, meal planning algorithms, and verification workflows. It communicates with both the presentation and data tiers through API routes and middleware.
- **Data Tier**: The bottom layer, showing the PostgreSQL database server that stores all system data, including user profiles, recipes, ingredients, reviews, collections, meal plans, shopping lists, and nutritional information through the Prisma ORM.
- **Connections**: Arrows indicate data flow between tiers, with the presentation tier sending user inputs to the business logic tier, which processes requests and interacts with the data tier for storage and retrieval. Additional connections show integration with external services like Cloudinary for media management.

The diagram uses a layered structure to emphasize the separation of concerns, with each tier labeled and connected to show the flow of data and interactions, demonstrating how the Flavourly system maintains clean architecture while providing comprehensive recipe management functionality.

**Draw.io Instructions for Tier Database Architecture:**

1. Create a new diagram in draw.io
2. Use the "Software" template
3. Add three horizontal layers:
   - Top layer: "Presentation Tier" (React/Next.js UI)
   - Middle layer: "Business Logic Tier" (Next.js API/Server)
   - Bottom layer: "Data Tier" (PostgreSQL Database)
4. Add components within each tier:
   - Presentation: "Web Interface", "Mobile Interface"
   - Business Logic: "API Routes", "Authentication", "Business Rules"
   - Data: "PostgreSQL", "Prisma ORM"
5. Connect tiers with arrows showing data flow
6. Add external service connections (Cloudinary)
7. Use different colors for each tier
8. Add labels on arrows showing data types
