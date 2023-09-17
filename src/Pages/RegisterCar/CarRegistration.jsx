// import "../../Pages/Dashboard/Dashboard.css";

import { AiFillCamera } from "react-icons/ai";
import { useFormik } from "formik";
import { useState } from "react";
import { MdSlowMotionVideo } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import "./CarRegistration.css";
import carShema from "../../Schema/carRegistrationSchema";
import { useCarRegistrationMutation } from "../../slice/mutation/authApi";
const CarRegistration = () => {
  const [images, setImages] = useState("");
  const [videos, setVideos] = useState("");

  const [submitCar, { isLoading, errors }] = useCarRegistrationMutation();

  const handleImage = (e) => {
    const files = e.target.files;
    setImages(files);
  };
  console.log(images);
  const handleVideo = (e) => {
    const files = e.target.files;
    setVideos(files);
  };
  console.log(videos);
  const onSubmit = async (value, actions) => {
    try {
      const res = await submitCar({
        ...value,
        images: [...images],
        videos: [...videos],
      }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const { values, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: {
      make: "",
      model: "",
      generation: "",
      engine: "",
    },
    validationSchema: carShema,
    onSubmit: onSubmit,
  });

  return (
    <div className="flex justify-center items-center h-[100%] flex-col py-10">
      <h1 className="text-[24px] font-bold pt-5 text-teal-600">
        Car Registration
      </h1>
      <form
        action=""
        className="flex flex-col items-center gap-6 w-[50%] mt-5"
        onSubmit={handleSubmit}
      >
        <div className="left-form  w-[50%] flex flex-col my-5 800px:flex-row 800px:w-[70%] car-registraion 800px:flex-wrap justify-between gap-5">
          <div className="contain flex flex-col  mt-5 gap-2 w-[45%]">
            <label htmlFor="">Make</label>
            <input
              type="text"
              className="h-[40px] rounded-md px-2 focus:outline-none"
              value={values?.make}
              onChange={handleChange}
              onBlur={handleBlur}
              name="make"
              id="make"
            />
          </div>
          <div className="contain flex flex-col  mt-5 gap-2 w-[45%]">
            <label htmlFor="">Model</label>
            <input
              type="text"
              className="h-[40px] rounded-md px-2 focus:outline-none"
              value={values?.model}
              onChange={handleChange}
              onBlur={handleBlur}
              name="model"
              id="model"
            />
          </div>
          <div className="contain flex flex-col  mt-5 gap-2 w-[45%]">
            <label htmlFor="">Engine</label>
            <input
              type="text"
              className="h-[40px] rounded-md px-2 focus:outline-none w-full"
              value={values?.engine}
              onChange={handleChange}
              onBlur={handleBlur}
              name="engine"
              id="engine"
            />
          </div>
          <div className="contain flex flex-col  mt-5 gap-2 w-[45%]">
            <label htmlFor="">Generation</label>
            <input
              type="text"
              className="h-[40px] rounded-md px-2 focus:outline-none"
              value={values?.generation}
              onChange={handleChange}
              onBlur={handleBlur}
              name="generation"
              id="generation"
            />
          </div>
          <div className="contain flex items-center mt-5  gap-2 w-[45%]">
            <label htmlFor="video">
              <MdSlowMotionVideo size={50} className=" text-slate-400" />
            </label>
            <input
              type="file"
              accept="video/*"
              multiple
              className="h-[40px] rounded-md px-2 focus:outline-none"
              onChange={handleVideo}
              name="video"
              id="video"
              hidden
            />
            <p>Video</p>
          </div>
          <div className="contain flex items-center  gap-2 mt-5 w-[45%]">
            <label htmlFor="image">
              <CiImageOn size={50} className=" text-slate-400" />
            </label>
            <input
              type="file"
              multiple
              className="h-[40px] rounded-md px-2 focus:outline-none"
              onChange={handleImage}
              name="image"
              id="image"
              hidden
            />
            <p>Picture</p>
          </div>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            className="my-5 self-end min-w-[250px] bg-teal-600 py-2 px-4 text-white text-xl rounded-md"
            value="Upload"
          />
        </div>
      </form>
    </div>
  );
};

export default CarRegistration;
