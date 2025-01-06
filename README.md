# ProyectoFinalBackEnd

Dariel Cerdas y Jose Daniel

# Dia 1

Se discutieron las herramientas a utilizar, las cuales seran 

BackEnd:
MongoDB
Mongoose
Nodejs
JS
Cors
JWT
Express
Dotenv

FrontEnt:
React + vite
SASS
JS
CSS
HTML
MaterialUI
Axios
ReactDom

Parte de investigacion

MongoCompass
Firebase
Express-rate-limit
express-validator

Porject structure:
>backend
    >db.js
       >This file establishes a connection to a MongoDB database using the mongoose library. It assures that the application  can interact with the database by using environment variables for secure configuration.

        Features

        Environment Variable Configuration

        Utilizes dotenv to load the MongoDB connection string (MONGO_URI) from a .env file.

        Ensures sensitive information like database credentials is not hard-coded.

        Asynchronous Connection Handling

        Establishes a connection to the MongoDB server using mongoose.connect.
        Includes error handling to log and exit the process in case of connection failure.

        Logging

        shows a success message when the database is successfully connected.

        shows detailed error messages if the connection fails.

        Function

        connectDB
        Initializes a connection to MongoDB.
        Parameters: None (configuration is handled via the .env file).
        Returns: Resolves the connection or exits the process on failure.
        Logging:
        Success: "MongoDB connected".
        Failure: "MongoDB connection error: [error message]".
        Environment Variables
        MONGO_URI: MongoDB connection URI, imported from a enviroment variable from the ".env"

        Usage
            >Ensure the dotenv package is installed (npm install dotenv).
        Setup
            >Import and call connectDB() in your main server file (e.g., server.js or app.js) before starting the server

            Ensure the dotenv package is installed (npm install dotenv).
            Create a .env file in the root directory of your project.

            Import and call connectDB() in your main server file (e.g., server.js or app.js) before starting the server

            Dependencies
            mongoose: For interacting with the MongoDB database.
            dotenv: For loading environment variables securely.

            Error Handling
            If the connection fails, the application logs the error message and exits the process with code 1.
            Ensure the MONGO_URI value in your .env file is correct and accessible.

>controllers
        >adminControllers
            This module provides a set of functions for managing administrators in the application, including register,
            login, retrieval, update, and deletion. It is designed to interact with the Admin model and leverages bcrypt
            for password encrypting and jsonwebtoken for authentication.

            Functions
            registerAdmin
            Handles the registration of a new administrator.

            Validates whether the administrator email already exists.
            encrypts the password using bcrypt.
            Saves the new administrator in the database.
            Route: POST /api/admin/register
            Response Codes:
            201: Administrator registered successfully.
            400: Administrator already exists.
            500: Internal server error.
            loginAdmin
            Authenticates an administrator by verifying credentials.

            Validates email and password.
            Issues a JWT token for authenticated access.
            Route: POST /api/admin/login
            Response Codes:
            200: Successful login, returns token.
            404: Administrator not found.
            400: Invalid credentials.
            500: Internal server error.
            getAdmin
            Retrieves details of a specific administrator by ID.

            Route: GET /api/admin/:id
            Response Codes:
            200: Administrator found, returns details.
            404: Administrator does not exist.
            500: Internal server error.
            updateAdmin
            Updates the details of an administrator.

            Supports updating the name, email, and password.
            Password is re-encrypted before saving.
            Route: PUT /api/admin/:id
            Response Codes:
            200: Administrator updated successfully.
            404: Administrator does not exist.
            500: Internal server error.
            deleteAdmin
            Deletes an administrator by ID.

            Route: DELETE /api/admin/:id
            Response Codes:
            200: Administrator deleted successfully.
            404: Administrator not found.
            500: Internal server error.
            Dependencies
            bcrypt: Used for secure password encrypting.
            jsonwebtoken: Used for generating and verifying authentication tokens.
            mongoose: For database interaction with the Admin model.
            Environment Variables
            JWT_SECRET_ADMINS: Secret key for signing JWT tokens.
            Usage Notes
            Ensure the Admin model is correctly defined in ../models/adminModel.
            Set the JWT_SECRET_ADMINS environment variable for token generation.
            Secure your database to prevent unauthorized access.
            
        >adminControllers    
            This module provides functionalities for managing client accounts, including registration, login, retrieval of client details, updates, and deletion. It utilizes bcrypt for password hashing and jsonwebtoken for authentication, ensuring secure client management.

            Functions

            registerClient

            Handles the registration of a new client.

            Validates required fields (clientname, clientemail, clientpassword).

            Ensures the email is unique.

            Hashes the password for security.

            Route: POST /api/clients/register

            Response Codes:

            201: Client registered successfully
            400: Missing required fields or client already exists.
            500: Internal server error.
            
            loginClient

            Authenticates a client and generates a JWT token.

            Verifies email and password.

            Generates a token with client details (id, name, email, role, etc.).

            Route: POST /api/clients/login

            Response Codes:
            200: Successful login, returns token and client details.
            404: Client not found.
            400: Invalid credentials.
            500: Internal server error.

            getClient

            Retrieves a specific client's details by ID.

            Route: GET /api/clients/:id
            Response Codes:
            200: Client details retrieved successfully.
            404: Client not found.
            500: Internal server error.

            getAllClients

            Retrieves a list of all clients, excluding passwords.

            Route: GET /api/clients
            Response Codes:
            200: List of clients retrieved successfully.
            500: Internal server error.

            updateClient

            Updates a client's details by ID.

            Allows updating the name, email, and password (with reencrypting).

            Validates that at least one field is provided for the update.

            Route: PUT /api/clients/:id

            Response Codes:
            200: Client updated successfully.
            400: No data provided for update.
            404: Client not found.
            500: Internal server error.

            deleteClient

            Deletes a client by ID.

            Route: DELETE /api/clients/:id

            Response Codes:
            200: Client deleted successfully.
            404: Client not found.
            500: Internal server error.

            Dependencies

            bcrypt: For hashing client passwords securely.

            jsonwebtoken: For generating and validating authentication tokens.

            mongoose: For interacting with the Client model in the MongoDB database.

            Environment Variables

            JWT_SECRET_CLIENTS: Secret key for signing JWT tokens.

            Usage Notes

            Ensure the Client model is correctly defined in ../models/clientModel.

            Set the JWT_SECRET_CLIENTS environment variable to enable token generation.

            Use HTTPS for secure token transmission.

            Error Handling

            Validates required fields and handles missing or incorrect inputs gracefully.

            Logs errors to the console and provides descriptive error responses for debugging.
            
        >dishCategoryController
            
            This module manages the creation, retrieval, updating, and deletion of dish categories in a restaurant management system. It interacts with the DishCategory model and ensures proper handling of dish category data.

            Functions

            createDishCategory

            Creates a new dish category.

            Validates that the category name is unique.

            Route: POST /api/dish-categories

            Request Body:

            {
            "dishCategoryname": "Sample Text"
            }
        
            Response Codes:

            201: Category created successfully.
            400: Category already exists.
            500: Internal server error.

            getAllDishCategories

            Retrieves a list of all dish categories.

            Route: GET /api/dish-categories

            Response Codes:

            200: Successfully retrieved all categories.
            500: Internal server error.
            getDishCategoryById
            Retrieves a single dish category by its ID.

            Route: GET /api/dish-categories/:id

            Response Codes:

            200: Category retrieved successfully.
            404: Category not found.
            500: Internal server error.

            updateDishCategory

            Updates an existing dish category by its ID.

            Validates if the category exists before updating.

            Route: PUT /api/dish-categories/:id

            Response Codes:

            200: Category updated successfully.
            404: Category not found.
            500: Internal server error.

            deleteDishCategory

            Deletes a dish category by its ID.

            Route: DELETE /api/dish-categories/:id

            Response Codes:

            200: Category deleted successfully.
            404: Category not found.
            500: Internal server error.

            Dependencies
            mongoose: Used to interact with the DishCategory model.

            Environment Variables
            Ensure the database connection is established using mongoose before using this module.

            Usage Notes
            Dish categories are essential for organizing and managing the restaurant's menu items.

            Proper validation is implemented to avoid duplicate entries or errors.

            Use secure routes and authentication if exposed to public users.

            Error Handling
            Provides detailed error messages to assist in debugging.
            Handles common errors like missing category names or invalid IDs gracefully.

        >dishController
            This module handles CRUD (Create, Read, Update, Delete) operations for managing dishes in a restaurant's system. 
            
            It integrates with related models like DishCategory and TypeDish for better organization and supports image
            uploads for dish visualization.

            Features
            Dish Creation (createDish)
            Allows the addition of new dishes with details like name, description, price, category, type, and image.

            Route: POST /api/dishes

            Request Body (JSON + File Upload):
            {
                "dishName": "Sample text",
                "dishDescription": "Sample Description",
                "dishCategory": "SampleID",
                "dishPrice": 25.99,
                "typeDish": "TypeID"
            }

            Image is uploaded using multer and stored in the uploads/ directory.

            Response Codes:
            201: Dish created successfully.
            404: Category or type not found.
            500: Internal server error.

            Retrieve All Dishes (getDishes)

            Fetches all dishes with details including their categories and types.

            Route: GET /api/dishes

            Populates dishCategory and typeDish fields for meaningful data representation.

            Response Codes:
            200: Successfully retrieved all dishes.
            500: Internal server error.

            Retrieve a Dish by ID (getDishById)

            Fetches details of a single dish using its unique ID.

            Route: GET /api/dishes/:id

            Includes populated fields for category and type.

            Response Codes:
            200: Dish retrieved successfully.
            404: Dish not found.
            500: Internal server error.

            Update a Dish (updateDish)

            Updates existing dish details, including name, description, price, category, type, and image.

            Route: PUT /api/dishes/:id

            Validates category and type existence before updating.

            Response Codes:
            200: Dish updated successfully.
            404: Dish, category, or type not found.
            500: Internal server error.

            Delete a Dish (deleteDish)

            Removes a dish by its ID.

            Route: DELETE /api/dishes/:id

            Response Codes:
            200: Dish deleted successfully.
            404: Dish not found.
            500: Internal server error.

            Image Upload Middleware (upload)

            Configures file uploads using multer.

            Stores images in the uploads/ directory.

            File names are generated dynamically to ensure uniqueness.

            Dependencies
            mongoose: Handles interactions with the Dish, DishCategory, and TypeDish models.
            multer: Manages file uploads.
            path: Processes file paths for image uploads.

            Environment Requirements
            A directory named uploads/ must exist in the root folder for image storage.

            Ensure DishCategory and TypeDish entities exist before assigning them to dishes.

            Usage Notes
            Categories and types must be validated before dish creation or update to maintain data integrity.
            Dish images are accessible via their URL paths (e.g., /uploads/image.jpg).
            Implement authentication to restrict dish management access to authorized users.
            
        >drinkCategoryController   

            This module facilitates CRUD (Create, Read, Update, Delete) operations for managing drink categories in the system. It ensures proper organization of drinks by categorizing them effectively.

            Features
            Create Drink Category (createDrinkCategory)
            Adds a new drink category to the system, ensuring no duplicate categories are created.

            Route: POST /api/drink-categories

            Request Body (JSON):

            {
            "drinkCategoryname": "Category Name"
            }

            Response Codes:
            201: Category created successfully.
            400: Duplicate category name.
            500: Internal server error.

            Retrieve All Drink Categories (getAllDrinksCategory)

            Fetches a list of all drink categories.

            Route: GET /api/drink-categories

            Response Codes:
            200: Successfully retrieved categories.
            500: Internal server error.

            Retrieve a Drink Category by ID (getDrinkCategoryById)

            Fetches details of a specific drink category using its unique ID.

            Route: GET /api/drink-categories/:id

            Response Codes:
            200: Successfully retrieved the category.
            404: Category not found.
            500: Internal server error.

            Update Drink Category (updateDrinkCategory)

            Updates the name of an existing drink category.

            Route: PUT /api/drink-categories/:id

            Response Codes:
            200: Category updated successfully.
            404: Category not found.
            500: Internal server error.

            Delete Drink Category (deleteDrinkCategory)

            Removes a drink category by its unique ID.

            Route: DELETE /api/drink-categories/:id

            Response Codes:
            200: Category deleted successfully.
            400: Category not found.
            500: Internal server error.

            Error Handling

            Duplicate Category Name: Prevents the creation of categories with the same name to maintain data integrity.

            Invalid ID: Responds with appropriate status codes if the provided ID does not match any category in the database.

            Usage Notes
            Drink categories are a prerequisite for organizing drinks in the system. Ensure categories are properly defined
            before associating them with drinks.
            Validate user input on the frontend to prevent errors like missing fields or invalid IDs.
            Implement authentication middleware to restrict access to category management routes.

        >drinkController
            This module handles CRUD (Create, Read, Update, Delete) operations for managing drinks in the system. Drinks are associated with categories to ensure better organization and efficient data management.

            Features

            Create Drink (createDrink)

            Adds a new drink to the system, linking it to a specific category.

            Route: POST /api/drinks

            Request Body (JSON):
            {
            "drinkCategory": "Category ID",
            "drinkName": "Drink Name",
            "drinkPrice": 10.99
            }

            Response Codes:
            201: Drink created successfully.
            400: Invalid category ID or missing fields.
            500: Internal server error.

            Retrieve All Drinks (getAllDrink)

            Fetches a list of all drinks, including their associated category details.

            Route: GET /api/drinks

            Response Codes:
            200: Successfully retrieved drinks.
            500: Internal server error.

            Retrieve a Drink by ID (getDrinkById)

            Fetches details of a specific drink using its unique ID.

            Route: GET /api/drinks/:id

            Response Codes:
            200: Successfully retrieved the drink.
            404: Drink not found.
            500: Internal server error.

            Update Drink (updateDrink)

            Updates details of an existing drink, including its category, name, or price.

            Route: PUT /api/drinks/:id
            
            Response Codes:
            200: Drink updated successfully.
            400: Invalid category ID.
            404: Drink not found.
            500: Internal server error.

            Delete Drink (deleteDrink)

            Removes a drink by its unique ID.

            Route: DELETE /api/drinks/:id

            Response Codes:
            200: Drink deleted successfully.
            404: Drink not found.
            500: Internal server error.

            Error Handling
            Invalid Category: Ensures the drink is linked to an existing category.

            Missing or Incorrect Fields: Returns appropriate errors if the request body is incomplete or contains invalid data.

            Non-existent Drink ID: Responds with an error if the provided drink ID does not exist.

            Usage Notes
            Category Dependency: Drinks must be associated with an existing category. Ensure categories are created before adding drinks.

            Data Validation: Validate inputs on the frontend to avoid common errors like invalid IDs or missing fields.
            Security: Implement authentication and authorization middleware to restrict access to these routes as needed.

        >menuController
            This module handles CRUD (Create, Read, Update, Delete) operations for managing menus in the system. Menus can include a combination of dishes and drinks, and are associated with a specific stock entry to track availability.

            Features

            Create Menu (createMenu)

            Adds a new menu to the system, associating it with dishes, drinks, and stock.

            Route: POST /api/menus

            Request Body (JSON):
            {
            "name": "Menu Name",
            "description": "Detailed description of the menu",
            "price": 25.99,
            "dishes": ["Dish ID 1", "Dish ID 2"],
            "drinks": ["Drink ID 1", "Drink ID 2"],
            "stock": "Stock ID"
            }

            Response Codes:
            201: Menu created successfully.
            400: Invalid stock, dishes, or drinks provided.
            500: Internal server error.

            Retrieve All Menus (getMenus)

            Fetches a list of all menus with their associated dishes, drinks, and stock details.

            Route: GET /api/menus

            Response Codes:
            200: Successfully retrieved menus.
            500: Internal server error.

            Update Menu (updateMenu)

            Updates the details of an existing menu, including its name, description, price, dishes, drinks, or stock.

            Route: PUT /api/menus/:id

            Response Codes:
            200: Menu updated successfully.
            404: Menu not found.
            500: Internal server error.

            Delete Menu (deleteMenu)

            Removes a menu from the system using its unique ID.

            Route: DELETE /api/menus/:id

            Response Codes:
            200: Menu deleted successfully.
            404: Menu not found.
            500: Internal server error.

            Data Validation

            Dishes and Drinks: Ensures all referenced dish and drink IDs exist in their respective collections.

            Stock Association: Verifies that the menu is linked to an existing stock entry.

            Usage Notes
            Dependencies: Menus depend on pre-existing dishes, drinks, and stock entries. Make sure these entities are created
            before adding menus.
            Populate Fields: When retrieving menus, the dishes, drinks, and stock fields are populated for easier integration
            with the frontend.
            Error Handling: Detailed error messages ensure clear feedback on issues like invalid IDs, missing associations, or backend failures.

        >orderController
            This module provides functionality for managing customer orders, including creating orders, retrieving orders, updating their statuses, and deleting them. Each order includes a collection of order details (dishes and drinks), along with the client's information and the total amount.

            Features

            Create Order (createOrder)

            Creates a new order with its associated details, calculates the total amount, and sets the status to "Pending" by default.

            Route: POST /api/orders

            Request Body (JSON):
            {
            "orderDetails": ["OrderDetail ID 1", "OrderDetail ID 2"],
            "status": "Pending"
            }

            Response Codes:
            201: Order successfully created.
            400: Missing order details or invalid total calculation.
            500: Internal server error.

            Retrieve All Orders (getAllOrders)

            Retrieves a list of all orders, including detailed information about the associated dishes, drinks, clients, and categories.

            Route: GET /api/orders

            Response Codes:
            200: Successfully retrieved orders.
            500: Internal server error.

            Retrieve Order by ID (getOrderById)

            Retrieves a specific order by its ID, including populated details about the dishes, drinks, clients, and categories.

            Route: GET /api/orders/:id
            Response Codes:
            200: Successfully retrieved the order.
            404: Order not found.
            500: Internal server error.

            Update Order Status (updateOrderStatus)

            Updates the status of an existing order to one of the valid statuses (Pending, Preparing, Completed, Cancelled).

            Route: PUT /api/orders/:id

        >providerControlelr
            This module is responsible for managing providers, allowing users to create, retrieve, update, and delete provider information. It ensures data consistency and prevents duplicate entries based on the provider's name.

            Features

            Create Provider (createProvider)

            Adds a new provider to the database after ensuring the name is unique.

            Route: POST /api/providers

            Request Body (JSON):
            {
            "providerName": "Provider Name"
            }

            Response Codes:
            201: Provider successfully created.
            400: Provider name already exists.
            500: Internal server error.

            Retrieve All Providers (getAllProviders)

            Fetches a list of all registered providers.

            Route: GET /api/providers

            Response Codes:
            200: Successfully retrieved providers.
            500: Internal server error.

            Retrieve Provider by ID (getProviderById)

            Fetches the details of a specific provider by its ID.

            Route: GET /api/providers/:id

            Response Codes:
            200: Provider successfully retrieved.
            404: Provider not found.
            500: Internal server error.
            Update Provider (updateProvider)

            Updates the name of an existing provider while ensuring the new name is not already in use by another provider.

            Route: PUT /api/providers/:id

            Request Body (JSON):

            {
                "providerName": "Provider Name"
            }

            Response Codes:
            201: Provider successfully created.
            400: Provider name already exists.
            500: Internal server error.

            Retrieve All Providers (getAllProviders)

            Fetches a list of all registered providers.

            Route: GET /api/providers

            Response Codes:
            200: Successfully retrieved providers.
            500: Internal server error.

            Retrieve Provider by ID (getProviderById)

            Fetches the details of a specific provider by its ID.

            Route: GET /api/providers/:id

            Response Codes:
            200: Provider successfully retrieved.
            404: Provider not found.
            500: Internal server error.

            Update Provider (updateProvider)

            Updates the name of an existing provider while ensuring the new name is not already in use by another provider.

            Route: PUT /api/providers/:id
            Response Codes:
            200: Provider successfully updated.
            400: New provider name is already in use.
            404: Provider not found.
            500: Internal server error.

            Delete Provider (deleteProvider)

            Deletes a provider by its ID.

            Route: DELETE /api/providers/:id

            Response Codes:
            200: Provider successfully deleted.
            404: Provider not found.
            500: Internal server error.

            Data Validation and Error Handling
            Unique Name Enforcement: Ensures no duplicate provider names exist in the database by checking for existing entries during creation and update operations.

            Error Messaging: Returns detailed error messages to help identify the cause of failure, such as duplicate names, non-existent providers, or internal server issues.
            Usage Notes

            Dependencies: This module uses the Provider model to interact with the database. Ensure the providerModel is correctly defined and connected to your database.

            Scalability: The module can be extended to include additional provider attributes, such as contact information or address, as needed.

            Security: Validate all user inputs on both the frontend and backend to prevent injection attacks or invalid data entries.

        >saleController
            This module provides functionalities for managing sales, including creating, retrieving, updating, and deleting sales records. It ensures data consistency and supports detailed sales information through relationships with related models.

            Features
            Create Sale (createSale)
            Registers a new sale with associated sale details and payment method.

            Route: POST /api/sales
            Request Body (JSON):
            {
            "saleDetail": ["detailId1", "detailId2"],
            "paymentMethod": "Credit Card"
            }

            Response Codes:
            201: Sale successfully created.
            400: Invalid sale details.
            500: Internal server error.

            Retrieve All Sales (getAllSales)

            Fetches a list of all sales, including detailed sale information and sorted by creation date (newest first).

            Route: GET /api/sales

            Response Codes:
            200: Successfully retrieved sales.
            500: Internal server error.
            Retrieve Sale by ID (getSaleById)

            Fetches the details of a specific sale by its ID, including associated sale details and orders.

            Route: GET /api/sales/:id

            Response Codes:
            200: Sale successfully retrieved.
            404: Sale not found.
            500: Internal server error.

            Update Sale (updateSale)

            Updates the details and/or payment method of an existing sale, recalculating the total amount if sale details are modified.

            Route: PUT /api/sales/:id

            Response Codes:
            200: Sale successfully updated.
            400: Invalid sale details.
            404: Sale not found.
            500: Internal server error.

            Delete Sale (deleteSale)

            Deletes a sale by its ID.

            Route: DELETE /api/sales/:id

            Response Codes:
            200: Sale successfully deleted.
            404: Sale not found.
            500: Internal server error.

            Data Relationships
            Sale and SaleDetail: Each sale includes multiple sale details, which specify the items and quantities sold.
            SaleDetail and Order: Sale details may be linked to orders, providing additional context for the sale.

            Usage Notes
            Validation: Ensures all referenced saleDetail IDs exist before creating or updating a sale.
            Error Handling: Provides clear error messages for invalid inputs, missing records, or server issues.

        >saleDetailController
            This module is responsible for managing sale details, which represent individual components of a sale linked to an order. It includes functionality for creating, retrieving, updating, and deleting sale details while maintaining relationships with associated orders.

            Features

            Create Sale Detail (createSaleDetail)

            Adds a new sale detail record, linking it to an existing order and assigning a bill number.

            Route: POST /api/sale-details
            Request Body (JSON):
            {
            "order": "orderId",
            "billNumber": "123456"
            }

            Response Codes:
            201: Sale detail successfully created.
            404: Order not found.
            500: Internal server error.

            Retrieve All Sale Details (getAllSaleDetails)

            Fetches all sale detail records, including their linked orders.

            Route: GET /api/sale-details

            Response Codes:
            200: Successfully retrieved sale details.
            500: Internal server error.

            Retrieve Sale Detail by ID (getSaleDetailById)

            Retrieves a specific sale detail by its ID, including associated order data.

            Route: GET /api/sale-details/:id

            Response Codes:
            200: Sale detail successfully retrieved.
            404: Sale detail not found.
            500: Internal server error.

            Update Sale Detail (updateSaleDetail)

            Updates a sale detail's bill number.

            Route: PUT /api/sale-details/:id

            Response Codes:
            200: Sale detail successfully updated.
            404: Sale detail not found.
            500: Internal server error.

            Delete Sale Detail (deleteSaleDetail)

            Deletes a sale detail by its ID.

            Route: DELETE /api/sale-details/:id

            Response Codes:
            200: Sale detail successfully deleted.
            404: Sale detail not found.
            500: Internal server error.

            Data Relationships

            SaleDetail and Order: Each sale detail is linked to an order, providing context and allowing trace ability of sales data.

            Usage Notes
            Validation: Ensures that a sale detail cannot be created without a valid order reference.
            Error Handling: Clear error messages are provided for invalid inputs or missing records.

        >stockController
            This module is designed to handle stock management for dishes and drinks in a restaurant setting. It enables operations such as adding, viewing, updating, and removing items in the stock, while ensuring integration with related entities such as providers, dishes, and drinks.

            Features
            Create Stock (createStock)
            Adds a new stock entry, associating it with a provider, dish, and/or drink.

            Route: POST /api/stocks

            Request Body (JSON):
            {
            "dish": "dishId",
            "quantity": 10,
            "drink": "drinkId",
            "drinkQuantity": 5,
            "provider": "providerId"
            }

            Response Codes:
            201: Stock successfully created.
            404: Dish, drink, or provider not found.
            500: Internal server error.

            Retrieve Stock (getStock)

            Retrieves all stock entries, including linked dishes, drinks, and providers.

            Route: GET /api/stocks

            Response Codes:
            200: Successfully retrieved stock.
            404: No stock found.
            500: Internal server error.

            Update Stock Quantity (updateStock)

            Updates the quantity of a dish or drink in the stock.

            Route: PUT /api/stocks/:id

            Response Codes:
            200: Stock quantity successfully updated.
            400: Invalid item type.
            404: Stock or item not found.
            500: Internal server error.

            Delete Stock Item (deleteStock)

            Removes a dish or drink from the stock by nullifying its reference and setting the quantity to zero.

            Route: DELETE /api/stocks

            Response Codes:
            200: Item successfully removed from stock.
            400: Invalid item type.
            404: Item not found in stock.
            500: Internal server error.

            Data Relationships
            Stock and Provider: Tracks which provider supplied the stock.
            Stock and Dish/Drink: Allows for detailed tracking of stock levels for individual dishes and drinks.
            Usage Notes
            Validation: Ensures that stock entries cannot reference non-existent dishes, drinks, or providers.
            Error Handling: Provides clear feedback for invalid inputs or missing records.

        >typeDishController
            The Type Dish Management Module provides an interface for managing categories or classifications of dishes (e.g., appetizers, main courses, desserts). It supports CRUD operations to create, retrieve, update, and delete types of dishes within the system.

            Features

            Create a Type Dish (createTypeDish)

            Adds a new type of dish to the system.

            Route: POST /api/type-dishes

            Request Body (JSON):
            {
            "typeName": "Appetizer"
            }

            Response Codes:
            201: TypeDish successfully created.
            500: Internal server error.

            Retrieve All Type Dishes (getAllTypeDishes)

            Fetches all type dishes available in the system.

            Route: GET /api/type-dishes

            Response Codes:
            200: Successfully retrieved type dishes.
            500: Internal server error.

            Retrieve a Type Dish by ID (getTypeDishById)

            Fetches details of a specific type dish by its ID.

            Route: GET /api/type-dishes/:id

            Response Codes:
            200: TypeDish successfully retrieved.
            404: TypeDish not found.
            500: Internal server error.

            Update a Type Dish (updateTypeDish)

            Updates the details of an existing type dish.

            Route: PUT /api/type-dishes/:id

            Response Codes:
            200: TypeDish successfully updated.
            404: TypeDish not found.
            500: Internal server error.

            Delete a Type Dish (deleteTypeDish)

            Deletes a specific type dish by its ID.

            Route: DELETE /api/type-dishes/:id

            Response Codes:
            200: TypeDish successfully deleted.
            404: TypeDish not found.
            500: Internal server error.

            Usage Notes
            Validation: The typeName field is required for creating or updating a type dish.
            Error Handling: Provides clear and descriptive error messages for invalid or missing inputs.

middlewares
        authMiddleware

        Font Code:
            // Middleware for handling authentication and role-based access control
            const authMiddleware = (roles) => {
                // Returns a middleware function to process requests
                return (req, res, next) => {
                    // Extracting the token from the Authorization header
                    const token = req.headers['authorization']?.split(" ")[1]; // Token is expected as "Bearer <token>"

                    // If no token is provided, deny access
                    if (!token) {
                        return res.status(401).json({ error: 'Acceso denegado. No se proporcionó un token' }); // Unauthorized
                    }

                    try {
                        let decoded; // Variable to hold the decoded token

                        try {
                            // Attempt to verify the token using the client secret
                            decoded = jwt.verify(token, process.env.JWT_SECRET_CLIENTS);
                        } catch (err) {
                            // If client verification fails, attempt to verify using the admin secret
                            decoded = jwt.verify(token, process.env.JWT_SECRET_ADMINS);
                        }

                        // Check if the user's role is in the allowed roles or if the role is 'admin'
                        if (!roles.includes(decoded.role) && decoded.role !== 'admin') {
                            return res.status(403).json({ error: 'No tienes los permisos necesarios' }); // Forbidden
                        }

                        // Attach the decoded token (user info) to the request object for further use
                        req.user = decoded;

                        // Call the next middleware or route handler
                        next();
                    } catch (error) {
                        // Handle invalid or expired tokens
                        res.status(401).json({ error: 'Token inválido' }); // Unauthorized
                    }
                };
            };

            The authMiddleware function is a critical component of this project's backend security. It ensures that API 
            endpoints are protected by validating JSON Web Tokens (JWT) and enforcing role-based access control. Here's a 
            detailed explanation of its purpose and functionality:

            Purpose:
            The authMiddleware function:

            Verifies the presence and validity of a JWT in the Authorization header of incoming requests.
            Decodes the JWT to extract user information.
            Enforces role-based access by checking if the user's role matches the required roles or if the user is an administrator.
            How It Works:
            Extracting the Token:

            The middleware retrieves the JWT from the Authorization header.
            It expects the token to be in the format: Bearer <token>.
            Token Verification:

            Attempts to verify the token using two secret keys:
            JWT_SECRET_CLIENTS: For standard user tokens.
            JWT_SECRET_ADMINS: For administrative tokens.
            This dual-key system ensures tokens are matched with the correct type of user.
            Role Validation:

            Checks if the decoded token's role is included in the roles array provided to the middleware.
            Allows access if the user's role matches or if the role is admin, granting elevated privileges.
            Error Handling:

            Returns a 401 Unauthorized status if no token is provided or if the token is invalid.
            Returns a 403 Forbidden status if the user does not have the required permissions.
            Request Augmentation:

            Adds the decoded user information to the req.user object for downstream middleware or controllers to use.

            Benefits:
            Secure Access: Prevents unauthorized users from accessing protected endpoints.
            Role-Based Flexibility: Adapts to different access levels by specifying allowed roles.
            Enhanced Error Handling: Provides clear feedback for authentication and authorization failures.

