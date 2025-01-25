import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const AnimatedShapes = () => {
  return (
    <div className="  w-full h-full flex items-center justify-center">
      {/* Circle Motion */}
      <motion.div
        animate={{
          x: [0, 20, 40, 20, 0, -20, -40, -20, 0], // Circular motion on x
          y: [0, 20, 0, -20, -40, -20, 0, 20, 0], // Circular motion on y
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}
        className="absolute top-1/2  w-[16px] h-[16px] rounded-full bg-orange-500"
      ></motion.div>

      {/* Triangle Bouncing */}
      <motion.div
        animate={{
          y: [0, -30, 0, 30, 0], 
          rotateY:[0,180,0]
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="absolute w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-green-500"
        style={{ top: "50%", left: "60%" }}
      ></motion.div>

      {/* Star Zig-Zag */}
      <motion.div
        animate={{
          x: [0, 20, 40, 60, 40, 20, 0, -20, -40, -60, -40, -20, 0], // Zig-zag motion on x
          y: [0, -20, -40, -60, -40, -20, 0, 20, 40, 60, 40, 20, 0], // Zig-zag motion on y
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute text-yellow-500"
        style={{ top: "70%", left: "40%" }}
      >
        <FaStar size={20} />
      </motion.div>
    </div>
  );
};

export default AnimatedShapes;
