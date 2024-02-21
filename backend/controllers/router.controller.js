// Import the router service
const routerService = require("../services/router.service");
// Create the add router controller
async function router(req, res, next) {
  // console.log(req.headers);

  // Check if router email already exists in the database
  const routerExists = await routerervice.checkIfRouterExists(
    req.body.router_ip, req.body.router_name
  );
  // If router exists, send a response to the client
  if (routerExists || req.body.router_name) {
    res.status(400).json({
      error: "This router is already associated with another router!",
    });
  } else {
    try {
      const routerData = req.body;
      // Create the router
      const router = await routerService.createRouter(routerData);
      if (!router) {
        res.status(400).json({
          error: "Failed to add the router!",
        });
      } else {
        res.status(200).json({
          status: "true",
        });
      }
    } catch (error) {
      console.log(err);
      res.status(400).json({
        error: "Something went wrong!",
      });
    }
  }
}

// Create the getAllrouter controller
async function getAllRouters(req, res, next) {
  // Call the getAllrouter method from the router service
  const router = await routerService.getAllRouters();
  // console.log(router);
  if (!router) {
    res.status(400).json({
      error: "Failed to get all router!",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: router,
    });
  }
}

// Create the getAllrouter controller
async function getOneRouter(req, res, next) {
  // Call the getAllrouter method from the router service
  const router = await routerService.getOneRouter(ip);
  // console.log(router);
  if (!router) {
    res.status(400).json({
      error: "Failed to get all router!",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: router,
    });
  }
}

// Create the getAllrouter controller
async function editRouter(req, res, next) {
  // Call the getAllrouter method from the router service
  const router = await routerService.editRouter(routerData);
  // console.log(router);
  if (!router) {
    res.status(400).json({
      error: "Failed to get all router!",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: router,
    });
  }
}

// Export the createrouter controller
module.exports = {
  getAllRouters,
  getOneRouter,
  // createRouter,
  editRouter
};
