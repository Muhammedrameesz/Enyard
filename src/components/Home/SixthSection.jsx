import AppInstallBg from "../../assets/images/App-Install-Bg.webp";
import Pattern from "../../ui/CircleTriangleStar.jsx";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function SixthSection() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact-us");
  };
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
          Let’s Discuss Your Project
        </p>
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl  font-semibold text-white mb-2">
            Any Queries or need a
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl  font-semibold text-white mb-4">
            <span className="text-red-600">Custom Solution ?</span>
          </h1>
        </div>
        <p className="text-lg text-white mb-6">Reach out to our team</p>

        <div onClick={handleClick} className="flex items-center justify-center gap-2 text-white cursor-pointer p-2 px-6 rounded-full border  shadow-md  hover:translate-x-1 transition-transform duration-300">
          <h1 className="text-lg font-medium tracking-wide">Contact Us</h1>
          <h1 className="text-xl">
            <IoIosArrowForward />
          </h1>
        </div>
      </section>
    </div>
  );
}