models

        adminModel

        Font Code:
            // Importing Mongoose library to interact with MongoDB
            const mongoose = require('mongoose');

            // Defining the schema for the 'Admin' collection
            const adminSchema = new mongoose.Schema({
                // Field to store the administrator's name
                adminName: {
                    type: String, // Data type is a string
                    required: true, // The admin name is mandatory and cannot be null
                    unique: true, // Ensures no duplicate names in the database
                },
                // Field to store the administrator's email
                adminEmail: {
                    type: String, // Data type is a string
                    required: true, // The email is mandatory and cannot be null
                    unique: true, // Ensures no duplicate emails in the database
                    validate: {
                        // Validator function to ensure the email format is valid
                        validator: function (v) {
                            // Regular expression to match a valid email format
                            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
                        },
                        // Custom error message displayed if the email validation fails
                        message: props => `${props.value} no es un correo válido.` 
                    }
                },
                // Field to store the administrator's password
                adminPassword: {
                    type: String, // Data type is a string
                    required: true, // The password is mandatory for creating an admin account
                    // Note: This field should be hashed before saving to the database for security
                },
            }, {
                // Adds 'createdAt' and 'updatedAt' timestamps to the schema
                timestamps: true 
            });

            // Creating the 'Admin' model based on the schema
            const Admin = mongoose.model('Admin', adminSchema);

            // Exporting the 'Admin' model to use it in other parts of the application
            module.exports = Admin;


            This file defines the MongoDB schema for managing administrator records in the application. Using Mongoose, the schema ensures that administrator data adheres to specific validation rules and formats, enabling secure and consistent database operations.

        Purpose:
        The adminSchema is designed to store and validate information about administrators. It includes fields for the administrator's name, email, and password while applying constraints to ensure data integrity.

        Schema Fields:
        adminName:

        Type: String
        Constraints:
        Required: Must be provided.
        Unique: Each administrator must have a distinct name.
        adminEmail:

        Type: String
        Constraints:
        Required: Must be provided.
        Unique: Each email address must be unique.
        Validation: The email must follow a standard email format using a regex validator. If the email is invalid, a custom error message is provided.
        adminPassword:

        Type: String
        Constraints:
        Required: A password is mandatory for each administrator.
        Timestamps:

        Mongoose automatically tracks the createdAt and updatedAt timestamps for each record.

        Key Features:
        Data Integrity: Enforces uniqueness and required fields to maintain a reliable dataset.
        Validation: Ensures the adminEmail field is correctly formatted, reducing the risk of invalid data.
        Timestamps: Automatically tracks when administrator records are created or modified.


        clientModel

        Font Code
            // Importing Mongoose library to interact with MongoDB
            const mongoose = require('mongoose');

            // Defining the schema for the 'Client' collection
            const clientSchema = new mongoose.Schema({
                // Field to store the name of the client
                clientname: {
                    type: String, // Data type is a string
                    required: true, // The client name is mandatory and cannot be null
                    unique: true, // Ensures that no two clients have the same name in the database
                },
                // Field to store the email of the client
                clientemail: {
                    type: String, // Data type is a string
                    required: true, // The email is mandatory and cannot be null
                    unique: true, // Ensures that no two clients have the same email in the database
                },
                // Field to store the password of the client
                clientpassword: {
                    type: String, // Data type is a string
                    required: true, // The password is mandatory and cannot be null
                    // This field should be hashed before saving for secure authentication
                },
            }, {
                timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields to the schema
            });

            // Creating the 'Client' model based on the schema
            const Client = mongoose.model('Client', clientSchema);

            // Exporting the 'Client' model to use it in other parts of the application
            module.exports = Client;


            This file defines the MongoDB schema for managing client records in the application. Using Mongoose, the schema establishes the structure and validation rules for storing client data, ensuring a secure and reliable database interaction.

            Purpose:
            The clientSchema is designed to store essential information about clients, such as their name, email, and password, while enforcing constraints to maintain data integrity.

            Schema Fields:
            clientname:

            Type: String
            Constraints:
            Required: Every client must have a name.
            Unique: Ensures that no two clients share the same name.
            clientemail:

            Type: String
            Constraints:
            Required: A valid email is mandatory for every client.
            Unique: Prevents duplicate email entries in the database.
            clientpassword:

            Type: String
            Constraints:
            Required: A password is mandatory for client accounts.
            Timestamps:

            Automatically tracks createdAt and updatedAt timestamps for each record, enabling easy tracking of data creation and modification.

            Key Features:
            Data Integrity: Enforces uniqueness and required fields, ensuring a consistent and reliable dataset.
            Timestamps: Automatically records when client data is created or updated, aiding in record tracking.
            Modular Design: The schema can be easily extended to include additional fields or features as the application grows.


        dishCategoryModel
            Font Code

            // Importing Mongoose library to interact with MongoDB
            const mongoose = require('mongoose');

            // Defining the schema for the 'DishCategory' collection
            const dishCategorySchema = new mongoose.Schema({
                // Field to store the name of the dish category
                dishCategoryname: {
                    type: String, // Data type is a string
                    required: true, // The category name is mandatory and cannot be null
                    unique: true, // Ensures that each category name is unique in the database
                },
            }, {
                timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields to the schema
            });

            // Creating the 'DishCategory' model based on the schema
            const DishCategory = mongoose.model('DishCategory', dishCategorySchema);

            // Exporting the 'DishCategory' model to use it in other parts of the application
            module.exports = DishCategory;

            The dishCategoryModel file defines the schema for managing categories of dishes in the application. Using Mongoose, this schema ensures that each dish category is uniquely identified and maintains timestamps for data tracking.

            Purpose:
            The dishCategorySchema is designed to organize dishes into categories, making it easier to manage and display them effectively in the application, such as grouping dishes by cuisine type, dietary restrictions, or meal type.

            Schema Fields:
            dishCategoryname:

            Type: String
            Constraints:
            Required: Each category must have a name.
            Unique: Prevents duplicate category names in the database.
            Timestamps:

            Automatically tracks createdAt and updatedAt timestamps for each record.

            Key Features:
            Organized Dish Management: Allows dishes to be grouped into categories for better organization and user experience.
            Data Integrity: Enforces unique and required constraints to ensure consistent categorization.
            Timestamps: Automatically records when a category is created or updated.
            

        dishModel
            // Importing Mongoose library to interact with MongoDB
            const mongoose = require('mongoose'); 

            // Defining the schema for the 'Dish' collection
            const dishSchema = new mongoose.Schema({
                // Field to store the name of the dish
                dishName: {
                    type: String, // Data type is a string
                    required: true, // The dish name is mandatory and cannot be null
                },
                // Field to store a description of the dish
                dishDescription: {
                    type: String, // Data type is a string
                    required: true, // Description is mandatory and cannot be null
                },
                // Field to reference the category of the dish
                dishCategory: {
                    type: mongoose.Schema.Types.ObjectId, // Stores the ObjectId of a related document
                    ref: 'DishCategory', // Refers to the 'DishCategory' collection
                    required: true, // Dish category is mandatory
                },
                // Field to store the price of the dish
                dishPrice: {
                    type: Number, // Data type is a number
                    required: true, // Price is mandatory and cannot be null
                },
                // Field to reference the type of dish
                typeDish: {
                    type: mongoose.Schema.Types.ObjectId, // Stores the ObjectId of a related document
                    ref: 'TypeDish', // Refers to the 'TypeDish' collection
                    required: true, // Type of dish is mandatory
                },
                // Field to store the URL of an image of the dish
                imageUrl: {
                    type: String, // Data type is a string
                    // Optional field, does not require a value
                },
            }, {
                timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields to the schema
            });

            // Creating the 'Dish' model based on the schema
            const Dish = mongoose.model('Dish', dishSchema);

            // Exporting the 'Dish' model to use it in other parts of the application
            module.exports = Dish;


            The dishModel file defines the schema for managing dishes in the application. Using Mongoose, this schema provides a structured and efficient way to store and retrieve information about individual dishes, including their names, descriptions, categories, pricing, and associated types.

            Purpose:
            The dishSchema enables the application to manage a menu of dishes, linking each dish to relevant categories and types while also supporting optional image URLs for enhanced presentation.

            Schema Fields:
            dishName:

            Type: String
            Constraints:
            Required: Each dish must have a name.
            dishDescription:

            Type: String
            Constraints:
            Required: Provides a description of the dish.
            dishCategory:

            Type: ObjectId
            References: DishCategory collection.
            Constraints:
            Required: Associates the dish with a category for organizational purposes.
            dishPrice:

            Type: Number
            Constraints:
            Required: Specifies the price of the dish.
            typeDish:

            Type: ObjectId
            References: TypeDish collection.
            Constraints:
            Required: Links the dish to its type, such as "vegetarian" or "non-vegetarian."
            imageUrl (Optional):

            Type: String
            Holds a URL for an image representing the dish.
            Timestamps:

            Automatically tracks createdAt and updatedAt timestamps for each dish.

            Key Features:
            Relational Structure: Connects dishes to categories and types using ObjectId references, enabling efficient data organization and retrieval.
            Rich Data: Captures essential details about dishes, including optional image support for enhanced visual representation.
            Timestamps: Tracks creation and updates automatically for auditing and management purposes.


        drinkCategoryModel

        Font Code

        // Importing the DrinkCategory model to interact with the drinkCategory collection in the database
        const DrinkCategory = require('../models/drinkCategoryModel');

        // Function to create a new drink category
        const createDrinkCategory = async (req, res) => {
            try {
                // Extracting drink category name from the request body
                const { drinkCategoryname } = req.body;

                // Checking if a category with the same name already exists in the database
                const existingCategory = await DrinkCategory.findOne({drinkCategoryname});
                if(existingCategory){
                    // If the category exists, return a 400 status with an error message
                    return res.status(400).json({message: "La categoria ya existe"});
                }

                // If no such category exists, create a new one
                const newCategory = new DrinkCategory({ drinkCategoryname });
                // Save the new category to the database
                await newCategory.save();

                // Respond with a 201 status and the newly created category
                res.status(201).json({ message: "Categoria creada ", category: newCategory});
            
            } catch (error) {
                // Handle errors and return a 500 status with the error message
                res.status(500).json({ message: "Error al crear la categoria", error: error.message});
            }
        };

        // Function to retrieve all drink categories
        const getAllDrinksCategory = async (req, res) => {
            try {
                // Retrieve all categories from the database
                const categories = await DrinkCategory.find();
                // Send the categories as a response
                res.json(categories);
            } catch (error) {
                // Handle errors and return a 500 status with the error message
                res.status(500).json({ message: "Error al obtener las categorias", error: error.message })
            };
        };

        // Function to retrieve a drink category by its ID
        const getDrinkCategoryById = async (req, res) => {
            try {
                // Extract the ID from the request parameters
                const { id } = req.params;
                // Find the category with the given ID
                const category = await DrinkCategory.findById(id);

                if (!category) {
                    // If no category is found, return a 404 status with an error message
                    return res.status(404).json({ message: "categoria no encontrada"});
                };

                // Send the found category as a response
                res.json(category);
            } catch (error) {
                // Handle errors and return a 500 status with the error message
                res.status(500).json({ message: "Error al obtener la categoria", error: error.message });
            };
        };

        // Function to update a drink category by its ID
        const updateDrinkCategory = async (req, res) => {
            try {
                // Extract the ID from the request parameters and the new data from the request body
                const { id } = req.params;
                const { drinkCategoryname } = req.body;

                // Find the category with the given ID
                const category = await DrinkCategory.findById(id);
                if (!category) {
                    // If no category is found, return a 404 status with an error message
                    return res.status(404).json({ message: "Categoria no encontrada"});
                };

                // Update the category name if provided
                if (drinkCategoryname) category.DrinkCategory = drinkCategoryname;

                // Save the updated category to the database
                await category.save();
                // Respond with the updated category and a success message
                res.json({ message: "Categoria actualizada correctamente", category });

            } catch (error) {
                // Handle errors and return a 500 status with the error message
                res.status(500).json({ message: "Error al actualizar la categoria", error: error.message });
            };
        };

        // Function to delete a drink category by its ID
        const deleteDrinkCategory = async (req, res) => {
            try {
                // Extract the ID from the request parameters
                const { id } = req.params;

                // Find and delete the category with the given ID
                const category = await DrinkCategory.findByIdAndDelete(id);

                if (!category) {
                    // If no category is found, return a 400 status with an error message
                    return res.status(400).json({ message: "Categoria no encontrada" });
                };

                // Respond with a success message
                res.json({ message: "Categoria eliminada" });
            } catch (error) {
                // Handle errors and return a 500 status with the error message
                res.status(500).json({ message: "Error al eliminar la categoria", error: error.message})
            };
        };

        // Exporting the functions to be used in other parts of the application
        module.exports = {
            createDrinkCategory,
            getAllDrinksCategory,
            getDrinkCategoryById,
            updateDrinkCategory,
            deleteDrinkCategory,
        };

        This module handles the backend logic for managing drink categories in the application. It allows for creating, reading, updating, and deleting categories, ensuring a structured way to organize and retrieve drink-related data.

        Key Functionalities:

        createDrinkCategory:
        Purpose: Creates a new drink category.
        Validation:
        Checks if the category already exists.
        Response:
        Returns a success message with the newly created category.
        Sends an error if the category already exists or an internal issue occurs.

        getAllDrinksCategory:
        Purpose: Retrieves all drink categories.
        Response:
        Returns an array of all categories.
        Sends an error message if retrieval fails.

        getDrinkCategoryById:
        Purpose: Fetches a specific drink category by its ID.
        Validation:
        Ensures the category exists before returning it.
        Response:
        Returns the requested category.
        Sends an error if the category is not found or an internal issue occurs.

        updateDrinkCategory:
        Purpose: Updates an existing drink category by its ID.
        Validation:
        Ensures the category exists before updating.
        Response:
        Returns a success message with the updated category.
        Sends an error if the category is not found or if an internal issue occurs.

        deleteDrinkCategory:
        Purpose: Deletes a specific drink category by its ID.
        Validation:
        Ensures the category exists before deletion.
        Response:
        Returns a success message upon deletion.
        Sends an error if the category is not found or if an internal issue occurs.

        Error Handling:
        Proper error messages are provided for scenarios such as:
        Missing or invalid fields during creation or update.
        Non-existent categories for retrieval, update, or deletion.
        Internal server errors for unexpected issues.

    

        drinkModel

            Font Code
            // Importing Mongoose library to interact with MongoDB
            const mongoose = require('mongoose');

            // Defining the schema for the 'Drink' collection
            const drinkSchema = new mongoose.Schema({
                // Field to reference the category of the drink
                drinkCategory: {
                    type: mongoose.Schema.Types.ObjectId, // Stores the ObjectId of a related document
                    ref: 'DrinkCategory', // Refers to the 'DrinkCategory' collection
                    required: true, // The drink category is mandatory
                },
                // Field to store the name of the drink
                drinkName: {
                    type: String, // Data type is a string
                    required: true, // The drink name is mandatory and cannot be null
                },
                // Field to store the price of the drink
                drinkPrice: {
                    type: Number, // Data type is a number
                    required: true, // The drink price is mandatory and cannot be null
                },
            }, {
                // Adds 'createdAt' and 'updatedAt' timestamps to the schema
                timestamps: true,
            });

            // Creating the 'Drink' model based on the schema
            const Drink = mongoose.model('Drink', drinkSchema);

            // Exporting the 'Drink' model to use it in other parts of the application
            module.exports = Drink;

            The Drink Model is designed to represent individual drink items in the application. Each drink is associated with a Dish through its reference and may be included in menus.

            Schema Overview:
            Fields:
            name: A required string representing the name of the drink.
            description: An optional string providing additional details about the drink.
            price: A required number indicating the price of the drink.
            dishes: An array of ObjectIds referencing related dishes, allowing for associations between drinks and dishes.
            drinks: An array of ObjectIds referencing related drinks, enabling a relationship with other drinks.
            stock: An ObjectId referencing the Stock model, indicating the stock level of the drink and its availability.
            Functionalities:
            Association with Dishes and Other Drinks:

            The dishes and drinks fields utilize references to maintain relationships between various menu items, making it easier to manage combinations and related items.
            Stock Management:

            The stock field ensures that each drink has a corresponding stock reference, allowing for stock tracking and availability management.

            Error Handling:
            Invalid data submission or non-existent references in dishes or stock fields will trigger appropriate error messages.
            Ensures data integrity by maintaining required fields for the drink schema.


        menuModel

            Font Code

            // Importing Mongoose library to interact with MongoDB
            const mongoose = require('mongoose');

            // Defining the schema for the 'Menu' collection
            const menuSchema = new mongoose.Schema({
                // Field to store the name of the menu
                name: {
                    type: String, // Data type is a string
                    required: true, // The name of the menu is mandatory
                },
                // Optional field to store a description of the menu
                description: {
                    type: String, // Data type is a string
                    // This field is not mandatory
                },
                // Field to store the price of the menu
                price: {
                    type: Number, // Data type is a number
                    required: true, // The price of the menu is mandatory
                },
                // Array field to store references to the dishes associated with the menu
                dishes: [{
                    type: mongoose.Schema.Types.ObjectId, // Stores ObjectId of related Dish documents
                    ref: 'Dish', // Refers to the 'Dish' collection
                }],
                // Array field to store references to the drinks associated with the menu
                drinks: [{
                    type: mongoose.Schema.Types.ObjectId, // Stores ObjectId of related Drink documents
                    ref: 'Drink', // Refers to the 'Drink' collection
                }],
                // Field to reference the stock associated with the menu
                stock: {
                    type: mongoose.Schema.Types.ObjectId, // Stores ObjectId of a related Stock document
                    ref: 'Stock', // Refers to the 'Stock' collection
                    required: true, // The stock reference is mandatory
                },
            }, {
                // Adds 'createdAt' and 'updatedAt' timestamps to the schema
                timestamps: true,
            });

            // Creating the 'Menu' model based on the schema
            const Menu = mongoose.model('Menu', menuSchema);

            // Exporting the 'Menu' model to use it in other parts of the application
            module.exports = Menu;

            The Menu Model is the blueprint for managing menu items in the application, which may include dishes, drinks, and related stock. It leverages MongoDB through Mongoose to define and interact with menu data.

            Schema Overview:
            Fields:

            name: A required string field that specifies the name of the menu.
            description: An optional string field providing additional information about the menu.
            price: A required number field representing the cost of the menu.
            dishes: An array of ObjectIds referencing the Dish model, representing dishes included in the menu.
            drinks: An array of ObjectIds referencing the Drink model, representing drinks associated with the menu.
            stock: A required ObjectId referencing the Stock model, ensuring inventory tracking for the menu.
            Timestamps:

            Automatically tracks when a menu is created (createdAt) and last updated (updatedAt).
            Key Functionalities:
            Menu Composition:

            Integrates Dish and Drink models, allowing for dynamic menu creation and management.
            Each menu can include multiple dishes and drinks, providing flexibility in menu design.
            Stock Integration:

            The stock reference ensures that menus are tied to inventory, facilitating stock monitoring and updates.
            Dynamic Updates:

            The schema supports changes to menu items and associated entities like dishes, drinks, or pricing.


        orderDetailModel    

        Font Code
            // Importing Mongoose library to interact with MongoDB
            const mongoose = require('mongoose');

            // Defining the schema for the 'OrderDetail' collection
            const orderDetailSchema = new mongoose.Schema({
                // Field to reference the associated drink
                drink: {
                    type: mongoose.Schema.Types.ObjectId, // Stores the ObjectId of a related Drink document
                    ref: 'Drink', // Refers to the 'Drink' collection
                    required: true, // The drink field is mandatory
                },
                // Field to reference the associated dish
                dish: {
                    type: mongoose.Schema.Types.ObjectId, // Stores the ObjectId of a related Dish document
                    ref: 'Dish', // Refers to the 'Dish' collection
                    required: true, // The dish field is mandatory
                },
                // Field to reference the client who placed the order
                client: {
                    type: mongoose.Schema.Types.ObjectId, // Stores the ObjectId of a related Client document
                    ref: 'Client', // Refers to the 'Client' collection
                    required: true, // The client field is mandatory
                },
                // Field to store the quantity of the drink/dish ordered
                quantity: {
                    type: Number, // Data type is a number
                    required: true, // The quantity field is mandatory
                    default: 1, // Default quantity is set to 1 if not provided
                },
                // Optional field to store any special instructions for the order
                specialInstructions: {
                    type: String, // Data type is a string
                    // This field is not mandatory
                },
            }, {
                // Adds 'createdAt' and 'updatedAt' timestamps to the schema
                timestamps: true,
            });

            // Creating the 'OrderDetail' model based on the schema
            const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema);

            // Exporting the 'OrderDetail' model to use it in other parts of the application
            module.exports = OrderDetail;

            The Order Detail Model is a crucial component for managing individual items within a client’s order. It provides a structured way to track the details of each dish and drink ordered, along with associated metadata 
            like client information, quantity, and special instructions.

            Schema Overview:
            Fields:

            drink: A required reference to a Drink document in the Drink collection.
            dish: A required reference to a Dish document in the Dish collection.
            client: A required reference to a Client document in the Client collection, linking the order to the client who placed it.
            quantity: A required number field specifying the quantity of the dish or drink ordered (default is 1).
            specialInstructions: An optional string field to include any specific instructions for the preparation or delivery of the order.
            Timestamps:

            Automatically tracks when the order detail was created (createdAt) and last updated (updatedAt).
            Key Functionalities:
            Order Item Tracking:

            Tracks the specific dishes and drinks associated with an order.
            Links each item to the client who placed the order for better order management.
            Customization:

            The specialInstructions field enables clients to add custom requests for each item, such as dietary preferences or preparation details.
            Quantity Management:

            Supports orders with multiple quantities for the same dish or drink, simplifying bulk ordering.

            Error Handling:
            Missing Fields:
            Requests missing required fields (drink, dish, client, or quantity) will return appropriate error responses.
            Invalid References:
            Invalid ObjectIds for drink, dish, or client will result in validation errors.


        orderModel

            Font Code

            // Importing Mongoose library to interact with MongoDB
            const mongoose = require('mongoose');

            // Defining the schema for the 'Order' collection
            const orderSchema = new mongoose.Schema({
                // Array field to store references to order details
                orderDetails: [{
                    type: mongoose.Schema.Types.ObjectId, // Stores the ObjectId of related OrderDetail documents
                    ref: 'OrderDetail', // Refers to the 'OrderDetail' collection
                    required: true, // The order must include at least one detail
                }],
                // Field to store the date the order was placed
                orderDate: {
                    type: Date, // Data type is a date
                    default: Date.now, // Defaults to the current date and time
                },
                // Field to store the status of the order
                status: {
                    type: String, // Data type is a string
                    enum: ['Pending', 'Preparing', 'Completed', 'Cancelled'], // Allowed values for the status
                    default: 'Pending', // Default status is 'Pending'
                },
                // Field to store the total amount of the order
                totalAmount: {
                    type: Number, // Data type is a number
                    required: true, // The total amount is mandatory
                },
            }, {
                // Adds 'createdAt' and 'updatedAt' timestamps to the schema
                timestamps: true,
            });

            // Method to calculate the total amount of the order based on order details
            orderSchema.methods.calculateTotal = async function () {
                // Fetches all related OrderDetail documents
                const details = await OrderDetail.find({ _id: { $in: this.orderDetails } });

                // Calculates the total by summing up the price * quantity for each detail
                this.totalAmount = details.reduce((total, detail) => total + detail.quantity * detail.price, 0);

                // Returns the total amount
                return this.totalAmount;
            };

            // Creating the 'Order' model based on the schema
            const Order = mongoose.model('Order', orderSchema);

            // Exporting the 'Order' model to use it in other parts of the application
            module.exports = Order;
                

            The Order Model is designed to manage and store information about customer orders in the application. It provides an efficient way to track the order's details, status, and total amount while maintaining relationships with associated OrderDetail documents.

            Schema Overview:
            Fields:

            orderDetails: An array of references to OrderDetail documents that represent the individual items in the order. At least one OrderDetail is required.
            orderDate: A Date field that records when the order was placed. It defaults to the current date and time if not provided.
            status: A String field that tracks the order's current status. Allowed values include:
            Pending: Default status when the order is created.
            Preparing: Indicates that the order is being prepared.
            Completed: Marks the order as fulfilled.
            Cancelled: Represents a cancelled order.
            totalAmount: A Number field that stores the total cost of the order. It is mandatory and can be dynamically calculated.
            Timestamps:

            Automatically tracks when the order was created (createdAt) and last updated (updatedAt).
            Key Functionalities:
            Order Tracking:

            Captures all relevant details for an order, including individual items, their quantities, and special instructions via OrderDetail references.
            Includes a status field to monitor the order's lifecycle from placement to completion or cancellation.
            Dynamic Total Calculation:

            The calculateTotal method computes the total cost of the order by summing up the product of the price and quantity for each OrderDetail.
            Relationship Management:

            Maintains a strong connection with the OrderDetail model for detailed tracking of dishes and drinks included in the order.

            Error Handling:
            Missing Order Details:

            Orders without valid OrderDetail references will return a validation error.
            Invalid Status:

            Updating the status field with a value outside the defined enum (Pending, Preparing, Completed, Cancelled) will result in an error.
            Total Calculation Issues:

            Errors in fetching or referencing OrderDetail documents during total calculation will return appropriate error responses.


        providerModel

            Font Code

            // Importing Mongoose library to interact with MongoDB
            const mongoose = require('mongoose');

            // Defining the schema for the 'Provider' collection
            const providerSchema = new mongoose.Schema({
                // Field to store the name of the provider
                providerName: {
                    type: String, // Data type is a string
                    required: true, // The provider name is mandatory
                    unique: true, // Ensures that each provider name is unique in the collection
                },
            }, {
                // Adds 'createdAt' and 'updatedAt' timestamps to the schema
                timestamps: true,
            });

            // Creating the 'Provider' model based on the schema
            const Provider = mongoose.model('Provider', providerSchema);

            // Exporting the 'Provider' model to use it in other parts of the application
            module.exports = Provider;

            The Provider Model manages and stores information about product or service providers. This model plays a key role in maintaining a registry of unique suppliers for various resources in the application.

            Schema Overview:
            Fields:

            providerName: A String field that stores the name of the provider. This field:
            Is required to ensure that no provider is created without a name.
            Must be unique, preventing duplicate provider names in the database.
            Timestamps:

            Automatically tracks when a provider was created (createdAt) and last updated (updatedAt).
            Key Functionalities:
            Provider Management:

            Facilitates the addition, retrieval, update, and deletion of provider records.
            Ensures no duplicate entries by enforcing uniqueness in the providerName field.
            Scalability:

            Designed to handle a growing list of providers while maintaining data integrity.

            Error Handling:
            Duplicate Provider Names:

            Attempts to create a provider with a duplicate providerName will return a validation error.
            Missing providerName:

            Requests without a providerName field will result in a validation error.
            Nonexistent Provider ID:

            Fetching, updating, or deleting a provider with an invalid or nonexistent ID will return a 404 Not Found error.


        saleDetailModel

            Font Code
            // Importing Mongoose library to interact with MongoDB
            const mongoose = require('mongoose');

            // Defining the schema for the 'SaleDetail' collection
            const saleDetailSchema = new mongoose.Schema({
                // Field to reference the associated order
                order: {
                    type: mongoose.Schema.Types.ObjectId, // Stores the ObjectId of a related Order document
                    ref: 'Order', // Refers to the 'Order' collection
                    required: true, // The order field is mandatory
                },
                // Field to store the bill number associated with the sale
                billNumber: {
                    type: Number, // Data type is a number
                    required: true, // The bill number is mandatory
                },
            }, {
                // Adds 'createdAt' and 'updatedAt' timestamps to the schema
                timestamps: true,
            });

            // Creating the 'SaleDetail' model based on the schema
            const SaleDetail = mongoose.model('SaleDetail', saleDetailSchema);

            // Exporting the 'SaleDetail' model to use it in other parts of the application
            module.exports = SaleDetail;

            The SaleDetail Model is responsible for managing the detailed information of sales transactions. It links sales to orders and includes billing details, making it an essential part of the sales tracking system.

            Schema Overview:
            Fields:

            order:
            References the associated Order document.
            Data type: ObjectId (MongoDB document reference).
            Required: Ensures that every sale detail is linked to a valid order.
            billNumber:
            Stores the bill number related to the sale.
            Data type: Number.
            Required: Every sale must have an associated bill number for record-keeping.
            Timestamps:

            Automatically includes createdAt and updatedAt fields to track when a sale detail was created and last updated.
            Key Functionalities:
            Sales Tracking:

            Associates sales with specific orders, providing a detailed view of the transaction.
            Ensures accurate billing information through the billNumber field.
            Record Management:

            Maintains a comprehensive history of sales, allowing for auditing and reporting.

            Error Handling:
            Invalid order Reference:

            Linking to a nonexistent or invalid order results in a validation error.
            Missing billNumber:

            Omitting the billNumber field in the request returns a validation error.
            Nonexistent SaleDetail ID:

            Fetching, updating, or deleting with an invalid or nonexistent ID will return a 404 Not Found error.


        saleModel

            Font Code
            // Importing Mongoose library to interact with MongoDB
            const mongoose = require('mongoose');

            // Defining the schema for the 'Sale' collection
            const saleSchema = new mongoose.Schema({
                // Array field to store references to sale details
                saleDetail: [{
                    type: mongoose.Schema.Types.ObjectId, // Stores ObjectId of related SaleDetail documents
                    ref: 'SaleDetail', // Refers to the 'SaleDetail' collection
                    required: true, // Every sale must have at least one SaleDetail
                }],
                // Field to store the date when the sale was made
                saleDate: {
                    type: Date, // Data type is a date
                    default: Date.now, // Defaults to the current date and time
                },
                // Field to specify the payment method used for the sale
                paymentMethod: {
                    type: String, // Data type is a string
                    enum: ['Efectivo', 'Tarjeta de debito', 'Sinpe Movil'], // Allowed values for payment methods
                    default: 'Efectivo', // Default is 'Efectivo'
                    required: true, // The payment method is mandatory
                },
            }, {
                // Adds 'createdAt' and 'updatedAt' timestamps to the schema
                timestamps: true,
            });

            // Creating the 'Sale' model based on the schema
            const Sale = mongoose.model('Sale', saleSchema);

            // Exporting the 'Sale' model to use it in other parts of the application
            module.exports = Sale;

            The Sale Model manages the high-level information related to a sale, including associated details such as the sale date, total amount, and the involved clients. It serves as the primary structure for capturing and tracking sales data within the system.

            Schema Overview:
            Fields:

            saleDetails:
            Array field storing references to SaleDetail documents.
            Data type: [ObjectId] (MongoDB document reference).
            Required: Ensures every sale includes at least one detail.
            saleDate:
            Stores the date when the sale was made.
            Data type: Date.
            Default: Current date and time.
            totalAmount:
            Represents the total amount of the sale.
            Data type: Number.
            Required: Ensures every sale has a calculated total amount.
            client:
            References the client associated with the sale.
            Data type: ObjectId (MongoDB document reference).
            Required: Ensures a client is linked to every sale.
            Timestamps:

            Automatically includes createdAt and updatedAt fields to track when a sale was created and last updated.
            Key Functionalities:
            Sales Tracking:

            Tracks and manages multiple sale details through SaleDetail references, ensuring a comprehensive view of each sale.
            Calculation and Management:

            Calculates the total amount of the sale using associated SaleDetail documents.
            Allows for easy aggregation and reporting of sales data.

            Error Handling:
            Invalid saleDetails References:

            Linking to nonexistent or invalid SaleDetail documents will result in validation errors.
            Invalid Client Reference:

            Attempting to associate a nonexistent or invalid client will return a validation error.
            Missing totalAmount:

            Not providing a totalAmount field will trigger a validation error.


        stockModel

            Font Code
            // Importing Mongoose library to interact with MongoDB
            const mongoose = require('mongoose');

            // Defining the schema for the 'Stock' collection
            const stockSchema = new mongoose.Schema({
                // Field to store reference to the related dish
                dish: {
                    type: mongoose.Schema.Types.ObjectId, // Stores the ObjectId of related Dish document
                    ref: 'Dish', // Refers to the 'Dish' collection
                    required: null, // This field is not mandatory
                },
                // Field to store the quantity of the related dish in stock
                quantity: {
                    type: Number, // Data type is a number
                    default: true, // Default value is a boolean 'true'
                },
                // Field to store reference to the related drink
                drink: {
                    type: mongoose.Schema.Types.ObjectId, // Stores the ObjectId of related Drink document
                    ref: 'Drink', // Refers to the 'Drink' collection
                    default: null, // Default value is null (optional)
                },
                // Field to store the quantity of the related drink in stock
                drinkQuantity: {
                    type: Number, // Data type is a number
                    required: true, // This field is mandatory
                },
                // Field to store reference to the provider supplying the stock
                provider: {
                    type: mongoose.Schema.Types.ObjectId, // Stores the ObjectId of related Provider document
                    ref: 'Provider', // Refers to the 'Provider' collection
                    required: true, // This field is mandatory
                },
            }, {
                // Adds 'createdAt' and 'updatedAt' timestamps to the schema
                timestamps: true,
            });

            // Creating the 'Stock' model based on the schema
            const Stock = mongoose.model('Stock', stockSchema);

            // Exporting the 'Stock' model to use it in other parts of the application
            module.exports = Stock;

            The Stock Model is designed to manage and track the stock levels of both dishes and drinks, along with the provider supplying them. It serves as a central structure for keeping inventory up-to-date within the system.

            Schema Overview:
            Fields:

            dish:
            Optional field referencing the associated dish.
            Data type: ObjectId (MongoDB document reference).
            Refers to the Dish collection.
            quantity:
            Stores the quantity of the related dish in stock.
            Data type: Number.
            Default: true (Boolean).
            drink:
            Optional field referencing the associated drink.
            Data type: ObjectId (MongoDB document reference).
            Refers to the Drink collection.
            Default: null.
            drinkQuantity:
            Stores the quantity of the related drink in stock.
            Data type: Number.
            Required: This field is mandatory.
            provider:
            References the provider supplying the stock.
            Data type: ObjectId (MongoDB document reference).
            Refers to the Provider collection.
            Required: This field is mandatory.
            Timestamps:

            Automatically includes createdAt and updatedAt fields to track when the stock entry was created and last updated.
            Key Functionalities:
            Inventory Management:
            Tracks and manages stock levels for dishes and drinks through references to related documents.
            Integration with Other Models:
            Links Dish, Drink, and Provider models to maintain a comprehensive view of inventory.
            Error Handling:
            Invalid dish Reference:

            Attempting to link to a nonexistent Dish document will result in validation errors.
            Invalid drink Reference:

            Linking to a nonexistent Drink document will trigger an error.
            Missing provider:

            Not providing a provider reference will result in validation errors.


        typeDishModel

            Font Model
            // Importing Mongoose library to interact with MongoDB
            const mongoose = require('mongoose');

            // Defining the schema for the 'TypeDish' collection
            const TypeDishSchema = new mongoose.Schema({
                // Field to store the name of the dish type
                typeName: {
                    type: String, // Data type is a string
                    required: true, // This field is mandatory
                },
            }, {
                // Adds 'createdAt' and 'updatedAt' timestamps to the schema
                timestamps: true,
            });

            // Creating the 'TypeDish' model based on the schema
            const TypeDish = mongoose.model('TypeDish', TypeDishSchema);

            // Exporting the 'TypeDish' model to use it in other parts of the application
            module.exports = TypeDish;

            The TypeDish Model is used to manage and categorize different types of dishes within the system. This model allows for efficient organization and retrieval of dishes based on their type.

            Schema Overview:
            Fields:

            typeName:
            Represents the name of the dish type.
            Data type: String.
            Required: This field is mandatory.
            Timestamps:

            Automatically includes createdAt and updatedAt fields to track when the type dish entry was created and last updated.
            Key Functionalities:
            Dish Categorization:

            Provides a structured way to categorize dishes into different types (e.g., appetizer, main course, dessert).
            Integration with Other Models:

            Can be linked to other models like Dish to ensure organized data management based on dish types.

            Error Handling:
            Missing typeName:
            Attempting to create a TypeDish without a typeName will result in a validation error.
            Invalid typeName:
            Attempting to create a TypeDish with a duplicate typeName will trigger a uniqueness constraint violation.


