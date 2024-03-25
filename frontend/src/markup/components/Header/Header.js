import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import loginService from "../../../services/login.service";
import { useAuth } from "../../../Contexts/AuthContext";
import "./header.css";
import getAuth from "../../../util/auth";

function Header(props) {
    const { isLogged, setIsLogged, employee } = useAuth();
    const [userName, setUserName] = useState(""); // State to store the user's name
    const user = getAuth;
    console.log(user.user_email);

    useEffect(() => {
        // Fetch the user's name when the component mounts
        fetchUserName();
    }, [isLogged]); // Fetch the user's name when the login status changes

    const fetchUserName = async () => {
        try {
            if (isLogged) {
                // If the user is logged in, fetch their name
                const userData = await loginService.getUserData(); // Assuming there's a function to fetch user data from the server
                setUserName(userData.name); // Set the user's name in the state
            } else {
                setUserName(""); // Clear the user's name if not logged in
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const logOut = () => {
        loginService.logOut();
        loginService.logOut();
        setIsLogged(false);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track burger menu open/close

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    return (
        <div>
            <div className="nav-container">
                <div className="header-top">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="left-column">
                                <div className="text">
                                    Retrieve Your WAN IP information easily
                                </div>
                                <div className="office-hour">
                                    You can get Support from Monday - Sunday
                                    24/7 hrs.
                                </div>
                            </div>
                            <div className="right-column">
                                {isLogged ? (
                                    <div className="Link-btn">
                                        <div className="phone-number">
                                            <strong>
                                                Welcome {user?.user_email}
                                            </strong>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="phone-number"></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="logo-box"></div>
                        <div className="right-column">
                            <div className="nav-outer">
                                <div
                                    className="mobile-nav-toggler"
                                    onClick={toggleMenu}
                                >
                                    <img
                                        src="assets/images/icons/icon-bar.png"
                                        alt=""
                                    />
                                </div>
                                <nav className="main-menu navbar-expand-md navbar-divght">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={logo} alt="" />
                                        </Link>
                                    </div>
                                    <div
                                        className={`collapse navbar-collapse show clearfix ${
                                            isMenuOpen ? "active" : ""
                                        }`}
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navigation">
                                            <li className="Link-btn">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="Link-btn">
                                                <Link to="/about">
                                                    About Us
                                                </Link>
                                            </li>
                                            <li className="Link-btn">
                                                <Link to="/services">
                                                    Services
                                                </Link>
                                            </li>
                                            <li className="Link-btn">
                                                <Link to="/wanip">WAN IP</Link>
                                            </li>
                                            <li className="Link-btn">
                                                <Link to="/blog">Blog</Link>
                                            </li>
                                            <li className="Link-btn">
                                                <Link to="/tutorials">
                                                    Tutorials
                                                </Link>
                                            </li>
                                            <li className="Link-btn">
                                                <Link to="/support">
                                                    Support
                                                </Link>
                                            </li>
                                            <li className="Link-btn">
                                                <Link to="/contact">
                                                    Contact
                                                </Link>
                                            </li>
                                            <li className="Link-btn">
                                                <Link to="/Register">
                                                    SignUp
                                                </Link>
                                            </li>
                                            <li className="Link-btn">
                                                {isLogged ? (
                                                    <Link
                                                        to="/"
                                                        onClick={logOut}
                                                    >
                                                        Log out
                                                    </Link>
                                                ) : (
                                                    <Link to="/login">
                                                        Login
                                                    </Link>
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Burger Menu */}
            <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
                <div className="menu-backdrop" onClick={toggleMenu}></div>
                <div className="close-btn" onClick={toggleMenu}>
                    <span className="icon flaticon-remove"></span>
                </div>
                <nav className="menu-box">
                    <div className="nav-logo">
                        <Link to="/">
                            <img
                                src="assets/images/logo-two.png"
                                alt=""
                                title=""
                            />
                        </Link>
                    </div>
                    <div className="menu-outer">
                        {/* Add your menu items here */}
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/wanip">WAN IP</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/tutorials">Tutorials</Link>
                            </li>
                            <li>
                                <Link to="/support">Support</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/Register">SignUp</Link>
                            </li>
                            <li>
                                {isLogged ? (
                                    <Link to="/" onClick={logOut}>
                                        Log out
                                    </Link>
                                ) : (
                                    <Link to="/login">Login</Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="nav-overlay">
                <div className="cursor"></div>
                <div className="cursor-follower"></div>
            </div>
        </div>
    );
}

export default Header;
