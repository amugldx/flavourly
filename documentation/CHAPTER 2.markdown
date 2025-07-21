# CHAPTER 2

## <a name="_bookmark5"></a>Software Requirement Specification

#### 1. <a name="_bookmark6"></a>Overall Description

This project covers the general description of factors that affect the product and its requirements. This section does not state specific requirements. Instead, it provides a brief description for those requirements, which are defined in the specification requirements and makes them easier to understand.

#### 2. Product Perspectives

Live streaming auction system and video streaming provide a platform for the participants to participate in the bidding process in real time. The system will allow users to place bids of items being auctioned while watching a live video stream of the auction. In recent years, online auctions have become increasingly popular as people seek more convenient ways to buy and sell items. However, traditional online auctions that rely on static images and text descriptions lack the interactive and engaging experience of physical auctions. The main perspective of this product is to provide a new and convenient way for users to participate in auctions from anywhere in the world these systems require a android-based platform that integrates video streaming technology and auction system, which can handle a large number of users and transactions simultaneously. It should be provide an intuitive, user-friendly interface for bidding on items. Users should be able to easily navigate the platform, view live auctions, and place bids without any delay. Additionally, the platform should provide detailed information about the items being auctioned, including descriptions, images, and starting prices. Spark Buy Live has the potential to generate significant revenue for auction houses and sellers by expanding their audience reach beyond physical locations. By conducting auctions online, auction houses can reduce overhead costs and reach a global audience of potential buyers. Additionally, the platform can provide valuable data on user behavior and preferences, which can be used to optimize future auctions. The basic components of a live streaming auction system android application that provides enhanced service to the buyers and sellers consist of the following:

- Get User information such as name, address, phone number and e- mail address.
- Video streaming technology helps and enhance better auction environment.
- The platform provides the list of product as well as start bid price included in the auction.
- The platform provides the list of live sellers.
- Users can view profile ranking of sellers as well as bidders.
- Live streaming viewers statistics
- The system maintains the auction schedules.
- The facility to view wallet information and order history.
- Interactive Comments and Suggestions section for user review and engagement.

#### 3. <a name="_bookmark7"></a>Design and Implementation Constraints

Live Streaming Auction System is a platform that allows users to participate in live auctions for various products and services through a streaming video feed. Nowadays, live streaming auction systems are becoming a common solution for individuals looking to purchase items from the comfort of their own homes. Participating in auctions through live streaming saves customers a significant amount of time and eliminates the need to physically attend auctions in person. The live streaming auction system is a complex system that requires efficient management, so the use of a software system will help to avoid errors and ensure that the auction runs smoothly. The live streaming auction system provides a convenient and efficient way for customers to bid on a wide variety of products and services from the comfort of their homes. The system eliminates the need for customers to attend physical auctions, allowing them to save time and participate in auctions from anywhere in the world. The auction system calculates the bidding price based on the current bidding price set by other participants and the value of the item being auctioned. The price of the item may increase or decrease based on factors such as demand, availability, and bidding activity. The live streaming auction system provides an efficient and automated platform for auctioneers to conduct auctions, while also allowing customers to monitor and participate in real-time, The live streaming auction system is designed to prevent the entry of invalid values in all fields. This project also offers improved editing, adding, and updating of auction records. Customer identification is used to maintain and update records promptly and accurately. The project's entire information is stored in the project database or files, and authorized users can retrieve and manage the data with ease. Only authorized users can access the necessary information, which is easily accessible from the application. The application has an attractive and user-friendly interface where users can sign in or sing out. The system should notify bidders when they have been outbid or when the auction is about to end. We will design the whole system in three interfaces and implementation the functionalities on it with detailed working. We divided this project into different modules and will work on it in proper sequence. Some points show the sequence and diagrams.

- We will develop a live streaming auction system (LSAS) which we further divide into two interfaces.
- In those interfaces, there will be a separate Dashboard for every interface operators.
- There will be a Specific Sign In system from which user has to pass through for usage of further functionality.
- The system must be designed to handle a large number of users simultaneously. As the number of bidders increases, the system must be able to scale up to handle the additional load without experiencing performance.
- There will be the option for users to participate in live streaming auctions and place bids on items in real-time, with the ability to bid multiple times throughout the duration of the auction.

#### 4. <a name="_bookmark8"></a>Assumption and Dependencies

