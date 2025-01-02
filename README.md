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

