import React from "react";
import './Aside.css'
import { BiLogOutCircle } from "react-icons/bi";
import { FcApproval, FcDisapprove } from "react-icons/fc";
import { TbProgressCheck } from "react-icons/tb";
import { TbRelationManyToMany } from "react-icons/tb";
import { Link } from "react-router-dom";
import { images } from "../../../../assets";
import { MdNewLabel } from "react-icons/md";
import { SiPagespeedinsights } from "react-icons/si";

function Aside() {
  return (
    <div className="h-full w-[100%] flex flex-col bg-black justify-between aside-dashboard">
      <div className="first-con">
        <Link to="/">
            <img src={images.logo} alt="" className="w-[200px] py-5" />
        </Link>
      </div>
      <div className="second flex flex-col gap-3 px-5 h-[30%] aside_1">
        <h3 className="text-teal-500 px-5 text-[18px]">Dashboard </h3>
        <button className="flex items-center gap-2 text-[#f3f3f3] text-[16px] hover:bg-slate-700 rounded-md py-2 px-3">
          <span>
            <TbRelationManyToMany />
          </span>
          <span>All Cars</span>
        </button>
        <button className="flex items-center gap-2 text-[#f3f3f3] text-[16px] hover:bg-slate-700 rounded-md py-2 px-3">
          <span>
            <MdNewLabel />
          </span>
          <span>Recent Cars</span>
        </button>
        <button className="flex items-center gap-2 text-[#f3f3f3] text-[16px] hover:bg-slate-700 rounded-md py-2 px-3">
          <span>
            <SiPagespeedinsights />
          </span>
          <span>Rated Cars</span>
        </button>
      </div>
      <div className="third-con flex flex-col gap-3 px-5 h-[30%] aside_2">
        <h3 className="text-teal-500 px-5 text-[18px]">Category </h3>
        <button className="flex items-center gap-2 text-[#f3f3f3] text-[18px] hover:bg-slate-700 rounded-md py-2 px-3">
          <span>
            <FcApproval />
          </span>
          <span>Approved Cars</span>
        </button>
        <button className="flex items-center gap-2 text-[#f3f3f3] text-[16px] hover:bg-slate-700 rounded-md py-2 px-3">
          <span>
            <TbProgressCheck />
          </span>
          <span>Pending Cars</span>
        </button>
        <button className="flex items-center gap-3 text-[#f3f3f3] text-[16px] hover:bg-slate-700 rounded-md py-2 px-3">
          <span>
            <FcDisapprove />
          </span>
          <span>Unapproved Cars</span>
        </button>
      </div>
      <div className="fourth h-[10%] mx-auto w-[100%] px-5 aside_3">
        <button className="flex items-center gap-3 text-[#f3f3f3] text-[16px] bg-slate-700 rounded-md py-2 px-3 w-[100%] text-center">
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
