import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import "./WanIpRequester.css";

function WanIpRequester() {
    const [ipAddress, setIpAddress] = useState("");
    const [error, setError] = useState("");
    const [subnetMask, setSubnetMask] = useState("");
    const [defaultGateway, setDefaultGateway] = useState("");
    const [tutorialLink, setTutorialLink] = useState("");
    const [selectedRouter, setSelectedRouter] = useState("");
    const [loading, setLoading] = useState(false);

    const routerOptions = [
        "Tp-link",
        "D-link124",
        "Huawei",
        "ZTE F660",
        "Systrome",
        "Comnect",
        "GPON ONT2212",
        "Greentech",
    ];

    const routerVideoLinks = {
        "Tp-link": "https://www.youtube.com/embed/4mzHO9DHJjE",
        "D-link124": "https://www.youtube.com/embed/uKHQA2xzNYE",
        Huawei: "https://youtu.be/Uq6xrVp9izg",
        "ZTE F660": "https://www.youtube.com/embed/xCZwGHIN4Uc",
        Systrome: "https://www.youtube.com/embed/aG6Y-OL6vxU",
        Comnect: "https://www.youtube.com/embed/qIc4IUgCtPw",
        "GPON ONT2212": "https://www.youtube.com/embed/UoGAksPaUcs",
        Greentech: "https://www.youtube.com/embed/LTRqEnjd-1Y",
    };

    const validateIPaddress = (ipaddress) => {
        const regex = new RegExp(
            "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
        );
        return regex.test(ipaddress);
    };

    const fetchTutorialLink = async (router) => {
        try {
            setTutorialLink(routerVideoLinks[router]);
        } catch (error) {
            setError("Error fetching tutorial link.");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateIPaddress(ipAddress)) {
            setError("Please enter a valid IP address.");
            return;
        }
        setError("");
        setLoading(true);
        try {
            const response = await fetch(
                "http://localhost:8000/api/wanipretrive",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ipAddress, selectedRouter }),
                }
            );
            if (!response.ok) {
                throw new Error("Error sending IP address to the server.");
            }
            const data = await response.json();
            setSubnetMask(data.subnet_mask);
            setDefaultGateway(data.default_gateway);
            fetchTutorialLink(selectedRouter);
        } catch (error) {
            setError("Error sending IP address to the server.");
        }
        setLoading(false);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="ipAddress" className="form-group">
                    <Form.Label className="form-label">WAN IP:</Form.Label>
                    <Form.Control
                        type="text"
                        value={ipAddress}
                        onChange={(e) => setIpAddress(e.target.value)}
                        placeholder="ENTER YOUR WAN IP here"
                        isInvalid={error !== ""}
                        required
                        className="form-place"
                    />
                    <Form.Control.Feedback type="invalid">
                        {error}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="routerSelect" className="form-group">
                    <Form.Label className="form-label">
                        Select Router:
                    </Form.Label>
                    <Form.Control
                        as="select"
                        custom
                        onChange={(e) => {
                            setSelectedRouter(e.target.value);
                            setTutorialLink("");
                        }}
                        value={selectedRouter}
                        required
                        className="select-control"
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
                <Button
                    type="submit"
                    variant="primary"
                    disabled={loading}
                    className="submit-button"
                >
                    {loading ? "Loading..." : "Generate"}
                </Button>
            </Form>
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
