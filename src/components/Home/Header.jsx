import Mobiledevice from "../../assets/images/mobile-device-banner2.png";
import Bgimage from "../../assets/images/Mobile-Device-Banner-Background.webp";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Header() {
  return (
    <div className="pt-16 pb-10 font-jakarta ">
      <div
        className="fixed w-full inset-0  -z-10 h-full bg-gradient-to-br from-gray-300 via-white to-white"
        
      />

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-10">
        {/* Text Section */}
        <section className="flex flex-col gap-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase ">
            INNOVATIVE IT SOLUTIONS FOR YOUR,{" "}
            <span className="text-red-500">BUSINESS</span> EMPOWERMENT.
          </h1>
          <p className="text-lg sm:text-xl  text-gray-700 leading-relaxed ">
            With a focus on innovation and customer satisfaction, we offer a
            comprehensive suite of services, including our flagship CoreX ERP
            software and dependable hosting solutions. We&apos;re committed to
            empowering your business through technology.
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
