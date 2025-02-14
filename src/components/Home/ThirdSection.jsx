import InstalledApp from "../../assets/images/installed-app-img.webp";

export default function ThirdSection() {
  return (
    <div className="pt-16 pb-10 font-jakarta bg-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-10">
        {/* Text Section */}
        {/* Image Section */}
        <section className="flex justify-center hover:transform hover:-translate-y-3 transition-transform duration-300 cursor-pointer">
          <img
            src={InstalledApp}
            alt="mobile"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto lg:h-[480px]"
          />
        </section>
        <section className="flex flex-col gap-8 text-center md:text-left">
          <div className="flex gap-8 text-lg">
            <h1 className="p2- px-4 rounded-full bg-gradient-to-br from-purple-400 to-red-600 text-white">
              TOP
            </h1>
            <h1 className="tracking-tight">Rated Apps</h1>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-relaxed font-semibold text-gray-900">
          Why  Choose <span className="text-red-500">Enyard ?</span> 
            
          </h1>
          <p className="text-lg sm:text-xl  text-gray-700 leading-relaxed">
          We provide innovative and reliable <span className="font-semibold">IT solutions </span> that empower businesses to achieve their full potential.
          </p>
          <div>
          </div>
        </section>
      </div>
    </div>
  );
}
