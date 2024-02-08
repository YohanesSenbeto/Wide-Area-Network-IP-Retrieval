// Import the mysql2 module Promise Wrapper 
const mysql = require('mysql2/promise');
// Prepare connection parameters we use to connect to the database
const dbConfig = {
  //socketPath: process.env.DB_SOCKET_PATH,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
}
// Create the connection pool  
const pool = mysql.createPool(dbConfig);
// Prepare a function that will execute the SQL queries asynchronously
async function query(sql, params) {
  const [rows, fields] = await pool.execute(sql, params);
  return rows;
}


const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) UNIQUE NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_city VARCHAR(255),
    user_subcity VARCHAR(255),
    user_phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

// Execute the query to create the user table
async function createTable() {
  try {
    await query(createUserTableQuery);
    console.log("User table created successfully");
  } catch (error) {
    console.error("Error creating user table:", error);
  } finally {
    // Close the connection pool if needed
    pool.end();
  }
}
createTable();

// Export the query function for use in the application
module.exports = { query, createTable };