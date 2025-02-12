import { FaUserCircle } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";



export const navLinks = [
  { path: "/", element: "Home" },
  { path: "", element: "Company", hasDropdown: true },
  { path: "/time-tick", element: "Time Tick" },
  { path: "/CoreX-ERP", element: "CoreX Business Suite" },
  { path: "", element: "Resources", hasDropdown: true },
];

export const dropdownLinks = [
  {
    path: "/about-us",
    element: "About Us",
    ref: "Company",
    icon:<FaUserCircle/>,
    des:"Lorem ipsum dolor sit amet consectetur. "
  },
  
  {
    path: "/our-team",
    element: "Our Team",
    ref: "Company",
     des:"Lorem ipsum dolor sit amet consectetur.",
     icon:<FaUserFriends/>
  },
  {
    path: "/partners",
    element: "Partners",
    ref: "Company",
     des:"Lorem ipsum dolor sit amet consectetur.",
     icon:<FaRegHandshake/>
  },

  {
    path: "/blog",
    element: "Blog",
    ref: "Resources",
     des:"Lorem ipsum dolor sit amet consectetur.",
     icon:<FaBlog/>
  },
  {
    path: "/career",
    element: "Career",
    ref: "Resources",
     des:"Lorem ipsum dolor sit amet consectetur.",
     icon:<FaChartLine/>
  },
];