>Routes

        adminRoute

            Font Code
            const express = require('express'); // Importing Express framework
            const { 
                registerAdmin, 
                loginAdmin, 
                getAdmin, 
                updateAdmin, 
                deleteAdmin 
            } = require('../controllers/adminController'); // Importing admin-related controller functions
            const authMiddleware = require('../middlewares/authMiddleware'); // Importing authentication middleware
            const { get } = require('mongoose'); // Importing necessary mongoose method

            const router = express.Router(); // Creating an instance of Express Router

            // POST route for admin registration
            router.post('/adminRegister', registerAdmin); 
            // Description: Handles the registration of a new admin user

            // POST route for admin login
            router.post('/adminLogin', loginAdmin); 
            // Description: Authenticates the admin user and provides a token upon successful login

            // GET route to fetch admin details by ID
            router.get('/:id', getAdmin); 
            // Description: Retrieves the details of an admin based on the provided ID

            // PUT route to update admin details by ID
            router.put('/:id', updateAdmin); 
            // Description: Updates the admin details for the given ID

            // DELETE route to delete an admin by ID
            router.delete('/:id', authMiddleware, deleteAdmin); 
            // Description: Deletes the admin identified by the ID, protected by authentication middleware

            module.exports = router; // Exporting the router for use in the main application

            The adminRouter.js file sets up routing for handling various administrative functionalities in a Node.js and Express application. Below is a detailed description of its components:

            Purpose:
            This router defines routes for managing admin-related actions, such as registration, login, fetching admin details, updating, and deleting an admin account. It integrates with the adminController for handling logic and utilizes an authMiddleware to secure the delete route.

            Breakdown:
            Dependencies:

            express: A web framework for building web applications.
            adminController: A module containing controller functions (registerAdmin, loginAdmin, getAdmin, updateAdmin, deleteAdmin).
            authMiddleware: Middleware used for authentication, protecting routes (e.g., deleteAdmin).
            mongoose: Provides methods to interact with MongoDB.
            Router Creation:

            const router = express.Router();
            Creates a new router instance for defining routes.
            Routes:

            POST /adminRegister:
            Calls the registerAdmin function to handle admin registration.
            POST /adminLogin:
            Calls the loginAdmin function to authenticate and login an admin.
            GET /:id:
            Calls the getAdmin function to fetch admin details based on the provided ID.
            PUT /:id:
            Calls the updateAdmin function to update admin details for a specific ID.
            DELETE /:id:
            Calls the deleteAdmin function to delete an admin account, protected by the authMiddleware.
            Export:

            module.exports = router;
            Exports the router to be used in the main application.
            Usage:
            This router is included in the main application setup and is used to manage routes related to admin functionalities, ensuring secure access and handling various CRUD operations related to admin data.


        clientRoute

            Font Code
            const express = require('express'); // Importing the Express library for routing
            const { 
                registerClient, 
                loginClient, 
                getClient, 
                getAllClients, 
                updateClient, 
                deleteClient 
            } = require('../controllers/clientController'); // Importing client-related controllers
            const authMiddleware = require('../middlewares/authMiddleware'); // Importing middleware to handle authentication

            const router = express.Router(); // Creating a new instance of an Express router

            // Route to register a new client
            router.post('/register', registerClient); // Handles POST request for client registration

            // Route for client login
            router.post('/login', loginClient); // Handles POST request for client login

            // Route to get all clients
            router.get('/', getAllClients); // Handles GET request to retrieve all clients

            // Route to get a client by ID with authentication middleware
            router.get('/:id', authMiddleware(['client', 'admin']), getClient); 
            // Handles GET request to retrieve client details by ID, accessible to 'client' and 'admin' roles

            // Route to update client details with authentication middleware
            router.put('/:id', authMiddleware(['client', 'admin']), updateClient); 
            // Handles PUT request to update client details, accessible to 'client' and 'admin' roles

            // Route to delete a client with authentication middleware
            router.delete('/:id', authMiddleware(['client', 'admin']), deleteClient); 
            // Handles DELETE request to remove a client, accessible to 'client' and 'admin' roles

            module.exports = router; // Exporting the router to be used in other parts of the application

            The clientRouter.js file sets up routing for handling client-related functionalities in a Node.js and Express application. Below is a detailed description of its components:

            Purpose:
            This router manages routes related to client operations such as registration, login, fetching client details, updating, and deleting client accounts. It integrates with the clientController for handling logic and uses authMiddleware to control access to certain routes based on roles (e.g., 'client' or 'admin').

            Breakdown:
            Dependencies:

            express: A web framework for building web applications.
            clientController: A module containing controller functions (registerClient, loginClient, getClient, getAllClients, updateClient, deleteClient).
            authMiddleware: Middleware used for authentication and role-based access control (RBAC).
            Router Creation:

            const router = express.Router();
            Creates a new router instance for defining routes.
            Routes:

            POST /register:
            Calls the registerClient function to handle client registration.
            POST /login:
            Calls the loginClient function to authenticate and login a client.
            GET /:
            Calls the getAllClients function to fetch all clients.
            GET /:id:
            Calls the getClient function to fetch client details by ID, protected by authMiddleware allowing access only to 'client' and 'admin'.
            PUT /:id:
            Calls the updateClient function to update client details for a specific ID, protected by authMiddleware.
            DELETE /:id:
            Calls the deleteClient function to delete a client account, protected by authMiddleware.
            Export:

            module.exports = router;
            Exports the router to be used in the main application.

            The clientRouter.js file sets up routing for handling client-related functionalities in a Node.js and Express application. Below is a detailed description of its components:

            Purpose:
            This router manages routes related to client operations such as registration, login, fetching client details, updating, and deleting client accounts. It integrates with the clientController for handling logic and uses authMiddleware to control access to certain routes based on roles (e.g., 'client' or 'admin').

            Breakdown:
            Dependencies:

            express: A web framework for building web applications.
            clientController: A module containing controller functions (registerClient, loginClient, getClient, getAllClients, updateClient, deleteClient).
            authMiddleware: Middleware used for authentication and role-based access control (RBAC).
            Router Creation:

            const router = express.Router();
            Creates a new router instance for defining routes.
            Routes:

            POST /register:
            Calls the registerClient function to handle client registration.
            POST /login:
            Calls the loginClient function to authenticate and login a client.
            GET /:
            Calls the getAllClients function to fetch all clients.
            GET /:id:
            Calls the getClient function to fetch client details by ID, protected by authMiddleware allowing access only to 'client' and 'admin'.
            PUT /:id:
            Calls the updateClient function to update client details for a specific ID, protected by authMiddleware.
            DELETE /:id:
            Calls the deleteClient function to delete a client account, protected by authMiddleware.
            Export:

            module.exports = router;
            Exports the router to be used in the main application.



        dishCategoryRoute

            dishCategoryRoute

            Font Code
            const express = require('express'); // Importing Express for creating routes
            const { 
                createDishCategory, 
                getAllDishCategories, 
                getDishCategoryById, 
                updateDishCategory, 
                deleteDishCategory 
            } = require('../controllers/dishCategoryController'); // Importing dish category controller functions
            const authMiddleware = require('../middlewares/authMiddleware'); // Importing middleware for authentication

            const router = express.Router(); // Creating a new Express router instance

            // Route to create a new dish category
            router.post('/', createDishCategory); // Handles POST request to create a new dish category

            // Route to get all dish categories
            router.get('/', getAllDishCategories); // Handles GET request to retrieve all dish categories

            // Route to get a specific dish category by ID
            router.get('/:id', getDishCategoryById); // Handles GET request to retrieve a dish category by its ID

            // Route to update a dish category by ID
            router.put('/:id', updateDishCategory); // Handles PUT request to update a dish category

            // Route to delete a dish category by ID
            router.delete('/:id', deleteDishCategory); // Handles DELETE request to remove a dish category

            module.exports = router; // Exporting the router for use in other parts of the application

            The dishCategoryRouter.js file sets up routing for handling dish category-related operations in a Node.js and Express application. Below is a detailed description of its components:

            Purpose:
            This router manages routes related to dish categories, including creating, retrieving, updating, and deleting dish categories. It integrates with the dishCategoryController for handling logic and uses authMiddleware to control access to certain routes.

            Breakdown:
            Dependencies:

            express: A web framework for building web applications.
            dishCategoryController: A module containing controller functions (createDishCategory, getAllDishCategories, getDishCategoryById, updateDishCategory, deleteDishCategory).
            authMiddleware: Middleware used for authentication and authorization.
            Router Creation:

            const router = express.Router();
            Creates a new router instance for defining routes.
            Routes:

            POST /:
            Calls the createDishCategory function to create a new dish category.
            GET /:
            Calls the getAllDishCategories function to fetch all dish categories.
            GET /:id:
            Calls the getDishCategoryById function to fetch a specific dish category by its ID.
            PUT /:id:
            Calls the updateDishCategory function to update an existing dish category by its ID.
            DELETE /:id:
            Calls the deleteDishCategory function to delete a dish category by its ID.
            Export:

            module.exports = router;
            Exports the router to be used in the main application.


            dishRoute

            Font Code
            const express = require('express'); // Importing Express for creating routes
            const { 
                createDish, 
                getDishes, 
                getDishById, 
                updateDish, 
                deleteDish, 
                upload 
            } = require('../controllers/dishController'); // Importing dish controller functions
            const authMiddleware = require('../middlewares/authMiddleware'); // Importing middleware for authentication

            const router = express.Router(); // Creating a new Express router instance

            // Route to create a new dish with an image upload
            router.post('/', upload.single('image'), createDish); 
            // Handles POST request to create a new dish. An image is uploaded using the 'upload' middleware.

            router.get('/', getDishes); 
            // Handles GET request to retrieve all dishes.

            router.get('/:id', getDishById); 
            // Handles GET request to retrieve a specific dish by its ID.

            router.put('/:id', updateDish); 
            // Handles PUT request to update an existing dish by its ID.

            router.delete('/:id', deleteDish); 
            // Handles DELETE request to remove a dish by its ID.

            module.exports = router; // Exporting the router for use in other parts of the application

            The dishRouter.js file defines the routes for handling dish-related operations in an Express application. Below is a breakdown of the key components and functionality:

            Purpose:
            This router manages CRUD operations for dishes, including creating, retrieving, updating, and deleting dishes. It also includes image uploads and authentication for secure access to routes.

            Breakdown:
            Dependencies:

            express: A web framework for building web applications.
            dishController: Functions (createDish, getDishes, getDishById, updateDish, deleteDish, upload) handling dish-related logic.
            authMiddleware: Middleware for handling authentication and authorization.
            Router Creation:

            const router = express.Router();
            Creates a new router instance for defining routes.
            Routes:

            POST /:
            Calls the createDish function to create a new dish.
            Uses upload.single('image') middleware to handle image file uploads.
            GET /:
            Calls the getDishes function to fetch all dishes.
            GET /:id:
            Calls the getDishById function to fetch a specific dish by its ID.
            PUT /:id:
            Calls the updateDish function to update an existing dish by its ID.
            DELETE /:id:
            Calls the deleteDish function to delete a dish by its ID.
            Export:

            module.exports = router;
            Exports the router to be used in other parts of the application.


        drinkCategoryRoute

        Font Route

        const express = require('express'); // Importing Express for handling routes
        const { 
            createDrinkCategory, 
            getAllDrinksCategory, 
            getDrinkCategoryById, 
            updateDrinkCategory, 
            deleteDrinkCategory 
        } = require('../controllers/drinkCategoryController'); // Importing drink category controller functions
        const authMiddleware = require('../middlewares/authMiddleware'); // Importing middleware for authentication

        const router = express.Router(); // Creating a new Express router instance

        // Route to create a new drink category
        router.post('/', createDrinkCategory); 
        // Handles POST request to create a new drink category. Calls the createDrinkCategory function.

        router.get('/', getAllDrinksCategory); 
        // Handles GET request to retrieve all drink categories. Calls the getAllDrinksCategory function.

        router.get('/:id', getDrinkCategoryById); 
        // Handles GET request to retrieve a specific drink category by its ID. Calls the getDrinkCategoryById function.

        router.put('/:id', updateDrinkCategory); 
        // Handles PUT request to update an existing drink category by its ID. Calls the updateDrinkCategory function.

        router.delete('/:id', deleteDrinkCategory); 
        // Handles DELETE request to remove a drink category by its ID. Calls the deleteDrinkCategory function.

        module.exports = router; // Exporting the router for use in other parts of the application

        The drinkCategoryRouter.js file defines routes for handling drink category-related operations in an Express application. Below is a breakdown of the key components and functionality:

        Purpose:
        This router manages CRUD operations for drink categories, including creating, retrieving, updating, and deleting drink categories.

        Breakdown:
        Dependencies:

        express: A web framework for building web applications.
        drinkCategoryController: Functions (createDrinkCategory, getAllDrinksCategory, getDrinkCategoryById, updateDrinkCategory, deleteDrinkCategory) handling drink category-related logic.
        authMiddleware: Middleware for handling authentication and authorization.
        Router Creation:

        const router = express.Router();
        Creates a new router instance for defining routes.
        Routes:

        POST /:
        Calls the createDrinkCategory function to create a new drink category.
        GET /:
        Calls the getAllDrinksCategory function to fetch all drink categories.
        GET /:id:
        Calls the getDrinkCategoryById function to fetch a specific drink category by its ID.
        PUT /:id:
        Calls the updateDrinkCategory function to update an existing drink category by its ID.
        DELETE /:id:
        Calls the deleteDrinkCategory function to delete a drink category by its ID.
        Export:

        module.exports = router;
        Exports the router to be used in other parts of the application.


        drinkRoute
            const express = require('express'); // Importing Express for handling routing
            const { 
                createDrink, 
                getAllDrink, 
                getDrinkById, 
                updateDrink, 
                deleteDrink 
            } = require('../controllers/drinkController'); 
            // Importing controller functions for drink-related operations
            const authMiddleware = require('../middlewares/authMiddleware'); 
            // Middleware for handling authentication and role-based access control

            const router = express.Router(); // Creating a new Express router instance

            // Route to create a new drink
            router.post('/', createDrink); 
            // Handles POST requests to add a new drink to the system. Uses the createDrink controller function.

            // Route to get all drinks
            router.get('/', getAllDrink); 
            // Handles GET requests to retrieve all drinks from the database. Uses the getAllDrink controller function.

            // Route to get a specific drink by ID
            router.get('/:id', getDrinkById); 
            // Handles GET requests to fetch a drink by its ID. Uses the getDrinkById controller function.

            // Route to update a drink by ID
            router.put('/:id', updateDrink); 
            // Handles PUT requests to update a specific drink's information by its ID. Uses the updateDrink controller function.

            // Route to delete a drink by ID
            router.delete('/:id', deleteDrink); 
            // Handles DELETE requests to remove a specific drink from the system by its ID. Uses the deleteDrink controller function.

            module.exports = router; 
            // Exports the router so it can be used in other parts of the application


            The drinkRouter.js file defines routes for managing drink-related operations in an Express application. It facilitates CRUD functionality for the drinks offered in the system.

            Purpose:
            This file allows the application to handle operations related to drinks, such as creating, retrieving, updating, and deleting drink entries. It utilizes controller functions to manage the logic and database interactions.

            Breakdown:
            Dependencies:

            express: A lightweight framework used to create a router.
            drinkController: Contains the functions (createDrink, getAllDrink, getDrinkById, updateDrink, deleteDrink) responsible for drink-related operations.
            authMiddleware: Middleware to manage authentication and secure access.
            Router Initialization:

            const router = express.Router();
            Creates a router instance to define API endpoints for drinks.
            Routes:

            POST /:
            Calls createDrink to add a new drink entry to the database.
            GET /:
            Calls getAllDrink to retrieve a list of all drinks available in the system.
            GET /:id:
            Calls getDrinkById to fetch details of a specific drink using its ID.
            PUT /:id:
            Calls updateDrink to modify the details of an existing drink identified by its ID.
            DELETE /:id:
            Calls deleteDrink to remove a drink entry from the database based on its ID.
            Export:

            module.exports = router;
            Exports the router to be integrated with the main application.

        MenuRoute

        Font COde

        const express = require('express'); // Importing Express framework for handling routes
        const router = express.Router(); // Creating a new router instance for defining menu-related routes

        const { 
            createMenu, // Controller function to handle menu creation
            getMenus,   // Controller function to retrieve all menus
            updateMenu, // Controller function to update a specific menu
            deleteMenu  // Controller function to delete a specific menu
        } = require('../controllers/menuController'); 
        // Importing controller functions from the menuController file for menu-related operations

        // Route to create a new menu
        router.post('/', createMenu); 
        // Handles POST requests to add a new menu. Uses the createMenu controller function.

        // Route to get all menus
        router.get('/', getMenus); 
        // Handles GET requests to retrieve all menus from the database. Uses the getMenus controller function.

        // Route to update a specific menu by ID
        router.put('/:id', updateMenu); 
        // Handles PUT requests to update menu details using its unique ID. Uses the updateMenu controller function.

        // Route to delete a specific menu by ID
        router.delete('/:id', deleteMenu); 
        // Handles DELETE requests to remove a menu from the database using its unique ID. Uses the deleteMenu controller function.

        module.exports = router; 
        // Exports the router for use in the main application or other parts of the project

        The menuRouter.js file defines API endpoints for managing menu-related operations in an Express application. It provides the necessary routes to create, retrieve, update, and delete menu items.

        Purpose:
        This router facilitates the management of menu entries in the system, acting as an intermediary between user requests and the business logic in the menuController.

        Breakdown:
        Dependencies:

        express: Used to create a router for handling menu-related routes.
        menuController: Contains the logic for managing menus, including the following functions:
        createMenu: Handles menu creation.
        getMenus: Retrieves all menus.
        updateMenu: Updates a specific menu by its ID.
        deleteMenu: Deletes a specific menu by its ID.
        Router Initialization:

        const router = express.Router();
        Creates a new instance of the Express router.
        Routes:

        POST /:
        Calls createMenu to add a new menu item to the database.
        GET /:
        Calls getMenus to retrieve a list of all available menus.
        PUT /:id:
        Calls updateMenu to modify details of an existing menu item identified by its ID.
        DELETE /:id:
        Calls deleteMenu to remove a menu item from the database by its ID.
        Export:

        module.exports = router;
        Exports the router to be included in the main application.


        orderDetail

            const express = require('express'); // Importing the Express framework to handle routing
            const router = express.Router(); // Creating a new router instance for order detail routes

            const { 
                createOrderDetail,   // Controller function to create a new order detail
                getAllOrderDetails,  // Controller function to fetch all order details
                getOrderDetailById,  // Controller function to fetch a specific order detail by ID
                updateOrderDetail,   // Controller function to update a specific order detail by ID
                deleteOrderDetail    // Controller function to delete a specific order detail by ID
            } = require('../controllers/orderDetailController'); 
            // Importing controller functions from the `orderDetailController` file

            // Route to create a new order detail
            router.post('/', createOrderDetail); 
            // Handles POST requests to create a new order detail in the database using the `createOrderDetail` controller function

            // Route to get all order details
            router.get('/', getAllOrderDetails); 
            // Handles GET requests to fetch all order details stored in the database using the `getAllOrderDetails` controller function

            // Route to get a specific order detail by ID
            router.get('/:id', getOrderDetailById); 
            // Handles GET requests to fetch a single order detail using its unique ID with the `getOrderDetailById` controller function

            // Route to update a specific order detail by ID
            router.put('/:id', updateOrderDetail); 
            // Handles PUT requests to update the details of a specific order detail using its unique ID via the `updateOrderDetail` controller function

            // Route to delete a specific order detail by ID
            router.delete('/:id', deleteOrderDetail); 
            // Handles DELETE requests to remove an order detail identified by its unique ID using the `deleteOrderDetail` controller function

            module.exports = router; 
            // Exports the router for integration into the main application or other parts of the project

            The orderDetailRouter.js file defines the API endpoints for managing order details within the application. It provides routes to create, retrieve, update, and delete order detail records.

            Purpose:
            This router serves as an interface for performing CRUD operations on order details. These details typically include information about individual items within an order, such as quantities, associated dishes or drinks, and other related data.

            Breakdown:
            Dependencies:

            express: Used to create the router for handling HTTP requests related to order details.
            orderDetailController: Contains the business logic for managing order details, including:
            createOrderDetail: Creates a new order detail.
            getAllOrderDetails: Retrieves all order details from the database.
            getOrderDetailById: Fetches a specific order detail by its unique ID.
            updateOrderDetail: Updates an existing order detail by its ID.
            deleteOrderDetail: Removes an order detail by its ID.
            Router Initialization:

            const router = express.Router();
            Initializes a new Express router instance to handle order detail routes.
            Routes:

            POST /:
            Endpoint to create a new order detail using createOrderDetail.
            GET /:
            Endpoint to fetch all order details using getAllOrderDetails.
            GET /:id:
            Endpoint to fetch a specific order detail by its ID using getOrderDetailById.
            PUT /:id:
            Endpoint to update a specific order detail by its ID using updateOrderDetail.
            DELETE /:id:
            Endpoint to delete a specific order detail by its ID using deleteOrderDetail.
            Export:

            module.exports = router;
            Exports the router for use in other parts of the application.



            orderRoute

            Font Code

            const express = require('express'); // Import the Express framework for routing.
            const router = express.Router(); // Create a new router instance for order-related routes.

            const { 
                createOrder,         // Controller function to create a new order.
                getAllOrders,        // Controller function to fetch all orders.
                getOrderById,        // Controller function to fetch a specific order by ID.
                updateOrderStatus,   // Controller function to update the status of an order.
                deleteOrder          // Controller function to delete an order.
            } = require('../controllers/orderController'); 
            // Import controller functions from the `orderController` file.

            const authMiddleware = require('../middlewares/authMiddleware'); 
            // Import the middleware to handle authentication and authorization.

            // Route to create a new order.
            router.post('/', createOrder); 
            // Handles POST requests to add a new order to the database using the `createOrder` controller function.

            // Route to fetch all orders.
            router.get('/', getAllOrders); 
            // Handles GET requests to retrieve all orders from the database using the `getAllOrders` controller function.

            // Route to fetch a specific order by ID.
            router.get('/:id', getOrderById); 
            // Handles GET requests to retrieve a single order by its unique ID using the `getOrderById` controller function.

            // Route to update the status of a specific order by ID.
            router.put('/:id', updateOrderStatus); 
            // Handles PUT requests to update the status or details of a specific order using the `updateOrderStatus` controller function.

            // Route to delete a specific order by ID.
            router.delete('/:id', deleteOrder); 
            // Handles DELETE requests to remove an order identified by its unique ID using the `deleteOrder` controller function.

            module.exports = router; 
            // Exports the router so it can be integrated into the main server or application.

            The orderRouter.js file is responsible for defining the API endpoints for managing orders in the application. These endpoints enable the creation, retrieval, updating, and deletion of order records, making this router a key part of order-related functionality.

            Purpose:
            This router facilitates the interaction between the frontend and backend systems for handling orders. By implementing these endpoints, it ensures that the application can efficiently manage order data.

            Breakdown:
            Dependencies:

            Express: Provides routing capabilities for the API.
            Order Controller: Includes the business logic for handling order operations:
            createOrder: Adds a new order to the database.
            getAllOrders: Retrieves a list of all orders.
            getOrderById: Fetches details of a specific order based on its ID.
            updateOrderStatus: Updates the status or details of an existing order.
            deleteOrder: Removes an order from the system.
            Authentication Middleware: Ensures that only authorized users can access or modify order data.
            Routes:

            POST /:
            Creates a new order using the createOrder controller function.
            Example: { "orderDetails": [details], "status": "Pending" }
            GET /:
            Fetches all orders from the database using the getAllOrders controller function.
            GET /:id:
            Fetches a specific order by its unique ID using the getOrderById controller function.
            Example: /orders/12345
            PUT /:id:
            Updates the status or details of an order using the updateOrderStatus controller function.
            Example: { "status": "Completed" }
            DELETE /:id:
            Deletes an order using the deleteOrder controller function.
            Export:

            module.exports = router;:
            Exports the router for use in the main application file or server configuration.
            Usage:
            The orderRouter.js organizes the API endpoints for order management, enabling seamless CRUD operations. This setup ensures modularity and scalability, making it easier to maintain and extend the order-related functionality of the application.


        saleDetailRoute

            Font Code

            const express = require('express'); // Import the Express framework to create routes.
            const { 
                createSaleDetail,      // Controller function to create a new sale detail.
                getAllSaleDetails,     // Controller function to fetch all sale details.
                getSaleDetailById,     // Controller function to fetch a specific sale detail by ID.
                updateSaleDetail,      // Controller function to update a specific sale detail.
                deleteSaleDetail       // Controller function to delete a specific sale detail.
            } = require('../controllers/saleDetailController'); 
            // Import the sale detail controller functions from the `saleDetailController` file.

            const router = express.Router(); // Create a new router instance for sale detail routes.

            // Route to create a new sale detail.
            router.post('/', createSaleDetail); 
            // Handles POST requests to add a sale detail to the database using the `createSaleDetail` controller function.

            // Route to fetch all sale details.
            router.get('/', getAllSaleDetails); 
            // Handles GET requests to retrieve all sale details from the database using the `getAllSaleDetails` controller function.

            // Route to fetch a specific sale detail by its ID.
            router.get('/:id', getSaleDetailById); 
            // Handles GET requests to retrieve a single sale detail by its unique ID using the `getSaleDetailById` controller function.

            // Route to update a specific sale detail by its ID.
            router.put('/:id', updateSaleDetail); 
            // Handles PUT requests to modify a specific sale detail using the `updateSaleDetail` controller function.

            // Route to delete a specific sale detail by its ID.
            router.delete('/:id', deleteSaleDetail); 
            // Handles DELETE requests to remove a sale detail identified by its unique ID using the `deleteSaleDetail` controller function.

            module.exports = router; 
            // Export the router so it can be used in the main server or application file.

            The saleDetailRouter.js file defines the API routes for managing sale details in the application. These routes handle various CRUD (Create, Read, Update, Delete) operations for sale details, allowing efficient interaction with the sale detail data.

            Purpose:
            This router is responsible for managing sale detail records, enabling operations such as adding, retrieving, updating, and deleting sale details through the backend API.

            Breakdown:
            Dependencies:

            Express: Used to create routes for handling sale detail requests.
            SaleDetail Controller: Includes business logic for handling operations related to sale details:
            createSaleDetail: Adds a new sale detail to the database.
            getAllSaleDetails: Retrieves a list of all sale details.
            getSaleDetailById: Fetches details of a specific sale detail using its ID.
            updateSaleDetail: Updates an existing sale detail by its ID.
            deleteSaleDetail: Removes a sale detail from the database.
            Routes:

            POST /:
            Creates a new sale detail using the createSaleDetail controller function.
            Example: { "productId": "abc123", "quantity": 5, "price": 150 }
            GET /:
            Fetches all sale details from the database using the getAllSaleDetails controller function.
            GET /:id:
            Fetches a specific sale detail by its unique ID using the getSaleDetailById controller function.
            Example: /saleDetails/605c72a8d8b5f7a2f4b8b20d
            PUT /:id:
            Updates a specific sale detail using the updateSaleDetail controller function.
            Example: { "quantity": 10, "price": 200 }
            DELETE /:id:
            Deletes a sale detail using the deleteSaleDetail controller function.
            Export:

            module.exports = router;:
            Exports the router for integration into the main server or application.


        saleRoute

            Font Code
            const express = require('express'); // Import the Express framework to create routes.
            const router = express.Router(); // Create a new router instance for sale routes.

            const { 
                createSale,      // Controller function to create a new sale.
                getAllSales,     // Controller function to fetch all sales.
                getSaleById,     // Controller function to fetch a specific sale by ID.
                updateSale,      // Controller function to update a specific sale.
                deleteSale       // Controller function to delete a specific sale.
            } = require('../controllers/saleController'); 
            // Import the sale controller functions from the `saleController` file.

            const authMiddleware = require('../middlewares/authMiddleware'); 
            // Import the authentication middleware to secure routes.

            router.post('/', createSale); 
            // Handles POST requests to create a new sale using the `createSale` controller function.

            router.get('/', getAllSales); 
            // Handles GET requests to retrieve all sales using the `getAllSales` controller function.

            router.get('/:id', getSaleById); 
            // Handles GET requests to retrieve a specific sale by its unique ID using the `getSaleById` controller function.

            router.put('/:id', updateSale); 
            // Handles PUT requests to update an existing sale identified by its `id` using the `updateSale` controller function.

            router.delete('/:id', deleteSale); 
            // Handles DELETE requests to remove a sale identified by its unique ID using the `deleteSale` controller function.

            module.exports = router; 
            // Export the router so it can be used in the main server or application file.

            The saleRouter.js file is responsible for defining routes for handling sales-related operations in the application. This includes creating, reading, updating, and deleting sales through the API. Below is a detailed breakdown of the code and its functionality.

            Purpose:
            This router allows interaction with sales data through various HTTP methods such as POST, GET, PUT, and DELETE.

            Breakdown:
            Dependencies:

            Express: Used to create routes for handling sale requests.
            Sale Controller: Contains the logic for handling sales operations:
            createSale: Creates a new sale.
            getAllSales: Retrieves a list of all sales.
            getSaleById: Fetches a specific sale by its unique ID.
            updateSale: Updates an existing sale.
            deleteSale: Deletes a sale from the database.
            Authentication Middleware: Ensures that only authorized users can access certain routes.
            Routes:

            POST /:
            Creates a new sale using the createSale controller function.
            Example payload: { "product": "Burger", "quantity": 2, "total": 30 }
            GET /:
            Retrieves all sales from the database using the getAllSales controller function.
            GET /:id:
            Fetches a specific sale by its unique ID using the getSaleById controller function.
            Example: /sales/605c72a8d8b5f7a2f4b8b20d
            PUT /:id:
            Updates a specific sale using the updateSale controller function.
            Example payload: { "quantity": 3, "total": 45 }
            DELETE /:id:
            Removes a sale identified by its unique ID using the deleteSale controller function.
            Export:

            module.exports = router;:
            Exports the router so it can be used throughout the application.

        stockRoute

            Font Code
            const express = require('express'); // Import the Express framework to create routes.
            const router = express.Router(); // Create a new router instance for handling stock-related routes.
            const { 
                createStock,    // Controller function to create a new stock item.
                getStock,       // Controller function to retrieve all stock items.
                updateStock,    // Controller function to update an existing stock item.
                deleteStock     // Controller function to delete a stock item.
            } = require('../controllers/stockController'); 
            // Import stock controller functions from the `stockController` file.

            const authMiddleware = require('../middlewares/authMiddleware'); 
            // Import the authentication middleware to ensure secure access to routes.

            router.post('/', createStock); 
            // Handles POST requests to create a new stock item using the `createStock` controller function.

            router.get('/', getStock); 
            // Handles GET requests to retrieve all stock items using the `getStock` controller function.

            router.put('/:id', updateStock); 
            // Handles PUT requests to update an existing stock item identified by its ID using the `updateStock` controller function.

            router.delete('/:id', deleteStock); 
            // Handles DELETE requests to remove a stock item identified by its unique ID using the `deleteStock` controller function.

            module.exports = router; 
            // Export the router so it can be used in the main server or application file.

            The stockRouter.js file defines routes for handling stock-related operations in the application. It includes operations such as creating, retrieving, updating, and deleting stock items. Below is a breakdown of its functionality.

            Purpose:
            This router provides endpoints for managing stock data through API requests.

            Breakdown:
            Dependencies:

            Express: Framework for routing and handling HTTP requests.
            Stock Controller: Manages stock operations:
            createStock: Creates a new stock entry.
            getStock: Retrieves the stock information.
            updateStock: Updates the stock information for a specific item.
            deleteStock: Deletes a stock entry by ID.
            Authentication Middleware: Ensures that only authorized users can access specific routes.
            Routes:

            POST /:
            Creates a new stock item using the createStock controller function.
            Example payload: { "dish": "Pasta", "quantity": 50, "provider": "SupplierX" }
            GET /:
            Retrieves all stock entries using the getStock controller function.
            PUT /:id:
            Updates an existing stock item using the updateStock controller function.
            Example payload: { "quantity": 45 }
            DELETE /:id:
            Deletes a specific stock item by ID using the deleteStock controller function.
            Export:

            module.exports = router;:
            Exports the router so it can be integrated into the main server or application.


        typeDishRoute

            Font Code
            const express = require('express'); // Import the Express framework to create routes.
            const router = express.Router(); // Create a new router instance for handling type dish-related routes.
            const { 
                createTypeDish,    // Controller function to create a new type of dish.
                getAllTypeDishes,  // Controller function to retrieve all types of dishes.
                getTypeDishById,   // Controller function to fetch a specific type dish by ID.
                updateTypeDish,    // Controller function to update a type dish.
                deleteTypeDish     // Controller function to delete a type dish.
            } = require('../controllers/typeDishController'); 
            // Import type dish controller functions from the `typeDishController` file.

            const authMiddleware = require('../middlewares/authMiddleware'); 
            // Import the authentication middleware to ensure secure access to routes.

            router.post('/', createTypeDish); 
            // Handles POST requests to create a new type dish using the `createTypeDish` controller function.

            router.get('/', getAllTypeDishes); 
            // Handles GET requests to retrieve all types of dishes using the `getAllTypeDishes` controller function.

            router.get('/:id', getTypeDishById); 
            // Handles GET requests to retrieve a specific type dish by its unique ID using the `getTypeDishById` controller function.

            router.put('/:id', updateTypeDish); 
            // Handles PUT requests to update an existing type dish identified by its ID using the `updateTypeDish` controller function.

            router.delete('/:id', deleteTypeDish); 
            // Handles DELETE requests to remove a type dish identified by its unique ID using the `deleteTypeDish` controller function.

            module.exports = router; 
            // Export the router so it can be used in the main server or application file.

            The typeDishRouter.js file defines routes for handling operations related to dish types in the application. This includes creating, retrieving, updating, and deleting different types of dishes. Below is a breakdown of its functionality.

            Purpose:
            This router provides endpoints for managing types of dishes through API requests.

            Breakdown:
            Dependencies:

            Express: Framework for routing and handling HTTP requests.
            TypeDish Controller: Manages operations related to types of dishes:
            createTypeDish: Creates a new dish type.
            getAllTypeDishes: Retrieves all dish types.
            getTypeDishById: Fetches a specific dish type by ID.
            updateTypeDish: Updates a specific dish type by ID.
            deleteTypeDish: Deletes a specific dish type by ID.
            Authentication Middleware: Ensures that only authorized users can access specific routes.
            Routes:

            POST /:
            Creates a new dish type using the createTypeDish controller function.
            Example payload: { "typeName": "Dessert" }
            GET /:
            Retrieves all dish types using the getAllTypeDishes controller function.
            GET /:id:
            Fetches a specific dish type by ID using the getTypeDishById controller function.
            PUT /:id:
            Updates a dish type identified by ID using the updateTypeDish controller function.
            Example payload: { "typeName": "Main Course" }
            DELETE /:id:
            Deletes a dish type by ID using the deleteTypeDish controller function.
            Export:

            module.exports = router;:
            Exports the router for use in the main server or application.

    .env
        This project relies on an .env file to store environment-specific variables. Below is a breakdown of the key variables used and their purposes:

        Environment Variables

        MONGO_URI
        Description: The connection string for the MongoDB database.

        JWT_SECRET_CLIENTS
        Description: The secret key used to sign and verify JSON Web Tokens (JWT) for client authentication.

        JWT_SECRET_ADMINS
        Description: The secret key used to sign and verify JSON Web Tokens (JWT) for admin authentication.

        Description: The port on which the server will listen for incoming requests.

        VITE_API_URL
        Description: The base URL for the API, used in the frontend for making requests to the backend.

        Usage Notes
        Security: Never hard-code sensitive information (e.g., passwords, keys) directly into your codebase. Use environment
        variables to keep them secure.
        File Location: The .env file should be located in the root directory of the project.
        File Exclusion: Ensure the .env file is included in your .gitignore to prevent it from being pushed to version
        control.

    server.js    
        This file is the main entry point for the backend server of the project. It sets up the Express application, connects 
        to the database, configures middleware, and defines API routes.

        Key Features:
        Environment Variables:

        Uses dotenv to load environment variables from a .env file for configuration.
        Database Connection:

        Calls connectDB() to establish a connection to the MongoDB database.
        Middleware:

        CORS: Enables Cross-Origin Resource Sharing to allow communication between frontend and backend.
        Body Parsing: Uses express.json() to parse incoming JSON requests.
        Static Files: Serves uploaded files from the /uploads directory.
        Routes: The server is structured around modular route handlers, each corresponding to a specific resource or 
        functionality:

        /client: Handles client-related operations.
        /admin: Manages administrator-related operations.
        /drinkC: Routes for managing drink categories.
        /drink: Handles drink-related operations.
        /dishC: Routes for managing dish categories.
        /dish: Handles dish-related operations.
        /provider: Manages provider data.
        /stock: Routes for inventory management.
        /menu: Handles menu-related endpoints.
        /orderDetail: Manages detailed order operations.
        /order: Handles order-related operations.
        /saleDetail: Routes for managing detailed sales information.
        /sale: Handles sale operations.
        /typeDish: Manages dish types.
        Static Route: /uploads serves files from the uploads directory.

        Port Configuration:
        The server listens on the port specified in the .env file (PORT) or defaults to 3001 if not defined.

        Usage:
        Ensure all dependencies (express, dotenv, cors) are installed.
        Configure the .env file with appropriate values, including MONGO_URI and PORT.

        Run the server using: node server.js
        The server will start and log the port it's running on.

        When running successfully, the server logs:
        "Servidor corriendo en el puerto 3001"

