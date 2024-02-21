import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/logo.png";
import loginService from "../../../services/login.service";
import { useAuth } from "../../../Contexts/AuthContext";
import "./header.css";
import getAuth from "../../../util/auth";

function Header(props) {
  const { isLogged, setIsLogged, employee } = useAuth();
  const user = getAuth;

  const logOut = () => {
    loginService.logOut();
    setIsLogged(false);
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
                  Monday - Saturday 7:00AM - 6:00PM
                </div>
              </div>
              <div className="right-column">
                {isLogged ? (
                  <div className="Link-btn">
                    <div className="phone-number">
                      <strong>Welcome {user?.first_name}</strong>
                    </div>
                  </div>
                ) : (
                  <div className="phone-number">
                    For more support call us on: <strong>+251917035669 </strong>
                  </div>
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
                <div className="mobile-nav-toggler">
                  <img src="assets/images/icons/icon-bar.png" alt="" />
                </div>
                <nav className="main-menu navbar-expand-md navbar-divght">
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <div className='navs'>
                      
                    </div>
                    <ul className="navigation">
                      <div className="dropdown  Link-btn ">
                        <Link
                          to="/"
                          className=" Link-btn btn btn-secondary"
                        >
                          Home
                        </Link>
                      </div>
                      <div className="dropdown Link-btn">
                        <Link
                          to="/about"
                          className="Link-btn btn btn-secondary"
                        >
                          About Us
                        </Link>
                      </div>
                      <div className="dropdown Link-btn">
                        <Link
                          to="/services"
                          className="Link-btn btn btn-secondary"
                        >
                          Services
                        </Link>
                      </div>
                      <div className=" Link-btn">
                        <Link
                          to="/wanip"
                          className="Link-btn btn btn-secondary"
                        >
                          WAN IP
                        </Link>
                      </div>
                      <div className=" Link-btn">
                        <Link
                          to="/blog"
                          className="Link-btn btn btn-secondary"
                        >
                          Blog
                        </Link>
                      </div>
                      <div className="Link-btn">
                        <Link
                          to="/tutorials"
                          className="Link-btn btn btn-secondary"
                        >
                          Tutorials
                        </Link>
                      </div>
                      <div className="Link-btn">
                        <Link
                          to="/support"
                          className="Link-btn btn btn-secondary"
                        >
                          Support
                        </Link>
                      </div>
                      <div className="Link-btn">
                        <Link
                          to="/contact"
                          className="Link-btn btn btn-secondary"
                        >
                          Contact
                        </Link>
                      </div>
                      <div className="Link-btn">
                        <Link
                          to="/Register"
                          className="Link-btn btn btn-secondary"
                        >
                          SignUp
                        </Link>
                        </div>
                        <div>{isLogged ? (
                <div className="Link-btn ">
                  <Link
                    to="/"
                    className="Link-btn btn btn-secondary"
                    onClick={logOut}
                  >
                    Log out
                  </Link>
                </div>
              ) : (
                <div className="Link-btn">
                  <Link to="/login" className=" Link-btn btn btn-secondary">
                    Login
                  </Link>
                </div>
              )}</div>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="main-header header-style-one">
        <div className="sticky-header">
          <div className="header-upper">
            <div className="auto-container">
              <div className="inner-container">
                <div className="logo-box">
                  <div className="logo">
                    <Link to="/">
                      <img src="assets/images/custom/logo.png" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="right-column">
                  <div className="nav-outer">
                    <div className="mobile-nav-toggler">
                      <img src="assets/images/icons/icon-bar.png" alt="" />
                    </div>
                    <nav className="main-menu navbar-expand-md navbar-divght"></nav>
                  </div>
                  <div className="search-btn"></div>
                  <div className="Link-btn">
                    <Link to="/login" className="theme-btn btn-style-one">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn">
          <span className="icon flaticon-remove"></span>
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link to="/">
              <img src="assets/images/logo-two.png" alt="" title="" />
            </Link>
          </div>
          <div className="menu-outer"></div>
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
