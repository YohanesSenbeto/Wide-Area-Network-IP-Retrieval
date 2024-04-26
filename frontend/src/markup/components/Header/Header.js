import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import loginService from "../../../services/login.service";
import { useAuth } from "../../../Contexts/AuthContext";

// ActiveIndicator component to display the yellow rectangle around the active navigation item
const ActiveIndicator = ({ activeNavItem }) => {
    const [indicatorStyle, setIndicatorStyle] = useState({});

    useEffect(() => {
        const activeElement = document.querySelector(
            `[data-nav="${activeNavItem}"]`
        );
        if (activeElement) {
            const style = {
                left: activeElement.offsetLeft + "px",
                width: activeElement.offsetWidth + "px",
            };
            setIndicatorStyle(style);
        }
    }, [activeNavItem]);

    return (
        <div
            className="active-indicator bg-warning"
            style={indicatorStyle}
        ></div>
    );
};

function Header(props) {
    const { isLogged, setIsLogged } = useAuth();
    const [userName, setUserName] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [logoutTimer, setLogoutTimer] = useState(null);
    const [activeNavItem, setActiveNavItem] = useState("");

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                if (isLogged) {
                    const userData = await loginService.getUserData();
                    setUserName(userData.name.split(" ")[0]);
                } else {
                    setUserName("");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        const startLogoutTimer = () => {
            clearInterval(logoutTimer);
            const timer = setInterval(() => {
                // Implement your logic to decrease timer value
                // For example, decrementing the timer every second
            }, 1000);
            setLogoutTimer(timer);
        };

        fetchUserName();
        startLogoutTimer();

        return () => {
            clearInterval(logoutTimer);
        };
    }, [isLogged, logoutTimer]);

    const handleLogout = () => {
        loginService.logOut();
        setIsLogged(false);
        clearInterval(logoutTimer);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="office-hour">
                            {/* You can get Support from Monday - Sunday 24/7 hrs. */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="header-right text-right">
                            <div
                                className={`menu-toggle ${
                                    isMenuOpen ? "active" : ""
                                }`}
                                onClick={toggleMenu}
                            >
                                <span className="hamburger-bar"></span>
                                <span className="hamburger-bar"></span>
                                <span className="hamburger-bar"></span>
                            </div>
                            {isLogged && (
                                <div className="user-panel">
                                    <div className="phone-number">
                                        Welcome: <strong>{userName}</strong>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <nav
                className={`main-menu ${
                    isMenuOpen ? "active" : ""
                } navbar navbar-expand-lg navbar-light bg-primary`}
            >
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse ${
                            isMenuOpen ? "show" : ""
                        }`}
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className={`nav-link text-white ${
                                        activeNavItem === "/" ? "active" : ""
                                    }`}
                                    data-nav="/"
                                    onClick={() => setActiveNavItem("/")}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/about"
                                    className={`nav-link text-white ${
                                        activeNavItem === "/about"
                                            ? "active"
                                            : ""
                                    }`}
                                    data-nav="/about"
                                    onClick={() => setActiveNavItem("/about")}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/services"
                                    className={`nav-link text-white ${
                                        activeNavItem === "/services"
                                            ? "active"
                                            : ""
                                    }`}
                                    data-nav="/services"
                                    onClick={() =>
                                        setActiveNavItem("/services")
                                    }
                                >
                                    Services
                                </Link>
                            </li>
                            {isLogged && (
                                <>
                                    <li className="nav-item">
                                        <Link
                                            to="/wanip"
                                            className={`nav-link text-white ${
                                                activeNavItem === "/wanip"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            data-nav="/wanip"
                                            onClick={() =>
                                                setActiveNavItem("/wanip")
                                            }
                                        >
                                            WAN IP
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/blog"
                                            className={`nav-link text-white ${
                                                activeNavItem === "/blog"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            data-nav="/blog"
                                            onClick={() =>
                                                setActiveNavItem("/blog")
                                            }
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/tutorials"
                                            className={`nav-link text-white ${
                                                activeNavItem === "/tutorials"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            data-nav="/tutorials"
                                            onClick={() =>
                                                setActiveNavItem("/tutorials")
                                            }
                                        >
                                            Tutorials
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/support"
                                            className={`nav-link text-white ${
                                                activeNavItem === "/support"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            data-nav="/support"
                                            onClick={() =>
                                                setActiveNavItem("/support")
                                            }
                                        >
                                            Support
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/contact"
                                            className={`nav-link text-white ${
                                                activeNavItem === "/contact"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            data-nav="/contact"
                                            onClick={() =>
                                                setActiveNavItem("/contact")
                                            }
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </>
                            )}
                            {!isLogged && (
                                <li className="nav-item">
                                    <Link
                                        to="/register"
                                        className={`nav-link text-white ${
                                            activeNavItem === "/register"
                                                ? "active"
                                                : ""
                                        }`}
                                        data-nav="/register"
                                        onClick={() =>
                                            setActiveNavItem("/register")
                                        }
                                    >
                                        SignUp
                                    </Link>
                                </li>
                            )}
                            {!isLogged && (
                                <li className="nav-item">
                                    <Link
                                        to="/login"
                                        className={`nav-link text-white ${
                                            activeNavItem === "/login"
                                                ? "active"
                                                : ""
                                        }`}
                                        data-nav="/login"
                                        onClick={() =>
                                            setActiveNavItem("/login")
                                        }
                                    >
                                        Login
                                    </Link>
                                </li>
                            )}
                            {isLogged && (
                                <li className="nav-item">
                                    <button
                                        className="nav-link btn btn-outline-danger text-white"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Render the ActiveIndicator component */}
            <ActiveIndicator activeNavItem={activeNavItem} />
        </header>
    );
}

export default Header;
