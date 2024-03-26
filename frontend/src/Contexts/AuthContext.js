import React, { useState, useEffect, useContext } from "react";

import getAuth from "../util/auth";

// Create a context object
const AuthContext = React.createContext();

// Create a custom hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = getAuth();

    loggedInUser.then((response) => {
      if (response.user_token) {
        setIsLogged(true);
        setIsAdmin(response.user_role === 3); // Assuming 3 is the role for admin
        setUser(response);
      }
    });
  }, []);

  const value = { isLogged, isAdmin, setIsAdmin, setIsLogged, user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


//=================================================================
//=======================for employee=============================

// Import React and the Hooks we need here 

// Import the Util function we created to handle the reading from the local storage 

// Create a context object  
//const AuthContext = React.createContext();
// Create a custom hook to use the context

// Create a provider component  
export const AuthProviderTwo = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const [employee, setEmployee] = useState(null);

  const value = { isLogged, isAdmin, setIsAdmin, setIsLogged, employee };

  useEffect(() => {
    // Retrieve the logged in user from local storage
    const loggedInEmployee = getAuth();
    // console.log(loggedInEmployee);
    loggedInEmployee.then((response) => {
      // console.log(response);
      if (response.employee_token) {
        setIsLogged(true);
        // 3 is the employee_role for admin
        if (response.employee_role === 3) {
          setIsAdmin(true);
        }
        setEmployee(response);
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};


