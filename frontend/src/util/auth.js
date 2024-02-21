// util/auth.js

// Function to read the data from local storage
const getAuth = async () => {
  const user = await JSON.parse(localStorage.getItem("user"));

  console.log(user);
  if (user && user.user_token) {
    const decodedToken = await decodeTokenPayload(user.user_token);
    user.staff_role = decodedToken.staff_role;
    user.user_id = decodedToken.user_id;
    user.user_first_name = decodedToken.first_name;
     user.user_email = decodedToken.user_email;
    return user;
  } else {
    return {};
  }
};

{
  // F/*unction to read the data from the user's local storage
  /*const getAuthTwo = async () => {
  const staff = await JSON.parse(localStorage.getItem('staff'));
  if (staff && staff.staff_token) {
    const decodedToken = await decodeTokenPayload(staff.staff_token);
    staff.staff_role = decodedToken.staff_role;
    staff.staff_id = decodedToken.staff_id;
    staff.staff_first_name = decodedToken.staff_first_name;
    return staff;
  } else {
    return {};
  }
};*/
}

// Function to decode the payload from the token
// The purpose of this code is to take a JWT token, extract its payload, decode it from Base64Url encoding, and then convert the decoded payload into a JavaScript object for further use and manipulation
const decodeTokenPayload = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join("")
  );
  return JSON.parse(jsonPayload);
};
export default getAuth;
