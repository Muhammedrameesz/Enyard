import { FaRegLightbulb, FaRegSmile, FaRegStar } from "react-icons/fa";
import {uppercaseFirst} from "../../helpers/UppercaseFirst"

export default function DarkThemedSection() {
  const contents = [
    {
      icon: <FaRegSmile size={50} color="#3498db" />, 
      text: uppercaseFirst("Lorem Ipsum Dolor Sit Amet, Consectetur.")
    },
    {
      icon: <FaRegLightbulb size={50} color="#e67e22" />, 
      text: uppercaseFirst("Vestibulum convallis justo nec lectus aliquet.")
    },
    {
      icon: <FaRegStar size={50} color="#f1c40f" />, 
      text: uppercaseFirst("Pellentesque habitant morbi tristique senectus.")
    }
  ];

  return (
    <div className="font-jakarta py-14 px-6 flex justify-center">
      <div className="bg-gradient-to-br from-darkBlue via-darkBlue to-mediumCustomBlue py-20 space-y-14 px-6 text-white rounded-lg shadow-lg w-full max-w-7xl">
        
        {/* Title & Description */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Lorem Ipsum Dolor Sit Amet <span className="font-semibold">Consectetur Lorem</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-200">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deleniti quae, quod saepe esse voluptate rem explicabo autem dolorum dolores, ipsam quibusdam, ipsum ex aliquam.
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {contents.map((item, i) => (
            <div 
              key={i} 
              className={`flex relative flex-col items-center text-center p-6 rounded-lg border border-gray-600 ${
                i === 1 ? "bg-[#22324e]" : "bg-transparent"
              }`}
            >
              <div className="absolute bottom-0 w-full h-1  bg-green-500 rounded-lg -z-0"/>
              <div className="mb-5 ">{item.icon}</div>
              <h1 className="text-xl  font-semibold">{item.text}</h1>
            </div>
          ))} 
        </section>

      </div>
    </div>
  );
}
