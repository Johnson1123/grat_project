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
      ],
    },
    {
      path: "/activation/:token",
      element: <Activication />,
    },
  ]);
  return (
    // <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    // </Provider>
  );
}

export default App;
