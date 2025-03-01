import Image from "../../assets/Corex/demo-three-image-five.webp";
import { FaCheckCircle } from "react-icons/fa";
import Anim from "../../ui/TextAnimation/Anim.jsx"
import AnimRL from "../../ui/TextAnimation/AnimRL.jsx"

export default function FifthSection() {
  const features = [
    "Customer Relationship Management",
    "Human Resources Management",
    "Inventory Management",
    "Purchase Management",
    "Finance & Accounting",
    "Standard Manufacturing",
  ];

  return (
    <div className="pb-10 pt-4 font-jakarta bg-white text-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 md:px-10 mx-auto max-w-7xl gap-10">
        <Anim>
        <section className="transform hover:-translate-y-1 transition-transform duration-300">
          <img
            src={Image}
            alt="image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </section>
        </Anim>

        <AnimRL>
        <section className="flex flex-col text-gray-900 gap-8 justify-center">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Empowering Your
            <span className="font-bold relative">
              Business
              <svg
                className="absolute left-5 -bottom-2"
                width="120"
                height="15"
                viewBox="0 0 120 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15 C40 -5, 90 -5, 125 15" // Inverted Curve
                  stroke="#ff5f55"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            with Integrated Solutions
          </h1>
          <p className="text-gray-600 text-base font-medium leading-relaxed">
            <b>CoreX ERP</b> covers all your business needs.We offers a robust
            suite of integrated functionalities,designed to streamline your
            business processes and drive growth.
          </p>

          {/* Features Section */}
          <section className="space-y-7 mt-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 items-center bg-white"
              >
                <FaCheckCircle className="text-2xl text-green-500" />
                <p className="text-base font-medium text-gray-900">{feature}</p>
              </div>
            ))}
          </section>
        </section>
        </AnimRL>
      </div>
    </div>
  );
}
