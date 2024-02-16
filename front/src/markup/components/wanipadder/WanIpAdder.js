// WanIpAdder.js
import React, { useState } from "react";
import "./WanIpAdder.css"; // Import your CSS file
import wanIpAdderService from "../../../services/wanipadder.service"; // Import the WAN IP service

function WanIpAdder() {
  const [wanIp, setWanIp] = useState("");
  const [subnetMask, setSubnetMask] = useState("");
  const [defaultGateway, setDefaultGateway] = useState("");
  const [routerModel, setRouterModel] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("About to add IP address");
      // Use the wanIpAdderService to send data to the server
      await wanIpAdderService.addWanIp({
        wanIp,
        subnetMask,
        defaultGateway,
        routerModel,
      });

      setSuccessMessage("WAN IP added successfully!");
      setErrorMessage("");
    } catch (error) {
      console.error("Error adding WAN IP to the server:", error.message);
      setErrorMessage(`Error adding WAN IP to the server: ${error.message}`);
      setSuccessMessage("");
    }
  };

  return (
    <div className="wan-ip-adder-container">
      <form onSubmit={handleSubmit}>
        <label>
          <h1>Add WAN IP</h1>
        </label>
        <input
          type="tel" // Use tel type for IP address
          value={wanIp}
          onChange={(e) => setWanIp(e.target.value)}
          required
          placeholder="WAN IP"
        />
        <input
          type="text"
          value={subnetMask}
          onChange={(e) => setSubnetMask(e.target.value)}
          required
          placeholder="Subnet Mask"
        />
        <input
          type="text"
          value={defaultGateway}
          onChange={(e) => setDefaultGateway(e.target.value)}
          required
          placeholder="Default Gateway"
        />
        <input
          type="text"
          value={routerModel}
          onChange={(e) => setRouterModel(e.target.value)}
          required
          placeholder="Router Model"
        />

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <input type="submit" value="Add WAN IP" />
      </form>
    </div>
  );
}

export default WanIpAdder;
