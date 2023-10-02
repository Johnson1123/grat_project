import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

function Statistic() {
  const d = new Date();
  const [deep, setDeep] = useState(false);

  let data = {
    labels: ["Register", "Approved"],
    datasets: [
      {
        label: "=",
        data: [60, 40],
        backgroundColor: ["green", "Red"],
        borderColor: ["Green", "Red "],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="p-5 bg-[#f7f7f7] h-[100%]">
      <div className="date-sec">
        <h3 className="text-[26px] font-bold text-[#6f6f6f]">
          Today Statistics
        </h3>
        <p className="text-[16px]">
          <span className="text-[16px]">{"Tue"},</span>
          <span>{" 4 Nov"},</span>
          <span> {d.getFullYear()}</span>
          <span>{"  10:30 Am"}</span>
        </p>
      </div>
      <div
        className="first-box min-h-[100px] min-w-[80%]  p-3 mt-3 rounded-2xl bg-white"
        style={{ boxShadow: "0px 0 0px 5px #f3f3f3" }}
      >
        <div className="flex justify-between">
          <p className="font-bold text-[18px] text-[#6f6f6f]">Register</p>
          <p className="text-[#6f6f6f]">Today</p>
        </div>
        <div className="mt-3 text-[24px] font-bold flex items-center justify-between">
          <p>No. 1000</p>
          <span className="flex items-center">
            <FaArrowDown size={12} style={{ color: deep ? "red" : "green" }} />
            <span
              className="text-[16px] py-0 px-0 ml-1 font-medium"
              style={{ color: deep ? "red" : "green" }}
            >
              {"15%"}
            </span>
          </span>
        </div>
        <p className="mt-1 py-2 text-medium">Compare to last week No. 1200</p>
        <p className="mt-1 py-1 text-medium font-medium flex justify-between">
          <span>Last Month Register</span>
          <span>No. 1000</span>
        </p>
      </div>
      <div
        className="first-box min-h-[100px] min-w-[80%]  p-5 mt-3 rounded-2xl bg-white"
        style={{ boxShadow: "0px 0 0px 5px #f3f3f3" }}
      >
        <div className="flex justify-between">
          <p className="font-bold text-[18px] text-[#6f6f6f]">Approved</p>
          <p className="text-[#6f6f6f]">Today</p>
        </div>
        <div className="mt-3 text-[20px] font-bold flex items-center justify-between">
          <p>No. 1000</p>
          <span className="flex items-center">
            <FaArrowDown size={12} style={{ color: deep ? "red" : "green" }} />
            <span
              className="text-[16px] py-0 px-0 ml-1 font-medium"
              style={{ color: deep ? "red" : "green" }}
            >
              {"15%"}
            </span>
          </span>
        </div>
        <p className="mt-1 py-2 text-mediums">Compare to last week No. 1200</p>
        <p className="mt-1 py-1 text-medium font-medium flex justify-between">
          <span>Last Month Register</span>
          <span>No. 1000</span>
        </p>
      </div>
      <div className=" mt-4">
        <h3 className=" text-[20px] text-teal-500">Overall Statistic</h3>
        {/* <Pie data={data} /> */}
      </div>
    </div>
  );
}

export default Statistic;
