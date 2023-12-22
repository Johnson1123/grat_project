import React, { useState } from "react";
import { useFormik } from "formik";
import { images } from "../../assets";
import { useNavigate } from "react-router-dom";
import registerSchema from "../../Schema/register";
import "../../Layout/Header/Header.css";
import { useRegisterMutation } from "../../slice/mutation/authApi";
import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";

function CRegister({ toggle, setToggle, setSwitchPage }) {
  const navigate = useNavigate();
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [register, { isLoading }] = useRegisterMutation();
  const onSubmit = async (value, actions) => {
    try {
      // await axios.post(`${baseurl}/register-page`, value);
      const res = await register(value).unwrap();
      setToggle(false);
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <div className="register-container">
      <div className="reg-inner">
        <span onClick={() => setToggle(!toggle)}>
          <AiOutlineClose className="register-close times" />
        </span>
        <div className="left-con">
          <img src={images.racing} alt="" />
        </div>
        <div className="right-con">
          <p className="register-title">Register</p>
          <div className="register-form">
            <form action="" className="form-register" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1 div mt-2">
                <label htmlFor="firstName">First Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    className={`${
                      errors.firstName && touched.firstName ? "errors" : "good"
                    }`}
                  />

                  {errors.firstName && touched.firstName ? (
                    <span className="absolute right-5 top-[50%] translate-y-[-50%]">
                      <AiOutlineInfoCircle
                        size={20}
                        className="register-icon text-red-600 "
                      />
                    </span>
                  ) : (
                    <span className="absolute right-5 top-[50%] translate-y-[-50%]">
                      <BsCheck2Circle
                        size={20}
                        className="text-green-700 font-extrabold"
                      />
                    </span>
                  )}
                </div>
              </div>
              {errors.firstName && touched.firstName && (
                <p className="p-error">{errors.firstName}</p>
              )}

              <div className="flex flex-col gap-1 div mt-2">
                <label htmlFor="lastName">Last Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    className={`${
                      errors.lastName && touched.lastName ? "errors" : "good"
                    }`}
                  />
                  {errors.lastName && touched.lastName ? (
                    <span className="absolute right-5 top-[50%] translate-y-[-50%]">
                      <AiOutlineInfoCircle
                        size={20}
                        className="register-icon text-red-600 "
                      />
                    </span>
                  ) : (
                    <span className="absolute right-5 top-[50%] translate-y-[-50%]">
                      <BsCheck2Circle
                        size={20}
                        className="text-green-700 font-extrabold"
                      />
                    </span>
                  )}
                </div>
              </div>
              {errors.lastName && touched.lastName && (
                <p className="p-error">{errors.lastName}</p>
              )}
              <div className="div flex flex-col gap-1 div mt-2">
                <label htmlFor="email">Email</label>
                <div className="relative">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={`${
                      errors.email && touched.email ? "errors" : "good"
                    }`}
                  />
                  {errors.email && touched.email ? (
                    <span className="absolute right-5 top-[50%] translate-y-[-50%]">
                      <AiOutlineInfoCircle
                        size={20}
                        className="register-icon text-red-600"
                      />
                    </span>
                  ) : (
                    <span className="absolute right-5 top-[50%] translate-y-[-50%]">
                      <BsCheck2Circle
                        size={20}
                        className="text-green-700 font-extrabold"
                      />
                    </span>
                  )}
                </div>
              </div>
              {errors.email && touched.email && (
                <p className="p-error">{errors.email}</p>
              )}
              <div className="w-[100%] flex flex-col gap-1 div mt-2">
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
                  <span className="absolute top-[12px] right-2">
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
              {errors.password && touched.password && (
                <p className="p-error">{errors.password}</p>
              )}
              <div className="w-[100%] flex flex-col gap-2 div mt-2">
                <label htmlFor=""> Confirm Password</label>
                <div className="in-div relative">
                  <input
                    type={confirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`px-2 h-[40px] w-[100%] rounded-md focus:outline-none focus:border-none ${
                      errors.password && touched.password && "errors"
                    }`}
                  />
                  <span className="absolute top-[12px] right-2">
                    {confirmPassword ? (
                      <AiOutlineEyeInvisible
                        className="text-[#a0a0a0]"
                        size={20}
                        onClick={() => setConfirmPassword(!confirmPassword)}
                      />
                    ) : (
                      <AiOutlineEye
                        className="text-[#a0a0a0]"
                        size={20}
                        onClick={() => setConfirmPassword(!confirmPassword)}
                      />
                    )}
                  </span>
                </div>
              </div>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="p-error">{errors.confirmPassword}</p>
              )}
              <input
                className="register-btn w-[100%] bg-teal-600 text-white"
                type="submit"
                value="Register"
              />
            </form>
            <p
              className="mt-1 flex items-center"
              onClick={() => setSwitchPage(2)}
            >
              <span>Don't have account?</span>
              <span className="text-teal-600 ml-1 cursor-pointer">Sign in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CRegister;
