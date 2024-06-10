import React, { useState } from "react";
import wanIpAdderService from "../../../../services/wanipadder.service";
import { useAuth } from "../../../../Contexts/AuthContext";

function AddIpForm(props) {
    const [zoneRegion, setZoneRegion] = useState("");
    const [startIp, setStartIp] = useState("");
    const [endIp, setEndIp] = useState("");
    const [subnetMask, setSubnetMask] = useState("");
    const [defaultGateway, setDefaultGateway] = useState("");

    const [success, setSuccess] = useState(false);
    const [serverError, setServerError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    let loggedInuserToken = "";
    const { user } = useAuth();
    if (user && user.user_token) {
        loggedInuserToken = user.user_token;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Collect form data
            const formData = {
                zoneRegion,
                startIp,
                endIp,
                subnetMask,
                defaultGateway,
            };
            console.log(formData);

            // Send form data to backend
            await wanIpAdderService.addWanIp(formData);

            // Update state and clear form fields after successful submission
            setSuccessMessage("WAN IP added successfully!");
            setErrorMessage("");
            setZoneRegion("");
            setStartIp("");
            setEndIp("");
            setSubnetMask("");
            setDefaultGateway("");
        } catch (error) {
            console.error("Error adding WAN IP to the server:", error.message);
            setErrorMessage(
                `Error adding WAN IP to the server: ${error.message}`
            );
            setSuccessMessage("");
        }
    };

    return (
        <section className="contact-section">
            <div className="auto-container">
                <div className="contact-title">
                    <h2>Add a new IP</h2>
                </div>
                <div className="row">
                    <div className="form-column col-lg-10">
                        {" "}
                        {/* Increased width to col-lg-10 */}
                        <div className="inner-column">
                            <div className="contact-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            {" "}
                                            {/* Change to col-md-12 */}
                                            <input
                                                type="text"
                                                value={zoneRegion}
                                                onChange={(e) =>
                                                    setZoneRegion(
                                                        e.target.value
                                                    )
                                                }
                                                className="form-control"
                                                required
                                                placeholder="Zone/Region"
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input
                                                type="text"
                                                value={startIp}
                                                onChange={(e) =>
                                                    setStartIp(e.target.value)
                                                }
                                                className="form-control"
                                                required
                                                placeholder="Start IP"
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input
                                                type="text"
                                                value={endIp}
                                                onChange={(e) =>
                                                    setEndIp(e.target.value)
                                                }
                                                className="form-control"
                                                required
                                                placeholder="End IP"
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input
                                                type="text"
                                                value={subnetMask}
                                                onChange={(e) =>
                                                    setSubnetMask(
                                                        e.target.value
                                                    )
                                                }
                                                className="form-control"
                                                required
                                                placeholder="Subnet Mask"
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input
                                                type="text"
                                                value={defaultGateway}
                                                onChange={(e) =>
                                                    setDefaultGateway(
                                                        e.target.value
                                                    )
                                                }
                                                className="form-control"
                                                required
                                                placeholder="Default Gateway"
                                            />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <button
                                                className="theme-btn btn-style-one"
                                                type="submit"
                                                data-loading-text="Please wait..."
                                            >
                                                <span>Add IP</span>
                                            </button>

                                            {successMessage && (
                                                <p className="success-message">
                                                    {successMessage}
                                                </p>
                                            )}
                                            {errorMessage && (
                                                <p className="error-message">
                                                    {errorMessage}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddIpForm;
