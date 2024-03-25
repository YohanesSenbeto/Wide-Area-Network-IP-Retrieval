import React from "react";
import WanIpRequester from "../components/WanipForm/WanipForm";
import "./wanip.css";

function Wanip() {
    return (
        <div className="wanip-container">
            <div className="wanip-header">
                <h4>Retrieve Your WAN IP Information</h4>
            </div>
            <div className="wanip-form">
                <WanIpRequester />
            </div>
        </div>
    );
}

export default Wanip;
