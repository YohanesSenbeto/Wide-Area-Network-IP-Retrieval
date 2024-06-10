import React, { useState } from "react";
import "./Tutorialls.css"; // Import the CSS file for styling

// Video data
const videoData = [
    {
        title: "New CNCR GPON ONU Router Configuration",
        src: "https://www.youtube.com/embed/pdwMIVIYj_g",
    },
    {
        title: "How to Configure GRENTECH GPON Router",
        src: "https://www.youtube.com/embed/LTRqEnjd-1Y",
    },
    {
        title: "How to Configure GPON ONT TG 2212 model Router Configuration",
        src: "https://www.youtube.com/embed/UoGAksPaUcs",
    },
    {
        title: "Best 4 tips how to adjust wi-fi speed",
        src: "https://www.youtube.com/embed/fPV4HE70foY",
    },
    {
        title: "How to Configure Data or VPN in the F660 ZTE GPON Router",
        src: "https://www.youtube.com/embed/-MgHFs3GTDA",
    },
    {
        title: "In Ethiopia How to Configure Systrome wi-fi Router",
        src: "https://www.youtube.com/embed/aG6Y-OL6vxU",
    },
    {
        title: "How to Configure Huawei GPON Router",
        src: "https://www.youtube.com/embed/PPciT7tc0-0",
    },
    {
        title: "How to Configure PPPOE Broadband wi-fi on ZTE Router",
        src: "https://www.youtube.com/embed/wTIv-QhS-_o",
    },
    {
        title: "#How To Hide the Wi-fi Name on ZTE Routers",
        src: "https://www.youtube.com/embed/kBBcFeXU3hg",
    },
    {
        title: "ZTE WI-FI Router Set up In ETHIOPIA",
        src: "https://www.youtube.com/embed/xCZwGHIN4Uc",
    },
    {
        title: "In Ethiopia D-LINK WI-FI Router Set up",
        src: "https://www.youtube.com/embed/uKHQA2xzNYE",
    },
    {
        title: "How to configure CNCR GPON Modem Tips",
        src: "https://www.youtube.com/embed/XNnMhDhkgO0",
    },
];

// Reusable VideoFrame component
const VideoFrame = ({ title, src }) => {
    return (
        <div className="video-card">
            <h3>{title}</h3>
            <div className="video-container">
                <iframe
                    src={src}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            </div>
        </div>
    );
};

// Tutorials component with search functionality
const Tutorials = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredVideos = videoData.filter((video) =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search videos by router name..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
            />
            <div className="video-grid">
                {filteredVideos.map((video, index) => (
                    <VideoFrame
                        key={index}
                        title={video.title}
                        src={video.src}
                    />
                ))}
            </div>
        </div>
    );
};

export default Tutorials;
