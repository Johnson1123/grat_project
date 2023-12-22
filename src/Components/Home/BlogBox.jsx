import React from "react";
import { images } from "../../assets";
import './BlogBox.css';

function BlogBox() {
  return (
    <div className="max-w-[350px] flex flex-col justify-center items-center overflow-hidden py-4 px-4 shadow-lg rounded-lg blogBox">
      <div className="img-con w-[100%] h-[150px] object-cover">
        <img src={images.racing} alt="" className="w-[100%] h-[100%] " />
      </div>
      <div className="decription">
        <h3 className="font-bold text-[18px] lead-3 ">
          Buy Three Bugatti get 1 with fluid free
        </h3>
        <p className="box-time text-sm mt-1 font-[600] text-teal-500">
          Jul, 24, 2023 | Latest News
        </p>
        <p className="box-text mt-2 font-[400]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
    </div>
  );
}

export default BlogBox;
