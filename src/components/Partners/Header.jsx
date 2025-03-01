import bgImage from "../../assets/Corex/demo-three-bg9.webp";
import HeaderAnim from "../../ui/TextAnimation/HeaderAnim";
import AnimatedButton from "../../ui/AnimatedButton";

export default function Header() {
  const text = "Take A Product Tour";

  const headText = "Lorem Ipsum Dolor Sit Amet  Adipisicing Elit";
  return (
    <div
      className="pt-14 font-jakarta text-gray-900 bg-no-repeat bg-cover bg-center -z-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <section className="flex flex-col justify-center items-center text-center gap-6">
        <HeaderAnim text={headText} highlightWords={["Adipisicing", "Elit"]} />
        <p className="max-w-3xl text-gray-600 leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque libero
          recusandae aliquid, ratione totam sequi vel, tempore eaque incidunt
          labore accusamus aperiam, laborum obcaecati. Quos nam tenetur eum illo
          doloribus.
        </p>

        <div>
          <AnimatedButton text={text} />
        </div>
      </section>
    </div>
  );
}
