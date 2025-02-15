import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import image from "../../assets/TimeTickImages/strategic-value-of-data.webp";


export default function forthSection() {
  return (
    <div className="py-14 bg-white font-jakarta">
      <section className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 mx-auto max-w-6xl gap-8">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="font-medium text-red-500">
            Explore How Can I Help You
          </h1>
          <h1 className="font-semibold text-3xl md:text-4xl text-gray-900 leading-relaxed">
            A Risk
            <span className="relative ml-2">
              Management
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 -bottom-2"
                width="120"
                height="15"
                viewBox="0 0 120 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15 C40 -5, 90 -5, 125 15"
                  stroke="#7d80e6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            Company At The Forefront Of Risk Intelligence
          </h1>
          <p className="text-base mb-5 text-gray-600">
            Perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 text-gray-900">
            {/* 1st column */}
            <div className="flex flex-col gap-7">
              <h1 className="flex  gap-2">
                <span className="text-3xl text-green-500">
                  <IoIosCheckmarkCircleOutline />
                </span>
                <span className="text-lg font-semibold">
                  Policy & Program Management
                </span>
              </h1>

              <h1 className="flex  gap-2">
                <span className="text-3xl text-green-500">
                  <IoIosCheckmarkCircleOutline />
                </span>
                <span className="text-lg font-semibold">
                  Allocate resources and measure results
                </span>
              </h1>
            </div>

            {/* second column */}
            <div className="flex flex-col gap-7">
              <h1 className="flex  gap-2">
                <span className="text-3xl text-green-500">
                  <IoIosCheckmarkCircleOutline />
                </span>
                <span className="text-lg font-semibold">
                  Identify hidden opportunities
                </span>
              </h1>

              <h1 className="flex  gap-2">
                <span className="text-3xl text-green-500">
                  <IoIosCheckmarkCircleOutline />
                </span>
                <span className="text-lg font-semibold">
                  Due Diligence Vendor Compliance
                </span>
              </h1>
            </div>
          </section>
        </div>

        <div className="flex flex-col justify-center">
          <img src={image} alt="image" className="transform hover:-translate-y-2 transition-transform duration-300"/>
        </div>
      </section>
    </div>
  );
}
