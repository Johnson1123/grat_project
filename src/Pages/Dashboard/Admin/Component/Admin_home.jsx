import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import List from "./List";
import './Admin_home.css'

function Admin_home() {
  const data = [
    {
      name: "benz",
      id: "7",
      Genenration: "7th Genenration",
      make: "mezede Benz",
      model: "Ne Age",
      status: "pending",
      Engine: "Electric",
      phote: ["Images.car3", "Images.car1"],
      video: ["video.one", "video.mp4"],
      owner: {
        name: "Johnson",
        image: "Images.car5",
      },
    },
    {
      name: "benz",
      id: "6",
      Genenration: "7th Genenration",
      make: "mezede Benz",
      status: "pending",
      model: "Ne Age",
      Engine: "Electric",
      phote: ["Images.car4", "Images.car5"],
      video: ["video.one", "video.mp12"],
      owner: {
        name: "Johnson",
        image: "Images.car5",
      },
    },
    {
      name: "benz",
      id: "4",
      Genenration: "7th Genenration",
      make: "mezede Benz",
      model: "Ne Age",
      status: "pending",
      Engine: "Electric",
      phote: ["Images.car2", "Images.car1"],
      video: ["video.one", "video.mp4"],
      owner: {
        name: "Johnson",
        image: "Images.car5",
      },
    },
    {
      name: "benz",
      id: "12",
      Genenration: "7th Genenration",
      make: "mezede Benz",
      model: "Ne Age",
      status: "pending",
      Engine: "Electric",
      phote: ["Images.car2", "Images.car1"],
      video: ["video.one", "video.mp12"],
      owner: {
        name: "Johnson",
        image: "Images.car5",
      },
    },
    {
      name: "benz",
      id: "13",
      Genenration: "7th Genenration",
      make: "mezede Benz",
      status: "rejected",
      model: "Ne Age",
      Engine: "Electric",
      phote: ["Images.car2", "Images.car1"],
      video: ["video.one", "video.mp4"],
      owner: {
        name: "Johnson",
        image: "Images.car5",
      },
    },
    {
      name: "benz",
      id: "18",
      Genenration: "7th Genenration",
      make: "mezede Benz",
      model: "Ne Age",
      Engine: "Electric",
      status: "pending",
      phote: ["Images.car2", "Images.car1"],
      video: ["video.one", "video.mp4"],
      owner: {
        name: "Johnson",
        image: "Images.car5",
      },
    },
    {
      name: "benz",
      id: "78",
      Genenration: "7th Genenration",
      make: "mezede Benz",
      model: "Ne Age",
      Engine: "Electric",
      status: "rejected",
      phote: ["Images.car2", "Images.car1"],
      video: ["video.one", "video.mp4"],
      owner: {
        name: "Johnson",
        image: "Images.car5",
      },
    },
    {
      name: "benz",
      id: "8",
      Genenration: "7th Genenration",
      make: "mezede Benz",
      status: "pending",
      model: "Ne Age",
      Engine: "Electric",
      phote: ["Images.car2", "Images.car1"],
      video: ["video.one", "video.mp4"],
      owner: {
        name: "Johnson",
        image: "Images.car5",
      },
    },
  ];

  return (
    
    <div className="w-[100%] p-5 bg-[rgb(240,240,240)] h-[100%]">
      <div className="flex items-center justify-end gap-5 bell-msg">
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
      <div className="admin-home">
      <div className="flex justify-between p-3 bg-teal-900 items-center mt-5 text-white car-statistics">
        <p className="w-[7%] truncate">No.</p>
        <p className="w-[15%] truncate">Owner</p>
        <p className="w-[10%] truncate">Name</p>
        <p className="w-[10%] truncate">Type</p>
        <p className="w-[12%] truncate">Engine</p>
        <p className="w-[10%] truncate">Status</p>
        <p className="w-[8%] truncate">View</p>
        <p className="w-[10%] truncate">Action</p>
        <p className="w-[10%] truncate">Action</p>
      </div>
      <div className="h-[85%] overflow-y-scroll no-scrollbar list">
        {data.map((item, i) => {
          return <List data={item} />;
        })}
      </div>
      </div>
    </div>
  );
}

export default Admin_home;
