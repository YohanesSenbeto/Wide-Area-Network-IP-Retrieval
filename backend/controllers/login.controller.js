// Import the login service 
const loginService = require('../services/login.service');
// Import the jsonwebtoken module
const jwt = require("jsonwebtoken");
// Import the secret key from the environment variables
const jwtSecret = process.env.JWT_SECRET;

// Handle employee login 
async function logIn(req, res, next) {
  try {
    console.log(req.body);
    const userData = req.body;
    // Call the logIn method from the login service 
    const user = await loginService.logIn(userData);
    // If the employee is not found
    if (user.status === "fail") {
      res.status(403).json({
        status: user.status,
        message: user.message,
      });
      // console.log(employee.message);
    }
    // If successful, send a response to the client
    const payload = {
      user_id: user.data.employee_id,
      user_email: user.data.user_email,
      user_role: user.data.company_role_id,
      user_first_name: user.data.user_first_name,
    };
    const token = jwt.sign(payload, jwtSecret, {
      expiresIn: "24h",
    });
    // console.log(token);
    const sendBack = {
      employee_token: token,
    };
    res.status(200).json({
      status: "success",
      message: "Employee logged in successfully",
      data: sendBack,
    });
  } catch (error) {

  }
}

// Export the functions 
module.exports = {
  logIn
};