import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import OurTeam from "../pages/OurTeam";
import TimeTick from "../pages/TimeTick";
import Contact from "../pages/Contact";
import Corex from "../pages/Corex";
import Partners from "../pages/Partners";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/our-team",
        element: <OurTeam />,
      },
      {
        path: "/timetick",
        element: <TimeTick />,
      },
      {
        path:"/contact-us",
        element:<Contact/>
      },
      {
        path:"/CoreX-ERP",
        element:<Corex/>
      },
      {
        path:"/partners",
        element:<Partners/>
      }
    ],
  },
]);
