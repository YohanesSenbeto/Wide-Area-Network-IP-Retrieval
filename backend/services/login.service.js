// Import the query function from the db.config.js file
const conn = require("../config/db.config");
// Import the bcrypt module
const bcrypt = require("bcryptjs");

// A function to check if user exists in the database
async function checkIfUserExists(email, userType) {
    let tableName;

<<<<<<< HEAD
    switch (userType) {
        case "admin":
        case "manager":
        case "staff":
            tableName = "staff";
            break;
        default:
            tableName = "users";
    }

=======
  switch (userType) {
    case "admin":
    case "manager":
    case "staff":
      tableName = "staff";
      break;
    default:
      tableName = "users";
  }
  if (tableName === "users") {
>>>>>>> 699f29c32fbf9e098d946472a8d8e028210e44bf
    const query = `SELECT * FROM ${tableName} WHERE user_email = ?`;
    const rows = await conn.query(query, [email]);
    console.log(rows);
    return rows.length > 0;
<<<<<<< HEAD
=======
  } else {
    const query = `SELECT * FROM ${tableName} WHERE staff_email = ?`;
    const rows = await conn.query(query, [email]);
    console.log(rows);
    return rows.length > 0;
  }
>>>>>>> 699f29c32fbf9e098d946472a8d8e028210e44bf
}

async function getUserData(email, userType) {
    let tableName;

    switch (userType) {
        case "admin":
        case "manager":
        case "staff":
            tableName = "staff";
            break;
        default:
            tableName = "users";
    }

<<<<<<< HEAD
    const query = `SELECT * FROM ${tableName} WHERE ${tableName}_email = ?`;
    const userData = await conn.query(query, [email]);
    console.log(userData);
    return userData[0]; // Assuming you expect only one user with a given email
=======

  if (tableName === "users") {
    const query = `SELECT * FROM ${tableName} WHERE user_email = ?`;
 const userData = await conn.query(query, [email]);
  console.log(userData);
  return userData[0]; 
  } else {
    const query = `SELECT * FROM ${tableName} WHERE staff_email = ?`;
    const userData = await conn.query(query, [email]);
  console.log(userData);
  return userData[0]; 
  }
>>>>>>> 699f29c32fbf9e098d946472a8d8e028210e44bf
}

 
// A function to validate user login
async function validateUserLogin(user_email, user_password, userType) {
    try {
        let tableName, idField, emailField, passwordField;

        if (userType === "normal") {
            tableName = "users";
            idField = "user_id";
            emailField = "user_email";
            passwordField = "user_password";
        } else if (["admin", "manager", "staff"].includes(userType)) {
            tableName = "staff";
            idField = "staff_id";
            emailField = "staff_email";
            passwordField = "staff_password"; // Adjust based on your database structure
        } else {
            return { status: "fail", message: "Invalid user type" };
        }

        // Query to check if the user with the given email exists
        const userQuery = `SELECT * FROM ${tableName} WHERE ${emailField} = ?`;
        const userRows = await conn.query(userQuery, [user_email]);

        if (userRows.length === 0) {
            return { status: "fail", message: "User does not exist" };
        }

        // Check if the user is active
        if (userRows[0].active_staff !== 1 && userType !== "normal") {
            return { status: "fail", message: "User is not active" };
        }

        // Compare passwords
        const hashedPassword = userRows[0][passwordField];
        const passwordMatch = await bcrypt.compare(
            user_password,
            hashedPassword
        );

        if (!passwordMatch) {
            return { status: "fail", message: "Incorrect password" };
        }
        console.log(userRows[0]);

        return { status: "success", user: userRows[0] };
    } catch (error) {
        console.error(error);
        return { status: "error", message: "An error occurred during login" };
    }
}

// A function to get all users
async function getAllUsers(userType) {
    let tableName;

    switch (userType) {
        case "admin":
        case "manager":
        case "staff":
            tableName = "staff";
            break;
        default:
            tableName = "users";
    }

    const query = `SELECT * FROM ${tableName}`;
    const rows = await conn.query(query);
    return rows;
}

// Export the functions for use in the controller
module.exports = {
    checkIfUserExists,
    validateUserLogin,
    getAllUsers,
    getUserData,
};
