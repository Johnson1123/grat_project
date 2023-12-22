import React, { useState } from "react";
import { images } from "../../assets";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import CForgetPassword from "../../Components/Header/CForgetPassword";
import CLogin from "../../Components/Header/CLogin";
import CRegister from "../../Components/Header/CRegister";
import { useSelector } from "react-redux";

function Header() {
  const [toggle, setToggle] = useState(false);

  const [toggleLogin, setToggleLogin] = useState(false);

  const user = useSelector((state) => state?.auth?.userData?.data?.user);

  const navigate = useNavigate();

  const [switchPage, setSwitchPage] = useState(0);

  return (
    <div>
      <div className="upper-header">
        <div className="marque text-white">{new Date().toLocaleString()}</div>
        <div className="main-header">
          <div onClick={() => navigate("/")}>
            <img src={images.logo} alt="" className="header-logo" />
          </div>
          <div className="search-header">
            <form action="">
              <input type="text" />
            </form>
            <button className="  px-3 btn-search">Search</button>
          </div>
          {user ? (
            <button
              className="flex items-center gap-2  "
              onClick={() => navigate("/dashboard")}
            >
              <BiUser size={25} className="text-white hover:text-slate-200" />
              <p className="text-white text-lg hover:text-slate-200">
                {user?.firstname}
              </p>
            </button>
          ) : (
            <div className="auth">
              <button
                className="btn-auth register"
                onClick={() => {
                  setToggle(true);
                  setSwitchPage(1);
                }}
              >
                Register
              </button>
              <button
                className="px-4 btn-auth login"
                onClick={() => {
                  setToggle(true);
                  setSwitchPage(2);
                }}
              >
                Login
              </button>
            </div>
          )}

          {/* <span className="header-bar">
            <FaBars />
          </span> */}
        </div>
      </div>
      {toggle && (
        <div className="register-container">
          {switchPage == 1 && (
            <CRegister
              toggle={toggle}
              setToggle={setToggle}
              setSwitchPage={setSwitchPage}
            />
          )}
          {switchPage == 2 && (
            <CLogin
              switchPage={switchPage}
              setSwitchPage={setSwitchPage}
              toggle={toggle}
              setToggle={setToggle}
            />
          )}
          {switchPage == 3 && (
            <CForgetPassword
              switchPage={switchPage}
              setSwitchPage={setSwitchPage}
              toggle={toggle}
              setToggle={setToggle}
            />
          )}
        </div>
      )}
    </div>
  );
}

function Login({ toggleLogin, setToggleLogin }) {
  return <div className="register-container"></div>;
}

export default Header;