A live streaming auction system is a software solution that provides customers with a convenient platform to participate in auctions from their mobile devices. Depending on the features of the live streaming auction system, customers may have the option to pay for their bids or purchases ahead of time. The ability to prepay for bids or purchases provides convenience and flexibility for customers, allowing them to participate in auctions and make purchases with ease and confidence. A live streaming auction system manages auctions, bids, and other related services for both buyers and sellers. The system provides a user-friendly interface for buyers to browse through available items, place bids, and monitor their bidding activity. Sellers can also use the system to manage their auctions, set starting prices, and track bidding activity in real- time. The live streaming auction system helps to ensure a smooth and seamless transaction process for both buyers and sellers. Additionally, the system provides a level of transparency and fairness, as all bidders have equal access to auction information and can monitor the progress of the auction in real-time. The dependencies and assumptions of Live streaming auction system are as follows:

- Each user must have a Sign in to the system.
- Users must have basic knowledge of using the mobile application.
- Authentication is compulsory before using the services.
- Users must have a good internet connection to use the system.
- There is a feature to integrate real-time chat functionality, allowing bidders to communicate with each other and with the auctioneer during the auction.
- Assuming all the users of the system have basic knowledge of the auction process, including bidding etiquette and payment procedures, to ensure a smooth and efficient auction experience.
- It is assumed that there must have well trained staff to take care of the system.

#### 5. Product Feature

The Live Streaming Auction System is designed to automate the process of buying and selling items through a user-friendly mobile application. It offers an easy-to-use platform for online auctions, where buyers can browse through items and place bids from their mobile devices. With this app, sellers can easily manage their auctions, monitor bidding activity, and process payments from their mobile devices. The system offers features like real-time bidding and automated payment processing, ensuring a seamless and efficient transaction process for both buyers and sellers. The app manages all the necessary information related to the auction, including item descriptions, starting prices, bidding history, and payment details. It allows users to check the availability of items, place bids, and manage their bids and transactions from anywhere at any time. The purpose of this live streaming auction system is to create an efficient platform that automates the auction process, reducing manual work and streamlining the process for both buyers and sellers. It provides searching facilities based on various factors such as auction items, auctioneer details, bidding history, and auction time. The system displays detailed information and descriptions of each item up for auction. The system is designed to prevent the entry of invalid values in all fields. This project also offers improved editing, adding, and updating of auction records. Customer identification is used to maintain and update records promptly and accurately. The project's entire information is stored in the project database or files, and authorized users can retrieve and manage the data with ease. Only authorized users can access the necessary information, which is easily accessible from the application. The application has an attractive and user-friendly interface where users can sign in or sing out. The system should notify bidders when they have been outbid or when the auction is about to end. Below are the key features that come out with the application of the live streaming auction system:

- Registration/Sign in: Allow users to create accounts and log in securely.
- Profile Management: Users should be able to edit their profiles, view their bidding, and manage personal information.
- Live Auction Listings: Display ongoing live auctions with real-time updates.
- Detailed Item Pages: Provide comprehensive details about each item, including images, descriptions, starting bids, and seller information.
- Real-time Bidding: Enable users to place bids in real time during live auctions.
- Secure Payment Gateway: Integrate a secure payment gateway to facilitate transactions.
- Invoice Generation: Generate invoices detailing the item, final bid amount, and payment instructions.
- Live Video Streaming: Integrate live video streaming for the auctioneer to showcase items and interact with bidders.
- Live Comments: Provide a chat feature for bidders to interact with the auctioneer and other participants.
- Countdown Timer: Display a countdown timer for each item to create excitement and urgency among bidders.
- Feedback: Optionally allow users to submit feedback to encourage honest opinions.

#### Administrator’s Features

- Home Screen: This screen is the welcoming screen of administrator after singing into the system.
- Admin Dashboard: Provide sellers with a dashboard to manage their Users, track bids, view Wallets, and recharge Wallets.

#### <a name="_bookmark10"></a>Seller’s Features

- Seller Registration: Allow sellers to register on the platform with necessary information.
- Profile Management: Enable sellers to manage their profiles, including contact details and business information.
- Auction List: A screen where sellers can add the product they want to sell in the auction. Sellers can provide a description of the product, upload Image, and Start the auction.
- Live Streaming: Allow sellers to stream live videos showcasing their items to potential buyers in real time.

#### Buyer’s Features

- Registration and Sign in: Allow buyers to create accounts and log in securely to participate in auctions.
- Place Bids: Allow buyers to place bids in real time during live auctions.
- Item Descriptions: Display detailed item descriptions, images, condition, and any relevant specifications.
- Ratings and Reviews: Show ratings and feedback from previous buyers to establish trust and confidence in sellers.

#### 6. <a name="_bookmark9"></a>System Features

Spark buy live, live streaming auction system is a solution that brings high automation and a personalized user experience to simplify the auction process for bidders. Our system is equipped with our live streaming technology, users can participate in auctions in real-time and enjoy a seamless bidding experience. Bidders just have to browse through the available auctions, select the one they are interested in, and enter the bidding process. They can review all the available items up for bid and place their bids easily. As soon as the bidding is completed, the winning bidder receives a notification message. Main system features include the roles for Administrator, Sellers, and Bidders.

