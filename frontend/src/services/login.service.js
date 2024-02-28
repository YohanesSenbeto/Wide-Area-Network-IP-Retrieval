const api_url = `localhost`;
//http://34.204.101.218:80

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
    const userType = formData.userType;
    console.log(userType);

    const response = await fetch(
      `${api_url}/api/login/${userType}`,
      requestOptions
    );
    const responseData = await response.json(); // Parse the response JSON

    if (response.status === 200 && responseData.status === "success") {
      // Save the user in the local storage
      if (responseData.data.user_token) {
        localStorage.setItem("user", JSON.stringify(responseData.data));
      }

      return responseData; // Return the parsed response data
    } else {
      throw new Error(responseData.message || "Login failed");
    }
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
