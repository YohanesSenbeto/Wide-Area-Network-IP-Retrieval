const api_url = process.env.REACT_APP_API_URL;

// A function to send the login request to the server
const logIn = async (formData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  try {
    console.log("About to send login request");
    console.log(requestOptions.body);

    const response = await fetch(`${api_url}/api/login`, requestOptions);

    return response;
  } catch (error) {
    console.error("Error occurred during login:", error);
    throw error;
  }
};

// A function to log out the user
const logOut = () => {
  localStorage.removeItem("user");
};

// Export the functions
module.exports = {
  logIn,
  logOut,
};
