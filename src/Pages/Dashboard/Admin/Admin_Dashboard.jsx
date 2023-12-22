import React from "react";
import  "./Admin_Dashboard.css"
import Aside from "./Component/Aside";
import Statistic from "./Component/Statistic";
import Admin_home from "./Component/Admin_home";

function Admin() {
  return (
    <div className=" h-[100vh] flex  admin-dashboard">
      <div className="w-[15%] h-[100%] aside">
        <Aside />
      </div>
      <div className="w-[25%] statictics">
        <Statistic />
      </div>
      <div className="flex-1 admin" >
        <Admin_home />
      </div>
    </div>
  );
}

export default Admin;
