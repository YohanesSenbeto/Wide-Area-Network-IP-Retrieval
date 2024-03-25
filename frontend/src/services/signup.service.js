const api_url = process.env.REACT_APP_API_URL;

// A function to send the signup request to the server
export const signUp = async (formData) => {
    try {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        };
        console.log("About to send signup request");
        console.log(requestOptions.body);
        const response = await fetch(`${api_url}/api/signup`, requestOptions);
        return response;
    } catch (error) {
        console.error("Error during signup:", error);
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
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
