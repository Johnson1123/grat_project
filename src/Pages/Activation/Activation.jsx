import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseurl } from "../../baseurl";

export default function Activication() {
  const { token } = useParams();
  const navigate = useNavigate();
  let payload = token;
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(`${baseurl}/activation`, { payload });
        navigate("/");
      } catch (error) {
        console.log(error.data);
      }
    })();
  }, []);

  return <div>Activication</div>;
}
