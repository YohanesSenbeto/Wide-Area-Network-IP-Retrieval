const wanIpService = require("../services/wanip.service");

async function retrieveData(req, res) {
  const wan_ip = req.body.wan_ip;

  if (!wan_ip) {
    res.status(400).json({ error: "You have not entered any IP." });
    return;
  }

  try {
    const result = await wanIpService.retrieveData(wan_ip);

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
  const { wanIp, subnetMask, defaultGateway, routerModel } = req.body;

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

    res.json({ status: "success", data: result });
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