// wanip.service.js
const { query } = require("../config/db.config");
const conn = require("../config/db.config");
const bcrypt = require("bcrypt");

async function retrieveData(wan_ip) {
  const sql =
    "SELECT subnet_mask, default_gateway, router_model FROM wan_ip WHERE wan_ip = ?";
  const results = await conn.query(sql, [wan_ip]);

  if (results.length > 0) {
    const { subnet_mask, default_gateway, router_model } = results[0];
    let tutorialLink = "";

    if (router_model === "Cisco") {
      tutorialLink = "https://www.youtube.com/watch?v=UoGAksPaUcs";
    } else if (router_model === "TP-Link") {
      tutorialLink = "https://www.youtube.com/watch?v=UoGAksPaUcs";
    }

    return {
      subnet_mask,
      default_gateway,
      tutorial_link: tutorialLink,
    };
  } else {
    return null;
  }
}
async function addWanIp(wanIp, subnetMask, defaultGateway, routerModel) {
  try {
    const sql =
      "INSERT INTO wan_ip (wan_ip, subnet_mask, default_gateway, router_model) VALUES (?, ?, ?, ?)";
    await query(sql, [wanIp, subnetMask, defaultGateway, routerModel]);
  } catch (error) {
    console.error("Error adding WAN IP:", error);
    throw error;
  }
}


async function signup(
  first_name,
  last_name,
  user_email,
  user_password,
  user_city,
  user_subcity,
  user_phone
) {
  try {
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user_password, salt);

    const sql =
      "INSERT INTO users (first_name, last_name, user_email, user_password, user_city, user_subcity, user_phone) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const [result] = await conn.query(sql, [
      first_name,
      last_name,
      user_email,
      hashedPassword, // Use the hashed password
      user_city,
      user_subcity,
      user_phone,
    ]);
    console.log(result);

    return result;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
}


module.exports = {
  retrieveData,
  addWanIp,
  signup, // Add this function
};
