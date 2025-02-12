import imageMain from "../../assets/TimeTickImages/Group-69-768x476.png";
import image2 from "../../assets/TimeTickImages/02.jpg";
import { motion } from "framer-motion";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineAccessTime } from "react-icons/md";

export default function Header() {
  return (
    <div className="pt-10 pb-10 font-jakarta ">
      <div className="absolute w-full inset-0 bg-no-repeat bg-center -z-10 bg-cover bg-gradient-to-br from-red-50 via-white to-white" />

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-10">
        {/* Text Section */}
        <section className="flex flex-col gap-8 justify-center   text-center md:text-left">
          <motion.p 
           initial={{x:0}}
           animate={{x:[0,10]}}
           transition={{
            type:'spring',
            duration:0.5,
            repeat:Infinity,
            repeatType:'reverse',
           }}
          className="text-base flex items-center gap-2 text-red-600 font-medium leading-relaxed ">
            <span><MdOutlineAccessTime/></span>Time Tick
          </motion.p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-7 ">
            Time To
            <span className="ml-1 text-transparent bg-clip-text bg-gradient-to-bl from-blue-500 via-purple-500 to-red-500 ">
              Track
            </span>{" "}
            Your Workforce Smooth and Error-free
          </h1>
          <p className="text-base text-gray-600 font-medium leading-relaxed ">
            Discover the heartbeat of your business with TimeTick – Time &
            Attendance Management software. We offer a full range of platforms
            for improving operational efficiency and sustainability. Monitor
            records of daily employees showing up to avoid disruption of
            business activities besides enhancing productivity.
          </p>


          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            {/* 1st column */}
            <div className="flex flex-col gap-7">
              <h1 className="flex  gap-2">
                <span className="text-2xl text-green-500">
                  <IoIosCheckmarkCircleOutline />
                </span>
                <span className="text-base font-semibold">
                  Facilitate The Time and Attendance
                </span>
              </h1>

              <h1 className="flex  gap-2">
                <span className="text-2xl text-green-500">
                  <IoIosCheckmarkCircleOutline />
                </span>
                <span className="text-base font-semibold">
                  Corroborate HR Regulatory Compliance
                </span>
              </h1>
            </div>

            {/* second column */}
            <div className="flex flex-col gap-7">
              <h1 className="flex  gap-2">
                <span className="text-2xl text-green-500">
                  <IoIosCheckmarkCircleOutline />
                </span>
                <span className="text-base font-semibold">
                  Smooth-Running Complex Workforce Scheduling
                </span>
              </h1>

              <h1 className="flex  gap-2">
                <span className="text-2xl text-green-500">
                  <IoIosCheckmarkCircleOutline />
                </span>
                <span className="text-base font-semibold">
                  Superintend Working Shift
                </span>
              </h1>
            </div>
          </section>

          
        </section>

        {/* Image Section */}
        <section className="flex justify-center relative p-5 md:py-16">
          <img
            src={imageMain}
            alt="mobile"
            className="w-full  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transform hover:-translate-y-2 transition-transform duration-500 ease-in-out"
          />
          {/* ABSOLUTE */}
          <img
            src={image2}
            alt=""
            className="hidden lg:block absolute w-[200px] h-[300px] -left-5 top-0 transform "
          />
        </section>
      </div>
    </div>
  );
}
