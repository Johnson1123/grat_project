import React from "react";
import Aside from "./Component/Aside";
import Statistic from "./Component/Statistic";
import Admin_home from "./Component/Admin_home";

function Admin() {
  return (
    <div className=" h-[100vh] flex">
      <div className="w-[15%] h-[100%]">
        <Aside />
      </div>
      <div className="w-[25%]">
        <Statistic />
      </div>
      <div className="flex-1">
        <Admin_home />
      </div>
    </div>
  );
}

export default Admin;
