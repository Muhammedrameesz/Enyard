import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import image1 from "../../assets/AboutImages/01.png";
import image2 from "../../assets/AboutImages/02.png";
import image3 from "../../assets/AboutImages/03.png";

export default function ExperienceSection() {
  const steps = [
    {
      image: image1,
      ref: "Relevant",
      title: "Download App",
      description:
        "Praesent faucibus leo eu egestas scelerisque. Vivamus euismod molestie sollicitudin.",
    },
    {
      image: image2,
      ref: "Grey Line",
      title: "Create Profile Account",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      image: image3,
      ref: "Grey Line Two",
      title: "Enjoy Your Applications",
      description:
        "Suspendisse sed lacus ornare, pretium neque nec ornare lacus. In non eros augue dapibus quam.",
    },
  ];

  return (
    <div className="font-jakarta py-10 bg-white">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 p-10">
        <div className="flex flex-col gap-8 text-gray-900">
          <h1 className="text-5xl md:text-6xl font-semibold">25 +</h1>
          <h1 className="text-base text-red-500 font-semibold">
            Years Of Experience
          </h1>
          <h1 className="text-3xl md:text-4xl font-semibold">
            A Different Kind Of Company Should{" "}
            <span className="text-red-600">Follow Different</span> Kind Of App
            Installation.
          </h1>
          <p>
            Suspendisse sed lacus ornare pretium neque nec ornare lacus. In non
            eros augue dapibus quam Maecenas lacini erat a varius convall.
          </p>
          {/* Store Button */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-center justify-center p-2 px-4 bg-blue-700 gap-2 text-white cursor-pointer rounded-full shadow-md ">
              <h1 className="text-3xl">
                <IoLogoGooglePlaystore />
              </h1>
              <div>
                <p className="text-xs text-gray-200">Available on the</p>
                <h1 className="text-base">Google Play</h1>
              </div>
            </div>

            {/* Apple */}
            <div className="flex items-center justify-center gap-2 bg-red-500  text-white cursor-pointer p-2 px-4 rounded-full shadow-md">
              <h1 className="text-4xl">
                <FaApple />
              </h1>
              <div>
                <p className="text-xs text-gray-200">Downloaded on the</p>
                <h1 className="text-lg">App Store</h1>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-10 md:gap-14 lg:gap-16 ">
          {steps.map((step, index) => (
            <div key={index} className="flex  gap-10">
              <span className="w-[60px] h-[1px] bg-gray-400 mt-5 " />
              <img
                src={step.image} // Replace with actual image paths
                alt={step.title}
                className="w-20 h-12 object-cover"
              />
              <div className="flex flex-col gap-3">
                <h1 className="text-red-500 font-semibold">{step.ref}</h1>
                <h2 className="text-xl font-semibold ">{step.title}</h2>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
