import * as yup from "yup";
const loginShema = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Email is required"),
  password: yup.string().min(6),
});
export const forgetSchema = yup.object().shape({
  newPassword: yup.string().min(6).required("old password is required"),
  confirmPassword: yup
    .string()
    .min(6)
    .required("confirm password is required")
    .oneOf([yup.ref("newPassword"), null], "confirm Password must match"),
});
export const updatePasswordSchema = yup.object().shape({
  oldPassword: yup.string().min(6).required("old password is required"),
  newPassword: yup.string().min(6).required("new password is required"),
  conPassword: yup
    .string()
    .min(6)
    .required("confirm password is required")
    .oneOf([yup.ref("newPassword"), null], "confirm Password must match"),
});
export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Provide valid email")
    .min(6)
    .required("Email is rewquired"),
});
export default loginShema;
