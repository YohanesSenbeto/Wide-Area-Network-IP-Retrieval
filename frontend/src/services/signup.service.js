const api_url = `http://44.220.163.30:8000`;
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
    console.log(response);
    return response;
};

// A function to log out the user
export const logOut = () => {
    localStorage.removeItem("user");
};
