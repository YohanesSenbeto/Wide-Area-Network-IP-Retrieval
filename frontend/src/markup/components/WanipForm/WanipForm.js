import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";
import "./WanIpRequester.css";

function WanIpRequester() {
  const [ipAddress, setIpAddress] = useState("");
  const [error, setError] = useState("");
  const [subnetMask, setSubnetMask] = useState("");
  const [defaultGateway, setDefaultGateway] = useState("");
  const [tutorialLink, setTutorialLink] = useState("");
  const [selectedRouter, setSelectedRouter] = useState("");

  const routerOptions = [
    "Tp-link",
    "D-link124",
    "Huawei",
    "ZTE",
    "Systrome",
    "Comnect",
    "GPON ONT2212",
    "Greentech",
  ];

  const validateIPaddress = (ipaddress) => {
    const regex = new RegExp(
      "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
    );
    return regex.test(ipaddress);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("this is the ip address to send to backend ");
    console.log(ipAddress);

    if (validateIPaddress(ipAddress)) {
      setError("");
      try {
        // Send a POST request to the backend API
        const response = await fetch("http://localhost:8000/api/wanipretrive", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ipAddress, selectedRouter }),
        });

        if (!response.ok) {
          throw new Error("Error sending IP address to the server.");
        }

        const data = await response.json();
        setSubnetMask(data.subnet_mask);
        setDefaultGateway(data.default_gateway);
        setTutorialLink(data.tutorial_link);
      } catch (error) {
        setError("Error sending IP address to the server.");
      }
    } else {
      setError("Please enter a valid IP address.");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label>
          <h1>WAN IP</h1>
        </label>
        <input
          type="text"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
          required
          placeholder="Input your WAN IP here"
        />

        <Form.Group controlId="routerSelect">
          <Form.Label>Select Router:</Form.Label>
          <Form.Control
            as="select"
            custom
            onChange={(e) => setSelectedRouter(e.target.value)}
            value={selectedRouter}
          >
            <option value="" disabled>
              Select router
            </option>
            {routerOptions.map((router, index) => (
              <option key={index} value={router}>
                {router}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {error && <p className="error-message">{error}</p>}
        <input type="submit" value="Submit" />
      </form>

      {subnetMask && defaultGateway && (
        <div className="result">
          <p>Subnet Mask: {subnetMask}</p>
          <p>Default Gateway: {defaultGateway}</p>
          {tutorialLink && (
            <div className="video-card">
              <h3>Tutorial Video</h3>
              <iframe
                width="100%"
                height="315"
                src={tutorialLink}
                title="Router Tutorial Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      )}
    </Container>
  );
}

export default WanIpRequester;
