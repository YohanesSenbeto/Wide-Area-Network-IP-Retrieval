import React from "react";
import "./about.css"; // Import CSS file

function About() {
    return (
        <div className="about-content">
            <h1 className="about-title">About Us</h1>
            <div className="about-description">
                <p className="p">
                    Our website enables users to retrieve their WAN IP
                    addresses, discover subnet masks, default gateway
                    information, geolocation currently for Ethiopia, and other
                    pertinent network details. We also offer troubleshooting
                    assistance specially to configure their WI-FI router and
                    network optimization resources to enhance users'
                    understanding and performance of WAN IP addresses.
                </p>
            </div>
            <div className="about-container">
                <img
                    src={
                        "https://ideogram.ai/assets/image/lossless/response/i0400paKT6GJAz0p_xSRsQ"
                    }
                    alt="About Banner"
                    className="about-banner"
                />
            </div>
        </div>
    );
}

export default About;
