import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signUp } from "../../../services/signup.service";
import "./signup.css";

function SignupForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        user_email: "",
        user_password: "",
        user_city: "",
        user_subcity: "",
        user_phone: "",
    });
    const [formErrors, setFormErrors] = useState({
        first_name: "",
        last_name: "",
        user_email: "",
        user_password: "",
        serverError: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Handle client-side validations here
        let valid = true; // Flag
        const errors = { ...formErrors };

        // First name validation
        if (!formData.first_name) {
            errors.first_name = "Please enter your first name";
            valid = false;
        } else {
            errors.first_name = "";
        }

        // Last name validation
        if (!formData.last_name) {
            errors.last_name = "Please enter your last name";
            valid = false;
        } else {
            errors.last_name = "";
        }

        // Email validation
        if (!formData.user_email) {
            errors.user_email = "Please enter your email address";
            valid = false;
        } else if (!formData.user_email.includes("@")) {
            errors.user_email = "Invalid email format";
            valid = false;
        } else {
            const regex = /^\S+@\S+\.\S+$/;
            if (!regex.test(formData.user_email)) {
                errors.user_email = "Invalid email format";
                valid = false;
            } else {
                errors.user_email = "";
            }
        }

        // Password validation (must be at least 6 characters long)
        if (!formData.user_password || formData.user_password.length < 6) {
            errors.user_password =
                "Password must be at least 6 characters long";
            valid = false;
        } else {
            errors.user_password = "";
        }

        setFormErrors(errors);

        // Handle form submission here
        if (valid) {
            // Call the signUp function from the service
            signUp(formData)
                .then((response) => response.json())
                .then((response) => {
                    if (response.status === "success") {
                        // Save the user in the local storage
                        if (response.data.user_token) {
                            localStorage.setItem(
                                "user",
                                JSON.stringify(response.data)
                            );
                        }
                        // Redirect the user to the dashboard or homepage
                        if (location.pathname === "/Register") {
                            navigate("/Success");
                        } else {
                            navigate("/signupSuccess");
                        }
                    } else {
                        // Show an error message
                        setFormErrors({
                            ...errors,
                            serverError: response.message,
                        });
                    }
                })
                .catch((err) => {
                    setFormErrors({
                        ...errors,
                        serverError:
                            "An error has occurred. Please try again later." +
                            err,
                    });
                });
        }
    };

    return (
        <section className="signup-section">
            <h4 className="signup-title">Create a new account</h4>
            <div className="container">
                <div className="signup-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            {formErrors.serverError && (
                                <div className="validation-error">
                                    {formErrors.serverError}
                                </div>
                            )}
                            <input
                                type="text"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="First Name"
                            />
                            {formErrors.first_name && (
                                <div className="validation-error">
                                    {formErrors.first_name}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Last Name"
                            />
                            {formErrors.last_name && (
                                <div className="validation-error">
                                    {formErrors.last_name}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Email"
                            />
                            {formErrors.user_email && (
                                <div className="validation-error">
                                    {formErrors.user_email}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="user_password"
                                value={formData.user_password}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Password"
                                autoComplete="current-password"
                            />
                            {formErrors.user_password && (
                                <div className="validation-error">
                                    {formErrors.user_password}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="user_city"
                                value={formData.user_city}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="City (optional)"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="user_subcity"
                                value={formData.user_subcity}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Subcity (optional)"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="user_phone"
                                value={formData.user_phone}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Phone Number (optional)"
                            />
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary btn-block"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default SignupForm;
