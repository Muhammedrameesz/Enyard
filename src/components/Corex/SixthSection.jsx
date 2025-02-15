import Image from "../../assets/Corex/demo_three_image_six.webp";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { uppercaseFirst } from "../../helpers/UppercaseFirst";

export default function FifthSection() {
  return (
    <div className="pb-10 pt-4 font-jakarta bg-white text-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 md:px-10 mx-auto max-w-7xl gap-10">
        {/* Left Section  */}

        <section className="flex flex-col text-gray-900 gap-5 justify-center">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Lorem Ipsum Dolor Sit, Amet Consectetur{" "}
            <span className="font-bold relative">
              Adipisicing Elit.
              <svg
                className="absolute left-5 -bottom-2"
                width="120"
                height="15"
                viewBox="0 0 120 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15 C40 -5, 90 -5, 125 15" // Inverted Curve
                  stroke="#ff5f55"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            Molestiae Veritatis, Laborum.
          </h1>
          <p className="text-gray-600 text-base font-medium leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
            labore explicabo ab fugiat placeat illum repellendus aperiam omnis.
            Maxime saepe est dolores? Ullam, voluptatibus quis. Quas aspernatur
            magnam saepe neque.
          </p>

          {/* Features Section */}
          <section className="flex flex-col gap-8">
            <main>
              <div className="flex gap-3 items-center mb-3 ">
                <h1 className="text-2xl text-customBlue">
                  <IoCheckmarkDoneCircle />
                </h1>
                <p className="text-lg font-semibold text-gray-900">
                  {" "}
                  {uppercaseFirst("voluptatibus quis. Quas aspernatur saepe")}
                </p>
              </div>
              <p className="text-base font-medium text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi consectetur vitae soluta repudiandae rerum itaque
              </p>
            </main>

            <main>
              <div className="flex gap-3 items-center mb-3">
                <h1 className="text-2xl text-customBlue">
                  <IoCheckmarkDoneCircle />
                </h1>
                <p className="text-lg font-semibold text-gray-900">
                  {" "}
                  {uppercaseFirst("voluptatibus quis. Quas aspernatur saepe")}
                </p>
              </div>
              <p className="text-base font-medium text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi consectetur vitae soluta repudiandae rerum itaque
              </p>
            </main>
          </section>
        </section>

        {/* Right Section  */}
        <section className="transform hover:-translate-y-1 transition-transform duration-300">
          <img
            src={Image}
            alt="image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </section>
      </div>
    </div>
  );
}
