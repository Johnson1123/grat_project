import * as yup from "yup";
const loginShema = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Email is required"),
  password: yup.string().min(6),
});
export default loginShema;
