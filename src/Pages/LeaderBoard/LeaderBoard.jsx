import axios from "axios";
import  './LeaderBoard.css'
import React, { useEffect, useState } from "react";
import { images } from "../../assets";

function LeaderBoard() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    (async () => {
      const cars = await axios.get("/data.json");
      setCars(cars.data);
    })();
  }, []);
  console.log(cars);
  return (
    <div className="table-containers">
      <div className="header flex px-5 board-header">
        <h4 className="w-[10%] text-lg text-teal-600 font-bold">S/n</h4>
        <h4 className="w-[12%] text-lg text-teal-600 font-bold">Name</h4>
        <h4 className="w-[12%] text-lg text-teal-600 font-bold">Model</h4>
        <h4 className="w-[13%] text-lg text-teal-600 font-bold">Engine</h4>
        <h4 className="w-[13%]  text-lg text-teal-600 font-bold">Generation</h4>
        <h4 className="w-[25%] text-center text-lg text-teal-600 font-bold">
          Image
        </h4>
        <h4 className="w-[10%] text-lg text-teal-600 font-bold text-center">
          Details
        </h4>
      </div>
      <div className="leader-list">
        {cars.slice(0, 5).map((item, key) => {
          return (
            <div className="shadow-md  p-5 rounded-md mt-5 flex items-center hover:scale-105 duration-300 tablebox">
              <div className="w-[10%]">{key + 1}</div>
              <div className="w-[12%] truncate">{item.name}</div>
              <div className="w-[12%] truncate">{item.model}</div>
              <div className="w-[13%] truncate">{item.Engine}</div>
              <div className="w-[13%] truncate">{item.generation}</div>
              <div className="w-[25%] truncate flex justify-center gap-1">
                {item.image.slice(0, 2).map((item, i) => {
                  return (
                    <div className="h-[40px] w-[40px] rounded-full overflow-hidden img-box">
                      <img
                        src={images.car2}
                        alt={item}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="w-[10%] text-center cursor-pointer text-[brown] font-bold">
                View
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
     

export default LeaderBoard;
