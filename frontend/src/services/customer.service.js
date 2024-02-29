const api_url = process.env.REACT_APP_API_URL;


// A function to send post request to create a new Customer
const createCustomer = async (formData, loggedInCustomerToken) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": loggedInCustomerToken,
    },
    body: JSON.stringify(formData),
  };
  console.log(requestOptions);
  const response = await fetch(`${api_url}/api/Customer`, requestOptions);
  return response;
};

// A function to send get request to get all Customers
const getAllCustomers = async (token) => {
  // console.log(token);
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };
  const response = await fetch(`${api_url}/api/Customers`, requestOptions);
  return response;
};

// Export all the functions
const CustomerService = {
  createCustomer,
  getAllCustomers,
};
export default CustomerService;
