import Image from "../../assets/Corex/demo_three_image_six.webp";
import { uppercaseFirst } from "../../helpers/UppercaseFirst";
import { FaCheckCircle } from "react-icons/fa";
import Anim from "../../ui/TextAnimation/Anim.jsx"
import AnimRL from "../../ui/TextAnimation/AnimRL.jsx"

export default function FifthSection() {
  return (
    <div className="pb-10 pt-4 font-jakarta bg-white text-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 md:px-10 mx-auto max-w-7xl gap-10">

         <Anim>
        <section className="flex flex-col text-gray-900 gap-5 justify-center">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Simplify,Optimize,Thrive : <br />
            <span className="font-bold relative">
              CoreX ERP
              <svg
                className="absolute left-0 -bottom-2"
                width="120"
                height="15"
                viewBox="0 0 120 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15 C40 -5, 90 -5, 125 15"
                  stroke="#ff5f55"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>
          <p className="text-gray-600 text-base font-medium leading-relaxed">
            In today&apos;s fast-paced business environment, having access to
            accurate and timely information is crucial. CoreX ERP empowers you
            with auto-generated reports and flexible customization options to
            gain the insights you need, when you need them.
          </p>

          {/* Features Section */}
          <section className="flex flex-col gap-8">
            <main>
              <div className="flex gap-3 items-center mb-3 ">
                <h1 className="text-2xl text-green-500">
                  <FaCheckCircle />
                </h1>
                <p className="text-lg font-semibold text-gray-900">
                  {" "}
                  {uppercaseFirst(
                    "Boost Your Business Insights with Auto-Generated Report"
                  )}
                </p>
              </div>
              <p className="text-base font-medium text-gray-600">
                Time-saving: Focus on strategic decisions, not data entry.
                Accuracy: Eliminate human error for reliable reporting.
                Accessibility: Access critical data anytime, anywhere.
                Consistency: Maintain a consistent view of your business
                performance.
              </p>
            </main>

            <main>
              <div className="flex gap-3 items-center mb-3">
                <h1 className="text-2xl text-green-500">
                  <FaCheckCircle />
                </h1>
                <p className="text-lg font-semibold text-gray-900">
                  {" "}
                  {uppercaseFirst("Tailor CoreX ERP to Your Unique Needs")}
                </p>
              </div>
              <p className="text-base font-medium text-gray-600">
                Personalize Your Dashboard: Arrange modules and widgets
                relevantly. Create Custom Reports:Generate tailored analyses
                based on your specific requirements. Configure Workflows:
                Automate tasks and streamline processes to improve efficiency.
                Extend Functionality: Integrate with other systems and add
                custom features to meet your evolving needs.
              </p>
            </main>
          </section>
        </section>
        </Anim>

        <AnimRL>
        <section className="transform hover:-translate-y-1 transition-transform duration-300">
          <img
            src={Image}
            alt="image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </section>
        </AnimRL>
      </div>
    </div>
  );
}
