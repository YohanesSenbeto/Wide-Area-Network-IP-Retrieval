// util/auth.js

// Function to read the data from local storage
const getAuth = async () => {
  const user = await JSON.parse(localStorage.getItem("user"));
  if (user && user.user_token) {
    return user;
  } else {
    return {};
  }
};

export default getAuth;
