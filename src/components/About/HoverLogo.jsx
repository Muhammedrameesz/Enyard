import { motion } from "framer-motion";
import EnyardLogo from "../../assets/images/Enyard new.png";
import { useState } from "react";

export default function HoverLogo() {
  const logoContents = [
    { logo: EnyardLogo, hoverLogo: EnyardLogo },
    { logo: EnyardLogo, hoverLogo: EnyardLogo },
    { logo: EnyardLogo, hoverLogo: EnyardLogo },
    { logo: EnyardLogo, hoverLogo: EnyardLogo },
    { logo: EnyardLogo, hoverLogo: EnyardLogo },
  ];

  const [logoHover, setLogoHover] = useState(null);

  return (
    <div className="py-16 bg-white flex justify-center items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-center gap-6 md:gap-8 flex-wrap">
        {logoContents.map((item, index) => (
          <div
            key={index}
            className="relative w-40 h-12 flex justify-center items-center"
            onMouseEnter={() => setLogoHover(index)}
            onMouseLeave={() => setLogoHover(null)}
          >
            {/* Normal Logo */}
            <motion.img
              src={item.logo}
              alt="Enyard Logo"
              className="absolute w-36"
              initial={{ opacity: 1, y: 0 }}
              animate={{
                opacity: logoHover === index ? 0 : 1,
                y: logoHover === index ? 30 : 0,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />

            {/* Hover Logo */}
            <motion.img
              src={item.hoverLogo}
              alt="Enyard Hover Logo"
              className="absolute w-36"
              initial={{ opacity: 0, y: -30 }}
              animate={{
                opacity: logoHover === index ? 1 : 0,
                y: logoHover === index ? 0 : -30,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
