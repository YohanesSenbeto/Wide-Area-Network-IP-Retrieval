import React, { useState } from "react";
// import Ip.service.js
import wanIpAdderService from "../../../../services/wanipadder.service";
// Import the useAuth hook
import { useAuth } from "../../../../Contexts/AuthContext";

function AddIpForm(props) {
  const [IpAddress, setIpAdress] = useState("");
  const [SubnetMask, setSubnetMask] = useState("");
  const [DefaultGateway, setDefaultGateway] = useState("");
  const [RouterModel, setRouterModel] = useState("");

  // Errors

  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Create a variable to hold the user's token
  let loggedInuserToken = "";
  // Destructure the auth hook and get the token
  const { user } = useAuth();
  if (user && user.user_token) {
    loggedInuserToken = user.user_token;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("About to add IP address");
      // Use the wanIpAdderService to send data to the server
      await wanIpAdderService.addWanIp({
        IpAddress,
        SubnetMask,
        DefaultGateway,
        RouterModel,
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
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Add a new Ip</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      {serverError && (
                        <div className="validation-error" role="alert">
                          {serverError}
                        </div>
                      )}
                      <input
                        type="tel" // Use tel type for IP address
                        value={IpAddress}
                        onChange={(e) => setIpAdress(e.target.value)}
                        required
                        placeholder="IP Address"
                      />
                     
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        value={SubnetMask}
                        onChange={(e) => setSubnetMask(e.target.value)}
                        required
                        placeholder="Subnet Mask"
                      />
                     
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        value={DefaultGateway}
                        onChange={(e) => setDefaultGateway(e.target.value)}
                        required
                        placeholder="Default Gateway"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        value={RouterModel}
                        onChange={(e) => setRouterModel(e.target.value)}
                        required
                        placeholder="Router Model"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span>Add Ip</span>
                      </button>

                      {successMessage && (
                        <p className="success-message">{successMessage}</p>
                      )}
                      {errorMessage && (
                        <p className="error-message">{errorMessage}</p>
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
