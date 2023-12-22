import React, { useEffect, useState } from "react";
import "./Menu.css";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";
import Model from "../Model/Model";
import { useDispatch, useSelector } from "react-redux";
import {
  setEight,
  setFive,
  setFour,
  setNine,
  setOne,
  setSeven,
  setSix,
  setThree,
  setTwo,
} from "../../slice/selection";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [toggle, setToggle] = useState(false);
  const [car, setCar] = useState("audi");
  const [model, setModel] = useState(false);
  const [openModel, setOpenSeries] = useState(false);
  const mydata = useSelector((state) => state.carData.carData);
  const stepOne = useSelector((state) => state.step.stepOne);
  const stepTwo = useSelector((state) => state.step.stepTwo);
  const stepThree = useSelector((state) => state.step.stepThree);
  const stepFour = useSelector((state) => state.step.stepFour);
  const stepFive = useSelector((state) => state.step.stepFive);
  const stepSix = useSelector((state) => state.step.stepSix);
  const stepSeven = useSelector((state) => state.step.stepSeven);
  const stepEight = useSelector((state) => state.step.stepEight);
  const navigate = useNavigate();
  const handleOne = (d) => {
    dispatch(setOne(d));
  };

  const dispatch = useDispatch();

  const handleClear = (d) => {
    if (d == 1) {
      stepOne && dispatch(setOne(""));
      stepTwo && dispatch(setTwo(""));
      stepThree && dispatch(setThree(""));
      stepFour && dispatch(setFour(""));
      stepFive && dispatch(setFive(""));
      stepSix && dispatch(setSix(""));
      stepSeven && dispatch(setSeven(""));
      stepEight && dispatch(setEight(""));
    } else if (d == 2) {
      stepTwo && dispatch(setTwo(""));
      stepThree && dispatch(setThree(""));
      stepFour && dispatch(setFour(""));
      stepFive && dispatch(setFive(""));
      stepSix && dispatch(setSix(""));
      stepSeven && dispatch(setSeven(""));
      stepEight && dispatch(setEight(""));
    } else if (d == setFour) {
      dispatch(setFive(""));
      dispatch(setSix(""));
      dispatch(setSeven(""));
      dispatch(setEight(""));
      dispatch(setNine(""));
    } else if (d == setFive) {
      dispatch(setSix(""));
      dispatch(setSeven(""));
      dispatch(setEight(""));
      dispatch(setNine(""));
    } else if (d == setSix) {
      dispatch(setSeven(""));
      dispatch(setEight(""));
      dispatch(setNine(""));
    } else if (d == setSeven) {
      dispatch(setEight(""));
      dispatch(setNine(""));
    } else {
      dispatch(setNine(""));
    }
  };
  const method = (collection, set) => {
    const elements = [];
    const display = [];
    if (Array.isArray(collection)) {
      for (const item of collection) {
        if (typeof item === "object") {
          for (const key in item) {
            elements.push(
              <p
                key={key}
                onClick={() => {
                  dispatch(set(item[key]));
                  // handleClear(set);
                }}
              >
                {key}1
              </p>
            );
          }
        } else {
          elements.push(
            <p
              onClick={() => {
                handleClear(1);
                navigate("/car-registration");
              }}
            >
              {item}
            </p>
          );
        }
      }
    } else if (typeof collection === "object") {
      for (const key in collection) {
        elements.push(
          <p
            key={key}
            onClick={() => {
              dispatch(set(collection[key]));
              handleClear(set);
            }}
          >
            {key}
          </p>
        );
      }
    } else {
      elements.push(
        <p onClick={() => navigate("/car-registration")}>{collection}1</p>
      );
    }

    return elements;
  };

  return (
    <div className="flex justify-center menu-header">
      <div className="inner-div w-[85%] bg-teal-500 rounded-md py-4">
        <div className="flex items-center bg-white w-full px-2 py-1 cursor-pointer  relative menu-container">
          <button
            className="hover:text-teal-400 flex items-center"
            onClick={() => {
              setToggle(!toggle);
              if (!toggle) {
                setModel(false);
              }
            }}
          >
            Select Car
            <span className="ml-2">
              {toggle ? <LiaAngleDownSolid /> : <LiaAngleUpSolid />}
            </span>
          </button>

          {toggle && (
            <div className="bg-[#000000b9] absolute top-10 w-full left-0 py-2 rounded-md z-10">
              <div className="">
                <button
                  className="bg-white px-3 py-1 mx-2 rounded-md"
                  onClick={() => {
                    handleOne(mydata[0]["Audi"]);
                    handleClear(1);
                  }}
                >
                  Audi
                </button>
                <button
                  className="bg-white px-3 py-1 mx-2 rounded-md"
                  onClick={() => {
                    handleOne(mydata[1]["Volkswagen"]);
                    handleClear(1);
                  }}
                >
                  Volkswagen
                </button>
              </div>
              <div className="flex mt-5 ml-3 control">
                <div className="relative">
                  {stepOne && (
                    <button
                      className=" px-4 py-2 rounded-m flex"
                      onClick={() => handleClear(2)}
                    >
                      {method(stepOne, setTwo)}1
                    </button>
                  )}
                  {stepTwo && !stepThree && (
                    <div className="bg-white p-5 flex  gap-4 rounded-md mt-2 flex-wrap w-[300px]">
                      {stepTwo && method(stepTwo, setThree)}
                    </div>
                  )}
                </div>
                <div className="relative">
                  {stepThree && (
                    <button className=" px-4 py-2 rounded-md text-red-500 flex">
                      {method(stepThree, setFour)}
                    </button>
                  )}
                  {stepFour && !stepFive && (
                    <div className="bg-white p-5 flex gap-4 rounded-md mt-2  flex-wrap w-[450px]">
                      {stepFour && method(stepFour, setFive)}
                    </div>
                  )}
                </div>
                <div className="relative">
                  {stepFive && (
                    <button className=" px-4 py-2 rounded-md text-red-500 flex ">
                      {method(stepFive, setSix)}
                    </button>
                  )}
                  {stepSix && !stepSeven && (
                    <div className="bg-white p-5 flex gap-4 rounded-md mt-2 flex-wrap w-[300px]">
                      {method(stepSix, setSeven)}
                    </div>
                  )}
                </div>
                <div className="relative">
                  {stepSeven && (
                    <button className=" px-4 py-2 rounded-md text-red-500 ">
                      {method(stepSeven, setEight)}
                    </button>
                  )}
                  {stepSeven && !stepEight && (
                    <div className="bg-white p-5 flex gap-4 rounded-md mt-2 flex-wrap w-[300px]">
                      {stepEight && !setNine && method(stepEight, setNine)}
                    </div>
                  )}
                </div>
              </div>

              <div className=""></div>
              {/* {stepOne && method(stepOne, setTwo)} */}
              {/* {console.log(stepTwo)} */}

              {/* <div className="ml-2 my-3 flex ">
                <div className="relative top-0 left-0"> */}
              {/* {stepTwo && (
                    <button
                      onClick={handleStepThree}
                      className="text-teal-800 px-4 py-1 border-green-600 border"
                    >
                      {stepTwo[0][0]}
                    </button>
                  )}
                  {stepOne && (
                    <div className="absolute left-0 top-9">
                      <div className=" bg-white rounded-md w-[300px] flex flex-wrap gap-4 p-3">
                        {stepThree && Object.entries(stepThree[0][1]) && (
                          <>
                            {Object.entries(stepThree[0][1]).map(
                              (option, index) =>
                                typeof Number(option[0]) == Number ? (
                                  <p
                                    key={index}
                                    value={option}
                                    onClick={() => {
                                      handleStepFour([option[1]]);
                                    }}
                                    className="hover:text-teal-600"
                                  >
                                    {option[1]}
                                  </p>
                                ) : (
                                  <p
                                    key={index}
                                    value={option}
                                    onClick={() => {
                                      handleStepFour(option[1]);
                                    }}
                                    className="hover:text-teal-600"
                                  >
                                    {option[0]}
                                  </p>
                                )
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  )} */}
              {/* </div> */}
              {/* <div className="relative top-0 left-0">
                  {stepFour && (
                    <button
                      onClick={""}
                      className="text-teal-800 px-4 py-1 border-green-600 border"
                    ></button>
                  )} */}
              {/* {stepFive &&
                    stepFive[0].map((option, index) =>
                      typeof Number(option) == Number ? (
                        <p
                          key={index}
                          value={option}
                          onClick={() => {
                            handleStepFour([option[1]]);
                          }}
                          className="hover:text-teal-600"
                        > */}
              {/* {option[1]} */}
              {/* {console.log(option[0][1])} */}
              {/* </p>
                      ) : (
                        <p
                          key={index}
                          value={option}
                          onClick={() => {
                            handleStepFour(option[1]);
                          }}
                          className="hover:text-teal-600"
                        >
                          arrap
                        </p>
                      )
                    )} */}
              {/* </div>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
