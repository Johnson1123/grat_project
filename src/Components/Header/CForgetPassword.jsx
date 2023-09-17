import React, { useState } from "react";
import { images } from "../../assets";
import "../../Layout/Header/Header.css";
import { AiOutlineClose } from "react-icons/ai";
import { useForgetPasswordMutation } from "../../slice/mutation/authApi";
import { useFormik } from "formik";
import { emailSchema } from "../../Schema/loginShema";
import { useNavigate } from "react-router-dom";

function CForgetPassword({ switchPage, setSwitchPage, toggle, setToggle }) {
  const navigate = useNavigate();
  const [forgetPassword, { isLoading: passLoading, error: passError }] =
    useForgetPasswordMutation();

  const onSubmitPass = async (value, actions) => {
    try {
      const res = await forgetPassword(value).unwrap();
      console.log(res);
      await dispatch(setUserData(res));
      setToggleLogin(false);
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
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: onSubmitPass,
  });

  return (
    <div className="flex h-[90%] w-[70%] bg-white justify-center items-center rounded-md relative">
      <span onClick={() => setToggle(!toggle)}>
        <AiOutlineClose className="register-close" />
      </span>
      <div className="w-[30%]">
        <p className="login-title text-[24px] font-bold text-center">
          Forget password
        </p>
        <div className="login-form w-[100%]">
          <form
            action=""
            className="form-login w-[100%]"
            onSubmit={passHandleSubmit}
          >
            <div className="w-[100%] flex flex-col gap-2 div mt-4">
              <label htmlFor="">Email</label>
              <div className="in-div relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={passValues.email}
                  onChange={passHandleChange}
                  onBlur={passHandleBlur}
                  className={`px-2 h-[40px] w-[100%] rounded-md focus:outline-none focus:border-none ${
                    passErrors.email && passTouched.email && "errors"
                  }`}
                />
              </div>
            </div>

            <input
              type="submit"
              value="Submit"
              className="py-2 w-[100%] bg-teal-600 text-white text-xl mt-5 rounded-md"
            />
            <p className="mt-3 flex items-center">
              <span>Go back to</span>
              <span
                className="text-teal-600 ml-1 cursor-pointer"
                onClick={() => setSwitchPage(2)}
              >
                Login Page
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CForgetPassword;
