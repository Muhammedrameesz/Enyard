import bgImage from "../../assets/Corex/demo-three-bg9.webp";
import image2 from "../../assets/Corex/demo-three-banner-image-three.webp";
import HeaderAnim from "../../ui/TextAnimation/HeaderAnim";
import AnimatedButton from "../../ui/AnimatedButton.jsx";
import { useNavigate } from "react-router-dom";
import AnimZF from "../../ui/TextAnimation/AnimZF.jsx"

export default function Header() {
  const navigate = useNavigate();
  const headText = "Drive Business Success with Powerful CoreX";
  return (
    <div className="py-14 font-jakarta text-gray-900">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <section className="flex flex-col justify-center items-center text-center gap-6 mx-auto">
        <HeaderAnim text={headText} highlightWords={["CoreX"]} />
        <p className="max-w-3xl text-gray-600 leading-snug">
          Grow Your Business with Our All-in-One ERP Solution: CoreX. Designed
          for growing businesses like yours, CoreX provides the scalability and
          flexibility you need to adapt to changing market conditions. Take your
          business to the next level with our powerful and intuitive ERP
          solution.
        </p>
        <div onClick={() => navigate("/contact-us")}>
          <AnimatedButton text="Get Started" />
        </div>
      </section>

      <div className="mx-auto">
        <AnimZF>
        <img
          src={image2}
          alt=""
          className="w-full h-auto transform hover:translate-y-2 transition-transform duration-300"
        />
        </AnimZF>
      </div>
    </div>
  );
}
