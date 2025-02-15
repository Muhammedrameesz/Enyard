import { FaRegStar, FaRegLightbulb, FaRegSmile } from "react-icons/fa";
import SubtractImage from "../../assets/images/Subtract.webp";
import OrangeDott from "../../ui/OrangeDott";

export default function OurFeatures() {
  const dummyArray = [
    {
      title: "Innovation",
      description:
        "We are committed to provide innovative IT solutions that meets clients requirements.",
      icon: <FaRegLightbulb />,
    },
    {
      title: "Excellence",
      description:
        "Our team of talented professionals provide excellent business solutions.",
      icon: <FaRegStar />,
    },
    {
      title: "Customer Satisfaction.",
      description:
        "We are dedicated to providing exceptional customer support throughout the journey.",
      icon: <FaRegSmile />,
    },
  ];

  return (
    <div className="py-20 font-jakarta relative bg-red-50 ">
      <OrangeDott />
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-center overflow-hidden "
        style={{
          backgroundImage: `url(${SubtractImage})`,
        }}
      ></div>

      <section className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 md:gap-16 max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-5 ">
          {dummyArray.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-5 bg-white p-10 rounded-3xl  z-10"
            >
              <div
                className={`text-3xl rounded-full text-gray-900  p-4 ${
                  i == 0 && "bg-red-100"
                } ${i == 1 && "bg-green-100"} ${i == 2 && "bg-yellow-100"}`}
              >
                {item.icon}
              </div>
              <section className="flex flex-col gap-2">
                <h1 className=" text-xl  font-semibold text-gray-950">{item.title}</h1>
                <p className="text-gray-600 text-base font-medium ">
                  {item.description}
                </p>
              </section>
            </div>
          ))}
        </div>

        <div className="z-10">
          <h1 className="text-sm  font-semibold text-red-500 mb-5">
            Our Features
          </h1>
          <h1 className=" text-3xl sm:text-4xl md:text-5xl text-gray-900 font-semibold mb-5">
            Powering Your <span className="text-red-500">Business </span>Growth
          </h1>
          <p className="text-lg text-gray-600 font-jakarta mb-6">
            From secure and scalable hosting to a comprehensive enterprise
            resource planning system, we offer the tools you need to streamline
            operations, enhance productivity, and achieve your business goals.
          </p>

          <div className="flex gap-5 items-center font-semibold text-gray-900 mb-5">
            <h1 className="text-xl p-1  px-4 border border-dashed border-red-500 text-red-500 rounded-full">
              1
            </h1>
            <h1 className="text-lg">High-Performance Hosting</h1>
          </div>
          <div className="flex gap-5 items-center font-semibold text-gray-900 mb-5">
            <h1 className="text-xl p-1  px-3 border border-dashed border-red-500 text-red-500 rounded-full">
              2
            </h1>
            <h1 className="text-lg">CoreX ERP Integration & Customization</h1>
          </div>
          <div className="flex gap-5 items-center font-semibold text-gray-900 mb-5">
            <h1 className="text-xl p-1  px-3 border border-dashed border-red-500 text-red-500 rounded-full">
              3
            </h1>
            <h1 className="text-lg">24/7 Expert Support</h1>
          </div>
          <div className="flex gap-5 items-center font-semibold text-gray-900 mb-5">
            <h1 className="text-xl p-1  px-3 border border-dashed border-red-500 text-red-500 rounded-full">
              4
            </h1>
            <h1 className="text-lg">Robust Security & Data Protection</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
