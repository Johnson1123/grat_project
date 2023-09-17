import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function ViewCar({ view, setView }) {
  return (
    <div className=" h-[100%] flex justify-center items-center flex-col w-[100%]  fixed top-0 left-0 bg-[#00000087]">
      <div className=" h-[95%] flex-col w-[80%] flex justify-center items-center rounded-md bg-white relative">
        <button
          className="absolute right-5 top-5"
          onClick={() => setView(!view)}
        >
          <AiOutlineClose size={25} className="font-bold" />
        </button>
        <div className="left-con">
          <img src="../../assets/images/racing.jpg" alt="" />
        </div>
        <div className="right-con"></div>
      </div>
    </div>
  );
}

export default ViewCar;
