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
