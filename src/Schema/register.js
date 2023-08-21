import * as yup from "yup";
const registerSchema = yup.object().shape({
  firstName: yup.string().required("first Name is required"),
  lastName: yup.string().required("last Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("please enter a valid email"),
  password: yup.string().min(6).required("password is required"),
  confirmPassword: yup
    .string()
    .required("password is required")
    .oneOf([yup.ref("password"), null], "Password not matched"),
});

export default registerSchema;
