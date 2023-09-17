import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigation = useNavigate();
  const user = useSelector((state) => state?.auth?.userData?.data?.user);
  useEffect(() => {
    if (!user) {
      return navigation("/");
    }
  }, []);

  return <div>{children}</div>;
}

export default ProtectedRoute;
