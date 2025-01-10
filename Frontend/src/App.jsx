
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from "./assets/components/RootLayout";
import Home from "./assets/components/home/Home";
import Register from "./assets/components/register/Register";
import Login from "./assets/components/login/Login";
import AboutUs from "./assets/components/aboutus/AboutUs";
import CampusMap from "./assets/components/campusmap/campusMap";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "about",
          element: <AboutUs />,
        },
        {
          path:"campus-map",
          element:<CampusMap/>
        }
      ],
    },
  ]);

  return (
    <div className="main">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;