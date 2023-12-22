import React, { useState } from "react";
import  './Dashboard.css'
import { BiLogOutCircle, BiUserCircle } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineChangeCircle } from "react-icons/md";
import ChangePassword from "../../Components/Home/Dashboard/ChangePassword";
import EditProfile from "./EditProfile"
import Profile from "./Profile";
import UploadCar from "./UploadCar";
import UpdateCar from "./UpdateCar";
import CarsList from "./CarsList";
import ViewCar from "./ViewCar";
import { useDispatch } from "react-redux";
import { logout } from "../../slice/authSlice";


function Dashboard() {
  const [num, setNum] = useState(1);
  const [view, setView] = useState(false);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="main   flex">
      <div className="dashboard-aside  bg-slate-600 ">
        <ul className="flex flex-col gap-7 ml-5 h-[100%] mt-5">
          {num !== 1 ? (
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-5">
              <img
                src="../../../image/agent-2.webp"
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
          ) : null}
          <li>
            <button
              onClick={() => setNum(1)}
              className="text-lg flex items-center gap-2 text-white cursor-pointer hover:text-red-100"
            >
              <span className="">
                <BiUserCircle />
              </span>
              Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setNum(2)}
              className="text-lg text-white flex items-center gap-2 cursor-pointer hover:text-red-100"
            >
              <span>
                <FiEdit />
              </span>
              Edit Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setNum(3)}
              className="text-lg text-white flex items-center gap-2 cursor-pointer hover:text-red-100"
            >
              <span>
                <IoCarSportOutline />
              </span>
              List of Car
            </button>
          </li>
          <li>
            <button
              onClick={() => setNum(4)}
              className="text-lg text-white flex items-center gap-2  cursor-pointer hover:text-red-100"
            >
              <span>
                <IoCarSportOutline />
              </span>
              Upload Car
            </button>
          </li>
          <li>
            <button
              onClick={() => setNum(5)}
              className="text-lg flex items-center gap-2 text-white cursor-pointer hover:text-red-100"
            >
              <span>
                <MdOutlineChangeCircle />
              </span>
              Edit Password
            </button>
          </li>
          <li>
            <button
              onClick={() => dispatch(logout())}
              className="text-lg flex items-center gap-2 text-white cursor-pointer hover:text-red-100"
            >
              <span>
                <BiLogOutCircle />
              </span>
              Logout
            </button>
          </li>
        </ul>
      </div>

      <div className="w-[100%] profile">
        {num === 1 && <Profile />}
        {num === 2 && <EditProfile />}
        {num === 3 && (
          <CarsList
            toggle={toggle}
            setToggle={setToggle}
            setView={setView}
            view={view}
          />
        )}
        {num === 4 && <UploadCar />}
        {num === 5 && <ChangePassword />}
      </div>
      {toggle && <UpdateCar toggle={toggle} setToggle={setToggle} />}
      {view && <ViewCar view={view} setView={setView} />}
    </div>
  );
}

export default Dashboard;
