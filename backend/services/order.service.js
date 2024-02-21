const conn = require("../config/db.config");
// Check if order with given hash already exists
async function checkIfOrderExists(orderHash) {
  try {
    const [rows] = await query('SELECT * FROM orders WHERE order_hash = ?', [orderHash]);
    return rows.length > 0;
  } catch (error) {
    console.error(error);
    throw new Error("Error checking if order exists");
  }
}

// Create a new order
async function createOrder(orderData) {
  try {
    const sql = 'INSERT INTO orders (staff_id, customer_id, router_id, active_order, order_hash) VALUES (?, ?, ?, ?, ?)';
    const params = [orderData.staff_id, orderData.customer_id, orderData.router_id, orderData.active_order, orderData.order_hash];
    await query(sql, params);
    return { status: 'success' };
  } catch (error) {
    console.error(error);
    throw new Error("Error creating order");
  }
}

// Get all orders
async function getAllOrders() {
  try {
    const [rows] = await query('SELECT * FROM orders');
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting all orders");
  }
}

module.exports = {
  checkIfOrderExists,
  createOrder,
  getAllOrders,
};