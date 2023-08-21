import React, { useState } from "react";
import { images } from "../../assets";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import registerSchema from "../../Schema/register";
import { useFormik } from "formik";
import axios from "axios";
import loginShema from "../../Schema/loginShema";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);
  return (
    <div>
      <div className="upper-header">
        <div className="marque text-white">{new Date().toLocaleString()}</div>
        <div className="main-header">
          <img src={images.logo} alt="" className="header-logo" />
          <div className="search-header">
            <form action="">
              <input type="text" />
            </form>
            <button className="px-4 btn-search">Search</button>
          </div>
          <div className="auth">
            <button
              className="btn-auth register"
              onClick={() => setToggle(!false)}
            >
              register
            </button>
            <button
              className="px-4 btn-auth login"
              onClick={() => setToggleLogin(!toggleLogin)}
            >
              Login
            </button>
          </div>
          <span className="header-bar">
            <FaBars />
          </span>
        </div>
      </div>
      {toggle && <Register toggle={toggle} setToggle={setToggle} />}
      {toggleLogin && (
        <Login toggleLogin={toggleLogin} setToggleLogin={setToggleLogin} />
      )}
    </div>
  );
}

function Register({ toggle, setToggle }) {
  const navigate = useNavigate();
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const onSubmit = async (value, actions) => {
    try {
      await axios.post("https://gart-api.onrender.com/register-page", value);
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
  console.log(errors);

  return (
    <div className="register-container">
      <div className="reg-inner">
        <span onClick={() => setToggle(!toggle)}>
          <AiOutlineClose className="register-close" />
        </span>
        <div className="left-con">
          <img src={images.racing} alt="" />
        </div>
        <div className="right-con">
          <p className="register-title">Register</p>
          <div className="register-form">
            <form action="" className="form-register" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 div mt-4">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  className={`${
                    errors.firstName && touched.firstName && "errors"
                  }`}
                />
              </div>
              {errors.firstName && touched.firstName && (
                <p className="p-error">{errors.firstName}</p>
              )}
              <div className="flex flex-col gap-2 div mt-4">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  className={`${
                    errors.lastName && touched.lastName && "errors"
                  }`}
                />
              </div>
              {errors.lastName && touched.lastName && (
                <p className="p-error">{errors.lastName}</p>
              )}
              <div className="div flex flex-col gap-2 div mt-4">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={`${errors.email && touched.email && "errors"}`}
                />
              </div>
              {errors.email && touched.email && (
                <p className="p-error">{errors.email}</p>
              )}
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
              {errors.password && touched.password && (
                <p className="p-error">{errors.password}</p>
              )}
              <div className="w-[100%] flex flex-col gap-2 div mt-4">
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
                  <span className="absolute top-[12px] right-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
function Login({ toggleLogin, setToggleLogin }) {
  const navigate = useNavigate();
  const onSubmit = async (value, actions) => {
    try {
      console.log(value);
      const res = await axios.post("https://gart-api.onrender.com", value);
      console.log(res);
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
  console.log(values);
  const [password, setPassword] = useState(false);
  return (
    <div className="register-container">
      <div className="flex h-[90%] w-[70%] bg-white justify-center items-center rounded-md relative">
        <span onClick={() => setToggleLogin(!toggleLogin)}>
          <AiOutlineClose className="register-close" />
        </span>
        <div className="w-[30%]">
          <p className="login-title">Login</p>
          <div className="login-form w-[100%]">
            <form
              action=""
              className="form-login w-[100%]"
              onSubmit={handleSubmit}
            >
              <div className="div mt-4">
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
                  } border-2 border-black-300`}
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
              <input
                type="submit"
                value="Login"
                className="py-2 w-[100%] bg-teal-600 text-white text-xl mt-4 rounded-md"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
