import React, { useState } from "react";
// import "../../Pages/Dashboard/Dashboard.css";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { useUpdatePasswordMutation } from "../../../slice/mutation/authApi";
import { updatePasswordSchema } from "../../../Schema/loginShema";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import './ChangePassword.css'

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [oldPassword, setPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [conPassword, setConPassword] = useState(false);
  const [updatePassword] = useUpdatePasswordMutation();
  const onSubmit = async (value, actions) => {
    try {
      const res = await updatePassword(value).unwrap();
      await dispatch(setUserData(res));
    } catch (error) {
      console.log(error);
    }
  };
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      conPassword: "",
    },
    validationSchema: updatePasswordSchema,
    onSubmit,
  });

  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center flex-col changeP-cont">
      <h2 className="text-[24px] font-bold my-4">Change your Password</h2>
      <form
        action=""
        className="w-[50%] flex justify-center items-center flex-col gap-4 mt-4"
        onSubmit={handleSubmit}
      >
        <div className="w-[80%] flex flex-col gap-2 input-psw">
          <label htmlFor="">Old Password</label>
          <div className="in-div relative">
            <input
              type={oldPassword ? "text" : "password"}
              name="oldPassword"
              id="oldPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              className="h-[40px] w-[100%] rounded-md focus:outline-none focus:border-none px-2"
            />
            <span className="absolute top-[12px] right-4">
              {oldPassword ? (
                <AiOutlineEyeInvisible
                  className="text-[#a0a0a0]"
                  size={20}
                  onClick={() => setPassword(!oldPassword)}
                />
              ) : (
                <AiOutlineEye
                  className="text-[#a0a0a0]"
                  size={20}
                  onClick={() => setPassword(!oldPassword)}
                />
              )}
            </span>
          </div>
        </div>
        <div className="w-[80%] flex flex-col gap-2 input-psw">
          <label htmlFor="">New Password</label>
          <div className="in-div relative">
            <input
              type={newPassword ? "text" : "password"}
              name="newPassword"
              id="newPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              className="h-[40px] w-[100%] rounded-md focus:outline-none focus:border-none px-2"
            />
            <span className="absolute top-[12px] right-4">
              {newPassword ? (
                <AiOutlineEyeInvisible
                  className="text-[#a0a0a0]"
                  size={20}
                  onClick={() => setNewPassword(!newPassword)}
                />
              ) : (
                <AiOutlineEye
                  className="text-[#a0a0a0]"
                  size={20}
                  onClick={() => setNewPassword(!newPassword)}
                />
              )}
            </span>
          </div>
        </div>
        <div className="w-[80%] flex flex-col gap-2 input-psw">
          <label htmlFor="">Confirm Password</label>
          <div className="in-div relative">
            <input
              type={conPassword ? "text" : "password"}
              name="conPassword"
              id="conPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              className="h-[40px] w-[100%] rounded-md focus:outline-none focus:border-none px-2"
            />
            <span className="absolute top-[12px] right-4">
              {conPassword ? (
                <AiOutlineEyeInvisible
                  className="text-[#a0a0a0]"
                  size={20}
                  onClick={() => setConPassword(!conPassword)}
                />
              ) : (
                <AiOutlineEye
                  className="text-[#a0a0a0]"
                  size={20}
                  onClick={() => setConPassword(!conPassword)}
                />
              )}
            </span>
          </div>
        </div>
        <button
          className="bg-slate-600 px-5 py-3 rounded-md text-white mt-4 btn-psw"
          type="submit "
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
