import React from "react";
import { SiBreaker } from "react-icons/si";
import "./infoBox.css";

function InfoBox() {
  return (
    <div
      className=" infoBox flex gap-4 border-2 py-2 px-3   rounded-md hover:scale-105 shadow-md"
      style={{ borderColor: "#cc0066" }}
    >
      <span>
        <SiBreaker size="30" style={{ color: "#cc0066" }} />
      </span>
      <p
        className="text-teal-700 font-bold text-md  "
        style={{ color: "#cc0066" }}
      >
        Break Features
      </p>
    </div>
  );
}

export default InfoBox;
