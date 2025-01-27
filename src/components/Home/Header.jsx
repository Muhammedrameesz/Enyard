import Mobiledevice from "../../assets/images/mobile-device-banner2.png";
import Bgimage from "../../assets/images/Mobile-Device-Banner-Background.webp";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Header() {
  return (
    <div className="pt-16 pb-10 font-jakarta ">
      <div
        className="absolute w-full inset-0 bg-no-repeat bg-center -z-10 bg-cover"
        style={{
          backgroundImage: `url(${Bgimage})`,
          minHeight: "140vh",
          width: "100%",
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-10">
        {/* Text Section */}
        <section className="flex flex-col gap-8 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase ">
            Lorem ipsum dolor sit amet,{" "}
            <span className="text-red-500">consectetur</span> adipisicing elit.
          </h1>
          <p className="text-lg sm:text-xl  text-gray-700 leading-relaxed ">
            Lorem ipsum dolor sit amet <span>consectetur</span> adipisicing
            elit. Possimus voluptate dolore optio obcaecati quaerat sit ipsam
            quisquam eum quas.
          </p>
          <div>
            <button className="text-lg group font-semibold border border-black py-3 px-8 rounded-full  transition-colors duration-300 bg-black text-white">
              Learn More
              <MdKeyboardArrowRight className="transform group-hover:translate-x-1 transition-transform duration-500  inline-block ml-2" />
            </button>
          </div>
        </section>

        {/* Image Section */}
        <section className="flex justify-center">
          <img
            src={Mobiledevice}
            alt="mobile"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </section>
      </div>
    </div>
  );
}
