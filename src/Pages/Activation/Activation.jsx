import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseurl } from "../../baseurl";
import { useActivationMutation } from "../../slice/mutation/authApi";
import { setUserData } from "../../slice/authSlice";
import { useDispatch } from "react-redux";

export default function Activication() {
  const { token } = useParams();
  const navigate = useNavigate();
  let payload = token;
  const [activation, { isloading, errors }] = useActivationMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        // const res = await axios.post(`${baseurl}/activation`, { payload });
        const res = await activation({ payload }).unwrap();
        setUserData(res);
        navigate("/");
      } catch (error) {
        console.log(error.data);
      }
    })();
  }, []);

  return <div>Activication</div>;
}
