
import image1 from "../../assets/images/Our-Section-Image-One-pvk8bx8bb3n04r7rq5ppuws2hpvjla921872yxadva.webp";
import image2 from "../../assets/images/Our-Section-Image-Two-pvk8by65bcvbb4v8c996naxl27kzavruisabvc3a9o.webp";
import image4 from "../../assets/images/Our-Section-Image-Four-pvk8by65hxon51xgnu3o47k4xadwztzbkx20wmw9wi.webp";
import image3 from "../../assets/images/Our-Section-Image-Three-pvk8bwagxosc4xmpv7za92kcst529pgn7cohvdqfw6.webp";
import { motion } from "framer-motion";
import section3Bg from "../../assets/images/Section-Three-Background.webp";

import { MdInsertChartOutlined } from "react-icons/md";
import { MdOutlineDataThresholding } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";

export default function OurService() {
  const contentData = [
    {
      key: "analysis-marketing",
      title: "Analysis Product Marketing",
      description: "Integer luctus dolor.",
      icon: <MdInsertChartOutlined/>,
      image: image1,
    },
    {
      key: "creative-strategy",
      title: "Discover Creative Strategy",
      description: "Orci varius natoque.",
      icon: <MdOutlineDataThresholding/>,
      image: image2,
    },
    {
      key: "best-features",
      title: "Best Features Development",
      description: "Sed euismod non.",
      icon: <MdOutlineDescription />,
      image: image3,
    },
    {
      key: "solution-restore",
      title: "Solution & Restore Easily",
      description: "Fusce est sapien.",
      icon: <MdOutlineDesignServices />,
      image: image4,
    },
  ];

  return (
    <div className="relative pb-10 font-jakarta">
      <div
        className="absolute w-full h-full -z-10 object-cover"
        style={{ backgroundImage: `url(${section3Bg})` }}
      ></div>

      <div className="flex flex-col justify-center mb-10 md:mb-16 items-center text-center text-3xl sm:text-4xl md:text-5xl  font-semibold text-gray-900 ">
        <p className="text-base text-red-500 mb-5">Our Service</p>
        <h1>What We Can Do For Your </h1>
        <h1>
          <span className="border-b-4 border-red-300">Application</span>{" "}
          <span className="text-red-600">Design</span>
        </h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center text-center">
        {contentData.map((item, index) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className="flex flex-col items-center min-h-[600px] p-6 border-r border-red-200 transform hover:-translate-y-2 transition-all"
          >
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
                <span className="text-base font-jakarta font-normal text-gray-600 normal-case">
                  {item.description}
                </span>
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
        ))}
      </section>
    </div>
  );
}
