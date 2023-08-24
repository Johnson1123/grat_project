import React from "react";
import { images } from "../../assets";
import BlogBox from "../../Components/Home/BlogBox";
import InfoBox from "../../Components/Home/InfoBox";

function Home() {
  return (
    <div>
      <div className="upper-banner flex justify-center mt-5 ">
        <div className="upper-banner-inner bg-slate-300 w-[85%] h-[80px] rounded-md flex justify-between items-center px-3">
          <p className="text-left  text-[18px] text-slate-500">
            Vw Parts -
            <span className="text-[24px] font-bold text-slate-600 ml-2">
              New Bugatti race motor
            </span>
          </p>
          <div className="upper-banner-right-con flex items-center">
            <img src={images.buggati} alt="" className="h-[70px] w-[70px] " />
            <div className="upper-banner-car-info ml-4">
              <p className="info-text text-[16px] font-bold text-[]">
                Bugatti 700 prime
              </p>
              <p className="info-text">+ nitro-boost </p>
            </div>
            <p className="text-teal-600 font-bold ml-4">
              Change <br /> Driver
            </p>
          </div>
        </div>
      </div>

      {/* second section */}

      <div className="second-section mt-10 w-[100%] flex flex-col items-center justify-center">
        <h2 className="text-[30px] font-bold text-slate-600  w-[85%]">
          New Bugatti race motor
        </h2>
        <div className="second-section w-[85%] flex justify-between">
          <div className="second-section-left-con w-[65%] mt-5">
            <div className="image-con h-[500px]">
              <img
                src={images.racingBanner}
                alt=""
                className="h-[500px] object-cover w-[100%]"
              />
            </div>
            <div className="info-title-container mt-5 text-center font-bold">
              <h3 className="text-[24px]">
                Wolkwagon <table></table>he smartest choice for
                <span className="text-teal-500 ">speed and power</span>
              </h3>
              <div className="info-container flex">
                <InfoBox />
              </div>
            </div>
          </div>
          <div className="second-section-right-con w-[25%]">
            <div className="mb-3">
              <span className="text-[24px]  text-slate-600">
                News and Lastest Post
              </span>
            </div>
            <div className="flex flex-wrap flex-col gap-2">
              <BlogBox />
              <BlogBox />
              <BlogBox />
              <button className="py-3 mt-5 rounded-md text-lg w-[100%] bg-slate-500 text-white">
                Go my blog
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1>Change</h1>
    </div>
  );
}

export default Home;
