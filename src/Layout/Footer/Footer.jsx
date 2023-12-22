import React from "react";
import { images } from "../../assets";
import "./Footer.css";
import {
  BsFacebook,
  BsInstagram,
  BsTelephoneX,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

function Footer() {
  return (
    <footer className="mt-5">
      <div className="footer-header px-10 py-2 bg-slate-300 flex justify-center items-center">
        <p className="text-lg w-[200px] text-slate-800 newLetter">
          Sign up for our week newsletter of latest car
        </p>
        <form action="" className="flex form-address">
          <input
            type="text"
            placeholder="Enter Email Address"
            className="h-[45px] w-[400px] rounded-md px-3 outline-none"
            name=""
            id=""
          />
          <button className="bg-blue-500  px-5 h-[45px] text-white text-lg">
            Register
          </button>
        </form>
      </div>
      <div className="lower-footer p-10 bg-slate-700 flex justify-around">
        <div className="footer-box box-1 flex flex-col gap-3">
          <img
            src={images.logo}
            alt=""
            className="w-[150px] h-[50px] rounded-md"
          />
          <div className="flex items-center gap-5 socialMedia">
            <BsTelephoneX size={20} className="text-white" />
            <span className="text-white">+1 7689879309</span>
          </div>
          <div className="flex gap-4 mt-3 socialIcon">
            <span>
              <a href="">
                <BsFacebook size={20} className="text-white" />
              </a>
            </span>
            <span>
              <a href="">
                <BsInstagram size={20} className="text-white" />
              </a>
            </span>
            <span>
              <a href="">
                <BsTwitter size={20} className="text-white" />
              </a>
            </span>
            <span>
              <a href="">
                <BsYoutube size={20} className="text-white" />
              </a>
            </span>
          </div>
        </div>
        <div className="footer-box box-2 min-w-[150px]">
          <h3 className="pb-3 text-[20px] border-b-2 text-white font-bold ">
            Company
          </h3>
          <ul>
            <li className="py-3 border-b-2 border-slate-5   00">
              <a href="" className="text-slate-300 cursor-pointer">
                About Us
              </a>
            </li>
            <li className="py-3 border-b-2 border-slate-5   00">
              <a href="" className="text-slate-300 cursor-pointer">
                Careers
              </a>
            </li>
            <li className="py-3 border-b-2 border-slate-5   00">
              <a href="" className="text-slate-300 cursor-pointer">
                Contact Us
              </a>
            </li>
            <li className="py-3 border-b-2 border-slate-5   00">
              <a href="" className="text-slate-300 cursor-pointer">
                Policy
              </a>
            </li>
            <li className="py-3 border-b-2 border-slate-5   00">
              <a href="" className="text-slate-300 cursor-pointer">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-box box-2 min-w-[150px]">
          <h3 className="pb-3 text-[20px] border-b-2 text-white font-bold ">
            Company
          </h3>
          <ul>
            <li className="py-3 border-b-2 border-slate-5   00">
              <a href="" className="text-slate-300 cursor-pointer">
                About Us
              </a>
            </li>
            <li className="py-3 border-b-2 border-slate-5   00">
              <a href="" className="text-slate-300 cursor-pointer">
                Careers
              </a>
            </li>
            <li className="py-3 border-b-2 border-slate-5   00">
              <a href="" className="text-slate-300 cursor-pointer">
                Contact Us
              </a>
            </li>
            <li className="py-3 border-b-2 border-slate-5   00">
              <a href="" className="text-slate-300 cursor-pointer">
                Policy
              </a>
            </li>
            <li className="py-3 border-b-2 border-slate-5   00">
              <a href="" className="text-slate-300 cursor-pointer">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-box box-2 min-w-[150px]">
          <h3 className="pb-3 text-[20px] border-b-2 text-white font-bold ">
            Company
          </h3>
          <ul>
            <li className="py-3 border-b-2 border-slate-5   00">
              <a href="" className="text-slate-300 cursor-pointer">
                About Us
              </a>
            </li>
            <li className="py-3 border-b-2 border-slate-5   00">
              <a href="" className="text-slate-300 cursor-pointer">
                Careers
              </a>
            </li>
            <li className="py-3 border-b-2 border-slate-5   00">
              <a href="" className="text-slate-300 cursor-pointer">
                Contact Us
              </a>
            </li>
            <li className="py-3 border-b-2 border-slate-5   00">
              <a href="" className="text-slate-300 cursor-pointer">
                Policy
              </a>
            </li>
            <li className="py-3 border-b-2 border-slate-5   00">
              <a href="" className="text-slate-300 cursor-pointer">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
