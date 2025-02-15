import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { navLinks, dropdownLinks } from "./navlinks.jsx";
import EnyardLogo from "../assets/images/Enyard new.png";


export default function ResponsiveNav() {
  const [hoverLink, setHoverLink] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = ()=>{
    setDrawerOpen(false)
    navigate("/contact-us")
  }

  return (
    <>
      <div className="absolute top-2 right-4 p-4 font-jakarta text-gray-950">
        <button onClick={() => setDrawerOpen(true)} className="cursor-pointer">
          <MdMenu size={30} />
        </button>
      </div>

      {/* Overlay and Drawer Side */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Close when clicking outside */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setDrawerOpen(false)}
            ></div>

            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg z-50 p-6 overflow-y-auto"
              style={{ zIndex: 1000 }}
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-6">
                <img  onClick={()=>navigate("/")} src={EnyardLogo} alt="" className="w-32" />
                <button onClick={() => setDrawerOpen(false)}>
                  <MdClose size={30} />
                </button>
              </div>

              {/* Navigation Links */}
              <ul className="space-y-6">
                {navLinks.map((item, index) => (
                  <li key={index} className="border-b">
                    <Link
                      to={item.path}
                      className="flex justify-between  items-center cursor-pointer text-lg font-medium "
                      onClick={() => {
                        setHoverLink(
                          hoverLink === item.element ? "" : item.element
                        );
                        setDrawerOpen(item.hasDropdown ? true : false);
                      }}
                    >
                      {item.element}
                      {item.hasDropdown && <MdKeyboardArrowDown />}
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {item.hasDropdown && hoverLink === item.element && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 bg-white rounded-lg p-2 space-y-2"
                        >
                          {dropdownLinks
                            .filter(
                              (dropdownItem) =>
                                dropdownItem.ref === item.element
                            )
                            .map((dropdownItem, dropdownIndex) => (
                              <Link
                                to={dropdownItem.path}
                                key={dropdownIndex}
                                className="p-2 flex items-center gap-3 hover:bg-gray-200 rounded transition text-lg text-gray-800 font-medium"
                                onClick={() => setDrawerOpen(false)}
                              >
                                {dropdownItem.icon}
                                {dropdownItem.element}
                              </Link>
                            ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ))}

                {/* Buttons */}
                <li>
                  <button
                    onClick={handleClick}
                    className="border w-full p-3 rounded-full border-gray-900 text-lg hover:bg-black hover:text-white transition"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center justify-center gap-2 border p-3 rounded-full bg-black text-white hover:bg-red-600 transition">
                    Book A Demo
                  </button>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
