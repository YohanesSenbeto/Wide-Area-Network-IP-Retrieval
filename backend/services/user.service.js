// Import the query function from the db.config.js file
const conn = require("../config/db.config");
// Import the bcrypt module
const bcrypt = require("bcryptjs");

// A function to check if user exists in the database
async function checkIfUserExists(email) {
  const query = "SELECT * FROM users WHERE user_email = ? ";
  const rows = await conn.query(query, [email]);
  console.log(rows);
  return rows.length > 0;
}

// A function to validate user login
async function validateUserLogin(user_email, user_password) {
  const query = "SELECT * FROM users WHERE user_email = ?";
  const rows = await conn.query(query, [user_email]);

  if (rows.length === 0) {
    return { status: "fail", message: "User does not exist" };
  }

  const hashedPassword = rows[0].user_password;
  const passwordMatch = await bcrypt.compare(user_password, hashedPassword);

  if (!passwordMatch) {
    return { status: "fail", message: "Incorrect password" };
  }

  return { status: "success", data: rows[0] };
}

// A function to get all users
async function getAllUsers() {
  const query = "SELECT * FROM users";
  const rows = await conn.query(query);
  return rows;
}

// Export the functions for use in the controller
module.exports = {
  checkIfUserExists,
  validateUserLogin,
  getAllUsers,
};
