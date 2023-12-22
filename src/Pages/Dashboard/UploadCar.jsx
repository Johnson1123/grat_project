// import "../../Pages/Dashboard/Dashboard.css";

import { AiFillCamera } from "react-icons/ai";
import "../../Pages/Dashboard/CarsList.css";
import { useFormik } from "formik";
import { useState } from "react";

const UploadCar = () => {
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
  const [image, setImage] = useState("");
  console.log(image);
  return (
    <div className="flex justify-center items-center h-[100%] flex-col">
      <div className="edit-image h-[150px] w-[150px] overflow-hidden relative">
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
          onChange={(e) => setImage(e.target.value)}
        />
        <label
          className="absolute top-[50%] right-0 z-50 h-[20px] w-[20px] p-1 bg-[green] rounded-full flex justify-center items-center"
          for="image"
        >
          <AiFillCamera color="white" size={11} className="pointer" />
        </label>
      </div>
      <form action="" className="flex flex-col items-center gap-6 w-[80%] mt-5">
        <div className="left-form  w-[80%] flex flex-col gap-5 ">
          <div className="contain flex flex-col gap-2">
            <label htmlFor="">Make</label>
            <input
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
        {/* <div className="right-form w-[50%] flex flex-col gap-5"> */}
        {/* <div className="contain flex flex-col gap-2">
            <label htmlFor="">Speed</label>
            <input
              type="text"
              className="h-[40px] rounded-md px-2 focus:outline-none"
              value={values.Speed}
              onChange={handleChange}
              name="speed"
              id="speed"
            />
          </div> */}
        {/* <div className="contain flex flex-col gap-2">
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
            />
          </div> */}
        <div className="flex justify-center">
          <input
            type="submit"
            className="mt-4 self-end min-w-[250px] bg-slate-600 py-3 px-6 text-white text-xl rounded-md"
            value="Upload"
          />
        </div>
        {/* </div> */}
      </form>
    </div>
  );
};

export default UploadCar;
