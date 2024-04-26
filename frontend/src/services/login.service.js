const api_url = `http://44.220.163.30:8000`;

const logIn = async (formData) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    };

    try {
        const userType = formData.userType;
        const response = await fetch(
            `${api_url}/api/login/${userType}`,
            requestOptions
        );
        const responseData = await response.json();

        if (response.status === 200 && responseData.status === "success") {
            if (responseData.data.user_token) {
                localStorage.setItem("user", JSON.stringify(responseData.data));
            }
            return responseData;
        } else {
            throw new Error(responseData.message || "Login failed");
        }
    } catch (error) {
        console.error("Error occurred during login:", error);
        throw error;
    }
};

const logOut = () => {
    localStorage.removeItem("user");
};

const getUserData = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.user_token) {
        // Make a request to fetch user data based on user token
        const response = await fetch(`${api_url}/api/userData`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${user.user_token}`,
                "Content-Type": "application/json",
            },
        });
        const responseData = await response.json();
        if (response.status === 200 && responseData.status === "success") {
            return responseData.data;
        } else {
            throw new Error(responseData.message || "Error fetching user data");
        }
    } else {
        throw new Error("User not logged in");
    }
};

module.exports = {
    logIn,
    logOut,
    getUserData,
};
