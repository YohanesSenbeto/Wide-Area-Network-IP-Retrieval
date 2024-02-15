// Import the dotenv package
require("dotenv").config();
// Import the jsonwebtoken package
const jwt = require("jsonwebtoken");
// Import the employee service
const employeeService = require("../services/employee.service");

// A function to verify the token received from the frontend
const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(403).json({
        status: "fail",
        message: "No token provided!",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user_email = decoded.user_email;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        status: "fail",
        message: "Token expired!",
      });
    } else {
      return res.status(401).json({
        status: "fail",
        message: "Unauthorized!",
      });
    }
  }
};

// A function to check if the user is an admin
const isAdmin = async (req, res, next) => {
  try {
    const user_email = req.user_email;
    const user = await employeeService.getUserByEmail(user_email);

    if (user.length > 0 && user[0].company_role_id === 3) {
      next();
    } else {
      return res.status(403).json({
        status: "fail",
        error: "Not an Admin!",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "An error occurred while checking admin status",
    });
  }
};

const authMiddleware = {
  verifyToken,
  isAdmin,
};

module.exports = authMiddleware;
