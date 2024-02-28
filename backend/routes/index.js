// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the install router
const installRouter = require("./install.routes");
// Import the employee routes
const staffRouter = require("./staff.routes");
// Import the login routes
const loginRoutes = require("./login.routes");
const orderRoutes = require("./order.routes");
const serviceRoutes = require("./service.routes");
const customerRoutes = require("./customer.routes");
const routerRoutes = require("./router.routes");
const wanipRoutes = require("./wanip.routes");
const supportRoutes = require("./support.routes");
// Add the install router to the main router
router.use(installRouter);
// Add the employee routes to the main router
router.use(staffRouter);
// Add the login routes to the main router
router.use(loginRoutes);
router.use(wanipRoutes);

router.use(orderRoutes);
router.use(serviceRoutes);

router.use(customerRoutes);
router.use(routerRoutes);
router.use(supportRoutes);
// Export the router
module.exports = router;
