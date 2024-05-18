import React, { useState } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import loginService from "../../../services/login.service";
import "./LoginForm.css"; // Import your custom CSS file for form styling

function LoginForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const [user_email, setEmail] = useState("");
    const [user_password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [serverError, setServerError] = useState("");
    const [userType, setUserType] = useState("normal"); // Default: 'normal', other options: 'admin', 'manager', 'staff'

    // Check if the route is /login/staff, /login/admin, or /login/manager
    const isStaffRoute = location.pathname.startsWith("/login/staff");
    const isAdminRoute = location.pathname.startsWith("/login/admin");
    const isManagerRoute = location.pathname.startsWith("/login/manager");

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Reset errors
        setEmailError("");
        setPasswordError("");
        setServerError("");

        // Client-side validation
        let valid = true;
        if (!user_email || !user_email.includes("@")) {
            setEmailError("Please enter a valid email address");
            valid = false;
        }
        if (!user_password || user_password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
            valid = false;
        }
        if (!valid) return;

        // Form submission
        const formData = { user_email, user_password, userType };
        try {
            const response = await loginService.logIn(formData);
            if (response.status === "success") {
                navigate("/");
                localStorage.setItem("user", JSON.stringify(response.data));
                window.location.replace(
                    location.pathname === "/login" ? "/" : location.pathname
                );
            } else {
                setServerError(response.message);
            }
        } catch (error) {
            console.error("Login failed:", error);
            setServerError("An error occurred. Please try again later.");
        }
    };

    const renderUserTypeDropdown = () => {
        if (isStaffRoute || isAdminRoute || isManagerRoute) {
            return (
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {userType === "normal" ? "Normal User" : userType}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {["normal", "admin", "manager", "staff"].map((role) => (
                            <Dropdown.Item
                                key={role}
                                onClick={() => setUserType(role)}
                            >
                                {role.charAt(0).toUpperCase() + role.slice(1)}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            );
        }
        return null;
    };

    return (
        <section className="login-section">
            <div className="login-container container-xl">
                {" "}
                {/* Increased container size */}
                <div className="login-title">
                    <h2>Login to your account</h2>
                </div>
                <div className="login-form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={user_email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email" // Set autocomplete to "email"
                                name="email" // Add name attribute
                            />
                            <Form.Text className="text-danger">
                                {emailError}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={user_password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password" // Set autocomplete to "current-password"
                                name="password" // Add name attribute
                            />
                            <Form.Text className="text-danger">
                                {passwordError}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group>{renderUserTypeDropdown()}</Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    {serverError && (
                        <div className="error-message">{serverError}</div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default LoginForm;
