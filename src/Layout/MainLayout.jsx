import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import ScrollToTop from "../components/ScrolltoTp"

export default function MainLayout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      {isVisible && (
        <button
          className="z-50 bottom-5 bg-white right-5 fixed text-gray-600 rounded-full p-2 shadow-lg 
          hover:shadow-custom transform hover:-translate-y-1 transition-all duration-500 flex items-center justify-center"
          onClick={scrollToTop}
        >
          <IoIosArrowUp size={20} />
        </button>
      )}
      <Outlet />
      <Footer />
    </div>
  );
}
