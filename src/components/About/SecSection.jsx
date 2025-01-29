import { FaRegSmile, FaCode, FaRocket } from "react-icons/fa";

function FeaturesSection() {
  const features = [
    {
      icon: <FaRegSmile />,
      title: "User-Friendly",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      icon: <FaCode />,
      title: "Clean Code",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      icon: <FaRocket />,
      title: "Fast Performance",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <div className="pb-20 pt-10 font-jakarta ">
      <div className="flex flex-col   px-10 md:px-20 gap-5 max-w-2xl mb-10 md:mb-20">
        <h1 className="text-red-500 font-semibold">Know More About Us</h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
          We Believe In Good Ideas Flexibility & Precission
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-10 max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center min-h-[250px]  
                text-center p-6  rounded-3xl  transition duration-300 
                 ${
                   (index === 0) | (index == 2)
                     ? "hover:shadow-custom transition-shadow duration-300"
                     : "shadow-custom transition-shadow duration-300"
                 }
                `}
          >
            <div className="flex items-center gap-5">
              <div
                className={`text-4xl rounded-full p-8 mb-4 
                ${index === 0 && "bg-[#ffede8] text-red-500"}
                ${index === 1 && "bg-[#fff9e8] text-yellow-500"}
                ${index === 2 && "bg-[#eef9ff] text-green-500"}
                `}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
