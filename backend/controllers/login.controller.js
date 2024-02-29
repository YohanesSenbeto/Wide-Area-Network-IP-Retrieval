// Import the user service
const userService = require("../services/login.service");
// Import the jsonwebtoken module
const jwt = require("jsonwebtoken");
// Import the secret key from the environment variables
const jwtSecret = process.env.JWT_SECRET;

// Handle user login
async function logIn(req, res) {
  try {
    console.log(req.body);
    const data = req.body;
    const user_email = data.user_email;
    const user_password = data.user_password;
    const userType = data.userType;

    let user;

    if (userType === "normal") {
      user = await userService.validateUserLogin(
        user_email,
        user_password,
        userType
      );
    } else if (["admin", "manager", "staff"].includes(userType)) {
      user = await userService.validateUserLogin(
        user_email,
        user_password,
        userType
      );
    } else {
      return res.status(400).json({
        status: "fail",
        message: "Invalid user type",
      });
    }

    // If the user is not found or password is incorrect
    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid credentials",
      });
    }

    // If successful, send a response to the client
    const payload = {
      user_id: user.staff_id || user.user_id,
      user_email: user.user.user_email,
      user_first_name: user.user.staff_first_name || user.user.user_first_name,
      user_last_name: user.staff_last_name || user.user.user_last_name,
      staff_role: user.staff_role || 1,
    };

    const token = jwt.sign(payload, jwtSecret, {
      expiresIn: "24h",
    });

    const sendBack = {
      user_token: token,
    };

    res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      data: sendBack,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "An error occurred during login",
    });
  }
}

// Export the functions
module.exports = {
  logIn,
};
