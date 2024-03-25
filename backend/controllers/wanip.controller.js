const wanIpService = require("../services/wanip.service");

async function retrieveData(req, res) {
  const wan_ip = req.body.ipAddress;

  if (!wan_ip) {
    res.status(400).json({ error: "You have not entered any IP." });
    return;
  }

  try {
    const result = await wanIpService.retrieveData(wan_ip);

    console.log(result)

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: `No data found for WAN IP ${wan_ip}` });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
}
async function addWanIp(req, res) {
  console.log(req.body.wanIp);
  const data = req.body; // Fix: Removed unnecessary square brackets and added a semicolon
  const wanIp = data.wanIp.IpAddress;
  const subnetMask = data.wanIp.SubnetMask;
  const defaultGateway = data.wanIp.DefaultGateway;
  const routerModel = data.wanIp.RouterModel;
  console.log(wanIp);

  if (!wanIp || !subnetMask || !defaultGateway || !routerModel) {
    res.status(400).json({ error: "All fields are required." });
    return;
  }

  try {
    await wanIpService.addWanIp(wanIp, subnetMask, defaultGateway, routerModel);
    res.json({ success: true });
  } catch (error) {
    console.error("Error adding WAN IP:", error);
    res.status(500).json({ error: "An error occurred while adding WAN IP." });
  }
}

async function signup(req, res) {
  const {
    first_name,
    last_name,
    user_email,
    user_password,
    user_city,
    user_subcity,
    user_phone,
  } = req.body;
  console.log(req.body);
  // Validate required fields
  if (!first_name || !last_name || !user_email || !user_password) {
    res.status(400).json({ error: "All fields are required." });
    return;
  }

  try {
    const result = await wanIpService.signup(
      first_name,
      last_name,
      user_email,
      user_password,
      user_city,
      user_subcity,
      user_phone
    );

    const insertedUser = {
      id: result.insertId,
      first_name,
      last_name,
      user_email,
      user_city,
      user_subcity,
      user_phone,
    };
console.log(result)
    res.json({ status: "success", data: insertedUser });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ error: "An error occurred while signing up." });
  }
}

module.exports = {
  retrieveData,
  addWanIp,
  signup, // Add this function
};
