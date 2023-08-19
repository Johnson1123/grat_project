import React, { useState } from "react";
import { images } from "../../assets";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import registerSchema from "../../Schema/register";
import { useFormik } from "formik";

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
  const onSubmit = async (value, actions) => {
    try {
      console.log(value);
      await axios.post("http://localhost:5000/api/sign-up", value);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const {
    values,
    handleChange,
    handleBlur,
    errors,
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
          <AiOutlineClose className="register-close" />
        </span>
        <div className="left-con">
          <img src={images.racing} alt="" />
        </div>
        <div className="right-con">
          <p className="register-title">Register</p>
          <div className="register-form">
            <form action="" className="form-register">
              <div className="div">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" />
              </div>
              <div className="div">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" />
              </div>
              <div className="div">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="div">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" />
              </div>
              <div className="div">
                <label htmlFor="confirmPassword"> Confirm Password</label>
                <input
                  type="text"
                  name="confirmPassword"
                  id="confirmPassword"
                />
              </div>
              <button className="register-btn">Register</button>
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
      await axios.post("http://localhost:5000/api/sign-up", value);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const {
    values,
    handleChange,
    handleBlur,
    errors,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <div className="register-container">
      <div className="flex h-[90%] w-[70%] bg-white justify-center items-center rounded-md relative">
        <span onClick={() => setToggleLogin(!toggleLogin)}>
          <AiOutlineClose className="register-close" />
        </span>
        <div className="">
          <p className="register-title">Login</p>
          <div className="register-form">
            <form action="" className="form-register">
              <div className="div mt-4">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="div mt-4">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" />
              </div>
              <button className="py-2 w-[100%] bg-slate-500 text-white text-xl mt-4 rounded-md">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
