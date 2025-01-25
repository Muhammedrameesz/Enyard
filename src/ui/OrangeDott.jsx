import { motion } from "framer-motion"


export default function OrangeDott() {
  return (
    <motion.div className="absolute top-20 left-1/2 transform -translate-x-1/2">
    <motion.div
      animate={{
        x: [0, 10, 20, 10, 0, -10, -20, -10, 0], // Circular x-coordinates
        y: [0, 10, 0, -10, -20, -10, 0, 10, 0], // Circular y-coordinates
      }}
      transition={{
        repeat: Infinity, // Infinite loop
        duration: 10, // Duration for one full rotation
        ease: "linear", // Smooth and constant speed
      }}
      className="w-[12px] h-[12px] rounded-full bg-orange-500"
    ></motion.div>
  </motion.div>
  
  
  )
}
