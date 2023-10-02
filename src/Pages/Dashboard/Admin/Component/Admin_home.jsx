import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import List from "./List";

function Admin_home() {
  return (
    <div className="w-[100%] p-5 bg-[rgb(240,240,240)]">
      <div className="flex items-center justify-end gap-5">
        <div className="notification relative" style={{ width: "30px" }}>
          <IoNotificationsOutline size={30} />
          <span className="absolute flex justify-center items-center text-[10px] text-white bg-red-600 h-[15px] w-[15px] rounded-full top-0 right-0">
            2
          </span>
        </div>
        <div className="search bg-white w-[300px] h-[40px] px-3 rounded-md flex items-center">
          <form action="" className="w-[100%] h-[100%]">
            <input
              type="text"
              className="bg-transparent h-[100%] border-none focus:outline-none w-[90%]"
            />
          </form>
          <CiSearch size={25} className="cursor-pointer" />
        </div>
      </div>
      <div className="">
        <List />
      </div>
    </div>
  );
}

export default Admin_home;
