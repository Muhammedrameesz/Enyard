import { navLinks, dropdownLinks } from "./navlinks.jsx";
import EnyardLogo from "../assets/images/Enyard new.png";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdArrowRightAlt } from "react-icons/md";

export default function Navbar() {
  const [hoverLink, setHoverLink] = useState("");
  return (
    <div style={{zIndex:1000}} className="p-3 py-5 font-mono  bg-white fixed w-full">
      <section className="flex items-center justify-around gap-4  ">
        <img
          src={EnyardLogo}
          alt="Enyard Logo"
          className="w-[130px] sm:w-[150px] md:w-[170px] h-full object-cover cursor-pointer"
        />
        <ul className="relative flex gap-8 border p-2 px-4 rounded-full border-gray-900">
          {navLinks?.map((item, index) => (
            <li
              key={index}
              className="relative text-center text-lg flex items-center gap-1"
              onMouseEnter={() => setHoverLink(item.element)}
              onMouseLeave={() => setHoverLink("")}
            >
              <Link className="flex items-center gap-1">
                <span>{item.element}</span>
                {item.hasDropdown && <MdKeyboardArrowDown />}
              </Link>

              {/* Transerant bg */}
              {item.hasDropdown && (
                <>
                  <div className="absolute left-0 right-0 top-6 bg-transparent h-6 " />
                  <div className="absolute left-1/2 right-1/2 h-6 w-10 -translate-x-1/2 -translate-y-1/2 bg-transparent z-10 top-12 " />
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
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="absolute  flex w-auto bg-white  p-4 top-full mt-3  left-1/2 transform -translate-x-1/2 gap-5 overflow-hidden z-50"
                    >
                        <span className="absolute bottom-0 left-0 w-1 bg-black h-[90%]"></span>
                        <span className="absolute left-0 bottom-0 w-[50%] h-1 bg-black"></span>
                      {dropdownLinks
                        .filter(
                          (dropdownItem) => dropdownItem.ref === hoverLink
                        )
                        .map((dropdownItem, dropdownIndex) => (
                          <>
                            <Link
                              key={dropdownIndex}
                              className="block min-w-[170px] p-5 bg-white shadow-lg hover:bg-gray-100 border  rounded-3xl hover: group transition-colors duration-500 "
                            >
                             
                              <h1 className="border-b p-2 flex justify-center items-center gap-2 mb-4 border-spacing-0 text-black transition-colors duration-500">
                                <span className="text-xl">{dropdownItem.icon ? dropdownItem.icon : null}</span>
                                <span>{dropdownItem.element}</span>
                              </h1>

                              <p className="text-sm font-sans text-gray-700 transition-colors duration-500">
                                {dropdownItem.des ? dropdownItem.des : null}
                              </p>
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

        <div className="flex">
          <button className="border p-2 px-4 rounded-full ml-4 border-gray-900 text-lg hover:bg-black hover:text-white transition-colors duration-300">
            Contact
          </button>
          <button className="flex justify-center items-center gap-2 border p-2 px-4 rounded-full ml-4 bg-black text-white border-gray-900 text-lg hover:bg-red-600 hover:border-red-600 transition-colors duration-300">
           <span><MdArrowRightAlt/></span> Book A Demo
          </button>
        </div>
      </section>
    </div>
  );
}