#### 7. Administrator

Administrators play a crucial role in the smooth functioning of a live streaming auction system. They have various features that allow them to manage the overall operation of the platform efficiently. They have review and approve seller requests. By accepting seller requests, they enable users to become sellers on the platform, which helps in increasing the number of products available on the platform for buyers to bid on. Administrators are also responsible for providing customer support and addressing any issues that may arise. By ensuring the timely resolution of customer issues, administrators can help build trust and confidence in the platform, leading to increased user engagement and loyalty administrators is the ability to block users who violate the platform's terms and conditions. By doing so, they ensure a safe and secure environment for all users, protecting the interests of buyers and sellers alike. The ability to block users helps maintain the platform's integrity and reputation, which is critical for its success in the long run.

#### 8. Stimulus/Response Sequences

Administration has access to a dashboard upon successful sing in from this system. The admin can review and approve user requests, including seller requests and registration requests from new users. The admin also has the ability to manage auctions, including creating and updating them, as well as managing bids and resolving disputes. The admin can monitor and manage feedback from both buyers and sellers to ensure a positive experience for all users on the platform.

#### 9. Functional Requirements

- 10. Admin can sing in
- 11. Admin can approve, reject, or request revision from the new sellers requests
- 12. Manage Users
- 13. Admin can ban a user from accessing the platform in case of any violation.
- 14. Create and implement terms and policies
- 15. Can view the status reports of Auctions
- 16. Can issue policy violation warnings to sellers or buyers

#### 17. Seller

Live streaming auction system should allow sellers to live stream their auctions, enabling them to showcase their products and interact with potential buyers in real- time sellers should be able to easily register and create an account on the platform. They should then be able to list their products for auction, including product images, descriptions, and starting bid prices they should be able to set reserve prices and minimum bid increments for their products to ensure that their products are sold at fair prices. Sellers should also have the ability to view and manage their active and inactive auctions and communicate with buyers during an auction. Sellers should have the ability to communicate with the platform administrators for support or to resolve any issues.

#### 18. Stimulus/Response Sequences

Seller has access to a seller dashboard upon successful sing in from this system. Seller can create auction listings for products with descriptions and images. Seller can set a scheduled for the auction and communicate with potential buyers in real-time through the platforms. During the auction, you can showcase your products and engage with interested buyers in a live setting. This provides a unique opportunity to increase the visibility of your products and connect with potential customers in real-time.

#### 19. Functional Requirements

- 20. Seller can register.
- 21. Seller to list products they want to auction.
- 22. Sellers to manage their auctions by setting starting and ending times.
- 23. Sellers to stream their auction live for potential buyers to view.
- 24. Manage products.
- 25. Seller will be able to view or delete already listed products.

#### 26. Buyer

The live streaming auction system is designed to enable buyers to participate in auctions in real-time and interact with product sellers who showcase their Products. Buyers can see the products and their features before bidding. The system should provide a clear view of active and inactive auctions, allowing buyers to browse and bid on products that interest them. Buyers should also have the ability to communicate with sellers during the auction to ask questions or clarify details. Additionally, the platform should have a support system in place to help buyers resolve any issues they may encounter during the auction process.

#### 27. Stimulus/Response Sequences

Users can register themselves by filling out the registration form to gain. After registration buyers can browse detailed listings, place bids, interact through real-time chat.

Users will also be able to leave feedback to vendors from which they’ve purchased any product.

#### 28. Functional Requirements

- 29. Registration
- 30. Sign in
- 31. After signing in, buyer will be directed to a screen where they can view the available list of live auctions.
- 32. Buyers should be able to place bids on the products they are interested in purchasing during live auctions.
- 33. Buyers will be able to interact with other buyers and the auctioneer in real-time through a chat system during the auction.
- 34. Buyers will be able to leave feedback for the vendors they have purchased products.
- 35. Buyers have the ability to sign out of their accounts.

#### 36. External Interface Requirements

- 37. **User Interfaces**

The responsive design of the live streaming auction system's user interface will enable access from various devices with different screen sizes and orientations. Sign-in and registration pages will feature intuitive layouts and clear instructions. Upon signing in, users will land on a welcoming page showcasing available services and auctions, emphasizing the latest and most popular ones. Auctions will be presented in a grid format, featuring images, descriptions, and bidding details. Different user interfaces based on authorization levels will ensure consistency and ease of navigation. The main menu will provide easy access to essential functions, supported by clear instructions for a seamless user experience, catering to both new and experienced users.

**Fig 2.1 Splash Screen**

