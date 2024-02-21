// Import the necessary components 
import React, { useState, useEffect } from "react";
import { Table, Button } from 'react-bootstrap';
// Import the auth hook  
import { useAuth } from "../../../../Contexts/AuthContext";
// Import the date-fns library 
import { format } from 'date-fns'; // To properly format the date on the table 
// Import the getAllstaffs function  
import staffService from "../../../../services/staff.service";

// Create the staffsList component 
const StaffsList = () => {
  // Create all the states we need to store the data
  // Create the staffs state to store the staffs data  
  const [staffs, setstaffs] = useState([]);
  // A state to serve as a flag to show the error message 
  const [apiError, setApiError] = useState(false);
  // A state to store the error message 
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  // To get the logged in staff token
  const { staff } = useAuth();
  let token = null; // To store the token 
  if (staff) {
    token = staff.staff_token;
  }

  useEffect(() => {
    // Call the getAllstaffs function 
    const allstaffs = staffService.getAllstaffs(token);
    allstaffs.then((res) => {
      if (!res.ok) {
        console.log(res.status);
        setApiError(true);
        if (res.status === 401) {
          setApiErrorMessage("Please login again");
        } else if (res.status === 403) {
          setApiErrorMessage("You are not authorized to view this page");
        } else {
          setApiErrorMessage("Please try again later");
        }
      }
      return res.json()
    }).then((data) => {
      if (data.data.length !== 0) {
        setstaffs(data.data)
      }

    }).catch((err) => {
      // console.log(err);
    })
  }, []);

  return (
    <>
      {apiError ? (
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
              <h2>{apiErrorMessage}</h2>
            </div >
          </div>
        </section>
      ) : (
        <>
          <section className="contact-section">
            <div className="auto-container">
              <div className="contact-title">
                <h2>staffs</h2 >
              </div >
              < Table striped bordered hover >
                <thead>
                  <tr>
                    <th>Active</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Added Date</th>
                    <th>Role</th>
                    <th>Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {staffs.map((staff) => (
                    <tr key={staff.staff_id}>
                      <td>{staff.active_staff ? "Yes" : "No"}</td>
                      <td>{staff.staff_first_name}</td>
                      <td>{staff.staff_last_name}</td>
                      <td>{staff.staff_email}</td>
                      <td>{staff.staff_phone}</td>
                      <td>{format(new Date(staff.added_date), 'MM - dd - yyyy | kk:mm')}</td>
                      <td>{staff.company_role_name}</td>
                      <td>
                        <div className="edit-delete-icons">
                          edit | delete
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table >
            </div >
          </section >
        </>
      )}
    </>
  );
}

// Export the staffsList component 
export default StaffsList;