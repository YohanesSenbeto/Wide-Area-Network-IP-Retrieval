import React from "react";
import "./services.css";

// Service component to render individual service details
const Service = ({ title, description }) => (
    <div className="service">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

// App component to display the list of services
const App = () => {
    // Array of service objects
    const services = [
        {
            title: "Provide WAN IP Information ",
            description:
                "Generate WAN IP address information, including subnet mask and default gateway.",
        },
        {
            title: "Router Configuration Tutorials",
            description:
                "Access tutorials on configuring Wi-Fi routers for optimal performance and security.",
        },
        {
            title: "Network Cable Installation",
            description:
                "Expert installation of network cables for offices and buildings, available on contract basis.",
        },
        // Add more services as needed
    ];

    return (
        <div className="app">
            <h1 className="app-title">Our Services</h1>
            <div className="services-list">
                {/* Map through the services array and render Service component for each service */}
                {services.map((service, index) => (
                    <Service
                        key={index}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
