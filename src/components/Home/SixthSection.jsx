import AppInstallBg from "../../assets/images/App-Install-Bg.webp";
import Pattern from "../../ui/CircleTriangleStar.jsx";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

export default function SixthSection() {
  return (
    <div
      className="relative w-full h-full py-10 md:py-16 overflow-hidden font-jakarta "
      style={{
        backgroundImage: `url(${AppInstallBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Animated Pattern */}
      <Pattern />

      {/* Content */}
      <section className="relative z-10  flex flex-col justify-center items-center gap-5 text-center h-full px-4">
        <p className="text-base text-white uppercase mb-2">
          Try For Free Application
        </p>
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl  font-semibold text-white mb-2">
            Take What You Want, But Leave
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl  font-semibold text-white mb-4">
            <span className="text-red-600">App Install</span> Alone
          </h1>
        </div>
        <p className="text-lg text-white mb-6">
          Duis gravida augue velit eu dignissim felis posuere quis.
        </p>

        {/* Store Button */}
        <section className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5">

        <div className="flex  items-center justify-center gap-2 text-white cursor-pointer p-2 px-4 rounded-full border shadow-md">
          <h1 className="text-4xl">
            <IoLogoGooglePlaystore />
          </h1>
          <div>
            <p className="text-xs text-gray-500">Available on the</p>
            <h1 className="text-lg  ">
              Google Play
            </h1>
          </div>
        </div>

        {/* Apple */}

        <div className="flex  items-center justify-center gap-2 text-white cursor-pointer p-2 px-4 rounded-full border shadow-md">
          <h1 className="text-4xl">
            <FaApple />
          </h1>
          <div>
            <p className="text-xs text-gray-500">Downloaded on the</p>
            <h1 className="text-lg  ">
              App Store
            </h1>
          </div>
        </div>
        </section>

      </section>
    </div>
  );
}
