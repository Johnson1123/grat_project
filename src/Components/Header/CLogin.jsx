import React, { useState } from "react";
import "../../Layout/Header/Header.css";
import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useLoginMutation } from "../../slice/mutation/authApi";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import loginShema from "../../Schema/loginShema";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../baseurl";
import axios from "axios";
import { setUserData } from "../../slice/authSlice";

function CLogin({ setSwitchPage, setToggle, toggle }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState(false);
  const [login, { isLoading, error }] = useLoginMutation();

  const onSubmit = async (value, actions) => {
    try {
      const res = await login(value).unwrap();
      dispatch(setUserData(res));
      // setToggleLogin(false);
    } catch (error) {
      console.log(error);
    }
  };
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginShema,
    onSubmit,
  });

  // const handleGoogle = () => {
  //   try {
  //     axios.get(`${baseurl}/auth/google`);
  //     // navigate("/dashboard");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  return (
    <>
      <div className="login-container flex  w-[70%] bg-white justify-center items-center rounded-md relative">
      <span onClick={() => setToggle(!toggle)} >
        <AiOutlineClose className="register-close times" />
      </span>
      <div className="w-[30%] login-header">
        <p className="login-title text-[24px] font-bold text-center text-teal-600">
          Login
        </p>
        <div className="login-form w-[100%]">
          <form
            action=""
            className="form-login w-[100%]"
            onSubmit={handleSubmit}
          >
            <div className="div mt-4 flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  errors.email && touched.email && "errors"
                } border-2 border-black-300 h-[40px] rounded`}
              />
            </div>

            <div className="w-[100%] flex flex-col gap-2 div mt-4">
              <label htmlFor="">Password</label>
              <div className="in-div relative">
                <input
                  type={password ? "text" : "password"}
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`px-2 h-[40px] w-[100%] rounded-md focus:outline-none focus:border-none ${
                    errors.password && touched.password && "errors"
                  }`}
                />
                <span className="absolute top-[12px] right-4">
                  {password ? (
                    <AiOutlineEyeInvisible
                      className="text-[#a0a0a0]"
                      size={20}
                      onClick={() => setPassword(!password)}
                    />
                  ) : (
                    <AiOutlineEye
                      className="text-[#a0a0a0]"
                      size={20}
                      onClick={() => setPassword(!password)}
                    />
                  )}
                </span>
              </div>
            </div>
            <div className="mt-5 flex justify-between px-2">
              <div className="flex items-center remember">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="text-teal-600 ml-2">
                  Remember me
                </label>
              </div>
              <p
                className="text-teal-600 cursor-pointer"
                onClick={() => setSwitchPage(3)}
              >
                forget password?
              </p>
            </div>
            <input
              type="submit"
              value="Login"
              className="py-2 w-[100%] bg-teal-600 text-white text-xl mt-5 rounded-md"
            />
            <p
              className="mt-3 flex items-center"
              onClick={() => setSwitchPage(1)}
            >
              <span>Don't have account?</span>
              <span className="text-teal-600 ml-1 cursor-pointer">Sign Up</span>
            </p>
          </form>
        </div>
        <a
          className="flex items-center mx-auto mt-5 text-xl text-teal-600 google"
          // onClick={handleGoogle}
          href={`${baseurl}/auth/google`}
        >
          Signin with
          <span className="ml-2 flex items-center">
            <FcGoogle />
            oogle
          </span>
        </a>
      </div>
    </div>
    </>
  
  );
}

export default CLogin;
