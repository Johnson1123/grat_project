import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseurl } from "../../baseurl";

export default function Activication() {
  const { token } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(`${baseurl}/login-page`, { token });
        console.log(res);
        navigate("/");
      } catch (error) {
        console.log(error.data);
      }
    })();
  }, []);

  return <div>Activication</div>;
}
