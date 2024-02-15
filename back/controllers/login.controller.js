// Import the user service
const userService = require("../services/login.service");
// Import the jsonwebtoken module
const jwt = require("jsonwebtoken");
// Import the secret key from the environment variables
const jwtSecret = process.env.JWT_SECRET;

// Handle user login
async function logIn(req, res, next) {
  try {
    console.log(req.body);
    const userData = req.body;
    // Call the logIn method from the user service
    const user = await userService.validateUserLogin(
      userData.user_email,
      userData.user_password
    );

    // If the user is not found or password is incorrect
    if (user.status === "fail") {
      return res.status(403).json({
        status: user.status,
        message: user.message,
      });
    }

    // If successful, send a response to the client
    const payload = {
      user_id: user.data.user_id,
      user_email: user.data.user_email,
      user_first_name: user.data.user_first_name,
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
