import React, { useState } from 'react';
// import staff.service.js 
import staffService from '../../../../services/staff.service';
// Import the useAuth hook 
import { useAuth } from "../../../../Contexts/AuthContext";

function AddstaffForm(props) {
  const [staff_email, setEmail] = useState('');
  const [staff_first_name, setFirstName] = useState('');
  const [staff_last_name, setLastName] = useState('');
  const [staff_phone, setPhoneNumber] = useState('');
  const [staff_password, setPassword] = useState('');
  const [active_staff, setActive_staff] = useState(1);
  const [company_role_id, setCompany_role_id] = useState(1);
  // Errors 
  const [emailError, setEmailError] = useState('');
  const [firstNameRequired, setFirstNameRequired] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  // Create a variable to hold the user's token
  let loggedInstaffToken = '';
  // Destructure the auth hook and get the token 
  const { staff } = useAuth();
  if (staff && staff.staff_token) {
    loggedInstaffToken = staff.staff_token;
  }

  const handleSubmit = (e) => {
    // Prevent the default behavior of the form
    e.preventDefault();
    // Handle client side validations  
    let valid = true; // Flag 
    // First name is required 
    if (!staff_first_name) {
      setFirstNameRequired('First name is required');
      valid = false;
    } else {
      setFirstNameRequired('');
    }
    // Email is required
    if (!staff_email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!staff_email.includes('@')) {
      setEmailError('Invalid email format');
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(staff_email)) {
        setEmailError('Invalid email format');
        valid = false;
      } else {
        setEmailError('');
      }
    }
    // Password has to be at least 6 characters long
    if (!staff_password || staff_password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      valid = false;
    } else {
      setPasswordError('');
    }
    // If the form is not valid, do not submit 
    if (!valid) {
      return;
    }
    const formData = {
      staff_email,
      staff_first_name,
      staff_last_name,
      staff_phone,
      staff_password,
      active_staff,
      company_role_id
    };
    // Pass the form data to the service 
    const newstaff = staffService.createstaff(formData, loggedInstaffToken);
    newstaff.then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // If Error is returned from the API server, set the error message
        if (data.error) {
          setServerError(data.error)
        } else {
          // Handle successful response 
          setSuccess(true);
          setServerError('')
          // Redirect to the staffs page after 2 seconds 
          // For now, just redirect to the home page 
          setTimeout(() => {
            // window.location.href = '/admin/staffs';
            window.location.href = '/';
          }, 2000);
        }
      })
      // Handle Catch 
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setServerError(resMessage);
      });
  }


  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Add a new staff</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      {serverError && <div className="validation-error" role="alert">{serverError}</div>}
                      <input type="email" name="staff_email" value={staff_email} onChange={event => setEmail(event.target.value)} placeholder="staff email" />
                      {emailError && <div className="validation-error" role="alert">{emailError}</div>}
                    </div>
                    <div className="form-group col-md-12">
                      <input type="text" name="staff_first_name" value={staff_first_name} onChange={event => setFirstName(event.target.value)} placeholder="staff first name" />
                      {firstNameRequired && <div className="validation-error" role="alert">{firstNameRequired}</div>}
                    </div>

                    <div className="form-group col-md-12">
                      <input type="text" name="staff_last_name" value={staff_last_name} onChange={event => setLastName(event.target.value)} placeholder="staff last name" required />
                    </div>

                    <div className="form-group col-md-12">
                      <input type="text" name="staff_phone" value={staff_phone} onChange={event => setPhoneNumber(event.target.value)} placeholder="staff phone (555-555-5555)" required />
                    </div>

                    <div className="form-group col-md-12">
                      <select name="staff_role" value={company_role_id} onChange={event => setCompany_role_id(event.target.value)} className="custom-select-box">
                        <option value="1">staff</option>
                        <option value="2">Manager</option>
                        <option value="3">Admin</option>
                      </select>
                    </div>

                    <div className="form-group col-md-12">
                      <input type="password" name="staff_password" value={staff_password} onChange={event => setPassword(event.target.value)} placeholder="staff password" />
                      {passwordError && <div className="validation-error" role="alert">{passwordError}</div>}
                    </div>

                    <div className="form-group col-md-12">
                      <button className="theme-btn btn-style-one" type="submit" data-loading-text="Please wait..."><span>Add staff</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AddstaffForm;