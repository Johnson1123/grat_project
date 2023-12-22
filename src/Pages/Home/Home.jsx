import React from "react";
import { images } from "../../assets";
import './Home.css';
import BlogBox from "../../Components/Home/BlogBox";
import InfoBox from "../../Components/Home/InfoBox";
import Menu from "../../Components/Menu/Menu";
import { data } from "autoprefixer";
import { useSelector } from "react-redux";
import LeaderBoard from "../LeaderBoard/LeaderBoard";

function Home() {
  // const mydata = useSelector((state) => state.auth);
  // console.log(mydata.userData.data.token);

  // Convert the data to a JSON string

  // const jsonData = JSON.stringify(mydata, null, 2);

  // Create a Blob with the JSON data
  // const blob = new Blob([jsonData], { type: "application/json" });

  // Create a link to download the JSON file
  // const a = document.createElement("a");
  // a.href = URL.createObjectURL(blob);
  // a.download = "data.json";

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
      {/* <a href={URL.createObjectURL(blob)} download>
        Download
      </a> */}
      {/* Menu  */}
      <Menu />
      {/* second section */}

      <div className="second-section mt-10 w-[100%] flex flex-col items-center justify-center">
        <h2 className="text-[30px] font-bold text-[brown] w-[85%] latest">
          Latest racing car
        </h2>
        <div className="second-section-leaderboard w-[85%] flex justify-between ">
          <div className="second-section-left-con w-[65%] mt-5">
            <div className="image-con h-[500px]">
              <LeaderBoard />
            </div>
            <div className="info-title-container mt- text-center font-bold mt-10">
              <h3 className="text-[24px] pt-10 wolkwagon">
                Wolkwagon <table></table>he smartest choice for
                <span className="text-teal-500 ">speed and power</span>
              </h3>
              <div className="info-container flex">
                <InfoBox />
              </div>
            </div>
          </div>

          {/* blog */}
          <div className="second-section-right-con w-[25%]">
            <div className="mb-8 newscar">
              <span className="text-[24px]  text-slate-600 newscar">
                News and Lastest Post
              </span>
            </div>
            <div className="flex flex-wrap flex-col gap-2 wrapBox">
              <BlogBox />
              <BlogBox />
              <BlogBox />
              <button className="blog-btn py-3 mt-5 rounded-md text-lg w-[100%] bg-slate-500 text-white">
                Go my blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
