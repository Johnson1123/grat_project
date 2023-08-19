import * as yup from "yup";
const registerSchema = yup.object().shape({
  firstName: yup.string().required("Name is required"),
  lastName: yup.string().required("Name is required"),
  email: yup.string(),
  password: yup.string().min(6),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "password"),
});

export default registerSchema;
