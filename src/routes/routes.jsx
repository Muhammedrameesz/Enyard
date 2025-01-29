import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import OurTeam from "../pages/OurTeam";

export const router = createBrowserRouter([
  {
    element: <MainLayout />, 
    children: [
      {
        path: "/",
        element: <Home/> 
      },
      {
        path: "/about-us",
        element: <About/> 
      },{
        path:"/our-team",
        element:<OurTeam/>
      }
    ]
  }
]);
