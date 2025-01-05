# ProyectoFinalBackEnd

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


















