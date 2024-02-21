import React from 'react';
// Import the AddEmployeeForm component 
import AddStaffForm from '../../components/Admin/AddStaffForm/AddStaffForm';
// Import the AdminMenu component 
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu';

function AddStaff(props) {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <AddStaffForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStaff;