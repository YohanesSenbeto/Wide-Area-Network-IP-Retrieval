// Import the customer service
const customerService = require("../services/customer.service");

// Create the add customer controller
async function createCustomer(req, res) {
  try {
    const email = req.body.customer_email;
    // Check if customer email already exists in the database
    const customerExists = await customerService.checkIfCustomerExists(email);
  
    // If customer exists, send a response to the client
    if (customerExists) {
      return res.status(400).json({
        error: "This email address is already associated with another customer!",
      });
    } else {
      const customerData = req.body;
      // Create the customer
      const customer = await customerService.createCustomer(customerData);
      if (!customer) {
        return res.status(400).json({
          error: "Failed to add the customer!",
        });
      } else {
        return res.status(200).json({
          status: "customer added",
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

// Retrieve all customers controller
async function getAllCustomers(req, res) {
  try {
    // Call the getAllCustomers method from the customer service
    const customers = await customerService.getAllCustomers();
    res.status(200).json({
      status: "success",
      data: customers,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Failed to get all customers!",
    });
  }
}

// Retrieve a single customer controller
async function getOneCustomer(req, res) {
  try {
    // Call the getOneCustomer method from the customer service
    const customer = await customerService.getOneCustomer();
    res.status(200).json({
      status: "success",
      data: customer,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Failed to get one customer!",
    });
  }
}

// Edit a customer controller
async function editCustomer(req, res) {
  try {
    // Call the editCustomer method from the customer service
    const customer = await customerService.editCustomer();
    res.status(200).json({
      status: "success",
      data: customer,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Failed to edit a customer!",
    });
  }
}

// Export the controllers
module.exports = {
  createCustomer,
  getOneCustomer,
  getAllCustomers,
  editCustomer
};
