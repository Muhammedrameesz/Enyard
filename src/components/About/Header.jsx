import ActiveUserImage from "../../assets/AboutImages/Active-user.webp";
import { MdKeyboardArrowRight } from "react-icons/md";
import VectorImage from "../../assets/AboutImages/Vector-628.png";
import EnyardLogo from "../../assets/images/Enyard new.png";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [logoHover, setLogoHover] = useState("");
  return (
    <div className=" pt-16 pb-20 font-jakarta ">
      <div
        className="absolute inset-0 bg-no-repeat bg-center -z-10 bg-cover bg-[#e6f8ff]"
        style={{ minHeight: "130vh", width: "100%" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-10">
        {/* Text Section */}
        <section className="flex flex-col gap-8 text-center md:text-left">
          <h1 className="text-red-500 text-base font-semibold">
            About Our Company
          </h1>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-loose">
            Lorem Ipsum Dolor Sit Amet,
            <span className="relative inline-block">
              Consectetur
              <svg
                className="absolute left-0 -bottom-2 w-full h-[15px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,4 C10,0 30,8 40,4 C50,0 70,8 80,4 C90,0 100,8 110,4"
                  stroke="#e26b77"
                  fill="none"
                  strokeWidth="2"
                />
              </svg>
            </span>
            Adipisicing Elit.
          </div>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet <span>consectetur</span> adipisicing
            elit. Possimus voluptate dolore optio obcaecati quaerat sit ipsam
            quisquam eum quas.
          </p>
          <div>
            <button className="text-lg group font-semibold border border-black py-3 px-8 rounded-full transition-colors duration-300 bg-black text-white">
              Learn More
              <MdKeyboardArrowRight className="transform group-hover:translate-x-1 transition-transform duration-500 inline-block ml-2" />
            </button>
          </div>
        </section>

        {/* Image Section */}
        <section className="flex justify-center relative ">
          <img
            src={VectorImage}
            alt=""
            className="hidden md:block absolute -top-5 -left-24 w-[170px] h-[220px] "
          />
          <img
            src={ActiveUserImage}
            alt="mobile"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </section>
      </div>

      <div className="flex justify-center gap-8 mt-10 md:mt-20">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index}>
            <motion.img
              initial={{ opacity: 1, y: 0 }}
              animate={{
                y: logoHover === index ? [0, 15, -15, 0] : [0, -15, 15, 0], 
                opacity: logoHover === index ? [1,  0, 0, 1] : [0,  0, 0, 1],
              }}
              transition={{
                duration: 0.6, // Adjust duration for smoothness
                ease: "easeInOut",
              }}
              onMouseEnter={() => setLogoHover(index)}
              onMouseLeave={() => setLogoHover(null)}
              src={EnyardLogo}
              alt="Enyard Logo"
              className="w-32"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
