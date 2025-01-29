import { motion } from "framer-motion";
import image1 from "../../assets/Team/Albert-P.-Lachance.webp";
import image2 from "../../assets/Team/Diane-R.-Miller.webp";
import image3 from "../../assets/Team/Ralph-H.-Harvey.webp";
import image4 from "../../assets/Team/Roger-A.-Greene.webp";
import { useState } from "react";

export default function OurTeam() {
  const contents = [
    {
      name: "Albert P. Lachance",
      image: image1,
      designation: "President and CEO",
    },
    {
      name: "Diane R. Miller",
      image: image2,
      designation: "Chief Financial Officer",
    },
    {
      name: "Ralph H. Harvey",
      image: image3,
      designation: "Chief Information Officer",
    },
    {
      name: "Roger A. Greene",
      image: image4,
      designation: "Chief Operating Officer",
    },
  ];
  const [textHover, setTextHover] = useState(null);

  return (
    <div className="font-jakarta py-16 pb-24 bg-white">
      <div className="flex flex-col gap-4 justify-center items-center text-center mb-10 leading-relaxed">
        <h1 className="text-red-700 font-medium">Our Team</h1>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 max-w-md">
          Meet Our Talented Team Members
        </h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-10">
        {contents.map((item, i) => (
          <div
          className="relative "
            key={i}
            onMouseEnter={() => setTextHover(i)}
            onMouseLeave={() => setTextHover(null)}
          >
            <img src={item.image} alt="image" className="mx-auto" />
            <h1 className="font-medium text-lg mt-5 ml-10 md:ml-0">{item.name}</h1>
            <motion.p
              className="text-gray-600 font-medium  absolute left-10 md:left-0 -bottom-6"
              initial={{ opacity: 1, y: 0 }}
              animate={{
                opacity: textHover === i ? 0 : 1,
                y: textHover === i ? -30 : 0,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {item.designation}
            </motion.p>
            <motion.p
              className="text-gray-600 font-medium absolute left-0 -bottom-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: textHover === i ? 1 : 0,
                y: textHover === i ? 0 : 30,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {item.designation}
            </motion.p>
          </div>
        ))}
      </section>
    </div>
  );
}
