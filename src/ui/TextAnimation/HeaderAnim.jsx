import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function HeaderAnim({ text = "", highlightWords = [], color = "text-gray-900" }) {
  return (
    <div className="max-w-3xl text-center">
      {text.split(" ").map((word, i) => (
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: i * 0.1, // Faster, smoother stagger effect
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          key={i}
          className={`inline-block font-semibold leading-snug max-w-3xl text-5xl md:text-6xl 
            ${highlightWords.includes(word) ? "text-red-500" : color}`}
        >
          {word}&nbsp;
        </motion.h1>
      ))}
    </div>
  );
}

// ✅ PropTypes Validation
HeaderAnim.propTypes = {
  text: PropTypes.string.isRequired, 
  highlightWords: PropTypes.arrayOf(PropTypes.string), // Accepts an array of words
  color: PropTypes.string, 
};

// ✅ Default Props (if values are not passed)
HeaderAnim.defaultProps = {
  highlightWords: [], 
};
