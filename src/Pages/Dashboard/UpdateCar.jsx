// import "../../Pages/Dashboard/Dashboard.css";

import { AiFillCamera, AiOutlineClose } from "react-icons/ai";
import { RxVideo } from "react-icons/rx";
import "../../Pages/Dashboard/CarsList.css";
import { useFormik } from "formik";
import { useState } from "react";

const UpdateCar = ({ toggle, setToggle }) => {
  const { values, handleChange, handleSubmit, handleBlur, error } = useFormik({
    initialValues: {
      name: "",
      make: "",
      model: "",
      generation: "",
      seat: "",
      color: "",
      interior: "",
      exterior: "",
      Engine: "",
      image: "",
    },
  });
  // const imageUrl = window.URL.createObjectURL(values.image);
  const [image, setImage] = useState(values.image);
  return (
    <div className=" updatecar-cont h-[100%] flex justify-center items-center flex-col w-[100%]  fixed top-0 left-0 bg-[#00000087]">
      <div className=" h-[95%] flex-col w-[80%] flex justify-center items-center rounded-md bg-white relative updatecar-header">
        <button
          className="absolute right-5 top-5"
          onClick={() => setToggle(!toggle)}
        >
          <AiOutlineClose size={25} className="font-bold" />
        </button>
        {/* <div className="edit-image h-[150px] w-[150px] overflow-hidden relative">
          {image && (
            <img
              src={image}
              alt=""
              className="w-[100%] h-[100%] rounded-full object-cover ]"
            />
          )}
          <input
            type="file"
            hidden
            name="image"
            id="image"
            onChange={(e) => setImage(URL.createObjectURL(e.target.value[0]))}
          />
          <label
            className="absolute top-[50%] right-0 z-50 h-[20px] w-[20px] p-1 bg-[green] rounded-full flex justify-center items-center"
            for="image"
          >
            <AiFillCamera color="white" size={11} className="pointer" />
          </label>
        </div> */}
        <p className="text-lg font-bold">Update Speed Time</p>
        <form
          action=""
          className="flex flex-col items-center gap-6 w-[80%] mt-5"
        >
          <div className="left-form 800px:w-[40%]  w-[80%] flex flex-col gap-5 ">
            <div className="contain flex flex-col gap-2">
              <label htmlFor="">Select Time</label>
              {/* <select name="" id=""></select> */}
              <select
                name="addTime"
                id="addTime"
                className="h-[40px] rounded-md px-2 focus:outline-none border-2 border-slate-100"
              >
                <option>select here</option>
                <option value="1/8">1/8 (mph)</option>
                <option value="1/8">1/4 (mph)</option>
                <option value="1/8">0-6 (mph)</option>
                <option value="1/8">60-130 (mph)</option>
              </select>
            </div>
            <div className="flex items-center">
              <div className="h-[30px] w-[30px] mr-3 mt-2 flex justify-center items-center border-2 border-slate-600 rounded-full ">
                <RxVideo size={20} color="green" />
              </div>
              <input type="file" hidden id="video" />
              <label htmlFor="video">Upload Video</label>
            </div>
            {/* <input
                type="text"
                className="h-[40px] rounded-md px-2 focus:outline-none"
                value={values?.make}
                onChange={handleChange}
                name="make"
                id="make"
              />
            </div>
            <div className="contain flex flex-col gap-2">
              <label htmlFor="">Model</label>
              <input
                type="text"
                className="h-[40px] rounded-md px-2 focus:outline-none"
                value={values?.model}
                onChange={handleChange}
                name="model"
                id="model"
              />
            </div>
            <div className="contain flex flex-col gap-2">
              <label htmlFor="">Engine</label>
              <input
                type="text"
                className="h-[40px] rounded-md px-2 focus:outline-none"
                value={values?.Engine}
                onChange={handleChange}
                name="Engine"
                id="Engine"
              />
            </div>
            <div className="contain flex flex-col gap-2">
              <label htmlFor="">Generation</label>
              <input
                type="text"
                className="h-[40px] rounded-md px-2 focus:outline-none"
                value={values?.generation}
                onChange={handleChange}
                name="generation"
                id="generation"
              />
            </div>
          </div>
          <div className="right-form w-[50%] flex flex-col gap-5">
            <div className="contain flex flex-col gap-2">
              <label htmlFor="">Speed</label>
              <input
                type="text"
                className="h-[40px] rounded-md px-2 focus:outline-none"
                value={values.Speed}
                onChange={handleChange}
                name="speed"
                id="speed"
              />
            </div>
            <div className="contain flex flex-col gap-2">
              <label htmlFor="">Color</label>
              <input
                type="text"
                className="h-[40px] rounded-md px-2 focus:outline-none"
                value={values.color}
                onChange={handleChange}
                name="color"
                id="color"
              />
            </div>
            <div className="contain flex flex-col gap-2">
              <label htmlFor="">No. Seat</label>
              <input
                type="text"
                className="h-[40px] rounded-md px-2 focus:outline-none"
                value={values.seat}
                onChange={handleChange}
                name="seat"
                id="seat"
              />
            </div>
            <div className="contain flex flex-col gap-2">
              <label htmlFor="">LinkedIn</label>
              <input
                type="text"
                className="h-[40px] rounded-md px-2 focus:outline-none"
                value={values.linkedin}
                onChange={handleChange}
                name="instagram"
                id="instagram"
          */}

            <div className="flex justify-center">
              <input
                type="submit"
                className="mt-4 self-end min-w-[250px] bg-slate-600 py-3 px-6 text-white text-xl rounded-md"
                value="Add time"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCar;
