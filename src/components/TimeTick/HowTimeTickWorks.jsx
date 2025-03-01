import { motion } from "framer-motion";
import Image from "../../assets/TimeTickImages/Group-32251-scaled-removebg-preview.png";
import Anim from "../../ui/TextAnimation/Anim.jsx"
import AnimRL from "../../ui/TextAnimation/AnimRL.jsx"

export default function HowTimeTickWorks() {
  return (
    <div className="font-jakarta py-20 lg:py-28 bg-[#191d27] text-white relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-6 md:px-16 mx-auto justify-center items-center relative z-10">
        <Anim>
        <section className="col-span-1 flex flex-col gap-5 justify-center relative">
          <p className="font-medium  tracking-wide z-10">
            How Time Tick Works
          </p>
          <h1 className="font-semibold text-3xl md:text-4xl leading-relaxed z-10 text-transparent bg-clip-text  bg-gradient-to-tr from-blue-500 via-purple-500 to-orange-500">
            How Does Time Tick Online Attendance System Work?
          </h1>

          {/* SVG Decorative Shape */}
          <svg
            className="absolute left-0 top-0  w-48 md:w-64 h-48 md:h-64 opacity-10"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="orangeGrayGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(255,165,0)", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(128,128,128)", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M100 0C155.22 0 200 44.78 200 100C200 155.22 155.22 200 100 200C44.78 200 0 155.22 0 100C0 44.78 44.78 0 100 0Z"
              fill="url(#orangeGrayGradient)"
            />
          </svg>

          {/* Moving Orange Circle */}
          <motion.div
            className="absolute left-[-10px] bottom-[-20px] w-3 h-3  bg-orange-500 rounded-full"
            animate={{ x: [0, 20, 0], y: [10, 20, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </section>
        </Anim>

       
        <section className="col-span-2 flex justify-center relative">
        <AnimRL >
          <img
            src={Image}
            alt="How Time Tick Works"
            className="w-full h-auto z-10"
          />
        </AnimRL>

        </section>
      </div>
    </div>
  );
}
