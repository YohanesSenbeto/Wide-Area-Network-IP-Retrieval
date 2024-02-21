import React from "react";
// Import the AddEmployeeForm component

// Import the AdminMenu component
import AdminMenu from "../../components/Admin/AdminMenu/AdminMenu";
import AddIpForm from "../../components/Admin/AddIpForm/AddIpForm";

function AddIpAddress(props) {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <AddIpForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddIpAddress;
