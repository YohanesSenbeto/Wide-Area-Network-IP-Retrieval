import * as Yup from "yup";

export const registrationSchema = Yup.object({
  user_email: Yup.string().email().required("Email id is required"),
  user_name: Yup.string().min(2).max(20).required("First name is required"),
  user_last: Yup.string().min(2).max(20).required("Last name is required"),
  user_password: Yup.string().min(6).required("Please enter your password"),
  user_repassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("user_password"), null], "Password must match"),
});
