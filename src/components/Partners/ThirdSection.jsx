import Anim from "../../ui/TextAnimation/Anim.jsx";
import AnimRL from "../../ui/TextAnimation/AnimRL.jsx";
import AnimatedButton from "../../ui/AnimatedButton.jsx";

export default function SecSection() {
  const text = "Explore Services Partner directory";

  return (
    <div className="bg-white py-16 font-jakarta text-gray-950">
      <main className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 mx-auto max-w-7xl gap-10 md:gap-16 items-center">
        {/* Left Section */}
        <Anim>
          <section className="w-full">
            <img
              src="https://www.airtable.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl95ljfippl8%2Ft9Nj05VGVzl5I1DLTBa9U%2F78593a678bfa73b226f542e7da5fd141%2FPartner_2_2560x1920.png%3Ffm%3Dwebp&w=1920&q=75"
              alt="image"
              className="h-[90%] w-[90%] object-cover rounded-3xl"
            />
          </section>
        </Anim>

        {/* Right Section */}
        <AnimRL>
          <section className="space-y-7 w-full">
            <h1 className="font-semibold text-4xl md:text-5xl">Heading</h1>
            <p className="text-gray-600 font-medium max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              architecto nemo maxime dolor laboriosam. Facilis quae velit
              expedita voluptatem enim delectus, animi vel! Aspernatur iste
              magnam dignissimos nobis debitis vitae?
            </p>

            <div className="space-y-5">
              <AnimatedButton text={text} />
            </div>
          </section>
        </AnimRL>
      </main>
    </div>
  );
}
