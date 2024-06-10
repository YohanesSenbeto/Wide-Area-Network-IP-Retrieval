import React, { useState } from "react";
import { Form, Button, Dropdown, Alert } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import loginService from "../../../services/login.service";
import "./LoginForm.css";

function LoginForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const [user_email, setEmail] = useState("");
    const [user_password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [serverError, setServerError] = useState("");
    const [userType, setUserType] = useState("normal");

    const isStaffRoute = location.pathname.startsWith("/login/staff");
    const isAdminRoute = location.pathname.startsWith("/login/admin");
    const isManagerRoute = location.pathname.startsWith("/login/manager");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setEmailError("");
        setPasswordError("");
        setServerError("");

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
            setServerError("Your password or email is incorrect.");
        }
    };

    const renderUserTypeDropdown = () => {
        if (isStaffRoute || isAdminRoute || isManagerRoute) {
            return (
                <Dropdown className="mb-3">
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {userType.charAt(0).toUpperCase() + userType.slice(1)}
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
            <div className="login-container">
                <div className="login-title">
                    <h2>Login to your account</h2>
                </div>
                <div className="login-form">
                    <Form onSubmit={handleSubmit} noValidate>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={user_email}
                                onChange={(e) => setEmail(e.target.value)}
                                isInvalid={!!emailError}
                                autoComplete="email"
                                name="email"
                            />
                            <Form.Control.Feedback type="invalid">
                                {emailError}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={user_password}
                                onChange={(e) => setPassword(e.target.value)}
                                isInvalid={!!passwordError}
                                autoComplete="current-password"
                                name="password"
                            />
                            <Form.Control.Feedback type="invalid">
                                {passwordError}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {renderUserTypeDropdown()}

                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100"
                        >
                            Login
                        </Button>
                    </Form>
                    {serverError && (
                        <Alert variant="danger" className="mt-3">
                            {serverError}
                        </Alert>
                    )}
                </div>
            </div>
        </section>
    );
}

export default LoginForm;
