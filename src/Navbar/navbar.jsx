import { navLinks, dropdownLinks } from "./navlinks.jsx";
import EnyardLogo from "../assets/images/Enyard new.png";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdArrowRightAlt } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import ResponsiveNav from "./ResponsiveNav.jsx";


export default function Navbar() {
  const [hoverLink, setHoverLink] = useState("");
  const [secondNavView, setSecondNavView] = useState(false);
  const navigate =useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 170) {
        setSecondNavView(true);
      } else {
        setSecondNavView(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {secondNavView && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }} 
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{ zIndex: 1000 }}
            className="p-3 py-5 font-lanze bg-white shadow-normal fixed w-screen"
          >
            <section className="flex items-center justify-around gap-4">
              <img
                src={EnyardLogo}
                alt="Enyard Logo"
                className="w-[130px] sm:w-[150px] md:w-[170px] h-full object-cover cursor-pointer"
              />
              <ul className="hidden relative lg:flex gap-8 border p-2 px-4 rounded-full border-gray-900">
                {navLinks?.map((item, index) => (
                  <li
                    key={index}
                    className="relative text-center text-lg flex items-center gap-1"
                    onMouseEnter={() => setHoverLink(item.element)}
                    onMouseLeave={() => setHoverLink("")}
                  >
                    <Link
                    to={item.hasDropdown ? "#" :item.path}
                      className={`flex items-center gap-1 ${
                        item.hasDropdown && "cursor-text"
                      }`}
                    >
                      <span>{item.element}</span>
                      {item.hasDropdown && (
                        <MdKeyboardArrowDown
                          className={`text-gray-700 transition-transform duration-300 ${
                            hoverLink === item.element &&
                            "transform translate-y-1"
                          } `}
                        />
                      )}
                    </Link>

                    {/* Transparent bg */}
                    {item.hasDropdown && hoverLink === item.element && (
                      <>
                        <div className="absolute left-0 right-0 top-6 bg-transparent h-6 " />
                        <div className="absolute left-1/2 right-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 bg-transparent z-50 top-12 rotate-45 " />
                      </>
                    )}

                    {/* Dropdown Menu */}
                    {item.hasDropdown && (
                      <AnimatePresence>
                        {hoverLink === item.element && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }} // Smoothly hide the dropdown
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute flex flex-col min-w-[300px] bg-white rounded-2xl shadow-decent p-7 top-full mt-3 left-0 transform gap-2 overflow-hidden z-50"
                          >
                            {dropdownLinks
                              .filter(
                                (dropdownItem) => dropdownItem.ref === hoverLink
                              )
                              .map((dropdownItem, dropdownIndex) => (
                                <Link
                                  to={dropdownItem.path}
                                  onClick={() => setHoverLink("")}
                                  key={dropdownIndex}
                                  className="group flex items-center gap-5 p-2 group transition-colors duration-500"
                                >
                                  <h1
                                    className={`text-white rounded-full p-3 transition-colors duration-500 text-2xl 
                                ${dropdownIndex === 0 && " bg-green-400"} ${
                                      dropdownIndex === 1 && " bg-blue-400"
                                    } ${dropdownIndex === 2 && " bg-black"}
                               `}
                                  >
                                    {dropdownItem.icon
                                      ? dropdownItem.icon
                                      : null}
                                  </h1>
                                  <div>
                                    <h1 className="text-start flex items-center gap-0 mb-1">
                                      <span>{dropdownItem.element}</span>
                                      <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-gray-900">
                                        <MdKeyboardArrowRight />
                                      </span>
                                    </h1>
                                    <p className="text-sm font-sans text-start text-gray-500 transition-colors duration-500">
                                      {dropdownItem.des
                                        ? dropdownItem.des
                                        : null}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                ))}
              </ul>

              <div className="hidden lg:flex">
                <button
                onClick={()=>navigate("/contact-us")} 
                className="border p-2 px-4 rounded-full ml-4 border-gray-900 text-lg hover:bg-black hover:text-white transition-colors duration-300">
                  Contact
                </button>
                <button className="flex justify-center items-center gap-2 border p-2 px-4 rounded-full ml-4 bg-black text-white border-gray-900 text-lg hover:bg-red-600 hover:border-red-600 transition-colors duration-300">
                  <span>
                    <MdArrowRightAlt />
                  </span>{" "}
                  Book A Demo
                </button>
              </div>
              
              <div className="block lg:hidden">
           <ResponsiveNav/>
          </div>
            </section>
          </motion.div>
        </AnimatePresence>
      )}
      
     {/* 2nd Section  */}
      <div
        style={{ zIndex: 1000 }}
        className={`p-3 py-5 font-lanze  bg-transparent  w-full`}
      >
        <section className="flex items-center justify-around gap-4  ">
          <img
            src={EnyardLogo}
            alt="Enyard Logo"
            className="w-[130px] sm:w-[150px] md:w-[170px] h-full object-cover cursor-pointer"
          />
          <ul className="relative hidden lg:flex gap-8 border p-2 px-4 rounded-full border-gray-900">
            {navLinks?.map((item, index) => (
              <li
                key={index}
                className="relative text-center text-lg flex items-center gap-1"
                onMouseEnter={() => setHoverLink(item.element)}
                onMouseLeave={() => setHoverLink("")}
              >
                <Link
                  to={item.hasDropdown ? "#" :item.path}
                  className={`flex items-center gap-1 ${
                    item.hasDropdown && "cursor-text"
                  }`}
                >
                  <span>{item.element}</span>
                  {item.hasDropdown && (
                    <MdKeyboardArrowDown
                      className={`text-gray-700 transition-transform duration-300${
                        hoverLink === item.element && "transform translate-y-1 "
                      } `}
                    />
                  )}
                </Link>

                {/* Transerant bg */}
                {item.hasDropdown && hoverLink === item.element && (
                  <>
                    <div className="absolute left-0 right-0 top-6 bg-transparent h-6 " />
                    <div className="absolute left-1/2 right-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 bg-transparent  z-50 top-12 rotate-45 " />
                  </>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {hoverLink === item.element && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute  flex flex-col min-w-[300px] bg-white rounded-2xl shadow-decent p-7 top-full mt-3  left-0 transform  gap-2 overflow-hidden z-50"
                      >
                        {dropdownLinks
                          .filter(
                            (dropdownItem) => dropdownItem.ref === hoverLink
                          )
                          .map((dropdownItem, dropdownIndex) => (
                            <>
                              <Link
                                onClick={() => setHoverLink("")}
                                to={dropdownItem.path}
                                key={dropdownIndex}
                                className="group flex items-center gap-5 p-2 group transition-colors duration-500 "
                              >
                                <h1
                                  className={`text-white rounded-full p-3 transition-colors duration-500 text-2xl 
                               ${dropdownIndex === 0 && " bg-green-400"} ${
                                    dropdownIndex === 1 && " bg-blue-400"
                                  } ${dropdownIndex === 2 && " bg-black"}
                              `}
                                >
                                  {dropdownItem.icon ? dropdownItem.icon : null}
                                </h1>
                                <div>
                                  <h1 className="text-start flex items-center gap-0 mb-1">
                                    <span>{dropdownItem.element}</span>
                                    <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-gray-900">
                                      <MdKeyboardArrowRight />
                                    </span>
                                  </h1>
                                  <p className="text-sm font-sans text-start text-gray-500 transition-colors duration-500">
                                    {dropdownItem.des ? dropdownItem.des : null}
                                  </p>
                                </div>
                              </Link>
                            </>
                          ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex">
            <button 
             onClick={()=>navigate("/contact-us")}
             className="border p-2 px-4 rounded-full ml-4 border-gray-900 text-lg hover:bg-black hover:text-white transition-colors duration-300">
              Contact
            </button>
            <button className="flex justify-center items-center gap-2 border p-2 px-4 rounded-full ml-4 bg-black text-white border-gray-900 text-lg hover:bg-red-600 hover:border-red-600 transition-colors duration-300">
              <span>
                <MdArrowRightAlt />
              </span>{" "}
              Book A Demo
            </button>
          </div>
          <div className="block lg:hidden">
           <ResponsiveNav/>
          </div>
        </section>
      </div>
    </>
  );
}
