// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the login controller
const routerControllers = require("../controllers/router.controller");
// Create a route to handle the login request on post
router.post("/api/routers", routerControllers.getAllRouters);
router.post("/api/router", routerControllers.getOneRouter);
// router.post("/api/add-router", routerControllers.createRouter);
router.post("/api/edit-router", routerControllers.editRouter);
// Export the router
module.exports = router;

