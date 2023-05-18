# USER-API

# config/db.config.js
The dbConn module establishes a connection to a MySQL database using the mysql package. 
It creates a MySQL connection configuration object with the specified host, user, password, and database details. 
Upon successful connection, it logs a message indicating a successful database connection.
The module exports the dbConn object for use in other parts of the application.

# src/controllers/employee.controller.js
The employeeController module contains functions to handle various employee-related operations. 
It includes functions to get a list of all employees, get an employee by ID, create a new employee, update an existing employee, and delete an employee. 
These functions interact with the Employee model to perform the corresponding database operations and send appropriate JSON responses to the client.

# src/models/employee.model.js
The employee.model.js file defines the Employee model constructor function. 
It represents an employee object with properties such as first name, last name, 
email, phone, organization, designation, salary, status, created date, and updated date. 
The model provides functions to perform CRUD operations on the employees table in the database, 
including getting all employees, getting an employee by ID, creating a new employee, updating an employee, and deleting an employee. 
These functions interact with the MySQL database using the dbConn connection and provide callbacks to handle errors and results.

# src/routes/employee.route.js
The employee.routes.js file defines the routing for the employee-related endpoints in the application. 
It uses the Express Router to handle different HTTP methods and map them to corresponding controller functions from employee.controller.js. 
The endpoints include getting all employees, getting an employee by ID, creating a new employee, updating an employee, and deleting an employee. 
These routes ensure proper handling of requests and responses related to employee data.


# USER-API/NodeMySQLCrudAPI.postman_collection.json
The provided JSON represents a Postman collection that contains several API endpoints for a Node.js MySQL CRUD API. 
The collection includes requests for getting all employees, getting an employee by ID, updating an employee by ID, 
creating a new employee, and deleting an employee. Each request specifies the HTTP method, URL, and required parameters or body data. 
The responses are currently empty. This collection can be imported into Postman to test and interact with the API endpoints.


# USER-API/index.js
The provided code sets up an Express.js server to handle HTTP requests. It listens on the specified port 
(either the value of the PORT environment variable or 5000 if not defined). 
The server uses the body-parser middleware to parse request data in both application/x-www-form-urlencoded and application/json formats.
The root route ("/") responds with "Hello World" when accessed via a GET request.
The code imports the employee routes from the "./src/routes/employee.route" file and creates the routes under the 
"/api/v1/employee" path using the employeeRoutes middleware.
Finally, the server starts listening on the specified port and logs a message indicating that Express is running.
This code sets up a basic Express server with a root route and employee routes, and it's ready to handle HTTP requests related to employees.


# USER-API/mysql_query.txt
The provided code includes SQL statements to create a MySQL database named node_mysql_crud_db 
and a table named employees within that database. 
It also inserts two rows of sample data into the employees table.
