// Import react
import React from "react";
import ImageSlider from "./ImageSlider";
import "bootstrap/dist/css/bootstrap.min.css";
// Import the Routes and Route components from react-router
import { Routes, Route } from "react-router";
// Import the page components
import Home from "./markup/pages/Home";
import Success from "./markup/components/Signup/Success";
import Login from "./markup/pages/Login";
import Addstaff from "./markup/pages/admin/AddStaff";
import Unauthorized from "./markup/pages/Unauthorized";
import About from "./markup/components/about/about";
import Blogpage from "./markup/components/blogpage/Blogpage";
import SignupSuccess from "./markup/components/Signup/SignupSuccess"; // Add this import
import ContactForm from "./markup/components/contact/ContactForm";
// Import the Orders and Customers components
import Orders from "./markup/pages/admin/Orders";
import Customers from "./markup/pages/admin/AddCustomers";
// Import the staffs component
import Staffs from "./markup/pages/admin/Staffs";
import Services from "./markup/components/Services/Service";
import Support from "./markup/components/support/support";
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
import PrivateAuthRoute from "./markup/components/Auth/PrivateAuthRoute";
import SignupForm from "./markup/components/Signup/Signup";
import WanIpAdder from "./markup/components/wanipadder/WanIpAdder";
import Wanip from "./markup/pages/Wanip";
import AddcustomerForm from "./markup/components/Admin/AddCustomerForm/AddCustomerForm";
import AddstaffForm from "./markup/components/Admin/AddStaffForm/AddStaffForm";
import AdminMenu from "./markup/components/Admin/AdminMenu/AdminMenu";
import AddIpAddress from "./markup/pages/admin/AddIpAddress";
import AddCustomers from "./markup/pages/admin/AddCustomers";
import Tutorials from "./markup/components/Tutorials/tutorials";
import AddService from "./markup/pages/admin/AddService";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Register" element={<SignupForm />} />
                <Route path="/addWanIp" element={<WanIpAdder />} />
                <Route path="/WanIp" element={<Wanip />} />
                <Route path="/about" element={<About />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Support" element={<Support />} />
                <Route path="/Tutorials" element={<Tutorials />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/manager" element={<Login />} />
                <Route path="/login/admin" element={<Login />} />
                <Route path="/login/staff" element={<Login />} />
                <Route path="/admin/add-customer" element={<AddCustomers />} />
                <Route path="/admin" element={<AdminMenu />} />
                <Route path="/admin/customers" element={<AddCustomers />} />
                <Route path="/admin/add-services" element={<AddService />} />
                <Route path="/admin/add-router" element={<AddcustomerForm />} />
                <Route path="/admin/add-staff" element={<Addstaff />} />
                <Route path="/Success" element={<Success />} />
                <Route path="/Blogpage" element={<Blogpage />} />
                <Route path="/ContactForm" element={<ContactForm />} />
                <Route path="/signupSuccess" element={<SignupSuccess />} />{" "}
                {/* Add this route */}
                <Route path="/admin/add-ipaddress" element={<AddIpAddress />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
                {/* Add the Orders Route */}
                <Route
                    path="/admin/orders"
                    element={
                        <PrivateAuthRoute roles={[1, 2, 3]}>
                            <Orders />
                        </PrivateAuthRoute>
                    }
                />
                {/* Add the Customers Route */}
                <Route
                    path="/admin/customers"
                    element={
                        <PrivateAuthRoute roles={[2, 3]}>
                            <Customers />
                        </PrivateAuthRoute>
                    }
                />
                {/* Add the staffs Route */}
                <Route path="/admin/staffs" element={<Staffs />} />
                <Route
                    path="/admin/add-staff"
                    element={
                        <PrivateAuthRoute roles={[3]}>
                            <Addstaff />
                        </PrivateAuthRoute>
                    }
                />
            </Routes>
            <Footer />
        </div>
    );
}

const slides = () => {
    const slides = [
        { url: "http://localhost:3000/image-1.jpg", title: "beach" },
        { url: "http://localhost:3000/image-2.jpg", title: "boat" },
        { url: "http://localhost:3000/image-3.jpg", title: "forest" },
        { url: "http://localhost:3000/image-4.jpg", title: "city" },
        { url: "http://localhost:3000/image-5.jpg", title: "italy" },
    ];
    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };
    return (
        <div>
            <h1>Hello monsterlessons</h1>
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
        </div>
    );
};

export default App;
