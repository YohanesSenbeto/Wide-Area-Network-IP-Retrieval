import React from "react";
import "./Tutorialls.css"; // Import the CSS file for styling

// Reusable VideoFrame component
const VideoFrame = ({ title, src }) => {
    return (
        <div className="video-card">
            <h3>{title}</h3>
            <iframe
                src={src}
                title={title}
                frameBorder="10"
                allowFullScreen
            ></iframe>
        </div>
    );
};

// Tutorials component using VideoFrame
const Tutorials = () => {
    return (
        <div>
            <VideoFrame
                title="How to configure CNCR GPON Modem Tips"
                src="https://www.youtube.com/embed/XNnMhDhkgO0"
            />
            <VideoFrame
                title="How to Configure Data or VPN in the F660 ZTE GPON Router"
                src="https://www.youtube.com/embed/-MgHFs3GTDA"
            />
            <VideoFrame
                title="How to Configure GPON ONT TG 2212 model Router Configuration"
                src="https://www.youtube.com/embed/UoGAksPaUcs"
            />
        </div>
    );
};

export default Tutorials;
