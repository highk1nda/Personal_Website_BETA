<?php
/* 
1. Retrieve Form Data: It retrieves the values of 'name' and 'email' fields from 
the form submitted via POST method.
2. Database Connection: It establishes a connection to a MySQL database hosted on the 'localhost' 
server using the provided database credentials (name, password, and database name).
3. Insert Data: It constructs an SQL query to insert the retrieved 'name' and 'email' 
values into the 'users' table of the specified database.
4. Execute Query: It executes the SQL query. If the insertion is successful, it prints 
"New record created successfully". If there is an error during the insertion, 
it prints an error message along with the specific SQL query causing the error.
5. Close Connection: Finally, it closes the database connection to release resources.
*/

// Retrieve form data
$name = $_POST['name']; // Get name from the form submission
$email = $_POST['email']; // Get email from the form submission

// Database connection parameters
$servername = "localhost"; // Server where your database is hosted
$db_name = "your_username"; // Your database username
$db_password = "your_password"; // Your database password
$database = "your_database"; // Your database name

// Create a new connection to the database
$conn = new mysqli($servername, $db_name, $db_password, $database);

// Check if the connection is successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); // Display error message if connection fails
}

// Prepare SQL query to insert form data into 'users' table
$sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";

// Execute the SQL query and check for success
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully"; // Display success message if the query is successful
} else {
    echo "Error: " . $sql . "<br>" . $conn->error; // Display error message if the query fails
}

// Close the database connection
$conn->close();
?>