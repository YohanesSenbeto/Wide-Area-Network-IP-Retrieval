// Import the express module  
const express = require('express');
// Call the router method from express to create the router 
const router = express.Router();
// Import the staff controller
const staffController = require('../controllers/staff.controller');
// Import middleware 
const authMiddleware = require("../middlewares/auth.middleware");
// Create a route to handle the add staff request on post
router.post("/api/staff", [authMiddleware.verifyToken, authMiddleware.isAdmin], staffController.createstaff);
// Create a route to handle the get all staff request on get
router.get("/api/staff", [authMiddleware.verifyToken, authMiddleware.isAdmin], staffController.getAllstaff);
// Export the router
module.exports = router;