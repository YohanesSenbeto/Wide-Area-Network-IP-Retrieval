// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the login controller
const wanIpController = require("../controllers/wanip.controller");
// Create a route to handle the login request on post
router.post("/api/wanipretrive", wanIpController.retrieveData);
router.post("/api/addWanIp", wanIpController.addWanIp);
router.post("/api/signup", wanIpController.signup);
// Export the router
module.exports = router;
