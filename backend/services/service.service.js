const conn = require("../config/db.config");
// Import the MySQL2 module Promise Wrapper
const query = conn.query;

// Prepare a function that will execute the SQL queries asynchronously

// Prepare a function that will execute the SQL queries asynchronously

// Check if service with given name already exists
async function checkIfServiceExists(serviceName) {
  try {
    const [rows] = await query(
      "SELECT * FROM common_services WHERE service_name = ?",
      [serviceName]
    );
    return rows.length > 0;
  } catch (error) {
    console.error(error);
    throw new Error("Error checking if service exists");
  }
}

// Create a new service
async function createService(serviceData) {
  try {
    const sql =
      "INSERT INTO common_services (service_name, service_description) VALUES (?, ?)";
    const params = [serviceData.service_name, serviceData.service_description];
    await query(sql, params);
    return { status: "success" };
  } catch (error) {
    console.error(error);
    throw new Error("Error creating service");
  }
}

// Get all services
async function getAllServices() {
  try {
    const [rows] = await query("SELECT * FROM common_services");
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting all services");
  }
}

module.exports = {
  query,
  checkIfServiceExists,
  createService,
  getAllServices,
};
