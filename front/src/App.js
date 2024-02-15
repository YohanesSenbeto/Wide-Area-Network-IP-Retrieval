// Import react
import React from "react";
// Import the Routes and Route components from react-router
import { Routes, Route } from "react-router";
// Import the page components
import Home from "./markup/pages/Home";
import Login from "./markup/pages/Login";
//import AddEmployee from "./markup/pages/admin/AddEmployee";
//import Unauthorized from "./markup/pages/Unauthorized";
import About from "./markup/components/about/about";
// Import the Orders and Customers components
//import Orders from "./markup/pages/admin/Orders";
//import Customers from "./markup/pages/admin/Customers";
// Import the Employees component
//import Employees from "./markup/pages/admin/Employees";

// Import the css files
import "./assets/template_assets/css/bootstrap.css";
import "./assets/template_assets/css/style.css";
import "./assets/template_assets/css/responsive.css";
import "./assets/template_assets/css/color.css";

// Import the custom css file
import "./assets/styles/custom.css";

// Import the Header component
import Header from "./markup/components/Header/Header";
// Import the Footer component
import Footer from "./markup/components/Footer/Footer";

// Import the PrivateAuthRoute component
//import PrivateAuthRoute from "./markup/components/Auth/PrivateAuthRoute";
import SignupForm from "./markup/components/Signup/Signup";
import WanIpAdder from "./markup/components/wanipadder/WanIpAdder";
import Wanip from "./markup/pages/Wanip";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<SignupForm />} />
        <Route path="/addWanIp" element={<WanIpAdder />} />
        <Route path="/WanIp" element={<Wanip />} />

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        
       
      </Routes>
      <Footer />
    </>
  );
}

export default App;
