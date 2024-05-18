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

        fetchUserName();
    }, [isLogged]);

    useEffect(() => {
        const startLogoutTimer = () => {
            clearInterval(logoutTimer);
            const timer = setInterval(() => {
                // Implement your logic to decrease timer value
                // For example, decrementing the timer every second
            }, 1000);
            setLogoutTimer(timer);
        };

        startLogoutTimer();

        return () => {
            clearInterval(logoutTimer);
        };
    }, [logoutTimer]);

    const handleLogout = () => {
        loginService.logOut();
        setIsLogged(false);
        clearInterval(logoutTimer);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavItemChange = (navItem) => {
        setActiveNavItem(navItem);
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
                            <NavItem
                                to="/"
                                label="Home"
                                activeNavItem={activeNavItem}
                                handleNavItemChange={handleNavItemChange}
                            />
                            <NavItem
                                to="/about"
                                label="About Us"
                                activeNavItem={activeNavItem}
                                handleNavItemChange={handleNavItemChange}
                            />
                            <NavItem
                                to="/services"
                                label="Services"
                                activeNavItem={activeNavItem}
                                handleNavItemChange={handleNavItemChange}
                            />
                            {isLogged && (
                                <>
                                    <NavItem
                                        to="/wanip"
                                        label="WAN IP"
                                        activeNavItem={activeNavItem}
                                        handleNavItemChange={
                                            handleNavItemChange
                                        }
                                    />
                                    <NavItem
                                        to="/blog"
                                        label="Blog"
                                        activeNavItem={activeNavItem}
                                        handleNavItemChange={
                                            handleNavItemChange
                                        }
                                    />
                                    <NavItem
                                        to="/tutorials"
                                        label="Tutorials"
                                        activeNavItem={activeNavItem}
                                        handleNavItemChange={
                                            handleNavItemChange
                                        }
                                    />
                                    <NavItem
                                        to="/support"
                                        label="Support"
                                        activeNavItem={activeNavItem}
                                        handleNavItemChange={
                                            handleNavItemChange
                                        }
                                    />
                                    <NavItem
                                        to="/contact"
                                        label="Contact"
                                        activeNavItem={activeNavItem}
                                        handleNavItemChange={
                                            handleNavItemChange
                                        }
                                    />
                                </>
                            )}
                            {!isLogged && (
                                <>
                                    <NavItem
                                        to="/register"
                                        label="SignUp"
                                        activeNavItem={activeNavItem}
                                        handleNavItemChange={
                                            handleNavItemChange
                                        }
                                    />
                                    <NavItem
                                        to="/login"
                                        label="Login"
                                        activeNavItem={activeNavItem}
                                        handleNavItemChange={
                                            handleNavItemChange
                                        }
                                    />
                                </>
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

const NavItem = ({ to, label, activeNavItem, handleNavItemChange }) => {
    return (
        <li className="nav-item">
            <Link
                to={to}
                className={`nav-link text-white ${
                    activeNavItem === to ? "active" : ""
                }`}
                data-nav={to}
                onClick={() => handleNavItemChange(to)}
            >
                {label}
            </Link>
        </li>
    );
};

export default Header;
