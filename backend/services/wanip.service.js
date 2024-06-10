const { query } = require("../config/db.config");
const conn = require("../config/db.config");
const bcrypt = require("bcryptjs");

async function retrieveData(wan_ip) {
    const query1 =
        "SELECT subnet_mask, default_gateway FROM wan_ipaddress WHERE INET_ATON(?) BETWEEN INET_ATON(start_ip) AND INET_ATON(end_ip);";
    const result1 = await conn.query(query1, [wan_ip]);
    console.log(result1);

    if (result1.length > 0) {
        const { subnet_mask, default_gateway } = result1[0];
        return {
            subnet_mask,
            default_gateway,
        };
    } else {
        return null;
    }
}

async function addWanIp(formData) {
    try {
        const zoneRegion = formData.zoneRegion;
        const startIp = formData.startIp;
        const endIp = formData.endIp;
        const subnetMask = formData.subnetMask;
        const defaultGateway = formData.defaultGateway;

        const sql =
            "INSERT INTO wan_ipaddress (zone_region, start_ip, end_ip, subnet_mask, default_gateway) VALUES (?, ?, ?, ?, ?)";
        const row = await conn.query(sql, [
            zoneRegion,
            startIp,
            endIp,
            subnetMask,
            defaultGateway,
        ]);
        return row;
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
        const result = await conn.query(sql, [
            first_name,
            last_name,
            user_email,
            hashedPassword, // Use the hashed password
            user_city,
            user_subcity,
            user_phone,
        ]);
        console.log("Inserted new user with ID:", result.insertId);

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