[Screenshot of the application: This is a splash screen displaying the initial loading interface of the Spark Buy Live application.]

**Fig 2.2 Sign in Screen**

![WhatsApp Image 2023-10-05 at 1.26.15 AM.jpeg](./media/image3.jpeg)

[Screenshot of the application: This is the sign-in screen of the Spark Buy Live application, showing fields for user credentials and options to log in.]

**Fig 2.3 Sign in with Phone Screen**

[Screenshot of the application: This is the sign-in with phone screen of the Spark Buy Live application, allowing users to log in using their phone number and OTP.]

**Fig 2.3 Home Screen**

![WhatsApp Image 2023-10-05 at 1.26.20 AM.jpeg](./media/image5.jpeg)

[Screenshot of the application: This is the home screen of the Spark Buy Live application, displaying available auctions and services in a grid format.]

**Fig 2.4 Add Product Screen**

[Screenshot of the application: This is the add product screen of the Spark Buy Live application, where sellers can input product details, descriptions, and images for auction listings.]

**Fig 2.5 Live Auction Screen**

![WhatsApp Image 2023-10-05 at 1.26.17 AM (1).jpeg](./media/image7.jpeg)

[Screenshot of the application: This is the live auction screen of the Spark Buy Live application, showing a live video feed of the auction with real-time bidding options.]

**Fig 2.6 Wallet Screen**

[Screenshot of the application: This is the wallet screen of the Spark Buy Live application, displaying wallet balance and options to manage or recharge funds.]

**Fig 2.7 Admin Sign in Screen**

![Screenshot 2023-10-05 011543.png](./media/image9.jpeg)

[Screenshot of the application: This is the admin sign-in screen of the Spark Buy Live application, providing a login interface for administrators to access the system.]

**Fig 2.8 Admin Home Screen**

[Screenshot of the application: This is the admin home screen of the Spark Buy Live application, showing a dashboard with options to manage users, auctions, and other administrative tasks.]

**Fig 2.9 Wallet Recharge Screen**

[Screenshot of the application: This is the wallet recharge screen of the Spark Buy Live application, allowing users to add funds to their wallet for bidding.]

- 38. **Hardware Interfaces**

The system must allow compatible hardware devices to be connected to the system. The camera enables users to capture video of the item being auctioned, while the microphone allows them to transmit audio. The speaker interface ensures bidders can hear the auctioneer's voice and receive critical information. The Wi-Fi module connects the device to the internet and the auction server, enabling seamless transfer of data and video. These hardware interfaces work together to create a high-quality, interactive auction experience on mobile devices, allowing users to participate in auctions from anywhere in the world.

#### 39. Software Interfaces

The interface should use Android-specific UI components for a seamless experience. It must be touch-optimized with clear labels and large buttons for easy navigation. Users should browse listings, view detailed information, place bids. Security measures such as secure sign in, and fraud prevention should also be included. The interface should provide a smooth experience for users, allowing them to participate in auctions with ease from their mobile devices.

#### 40. Communication Interfaces

In this Interfaces the system shall have an Internet connection. Users should be able to access the system through a mobile application. Therefore, both the system and devices must have networking protocol. The system shall communicate with distribution devices via internet connection. The customer must connect to the Internet to access the application:

- Broad band Internet.
- Dialup or broadband connection with the Internet provider.

This Interface must be able to communicate with third-party APIs via HTTP/HTTPS protocols.

- 41. **Other Nonfunctional Requirements**

### 42. Performance Requirements

- **PR001: **The system will provide an attractive graphical interface for the user because our system would be user-friendly, consistent, and the interface will be designed with both new and experienced users in mind, ensuring that everyone can easily navigate the system and participate in live auctions with ease.
- **PR002: **The system will allow its user to access by using the app.

#### 43. Safety Requirements

- **SR001: **Spark buy live would be secure from authorized people.
- **SR002: **The system must adhere to all relevant data protection and privacy regulations to protect user information.
- **SR003: **The system should implement secure login and authentication measures to prevent unauthorized access and protect user data.

#### 44. Software Quality Attributes

- The functional quality of software refers to the degree to which it adheres to a specific design, as determined by functional requirements or specifications. This quality attribute can also be defined as the software's suitability for its intended purpose or its ability to compete effectively with other products in the marketplace. Software’s functional quality is closely tied to its overall usefulness and value to end-users, as it reflects how well the software performs the tasks and functions for which it was designed. Achieving high functional quality is a critical goal for software development teams, as it can help to ensure that software products are successful in the marketplace and meet the needs of their intended users.
- Software structural quality refers to how it meets non-functional requirements that supports the delivery of the functional requirements, such as robustness or maintainability. It has a lot more to do with the degree to which the software works as needed. There are some following quality attributes: