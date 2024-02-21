// Import the service service
const serviceervice = require("../services/service.service");
// Create the add service controller
async function service(req, res, next) {
  // console.log(req.headers);

  // Check if service email already exists in the database
  const serviceExists = await serviceervice.checkIfserviceExists(
    req.body.service_email
  );
  // If service exists, send a response to the client
  if (serviceExists) {
    res.status(400).json({
      error: "This email address is already associated with another service!",
    });
  } else {
    try {
      const serviceData = req.body;
      // Create the service
      const service = await serviceervice.createservice(serviceData);
      if (!service) {
        res.status(400).json({
          error: "Failed to add the service!",
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

// Create the getAllservice controller
async function getAllservice(req, res, next) {
  // Call the getAllservice method from the service service
  const service = await serviceervice.getAllservice();
  // console.log(service);
  if (!service) {
    res.status(400).json({
      error: "Failed to get all service!",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: service,
    });
  }
}

// Export the createservice controller
module.exports = {
  
  getAllservice,
  service
};
