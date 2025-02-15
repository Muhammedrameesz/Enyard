import { FaRocket, FaUsers, FaCogs } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { MdArrowOutward } from "react-icons/md";

const features = [
  {
    icon: <FaRocket className="text-red-500 text-4xl  " />,
    name: "Performance",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident maiores voluptatem non.",
  },
  {
    icon: <FaUsers className="text-purple-500 text-4xl " />,
    name: "Collaboration",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident maiores voluptatem non.",
  },
  {
    icon: <FaCogs className="text-gray-600 text-4xl " />,
    name: "Customization",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident maiores voluptatem non.",
  },
];

export default function CardSection() {

  return (
    <div className="font-jakarta py-10 bg-white space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-10 mx-auto max-w-6xl gap-7  ">
        <section
          className="flex flex-col justify-center items-center text-center gap-5 col-span-2 
        bg-gradient-to-br from-customBlue via-customBlue to-mediumCustomBlue py-16  text-white rounded-3xl"
        >
          <h1 className="text-transparent uppercase bg-clip-text bg-gradient-to-tr text-lg font-semibold from-orange-500 to-white">
            Accelerate Your Revenue
          </h1>
          <h1 className="text-4xl font-semibold">Track Companies With Your</h1>
          <h1 className="text-4xl font-bold">Management</h1>
        </section>

        <section className="flex flex-col justify-center bg-white shadow-custom rounded-3xl space-y-6 p-8">
          <div className="flex gap-5 items-center  ">
            <TiMessages className="text-4xl text-yellow-500" />
            <h1 className="text-xl font-semibold text-gray-900">
              Lorem Ipsum Dolor{" "}
            </h1>
          </div>
          <h1 className="text-sm font-medium text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            maiores voluptatem non.
          </h1>
          <div className="bg-gray-100 h-[1px] w-[100%]" />

          <button className="text-base font-semibold w-fit group text-gray-900">
            Read More{" "}
            <MdArrowOutward className="inline-block text-xl transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-10 mx-auto max-w-6xl gap-7 ">
        {features.map((item, i) => (
          <section
            key={i}
            className="flex flex-col justify-center bg-white shadow-custom rounded-3xl space-y-5 p-8"
          >
            <div className="flex items-center gap-5  ">
              <div className="">{item.icon}</div>
              <h1 className="text-xl font-semibold text-gray-900">
                {item.name}{" "}
              </h1>
            </div>
            <h1 className="text-sm font-medium text-gray-500">
              {item.description}
            </h1>
            <div className="bg-gray-200 h-[1px] w-[100%]" />

            <button className="text-base font-semibold w-fit group text-gray-900">
              Read More{" "}
              <MdArrowOutward className="inline-block text-xl transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </section>
        ))}
      </div>
   
    </div>
  );
}
