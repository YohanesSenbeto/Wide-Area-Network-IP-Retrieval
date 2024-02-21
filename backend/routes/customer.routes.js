// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the login controller
const customerControllers = require("../controllers/customer.controller");

// Create routes to handle the POST requests
router.post("/api/customers", customerControllers.getAllCustomers);
router.post("/api/customer", customerControllers.getOneCustomer);
router.post("/api/add-customer", customerControllers.createCustomer);
router.post("/api/edit-customer", customerControllers.editCustomer);

// Export the router
module.exports = router;