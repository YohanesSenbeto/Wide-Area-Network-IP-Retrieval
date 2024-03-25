import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Button, Dropdown } from "react-bootstrap";
import loginService from "../../../services/login.service";

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

<<<<<<< HEAD
    // Conditionally render the dropdown menu based on the route
    const renderUserTypeDropdown = () => {
        if (isStaffRoute || isAdminRoute || isManagerRoute) {
            return (
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {userType === "normal" ? "Normal User" : userType}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setUserType("normal")}>
                            Normal User
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setUserType("admin")}>
                            Admin
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setUserType("manager")}>
                            Manager
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setUserType("staff")}>
                            Staff
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            );
        }
        return null; // Render nothing if not on /login/staff, /login/admin, or /login/manager
    };
=======
  // Conditionally render the dropdown menu based on the route
  const renderUserTypeDropdown = () => {
    if (isStaffRoute || isAdminRoute || isManagerRoute) {
      return (
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {userType === "normal" ? "Normal User" : userType}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setUserType("normal")}>
              Normal User
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setUserType("admin")}>
              Admin
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setUserType("manager")}>
              Manager
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setUserType("staff")}>
              Staff
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    }
    return null; // Render nothing if not on /login/staff, /login/admin, or /login/manager
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle client-side validations here
    let valid = true; // Flag
    // Email validation
    if (!user_email) {
      setEmailError("Please enter your email address first");
      valid = false;
    } else if (!user_email.includes("@")) {
      setEmailError("Invalid email format");
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(user_email)) {
        setEmailError("Invalid email format");
        valid = false;
      } else {
        setEmailError("");
      }
    }
    // Password has to be at least 6 characters long
    if (!user_password || user_password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (!valid) {
      return;
    }
    // Handle form submission here
    const formData = {
      user_email,
      user_password,
      userType,
    };
    // Call the service
    try {
      const response = await loginService.login(formData);

      console.log(response);
      if (response.status === "success") {
        // Save the user in the local storage
       
        // Redirect the user to the dashboard
        navigate("/home");
      } else {
        // Show an error message
        setServerError(response.message);
      }
      // Redirect the user to the dashboard
    } catch (error) {
      // Handle login error (e.g., display error message)
      setServerError("Login failed. Please try again.");
    }
  };
>>>>>>> 699f29c32fbf9e098d946472a8d8e028210e44bf

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle client-side validations here
        let valid = true; // Flag
        // Email validation
        if (!user_email) {
            setEmailError("Please enter your email address first");
            valid = false;
        } else if (!user_email.includes("@")) {
            setEmailError("Invalid email format");
        } else {
            const regex = /^\S+@\S+\.\S+$/;
            if (!regex.test(user_email)) {
                setEmailError("Invalid email format");
                valid = false;
            } else {
                setEmailError("");
            }
        }
        // Password has to be at least 6 characters long
        if (!user_password || user_password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
            valid = false;
        } else {
            setPasswordError("");
        }
        if (!valid) {
            return;
        }
        // Handle form submission here
        const formData = {
            user_email,
            user_password,
            userType,
        };
        // Call the service
        try {
            const response = await loginService.logIn(formData);
            if (response.status === "success") {
                navigate("/");
                // Save the user in the local storage
                if (response.data.user_token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                // Redirect the user to the dashboard
                if (location.pathname === "/login") {
                    window.location.replace("/");
                } else {
                    window.location.reload();
                }
            } else {
                // Show an error message
                setServerError(response.message);
            }
        } catch (err) {
            setServerError(
                "An error has occurred. Please try again later. " + err.message
            );
        }
    };

    return (
        <section className="contact-section">
            <div className="auto-container">
                <div className="contact-title">
                    <h2>Login to your account</h2>
                </div>
                <div className="row clearfix">
                    <div className="form-column col-lg-7">
                        <div className="inner-column">
                            <div className="contact-form">
                                <Form onSubmit={handleSubmit}>
                                    <div className="row clearfix">
                                        <div className="form-group col-md-12">
                                            {serverError && (
                                                <div
                                                    className="validation-error"
                                                    role="alert"
                                                >
                                                    {serverError}
                                                </div>
                                            )}
                                            <input
                                                type="email"
                                                name="user_email"
                                                value={user_email}
                                                onChange={(event) =>
                                                    setEmail(event.target.value)
                                                }
                                                placeholder="Email"
                                            />
                                            {emailError && (
                                                <div
                                                    className="validation-error"
                                                    role="alert"
                                                >
                                                    {emailError}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input
                                                type="password"
                                                name="user_password"
                                                value={user_password}
                                                onChange={(event) =>
                                                    setPassword(
                                                        event.target.value
                                                    )
                                                }
                                                placeholder="Password"
                                            />
                                            {passwordError && (
                                                <div
                                                    className="validation-error"
                                                    role="alert"
                                                >
                                                    {passwordError}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group col-md-12">
                                            {renderUserTypeDropdown()}
                                        </div>
                                        <div className="form-group col-md-12">
                                            <Button
                                                className="theme-btn btn-style-one login-button"
                                                type="submit"
                                                data-loading-text="Please wait..."
                                            >
                                                <span>Login</span>
                                            </Button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginForm;
