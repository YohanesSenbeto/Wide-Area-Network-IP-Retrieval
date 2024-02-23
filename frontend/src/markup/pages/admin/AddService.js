import React from "react";
// Import the AddEmployeeForm component 
import AddServiceForm from '../../components/Admin/AddServiceForm/AddServiceForm';
// Import the AdminMenu component 
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu';

const AddService = () => {
 return (
   <div>
     <div className="container-fluid admin-pages">
       <div className="row">
         <div className="col-md-3 admin-left-side">
           <AdminMenu />
         </div>
         <div className="col-md-9 admin-right-side">
           <AddServiceForm />
         </div>
       </div>
     </div>
   </div>
 );
}

export default AddService; 




  


