import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header, Footer } from "./Layout";
import { Home } from "./Pages";
import Activication from "./Pages/Activation/Activation";

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/property-page",
        //   element: <PropertyPage />,
        // },
      ],
    },
    {
      path: "/activation/:token",
      element: <Activication />,
    },

    // {
    //   path: "/dashboard",
    //   element: <Dashboard />,
    // },
    // {
    //   path: "/activation/:token",
    //   element: <Activation />,
    // },
    // {
    //   path: "/add-property",
    //   element: <Property />,
    // },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    // {
    //   path: "/retrieve-password",
    //   element: <RetrievPassword />,
    // },
    // {
    //   path: "/change-password",
    //   element: <ChangePassword />,
    // },
  ]);
  return (
    // <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    // </Provider>
  );
}

export default App;
