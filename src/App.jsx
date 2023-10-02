import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { Header, Footer } from "./Layout";
import { Home } from "./Pages";
import Activication from "./Pages/Activation/Activation";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import { useEffect } from "react";
import { useSelectionDataMutation } from "./slice/mutation/authApi";
import { setCarData } from "./slice/cardataSlice";
import CarRegistration from "./Pages/RegisterCar/CarRegistration";
import Admin from "./Pages/Dashboard/Admin/Admin_Dashboard";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
  const dispatch = useDispatch();
  const [getCarData] = useSelectionDataMutation();

  useEffect(() => {
    (async () => {
      const res = await getCarData().unwrap();
      await dispatch(setCarData(res.data));
      localStorage.setItem("car", JSON.stringify(res.data));
    })();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/car-registration",
          element: <CarRegistration />,
        },
      ],
    },
    {
      path: "/activation/:token",
      element: <Activication />,
    },
    {
      path: "/retrive-password/:token",
      element: <ResetPassword />,
    },
    {
      path: "/admin-dashboard",
      element: <Admin />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
