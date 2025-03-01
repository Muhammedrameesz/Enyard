import image1 from "../../assets/images/Our-Section-Image-One-pvk8bx8bb3n04r7rq5ppuws2hpvjla921872yxadva.webp";
import image2 from "../../assets/images/Our-Section-Image-Two-pvk8by65bcvbb4v8c996naxl27kzavruisabvc3a9o.webp";
import image4 from "../../assets/images/Our-Section-Image-Four-pvk8by65hxon51xgnu3o47k4xadwztzbkx20wmw9wi.webp";
import image3 from "../../assets/images/Our-Section-Image-Three-pvk8bwagxosc4xmpv7za92kcst529pgn7cohvdqfw6.webp";
import { motion } from "framer-motion";
import section3Bg from "../../assets/images/Section-Three-Background.webp";
import AnimHV from "../../ui/TextAnimation/AnimHV.jsx";
// import Anim from "../../ui/TextAnimation/Anim.jsx";

import {
  AiOutlineCalculator,
  AiOutlineCalendar,
  AiOutlineLaptop,
  AiOutlineBarChart,
} from "react-icons/ai";

export default function OurService() {
  const contentData = [
    {
      key: "1",
      title: "Accurate Payroll Processing -Automate Time Calculations",
    
      icon: <AiOutlineCalculator />,
      image: image1,
    },
    {
      key: "2",
      title: "Efficient Leave Management- Simplify & Streamline",
      
      icon: <AiOutlineCalendar />,
      image: image2,
    },
    {
      key: "3",
      title: "Remote Work Support-Advanced Features ",
    
      icon: <AiOutlineLaptop />,
      image: image3,
    },
    {
      key: "4",
      title: "Customized Reporting-Make Data Driven Decisions",
     
      icon: <AiOutlineBarChart />,
      image: image4,
    },
  ];

  return (
    <div className="relative pb-10 font-jakarta">
      <div
        className="absolute w-full h-full -z-10 object-cover"
        style={{ backgroundImage: `url(${section3Bg})` }}
      ></div>

      <AnimHV>
        <div className=" mx-auto flex flex-col justify-center mb-10 md:mb-16 items-center text-center text-3xl sm:text-4xl md:text-5xl  font-semibold text-gray-900 ">
          <p className="text-base text-red-500 mb-5">Our Exclusive Product</p>
          <h1 className="space-y-2">
            <span className="ml-2  ">
              Smarter Attendance,
            </span><br />
            <span className="ml-2 ">
              Seamless Workflows :
            </span><br />
            <span className="text-red-600"> Time Tick</span>
          </h1>
        </div>
      </AnimHV>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center text-center">
        {contentData.map((item, index) => (
          <AnimHV key={item.key} delay={index * 0.5}>
            <motion.div className="flex flex-col items-center min-h-[600px] p-6 border-r border-red-200 transform hover:-translate-y-2 transition-all duration-300">
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-10 md:mb-16">
                <div
                  className={`flex items-center justify-center bg-white rounded-full p-4 text-3xl 
              ${index == 0 && "text-green-400"} ${
                    index == 1 && "text-red-400"
                  } ${index == 2 && "text-yellow-400"} ${
                    index == 3 && "text-purple-400"
                  }
                `}
                >
                  {item.icon}
                </div>
                <h1 className="flex flex-col text-xl font-semibold  text-gray-800 text-start">
                  {item.title}{" "}
                 
                </h1>
              </div>

              {/* Image */}
              <motion.img
                src={item.image}
                alt={item.key}
                className="rounded-xl w-full  h-auto"
                whileHover={{ translateY: -10 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </AnimHV>
        ))}
      </section>
    </div>
  );
}
