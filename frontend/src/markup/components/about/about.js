import React from "react";
import "./about.css"; // Import CSS file
// import bannerImage from '../../../assets/images/banner/about.png'; // Import banner image

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-title">About Us</h1>
                <div className="about-description">
                    <p className="p">
                        Our website enables users to retrieve their{" "}
                        <b>WAN IP addresses</b>, discover <b>subnet masks</b>,
                        <b> default gateway</b> information, geolocation
                        currently for Ethiopia , and other pertinent network
                        details. We also offer troubleshooting assistance
                        specially to configure their WI-FI router and network
                        optimization resources to enhance users' understanding
                        and performance of WAN IP addresses.
                    </p>
                </div>
                {/* <div className="banner-container">
                    <img src={bannerImage} alt="Banner" className="banner-image" />
                </div> */}
                <p className="last-updated">Last updated 3 mins ago</p>
            </div>
        </div>
    );
}

export default About;
