// import "../../Pages/Dashboard/Dashboard.css";

import { AiFillCamera } from "react-icons/ai";

import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import "./Dashboard.css";

const agent = {
  name: "Johnson",
  phone: "09076524078",
  email: "onifade@gmail.com",
  experience: "Expert",
  qualification: "B,Tech",
  facebook: "",
  instagram: "",
  linkedin: "",
};
const EditProfile = () => {
  const { values, handleChange, handleSubmit, handleBlur, error } = useFormik({
    initialValues: {
      name: agent && agent.name,
      phone: agent && agent.phone,
      email: agent && agent.email,
      experience: agent && agent.experience,
      level: agent && agent.qualification,
      facebook: agent && agent.facebook,
      instagram: agent && agent.instagram,
      twitter: agent && agent.twitter,
      linkedin: agent && agent.linkedin,
    },
  });
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  const handleImage = (e) => {
    const obj = URL.createObjectURL(e.target.files[0]);
    setPreview(obj);
  };
  const [website, setWebsite] = useState([]);
  const [websiteError, setWebsiteError] = useState("");
  const [affilted, setAffilated] = useState("");

  const HandleAfflited = (e) => {
    e.preventDefault();
    if (website.length > 4) {
      setWebsiteError("You cannot add more than 5 website");
      setAffilated("");
    } else if (affilted == "") {
      setWebsiteError("Website cannot be an empty string");
      setAffilated("");
    } else {
      website.push(affilted);
      setAffilated("");
      console.log(website);
    }
    console.log(websiteError);
  };
  return (
    <div className="flex justify-center items-center h-[100%] flex-col">
      <div className="edit-image h-[150px] w-[150px] overflow-hidden relative">
        {preview ? (
          <img
            src={preview}
            alt=""
            className="w-[100%] h-[100%] rounded-full object-cover"
          />
        ) : (
          <RxAvatar
            // size={25}
            className="w-[100%] h-[100%] rounded-full object-cover text-[#f3f3f3]"
          />
        )}

        <input type="file" hidden id="file" onChange={handleImage} />
        <label
          className="absolute top-[50%] right-0 z-50 h-[20px] w-[20px] p-1 bg-[green] rounded-full flex justify-center items-center"
          for="file"
        >
          <AiFillCamera color="white" size={11} className="pointer" />
        </label>
      </div>
      <form action=""className="flex gap-6 w-[80%] mt-5 profile-container">
        <div className="left-form  w-[50%] flex flex-col gap-5 ">
          <div className="contain flex flex-col gap-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="h-[40px] rounded-md  focus:outline-none"
              value={values?.name}
              onChange={handleChange}
              name="name"
              id="name"
            />
          </div>
          <div className="contain flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="h-[40px] rounded-md focus:outline-none"
              value={values?.email}
              onChange={handleChange}
              name="email"
              id="email"
            />
          </div>
          <div className="contain flex flex-col gap-2">
            <label htmlFor="">Phone</label>
            <input
              type="text"
              className="h-[40px] rounded-md focus:outline-none"
              value={values?.phone}
              onChange={handleChange}
              name="phone"
              id="phone"
            />
          </div>
          <div className="contain flex flex-col gap-2">
            <label htmlFor="">Add Affilited Website</label>
            <div className="flex items-center gap-2 affliate-cont">
              <input
                type="text"
                className={`h-[40px] rounded-md  focus:outline-none flex-1 ${
                  websiteError ? "border-[red]" : ""
                }`}
                placeholder={`You can add up to ${5 - website.length} website`}
                name="afflited"
                id="afflited"
                value={affilted}
                onChange={(e) => setAffilated(e.target.value)}
              />
              <button
                className="bg-slate-500  text-white rounded  px-3 self-end h-[40px] btn-add"
                onClick={HandleAfflited}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="right-form  flex flex-col gap-5">
          <div className="contain flex flex-col  gap-2">
            <label htmlFor="">Facebook</label>
            <input
              type="text"
              className="h-[40px]  rounded-md  focus:outline-none"
              value={values.facebook}
              onChange={handleChange}
              name="instagram"
              id="instagram"
            />
          </div>
          <div className="contain flex flex-col gap-2">
            <label htmlFor="">Twitter</label>
            <input
              type="text"
              className="h-[40px] rounded-md focus:outline-none"
              value={values.twitter}
              onChange={handleChange}
              name="instagram"
              id="instagram"
            />
          </div>
          <div className="contain flex flex-col gap-2">
            <label htmlFor="">Instagram</label>
            <input
              type="text"
              className="h-[40px] rounded-md  focus:outline-none"
              value={values.instagram}
              onChange={handleChange}
              name="instagram"
              id="instagram"
            />
          </div>

           <div className="flex mt-3 btn-update">
            <input
              type="submit"
              className="mt-4 self-end min-w-[250px] cursor-pointer bg-slate-500 py-2 px-6 text-white text-xl rounded-md"
              value="Update"
            />
          </div> 
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
