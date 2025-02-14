import bgImage from "../../assets/Corex/demo-three-bg9.webp";
import { uppercaseFirst } from "../../helpers/UppercaseFirst";
import image2 from "../../assets/Corex/demo-three-banner-image-three.webp"

export default function Header() {
  return (
    <div className="py-14 font-jakarta ">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <section className="flex flex-col justify-center items-center text-center gap-6">
        <h1 className="text-5xl md:text-6xl font-semibold text-gray-900  leading-snug max-w-3xl">
          {uppercaseFirst("Changing the way you think about the Software!")}
        </h1>
        <p className="max-w-3xl text-gray-600 leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque libero
          recusandae aliquid, ratione totam sequi vel, tempore eaque incidunt
          labore accusamus aperiam, laborum obcaecati. Quos nam tenetur eum illo
          doloribus.
        </p>
        <div className="flex gap-5 mt-5">
          <button className="bg-black border border-black text-white font-medium px-6 py-3 rounded-full hover:bg-transparent hover:text-black transition-colors duration-300 ">
            Take A Product Tour
          </button>
          <button className="bg-blue-800 border border-blue-800  text-white font-medium px-6 py-3  rounded-full hover:bg-transparent hover:text-black transition-colors duration-300 ">
            Start free trial
          </button>
        </div>
      </section>

      <div>
        <img src={image2} alt="" className="w-full h-auto transform hover:translate-y-2 transition-transform duration-300"/>
      </div>
    </div>
  );
}
