import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    element: <MainLayout />, 
    children: [
      {
        path: "/",
        element: <Home /> 
      }
    ]
  }
]);
