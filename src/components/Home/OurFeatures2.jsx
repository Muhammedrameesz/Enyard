import OurProcessImage from "../../assets/images/Our-Process-Bg.webp";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoCubeOutline } from "react-icons/io5";
import FeaturesBoxImage from "../../assets/images/Our-Features-Box-Bg.webp";
import { IoBarChartOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function OurFeatures2() {
  return (
    <div className="font-jakarta py-16 relative">
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${OurProcessImage})`,
        }}
      ></div>
      <section className="flex flex-col justify-center items-center text-center gap-7 mb-16">
        <p className="text-base font-semibold text-red-500  ">Our Features</p>
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl  font-semibold text-gray-900">
            Sometimes You Feel Like A App Process
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl  font-semibold  text-gray-900">
            sometimes <span className="text-red-600">You Don’t.</span>
          </h1>
        </div>
        <p className="text-lg text-gray-600 ">
          Duis gravida augue velit eu dignissim felis posuere quis.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-10">
        {/* FIRST COLUMN */}
        <div className="flex flex-col justify-center shadow-lg p-8 rounded-3xl gap-5 bg-white">
          <h1 className="relative h-20 w-20 rounded-full bg-red-100">
            <span className="absolute top-0 right-0 trnasform translate-x-1/3 translate-y-1/3 text-red-600 text-5xl ">
              <BsGraphUpArrow />
            </span>
          </h1>
          <h1 className="text-xl font-semibold">Increase Productivity</h1>
          <p className="text-base text-gray-600">
            Purabitur massa tortor ornre sed luctus eleifend lorem nulla cursus
            id est vitae aliquam quam.
          </p>
          <button className="w-fit text-base font-semibold text-red-600 group">
            Learn More
            <IoIosArrowRoundForward className="inline-block ml-1 text-xl transform group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </div>

        {/* SECOND COLUMN */}

        <div className="relative flex flex-col justify-center  p-8 rounded-3xl gap-5">
          <div
            className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center rounded-3xl -z-10"
            style={{
              backgroundImage: `url(${FeaturesBoxImage})`,
            }}
          ></div>

          <h1 className="relative h-20 w-20 rounded-full bg-neutral-800">
            <span className="absolute top-0 right-0 trnasform translate-x-1/3 translate-y-1/3 text-yellow-600 text-5xl ">
              <IoCubeOutline />
            </span>
          </h1>
          <h1 className="text-xl font-semibold text-white">
            Increase Productivity
          </h1>
          <p className="text-base text-white">
            Purabitur massa tortor ornre sed luctus eleifend lorem nulla cursus
            id est vitae aliquam quam.
          </p>
          <button className="w-fit text-base font-semibold text-white group">
            Learn More
            <IoIosArrowRoundForward className="inline-block ml-1 text-xl transform group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </div>

        {/* THIRD COLUMN */}

        <div className="flex flex-col justify-center bg-white shadow-lg p-8 rounded-3xl gap-5">
          <h1 className="relative h-20 w-20 rounded-full bg-green-100">
            <span className="absolute top-0 right-0 trnasform translate-x-1/3 translate-y-1/3 text-green-500 text-5xl ">
              <IoBarChartOutline />
            </span>
          </h1>
          <h1 className="text-xl font-semibold">Increase Productivity</h1>
          <p className="text-base text-gray-600">
            Purabitur massa tortor ornre sed luctus eleifend lorem nulla cursus
            id est vitae aliquam quam.
          </p>
          <button className="w-fit text-base font-semibold text-red-600 group">
            Learn More
            <IoIosArrowRoundForward className="inline-block ml-1 text-xl transform group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </div>
      </section>
    </div>
  );
}
