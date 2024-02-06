import React, { useState } from "react";
import "./WanIpRequester.css"; // Import your CSS file

function WanIpRequester() {
  const [ipAddress, setIpAddress] = useState("");
  const [error, setError] = useState("");

  const validateIPaddress = (ipaddress) => {
    const regex = new RegExp(
      "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
    );
    return regex.test(ipaddress);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateIPaddress(ipAddress)) {
      setError("");
      // Send a POST request to the backend API
      const response = await fetch("api/wanipretrive", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ipAddress }),
      });

      if (!response.ok) {
        setError("Error sending IP address to the server.");
        return;
      }

      const data = await response.json();
      console.log(data);
    } else {
      setError("Please enter a valid IP address.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label><h1>WAN IP</h1></label>
          <input
            type="text"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            required
            placeholder="input your wanip here"
          />
        
        {error && <p>{error}</p>}
        <input type="submit" value="Submit" />
      </form>

      </div>
  );
}

export default WanIpRequester;
