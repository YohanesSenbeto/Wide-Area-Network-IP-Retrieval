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
            setErrorMessage(`Error adding WAN IP: ${error.message}`);
            setSuccessMessage("");
        }
    };

    return (
        <div className="wan-ip-adder-container">
            <h1 className="form-title">Add WAN IP</h1>
            <form onSubmit={handleSubmit} className="ip-form">
                <input
                    type="text"
                    value={wanIp}
                    onChange={(e) => setWanIp(e.target.value)}
                    required
                    placeholder="WAN IP"
                    className="input-field"
                />
                <input
                    type="text"
                    value={subnetMask}
                    onChange={(e) => setSubnetMask(e.target.value)}
                    required
                    placeholder="Subnet Mask"
                    className="input-field"
                />
                <input
                    type="text"
                    value={defaultGateway}
                    onChange={(e) => setDefaultGateway(e.target.value)}
                    required
                    placeholder="Default Gateway"
                    className="input-field"
                />
                <input
                    type="text"
                    value={routerModel}
                    onChange={(e) => setRouterModel(e.target.value)}
                    required
                    placeholder="Router Model"
                    className="input-field"
                />

                {successMessage && (
                    <p className="success-message">{successMessage}</p>
                )}
                {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                )}
                <button type="submit" className="submit-button">
                    Add WAN IP
                </button>
            </form>
        </div>
    );
}

export default WanIpAdder;
