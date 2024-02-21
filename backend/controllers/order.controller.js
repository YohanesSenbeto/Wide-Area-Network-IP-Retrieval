// Import the order service
const orderervice = require("../services/order.service");
// Create the add order controller
async function order(req, res, next) {
  // console.log(req.headers);

  // Check if order email already exists in the database
  const orderExists = await orderervice.checkIfOrderExists(
    req.body.order_email
  );
  // If order exists, send a response to the client
  if (orderExists) {
    res.status(400).json({
      error: "This email address is already associated with another order!",
    });
  } else {
    try {
      const orderData = req.body;
      // Create the order
      const order = await orderervice.createOrder(orderData);
      if (!order) {
        res.status(400).json({
          error: "Failed to add the order!",
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

// Create the getAllorder controller
async function getAllorder(req, res, next) {
  // Call the getAllorder method from the order service
  const order = await orderervice.getAllOrders();
  // console.log(order);
  if (!order) {
    res.status(400).json({
      error: "Failed to get all order!",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: order,
    });
  }
}

// Export the createorder controller
module.exports = {
  
  getAllorder,
  order
};
