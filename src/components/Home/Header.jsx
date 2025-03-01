import { motion } from "framer-motion";
import Mobiledevice from "../../assets/images/mobile-device-banner2.png";
// import Bgimage from "../../assets/images/Mobile-Device-Banner-Background.webp";
import Anim from "../../ui/TextAnimation/Anim.jsx"
import AnimRL from "../../ui/TextAnimation/AnimRL.jsx"
import AnimatedButton from "../../ui/AnimatedButton.jsx"

export default function Header() {
  const text = "Innovative IT Solutions For Your, ";
  const highlight = "Business";
  const endText = " Empowerment.";

  return (
    <div className="pt-16 pb-10 font-jakarta ">
      <div className="fixed w-full inset-0  -z-10 h-full bg-gradient-to-br from-gray-300 via-white to-white" />

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-10">
        {/* Text Section */}
        <section className="flex flex-col gap-8 text-center md:text-left ">


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center md:text-left"
          >
            {/* Letter-by-Letter Animation */}
            <motion.h1 className="text-5xl md:text-6xl  font-semibold  text-gray-950">
              {text.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.05,
                    ease: "easeOut",
                    // repeat:Infinity,
                  }}
                >
                  {char}
                </motion.span>
              ))}

              {/* Highlighted Word with Bounce */}
              <motion.span
                className="text-red-500 inline-block"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                
                transition={{
              
                  duration: 0.5,
                  delay: text.length * 0.05, // Starts after main text animation
                  type: "spring",
                  stiffness: 120,
                  
                }}
              >
                {highlight}
              </motion.span>

              {/* Remaining Text */}
              {endText.split("").map((char, i) => (
                <motion.span
                  key={`end-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: (text.length + 1) * 0.05 + i * 0.05,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

         <Anim delay={2.2}>
          <p className="text-lg   text-gray-700  ">
            With a focus on innovation and customer satisfaction, we offer a
            comprehensive suite of services, including our flagship CoreX ERP
            software and dependable hosting solutions. We&apos;re committed to
            empowering your business through technology.
          </p>
          </Anim>
          <div>
            <Anim delay={0.3}>
           <AnimatedButton text="Explore More"/>
            </Anim>
          </div>
        </section>

        {/* Image Section */}
        <section className="flex justify-center">
          <AnimRL delay={1.8}>
          <img
            src={Mobiledevice}
            alt="mobile"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
          </AnimRL>
        </section>
      </div>
    </div>
  );
}
