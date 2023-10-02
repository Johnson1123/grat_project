import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { FcApproval, FcDisapprove } from "react-icons/fc";
import { TbProgressCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { images } from "../../../../assets";

function Aside() {
  return (
    <div className="h-full w-[100%] flex flex-col bg-black justify-between">
      <div className="first-con">
        <Link to="/">
          <img src={images.logo} alt="" className="w-[200px] py-5" />
        </Link>
      </div>
      <div className="second flex flex-col gap-5 px-5 h-[30%]">
        <h3 className="text-teal-500 px-5 text-[22px]">Dashboard </h3>
        <button className="flex items-center gap-1 text-[#f3f3f3] text-[18px] hover:bg-slate-700 rounded-md py-2 px-3">
          <span>
            <FcApproval />
          </span>
          <span>All Cars</span>
        </button>
        <button className="flex items-center gap-1 text-[#f3f3f3] text-[18px] hover:bg-slate-700 rounded-md py-2 px-3">
          <span>
            <TbProgressCheck />
          </span>
          <span>Recent Cars</span>
        </button>
        <button className="flex items-center gap-1 text-[#f3f3f3] text-[18px] hover:bg-slate-700 rounded-md py-2 px-3">
          <span>
            <FcDisapprove />
          </span>
          <span>Rated Cars</span>
        </button>
      </div>
      <div className="third-con flex flex-col gap-5 px-5 h-[30%]">
        <h3 className="text-teal-500 px-5 text-[22px]">Category </h3>
        <button className="flex items-center gap-1 text-[#f3f3f3] text-[18px] hover:bg-slate-700 rounded-md py-2 px-3">
          <span>
            <FcApproval />
          </span>
          <span>Approved Cars</span>
        </button>
        <button className="flex items-center gap-1 text-[#f3f3f3] text-[18px] hover:bg-slate-700 rounded-md py-2 px-3">
          <span>
            <TbProgressCheck />
          </span>
          <span>Pending Cars</span>
        </button>
        <button className="flex items-center gap-1 text-[#f3f3f3] text-[18px] hover:bg-slate-700 rounded-md py-2 px-3">
          <span>
            <FcDisapprove />
          </span>
          <span>Unapproved Cars</span>
        </button>
      </div>
      <div className="fourth h-[10%] mx-auto w-[100%] px-5">
        <button className="flex items-center gap-1 text-[#f3f3f3] text-[18px] bg-slate-700 rounded-md py-2 px-3 w-[100%] text-center">
          <span>
            <BiLogOutCircle />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Aside;
