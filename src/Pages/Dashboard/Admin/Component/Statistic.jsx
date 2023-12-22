import React, { useState } from "react";
import './Statistic.css'
import { FaArrowDown } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import { DoughnutChart } from "./DoughnutChart";

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
    <div className="p-5 bg-[#f7f7f7] h-[100%] flex flex-col statistic-container">
      <div className="date-sec">
        <h2 className="text-[22px] font-bold text-[teal]">Today Statistics</h2>
        <p className="text-[14px]">
          <span className="text-[14px]">{"Tue"},</span>
          <span>{" 4 Nov"},</span>
          <span> {d.getFullYear()}</span>
          <span>{"  10:30 Am"}</span>
        </p>
      </div>
      <div
        className="first-box min-h-[100px] min-w-[80%]  p-3 mt-7 rounded-2xl bg-white"
        
      >
        <div className="flex justify-between">
          <p className="font-bold text-[16px] text-[teal]">Register</p>
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
        <p className="mt-1 py-2 text-medium text-[15px]">
          Compare to last week No. 1200
        </p>
        <p className="mt-1 py-1 text-medium font-medium flex justify-between ">
          <span className="text-[14px]">Last Month Register</span>
          <span>No. 1000</span>
        </p>
      </div>
      <div
        className="first-box min-h-[100px] min-w-[80%]  p-5 mt-7 rounded-2xl bg-white"

      >
        <div className="flex justify-between">
          <p className="font-bold text-[16px] text-[teal]">Approved</p>
          <p className="text-[#6f6f6f]">Today</p>
        </div>
        <div className="mt-3 text-[16px] font-bold flex items-center justify-between">
          <p>No. 1000</p>
          <span className="flex items-center">
            <FaArrowDown size={12} style={{ color: deep ? "red" : "green" }} />
            <span
              className="text-[14px] py-0 px-0 ml-1 font-medium"
              style={{ color: deep ? "red" : "green" }}
            >
              {"15%"}
            </span>
          </span>
        </div>
        <p className="mt-1 py-2 text-mediums text-[15px]">
          Compare to last week No. 1200
        </p>
        <p className="mt-1 py-1 text-medium font-medium flex justify-between text-[15px]">
          <span className="text-[14px]">Last Month Register</span>
          <span>No. 1000</span>
        </p>
      </div>
      <div className="mt-[auto] mx-auto">
        <h3 className=" text-[20px] py-5 text-[teal]">Presentation</h3>
        <div className="flex items-center">
          <div className="w-[150px] h-[150px]">
            <DoughnutChart />
          </div>
          <div className="ml-5">
            <ul>
              <li className="flex items-center gap-3">
                <span className="w-[10px] h-[10px] rounded-full bg-[gainsboro] "></span>
                Pending
              </li>
              <li className="flex items-center gap-3">
                <span className="w-[10px] h-[10px] rounded-full bg-[teal]"></span>
                Approved
              </li>
              <li className="flex items-center gap-3">
                <span className="w-[10px] h-[10px] rounded-full bg-[#d44b39]"></span>
                Rejected
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
