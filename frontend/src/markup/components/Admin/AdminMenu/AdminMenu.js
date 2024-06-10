import React from "react";

function AdminMenu(props) {
    return (
        <div>
            <div className="admin-menu">
                <h2>Admin Menu</h2>
            </div>
            <div className="list-group">
                <a href="/admin" className="list-group-item">
                    Dashboard
                </a>
                <a href="/admin/add-staff" className="list-group-item">
                    Add staff
                </a>
                <a href="/admin/staffs" className="list-group-item">
                    staffs
                </a>
                <a href="/admin/add-customer" className="list-group-item">
                    Add customer
                </a>
                <a href="/admin/customers" className="list-group-item">
                    Customers
                </a>
                <a href="/admin/add-services" className="list-group-item">
                    Add-Services
                </a>
                <a href="/admin/services" className="list-group-item">
                    Services
                </a>
                <a href="/admin/add-tutorial" className="list-group-item">
                    Add-Tutorial
                </a>
                <a href="/admin/tutorials" className="list-group-item">
                    Tutorials
                </a>
                <a href="/admin/add-blogs" className="list-group-item">
                    Add-Blogs
                </a>
                <a href="/admin/blogs" className="list-group-item">
                    Blogs
                </a>

                <a href="/admin/add-routers" className="list-group-item">
                    Add-routers
                </a>
                <a href="/admin/routers" className="list-group-item">
                    routers
                </a>
                <a href="/admin/add-ipaddress" className="list-group-item">
                    Add-Ip-address
                </a>
                <a href="/admin/ipaddresses" className="list-group-item">
                    IP-Adresses
                </a>
            </div>
        </div>
    );
}

export default AdminMenu;
