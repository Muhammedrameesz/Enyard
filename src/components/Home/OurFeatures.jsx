import { FaRegSmile, FaRegHeart, FaRegStar } from "react-icons/fa";
import SubtractImage from "../../assets/images/Subtract.webp";
import OrangeDott from "../../ui/OrangeDott";

export default function OurFeatures() {
  const dummyArray = [
    {
      title: "Happiness",
      description: "Quisque gravida molestie venen. Maecenas commodo aliq.",
      icon: <FaRegSmile />,
    },
    {
      title: "Passion",
      description: "Quisque gravida molestie venen. Maecenas commodo aliq.",
      icon: <FaRegHeart />,
    },
    {
      title: "Excellence",
      description: "Quisque gravida molestie venen. Maecenas commodo aliq.",
      icon: <FaRegStar />,
    },
  ];

  return (
    <div className="py-20 font-jakarta relative bg-red-50 ">
        <OrangeDott/>
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
                className={`text-3xl rounded-full  p-4 ${
                  i == 0 && "bg-red-100"
                } ${i == 1 && "bg-green-100"} ${i == 2 && "bg-yellow-100"}`}
              >
                {item.icon}
              </div>
              <section className="flex flex-col gap-2">
                <h1 className=" text-xl  font-semibold ">
                  {item.title}
                </h1>
                <p className="text-gray-600 text-lg ">
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
            Lorem Ipsum Dolor Sit <span className="text-red-500">Amet</span>{" "}
            Consectetur{" "}
          </h1>
          <p className="text-lg text-gray-600 font-jakarta mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            perspiciatis enim rerum soluta tempora quasi ut rem impedit quo
            atque vel, neque ad debitis cupiditate optio nihil placeat
            repudiandae illum.
          </p>

          <div className="flex gap-5 items-center font-semibold text-gray-900 mb-5">
            <h1 className="text-xl p-1  px-4 border border-dashed border-red-500 text-red-500 rounded-full">
              1
            </h1>
            <h1 className="text-lg">
            Keep Your All Data Protected
            </h1>
          </div>
          <div className="flex gap-5 items-center font-semibold text-gray-900 mb-5">
            <h1 className="text-xl p-1  px-3 border border-dashed border-red-500 text-red-500 rounded-full">
              2
            </h1>
            <h1 className="text-lg">
            Keep Your All Data Protected
            </h1>
          </div>
          <div className="flex gap-5 items-center font-semibold text-gray-900 mb-5">
            <h1 className="text-xl p-1  px-3 border border-dashed border-red-500 text-red-500 rounded-full">
              3
            </h1>
            <h1 className="text-lg">
            Keep Your All Data Protected
            </h1>
          </div>
          <div className="flex gap-5 items-center font-semibold text-gray-900 mb-5">
            <h1 className="text-xl p-1  px-3 border border-dashed border-red-500 text-red-500 rounded-full">
              4
            </h1>
            <h1 className="text-lg">
            Keep Your All Data Protected
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
