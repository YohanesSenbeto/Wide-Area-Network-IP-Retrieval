const conn = require("../config/db.config");

async function checkIfCustomerExists(email) {
  try {
    const [rows] = await conn.query(
      "SELECT * FROM customer_identifier WHERE customer_email = ?",
      [email]
    );
    return rows.length > 0;
  } catch (error) {
    console.error(error);
    throw new Error("Error checking if customer exists");
  }
}

// Create a new customer
async function createCustomer(customerData) {
  try {
    // Insert data into customer_identifier table
    const insertCustomerIdentifier =
      "INSERT INTO customer_identifier (customer_email, customer_phone_number, customer_hash) VALUES (?, ?, ?)";
    const customerIdentifierParams = [
      customerData.customer_email,
      customerData.customer_phone_number,
      customerData.customer_hash,
    ];
    const [customerIdentifierResult] = await conn.query(
      insertCustomerIdentifier,
      customerIdentifierParams
    );

    // Insert data into customer_info table
    const insertCustomerInfo =
      "INSERT INTO customer_info (customer_id, customer_first_name, customer_last_name, active_customer_status) VALUES (?, ?, ?, ?)";
    const customerInfoParams = [
      customerIdentifierResult.insertId,
      customerData.customer_first_name,
      customerData.customer_last_name,
      customerData.active_customer_status,
    ];
    await conn.query(insertCustomerInfo, customerInfoParams);

    // Insert data into customer_router_info table
    const insertCustomerRouterInfo =
      "INSERT INTO customer_router_info (customer_id, router_model, router_type, router_ip, router_serial, router_color) VALUES (?, ?, ?, ?, ?, ?)";
    const customerRouterInfoParams = [
      customerIdentifierResult.insertId,
      customerData.router_model,
      customerData.router_type,
      customerData.router_ip,
      customerData.router_serial,
      customerData.router_color,
    ];
    await conn.query(insertCustomerRouterInfo, customerRouterInfoParams);

    return { status: "success" };
  } catch (error) {
    console.error(error);
    throw new Error("Error creating customer");
  }
}

// Get all customers
async function getAllCustomers() {
  try {
    const [rows] = await conn.query(
      "SELECT * FROM customer_info INNER JOIN customer_router_info ON customer_info.customer_id = customer_router_info.customer_id"
    );
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting all customers");
  }
}

async function getOneCustomer(email) {
  try {
    const [rows] = await conn.query(
      "SELECT * FROM customer_info INNER JOIN customer_router_info ON customer_info.customer_id = customer_router_info.customer_id WHERE customer_email = ?",
      [email]
    );
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting all customers");
  }
}

async function editCustomer(customerData) {
  try {
    const insertCustomerIdentifier =
      "UPDATE INTO customer_identifier (customer_email, customer_phone_number, customer_hash) VALUES (?, ?, ?)";
    const customerIdentifierParams = [
      customerData.customer_email,
      customerData.customer_phone_number,
      customerData.customer_hash,
    ];
    const [customerIdentifierResult] = await conn.query(
      insertCustomerIdentifier,
      customerIdentifierParams
    );

    // Insert data into customer_info table
    const insertCustomerInfo =
      "UPDATE INTO customer_info (customer_id, customer_first_name, customer_last_name, active_customer_status) VALUES (?, ?, ?, ?)";
    const customerInfoParams = [
      customerIdentifierResult.insertId,
      customerData.customer_first_name,
      customerData.customer_last_name,
      customerData.active_customer_status,
    ];
    await conn.query(insertCustomerInfo, customerInfoParams);

    // Insert data into customer_router_info table
    const insertCustomerRouterInfo =
      "UPDATE INTO customer_router_info (customer_id, router_model, router_type, router_ip, router_serial, router_color) VALUES (?, ?, ?, ?, ?, ?)";
    const customerRouterInfoParams = [
      customerIdentifierResult.insertId,
      customerData.router_model,
      customerData.router_type,
      customerData.router_ip,
      customerData.router_serial,
      customerData.router_color,
    ];
    await conn.query(insertCustomerRouterInfo, customerRouterInfoParams);

    return { status: "success" };
  } catch (error) {
    console.error(error);
    throw new Error("Error creating customer");
  }
}

module.exports = {
  checkIfCustomerExists,
  createCustomer,
  getOneCustomer,
  getAllCustomers,
  editCustomer,
};
