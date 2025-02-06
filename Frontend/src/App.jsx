import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from "./assets/components/RootLayout";
import Home from "./assets/components/home/Home";
import Register from "./assets/components/register/Register";
import Login from "./assets/components/login/Login";
import AboutUs from "./assets/components/aboutus/AboutUs";
import CampusMap from "./assets/components/campusmap/campusMap";
import CSE from "./assets/components/tests/cse/cse"; 
import IT from "./assets/components/tests/it/IT";
import CSM from "./assets/components/tests/csm/CSM";
import CSD from "./assets/components/tests/csd/CSD";
import EEE from "./assets/components/tests/eee/EEE";
import ECE from "./assets/components/tests/ece/ECE";
import MECH from "./assets/components/tests/me/ME";
import CIVIL from "./assets/components/tests/civil/CIVIL";
import FED from "./assets/components/tests/fed/fed";
import MBA from "./assets/components/tests/mba/MBA";


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
          path:"cse",
          element:<CSE/>
        },
        {
          path:"it",
          element:<IT/>
        },
        {
          path:"csd",
          element:<CSD/>
        },
        {
          path:"csm",
          element:<CSM/>
        },
        {
          path:"eee",
          element:<EEE/>
        },
        {
          path:"ece",
          element:<ECE/>
        },
        {
          path:"civil",
          element:<CIVIL/>
        },
        {
          path:"mech",
          element:<MECH/>
        },
        {
          path:"fed",
          element:<FED/>
        },
        {
          path:"mba",
          element:<MBA/>
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
          path: "campus-map",
          element: <CampusMap />,
        },
        // {
        //   path: "test",
        //   element: <CSE />,
        // },
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