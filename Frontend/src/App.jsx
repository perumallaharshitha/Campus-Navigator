import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from "./assets/components/RootLayout";
import Home from "./assets/components/home/Home";
import Register from "./assets/components/register/Register";
import Login from "./assets/components/login/Login";
import AboutUs from "./assets/components/aboutus/AboutUs";
import CampusMap from "./assets/components/campusmap/CampusMap.jsx";
import CSE from "./assets/components/tests/cse/cse"; 
import IT from "./assets/components/tests/it/IT";
import CSM from "./assets/components/tests/csm/CSM";
import CSD from "./assets/components/tests/csd/CSD";
import EEE from "./assets/components/tests/eee/EEE";
import ECE from "./assets/components/tests/ece/ECE";
import MECH from "./assets/components/tests/me/ME";
import CIVIL from "./assets/components/tests/civil/CIVIL";
import FED from "./assets/components/tests/fed/FED.jsx";
import MBA from "./assets/components/tests/mba/MBA";
import CSEMAP from "./assets/components/tests2/csemap/CSEMap.jsx";
import CSMMAP from "./assets/components/tests2/csmmap/CSMMap.jsx";
import CSDMAP from "./assets/components/tests2/csdmap/CSDMap.jsx";
import ECEMAP from "./assets/components/tests2/ecemap/ECEMap.jsx";
import EEEMAP from "./assets/components/tests2/eeemap/EEEMap.jsx";
import ITMAP from "./assets/components/tests2/itmap/ITMap.jsx";
import MECHMAP from "./assets/components/tests2/mechmap/MECHMap.jsx";
import CIVILMAP from "./assets/components/tests2/civilmap/CIVILMap.jsx";
import FEDMAP from "./assets/components/tests2/fedmap/FEDMap.jsx";
import MBAMAP from "./assets/components/tests2/mbamap/MBAMap.jsx";
import DepartmentDetails from "./assets/components/departmentdetails/DepartmentDetails.jsx";

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
          path:"departments",
          element:<DepartmentDetails/>
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
        {
          path:"cse-map",
          element:<CSEMAP/>
        },
        {
          path:"it-map",
          element:<ITMAP/>
        },
        {
          path:"csd-map",
          element:<CSDMAP/>
        },
        {
          path:"csm-map",
          element:<CSMMAP/>
        },
        {
          path:"eee-map",
          element:<EEEMAP/>
        },
        {
          path:"ece-map",
          element:<ECEMAP/>
        },
        {
          path:"civil-map",
          element:<CIVILMAP/>
        },
        {
          path:"mech-map",
          element:<MECHMAP/>
        },
        {
          path:"fed-map",
          element:<FEDMAP/>
        },
        {
          path:"mba-map",
          element:<MBAMAP/>
        },
        
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