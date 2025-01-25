import Mobiledevice from "../../assets/images/mobile-device-banner2.png";

export default function Header() {
  return (
    <div className="pt-28 pb-10 font-mono bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-10">
        {/* Text Section */}
        <section className="flex flex-col gap-8 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold uppercase ">
            Lorem ipsum dolor sit amet, <span className="text-red-500">consectetur</span> adipisicing elit.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed ">
            Lorem ipsum dolor sit amet <span >consectetur</span> adipisicing elit. Possimus
            voluptate dolore optio obcaecati quaerat sit ipsam quisquam eum
            quas.
          </p>
          <div>
            <button className="text-lg md:text-xl font-semibold border border-black py-3 px-8 rounded-full transition-colors duration-300 hover:bg-black hover:text-white">
              Learn More
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
