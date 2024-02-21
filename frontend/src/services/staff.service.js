// Import from the env
const api_url = process.env.REACT_APP_API_URL;

// A function to send post request to create a new staff
const createstaff = async (formData, loggedInstaffToken) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": loggedInstaffToken,
    },
    body: JSON.stringify(formData),
  };
  console.log(requestOptions);
  const response = await fetch(`${api_url}/api/staff`, requestOptions);
  return response;
};

// A function to send get request to get all staffs
const getAllstaffs = async (token) => {
  // console.log(token);
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };
  const response = await fetch(`${api_url}/api/staffs`, requestOptions);
  return response;
};

// Export all the functions
const staffService = {
  createstaff,
  getAllstaffs,
};
export default staffService;
