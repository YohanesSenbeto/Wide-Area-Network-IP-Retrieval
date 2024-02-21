const conn = require("../config/db.config");
let query =conn.query


// Check if router with given serial number already exists
async function checkIfRouterExists(ip,router_name) {
  try {
    const [rows] = await query(
      "SELECT * FROM router_table  WHERE router_ip = ? or router_name =?",
      [ip] || [router_name]
    );
    return rows.length > 0;
  } catch (error) {
    console.error(error);
    throw new Error("Error checking if router exists");
  }
}

// Create a new router
async function createRouter(routerData) {
  try {
    const sql =
      "INSERT INTO router_table (wan_ipaddress,subnet_mask,default_gateway,router_model) VALUES (?, ? ?, ?)";
    const params = [
    
      routerData.wan_ipaddress,
      routerData.subnet_mask,
       routerData.default_gateway,
        routerData.router_model,
    
    ];
    await query(sql, params);
    return { status: "success" };
  } catch (error) {
    console.error(error);
    throw new Error("Error creating router");
  }
}

//edt router data
async function editRouter(routerData) {
  try {
    const sql =
      "UPDATE INTO router_table (wan_ipaddress,subnet_mask,default_gateway,router_model) VALUES (?, ? ?, ?)";
   const params = [
    
      routerData.wan_ipaddress,
      routerData.subnet_mask,
       routerData.default_gateway,
        routerData.router_model,
    
    ];
    await query(sql, params);
    return { status: "success" };
  } catch (error) {
    console.error(error);
    throw new Error("Error creating router");
  }
}


// Get all routers
async function getAllRouters() {
  try {
    const [rows] = await query("SELECT * FROM router_table");
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting all routers");
  }
}

async function getOneRouter(ip) {
  try {
   const [rows] = await query(
      "SELECT * FROM router_table  WHERE router_ip = ? or router_name =?",
      [ip] || [router_name]
    );
    return rows
  } catch (error) {
    console.error(error);
    throw new Error("Error getting all routers");
  }
}

module.exports = {
  query,
  checkIfRouterExists,
  createRouter,
  getAllRouters,
};

