import { useFormik } from "formik";
import React, { useState } from "react";
import './ResetPassword.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { forgetSchema } from "../../Schema/loginShema";
import {
  useForgetPasswordMutation,
  useRetrievePasswordMutation,
} from "../../slice/mutation/authApi";
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [conPassword, setConPassword] = useState(false);
  const [resetPassword, { isLoading: passLoading, error: passError }] =
    useRetrievePasswordMutation();
  const onSubmitPass = async (value, actions) => {
    try {
      const res = await resetPassword({ ...value, token }).unwrap();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const {
    values: passValues,
    handleChange: passHandleChange,
    handleBlur: passHandleBlur,
    errors: passErrors,
    touched: passTouched,
    isSubmitting: passIsSubmitting,
    handleSubmit: passHandleSubmit,
  } = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: forgetSchema,
    onSubmit: onSubmitPass,
  });

  return (
    <div className="reset-container h-[100vh] w-[100%] flex justify-center items-center">
      <div className="w-[30%] reset-form">
        <p className="login-title text-[24px] font-bold text-center">
          Reset password
        </p>
        <div className="login-form w-[100%]">
          <form
            action=""
            className="form-login w-[100%] flex flex-col gap-4"
            onSubmit={passHandleSubmit}
          >
            <div className="w-[100%] flex flex-col gap-2 div mt-4">
              <label htmlFor="">New password</label>
              <div className="in-div relative">
                <input
                  type={newPassword ? "text" : "password"}
                  name="newPassword"
                  id="newPassword"
                  value={passValues.newPassword}
                  onChange={passHandleChange}
                  onBlur={passHandleBlur}
                  className={`px-2 h-[40px] w-[100%] rounded-md focus:outline-none focus:border-none ${
                    passErrors.newPassword &&
                    passTouched.newPassword &&
                    "errors"
                  }`}
                />
                <span className="absolute top-[12px] right-4">
                  {newPassword ? (
                    <AiOutlineEyeInvisible
                      className="text-[#a0a0a0]"
                      size={20}
                      onClick={() => setNewPassword(!newPassword)}
                    />
                  ) : (
                    <AiOutlineEye
                      className="text-[#a0a0a0]"
                      size={20}
                      onClick={() => setNewPassword(!newPassword)}
                    />
                  )}
                </span>
              </div>
            </div>

            <div className="w-[100%] flex flex-col gap-2 div mt-4">
              <label htmlFor="">Confirm Password</label>
              <div className="in-div relative">
                <input
                  type={conPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  value={passValues.confirmPassword}
                  onChange={passHandleChange}
                  onBlur={passHandleBlur}
                  className={`px-2 h-[40px] w-[100%] rounded-md focus:outline-none focus:border-none ${
                    passErrors.confirmPassword &&
                    passTouched.confirmPassword &&
                    "errors"
                  }`}
                />
                <span className="absolute top-[12px] right-4">
                  {conPassword ? (
                    <AiOutlineEyeInvisible
                      className="text-[#a0a0a0]"
                      size={20}
                      onClick={() => setConPassword(!conPassword)}
                    />
                  ) : (
                    <AiOutlineEye
                      className="text-[#a0a0a0]"
                      size={20}
                      onClick={() => setConPassword(!conPassword)}
                    />
                  )}
                </span>
              </div>
            </div>

            <input
              type="submit"
              value="Submit"
              className="btn-reset py-2 w-[100%] bg-teal-600 text-white text-xl mt-5 rounded-md"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
