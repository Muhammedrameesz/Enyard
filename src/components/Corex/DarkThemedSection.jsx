
import { uppercaseFirst } from "../../helpers/UppercaseFirst";
import { motion } from "framer-motion";
import { FaCloud, FaShieldAlt, FaPuzzlePiece } from "react-icons/fa";
import Anim from "../../ui/TextAnimation/Anim.jsx"


export default function DarkThemedSection() {
  const contents = [
    {
      icon: <FaCloud size={50} color="#3498db" />,
      text: uppercaseFirst("Future proof your business with a cloud based system"),
    },
    {
      icon: <FaShieldAlt size={50} color="#32ad19" />,
      text: uppercaseFirst("Higly Secure Hosting Managed By Amazon AWS"),
    },
    {
      icon: <FaPuzzlePiece  size={50} color="#f1c40f" />,
      text: uppercaseFirst("Integrate with other Apps / Authorities"),
    },
  ];

  return (
    <div className="font-jakarta py-14 px-6 flex justify-center">
      <div className="bg-gradient-to-br from-darkBlue via-darkBlue to-mediumCustomBlue py-20 space-y-14 px-6 text-white rounded-lg shadow-lg w-full max-w-7xl">
       <Anim>
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            What Makes <span className="font-semibold">CoreX</span>Different ?
          </h1>
          <p className="max-w-3xl mx-auto text-gray-200">
            We&apos;re more than just a software provider – we&apos;re your
            strategic partner. Our dedicated team provides expert guidance,
            seamless implementation, and ongoing support to ensure you achieve
            your business goals. Your success is our priority.
          </p>
        </section>
        </Anim>

        {/* Features Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {contents.map((item, i) => (
            <Anim key={i} delay={i*0.2}>
            <motion.div
              initial={{ rotateX: 0 }}
              whileHover={{ rotateX: 25 }}
              transition={{ duration: 0, ease: "easeInOut" }}
              key={i}
              className={`flex relative flex-col items-center text-center group p-6 rounded-lg transition-all duration-500 border border-gray-600 ${
                i === 1 ? "bg-[#22324e]" : "bg-transparent"
              }`}
            >
              <div
                className={`absolute bottom-0 w-full h-1  bg-transparent group-hover:bg-green-500 rounded-lg shadow-xl group-hover:shadow-custom shadow-green-200 -z-0 transition-all duration-500"`}
              />
              <div className="mb-5 bg-transparent group-hover:bg-gray-100 transition-colors duration-500 rounded-full p-2">
                {item.icon}
              </div>
              <h1 className="text-xl  font-semibold">{item.text}</h1>
            </motion.div>
            </Anim>
          ))}
        </section>
      </div>
    </div>
  );
}
