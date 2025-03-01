import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function AnimatedButton({ text }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="mt-0">
      <motion.button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="bg-black border border-black flex items-center gap-2 text-white font-medium text-lg px-6 py-2 rounded-full relative 
                    overflow-hidden transition-colors duration-300"
      >
        {/* Background  */}
        <motion.div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 bg-white  rounded-full`}
          initial={{ height: 0 }}
          animate={
            hover
              ? { height: "100%", width: "100%" }
              : { height: 0, width: "80%" }
          }
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        <motion.span
          className="relative z-10 inline-block"
          initial={{ color: "#ffffff" }}
          animate={hover ? { color: "#000000" } : { color: "#ffffff" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <FaLongArrowAltRight />
        </motion.span>
        <motion.span
          className="relative z-10"
          initial={{ color: "#ffffff" }}
          animate={hover ? { color: "#000000" } : { color: "#ffffff" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {text ? text : "Add Text"}
        </motion.span>
        {/* Arrow */}
      </motion.button>
    </div>
  );
}

AnimatedButton.propTypes = {
  text: PropTypes.string.isRequired,
};
