// Import the staff service
const staffervice = require("../services/staff.service");
// Create the add staff controller
async function createstaff(req, res, next) {
  // console.log(req.headers);

  // Check if staff email already exists in the database
  const staffExists = await staffervice.checkIfstaffExists(
    req.body.staff_email
  );
  // If staff exists, send a response to the client
  if (staffExists) {
    res.status(400).json({
      error: "This email address is already associated with another staff!",
    });
  } else {
    try {
      const staffData = req.body;
      // Create the staff
      const staff = await staffervice.createstaff(staffData);
      if (!staff) {
        res.status(400).json({
          error: "Failed to add the staff!",
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

// Create the getAllstaff controller
async function getAllstaff(req, res, next) {
  // Call the getAllstaff method from the staff service
  const staff = await staffervice.getAllstaff();
  // console.log(staff);
  if (!staff) {
    res.status(400).json({
      error: "Failed to get all staff!",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: staff,
    });
  }
}

// Export the createstaff controller
module.exports = {
  createstaff,
  getAllstaff,
};
