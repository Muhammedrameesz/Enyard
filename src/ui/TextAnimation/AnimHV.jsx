import React from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SmoothScale = ({ children, delay = 0.2, threshold = 0.2 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const animationVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        // type: "spring",
        // stiffness: 100,
        // damping: 15,
        duration: 1,
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};

// PropTypes validation
SmoothScale.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  threshold: PropTypes.number,
};

export default SmoothScale;
