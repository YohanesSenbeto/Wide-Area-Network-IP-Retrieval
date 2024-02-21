// Import the staff service
const staffService = require("../services/login.service");
// Import the jsonwebtoken module
const jwt = require("jsonwebtoken");
// Import the secret key from the environment variables
const jwtSecret = process.env.JWT_SECRET;

// Handle staff login
async function logIn(req, res, next) {
  try {
    console.log(req.body);
    const staffData = req.body;
    // Call the logIn method from the staff service
    const staff = await staffService.validatestaffLogin(
      staffData.staff_email,
      staffData.staff_password
    );

    // If the staff is not found or password is incorrect
    if (staff.status === "fail") {
      return res.status(403).json({
        status: staff.status,
        message: staff.message,
      });
    }

    // If successful, send a response to the client
    const payload = {
      staff_id: staff.data.staff_id,
      staff_email: staff.data.staff_email,
      staff_first_name: staff.data.staff_first_name,
      staff_last_name: staff.data.staff_last_name,
      staff_role_id: staff.data.staff_role_id,
    };

    const token = jwt.sign(payload, jwtSecret, {
      expiresIn: "24h",
    });

    const sendBack = {
      staff_token: token,
    };

    res.status(200).json({
      status: "success",
      message: "staff logged in successfully",
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
