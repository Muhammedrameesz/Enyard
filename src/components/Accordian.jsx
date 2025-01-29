import { useState } from "react";
import Image from "../assets/AboutImages/image-section-7.webp";
export default function Accordian() {
  const [activeA, setActive] = useState("ac1");

  return (
    <div className="font-jakarta bg-white py-16 px-6 md:px-6 lg:px-10">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Accordion Section */}
        <main className="space-y-6 bg-gradient-to-b from-white via-white  to-transparent p-6 rounded-3xl">
          <div className="flex flex-col gap-6 mb-10">
            <h1 className="text-red-500 font-medium">
              Frequently Asked Questions
            </h1>
            <h1 className="text-gray-900 font-semibold text-3xl md:text-4xl">
              We Always Ready To Answer Your Any Query.
            </h1>
            <p className="text-base font-medium text-gray-700">
              Suspendisse sed lacus ornare pretium neque nec ornare lacus. In
              non eros augue dapibus quam Maecenas lacini varius convall.
            </p>
          </div>

          {/* Accordians */}
          <div
            onClick={() => setActive("ac1")}
            className="collapse collapse-plus bg-transparent shadow-md rounded-lg"
          >
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div
              className={`collapse-title text-lg font-semibold p-4   ${
                activeA === "ac1" && "bg-gray-700 text-white mb-5"
              }`}
            >
              What services do we offer?
            </div>
            <div className="collapse-content px-4 pb-4">
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                We offer a range of services including web development, UI/UX
                design, mobile app development, and digital marketing. Our team
                ensures high-quality solutions tailored to your needs.
              </p>
            </div>
          </div>

          <div
            onClick={() => setActive("ac2")}
            className="collapse collapse-plus bg-transparent shadow-md rounded-lg"
          >
            <input type="radio" name="my-accordion-3" />
            <div
              className={`collapse-title text-lg font-semibold p-4   ${
                activeA === "ac2" && "bg-gray-700 text-white mb-5"
              }`}
            >
              How does the process work?
            </div>
            <div className="collapse-content px-4 pb-4">
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                Our process begins with an in-depth consultation to understand
                your requirements. Then, we proceed with planning, development,
                testing, and deployment while keeping you updated at every
                stage.
              </p>
            </div>
          </div>

          <div
            onClick={() => setActive("ac3")}
            className="collapse collapse-plus bg-transparent shadow-md rounded-lg"
          >
            <input type="radio" name="my-accordion-3" />
            <div
              className={`collapse-title text-lg font-semibold p-4   ${
                activeA === "ac3" && "bg-gray-700 text-white mb-5"
              }`}
            >
              What is the estimated project timeline?
            </div>
            <div className="collapse-content px-4 pb-4">
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                The project timeline varies depending on the complexity and
                requirements. On average, web development projects take 4-8
                weeks, while mobile apps may take 8-12 weeks. We always strive
                to deliver on time.
              </p>
            </div>
          </div>
        </main>

        {/* Right: Image Section */}
        <div className="flex justify-center">
          <img
            src={Image}
            alt="Illustration"
            className="max-w-full h-auto rounded-lg "
          />
        </div>
      </section>
    </div>
  );
}
