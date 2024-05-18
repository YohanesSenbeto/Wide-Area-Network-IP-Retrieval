import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        console.log("Current path:", location.pathname);
    }, [location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let valid = true;
        const errors = { ...formErrors };

        if (!formData.first_name) {
            errors.first_name = "Please enter your first name";
            valid = false;
        } else {
            errors.first_name = "";
        }

        if (!formData.last_name) {
            errors.last_name = "Please enter your last name";
            valid = false;
        } else {
            errors.last_name = "";
        }

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

        if (!formData.user_password || formData.user_password.length < 6) {
            errors.user_password =
                "Password must be at least 6 characters long";
            valid = false;
        } else {
            errors.user_password = "";
        }

        setFormErrors(errors);

        if (valid) {
            try {
                const response = await signUp(formData);
                const data = await response.json();

                if (data.status === "success") {
                    if (data.data.user_token) {
                        localStorage.setItem("user", JSON.stringify(data.data));
                    }
                    navigate("/signupSuccess");
                } else {
                    setFormErrors({
                        ...errors,
                        serverError: data.message,
                    });
                }
            } catch (err) {
                setFormErrors({
                    ...errors,
                    serverError:
                        "An error has occurred. Please try again later." + err,
                });
            }
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
