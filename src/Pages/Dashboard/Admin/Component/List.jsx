import React from "react";
import { images } from "../../../../assets";

function List({ data }) {
  return (
    <div className="flex justify-between p-3 rounded-md bg-slate-200 items-center">
      <p>02</p>
      <div className="flex gap-2 items-center">
        <img
          src={images.car2}
          alt=""
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <p>{"Johnson"}</p>
      </div>
      <p>{"Mecedze Benz"}</p>

      <p className="flex items-center gap-2">
        <p className="h-[12px] w-[12px] bg-red-500 rounded-full"></p>
        Rejected
      </p>
      <button className="bg-red-500 px-5 py-2 rounded-md text-white">
        Delete
      </button>
      {/* <p>No.</p>
      <p>type</p>
      <p>Owner</p>
      <p>name</p>
      <p>status</p>
      <p>Delete</p> */}
    </div>
  );
}

export default List;
