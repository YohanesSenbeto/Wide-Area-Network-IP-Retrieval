// Import the query function from the db.config.js file
const conn = require("../config/db.config");
// Import the bcrypt module
const bcrypt = require("bcryptjs");
// A function to check if staff exists in the database
async function checkIfstaffExists(email) {
  const query = "SELECT * FROM staff WHERE staff_email = ? ";
  const rows = await conn.query(query, [email]);
  console.log(rows);
  if (rows.length > 0) {
    return true;
  }
  return false;
}

// A function to create a new staff
async function createstaff(staff) {
  let createdstaff = {};
  try {
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    // Hash the password
    const hashedPassword = await bcrypt.hash(staff.staff_password, salt);
    // Insert the email in to the staff table
    const query =
      "INSERT INTO staff (staff_email, active_staff) VALUES (?, ?)";
    const rows = await conn.query(query, [
      staff.staff_email,
      staff.active_staff,
    ]);
    console.log(rows);
    if (rows.affectedRows !== 1) {
      return false;
    }
    // Get the staff id from the insert
    const staff_id = rows.insertId;
    // Insert the remaining data in to the staff_info, staff_pass, and staff_role tables
    const query2 =
      "INSERT INTO staff_info (staff_id, staff_first_name, staff_last_name, staff_phone) VALUES (?, ?, ?, ?)";
    const rows2 = await conn.query(query2, [
      staff_id,
      staff.staff_first_name,
      staff.staff_last_name,
      staff.staff_phone,
    ]);
    const query3 =
      "INSERT INTO staff_pass (staff_id, staff_password_hashed) VALUES (?, ?)";
    const rows3 = await conn.query(query3, [staff_id, hashedPassword]);
    const query4 =
      "INSERT INTO staff_role (staff_id, company_role_id) VALUES (?, ?)";
    const rows4 = await conn.query(query4, [
      staff_id,
      staff.company_role_id,
    ]);
    // construct to the staff object to return
    createdstaff = {
      staff_id: staff_id,
    };
  } catch (err) {
    console.log(err);
  }
  // Return the staff object
  return createdstaff;
}
// A function to get staff by email
async function getstaffByEmail(staff_email) {
  const query =
    "SELECT * FROM staff INNER JOIN staff_info ON staff.staff_id = staff_info.staff_id INNER JOIN staff_pass ON staff.staff_id = staff_pass.staff_id INNER JOIN staff_role ON staff.staff_id = staff_role.staff_id WHERE staff.staff_email = ?";
  const rows = await conn.query(query, [staff_email]);
  return rows;
}
// A function to get all staffs
async function getAllstaffs() {
  const query =
    "SELECT * FROM staff INNER JOIN staff_info ON staff.staff_id = staff_info.staff_id INNER JOIN staff_role ON staff.staff_id = staff_role.staff_id INNER JOIN company_roles ON staff_role.company_role_id = company_roles.company_role_id ORDER BY staff.staff_id DESC limit 10";
  const rows = await conn.query(query);
  return rows;
}
// Export the functions for use in the controller
module.exports = {
  checkIfstaffExists,
  createstaff,
  getstaffByEmail,
  getAllstaffs,
};
