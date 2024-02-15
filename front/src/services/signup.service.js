const api_url = process.env.REACT_APP_API_URL;

// A function to send the signup request to the server
export const signUp = async (formData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  console.log("About to send signup request");
  console.log(requestOptions.body);
  const response = await fetch(`${api_url}/api/signup`, requestOptions);
  return response;
};

// A function to log out the user
export const logOut = () => {
  localStorage.removeItem("user");
};
