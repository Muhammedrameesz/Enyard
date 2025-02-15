import InstalledApp from "../../assets/images/installed-app-img.webp";
import Anim from "../../ui/TextAnimation/Anim.jsx";
import AnimRL from "../../ui/TextAnimation/AnimRL.jsx";

export default function ThirdSection() {
  return (
    <div className="py-10 font-jakarta bg-white text-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-10">
      
        <Anim>
          <section className="transform hover:-translate-y-3 transition-transform duration-300 cursor-pointer">
            <img
              src={InstalledApp}
              alt="mobile"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto "
            />
          </section>
        </Anim>

        <AnimRL>
          <section className="flex flex-col  gap-8  text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-relaxed font-semibold text-gray-900">
              Why Choose <span className="text-red-500">Enyard ?</span>
            </h1>
            <p className="text-lg sm:text-xl  text-gray-700 leading-relaxed">
              We provide innovative and reliable{" "}
              <span className="font-semibold">IT solutions </span> that empower
              businesses to achieve their full potential.We partner closely with
              our clients to understand their unique challenges and deliver
              tailored solutions that drive growth and efficiency.
            </p>
            <div></div>
          </section>
        </AnimRL>
      </div>
    </div>
  );
}
