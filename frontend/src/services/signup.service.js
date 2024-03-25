<<<<<<< HEAD
const api_url = `http://localhost:8000`;
=======
const api_url = process.env.REACT_APP_API_URL;

>>>>>>> 699f29c32fbf9e098d946472a8d8e028210e44bf
// A function to send the signup request to the server

export const signUp = async (formData) => {
<<<<<<< HEAD
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    };
    console.log("About to send signup request");
    console.log(requestOptions.body);
    const response = await fetch(`${api_url}/api/signup`, requestOptions);
    console.log(response);
    return response;
=======
  console.log(formData);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  console.log("About to send signup request");
  console.log(requestOptions.body);
  const response = await fetch(`${api_url}/api/signup`, requestOptions);
  return response;
>>>>>>> 699f29c32fbf9e098d946472a8d8e028210e44bf
};

// A function to log out the user
export const logOut = () => {
    localStorage.removeItem("user");
};

const signUpService = {
  signUp,
  logOut,
};
export default signUpService;