>>frontend
    assets
        it contains the assets used on the project (images in this case)

    components

    AboutUsCarpet

        information us
            The InformationUs React component is designed to showcase detailed information about the "El Álamo" sodita. This 
            component uses Material-UI (MUI) for layout and styling, offering a modern, responsive, and visually appealing 
            design.

            Key Features:
            Layout and Styling:

            Utilizes Material-UI's Box, Container, and Grid components for a responsive layout.
            Cards (Card, CardMedia, CardContent) present information with a clean, professional look.
            Custom fonts and colors (e.g., 'Patrick Hand', cursive and green tones) align with the branding.
            Content Structure:

            Title Section:
            Displays the main title, "Sobre Nosotros," with styled typography for emphasis.
            Description:
            Provides a welcoming message describing the essence of "El Álamo," focusing on Costa Rican cuisine and values.
            Three Thematic Sections:
            Nuestra Historia:
            Highlights the origins of "El Álamo," emphasizing its reputation and philosophy of cooking with love.
            Quiénes Somos:
            Introduces the team, emphasizing the preservation of traditional recipes and the use of fresh, local ingredients.
            Nuestro Objetivo:
            Focuses on the goal of creating an inviting space with authentic flavors inspired by local produce and family 
            traditions.
            Interactive Design:

            Cards include a hover effect for enhanced user interaction, scaling slightly when hovered over.
            Media Integration:

            Displays images (historia.jpg, soda.jpg, soda2.jpg) that correspond to the thematic sections, enhancing the
            storytelling.

    Contacto
        ContactForm
            This file implements a Contact Form using React and Material-UI components. The primary purpose of this component
            is to allow users to submit their feedback or inquiries through a dynamic and user-friendly interface.

            Key Features:
            Dynamic Form Fields: Includes fields for the user's name, last name, email, phone number, and a message.
            Real-Time Validation: Ensures all fields are filled, and terms and conditions are accepted before submission.
            Email Integration: Utilizes the emailjs-com library to send form data via email.
            Material-UI Components: Implements a visually appealing design using Material-UI's Box, Typography, TextField,
            Checkbox, and other components.
            Responsive Layout: Adapts to different screen sizes, providing an optimal user experience on various devices.
            Error Handling: Displays an alert message if form validation fails.
            Togglable Form Visibility: Users can show or hide the form with a button click, reducing visual clutter.
            Terms and Conditions Modal: Displays a modal dialog with terms and conditions for user review.
            Code Breakdown:
            State Management: The component uses React's useState to handle:
            Form data.
            Form visibility.
            Error messages.
            Terms acceptance status.
            Modal display state.
            Custom Styles: Inline styling provides a consistent color palette and design inspired by the brand's identity.
            Form Submission Logic:
            Validates input fields and terms agreement.
            Sends data using EmailJS and resets the form upon success.
            Icons for Input Fields: Utilizes Material-UI icons (Person, Email, Phone, Message) as adornments for input
            fields, improving user experience.
            Dependencies:
            React
            Material-UI
            EmailJS (emailjs-com)
            This component demonstrates an effective way to integrate a functional and visually appealing contact form into a
            React application. It emphasizes accessibility, usability, and aesthetic consistency.

        ContactUs
            This file implements a Contact Us section featuring an interactive map using the React-Leaflet library. The component displays the business's location, allowing users to identify where the business is situated.

            Key Features:
            Interactive Map: Leverages the react-leaflet library to render a map that supports panning and zooming.
            Location Marker: Highlights the business's exact location with a marker and provides additional information via a
            popup.
            Customizable Styling: Incorporates a clean and branded layout with green accents to match the application's theme.
            OpenStreetMap Integration: Uses OpenStreetMap tiles for high-quality, open-source map visuals.
            Simple and Responsive Design:
            The map is styled with dynamic width and height for compatibility across devices.
            Content is centrally aligned for clarity and ease of use.
            Code Breakdown:
            Positioning and Zoom:
            The position variable specifies the latitude and longitude of the business's location.
            The zoom variable determines the default zoom level when the map is rendered.
            Map Features:
            MapContainer: Defines the map’s size and behavior.
            TileLayer: Specifies the map's base layer, sourced from OpenStreetMap.
            Marker: Indicates the location on the map.
            Popup: Displays additional information when the marker is clicked.
            Styling:
            The component uses inline styles for simplicity and consistency, emphasizing green tones to align with the brand
            identity.  

    context  
        authContext     
            The AuthProvider component is a crucial part of the authentication system in this project. It leverages React's 
            Context API to manage and share authentication state across the application. Here's an overview of its key 
            features and functionality:

            Key Features:
            Authentication State Management:

            Tracks the current user and their authentication status.
            Stores user information in a React useState hook.
            Token Handling:

            Retrieves the JSON Web Token (JWT) from sessionStorage upon application load.
            Decodes the JWT using the jwtDecode utility to extract user data.
            Login and Logout Functions:

            Login: Decodes the token, updates the user state, and saves the token in sessionStorage.
            Logout: Clears the user state, removes the token from sessionStorage, and navigates the user to the login page.
            Role-Based Authorization:

            Exposes an isAdmin property that determines if the logged-in user has administrative privileges.
            Global Availability:

            Provides the AuthContext to child components, enabling them to access the authentication state and methods 
            without prop drilling.
            Code Breakdown:
            AuthContext:

            Created using createContext().
            Enables easy access to authentication data through the useAuth hook.
            useEffect Hook:

            Checks for an existing JWT in sessionStorage when the component mounts.
            Attempts to decode the token and updates the user state.
            Handles invalid or expired tokens by removing them from storage.
            Context Value:

            Exposes user, login, logout, and isAdmin to child components.

            Benefits:
            Centralized Authentication Logic: Simplifies managing login, logout, and user data.

            Secure Token Storage: Uses sessionStorage to store tokens temporarily, reducing the risk of unauthorized access.
            Role-Based Access: Facilitates differentiating user privileges with the isAdmin flag.

            Notes:
            Ensure the JWT structure includes a role field for isAdmin functionality to work as expected.
            Consider adding token expiration handling to enhance security.
            jwtDecode must be correctly imported, as the function is not a default export:
            javascript
            Copiar código

            The AuthProvider component is essential for managing authentication in a scalable and maintainable way, making it 
            a cornerstone of this project's security infrastructure.

        providerContext

    menuPersonalizable
        ordenPersonalizada

            Font Code
            import { useState } from "react"; 
            // Import the `useState` hook to manage component state.

            import { 
                Button, 
                ButtonGroup, 
                FormControlLabel, 
                Checkbox, 
                Typography, 
                Box, 
                Container, 
                List, 
                ListItem, 
                ListItemText 
            } from "@mui/material"; 
            // Import Material-UI components for styling and layout.

            const OrdenPersonalizada = () => {
                // Component definition for "Orden Personalizada".

                const [selectedItems, setSelectedItems] = useState([]);
                // State to keep track of selected items for the custom order.

                const [currentCategory, setCurrentCategory] = useState("bebidas");
                // State to manage the currently selected category (default is "bebidas").

                const items = {
                    bebidas: ["Cerveza", "Vino", "Refresco"],
                    comida: ["Pizza", "Hamburguesa", "Pasta"],
                    ensaladas: ["Cesar", "Fruta", "Mediterránea"],
                };
                // An object containing categories and their respective items.

                const handleCheckboxChange = (item) => {
                    // Function to handle checkbox selection and deselection.
                    setSelectedItems((prevItems) =>
                        prevItems.includes(item)
                            ? prevItems.filter((i) => i !== item) // Remove the item if it's already selected.
                            : [...prevItems, item] // Add the item if it's not selected.
                    );
                };

                return (
                    <Box sx={{ fontFamily: "'Patrick Hand', cursive", color: "#008000", padding: 2 }}>
                        {/* Root container with custom font and green color styling. */}

                        <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 3 }}>
                            Orden Personalizada
                        </Typography>
                        {/* Header for the component, centered and styled. */}

                        <Container sx={{ textAlign: "center", marginBottom: 3 }}>
                            <ButtonGroup variant="outlined">
                                {/* Button group to switch between categories. */}

                                <Button
                                    onClick={() => setCurrentCategory("bebidas")}
                                    sx={{
                                        color: "#fff",
                                        fontFamily: "'Patrick Hand', cursive",
                                        backgroundColor: "#008000",
                                        "&:hover": { backgroundColor: "#014701" },
                                    }}
                                >
                                    Bebidas
                                </Button>
                                {/* Button to set the category to "bebidas". */}

                                <Button
                                    onClick={() => setCurrentCategory("comida")}
                                    sx={{
                                        color: "#fff",
                                        fontFamily: "'Patrick Hand', cursive",
                                        backgroundColor: "#008000",
                                        "&:hover": { backgroundColor: "#014701" },
                                    }}
                                >
                                    Comida
                                </Button>
                                {/* Button to set the category to "comida". */}

                                <Button
                                    onClick={() => setCurrentCategory("ensaladas")}
                                    sx={{
                                        color: "#fff",
                                        fontFamily: "'Patrick Hand', cursive",
                                        backgroundColor: "#008000",
                                        "&:hover": { backgroundColor: "#014701" },
                                    }}
                                >
                                    Ensaladas
                                </Button>
                                {/* Button to set the category to "ensaladas". */}
                            </ButtonGroup>
                        </Container>

                        <Box sx={{ marginBottom: 3, padding: 2 }}>
                            {/* Display checkboxes for items in the current category. */}
                            {items[currentCategory].map((item) => (
                                <FormControlLabel
                                    key={item}
                                    control={
                                        <Checkbox
                                            sx={{
                                                color: "#008000",
                                                "&.Mui-checked": { color: "#014701" },
                                            }}
                                            onChange={() => handleCheckboxChange(item)}
                                        />
                                    }
                                    label={
                                        <Typography sx={{ fontFamily: "'Patrick Hand', cursive", color: "#008000" }}>
                                            {item}
                                        </Typography>
                                    }
                                />
                            ))}
                        </Box>

                        <Container sx={{ textAlign: "center", marginTop: 3 }}>
                            <Typography variant="h5" sx={{ marginBottom: 2 }}>
                                Tu Orden
                            </Typography>
                            {/* Section to display selected items. */}
                            <List sx={{ border: "1px solid #008000", borderRadius: 2, padding: 1 }}>
                                {selectedItems.length > 0 ? (
                                    selectedItems.map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemText
                                                primary={item}
                                                sx={{ fontFamily: "'Patrick Hand', cursive", color: "#008000" }}
                                            />
                                        </ListItem>
                                    ))
                                ) : (
                                    <Typography variant="body1" sx={{ fontFamily: "'Patrick Hand', cursive", color: "#008000" }}>
                                        No hay elementos seleccionados.
                                    </Typography>
                                )}
                            </List>
                        </Container>
                    </Box>
                );
            };

            export default OrdenPersonalizada;
            // Export the component for use in other parts of the application.


            The OrdenPersonalizada.js file defines a React functional component that allows users to customize their orders by selecting items from different categories (e.g., beverages, food, and salads). It uses Material-UI for styling and layout, ensuring a clean and user-friendly interface.

            Purpose:
            This component provides an interactive way for users to select items from predefined categories and view their personalized order in real time.

            Features:
            State Management:

            selectedItems: Tracks the items selected by the user.
            currentCategory: Keeps track of the currently active category.
            Categories:

            The available categories and their respective items are defined in the items object:
            Bebidas: Cerveza, Vino, Refresco.
            Comida: Pizza, Hamburguesa, Pasta.
            Ensaladas: Cesar, Fruta, Mediterránea.
            Dynamic Category Switching:

            Users can toggle between categories (bebidas, comida, ensaladas) using buttons styled with Material-UI's ButtonGroup.
            Item Selection:

            Items within the selected category are displayed as checkboxes.
            The handleCheckboxChange function dynamically updates the selected items list when a checkbox is toggled.
            Order Summary:

            Displays a list of selected items.
            If no items are selected, it shows a friendly message: "No hay elementos seleccionados."
            UI and Styling:
            Uses Material-UI components like Button, Typography, Checkbox, and List for a polished interface.
            Styling emphasizes:
            A playful font: 'Patrick Hand', cursive.
            Green color palette (#008000 and #014701) for a fresh and inviting feel.
            Hover effects on category buttons for better interactivity.

        AdminComponent

            Font Code
            import React, { useState, useEffect } from 'react'; 
            // Import React and its hooks for managing state and lifecycle methods.

            import { 
                Container, 
                Grid, 
                Button, 
                Typography, 
                CssBaseline, 
                GlobalStyles 
            } from '@mui/material'; 
            // Import Material-UI components for layout and styling.

            import { 
                FaHome, 
                FaSignOutAlt, 
                FaFileAlt, 
                FaBell, 
                FaUserAlt, 
                FaList 
            } from 'react-icons/fa'; 
            // Import icons from the react-icons library for menu options.

            import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'; 
            // Import routing utilities from React Router.

            import { jwtDecode } from 'jwt-decode'; 
            // Import a JWT decoding utility to extract token information.

            import { toast } from 'react-toastify'; 
            // Import a library to display toast notifications.

            const AdminPage = () => {
            const location = useLocation(); 
            // Hook to get the current route location.

            const navigate = useNavigate(); 
            // Hook to programmatically navigate between routes.

            const [admin, setAdmin] = useState(null); 
            // State to store admin information decoded from the token.

            useEffect(() => {
                const codedToken = sessionStorage.getItem('token'); 
                // Retrieve the token from session storage.

                if (!codedToken) {
                // If the token is missing, log an error and exit the function.
                console.error('No se encontró token en sessionStorage');
                return;
                }

                try {
                const decodedToken = jwtDecode(codedToken); 
                // Decode the token to extract admin information.

                setAdmin(decodedToken); 
                // Store decoded token information in the admin state.

                sessionStorage.setItem('adminName', decodedToken.name); 
                // Store admin name in session storage for future use.

                toast.success(`Bienvenida, ${decodedToken.name || 'Administrador'}!`); 
                // Display a success toast notification welcoming the admin.
                } catch (error) {
                console.error('Error al desencriptar token:', error); 
                // Log an error if decoding fails.
                }
            }, []); 
            // Run this effect only once when the component is mounted.

            const handleLogout = () => {
                // Function to handle logout.
                sessionStorage.removeItem('token'); 
                // Remove the token from session storage.

                sessionStorage.removeItem('adminName'); 
                // Remove the admin name from session storage.

                navigate('/login'); 
                // Redirect the user to the login page.
            };

            return (
                <>
                <CssBaseline />
                {/* Normalize browser styles for consistent design. */}

                <GlobalStyles
                    styles={{
                    body: { fontFamily: "'Patrick Hand', cursive" },
                    '*': { fontFamily: "'Patrick Hand', cursive" },
                    }}
                />
                {/* Apply a global custom font style using Material-UI's GlobalStyles. */}

                <Container
                    maxWidth="xl"
                    sx={{
                    backgroundColor: '#fafafa',
                    minHeight: '100vh',
                    padding: 2,
                    }}
                >
                    <Grid container spacing={2}>
                    {/* Grid container for sidebar and content sections. */}

                    <Grid
                        item
                        xs={12} sm={3} md={2}
                        sx={{
                        background: 'linear-gradient(180deg, #3f51b5, #1a237e)',
                        color: 'white',
                        minHeight: '100vh',
                        padding: 2,
                        borderRadius: 2,
                        }}
                    >
                        {/* Sidebar for navigation menu with a vertical gradient background. */}

                        <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
                        Admin Panel
                        </Typography>
                        {/* Sidebar title. */}

                        <Typography variant="body1" sx={{ textAlign: 'center', mb: 3 }}>
                        {admin ? `Bienvenido, ${admin.name}` : 'Bienvenido'}
                        </Typography>
                        {/* Display admin's name if available, otherwise show a default greeting. */}

                        {/* Navigation buttons for different sections of the admin panel. */}
                        <Button
                        fullWidth
                        startIcon={<FaHome />}
                        sx={{
                            color: location.pathname === '/admin' ? '#ffeb3b' : 'white',
                            mb: 2,
                        }}
                        component={Link}
                        to="/admin"
                        >
                        Inicio
                        </Button>
                        <Button
                        fullWidth
                        startIcon={<FaFileAlt />}
                        sx={{
                            color: location.pathname === '/admin/almacen' ? '#ffeb3b' : 'white',
                            mb: 2,
                        }}
                        component={Link}
                        to="/admin/almacen"
                        >
                        Almacén
                        </Button>
                        <Button
                        fullWidth
                        startIcon={<FaBell />}
                        sx={{
                            color: location.pathname === '/admin/ordenes' ? '#ffeb3b' : 'white',
                            mb: 2,
                        }}
                        component={Link}
                        to="/admin/ordenes"
                        >
                        Órdenes
                        </Button>
                        <Button
                        fullWidth
                        startIcon={<FaUserAlt />}
                        sx={{
                            color: location.pathname === '/admin/clientes' ? '#ffeb3b' : 'white',
                            mb: 2,
                        }}
                        component={Link}
                        to="/admin/clientes"
                        >
                        Clientes
                        </Button>
                        <Button
                        fullWidth
                        startIcon={<FaList />}
                        sx={{
                            color: location.pathname === '/admin/opciones' ? '#ffeb3b' : 'white',
                            mb: 2,
                        }}
                        component={Link}
                        to="/admin/opciones"
                        >
                        Opciones
                        </Button>
                        <Button
                        fullWidth
                        startIcon={<FaSignOutAlt />}
                        sx={{
                            color: 'white',
                            mt: 4,
                        }}
                        onClick={handleLogout}
                        >
                        Salir
                        </Button>
                        {/* Logout button at the bottom of the sidebar. */}
                    </Grid>

                    <Grid
                        item
                        xs={12} sm={9} md={10}
                        sx={{ padding: 2 }}
                    >
                        <Outlet />
                        {/* Render nested routes here for admin panel sections. */}
                    </Grid>
                    </Grid>
                </Container>
                </>
            );
            };

            export default AdminPage;
            // Export the AdminPage component for use in the app.

            The AdminPage.js file defines a React component that serves as the administrative panel for an application. It incorporates routing, authentication, and a responsive design using Material-UI and React Router. The component enables an admin user to navigate between various sections and manage the application efficiently.

            Purpose
            This file provides a structured admin interface for managing different sections, such as orders, clients, and inventory. It also includes functionality for user authentication and session management.

            Features
            State and Lifecycle Management:

            admin: Stores decoded admin data from a JWT token.
            useEffect: Retrieves and decodes the admin's JWT token upon component mount. Displays a welcome message if the token is valid.
            Token Handling:

            Retrieves the JWT token from sessionStorage.
            Decodes the token using jwtDecode to fetch admin details.
            Displays a toast notification welcoming the admin.
            Routing and Navigation:

            Uses react-router-dom for navigation.
            Sidebar buttons allow navigation to sections like:
            Home (/admin)
            Inventory (/admin/almacen)
            Orders (/admin/ordenes)
            Clients (/admin/clientes)
            Options (/admin/opciones)
            Displays the currently active route using a visual indicator (highlighted in yellow).
            Logout Functionality:

            Removes the token and admin name from sessionStorage.
            Redirects the admin to the login page.
            Styling:

            Material-UI components (Grid, Button, Typography, Container) ensure a modern and responsive layout.
            Sidebar features a vertical gradient background with intuitive navigation icons (e.g., FaHome, FaSignOutAlt from react-icons).
            Consistent typography using the playful 'Patrick Hand', cursive font.
            Nested Routes:

            Uses the Outlet component to dynamically render the content of the selected admin panel section.

        almacen

            Font Code
            // Importing necessary components and libraries
            import {
            Select,
            InputLabel,
            FormControl,
            Card,
            Typography,
            TextField,
            Button,
            TableContainer,
            Paper,
            Table,
            TableHead,
            TableRow,
            TableCell,
            TableBody,
            MenuItem,
            } from "@mui/material"; // Material-UI components for styling and layout
            import React, { useState, useEffect } from "react"; // React library and hooks
            import { ToastContainer, toast } from "react-toastify"; // Toast notifications for feedback
            import "react-toastify/dist/ReactToastify.css"; // Toastify styles
            import { getDishCategory } from "../services/Dishcategory"; // API function to get dish categories
            import { getAllTypeDish } from "../services/typeDish"; // API function to get types of dishes
            import { postDish, getDish } from "../services/Dish"; // API functions for dishes

            // Component for managing dishes
            const Almacen = () => {
            // State for managing form inputs and data
            const [formData, setFormData] = useState({
                dishName: "",
                dishDescription: "",
                dishPrice: "",
                image: null,
                dishCategory: "",
                typeDish: "",
            });

            const [dishes, setDishes] = useState([]); // List of dishes
            const [categories, setCategories] = useState([]); // List of categories
            const [typeDishes, setTypeDishes] = useState([]); // List of dish types

            // Fetch initial data when the component is mounted
            useEffect(() => {
                fetchCategoryDish(); // Load dish categories
                fetchTypeDishes(); // Load dish types
                fetchDishes(); // Load existing dishes
            }, []);

            // Fetch dish categories from the API
            const fetchCategoryDish = async () => {
                try {
                const dishCategories = await getDishCategory();
                setCategories(dishCategories);
                } catch (error) {
                toast.error("Error al cargar las categorías.");
                console.error("Error al cargar las categorías:", error);
                }
            };

            // Fetch dish types from the API
            const fetchTypeDishes = async () => {
                try {
                const response = await getAllTypeDish();
                setTypeDishes(response);
                } catch (error) {
                toast.error("Error al cargar los tipos de platillos.");
                console.error("Error al cargar los tipos de platillos:", error);
                }
            };

            // Fetch existing dishes from the API
            const fetchDishes = async () => {
                try {
                const response = await getDish();
                setDishes(response || []);
                } catch (error) {
                toast.error("Error al cargar los platillos.");
                console.error("Error al cargar los platillos:", error);
                }
            };

            // Handle changes in form inputs
            const handleInputChange = (e) => {
                const { name, value } = e.target;
                setFormData({ ...formData, [name]: value });
            };

            // Handle changes in file input
            const handleFileChange = (e) => {
                const file = e.target.files[0];
                setFormData({ ...formData, image: file });
            };

            // Validate form before submission
            const validateForm = () => {
                const { dishName, dishDescription, dishPrice, dishCategory, typeDish, image } = formData;

                if (!dishName) {
                toast.error("El nombre del platillo es obligatorio.");
                return false;
                }
                if (!dishDescription) {
                toast.error("La descripción del platillo es obligatoria.");
                return false;
                }
                if (!dishPrice || dishPrice <= 0) {
                toast.error("El precio del platillo debe ser mayor a 0.");
                return false;
                }
                if (!dishCategory) {
                toast.error("Selecciona una categoría para el platillo.");
                return false;
                }
                if (!typeDish) {
                toast.error("Selecciona un tipo de platillo.");
                return false;
                }
                if (!image) {
                toast.error("Debes cargar una imagen para el platillo.");
                return false;
                }

                return true; // All validations passed
            };

            // Handle form submission
            const handleSubmit = async (e) => {
                e.preventDefault();

                if (!validateForm()) {
                return; // Stop if validation fails
                }

                const data = new FormData(); // Create a FormData object for file upload
                data.append("dishName", formData.dishName);
                data.append("dishDescription", formData.dishDescription);
                data.append("dishPrice", formData.dishPrice);
                data.append("dishCategory", formData.dishCategory);
                data.append("typeDish", formData.typeDish);
                data.append("image", formData.image);

                try {
                await postDish(data); // Send data to API
                toast.success("Platillo agregado exitosamente.");
                fetchDishes(); // Reload dishes after adding
                // Reset form
                setFormData({
                    dishName: "",
                    dishDescription: "",
                    dishPrice: "",
                    image: null,
                    dishCategory: "",
                    typeDish: "",
                });
                } catch (error) {
                toast.error(
                    error.response?.data?.message || "Error al agregar el platillo."
                );
                console.error("Error al agregar el platillo:", error);
                }
            };

            // JSX rendering the UI
            return (
                <>
                {/* Toast notification container */}
                <ToastContainer position="top-right" autoClose={3000} />
                
                {/* Form card */}
                <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
                    <Typography variant="h5" gutterBottom>
                    Agregar Platillos
                    </Typography>
                    <form onSubmit={handleSubmit}>
                    {/* Input fields for dish details */}
                    <TextField
                        fullWidth
                        label="Nombre del Platillo"
                        name="dishName"
                        value={formData.dishName}
                        onChange={handleInputChange}
                        sx={{ mb: 2 }}
                    />
                    {/* ...other form controls */}
                    </form>
                    
                    {/* Table to display dishes */}
                    <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 2 }}>
                    {/* ...table content */}
                    </TableContainer>
                </Card>
                </>
            );
            };

            export default Almacen;

            The Almacen.js file defines a React component for managing dishes within an application. It provides an interface to add, display, and validate dish details, integrating with APIs for CRUD operations. The component leverages Material-UI for styling and layout, ensuring a professional and responsive design.

            Purpose
            The purpose of this file is to enable administrators or managers to interact with the dish inventory system. It supports creating new dishes, validating input data, and displaying existing dishes in a tabular format.

            Features
            Form Management:

            Includes input fields for:
            Dish name
            Description
            Price
            Category
            Type
            Image
            Uses useState to manage form data and reset fields after successful submissions.
            Validates form inputs before sending them to the API.
            API Integration:

            Fetches:
            Dish categories using getDishCategory.
            Dish types using getAllTypeDish.
            Existing dishes using getDish.
            Posts new dishes to the API using postDish.
            Handles API errors gracefully, displaying toast notifications for user feedback.
            Data Presentation:

            Displays existing dishes in a Material-UI table.
            Includes columns for details such as name, description, price, category, and type.
            Toast Notifications:

            Utilizes react-toastify for user feedback on actions like successful submissions or errors.
            Responsive Design:

            Material-UI components (Card, Table, TextField, Button) ensure a modern and clean layout.
            Styled using Material-UI's sx prop for custom spacing, shadows, and borders.
            File Handling:

            Supports image uploads using a file input.
            Uses FormData for sending multipart/form-data requests to the API.
            Stateful Management:

            categories: Stores dish categories.
            typeDishes: Stores dish types.
            dishes: Stores the list of existing dishes.
            Workflow
            Fetching Initial Data:

            On component mount, fetches dish categories, types, and existing dishes using useEffect.
            Adding a Dish:

            The user fills out the form and uploads an image.
            On form submission:
            Input data is validated.
            Data is sent to the API using postDish.
            Toast notifications provide feedback on success or errors.
            Displaying Dishes:

            Existing dishes are fetched and displayed in a table.
            Each row shows detailed information for a dish.


        CardHome

            Font Code
            import React from "react";
            import {
                Box, // MUI container component for layout with padding, margin, and other styles.
                Typography, // MUI component for text styles like headings or paragraphs.
                Grid, // MUI grid system for responsive layouts.
                Card, // MUI component for creating a card layout.
                CardContent, // Container for content inside a Card.
                CardMedia, // Component for displaying media (e.g., images) in a Card.
                Link as MuiLink, // MUI link component for stylized hyperlinks.
            } from "@mui/material";
            import { Link } from "react-router-dom"; // React Router's `Link` component for navigation.

            import casado from "../assets/casado.jpeg"; // Importing image assets to display.
            import pinto from "../assets/pinto.jpeg";
            import gordonblue from "../assets/gordonblue.jpg";
            import empanadas from "../assets/Empanadas.jpg";
            import olladecarne from "../assets/olladecarne.jpg";
            import tortillas from "../assets/tortillas.jpg";
            import sopademariscos from "../assets/sopademariscos.jpg";
            import tamales from "../assets/tamal.png";
            import chicharrones from "../assets/chicharrones.jpg";

            const CardHome = () => {
                // Array of dish objects containing details like title, description, category, and image.
                const dishes = [
                    {
                        title: "Casado",
                        description: "Arroz, Frijoles, Bistec de cerdo, Platano frito, Ensalada",
                        category: "Categoria: Almuerzo",
                        imgSrc: casado, // Image source for the dish.
                    },
                    {
                        title: "Pinto",
                        description: "Delicioso Pinto, con platano frito, queso frito, huevo y natilla",
                        category: "Categoria: Desayuno",
                        imgSrc: pinto,
                    },
                    {
                        title: "Gordon Blue de Pollo",
                        description: "Pechugas de pollo o carne de cerdo, rellenas de jamón y queso",
                        category: "Categoria: Cena",
                        imgSrc: gordonblue,
                    },
                    {
                        title: "Tortillas Palmeada",
                        description: "Tortillas de mano caseras",
                        category: "Desayuno",
                        imgSrc: tortillas,
                    },
                    {
                        title: "Sopa de Mariscos",
                        description: "Camarones, mejillones, almejas, calamares y pescado, todo cocido en un caldo sabroso",
                        category: "Almuerzo",
                        imgSrc: sopademariscos,
                    },
                    {
                        title: "Empanadas",
                        description: "Carne, pollo, jamón y queso",
                        category: "Desayuno",
                        imgSrc: empanadas,
                    },
                    {
                        title: "Olla de Carne",
                        description: "Trozos de carne de res con zanahorias, chayote, yuca, papa, y maíz tierno.",
                        category: "Almuerzo",
                        imgSrc: olladecarne,
                    },
                    {
                        title: "Tamales",
                        description: "Tamales de cerdo, pollo, y entre otras variaciones",
                        category: "3 Tiempos de comida",
                        imgSrc: tamales,
                    },
                    {
                        title: "Chicharrones",
                        description: "Trozos de carne de cerdo fritos, crujientes por fuera y jugosos por dentro.",
                        category: "Cena",
                        imgSrc: chicharrones,
                    },
                ];

                return (
                    <Box sx={{ py: 4, backgroundColor: "#f8f9fa" }}> {/* Main container with padding and background color */}
                        <Typography
                            variant="h4"
                            align="center"
                            gutterBottom
                            sx={{
                                fontFamily: "'Nerko One', cursive", // Custom font style.
                                color: "#008000", // Green text color.
                                mb: 4, // Bottom margin.
                            }}
                        >
                            Conoce nuestro{" "} {/* Header text with a link to the menu page. */}
                            <MuiLink
                                component={Link} // Uses React Router's `Link` for navigation.
                                to="/Menu" // Navigates to the menu page.
                                sx={{
                                    color: "#007bff", // Blue link color.
                                    textDecoration: "none",
                                    "&:hover": { textDecoration: "underline" }, // Underline on hover.
                                }}
                            >
                                menú
                            </MuiLink>
                        </Typography>
                        <Grid container spacing={3} justifyContent="center"> {/* Responsive grid layout */}
                            {dishes.map((dish, index) => ( // Loop through each dish object.
                                <Grid item xs={12} sm={6} md={4} key={index}> {/* Adjust grid size based on screen width */}
                                    <Card
                                        sx={{
                                            display: "flex", // Flex layout for Card.
                                            alignItems: "center",
                                            boxShadow: 3, // Box shadow effect.
                                            "&:hover": { boxShadow: 6 }, // Highlight effect on hover.
                                            p: 2, // Padding inside the card.
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={dish.imgSrc} // Sets the image source.
                                            alt={dish.title} // Alternate text for the image.
                                            sx={{
                                                width: 100, // Fixed width for the image.
                                                height: 150, // Fixed height.
                                                borderRadius: "5%", // Rounded corners.
                                                objectFit: "cover", // Ensures the image fits within its dimensions.
                                                mr: 2, // Margin-right for spacing.
                                            }}
                                        />
                                        <CardContent> {/* Container for the text inside the card */}
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontFamily: "'Nerko One', cursive", // Custom font.
                                                    color: "#008000", // Green text color.
                                                }}
                                            >
                                                {dish.title} {/* Dish title */}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "#333", // Dark gray text color.
                                                }}
                                            >
                                                {dish.description} {/* Dish description */}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontStyle: "italic", // Italicized text.
                                                    color: "#555", // Light gray color for category.
                                                }}
                                            >
                                                {dish.category} {/* Dish category */}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                );
            };

            export default CardHome; // Exporting the component for use in other parts of the app.

            The CardHome.js file defines a React component designed to showcase a collection of dishes in a visually appealing card-based layout. It highlights key details such as the name, description, category, and image of each dish, providing users with an interactive preview of a restaurant's menu.

            Purpose
            The purpose of this component is to serve as a dynamic display for popular dishes, promoting engagement and guiding users to explore the full menu.

            Features
            Dynamic Content Display:

            Each card dynamically renders dish data (title, description, category, and image) from an array of dish objects.
            Interactive Design:

            Cards feature hover effects for increased visual feedback.
            The menu header includes a clickable link that directs users to the full menu page.
            Responsiveness:

            Uses a grid layout (Grid component) to ensure the cards adjust seamlessly across different screen sizes.
            Material-UI Components:

            Leverages Material-UI (Box, Typography, Card, CardContent, CardMedia, Grid) for a consistent and modern design aesthetic.
            Styling:

            Custom styles (sx prop) for:
            Typography fonts and colors.
            Card hover effects (elevated shadows).
            Media elements with rounded corners and proportional scaling.
            Navigation Integration:

            Includes a link (MuiLink) that integrates with react-router-dom for seamless navigation to the menu page.
            Themed Visuals:

            Maintains a consistent theme with green highlights for dish titles and a blue hyperlink for the menu link, enhancing the visual appeal.
            Component Breakdown
            Dish Array:

            An array of objects containing the following properties for each dish:
            title: Name of the dish.
            description: Short description of the dish.
            category: Dish category (e.g., Breakfast, Lunch, Dinner).
            imgSrc: Path to the image representing the dish.
            Header Section:

            A headline encouraging users to explore the full menu.
            Styled with a playful font ('Nerko One') and clickable navigation.
            Card Layout:

            Each card includes:
            An image (CardMedia) with a defined size and rounded corners.
            Content (CardContent) showing the title, description, and category of the dish.
            Grid System:

            Arranges cards in a responsive grid with customizable spacing.
            Workflow
            Render Dish Cards:

            Maps over the dishes array to generate a card for each dish.
            Uses index as the unique key for each Grid item.
            Navigate to Menu:

            Provides a styled link for users to access the complete menu.

        Carrusel

            Font Code
            import { useState } from 'react'; // Importing React's useState hook for managing component state.
            import Carousel from 'react-bootstrap/Carousel'; // Importing the Carousel component from React-Bootstrap for slides.
            import img1 from "../assets/casado.jpeg"; // Importing the image for the first slide.
            import img2 from "../assets/arrozconcamarones.jpg"; // Importing the image for the second slide.
            import img3 from "../assets/pinto.jpeg"; // Importing the image for the third slide.
            import '../styles/carrusel.css'; // Importing custom CSS styles for the carousel.

            function Carrusel() {
                const [index, setIndex] = useState(0); // State to track the active slide's index. Default is 0.

                // Function to handle slide selection changes.
                const handleSelect = (selectedIndex) => {
                    setIndex(selectedIndex); // Update the state with the new selected slide's index.
                };

                return (
                    <>
                        <div>
                            <br /> {/* Adds vertical spacing */}
                            <br />
                        </div>
                        <Carousel
                            activeIndex={index} // Sets the currently active slide using the state.
                            onSelect={handleSelect} // Triggered when a slide is selected.
                            className="custom_carousel" // Applies a custom CSS class to the carousel for additional styling.
                        >
                            {/* First slide */}
                            <Carousel.Item>
                                <img 
                                    className="d-block w-100" // Makes the image a block element and sets its width to 100%.
                                    src={img1} // Source of the first image.
                                    alt="Mitad" // Alternate text for accessibility.
                                />
                                <Carousel.Caption> {/* Caption displayed over the image */}
                                    <h3>Casados</h3> {/* Title of the first slide */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                            {/* Second slide */}
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img2} // Source of the second image.
                                    alt="Camarones" // Alternate text for accessibility.
                                />
                                <Carousel.Caption>
                                    <h3>Arroz con Camarones</h3> {/* Title of the second slide */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                            {/* Third slide */}
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img3} // Source of the third image.
                                    alt="Gallo Pinto" // Alternate text for accessibility.
                                />
                                <Carousel.Caption>
                                    <h3>Gallo Pinto</h3> {/* Title of the third slide */}
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </>
                );
            }

            export default Carrusel; // Exports the component for use in other parts of the app.


            The Carrusel.js file implements a carousel component using the react-bootstrap library to create an interactive image slider. This component displays a series of food images with captions for each slide, showcasing dishes like "Casados," "Arroz con Camarones," and "Gallo Pinto."

            Purpose
            The primary purpose of this component is to provide a visually engaging way to display a series of food images, ideal for showcasing menu items or promotional images on a website.

            Features
            Carousel Implementation:

            Uses the react-bootstrap/Carousel component to create a responsive and interactive image slider.
            Image and Caption Display:

            Each carousel item consists of an image (img) and a caption (Carousel.Caption) displaying the dish name.
            Dynamic Image Import:

            Imports image files (img1, img2, img3) from the project's assets, ensuring modular and scalable image handling.
            Custom Styling:

            Utilizes a custom CSS class (custom_carousel) for styling the carousel, as referenced from the carrusel.css file.
            State Management:

            Manages the active slide index (activeIndex) with the help of React's useState hook and updates it using handleSelect.
            Component Breakdown
            Images:

            Three images (img1, img2, img3) represent different dishes displayed in the carousel.
            Carousel Items:

            Each Carousel.Item contains:
            An image rendered using Carousel.Item with the class d-block w-100.
            A caption displaying the dish name, styled with an h3 element.
            State and Event Handling:

            useState hook is used to keep track of the current active index (index), which is updated through the handleSelect function.
            Custom Styling:

            The custom_carousel CSS class, imported from carrusel.css, allows for custom design tweaks.
            Workflow
            Initialization:

            useState(0) sets the initial index of the active slide to 0.
            Handle Selection:

            handleSelect is called whenever the user navigates to a different slide, updating the index state.
            Rendering:

            The Carousel component is rendered with the necessary activeIndex and onSelect props to manage the state and events.

        Clientes

            Font Code
            import React, { useEffect, useState } from 'react'; // Importing necessary modules from React for managing state and side effects.
            import { jwtDecode } from "jwt-decode"; // Importing jwtDecode for decoding JWT tokens.
            import { 
            Card, Typography, TableContainer, Paper, Table, TableHead, 
            TableRow, TableCell, TableBody, Box, Button, TextField, Modal 
            } from '@mui/material'; // Importing Material-UI components for UI elements.
            import { 
            getAllClients, getClientById, updateClient, deleteClient, registerClient 
            } from '../services/client'; // Importing client-related service functions.
            import { toast } from 'react-toastify'; // Importing Toast notifications.
            import { Edit, Delete, Add } from '@mui/icons-material'; // Material UI icons.

            const Clientes = () => {
            const [clientes, setClientes] = useState([]); // State to manage list of clients.
            const [loading, setLoading] = useState(true); // State to manage loading status.
            const [error, setError] = useState(null); // State to manage error messages.
            const [newClientName, setNewClientName] = useState(''); // Input state for new client name.
            const [newClientEmail, setNewClientEmail] = useState(''); // Input state for new client email.
            const [newClientPassword, setNewClientPassword] = useState(''); // Input state for new client password.
            const [open, setOpen] = useState(false); // State for showing deletion confirmation modal.
            const [selectedClient, setSelectedClient] = useState(null); // State for selected client in modals.
            const [openEdit, setOpenEdit] = useState(false); // State for showing edit client modal.
            const [openAdd, setOpenAdd] = useState(false); // State for showing add client modal.

            // Fetching all clients when the component mounts.
            useEffect(() => {
                const fetchClientes = async () => {
                try {
                    setLoading(true); // Setting loading state to true.
                    const data = await getAllClients(); // Fetching all clients.
                    setClientes(data); // Updating state with fetched clients.
                } catch (err) {
                    setError(err.message || 'Error al cargar los clientes'); // Setting error if fetching fails.
                } finally {
                    setLoading(false); // Setting loading state to false after fetching.
                }
                };

                fetchClientes();
            }, []);

            // Handling client update.
            const handleUpdate = async (clientData) => {
                try {
                if (!newClientName && !newClientEmail && !newClientPassword) {
                    toast.error("No hay cambios para guardar."); // Showing error if no data is provided.
                    return;
                }

                const newData = { 
                    clientname: newClientName,
                    clientemail: newClientEmail,
                    clientpassword: newClientPassword 
                };

                const response = await updateClient(clientData._id, newData); // Updating client data.
                if (response) {
                    toast.success("Datos actualizados exitosamente."); // Showing success notification.
                    setClientes(prev => 
                    prev.map(client => 
                        client._id === clientData._id ? { ...client, ...newData } : client
                    )
                    ); // Updating the state with the modified client data.
                } else {
                    toast.error("Respuesta inesperada del servidor."); // Showing error if server response is unexpected.
                }
                } catch (error) {
                console.error("Error al actualizar datos:", error);
                toast.error("Error al conectar con el servidor."); // Showing error in case of connection issues.
                }
            };

            // Handling client deletion.
            const handleDelete = async (cliente) => {
                try {
                const codedToken = sessionStorage.getItem("token"); // Retrieving token from sessionStorage.

                if (!codedToken) {
                    throw new Error("Token not found in sessionStorage"); // Error if token is not found.
                }

                const decodedToken = jwtDecode(codedToken); // Decoding token.
                if (!decodedToken || !decodedToken.id) {
                    throw new Error("Token inválido o no contiene un ID"); // Error if token is invalid or does not contain an ID.
                }

                setLoading(true); // Setting loading state to true.
                const response = await deleteClient(cliente._id); // Deleting client.
                console.log('Client deleted successfully:', response);
                setClientes(prev => prev.filter(c => c._id !== cliente._id)); // Updating the client list.
                } catch (error) {
                console.error('Error deleting the client:', error);
                alert('Failed to delete the client. Please try again.'); // Alerting failure to delete client.
                } finally {
                setLoading(false); // Setting loading state to false after deletion.
                }
            };

            // Handling new client registration.
            const handleUpload = async () => {
                try {
                if (!newClientName || !newClientEmail || !newClientPassword) {
                    toast.error("Por favor, completa todos los campos."); // Showing error if fields are incomplete.
                    return;
                }

                const newData = {
                    clientname: newClientName,
                    clientemail: newClientEmail,
                    clientpassword: newClientPassword,
                };

                const response = await registerClient(newData); // Registering new client.
                if (response) {
                    toast.success("Cliente agregado exitosamente."); // Showing success notification.
                    const updatedClientes = await getAllClients(); // Fetching updated client list.
                    setClientes(updatedClientes); // Updating state with new client data.
                    handleClose();
                } else {
                    toast.error("Respuesta inesperada del servidor."); // Showing error if server response is unexpected.
                }
                } catch (error) {
                console.error("Error al agregar el cliente:", error);
                toast.error("Error al conectar con el servidor."); // Showing error in case of connection issues.
                }
            };

            // Closing all modals and resetting form data.
            const handleClose = () => {
                setOpen(false);
                setOpenEdit(false);
                setOpenAdd(false);
                setSelectedClient(null);
                setNewClientName('');
                setNewClientEmail('');
                setNewClientPassword('');
            };

            // Handling opening of edit modal with client data.
            const handleOpenEdit = (cliente) => {
                setSelectedClient(cliente);
                setNewClientName(cliente.clientname);
                setNewClientEmail(cliente.clientemail);
                setNewClientPassword('');
                setOpenEdit(true);
            };

            // Handling opening of deletion confirmation modal.
            const handleOpen = (cliente) => {
                setSelectedClient(cliente);
                setOpen(true);
            };

            // Handling opening of add client modal.
            const handleOpenAdd = () => {
                setOpenAdd(true);
            };

            return (
                <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
                <Typography variant="h5" gutterBottom>
                    Clientes
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h6">Lista de clientes registrados</Typography>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleOpenAdd}
                    startIcon={<Add />} // Adding "+" icon
                    >
                    Añadir Cliente
                    </Button>
                </Box>

                {loading ? (
                    <Typography sx={{ mt: 2 }}>Cargando...</Typography>
                ) : error ? (
                    <Typography sx={{ mt: 2, color: 'red' }}>Error: {error}</Typography>
                ) : (
                    <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 2 }}>
                    <Table>
                        <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Contraseña</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {clientes.length > 0 ? (
                            clientes.map((cliente) => (
                            <TableRow key={cliente._id}>
                                <TableCell>{cliente.clientname}</TableCell>
                                <TableCell>{cliente.clientemail}</TableCell>
                                <TableCell>*****</TableCell> {/* Masking password */}
                                <TableCell>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    style={{ marginRight: '8px' }}
                                    onClick={() => handleOpenEdit(cliente)}
                                >
                                    <Edit /> {/* Edit icon */}
                                </Button>
                                <Button 
                                    variant="contained" 
                                    color="secondary"
                                    onClick={() => handleOpen(cliente)} 
                                >
                                    <Delete /> {/* Delete icon */}
                                </Button>
                                </TableCell>
                            </TableRow>
                            ))
                        ) : (
                            <TableRow>
                            <TableCell colSpan={4} align="center">
                                No hay clientes registrados.
                            </TableCell>
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                    </TableContainer>
                )}

                {/* Deletion Confirmation Modal */}
                <Modal open={open} onClose={handleClose}>
                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                    <Typography variant="h6">
                        ¿Quieres eliminar este usuario?
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(selectedClient)}>
                        Borrar
                        </Button>
                        <Button variant="contained" onClick={handleClose}>
                        No
                        </Button>
                    </Box>
                    </Box>
                </Modal>

                {/* Edit Client Modal */}
                <Modal open={openEdit} onClose={handleClose}>
                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                    <Typography variant="h6">
                        Editar Cliente
                    </Typography>
                    <Box component="form" onSubmit={(e) => { e.preventDefault(); handleUpdate(selectedClient); handleClose(); }} sx={{ mt: 2 }}>
                        <TextField
                        fullWidth
                        label="Nombre"
                        value={newClientName}
                        onChange={(e) => setNewClientName(e.target.value)}
                        margin="normal"
                        />
                        <TextField
                        fullWidth
                        label="Email"
                        value={newClientEmail}
                        onChange={(e) => setNewClientEmail(e.target.value)}
                        margin="normal"
                        />
                        <TextField
                        fullWidth
                        label="Contraseña"
                        type="password"
                        value={newClientPassword}
                        onChange={(e) => setNewClientPassword(e.target.value)}
                        margin="normal"
                        />
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="contained" color="primary" type="submit">
                            Editar
                        </Button>
                        <Button variant="contained" onClick={handleClose}>
                            Cancelar
                        </Button>
                        </Box>
                    </Box>
                    </Box>
                </Modal>

                {/* Add Client Modal */}
                <Modal open={openAdd} onClose={handleClose}>
                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                    <Typography variant="h6">
                        Añadir Cliente
                    </Typography>
                    <Box component="form" sx={{ mt: 2 }}>
                        <TextField
                        fullWidth
                        label="Nombre"
                        value={newClientName}
                        onChange={(e) => setNewClientName(e.target.value)}
                        margin="normal"
                        />
                        <TextField
                        fullWidth
                        label="Email"
                        value={newClientEmail}
                        onChange={(e) => setNewClientEmail(e.target.value)}
                        margin="normal"
                        />
                        <TextField
                        fullWidth
                        label="Contraseña"
                        type="password"
                        value={newClientPassword}
                        onChange={(e) => setNewClientPassword(e.target.value)}
                        margin="normal"
                        />
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="contained" color="primary" onClick={handleUpload}>
                            Crear Cliente
                        </Button>
                        <Button variant="contained" onClick={handleClose}>
                            Cancelar
                        </Button>
                        </Box>
                    </Box>
                    </Box>
                </Modal>
                </Card>
            );
            };

            export default Clientes; // Exporting the Clientes component.

            The Clientes.js file is a React component designed to manage and display a list of clients, allowing CRUD (Create, Read, Update, Delete) operations. It integrates Material UI components for a sleek and responsive user interface and manages client data through API services.

            Purpose
            The Clientes.js component provides a comprehensive solution for handling client data. It enables users to view, edit, delete, and add new clients, improving data management and user experience for applications involving client interactions.

            Features
            Client Management:

            Displays a list of clients in a table format.
            Supports CRUD operations (Create, Read, Update, Delete) for managing client data.
            Dynamic Data Handling:

            Uses API services (getAllClients, getClientById, updateClient, deleteClient, registerClient) for data retrieval and manipulation.
            State Management:

            Utilizes React's useState and useEffect hooks to manage client data, loading states, and modal visibility.
            UI Components:

            Employs Material UI components such as Card, Typography, Table, TextField, Button, and Modal to create a structured and interactive interface.
            Modal Operations:

            Provides modals for adding, editing, and deleting client information, with appropriate input fields for user interactions.
            Error and Loading Handling:

            Manages API call errors and loading states effectively to enhance the user experience with feedback through Toast notifications.
            Component Breakdown
            State and Data Management:

            clientes: Array holding the list of clients.
            loading: Boolean state indicating data loading status.
            error: State to handle error messages during API calls.
            Form Inputs:

            newClientName, newClientEmail, newClientPassword: Controlled form fields for adding or editing client details.
            CRUD Operations:

            Create: Handles adding new clients via the registerClient function.
            Read: Displays client data in a table.
            Update: Manages editing client details through the handleUpdate function.
            Delete: Handles client deletion via the handleDelete function.
            Modal Management:

            Uses modals for editing and deleting clients, with respective forms for entering and modifying client information.
            Event Handling:

            Functions like handleOpenEdit, handleDelete, and form submission for adding/editing clients manage user interactions.
            Workflow
            Fetching Data:

            useEffect is used to fetch all clients from the API and update the state accordingly.
            Operations:

            CRUD operations are managed through API calls, updating the client list state and providing user feedback via Toast notifications.
            Modals:

            Modals are used for client actions, providing a clear and interactive UI for managing client data.

        Footer

            Font Code
            import React, { useState } from "react"; // Importing React and useState hook for managing state.
            import { Grid2, Box, Container, Typography, Link, IconButton, Collapse, List, ListItem } from "@mui/material"; // Importing Material-UI components for layout and styling.
            import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Importing social media icons.
            import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Importing Material-UI ExpandMoreIcon for collapsible sections.

            const Footer = () => {
            const [toggleInfo, setToggleInfo] = useState(false); // State for toggling 'Información' section.
            const [toggleLinks, setToggleLinks] = useState(false); // State for toggling 'Navegación' section.
            const [toggleSocial, setToggleSocial] = useState(false); // State for toggling 'Redes Sociales' section.

            // Section component for creating collapsible sections.
            const Section = ({ title, toggle, setToggle, children }) => (
                <Grid2 item xs={12} md={4} sx={{ marginBottom: 4 }}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    onClick={() => setToggle(!toggle)} // Toggles the state when section title is clicked.
                    sx={{ cursor: { xs: "pointer", md: "default" } }} // Adjusts cursor style based on screen size.
                >
                    <Typography variant="h6" gutterBottom sx={{ fontFamily: "'Patrick Hand', cursive" }}>
                    {title} {/* Section title */}
                    </Typography>
                    <IconButton size="small" sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}>
                    <ExpandMoreIcon /> {/* Expand icon for mobile view */}
                    </IconButton>
                </Box>
                <Collapse in={toggle || window.innerWidth >= 960}>{children}</Collapse> {/* Collapsible content */}
                </Grid2>
            );

            return (
                <Box component="footer" sx={{ backgroundColor: "#212529", color: "#fff", py: 1 }}>
                <Container>
                    <Grid2 container spacing={10}>
                    {/* Información Section */}
                    <Section title="Información" toggle={toggleInfo} setToggle={setToggleInfo}>
                        <List sx={{ padding: 0 }}>
                        <ListItem>
                            <Typography variant="body2" sx={{ fontFamily: "'Patrick Hand', cursive" }}>
                            Si quieres saber más de nosotros, comunícate por nuestras redes sociales.
                            </Typography>
                        </ListItem>
                        </List>
                    </Section>

                    {/* Navegación Section */}
                    <Section title="Navegación" toggle={toggleLinks} setToggle={setToggleLinks}>
                        <List sx={{ padding: 0 }}>
                        {[ // Navigation items
                            { text: "Sobre Nosotros", link: "/AboutUs" },
                            { text: "Contacto", link: "/Contacto" },
                            { text: "Menú", link: "/Menu" },
                            { text: "Cuenta", link: "/User" },
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ paddingY: 0.5 }}>
                            <Link href={item.link} color="inherit" underline="hover" sx={{ fontFamily: "'Patrick Hand', cursive" }}>
                                {item.text} {/* Navigation link */}
                            </Link>
                            </ListItem>
                        ))}
                        </List>
                    </Section>

                    {/* Redes Sociales Section */}
                    <Section title="Conecta con nosotros" toggle={toggleSocial} setToggle={setToggleSocial}>
                        <List sx={{ padding: 0 }}>
                        {[ // Social media items
                            { icon: <FaWhatsapp size={20} color="#25D366" />, text: "WhatsApp", link: "https://wa.me/+50683399812" },
                            { icon: <FaInstagram size={20} color="#E4405F" />, text: "Instagram", link: "https://instagram.com/daniel_gonzalez_fuentes" },
                            { icon: <FaPhoneAlt size={20} color="#0077B5" />, text: "Teléfono", link: "tel:71816948" },
                            { icon: <FaMapMarkerAlt size={20} color="#EA4335" />, text: "Dirección", link: "https://www.google.com/maps" },
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ paddingY: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                            {item.icon} {/* Social media icon */}
                            <Link href={item.link} target="_blank" color="inherit" underline="hover" sx={{ fontFamily: "'Nerko One', cursive" }}>
                                {item.text} {/* Social media text */}
                            </Link>
                            </ListItem>
                        ))}
                        </List>
                    </Section>
                    </Grid2>

                    <Box textAlign="center" mt={6}>
                    <Typography variant="body2" sx={{ fontFamily: "'Patrick Hand', cursive" }}>
                        &copy; {new Date().getFullYear()} Soda El Alamo. Todos los derechos reservados.
                    </Typography>
                    </Box>
                </Container>
                </Box>
            );
            };

            export default Footer; // Exporting the Footer component.

            The Footer component is a responsive and interactive footer section for a web application, built using React and Material-UI components. It includes collapsible sections for Information, Navigation, and Social Media, along with icons and links to enhance user engagement.

            Purpose
            The Footer component provides a well-organized footer section that facilitates navigation, displays key information, and allows users to connect through social media links. It enhances the user experience by offering easy access to important sections of the site and contact options.

            Features
            Collapsible Sections:

            Uses the Collapse component to create expandable sections for Information, Navigation, and Social Media.
            Material-UI Components:

            Leverages Material-UI (Grid2, Box, Typography, List, Link, IconButton, Collapse) to create a responsive and styled footer layout.
            Responsive Design:

            Adapts to different screen sizes by adjusting the layout, showing/hiding icons, and toggling sections based on screen width.
            Social Media Integration:

            Includes social media icons (e.g., WhatsApp, Instagram, Phone, Map) with corresponding links for easy navigation to external platforms.
            Dynamic Section Creation:

            The Section component is reusable and allows for the creation of custom collapsible sections with titles and content.
            Date and Copyright:

            Automatically displays the current year for the copyright notice at the bottom of the footer.
            Component Breakdown
            State Management:

            useState hooks are used to manage the toggle state of each collapsible section (toggleInfo, toggleLinks, toggleSocial).
            Section Component:

            The Section component handles the creation of collapsible sections with titles and content. It takes in title, toggle, setToggle, and children as props.
            Layout:

            The layout is organized into three columns using Material-UI’s Grid2 with each column handling a different section (Information, Navigation, Social Media).
            Content:

            Each section contains lists of items:
            Information: A simple text description.
            Navigation: Links to different pages (e.g., About Us, Contact, Menu).
            Social Media: Icons with links to social media platforms.
            Icons and Links:

            Icons from react-icons are used alongside Material-UI’s Link component to create interactive links with corresponding social media or contact platforms.

        Header

            Font Code
            import React, { useState } from "react"; // Importing React and useState hook for managing state.
            import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, TextField, Button, InputAdornment } from "@mui/material"; // Importing Material-UI components for layout and styling.
            import MenuIcon from "@mui/icons-material/Menu"; // Importing Material-UI MenuIcon for mobile menu.
            import SearchIcon from "@mui/icons-material/Search"; // Importing Material-UI SearchIcon for search input.
            import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Importing Material-UI AccountCircleIcon for user profile icon.

            const Header = () => {
                const [anchorEl, setAnchorEl] = useState(null); // State for handling menu anchor element.
                const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for handling mobile menu visibility.

                const handleMenuOpen = (event) => {
                    setAnchorEl(event.currentTarget); // Opens menu and sets anchor element.
                };

                const handleMenuClose = () => {
                    setAnchorEl(null); // Closes menu and resets anchor element.
                };

                const toggleMobileMenu = () => {
                    setMobileMenuOpen(!mobileMenuOpen); // Toggles the state for mobile menu visibility.
                };

                return (
                    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#008000" }}>
                        <Toolbar>
                            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems: "center" }}>
                                {/* Navigation Links */}
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ cursor: "pointer", mr: 2, fontFamily: "'Patrick Hand', cursive", color: "#008000" }}
                                    onClick={() => (window.location.href = "/home")} // Redirect to /home
                                >
                                    Inicio
                                </Typography>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ cursor: "pointer", mr: 2, fontFamily: "'Patrick Hand', cursive", color: "#008000" }}
                                    onClick={() => (window.location.href = "/AboutUs")} // Redirect to /AboutUs
                                >
                                    Quienes Somos
                                </Typography>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ cursor: "pointer", mr: 2, fontFamily: "'Patrick Hand', cursive", color: "#008000" }}
                                    onClick={() => (window.location.href = "/Contacto")} // Redirect to /Contacto
                                >
                                    Contáctenos
                                </Typography>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ cursor: "pointer", mr: 2, fontFamily: "'Patrick Hand', cursive", color: "#008000" }}
                                    onClick={() => (window.location.href = "/Menu")} // Redirect to /Menu
                                >
                                    Menú
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center", flexGrow: { xs: 1, md: 0 } }}>
                                {/* User Profile Icon and Search Field */}
                                <IconButton
                                    onClick={() => (window.location.href = "/User")} // Redirect to User profile
                                    sx={{ color: "#008000", mr: 2 }}
                                >
                                    <AccountCircleIcon /> {/* Profile icon */}
                                </IconButton>
                                <TextField
                                    variant="outlined"
                                    placeholder="Search"
                                    size="small"
                                    sx={{
                                        backgroundColor: "#fff",
                                        borderRadius: 1,
                                        mr: 2,
                                        width: { xs: "100px", sm: "200px" },
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon /> {/* Search icon in input */}
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    sx={{
                                        color: "#fff",
                                        fontFamily: "'Patrick Hand', cursive",
                                        backgroundColor: "#008000",
                                        "&:hover": { backgroundColor: "#014701" },
                                    }}
                                >
                                    Search {/* Search button */}
                                </Button>
                            </Box>

                            <IconButton
                                edge="end"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={toggleMobileMenu} // Toggles mobile menu visibility
                                sx={{ display: { md: "none" }, ml: 2, color: "#008000" }}
                            >
                                <MenuIcon /> {/* Menu icon for mobile view */}
                            </IconButton>
                        </Toolbar>

                        {/* Mobile Menu */}
                        {mobileMenuOpen && (
                            <Box
                                sx={{
                                    display: { xs: "flex", md: "none" },
                                    flexDirection: "column",
                                    alignItems: "center",
                                    backgroundColor: "#fff",
                                    borderTop: "1px solid #ddd",
                                }}
                            >
                                <MenuItem onClick={() => (window.location.href = "/home")}>Inicio</MenuItem>
                                <MenuItem onClick={() => (window.location.href = "/AboutUs")}>Quienes Somos</MenuItem>
                                <MenuItem onClick={() => (window.location.href = "/Contacto")}>Contáctenos</MenuItem>
                                <MenuItem onClick={() => (window.location.href = "/Menu")}>Menú</MenuItem>
                                <MenuItem onClick={() => (window.location.href = "/User")}>
                                    <AccountCircleIcon sx={{ mr: 1 }} /> Perfil
                                </MenuItem>
                            </Box>
                        )}
                    </AppBar>
                );
            };

            export default Header; // Exporting the Header component.

            The Header component is a responsive navigation bar built using React and Material-UI components. It includes a variety of features such as navigation links, a user profile icon, a search field, and a mobile-friendly menu. This component is designed to enhance user experience by providing easy access to key sections of a website or web application.

            Purpose
            The Header component serves as the top navigation bar for a web application, offering a clean, functional, and visually appealing interface for users to navigate between different sections. It supports both desktop and mobile views, ensuring a seamless experience across devices.

            Features
            Responsive Design:

            Utilizes Material-UI’s AppBar, Toolbar, and conditional rendering based on screen size to adapt to different device sizes.
            Navigation Links:

            Provides a set of links to key pages (e.g., Home, About Us, Contact, Menu) with redirection functionality using window.location.href.
            Mobile Menu:

            Includes a collapsible mobile menu that appears when the screen size is below the md breakpoint. This menu allows users to navigate to different sections in a compact form.
            User Profile Icon and Search Field:

            Features an icon button for user profile access and a search field with a button for searching content.
            Search Functionality:

            A search input integrated with Material-UI’s TextField and a button to trigger search actions.
            Material-UI Components:

            Leverages components such as IconButton, TextField, Button, Menu, MenuItem for creating interactive elements and layout.
            State Management:

            Uses useState hooks to manage the visibility of the mobile menu and handle menu anchor elements for desktop.
            Component Breakdown
            Desktop View:

            Displays navigation links in a horizontal layout with user actions (profile icon and search field) aligned to the right.
            Mobile View:

            Shows a condensed menu with collapsible MenuItems and user profile access, activated by the Menu icon.
            User Interaction:

            Each navigation link and user action redirects to the appropriate route or performs an action when clicked (e.g., redirect to a profile page, initiate a search).
            Styling and Responsiveness:

            The header adjusts the layout and styling based on screen size using Material-UI’s responsive design capabilities.


        HomePage

            Font Code
            import { useEffect, useState } from "react"; // Importing React hooks for state management and side effects.
            import { jwtDecode } from "jwt-decode"; // Importing jwt-decode library to decode JWT tokens.
            import { Box, Typography, Button, Grid, Paper, Stack } from "@mui/material"; // Importing Material-UI components for layout and design.
            import { ToastContainer, toast } from 'react-toastify'; // Importing react-toastify for toast notifications.
            import 'react-toastify/dist/ReactToastify.css'; // Importing CSS for react-toastify.
            import logo from "../assets/logo.png"; // Importing the logo image.

            const HomePage = () => {
                const [user, setUser] = useState(null); // State to manage the authenticated user's information.

                useEffect(() => {
                    const codedToken = sessionStorage.getItem("token"); // Retrieving the JWT token from sessionStorage.

                    if (!codedToken) {
                        console.error("No se encontró token en la sessionStorage"); // Handling the case when no token is found.
                        return;
                    }
                    try {
                        const decodedToken = jwtDecode(codedToken); // Decoding the JWT token.
                        setUser(decodedToken); // Setting the user state with the decoded token data.
                        toast.success(`Bienvenido, ${decodedToken.name || 'Usuario'}!`); // Displaying a success toast with the user's name.
                    } catch (error) {
                        console.error("Error al desencriptar token:", error); // Handling errors during token decoding.
                    }
                }, []);

                return (
                    <Box
                        sx={{
                            color: "#333",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: "100vh",
                            backgroundColor: "#f0f8ff",
                            padding: 4,
                        }}
                    >
                        <Grid container spacing={4} alignItems="center" justifyContent="center">
                            {/* Left Side (Title and Logo) */}
                            <Grid item xs={12} sm={6} container direction="column" alignItems="center">
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: { xs: "2.5rem", sm: "4rem" },
                                        fontWeight: "bold",
                                        marginBottom: 3,
                                        color: "#008000",
                                        textAlign: "center",
                                        fontFamily: "'Patrick Hand', cursive",
                                    }}
                                >
                                    BIENVENID@S
                                </Typography>
                                <Box
                                    sx={{
                                        width: 220,
                                        height: 220,
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: 3,
                                        boxShadow: 3,
                                    }}
                                >
                                    <img
                                        src={logo}
                                        alt="El Alamo Logo"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </Box>
                            </Grid>

                            {/* Right Side (User Greeting, Promotions, and Schedule) */}
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ textAlign: "left" }}>
                                    {user && (
                                        <Typography 
                                            variant="h5" 
                                            sx={{ 
                                                marginBottom: 2, 
                                                fontFamily: "'Patrick Hand', cursive" 
                                            }}
                                        >
                                            Hola, {user.name}!
                                        </Typography>
                                    )}

                                    <Typography 
                                        variant="body1" 
                                        sx={{ 
                                            marginBottom: 4, 
                                            maxWidth: "600px", 
                                            fontFamily: "'Patrick Hand', cursive" 
                                        }}
                                    >
                                        Disfruta de nuestras promociones y menús exclusivos. Explora, pide y relájate con lo mejor de nuestra cocina.
                                    </Typography>

                                    <Stack spacing={3}>
                                        <Paper elevation={3} sx={{ padding: 3 }}>
                                            <Typography 
                                                variant="h6" 
                                                gutterBottom
                                                sx={{ fontFamily: "'Patrick Hand', cursive" }}
                                            >
                                                Promociones del Día
                                            </Typography>
                                            <Typography 
                                                variant="body1"
                                                sx={{ fontFamily: "'Patrick Hand', cursive" }}
                                            >
                                                - 2x1 en bebidas después de las 5 PM
                                            </Typography>
                                            <Typography 
                                                variant="body1"
                                                sx={{ fontFamily: "'Patrick Hand', cursive" }}
                                            >
                                                - Descuento del 10% para estudiantes
                                            </Typography>
                                        </Paper>

                                        <Paper elevation={3} sx={{ padding: 3 }}>
                                            <Typography 
                                                variant="h6" 
                                                gutterBottom
                                                sx={{ fontFamily: "'Patrick Hand', cursive" }}
                                            >
                                                Horarios
                                            </Typography>
                                            <Typography 
                                                variant="body1"
                                                sx={{ fontFamily: "'Patrick Hand', cursive" }}
                                            >
                                                Lunes a Viernes: 8 AM - 9 PM
                                            </Typography>
                                            <Typography 
                                                variant="body1"
                                                sx={{ fontFamily: "'Patrick Hand', cursive" }}
                                            >
                                                Sábado y Domingo: 10 AM - 11 PM
                                            </Typography>
                                        </Paper>
                                    </Stack>

                                    <Button
                                        variant="contained"
                                        color="success"
                                        sx={{ 
                                            marginTop: 4, 
                                            fontFamily: "'Patrick Hand', cursive" 
                                        }}
                                        href="/Menu"
                                    >
                                        Ver Menú
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>

                        <ToastContainer /> {/* Toast notification container */}
                    </Box>
                );
            };

            export default HomePage; // Exporting the HomePage component.

            The HomePage component is a welcoming interface designed to greet users and provide them with essential information such as promotions, schedules, and the ability to view a menu. The component utilizes JWT decoding to retrieve user information and displays personalized content accordingly.

            Purpose
            The HomePage component is the primary landing page for users after they log in. It focuses on providing a user-friendly experience by displaying user-specific data and additional relevant information. The component is designed to be visually appealing and responsive, featuring interactive components like toast notifications and dynamic user content.

            Features
            JWT Decoding:

            Uses the jwtDecode library to decode a JWT token stored in sessionStorage and retrieve user data (e.g., name, user ID).
            User Greeting:

            Displays a personalized greeting message with the user's name once they are authenticated.
            Promotions and Schedule:

            Showcases promotional offers and business hours within separate sections using Material-UI's Paper components.
            Responsive Layout:

            Adapts to different screen sizes using Material-UI's Grid system and responsive typography for a consistent look and feel.
            Toast Notifications:

            Utilizes the react-toastify library to display success messages when the user is welcomed with their name.
            Visual Elements:

            Includes a logo display, promotional banners, and a button to view the full menu.
            Dynamic Content:

            Content such as promotions and schedule is dynamically rendered based on the user's session state and token data.
            Component Breakdown
            User Authentication and Decoding:

            The useEffect hook fetches and decodes the JWT token, setting the user data state if the token exists.
            Responsive UI:

            The layout is split into two columns for a balanced view, with the left side containing the logo and title, and the right side containing user information, promotions, and schedule.
            Promotions and Schedule Sections:

            Each section includes a Paper component for visual distinction and a consistent layout.
            Toast Notifications:

            The ToastContainer is used to display real-time notifications for user actions and system updates.
            Navigation:

            A button labeled "Ver Menú" redirects the user to the Menu page, enhancing navigation within the app.


        LoginForm

            Font Code
            import React, { useState } from 'react'; // Importing React and useState hook for managing form inputs.
            import { TextField, Button, Typography, Container, Box, Divider, useMediaQuery } from '@mui/material'; // Importing Material-UI components for layout and styling.
            import { Link, useNavigate } from "react-router-dom"; // Importing React Router components for navigation.
            import { ToastContainer, toast } from 'react-toastify'; // Importing react-toastify for toast notifications.
            import 'react-toastify/dist/ReactToastify.css'; // Importing CSS for react-toastify.
            import { ThemeProvider, createTheme } from '@mui/material/styles'; // Importing ThemeProvider and createTheme for custom themes.
            import plantaloginyregister from '../assets/plantaloginyregister.png'; // Importing the background image for the login form.
            import { loginClient } from '../services/client'; // Importing the loginClient function for handling login logic.

            const theme = createTheme({ // Creating a custom theme for styling the login form.
                palette: {
                    primary: {
                        main: '#28a745', // Custom primary color for buttons.
                    },
                    background: {
                        default: '#f8f9fa', // Default background color.
                        paper: '#008000bb', // Paper background color.
                    },
                },
                typography: {
                    fontFamily: "'Patrick Hand', cursive", // Setting a custom font family for typography.
                },
            });

            const LoginForm = () => {
                const [clientemail, setEmail] = useState(''); // State for email input.
                const [clientpassword, setPassword] = useState(''); // State for password input.
                const navigate = useNavigate(); // Hook for programmatic navigation.

                const handleSubmit = async (e) => { // Function to handle form submission.
                    e.preventDefault(); // Prevent default form submission behavior.

                    if (!clientemail || !clientpassword) { // Checking if all fields are filled.
                        toast.error("Por favor completa todos los campos"); // Displaying error toast if fields are empty.
                        return;
                    }

                    const loginData = { clientemail, clientpassword }; // Creating an object with email and password.

                    try {
                        const response = await loginClient(loginData); // Sending login data to the backend through loginClient function.

                        if (response && response.token) { // If response contains a token, set session storage items.
                            sessionStorage.setItem('token', response.token); // Storing the token.
                            sessionStorage.setItem('clientName', response.clientName); // Storing the client name.
                            navigate('/home'); // Navigating to the home page on successful login.
                        } else {
                            toast.error("Usuario o contraseña incorrectos"); // Displaying error toast if login fails.
                        }
                    } catch (error) {
                        console.error("Error al conectar con el servidor:", error); // Logging server connection errors.
                        toast.error("Error al conectar con el servidor"); // Displaying a general server error toast.
                    }
                };

                return (
                    <ThemeProvider theme={theme}> {/* Applying the custom theme to the form */}
                        <Container
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minHeight: '100vh',
                                backgroundColor: 'background.default',
                                px: 2, // Padding for smaller screens
                            }}
                        >
                            <Box
                                sx={{
                                    width: { xs: '100%', sm: '80%', md: '50%', lg: '30%' }, // Responsive width for the form
                                    bgcolor: 'background.paper',
                                    textAlign: 'center',
                                    color: 'text.primary',
                                    p: { xs: 2, sm: 3, md: 4 }, // Padding based on screen size
                                    borderRadius: 2,
                                    backgroundImage: `url(${plantaloginyregister})`, // Background image for the form
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center bottom',
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    gutterBottom
                                    sx={{
                                        fontSize: { xs: '1.8rem', md: '2.2rem' },
                                        color: '#ffffff'
                                    }}
                                >
                                    Inicio de Sesión
                                </Typography>
                                <Divider sx={{ backgroundColor: 'text.primary', mb: 2 }} /> {/* Divider between title and form fields */}
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        placeholder="Email"
                                        id="clientemail"
                                        value={clientemail}
                                        onChange={(e) => setEmail(e.target.value)}
                                        fullWidth
                                        sx={{
                                            mb: 2,
                                            backgroundColor: '#fff',
                                            borderRadius: 1,
                                            '& input': { fontFamily: 'Patrick Hand, cursive' },
                                            '& fieldset': { borderColor: 'white' },
                                            '&:hover fieldset': { borderColor: 'primary.main' },
                                            color: '#000000',
                                        }}
                                    />
                                    <TextField
                                        placeholder="Contraseña"
                                        id="clientpassword"
                                        type="password"
                                        value={clientpassword}
                                        onChange={(e) => setPassword(e.target.value)}
                                        fullWidth
                                        sx={{
                                            mb: 2,
                                            backgroundColor: '#fff',
                                            borderRadius: 1,
                                            '& input': { fontFamily: 'Patrick Hand, cursive' },
                                            '& fieldset': { borderColor: 'white' },
                                            '&:hover fieldset': { borderColor: 'primary.main' },
                                            color: '#000000',
                                        }}
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        sx={{
                                            backgroundColor: '#fff',
                                            color: 'primary.main',
                                            fontFamily: "'Patrick Hand', cursive",
                                            border: '1px solid',
                                            borderColor: 'primary.main',
                                            mt: 2,
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                color: '#fff',
                                            },
                                        }}
                                    >
                                        Ingresar
                                    </Button>
                                </form>
                                <Typography
                                    variant="body2"
                                    mt={2}
                                    sx={{
                                        color: '#ffffff',
                                        mt: 2,
                                        fontSize: { xs: '0.8rem', sm: '1rem' },
                                    }}
                                >
                                    No tienes cuenta?{" "}
                                    <Link
                                        to="/"
                                        style={{
                                            color: 'white',
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        Regístrate
                                    </Link>
                                </Typography>
                            </Box>
                        </Container>
                        <ToastContainer /> {/* Toast notifications container */}
                    </ThemeProvider>
                );
            };

            export default LoginForm; // Exporting the LoginForm component.

            The LoginForm component provides a user-friendly interface for clients to log in to the application. It integrates Material-UI components with custom styling and utilizes React Router for navigation. Additionally, it handles form submission, input management, and displays toast notifications for user feedback.

            Purpose
            The LoginForm component is designed to provide a secure, visually appealing, and accessible login experience. Users can enter their email and password, submit the form, and receive real-time feedback through toast notifications, ensuring a seamless login process.

            Features
            Custom Theme:

            Utilizes a custom theme created using Material-UI's createTheme to apply consistent styling throughout the form.
            Form Handling:

            Manages input states for clientemail and clientpassword using the useState hook.
            Handles form submission asynchronously using the loginClient function, which sends the login data to the backend.
            Responsive Design:

            Adapts to various screen sizes with a responsive layout using Material-UI's Container, Box, and Grid components.
            Custom width and padding ensure a consistent and visually balanced form.
            Validation and Error Handling:

            Validates user inputs and provides toast notifications for errors such as missing fields or incorrect login credentials.
            Visual Elements:

            Includes a background image for the login form (plantaloginyregister.png).
            Uses Material-UI components for text fields, buttons, typography, and dividers.
            Toast Notifications:

            Displays success or error messages using react-toastify to provide real-time feedback to users.
            Navigation:

            Provides a navigation link to the registration page if the user does not have an account.
            Component Breakdown
            Form Fields:

            TextField components are used for email and password inputs, styled with custom MUI properties for a smooth user experience.
            Submit Handling:

            On form submission, the handleSubmit function validates inputs and sends them to the backend through the loginClient service.
            Styling:

            Custom styles are applied using Material-UI theme properties, including colors, typography, and hover effects.
            Toast Notifications:

            Notifications are rendered via the ToastContainer, providing instant user feedback on successful logins or errors.
            Responsiveness:

            Ensures that the form layout adjusts smoothly for different screen sizes, providing a consistent user experience.




        MenuComponent

            Font Code
            import React, { useEffect, useState } from 'react'; // Importing React and hooks for state and side effects.
            import { Carousel } from 'react-bootstrap'; // Importing Bootstrap Carousel for creating image sliders.
            import '../styles/MenuComponent.css'; // Importing CSS styles for the component.
            import { Link } from 'react-router-dom'; // Importing Link component for navigation.
            import axios from 'axios'; // Importing axios for making HTTP requests.
            const URL = import.meta.env.VITE_API_URL; // API URL stored in environment variable.

            const MenuComponent = () => {
                const [desayunoDishes, setDesayunoDishes] = useState([]); // State for storing desayuno dishes.

                // useEffect hook to fetch dishes when component mounts.
                useEffect(() => {
                    const fetchDishes = async () => {
                        try {
                            const response = await axios.get(`${URL}/dish`); // Fetching dishes from the API.
                            const menus = Array.isArray(response.data) ? response.data : []; // Ensuring response data is an array.
                            const desayunoDishes = menus
                                .flatMap(menu => (menu.dishes ? menu.dishes : [])) // Flattening dishes array from menus.
                                .filter(dish => dish.category === 'desayuno'); // Filtering dishes for the 'desayuno' category.
                            setDesayunoDishes(desayunoDishes); // Updating state with filtered desayuno dishes.
                        } catch (error) {               
                            console.error('Error fetching dishes:', error); // Logging error if the fetch fails.
                        }
                    };

                    fetchDishes();
                }, []); // Empty dependency array to run useEffect only once after mounting.

                return (
                    <div className="menu-container letters-container"> 
                        <h1 className="text-success">MENU</h1>

                        {/* Desayunos Section */}
                        <div className="menu-section">
                            <h2 className="text-success">Desayunos</h2>
                            <Carousel controls={true} indicators={false} interval={null}>
                                {desayunoDishes.map(dish => ( // Mapping over desayunoDishes to create Carousel items.
                                    <Carousel.Item key={dish.id}>
                                        <div className="d-flex justify-content-around">
                                            <div className="card">
                                                <img src={dish.image} className="card-img-top" alt={dish.name} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{dish.name}</h5>
                                                    <p className="card-text">{dish.description}</p>
                                                    <p className="card-text">${dish.price.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>

                        {/* Almuerzos Section */}
                        <div className="menu-section">
                            <h2 className="text-success">Almuerzos</h2>
                            <Carousel controls={true} indicators={false} interval={null}>
                                <Carousel.Item>
                                    <div className="d-flex justify-content-around">
                                        {/* Placeholder for Almuerzos dishes */}
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>

                        {/* Cenas Section */}
                        <div className="menu-section">
                            <h2 className="text-success">Cenas</h2>
                            <Carousel controls={true} indicators={false} interval={null}>
                                <Carousel.Item>
                                    <div className="d-flex justify-content-around">
                                        {/* Placeholder for Cenas dishes */}
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>

                        {/* Link to customize orders */}
                        <div className="menu-section">
                            <h2>
                                <Link to={'/Order'} style={{ textDecoration: 'none' }}>
                                    También puedes personalizar tu pedido
                                </Link>
                            </h2>
                        </div>
                    </div>
                );
            };

            export default MenuComponent; // Exporting the MenuComponent.

            The MenuComponent is a dynamic and interactive component designed to display restaurant menu items categorized into breakfast, lunch, and dinner sections. It utilizes the Bootstrap Carousel for creating a visually engaging image slider for each category, integrates with an API to fetch dish data, and includes navigation links for further customization.

            Purpose
            The MenuComponent serves to showcase restaurant menu items in a structured and visually appealing manner. By leveraging a responsive carousel for each category, it provides users with a seamless browsing experience for various meal options. Additionally, it allows easy navigation to customize orders.

            Features
            Dynamic Dish Fetching:

            Uses axios to make API requests to fetch dishes from the backend (VITE_API_URL).
            Filters dishes based on their categories (e.g., "desayuno," "almuerzos," "cenas") and updates the state accordingly.
            Bootstrap Carousel:

            Integrates Bootstrap’s Carousel component to display menu items as sliders for each category.
            Supports navigation controls, indicators, and custom intervals.
            Responsive Design:

            Adapts to different screen sizes with a responsive layout ensuring a consistent viewing experience.
            Utilizes Material-UI classes for styling consistency across devices.
            Error Handling:

            Employs a try-catch block to handle errors gracefully when fetching dishes, logging errors if the request fails.
            Navigation:

            Provides a navigation link to the order customization page using react-router-dom's Link component, allowing users to personalize their orders.
            Styling:

            Utilizes custom CSS for layout and component styling, ensuring a clean and visually pleasing presentation of dishes.
            Dynamic Content:

            Dynamically generates carousel items for each category, displaying relevant dish details (image, name, description, and price).
            Component Breakdown
            Fetching Dishes:

            useEffect hook fetches data from the API when the component mounts.
            Dishes are filtered by category (desayuno, almuerzos, and cenas) and stored in respective state variables.
            Carousel Display:

            Each category (e.g., Desayunos, Almuerzos, Cenas) is represented using a carousel that maps over the dishes array and creates carousel items.
            Styling and Responsiveness:

            Uses Material-UI components and custom CSS to style the menus and ensure responsiveness on various devices.
            Navigation and Customization:

            Provides a seamless navigation experience through categories and links to customize orders via a designated route.

        Opciones

            Font Code
            import React, { useState, useEffect } from 'react'; // Importing React and hooks for managing state and side effects.
            import { 
            Card, Typography, Tabs, Tab, Box, TextField, Button, 
            TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, 
            MenuItem, Select, FormControl, InputLabel 
            } from '@mui/material'; // Importing Material-UI components for UI design.
            import { ToastContainer, toast } from 'react-toastify'; // Importing Toast for displaying notifications.
            import 'react-toastify/dist/ReactToastify.css'; // Importing CSS for Toast notifications.
            import { 
            postDishCategory, getDishCategory, deleteDishCategory, 
            postDrinkCategory, getDrinkCategory, deleteDrinkCategory, 
            postDrink, getDrink, putDrink, deleteDrink 
            } from '../services'; // Importing API service functions for CRUD operations.

            const Opciones = () => {
            const [tab, setTab] = useState(0); // State for managing tab selection.
            const [newCategory, setNewCategory] = useState(''); // State for new category input.
            const [categories, setCategories] = useState({ platillos: [], bebidas: [] }); // State for storing dish and drink categories.
            const [categoryType, setCategoryType] = useState('Platillo'); // State for selecting category type (Platillo or Bebida).
            const [selectedCategory, setSelectedCategory] = useState(''); // State for selecting a drink category.
            const [newDrinkName, setNewDrinkName] = useState(''); // State for new drink name input.
            const [newDrinkPrice, setNewDrinkPrice] = useState(''); // State for new drink price input.
            const [drinks, setDrinks] = useState([]); // State for storing drinks.

            // useEffect to fetch categories and drinks data when component mounts.
            useEffect(() => {
                fetchCategories();
                fetchDrinks();
            }, []);

            // Function to fetch dish and drink categories.
            const fetchCategories = async () => {
                try {
                const dishCategories = await getDishCategory(); // Fetch dish categories.
                const drinkCategories = await getDrinkCategory(); // Fetch drink categories.
                setCategories({ platillos: dishCategories, bebidas: drinkCategories }); // Setting categories state.
                } catch (error) {
                console.error('Error fetching categories:', error);
                toast.error('Error al obtener categorías.'); // Display error if fetching categories fails.
                }
            };

            // Function to fetch drinks.
            const fetchDrinks = async () => {
                try {
                const drinks = await getDrink(); // Fetch drinks.
                setDrinks(drinks); // Setting drinks state.
                } catch (error) {
                console.error('Error fetching drinks:', error);
                toast.error('Error al obtener bebidas.'); // Display error if fetching drinks fails.
                }
            };

            // Function to handle creation of new category.
            const handleCreateCategory = async () => {
                if (newCategory.trim()) {
                try {
                    if (categoryType === 'Platillo') {
                    await postDishCategory({ dishCategoryname: newCategory }); // Creating dish category.
                    } else {
                    await postDrinkCategory({ drinkCategoryname: newCategory }); // Creating drink category.
                    }
                    setNewCategory(''); // Resetting input field.
                    toast.success('Categoría creada correctamente.'); // Display success notification.
                    fetchCategories(); // Refreshing categories data.
                } catch (error) {
                    console.error('Error creating category:', error);
                    toast.error('Error al crear la categoría.'); // Display error if creation fails.
                }
                }
            };

            // Function to handle deletion of category.
            const handleDeleteCategory = async (id) => {
                try {
                if (categoryType === 'Platillo') {
                    await deleteDishCategory(id); // Deleting dish category.
                } else {
                    await deleteDrinkCategory(id); // Deleting drink category.
                }
                toast.success('Categoría eliminada correctamente.'); // Display success notification.
                fetchCategories(); // Refreshing categories data.
                } catch (error) {
                console.error('Error deleting category:', error);
                toast.error('Error al eliminar la categoría.'); // Display error if deletion fails.
                }
            };

            // Function to handle creation of new drink.
            const handleCreateDrink = async () => {
                if (newDrinkName.trim() && newDrinkPrice > 0 && selectedCategory) {
                try {
                    const drinkData = {
                    drinkName: newDrinkName,
                    drinkPrice: newDrinkPrice,
                    drinkCategory: selectedCategory,
                    };
                    await postDrink(drinkData); // Creating new drink.
                    toast.success('Bebida creada correctamente.'); // Display success notification.
                    setNewDrinkName(''); // Resetting drink name input.
                    setNewDrinkPrice(''); // Resetting drink price input.
                    setSelectedCategory(''); // Resetting selected category.
                    fetchDrinks(); // Refreshing drinks data.
                } catch (error) {
                    console.error('Error creating drink:', error);
                    toast.error('Error al crear la bebida.'); // Display error if creation fails.
                }
                } else {
                toast.error('Por favor complete todos los campos.'); // Display error if fields are not complete.
                }
            };

            // Function to handle deletion of drink.
            const handleDeleteDrink = async (id) => {
                try {
                await deleteDrink(id); // Deleting drink.
                toast.success('Bebida eliminada correctamente.'); // Display success notification.
                fetchDrinks(); // Refreshing drinks data.
                } catch (error) {
                console.error('Error deleting drink:', error);
                toast.error('Error al eliminar la bebida.'); // Display error if deletion fails.
                }
            };

            // Function to handle editing of drink.
            const handleEditDrink = async (id) => {
                try {
                await putDrink(id); // Updating drink details.
                toast.success('Bebida actualizada correctamente.'); // Display success notification.
                fetchDrinks(); // Refreshing drinks data.
                } catch (error) {
                console.error('Error updating drink:', error);
                toast.error('Error al actualizar la bebida.'); // Display error if update fails.
                }
            };

            return (
                <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
                <Typography variant="h5" gutterBottom>
                    Opciones
                </Typography>
                <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} sx={{ mb: 2 }}>
                    <Tab label="General" />
                    <Tab label="Categorías" />
                    <Tab label="Bebidas" />
                </Tabs>
                <Box sx={{ p: 3 }}>
                    {tab === 0 && (
                    <>
                        {/* Display categories and actions for Platillos and Bebidas */}
                    </>
                    )}
                    {tab === 1 && (
                    <>
                        {/* Create and manage categories for Platillos and Bebidas */}
                    </>
                    )}
                    {tab === 2 && (
                    <>
                        {/* Create and manage drinks */}
                    </>
                    )}
                </Box>
                <ToastContainer />
                </Card>
            );
            };

            export default Opciones; // Exporting the Opciones component.

            The Opciones component is a comprehensive interface for managing categories and drinks in a restaurant or similar application. It utilizes Material-UI components for a structured and visually appealing design, integrates Toast notifications for feedback, and provides CRUD (Create, Read, Update, Delete) functionality for both dish and drink management.

            Purpose
            The Opciones component facilitates the creation, management, and deletion of dish categories and drinks. It supports a tabbed interface to seamlessly switch between different functionalities, ensuring an intuitive user experience for managing restaurant options.

            Features
            Tabbed Interface:

            Provides a tabbed view to organize functionalities into "General," "Categorías," and "Bebidas."
            Users can easily navigate through these tabs to perform actions related to categories and drinks.
            CRUD Operations:

            postDishCategory, getDishCategory, deleteDishCategory, and other service functions are used for dish category management.
            postDrinkCategory, getDrinkCategory, deleteDrinkCategory, etc., are used for managing drink categories.
            postDrink, getDrink, putDrink, and deleteDrink functions handle CRUD operations for drinks.
            Material-UI Components:

            Utilizes Material-UI components such as Card, Typography, Tabs, Tab, Box, TextField, Button, TableContainer, Table, etc., for building a responsive and interactive UI.
            Forms and tables are utilized to manage data efficiently.
            State Management:

            Maintains multiple states including tab, newCategory, categories, categoryType, selectedCategory, newDrinkName, newDrinkPrice, and drinks to manage dynamic content.
            useEffect hook fetches data on component mount to populate the initial state.
            Notification System:

            Integrates react-toastify for displaying success, error, and informational messages throughout various operations.
            Error Handling:

            Employs error handling mechanisms within each CRUD operation to provide immediate feedback and improve the user experience.
            Dynamic Content:

            Generates dynamic content based on the selected tab and state variables to display, create, and manage dish categories and drinks.
            Component Breakdown
            Tabs for Functionality:

            General: Displays an overview of current categories and drinks.
            Categorías: Allows management of dish and drink categories.
            Bebidas: Facilitates creation, updating, and deletion of drinks.
            Form Handling:

            Handles input fields for new categories (newCategory) and new drinks (newDrinkName, newDrinkPrice), with controls for managing selected categories for drinks.
            Table and Form Integration:

            Uses Material-UI’s table component to display categories and drinks in a structured tabular format.
            Forms are integrated for creating and updating drink and dish categories.
            Service Integration:

            Service functions for API calls ensure data is managed smoothly between the frontend and backend.

        Ordenes

            Font Code
            import React from 'react'; // Importing React for functional component.
            import { 
            Card, Typography, TableContainer, Paper, Table, 
            TableHead, TableRow, TableCell, TableBody 
            } from '@mui/material'; // Importing Material-UI components for UI design.

            const Ordenes = () => {
            return (
                <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
                <Typography variant="h5" gutterBottom>
                    Historial de Órdenes
                </Typography>
                <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 2 }}>
                    <Table>
                    <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableRow>
                        <TableCell>ID Orden</TableCell>        {/* Column for Order ID */}
                        <TableCell>Cliente</TableCell>          {/* Column for Customer Name */}
                        <TableCell>Total</TableCell>            {/* Column for Total Amount */}
                        <TableCell>Estado</TableCell>           {/* Column for Order Status */}
                        <TableCell>Acciones</TableCell>         {/* Column for Actions */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                        <TableCell>#001</TableCell>            {/* Sample Order ID */}
                        <TableCell>Juan Pérez</TableCell>      {/* Sample Customer Name */}
                        <TableCell>$250</TableCell>            {/* Sample Total Amount */}
                        <TableCell>Pendiente</TableCell>       {/* Sample Order Status */}
                        <TableCell>Ver Detalles</TableCell>    {/* Sample Action - View Details */}
                        </TableRow>
                    </TableBody>
                    </Table>
                </TableContainer>
                </Card>
            );
            };

            export default Ordenes; // Exporting the Ordenes component.

            The Ordenes component provides a structured interface for displaying a history of orders. Utilizing Material-UI components, it organizes order data in a clean and user-friendly way, allowing easy navigation and management of past orders.

            Purpose
            The Ordenes component is designed to display a table of historical orders, enabling users to view and manage previous transactions. It serves as an administrative tool for managing customer orders and tracking their statuses and details.

            Features
            Material-UI Components:

            Utilizes Material-UI’s Card, Typography, TableContainer, Table, TableHead, TableRow, TableCell, and TableBody components to create a responsive and well-styled table.
            Table Structure:

            The table displays columns for:
            Order ID: Unique identifier for each order.
            Cliente: Name of the customer associated with the order.
            Total: Total amount for the order.
            Estado: Current status of the order (e.g., pending, completed, cancelled).
            Acciones: Actions such as viewing details or performing other management tasks.
            Sample Data:

            The component includes a sample row displaying static data such as:
            #001 for Order ID
            Juan Pérez for Customer Name
            $250 for Total Amount
            Pendiente for Order Status
            Ver Detalles for Action (View Details).
            Responsiveness and Styling:

            The component uses Material-UI’s styling (sx prop) to adjust padding, shadows, and borders, ensuring a visually appealing and interactive table.
            Export Functionality:

            The component is exported for use in other parts of the application where order history is required.

        RegisterForm

            Font Code
            import React, { useState } from 'react'; // Importing React and useState hook
            import {
                TextField,             // Material-UI TextField component
                Button,                // Material-UI Button component
                Typography,            // Material-UI Typography component
                Container,             // Material-UI Container component
                Box,                   // Material-UI Box component
                Divider,               // Material-UI Divider component
                useMediaQuery,         // Material-UI useMediaQuery hook
            } from '@mui/material'; // Importing Material-UI components

            import { Link, useNavigate } from "react-router-dom"; // Importing Link and useNavigate from react-router-dom
            import { ToastContainer, toast } from 'react-toastify'; // Importing ToastContainer and toast from react-toastify
            import 'react-toastify/dist/ReactToastify.css'; // Importing CSS for Toast notifications

            import { ThemeProvider, createTheme } from '@mui/material/styles'; // Importing ThemeProvider and createTheme
            import plantaloginyregister from '../assets/plantaloginyregister.png'; // Importing the image

            import { registerClient } from '../services/client'; // Importing the registerClient service

            const theme = createTheme({
                palette: {
                    primary: {
                        main: '#28a745', // Button green
                    },
                    background: {
                        default: '#f8f9fa', // General background
                        paper: '#008000bb', // Form background
                    },
                },
                typography: {
                    fontFamily: "'Patrick Hand', cursive", // Setting custom font
                },
            });

            const RegisterForm = () => {
                const [formData, setFormData] = useState({
                    clientname: '',
                    clientemail: '',
                    clientpassword: '',
                });

                const [loading, setLoading] = useState(false);
                const navigate = useNavigate(); // Using navigate hook

                // Handling input changes
                const handleChange = (e) => {
                    setFormData({ ...formData, [e.target.id]: e.target.value });
                };

                // Validating the form
                const validateForm = () => {
                    const { clientname, clientemail, clientpassword } = formData;

                    if (!clientname || !clientemail || !clientpassword) {
                        toast.error("Todos los campos son obligatorios");
                        return false;
                    }

                    if (clientpassword.length < 8) {
                        toast.error("La contraseña debe tener al menos 8 caracteres");
                        return false;
                    }

                    const hasUpperCase = /[A-Z]/.test(clientpassword);
                    const hasLowerCase = /[a-z]/.test(clientpassword);
                    const hasNumber = /\d/.test(clientpassword);

                    if (!hasUpperCase || !hasLowerCase || !hasNumber) {
                        toast.error("La contraseña debe contener al menos una mayúscula, una minúscula y un número");
                        return false;
                    }

                    return true;
                };

                const handleSubmit = async (e) => {
                    e.preventDefault();
                
                    if (validateForm()) {
                        setLoading(true);
                        try {
                            const response = await registerClient(formData);
                            toast.success("Usuario registrado exitosamente");
                            setFormData({
                                clientname: '',
                                clientemail: '',
                                clientpassword: '',
                            });
                            setTimeout(() => navigate('/login'), 2000);
                        } catch (error) {
                            const errorMsg = error.response?.data?.message || "Hubo un error al registrar el usuario";
                            toast.error(errorMsg);
                        } finally {
                            setLoading(false);
                        }
                    }
                };

                return (
                    <ThemeProvider theme={theme}>
                        <Container
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minHeight: '100vh',
                                backgroundColor: 'background.default',
                                px: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    width: { xs: '100%', sm: '80%', md: '50%', lg: '30%' },
                                    bgcolor: 'background.paper',
                                    textAlign: 'center',
                                    color: 'text.primary',
                                    p: { xs: 2, sm: 3, md: 4 },
                                    borderRadius: 2,
                                    backgroundImage: `url(${plantaloginyregister})`, // Adding image to background
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center bottom',
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    gutterBottom
                                    sx={{
                                        color: '#fff',
                                        fontSize: { xs: '1.8rem', md: '2.2rem' }
                                    }}
                                >
                                    Regístrate
                                </Typography>
                                <Divider sx={{ backgroundColor: 'text.primary', mb: 2 }} />
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        placeholder="Nombre"
                                        id="clientname"
                                        value={formData.clientname}
                                        onChange={handleChange}
                                        fullWidth
                                        sx={{
                                            color: '#ffffff',
                                            mb: 2,
                                            backgroundColor: '#fff',
                                            borderRadius: 1,
                                            '& label': { color: 'text.secondary' },
                                            '& input': { fontFamily: 'Patrick Hand, cursive' },
                                            '& fieldset': { borderColor: 'white' },
                                            '&:hover fieldset': { borderColor: 'primary.main' },
                                        }}
                                    />
                                    <TextField
                                        placeholder="Email"
                                        id="clientemail"
                                        value={formData.clientemail}
                                        onChange={handleChange}
                                        fullWidth
                                        sx={{
                                            mb: 2,
                                            backgroundColor: '#fff',
                                            borderRadius: 1,
                                            '& label': { color: 'text.secondary' },
                                            '& input': { fontFamily: 'Patrick Hand, cursive' },
                                            '& fieldset': { borderColor: 'white' },
                                            '&:hover fieldset': { borderColor: 'primary.main' },
                                        }}
                                    />
                                    <TextField
                                        placeholder="Contraseña"
                                        id="clientpassword"
                                        type="password"
                                        value={formData.clientpassword}
                                        onChange={handleChange}
                                        fullWidth
                                        sx={{
                                            mb: 2,
                                            backgroundColor: '#fff',
                                            borderRadius: 1,
                                            '& label': { color: 'text.secondary' },
                                            '& input': { fontFamily: 'Patrick Hand, cursive' },
                                            '& fieldset': { borderColor: 'white' },
                                            '&:hover fieldset': { borderColor: 'primary.main' },
                                        }}
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        sx={{
                                            backgroundColor: '#fff',
                                            color: 'primary.main',
                                            fontFamily: "'Patrick Hand', cursive",
                                            border: '1px solid',
                                            borderColor: 'primary.main',
                                            mt: 2,
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                color: '#fff',
                                            },
                                        }}
                                        disabled={loading}
                                    >
                                        {loading ? 'Registrando...' : 'Registrar'}
                                    </Button>
                                </form>
                                <Typography
                                    variant="body2"
                                    mt={2}
                                    sx={{
                                        mt: 2,
                                        fontSize: { xs: '0.8rem', sm: '1rem' },
                                        color:'#ffffff',
                                    }}
                                >
                                    Ya tienes una cuenta?{" "}
                                    <Link
                                        to="/login"
                                        style={{
                                            color: 'white',
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        Inicia Sesión
                                    </Link>
                                </Typography>
                            </Box>
                            <ToastContainer />
                        </Container>
                    </ThemeProvider>
                );
            };

            export default RegisterForm; // Exporting the RegisterForm component

            The RegisterForm component provides a user-friendly interface for registering new clients. It integrates Material-UI components, custom theming, form validation, and notification functionality using React Toastify.

            Purpose
            The RegisterForm component is designed to allow users to create new accounts by providing necessary details like name, email, and password. It offers real-time feedback and a seamless registration experience with a visually appealing and accessible form.

            Features
            Material-UI Integration:

            Utilizes Material-UI components like TextField, Button, Typography, Container, Box, and Divider for a cohesive and responsive UI.
            Theming:

            A custom theme is applied to the component using createTheme and ThemeProvider. This includes primary color for buttons and distinct background and text colors for form elements.
            Responsive Design:

            The layout adapts based on screen size using Material-UI's useMediaQuery hook to ensure a consistent experience across devices.
            Form Handling:

            Form fields (clientname, clientemail, and clientpassword) are managed using the useState hook.
            Real-time validation ensures that the required fields are filled correctly, with specific rules for password strength.
            Toast Notifications:

            react-toastify is used for real-time feedback, displaying success and error messages based on form submission outcomes.
            Background Image:

            The form container incorporates a background image (plantaloginyregister.png) for visual enhancement and a unique appearance.
            Navigation:

            On successful form submission, users are redirected to the login page after a short delay using useNavigate.
            Custom Styling:

            Customized styling is applied to inputs, buttons, and text elements to provide a polished user experience.


        UserComponent

        Font Code

            import React, { useState, useEffect } from 'react'; // Import necessary hooks and libraries
            import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
            import { jwtDecode } from "jwt-decode"; // Import jwt-decode for decoding JWT tokens
            import { toast } from 'react-toastify'; // Import toast notifications
            import { 
                Container, Grid, Button, Typography, 
                Card, CssBaseline, GlobalStyles, TextField, 
                Dialog, DialogTitle, DialogContent, DialogActions 
            } from '@mui/material'; // Import MUI components
            import { 
                updateClient, getAllClients, getClientById 
            } from '../services/client'; // Import client services
            import { FaHome, FaClipboardList, FaUserAlt, FaSignOutAlt } from 'react-icons/fa'; // Import icons
            import axios from 'axios'; // Import Axios for HTTP requests

            const UserPage = () => {
                // State variables for managing user data and modal visibility
                const [menu, setMenu] = useState('Información de Usuario');
                const [showModal, setShowModal] = useState(false);
                const [clientInfo, setClientInfo] = useState({ name: '', email: '' });
                const [newClientName, setNewClientName] = useState('');
                const [newClientEmail, setNewClientEmail] = useState('');
                const [newClientPassword, setNewClientPassword] = useState('');
                const [placeholderName, setPlaceholderName] = useState('');
                const [placeholderEmail, setPlaceholderEmail] = useState('');
                const [renderClientName, setRenderClientName] = useState('');
                const [renderClientEmail, setRenderClientEmail] = useState('');
                const [loading, setLoading] = useState(true);
                const navigate = useNavigate();

                useEffect(() => {
                    // Decode token and fetch client info
                    const codedToken = sessionStorage.getItem("token");
                    const decodedToken = jwtDecode(codedToken);
                    const clientId = decodedToken.id;
                    renderClientInfo(); // Fetch and render client info

                    if (!codedToken) {
                        console.error("No se encontró token en la sessionStorage");
                        return;
                    }

                    try {
                        const { id, name, email } = decodedToken;
                        setClientInfo({ id, name, email });
                        toast.success(`Bienvenido, ${name}!`);
                    } catch (error) {
                        console.error("Error al desencriptar token:", error);
                    }
                },[]);

                // Function to fetch client ID using the token
                const fetchClientId = async () => {
                    try {
                        const codedToken = sessionStorage.getItem("token");

                        if (!codedToken) {
                            throw new Error("Token not found in sessionStorage");
                        }

                        const decodedToken = jwtDecode(codedToken);
                        const clientId = decodedToken.id;

                        const clientData = await getClientById(clientId); // Automatically sends token
                        return clientData;
                    } catch (error) {
                        console.error('Error fetching the client id:', error);
                        throw error;
                    }
                };

                // Function to handle client data update
                const handleUpdate = async (e) => {
                    e.preventDefault();

                    if (!newClientName && !newClientEmail && !newClientPassword) {
                        toast.error("No hay cambios para guardar.");
                        return;
                    }

                    try {
                        const token = sessionStorage.getItem("token");
                        if (!token) throw new Error("No se encontró el token.");

                        const { id } = jwtDecode(token);
                        const newData = {
                            clientname: newClientName || placeholderName,
                            clientemail: newClientEmail || placeholderEmail,
                            clientpassword: newClientPassword,
                        };

                        const response = await updateClient(id, newData);
                        if (response) {
                            toast.success("Datos actualizados exitosamente.");
                            setShowModal(false);
                            renderClientInfo(); // Update rendered client data
                        } else {
                            toast.error("Respuesta inesperada del servidor.");
                        }
                    } catch (error) {
                        console.error("Error al actualizar datos:", error);
                        toast.error("Error al conectar con el servidor.");
                    }
                };

                // Function to render client information
                const renderClientInfo = async () => {
                    try {
                        const codedToken = sessionStorage.getItem("token");

                        if (!codedToken) {
                            throw new Error("No se encontró token en la sessionStorage");
                        }

                        const decodedToken = jwtDecode(codedToken);

                        if (!decodedToken || !decodedToken.id) {
                            throw new Error("Token inválido o no contiene un ID");
                        }

                        const clientId = decodedToken.id;

                        const clientData = await getClientById(clientId); // Call API with client ID

                        if (!clientData || !clientData.clientname || !clientData.clientemail) {
                            throw new Error("Datos del cliente incompletos o incorrectos");
                        }

                        // Update state with fetched data
                        setRenderClientName(clientData.clientname);
                        setRenderClientEmail(clientData.clientemail);

                        // Finish loading
                        setLoading(false);
                    } catch (error) {
                        console.error("Error al obtener datos del cliente:", error);
                        toast.error("Error al cargar los datos del cliente.");
                        setLoading(false); // Ensure loading state is cleared
                    }
                };

                // Component to display client profile
                const clientProfile = () => (
                    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
                        {loading ? (
                            <Typography>Cargando información del cliente...</Typography>
                        ) : (
                            <>
                                <Typography variant="h5" gutterBottom>
                                    Información de Usuario
                                </Typography>
                                <Typography>
                                    <strong>Nombre:</strong> {renderClientName || "No disponible"}
                                </Typography>
                                <Typography>
                                    <strong>Correo Electrónico:</strong> {renderClientEmail || "No disponible"}
                                </Typography>
                                <Button
                                    variant="outlined"
                                    onClick={async () => {
                                        try {
                                            const clientData = await fetchClientId();
                                            setShowModal(true); // Open modal
                                            setPlaceholderName(renderClientName); // Set name for placeholder
                                            setPlaceholderEmail(renderClientEmail); // Set email for placeholder
                                        } catch (error) {
                                            console.error("Error fetching client data:", error);
                                            toast.error("Error al obtener los datos del cliente");
                                        }
                                    }}
                                    sx={{
                                        marginTop: 2,
                                        backgroundColor: "#008000",
                                        color: "#fff",
                                        "&:hover": { backgroundColor: "#007000" },
                                    }}
                                >
                                    Actualizar Datos
                                </Button>
                            </>
                        )}
                    </Card>
                );

                // Component for data update modal
                const dataUpdateModal = () => (
                    <Dialog open={showModal} onClose={() => setShowModal(false)} maxWidth="sm" fullWidth>
                        <DialogTitle>Actualizar Datos</DialogTitle>
                        <form onSubmit={handleUpdate}>
                            <DialogContent>
                                <TextField
                                    fullWidth
                                    label="Nombre"
                                    value={newClientName}
                                    onChange={(e) => setNewClientName(e.target.value)}
                                    placeholder={placeholderName} // Set placeholder
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Correo Electrónico"
                                    value={newClientEmail}
                                    onChange={(e) => setNewClientEmail(e.target.value)}
                                    placeholder={placeholderEmail} // Set placeholder
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Nueva Contraseña"
                                    type="password"
                                    value={newClientPassword}
                                    onChange={(e) => setNewClientPassword(e.target.value)}
                                    placeholder="Ingrese nueva contraseña"
                                    sx={{ mb: 2 }}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#008000',
                                        color: '#fff',
                                        "&:hover": { backgroundColor: "#007000" },
                                    }}
                                >
                                    Guardar Cambios
                                </Button>
                                <Button onClick={() => setShowModal(false)} sx={{ color: "#008000" }}>
                                    Cancelar
                                </Button>
                            </DialogActions>
                        </form>
                    </Dialog>
                );

                // Content rendering based on selected menu
                const content = () => {
                    switch (menu) {
                        case 'Historial de Órdenes':
                            return <div>Historial de Órdenes</div>;
                        case 'Información de Usuario':
                            return clientProfile();
                        case 'Salir':
                            navigate('/Login');
                            return null;
                        default:
                            return (
                                <Typography variant="h5" gutterBottom>
                                    {menu}
                                </Typography>
                            );
                    }
                };

                return (
                    <>
                        <CssBaseline />
                        <GlobalStyles styles={{ body: { fontFamily: "'Patrick Hand', cursive" } }} />
                        <Container maxWidth="xl" sx={{ backgroundColor: '#fafafa ', minHeight: '100vh', padding: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3} md={2} sx={{ backgroundColor: '#008000', color: 'white', padding: 2 }}>
                                    <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}>
                                        Panel de Usuario
                                    </Typography>
                                    <Button
                                        fullWidth
                                        startIcon={<FaHome />}
                                        sx={{ color: 'white', mb: 2 }}
                                        onClick={() => navigate('/Home')}
                                    >
                                        Inicio
                                    </Button>
                                    <Button
                                        fullWidth
                                        startIcon={<FaUserAlt />}
                                        sx={{ color: 'white', mb: 2 }}
                                        onClick={() => setMenu('Información de Usuario')}
                                    >
                                        Información de Usuario
                                    </Button>
                                    <Button
                                        fullWidth
                                        startIcon={<FaClipboardList />}
                                        sx={{ color: 'white', mb: 2 }}
                                        onClick={() => setMenu('Historial de Órdenes')}
                                    >
                                        Historial de Órdenes
                                    </Button>
                                    <Button
                                        fullWidth
                                        startIcon={<FaSignOutAlt />}
                                        sx={{ color: 'white' }}
                                        onClick={() => setMenu('Salir')}
                                    >
                                        Salir
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={9} md={10}>
                                    {content()}
                                    {dataUpdateModal()}
                                </Grid>
                            </Grid>
                        </Container>
                    </>
                );
            };

            export default UserPage;


            The UserPage component is a comprehensive interface for managing user-related data, providing functionalities such as viewing and updating user information, navigating between different sections (like order history), and handling user authentication through JWT decoding and session management.

            Purpose
            The UserPage component serves as a centralized dashboard for users to manage their profile, including updating personal information and accessing different functionalities such as order history or logging out.

            Features
            JWT Decoding and Session Management:

            Uses jwtDecode to decode JWT tokens stored in sessionStorage.
            Fetches user data securely using decoded token data to identify the client.
            User Profile Management:

            Displays client information (name and email), which can be updated through a modal dialog.
            Handles updates to user details (name, email, and password).
            Data Fetching and Updates:

            Fetches client data using getClientById and updates it when needed.
            Error handling is implemented for unsuccessful API requests.
            Modal Dialog for Updates:

            A dialog is used for updating user data, offering fields for new values and a confirmation button to apply changes.
            Provides a user-friendly interface for modifying personal information.
            Navigation and Menu Handling:

            Provides a sidebar menu with options like "Home", "User Information", "Order History", and "Logout".
            Navigates between pages using React Router’s useNavigate.
            Responsive and Themed Design:

            Utilizes Material-UI for a responsive design with custom theming, ensuring a consistent appearance across devices.
            Icons and Buttons:

            Uses icons (FaHome, FaUserAlt, FaClipboardList, FaSignOutAlt) for a visually intuitive interface.
            Loading State:

            A loading state is used to display feedback while data is being fetched or updated.

    routes
        ProtectedRoutes
            Font Code
            import React, { useState } from 'react'; // Import React and useState hook for managing state.
            import { Outlet, useNavigate } from 'react-router-dom'; // Import Outlet for nested routes and useNavigate for navigation.
            import { Button, Modal, Box, TextField, Typography, CircularProgress } from '@mui/material'; // Import Material UI components.
            import { toast } from 'react-toastify'; // Import react-toastify for notifications.
            import { loginAdmin } from '../services/admin'; // Import the loginAdmin service for authentication.
            import { jwtDecode } from "jwt-decode"; // Import jwt-decode for decoding JWT tokens.
            import { motion } from 'framer-motion'; // Import motion for animations.

            const ProtectedRoute = ({ allowedRole }) => {
                const navigate = useNavigate(); // Hook for navigation.
                const token = sessionStorage.getItem('token'); // Retrieve token from sessionStorage.
                const userRole = token ? jwtDecode(token).role : null; // Decode token to get the user's role.
                const [open, setOpen] = useState(false); // State to manage the modal's visibility.
                const [adminEmail, setAdminEmail] = useState(''); // State to manage admin email input.
                const [adminPassword, setAdminPassword] = useState(''); // State to manage admin password input.
                const [loading, setLoading] = useState(false); // State to manage loading spinner during validation.

                const handleValidate = async () => {
                    // Function to validate admin credentials.
                    setLoading(true); // Show loading spinner.
                    try {
                        const response = await loginAdmin({ adminEmail, adminPassword }); // Call login service.

                        if (response && response.token) {
                            // If login successful, store the token and close the modal.
                            sessionStorage.setItem('token', response.token);
                            setOpen(false); // Close modal.
                            toast.success('Acceso concedido', { position: 'top-center' }); // Show success toast.
                        } else {
                            // Show error toast if credentials are incorrect or access is denied.
                            toast.error('Credenciales incorrectas o no tienes permisos de administrador', { position: 'top-center' });
                        }
                    } catch (error) {
                        // Handle and display errors.
                        toast.error(error.message || 'Error al validar', { position: 'top-center' });
                    } finally {
                        // Hide loading spinner.
                        setLoading(false);
                    }
                };

                const handleOpenModal = () => {
                    // Function to open the modal.
                    setOpen(true);
                };

                if (!token || userRole !== allowedRole) {
                    // If no token exists or user role is not allowed, show a validation prompt.
                    return (
                        <Box sx={{ textAlign: 'center', mt: 10 }}>
                            <Typography variant="h5" color="primary" sx={{ mb: 3 }}>
                                Para ingresar a la página solicitada, valida tus credenciales de administrador
                            </Typography>

                            {/* Animated button using Framer Motion */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleOpenModal}
                                    sx={{
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        borderRadius: '20px',
                                        padding: '10px 20px',
                                    }}
                                >
                                    Validar
                                </Button>
                            </motion.div>

                            {/* Modal for admin validation */}
                            <Modal open={open} onClose={() => setOpen(false)}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: 400,
                                        bgcolor: 'background.paper',
                                        boxShadow: 24,
                                        p: 4,
                                        borderRadius: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography variant="h6" sx={{ mb: 2 }}>Validar Administrador</Typography>

                                    {/* Email input field */}
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        label="Correo"
                                        value={adminEmail}
                                        onChange={(e) => setAdminEmail(e.target.value)}
                                        sx={{ mb: 2 }}
                                    />

                                    {/* Password input field */}
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        label="Contraseña"
                                        type="password"
                                        value={adminPassword}
                                        onChange={(e) => setAdminPassword(e.target.value)}
                                        sx={{ mb: 2 }}
                                    />

                                    {/* Validation button */}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        onClick={handleValidate}
                                        sx={{
                                            mt: 2,
                                            fontWeight: 'bold',
                                            borderRadius: '20px',
                                            padding: '12px',
                                        }}
                                        disabled={loading} // Disable button while loading.
                                    >
                                        {loading ? <CircularProgress size={24} /> : 'Validar'} {/* Show spinner or button text. */}
                                    </Button>
                                </Box>
                            </Modal>
                        </Box>
                    );
                }

                // If user is authorized, render the requested route.
                return <Outlet />;
            };

            export default ProtectedRoute; // Export the component for use in other parts of the application.

            The ProtectedRoute component provides a secure way to restrict access to certain parts of a React application based on user roles and authentication. It is particularly useful for ensuring that only authorized administrators can access sensitive sections of an app.

            Purpose
            The ProtectedRoute component is designed to:

            Authenticate Users: Validate user credentials and ensure a valid JWT token is present.
            Authorize Based on Roles: Restrict access based on user roles, such as allowing only administrators to access certain routes.
            Handle Unauthorized Access: Redirect unauthorized users to a validation prompt or deny access.
            Features
            Role-Based Access Control:

            Decodes JWT tokens stored in sessionStorage to retrieve user roles.
            Compares the user's role with the allowedRole prop to determine access eligibility.
            Admin Credential Validation:

            Displays a modal dialog for administrators to validate their credentials.
            Uses the loginAdmin service to verify email and password.
            Error Handling and Feedback:

            Provides clear feedback with react-toastify notifications for successful or failed validation attempts.
            Handles server errors gracefully.
            Loading State:

            Displays a loading spinner during authentication requests to indicate processing.
            Animations:

            Integrates framer-motion for smooth transitions, enhancing the user experience with animations.
            Material-UI for Styling:

            Uses Material-UI components (Modal, TextField, Button, Typography) for a polished and responsive design.
            Nested Routing Support:

            Uses React Router's Outlet to render child components for protected routes seamlessly.


        Routing

            Font Code
            import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
            // Import React Router components: Router for wrapping the app, Routes for defining route structure, and Route for individual routes.

            import Login from "../pages/Login"; // Import the Login page component.
            import Register from "../pages/Register"; // Import the Register page component.
            import Home from "../pages/Home"; // Import the Home page component.
            import AboutUs from "../pages/AboutUs"; // Import the About Us page component.
            import Contacto from "../pages/Contacto"; // Import the Contacto page component.
            import Menu from "../pages/Menu"; // Import the Menu page component.
            import Order from "../pages/Order"; // Import the Order page component.
            import User from "../pages/User"; // Import the User page component.
            import Almacen from "../components/Almacen"; // Import the Almacen component (Admin subpage).
            import Ordenes from "../components/Ordenes"; // Import the Ordenes component (Admin subpage).
            import Clientes from "../components/Clientes"; // Import the Clientes component (Admin subpage).
            import Opciones from "../components/Opciones"; // Import the Opciones component (Admin subpage).
            import ProtectedRoute from "../routes/ProtectedRoute"; 
            // Import ProtectedRoute to secure specific routes based on user roles.
            import AdminPage from "../pages/Admin"; 
            // Import the AdminPage component as a base page for admin subroutes.

            const Routing = () => {
            return (
                <Router>
                {/* Define the structure of routes for the application */}
                <Routes>
                    {/* Public routes */}
                    <Route path="/" element={<Register />} /> 
                    {/* Root route renders the Register page */}
                    <Route path="/Login" element={<Login />} /> 
                    {/* Login route renders the Login page */}
                    <Route path="/Home" element={<Home />} /> 
                    {/* Home route renders the Home page */}
                    <Route path="/AboutUs" element={<AboutUs />} /> 
                    {/* AboutUs route renders the About Us page */}
                    <Route path="/Contacto" element={<Contacto />} /> 
                    {/* Contacto route renders the Contacto page */}
                    <Route path="/Menu" element={<Menu />} /> 
                    {/* Menu route renders the Menu page */}
                    <Route path="/Order" element={<Order />} /> 
                    {/* Order route renders the Order page */}

                    {/* Protected route for admin-specific pages */}
                    <Route 
                    path="/admin" 
                    element={<ProtectedRoute allowedRole="admin" />} 
                    >
                    {/* Nested routes for the Admin section */}
                    <Route path="" element={<AdminPage />}>
                        {/* AdminPage is the base page */}
                        <Route path="almacen" element={<Almacen />} /> 
                        {/* Almacen subpage */}
                        <Route path="ordenes" element={<Ordenes />} /> 
                        {/* Ordenes subpage */}
                        <Route path="clientes" element={<Clientes />} /> 
                        {/* Clientes subpage */}
                        <Route path="opciones" element={<Opciones />} /> 
                        {/* Opciones subpage */}
                    </Route>
                    </Route>
                    
                    {/* Public route for users */}
                    <Route path="/User" element={<User />} /> 
                    {/* User route renders the User page */}
                </Routes>
                </Router>
            );
            };

            export default Routing; 
            // Export the Routing component to be used in the application.


            The Routing component sets up the navigation structure for the application using React Router. It defines public and protected routes, ensuring users have access to appropriate pages based on their roles and authentication status.

            Purpose
            The Routing component is responsible for:

            Defining Application Routes: Organizing and mapping paths to specific page components.
            Managing Public and Protected Access: Distinguishing between routes accessible to all users and those restricted to administrators.
            Providing Nested Routing: Supporting subpages for sections like the admin panel.
            Features
            Public Routes:

            Open to all users, no authentication required.
            Includes pages such as:
            Register ("/")
            Login ("/Login")
            Home ("/Home")
            About Us ("/AboutUs")
            Contacto ("/Contacto")
            Menu ("/Menu")
            Order ("/Order")
            User ("/User")
            Protected Admin Routes:

            Secured using the ProtectedRoute component.
            Restricted to users with the admin role.
            Includes:
            Admin Base Page ("/admin")
            Subpages:
            Almacen ("/admin/almacen")
            Ordenes ("/admin/ordenes")
            Clientes ("/admin/clientes")
            Opciones ("/admin/opciones")
            Nested Routing:

            Admin-specific routes are nested under the /admin path.
            The AdminPage acts as a parent component for subpages like Almacen, Ordenes, Clientes, and Opciones.
            Dynamic Role-Based Security:

            Uses ProtectedRoute to verify user roles and restrict access accordingly.



    Services

        Admin

            Font Code
            import axios from 'axios'; 
            // Import the Axios library for making HTTP requests.

            const URL = import.meta.env.VITE_API_URL; 
            // Fetch the API base URL from environment variables, allowing for dynamic configuration.

            const registerAdmin = async (adminData) => {
                console.log('Sending client data:', adminData);  
                // Log the admin data being sent for debugging purposes.

                try {
                    const response = await axios.post(`${URL}/admin/adminRegister`, adminData);
                    // Send a POST request to register a new admin with the provided admin data.
                    return response.data; 
                    // Return the response data to the caller.
                } catch (error) {
                    console.error("Error response:", error.response);  
                    // Log the error response for debugging.
                    throw error.response?.data || { message: "Error al registrar el cliente" }; 
                    // Throw the error message returned by the API or a default error message.
                }
            };

            const loginAdmin = async (loginData) => {
                try {
                    const response = await axios.post(`${URL}/admin/adminLogin`, loginData);  
                    // Send a POST request for admin login with the provided login credentials.
                    return response.data; 
                    // Return the response data (e.g., token, user details) to the caller.
                } catch (error) {
                    throw error.response?.data || { message: "Error al iniciar sesión" }; 
                    // Throw the error message returned by the API or a default error message.
                }
            };

            const getAllAdmins = async () => {
                try {
                    const response = await axios.get(`${URL}/admin`); 
                    // Send a GET request to retrieve all registered admins.
                    return response.data; 
                    // Return the response data (list of admins) to the caller.
                } catch (error) {
                    console.error("Error al obtener los clientes:", error.response || error); 
                    // Log the error response or full error object for debugging.
                    throw error.response?.data || { message: "Error al obtener los clientes" }; 
                    // Throw the error message returned by the API or a default error message.
                }
            };

            const getAdminById = async (id) => {
                try {
                    const response = await axios.get(`${URL}/admin/${id}`); 
                    // Send a GET request to retrieve a specific admin by their ID.
                    return response.data; 
                    // Return the response data (admin details) to the caller.
                } catch (error) {
                    throw error.response?.data || { message: "Error al obtener el cliente" }; 
                    // Throw the error message returned by the API or a default error message.
                }
            };

            const updateAdmin = async (id, updatedData) => {
                try {
                    const response = await axios.put(`${URL}/admin/${id}`, updatedData); 
                    // Send a PUT request to update an admin's data based on their ID.
                    return response.data; 
                    // Return the updated admin data to the caller.
                } catch (error) {
                    throw error.response?.data || { message: "Error al actualizar el cliente" }; 
                    // Throw the error message returned by the API or a default error message.
                }
            };

            const deleteAdmin = async (id) => {
                try {
                    const response = await axios.delete(`${URL}/admin/${id}`); 
                    // Send a DELETE request to remove an admin by their ID.
                    return response.data; 
                    // Return the deletion confirmation or result to the caller.
                } catch (error) {
                    throw error.response?.data || { message: "Error al eliminar el cliente" }; 
                    // Throw the error message returned by the API or a default error message.
                }
            };

            // Export all the functions for use in other parts of the application.
            export { registerAdmin, loginAdmin, getAdminById, getAllAdmins, updateAdmin, deleteAdmin };

            Dynamic API Configuration:

            The base URL for API requests is dynamically fetched from environment variables (VITE_API_URL), allowing flexibility for different environments (e.g., development, production).
            Admin Operations:

            Register Admin (registerAdmin): Sends a POST request to create a new admin.
            Login Admin (loginAdmin): Sends a POST request to authenticate an admin and retrieve a token or session data.
            Get All Admins (getAllAdmins): Sends a GET request to retrieve a list of all registered admins.
            Get Admin by ID (getAdminById): Sends a GET request to retrieve detailed information about a specific admin by their ID.
            Update Admin (updateAdmin): Sends a PUT request to update an admin's details based on their ID.
            Delete Admin (deleteAdmin): Sends a DELETE request to remove an admin by their ID.
            Error Handling:

            Comprehensive error handling is implemented to log and throw API responses or fallback messages. This ensures that meaningful error information is available for debugging or display.
            Reusable Code:

            Each function is self-contained and reusable across different components of the application.
            Usage
            Importing Functions: You can import and use the required functions in your React components or other services.

            import { registerAdmin, loginAdmin, getAdminById, getAllAdmins, updateAdmin, deleteAdmin } from '../services/admin';
            Example: Registering a New Admin:

            const handleRegister = async (adminData) => {
                try {
                    const response = await registerAdmin(adminData);
                    console.log('Admin registered successfully:', response);
                } catch (error) {
                    console.error('Error registering admin:', error.message);
                }
            };
            Example: Logging in an Admin:

            const handleLogin = async (loginData) => {
                try {
                    const response = await loginAdmin(loginData);
                    console.log('Login successful, token:', response.token);
                } catch (error) {
                    console.error('Error logging in:', error.message);
                }
            };
            Advantages
            Centralized API Interaction:

            Keeps API request logic separate from UI components, promoting clean architecture and maintainability.
            Dynamic Environment Adaptation:

            Uses environment variables to adapt to different deployment scenarios without code changes.
            Comprehensive Error Handling:

            Logs errors for debugging and provides fallback messages for robust application behavior.
            Reusability:

            Encapsulated functions reduce code duplication and simplify future updates or refactoring.


        Client

            Font Code
            import axios from 'axios'; 
            // Import Axios for making HTTP requests.

            const URL = import.meta.env.VITE_API_URL; 
            // Base API URL is fetched from environment variables, ensuring flexibility across environments.

            const registerClient = async (clientData) => {
                console.log('Sending client data:', clientData); 
                // Log the client data being sent for debugging purposes.

                try {
                    const response = await axios.post(`${URL}/client/register`, clientData);
                    // Send a POST request to register a new client with the provided data.
                    return response.data; 
                    // Return the response data to the caller.
                } catch (error) {
                    console.error("Error response:", error.response); 
                    // Log the error response for debugging.
                    throw error.response?.data || { message: "Error al registrar el cliente" }; 
                    // Throw the API error or a default error message.
                }
            };

            const loginClient = async (loginData) => {
                try {
                    const response = await axios.post(`${URL}/client/login`, loginData); 
                    // Send a POST request to log in a client with the provided credentials.
                    sessionStorage.setItem('clientName', response.data.clientName); 
                    // Save the client's name to `sessionStorage` for use across the session.
                    return response.data; 
                    // Return the response data (e.g., token, user info) to the caller.
                } catch (error) {
                    throw error.response?.data || { message: "Error al iniciar sesión" }; 
                    // Throw the API error or a default error message.
                }
            };

            const getAllClients = async () => {
                try {
                    const response = await axios.get(`${URL}/client`); 
                    // Send a GET request to fetch all clients.
                    return response.data; 
                    // Return the list of clients.
                } catch (error) {
                    console.error("Error al obtener los clientes:", error.response || error); 
                    // Log the error response or the entire error object.
                    throw error.response?.data || { message: "Error al obtener los clientes" }; 
                    // Throw the API error or a default error message.
                }
            };

            export const getClientById = async (clientId) => {
                const codedToken = sessionStorage.getItem("token"); 
                // Retrieve the authentication token from `sessionStorage`.

                if (!codedToken) {
                    throw new Error("Token not found in sessionStorage"); 
                    // Throw an error if the token is not found.
                }

                try {
                    const response = await axios.get(`${URL}/client/${clientId}`, {
                        headers: {
                            Authorization: `Bearer ${codedToken}`, 
                            // Include the token in the Authorization header for authenticated requests.
                        },
                    });
                    return response.data; 
                    // Return the client data for the given ID.
                } catch (error) {
                    console.error("Error in getClientById:", error.response?.data || error); 
                    // Log the error for debugging purposes.
                    throw error.response?.data || error; 
                    // Throw the API error or the entire error object.
                }
            };

            const updateClient = async (id, clientData) => {
                const token = sessionStorage.getItem("token"); 
                // Retrieve the authentication token from `sessionStorage`.

                if (!token) {
                    throw new Error("Token not found in sessionStorage"); 
                    // Throw an error if the token is not found.
                }
                
                try {
                    const response = await axios.put(`${URL}/client/${id}`, clientData, {
                        headers: {
                            Authorization: `Bearer ${token}`, 
                            // Include the token in the Authorization header for authenticated requests.
                            "Content-Type": "application/json", 
                            // Specify the content type for the request.
                        },
                    });
                    return response.data; 
                    // Return the updated client data.
                } catch (error) {
                    console.error("Error in updateClient:", error.response?.data || error); 
                    // Log the error for debugging purposes.
                    throw error.response?.data || error; 
                    // Throw the API error or the entire error object.
                }
            };

            const deleteClient = async (id) => {
                const token = sessionStorage.getItem("token"); 
                // Retrieve the authentication token from `sessionStorage`.

                if (!token) {
                    throw new Error("Token not found in sessionStorage"); 
                    // Throw an error if the token is not found.
                }

                try {
                    const response = await axios.delete(`${URL}/client/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`, 
                            // Include the token in the Authorization header for authenticated requests.
                        },
                    });
                    return response.data; 
                    // Return the deletion confirmation or result.
                } catch (error) {
                    console.error("Error in deleteClient:", error.response?.data || error); 
                    // Log the error for debugging purposes.
                    throw error.response?.data || error; 
                    // Throw the API error or the entire error object.
                }
            };

            // Export all client-related functions for use in other parts of the application.
            export { registerClient, loginClient, getAllClients, updateClient, deleteClient };

            The Client Services module is designed to handle all API interactions related to client operations within the application. Using Axios, it performs HTTP requests for tasks such as client registration, authentication, data retrieval, updates, and deletions.

            Purpose
            This module centralizes client-specific API functionality, ensuring consistent and reusable interaction with the backend while maintaining a clean separation of concerns.

            Features
            Dynamic Configuration:

            The base API URL is sourced from environment variables (VITE_API_URL), enabling seamless adaptation to different environments (e.g., development, staging, production).
            Client Operations:

            Register Client (registerClient): Sends a POST request to create a new client account.
            Login Client (loginClient): Authenticates a client via POST, returning session data such as tokens and client information.
            Get All Clients (getAllClients): Fetches a list of all registered clients via GET.
            Get Client by ID (getClientById): Retrieves specific client details using their ID, with token-based authentication.
            Update Client (updateClient): Updates a client's information using their ID, secured by token-based authentication.
            Delete Client (deleteClient): Removes a client record using their ID, with token-based authentication.
            Session Management:

            Uses sessionStorage to securely store and retrieve tokens and session data for authenticated requests.
            Comprehensive Error Handling:

            Logs errors for debugging purposes and throws meaningful error messages for better user feedback and debugging.
            Reusability:

            Encapsulated functions make the code modular and maintainable, enabling their use across multiple components.
            Usage
            Importing Functions: Import the required functions into your React components or services to manage client-related operations.


            import { registerClient, loginClient, getAllClients, getClientById, updateClient, deleteClient } from '../services/client';
            Examples:

            Register a New Client:

            const handleRegister = async (clientData) => {
                try {
                    const response = await registerClient(clientData);
                    console.log('Client registered successfully:', response);
                } catch (error) {
                    console.error('Error registering client:', error.message);
                }
            };
            Login a Client:

            const handleLogin = async (loginData) => {
                try {
                    const response = await loginClient(loginData);
                    console.log('Login successful:', response);
                } catch (error) {
                    console.error('Error logging in:', error.message);
                }
            };
            Retrieve Client Data by ID:

            const fetchClient = async (clientId) => {
                try {
                    const client = await getClientById(clientId);
                    console.log('Client data:', client);
                } catch (error) {
                    console.error('Error fetching client data:', error.message);
                }
            };
            Security Considerations
            Token Authentication:

            API requests for fetching, updating, or deleting client data require a valid token stored in sessionStorage.
            Error Messaging:

            Detailed error logs and custom error messages provide clarity during development and runtime.
            Environment Variable Usage:

            The base URL is dynamically set via environment variables, reducing the risk of exposing sensitive information in the codebase.
            Advantages
            Centralized Logic:

            Consolidates all client-related API calls, improving maintainability and scalability.
            Dynamic Environment Adaptation:

            Environment variable configuration enables seamless deployment across different stages.
            Reusability:

            Modular design ensures functions can be reused and updated independently.
            Error Resilience:

            Comprehensive error handling minimizes runtime disruptions and aids in debugging.

        Dish

            Font Code

            import axios from 'axios'; 
            // Import axios for making HTTP requests.

            const URL = import.meta.env.VITE_API_URL; 
            // API base URL retrieved from environment variables.

            const postDish = async (dishData) => {
                try {
                    const response = await axios.post(`${URL}/dish`, dishData); 
                    // Send a POST request to create a new dish with the provided dish data.
                    return response.data; 
                    // Return the data from the API response.
                } catch (error) {
                    throw error.response?.data || { message: "Error al crear el platillo" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            const getDish = async () => {
                try {
                    const response = await axios.get(`${URL}/dish`); 
                    // Send a GET request to fetch all dishes.
                    return response.data; 
                    // Return the data from the API response.
                } catch (error) {
                    throw error.response?.data || { message: "Error al obtener platillos" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            const getDishById = async (id) => {
                try {
                    const response = await axios.get(`${URL}/dish/${id}`); 
                    // Send a GET request to fetch a specific dish by its ID.
                    return response.data; 
                    // Return the data from the API response.
                } catch (error) {
                    throw error.response?.data || { message: "Error al obtener platillo" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            const updateDish = async (id) => {
                try {
                    const response = await axios.put(`${URL}/dish/${id}`); 
                    // Send a PUT request to update a specific dish by its ID.
                    return response.data; 
                    // Return the data from the API response.
                } catch (error) {
                    throw error.response?.data || { message: "Error al actualizar el platillo" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            const deleteDish = async (id) => {
                try {
                    const response = await axios.delete(`${URL}/dish/${id}`); 
                    // Send a DELETE request to remove a specific dish by its ID.
                    return response.data; 
                    // Return the data from the API response.
                } catch (error) {
                    throw error.response?.data || { message: "Error al eliminar el platillo" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            export { postDish, getDishById, getDish, updateDish, deleteDish }; 
            // Export all dish-related functions for use in other parts of the application.


            The Dish Services module is designed to handle all API interactions related to managing dishes within the application. It provides functions to create, retrieve, update, and delete dishes by leveraging Axios for HTTP requests.

            Purpose
            This module centralizes the logic for interacting with the dish-related endpoints of the backend API, ensuring consistent and reusable functionality across the application.

            Features
            Dynamic Configuration:

            The base API URL is sourced from environment variables (VITE_API_URL), allowing seamless adaptation to different environments such as development, staging, or production.
            Dish Management Operations:

            Create a Dish (postDish): Sends a POST request to add a new dish with the specified data.
            Retrieve All Dishes (getDish): Fetches all available dishes via a GET request.
            Retrieve a Dish by ID (getDishById): Fetches details of a specific dish using its unique ID via a GET request.
            Update a Dish (updateDish): Sends a PUT request to modify a dish’s details using its ID.
            Delete a Dish (deleteDish): Sends a DELETE request to remove a dish by its ID.
            Error Handling:

            Catches and logs API errors, ensuring clear feedback for debugging and user notification.
            Provides default error messages when API responses are unavailable.
            Reusability:

            Encapsulated functions make the module maintainable and reusable across multiple components.
            Usage
            Importing Functions: Import the required functions into your components or services to handle dish-related operations.

            import { postDish, getDish, getDishById, updateDish, deleteDish } from '../services/dish';
            Examples:

            Create a New Dish:

            const handleCreateDish = async (dishData) => {
                try {
                    const response = await postDish(dishData);
                    console.log('Dish created successfully:', response);
                } catch (error) {
                    console.error('Error creating dish:', error.message);
                }
            };
            Retrieve All Dishes:

            const fetchDishes = async () => {
                try {
                    const dishes = await getDish();
                    console.log('All dishes:', dishes);
                } catch (error) {
                    console.error('Error fetching dishes:', error.message);
                }
            };
            Retrieve a Dish by ID:

            const fetchDishById = async (dishId) => {
                try {
                    const dish = await getDishById(dishId);
                    console.log('Dish details:', dish);
                } catch (error) {
                    console.error('Error fetching dish:', error.message);
                }
            };
            Update a Dish:

            const handleUpdateDish = async (dishId, updatedData) => {
                try {
                    const updatedDish = await updateDish(dishId, updatedData);
                    console.log('Dish updated successfully:', updatedDish);
                } catch (error) {
                    console.error('Error updating dish:', error.message);
                }
            };
            Delete a Dish:

            const handleDeleteDish = async (dishId) => {
                try {
                    const result = await deleteDish(dishId);
                    console.log('Dish deleted successfully:', result);
                } catch (error) {
                    console.error('Error deleting dish:', error.message);
                }
            };
            Security Considerations
            Environment Variables:

            Uses a dynamic API URL for flexibility and security, avoiding hardcoding sensitive data in the codebase.
            Error Logging:

            Ensures comprehensive logging of API errors to streamline debugging without exposing sensitive information to end-users.
            Advantages
            Centralized API Logic:

            Encapsulates all dish-related API calls, making the application more organized and maintainable.
            Dynamic and Reusable:

            Easily adaptable to future API changes and reusable across different components.
            Error Resilience:

            Robust error handling ensures stability and clear feedback during development and production.


        DishCategory

            Font Code
            import axios from 'axios'; 
            // Import axios for making HTTP requests.

            const URL = import.meta.env.VITE_API_URL; 
            // API base URL retrieved from environment variables.

            const postDishCategory = async (dishCategoryData) => {
                try {
                    const response = await axios.post(`${URL}/dishC`, dishCategoryData); 
                    // Send a POST request to create a new dish category with the provided data.
                    return response.data; 
                    // Return the created dish category data.
                } catch (error) {
                    throw error.response?.data || { message: "Error al crear categoria" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            const getDishCategory = async () => {
                try {
                    const response = await axios.get(`${URL}/dishC`); 
                    // Send a GET request to fetch all dish categories.
                    return response.data; 
                    // Return the list of dish categories.
                } catch (error) {
                    throw error.response?.data || { message: "Error al obtener categoria" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            const deleteDishCategory = async (id) => {
                try {
                    const response = await axios.delete(`${URL}/dishC/${id}`); 
                    // Send a DELETE request to remove a specific dish category by its ID.
                    return response.data; 
                    // Return the deletion result.
                } catch (error) {
                    throw error.response?.data || { message: "Error al eliminar categoria" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            export { postDishCategory, getDishCategory, deleteDishCategory }; 
            // Export functions for handling dish category operations.


            The Dish Category Services module provides functionality for managing dish categories by interacting with the backend API. This includes creating, retrieving, and deleting dish categories through HTTP requests.

            Purpose
            This module centralizes the logic for dish category-related API interactions, allowing for a consistent and reusable way to manage dish categories in the application.

            Features
            Dynamic API URL:

            The base API URL is dynamically retrieved from environment variables (VITE_API_URL) to allow for easy configuration in different environments.
            Dish Category Operations:

            Create Dish Category (postDishCategory): Sends a POST request to add a new dish category.
            Retrieve All Dish Categories (getDishCategory): Fetches all available dish categories via a GET request.
            Delete Dish Category (deleteDishCategory): Sends a DELETE request to remove a dish category by its ID.
            Error Handling:

            Catches and logs API errors to ensure clear feedback for debugging.
            Provides default error messages when API responses are unavailable or incomplete.
            Reusability:

            Encapsulated functions ensure modularity and reusability across different components.
            Usage
            Importing Functions: Import the necessary functions into your components or services for handling dish category operations.

            import { postDishCategory, getDishCategory, deleteDishCategory } from '../services/dishCategory';
            Examples:

            Create Dish Category:

            const createDishCategory = async (categoryData) => {
                try {
                    const result = await postDishCategory(categoryData);
                    console.log('Dish category created successfully:', result);
                } catch (error) {
                    console.error('Error creating dish category:', error.message);
                }
            };
            Retrieve All Dish Categories:

            const fetchDishCategories = async () => {
                try {
                    const categories = await getDishCategory();
                    console.log('All dish categories:', categories);
                } catch (error) {
                    console.error('Error fetching dish categories:', error.message);
                }
            };
            Delete Dish Category:

            const removeDishCategory = async (id) => {
                try {
                    const result = await deleteDishCategory(id);
                    console.log('Dish category deleted successfully:', result);
                } catch (error) {
                    console.error('Error deleting dish category:', error.message);
                }
            };
            Security Considerations
            Environment Variables:

            The use of dynamic API URLs enhances security by avoiding hardcoding sensitive data directly in the application.
            Error Handling:

            Comprehensive error handling ensures that errors are managed properly, and potential sensitive information is not exposed.
            Advantages
            Centralized Dish Category Logic:

            Provides a centralized, consistent way to manage dish categories, making the application more maintainable and scalable.
            Ease of Use:

            Simple, straightforward functions that handle all necessary API operations for dish categories.
            Error Resilience:

            Robust error handling allows for smooth operation even when the backend API experiences issues.


        Drink

            Font Code
            import axios from 'axios'; 
            // Import axios for making HTTP requests.

            const URL = import.meta.env.VITE_API_URL; 
            // API base URL retrieved from environment variables.

            const postDrink = async (drinkData) => {
                try {
                    const response = await axios.post(`${URL}/drink`, drinkData); 
                    // Send a POST request to create a new drink with the provided data.
                    return response.data; 
                    // Return the created drink data.
                } catch (error) {
                    throw error.response?.data || { message: "Error al crear bebida" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            const getDrink = async () => {
                try {
                    const response = await axios.get(`${URL}/drink`); 
                    // Send a GET request to fetch all drinks.
                    return response.data; 
                    // Return the list of drinks.
                } catch (error) {
                    throw error.response?.data || { message: "Error al obtener bebidas" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            const putDrink = async (id, datos) => {
                try {
                    const response = await axios.put(`${URL}/drink/${id}`, datos); 
                    // Send a PUT request to update a specific drink using its ID and updated data.
                    return response.data; 
                    // Return the updated drink data.
                } catch (error) {
                    throw error.response?.data || { message: "Error al editar bebida" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            const deleteDrink = async (id) => {
                try {
                    const response = await axios.delete(`${URL}/drink/${id}`); 
                    // Send a DELETE request to remove a specific drink by its ID.
                    return response.data; 
                    // Return the deletion result.
                } catch (error) {
                    throw error.response?.data || { message: "Error al eliminar bebida" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            export { postDrink, getDrink, putDrink, deleteDrink }; 
            // Export functions for handling drink operations.


            The Drink Management Service module provides CRUD (Create, Read, Update, Delete) operations for managing drink data through API requests. It includes functions for creating, retrieving, updating, and deleting drinks in the application.

            Features
            Dynamic API URL:

            The base API URL is dynamically retrieved from environment variables (VITE_API_URL) to allow for flexibility across different environments.
            Drink Operations:

            Create Drink (postDrink): Sends a POST request to create a new drink with the provided data.
            Retrieve All Drinks (getDrink): Fetches all available drinks via a GET request.
            Update Drink (putDrink): Sends a PUT request to update a specific drink using its unique ID and updated data.
            Delete Drink (deleteDrink): Sends a DELETE request to remove a drink by its unique ID.
            Error Handling:

            Handles errors gracefully by logging them and providing default error messages when API responses are unavailable.
            Functions
            postDrink:

            Creates a new drink by sending a POST request.
            Returns the created drink data.
            getDrink:

            Retrieves all drinks by sending a GET request.
            Returns a list of drinks.
            putDrink:

            Updates a specific drink by sending a PUT request with updated data.
            Returns the updated drink data.
            deleteDrink:

            Deletes a drink by its ID using a DELETE request.
            Returns the deletion result.
            Usage
            Importing Functions: Import the necessary functions into your components or services for handling drink operations.

            import { postDrink, getDrink, putDrink, deleteDrink } from '../services/drinkManagement';
            Examples:

            Create Drink:

            const createDrink = async (drinkData) => {
                try {
                    const result = await postDrink(drinkData);
                    console.log('Drink created successfully:', result);
                } catch (error) {
                    console.error('Error creating drink:', error.message);
                }
            };
            Retrieve All Drinks:

            const fetchDrinks = async () => {
                try {
                    const drinks = await getDrink();
                    console.log('All drinks:', drinks);
                } catch (error) {
                    console.error('Error fetching drinks:', error.message);
                }
            };
            Update Drink:

            const updateDrink = async (id, updatedData) => {
                try {
                    const result = await putDrink(id, updatedData);
                    console.log('Drink updated successfully:', result);
                } catch (error) {
                    console.error('Error updating drink:', error.message);
                }
            };
            Delete Drink:

            const removeDrink = async (id) => {
                try {
                    const result = await deleteDrink(id);
                    console.log('Drink deleted successfully:', result);
                } catch (error) {
                    console.error('Error deleting drink:', error.message);
                }
            };
            Security Considerations
            Environment Variables:

            Using dynamic API URLs enhances security by preventing the hardcoding of sensitive information.
            Error Handling:

            Comprehensive error handling ensures sensitive data is not exposed, and developers are alerted to potential issues in API interactions.
            Advantages
            Centralized Drink Operations:

            The module encapsulates all necessary operations for managing drinks, promoting a clean and modular approach.
            Ease of Integration:

            Simple, reusable functions streamline the integration of drink management into various parts of the application.
            Error Resilience:

            Robust error management handles potential issues, providing a smooth experience for users and developers.



        Drink

            Font Code
            import axios from 'axios'; 
            // Import axios for making HTTP requests.

            const URL = import.meta.env.VITE_API_URL; 
            // API base URL retrieved from environment variables.

            const postDrink = async (drinkData) => {
                try {
                    const response = await axios.post(`${URL}/drink`, drinkData); 
                    // Send a POST request to create a new drink with the provided data.
                    return response.data; 
                    // Return the created drink data.
                } catch (error) {
                    throw error.response?.data || { message: "Error al crear bebida" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            const getDrink = async () => {
                try {
                    const response = await axios.get(`${URL}/drink`); 
                    // Send a GET request to fetch all drinks.
                    return response.data; 
                    // Return the list of drinks.
                } catch (error) {
                    throw error.response?.data || { message: "Error al obtener bebidas" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            const putDrink = async (id, datos) => {
                try {
                    const response = await axios.put(`${URL}/drink/${id}`, datos); 
                    // Send a PUT request to update a specific drink using its ID and updated data.
                    return response.data; 
                    // Return the updated drink data.
                } catch (error) {
                    throw error.response?.data || { message: "Error al editar bebida" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            const deleteDrink = async (id) => {
                try {
                    const response = await axios.delete(`${URL}/drink/${id}`); 
                    // Send a DELETE request to remove a specific drink by its ID.
                    return response.data; 
                    // Return the deletion result.
                } catch (error) {
                    throw error.response?.data || { message: "Error al eliminar bebida" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            export { postDrink, getDrink, putDrink, deleteDrink }; 
            // Export functions for handling drink operations.


            The Drink Management Module provides essential functions for creating, retrieving, updating, and deleting drinks via API requests. This module is designed to handle interactions with the backend API efficiently and securely.

            Features
            Dynamic API URL:

            The base URL for API requests is dynamically loaded from environment variables (VITE_API_URL), allowing for flexibility across different development, testing, and production environments.
            CRUD Operations:

            The module supports the full CRUD (Create, Read, Update, Delete) functionality for managing drinks.
            Error Handling:

            Comprehensive error handling is implemented to gracefully handle API failures and provide meaningful error messages.
            Functions
            postDrink:

            Creates a new drink by sending a POST request with the provided drink data.
            Returns the created drink data.
            getDrink:

            Retrieves all drinks by sending a GET request.
            Returns the list of drinks.
            putDrink:

            Updates a specific drink by its unique ID with the provided updated data via a PUT request.
            Returns the updated drink data.
            deleteDrink:

            Deletes a drink using its unique ID with a DELETE request.
            Returns the deletion confirmation or result.
            Error Handling
            Each function in the module handles errors by logging them and providing either the error response data or a default error message:

            postDrink: throw error.response?.data || { message: "Error al crear bebida" };
            getDrink: throw error.response?.data || { message: "Error al obtener bebidas" };
            putDrink: throw error.response?.data || { message: "Error al editar bebida" };
            deleteDrink: throw error.response?.data || { message: "Error al eliminar bebida" };
            These mechanisms ensure that failures are caught, and appropriate feedback is given to the user or developer.


        TypeDish

        Font Code

            import axios from 'axios'; 
            // Import axios for making HTTP requests.

            const URL = import.meta.env.VITE_API_URL; 
            // API base URL retrieved from environment variables.

            const createTypeDish = async (typeDishData) => {
                try {
                    const response = await axios.post(`${URL}/typeDish`, typeDishData); 
                    // Send a POST request to create a new type of dish.
                    return response.data; 
                    // Return the created type of dish.
                } catch (error) {
                    throw error.response?.data || { message: "Error al crear tipo de platillo" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            const getTypeDish = async (id) => {
                try {
                    const response = await axios.get(`${URL}/typeDish/${id}`); 
                    // Send a GET request to fetch a specific type of dish by its ID.
                    return response.data; 
                    // Return the type of dish data.
                } catch (error) {
                    throw error.response?.data || { message: "Error al obtener tipo" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            const getAllTypeDish = async () => {
                try {
                    const response = await axios.get(`${URL}/typeDish`); 
                    // Send a GET request to fetch all types of dishes.
                    return response.data; 
                    // Return the list of types of dishes.
                } catch (error) {
                    throw error.response?.data || { message: "Error al obtener tipos de platillos" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            const putTypeDish = async (id) => {
                try {
                    const response = await axios.put(`${URL}/typeDish/${id}`); 
                    // Send a PUT request to update a specific type of dish by its ID.
                    return response.data; 
                    // Return the updated type of dish data.
                } catch (error) {
                    throw error.response?.data || { message: "Error al actualizar el tipo de platillo" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            const deleteTypeDish = async (id) => {
                try {
                    const response = await axios.delete(`${URL}/typeDish/${id}`); 
                    // Send a DELETE request to remove a specific type of dish by its ID.
                    return response.data; 
                    // Return the result of the deletion.
                } catch (error) {
                    throw error.response?.data || { message: "Error al eliminar tipo de platillo" }; 
                    // Handle errors by throwing the error response data or a default message.
                }
            };

            export { createTypeDish, getTypeDish, getAllTypeDish, putTypeDish, deleteTypeDish }; 
            // Export functions for handling type dish operations.


            The Type Dish Management Module provides a set of functions for managing different types of dishes through API requests. This module supports creating, retrieving, updating, and deleting types of dishes, ensuring efficient and seamless interactions with the backend.

            Features
            Dynamic API URL:

            The base API URL is dynamically loaded from environment variables (VITE_API_URL), providing flexibility across different environments.
            CRUD Operations:

            The module handles the full lifecycle of type dish management, including creation, retrieval, updating, and deletion.
            Error Handling:

            Each function implements robust error handling to gracefully manage API failures and return appropriate error messages.
            Functions
            createTypeDish:

            Sends a POST request to create a new type of dish with the provided data.
            Returns the created type dish data.
            getTypeDish:

            Fetches a single type of dish by its unique ID using a GET request.
            Returns the type dish data.
            getAllTypeDish:

            Retrieves all types of dishes by sending a GET request.
            Returns the list of all type dishes.
            putTypeDish:

            Updates a specific type of dish by its unique ID with the provided data via a PUT request.
            Returns the updated type dish data.
            deleteTypeDish:

            Removes a type of dish using its unique ID with a DELETE request.
            Returns the deletion confirmation or result.
            Error Handling
            Each function in the module handles errors by logging them and providing either the error response data or a default error message:

            createTypeDish: throw error.response?.data || { message: "Error al crear tipo de platillo" };
            getTypeDish: throw error.response?.data || { message: "Error al obtener tipo" };
            getAllTypeDish: throw error.response?.data || { message: "Error al obtener tipos de platillos" };
            putTypeDish: throw error.response?.data || { message: "Error al actualizar el tipo de" };
            deleteTypeDish: throw error.response?.data || { message: "Error al eliminar tipo de platillo" };
            These mechanisms ensure that any errors are appropriately managed and that the user or developer receives meaningful feedback.





















