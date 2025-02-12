import { TbMessages } from "react-icons/tb";

export default function LearnMore() {
  return (
    <div className="font-jakarta py-20 bg-[#191d27] text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-16 ">
      {/* Icon */}
      <div className="flex items-center justify-center bg-green-500 p-4 rounded-full shadow-lg shadow-green-500">
        <TbMessages className="text-4xl md:text-5xl text-white" />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-3xl  font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 mb-4">
          Are You Ready To Learn More?
        </h1>
        <p className="text-gray-300 leading-relaxed">
          Perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto.
        </p>
      </div>

      {/* SVG Shape */}
      <svg
        width="150"
        height="100"
        viewBox="0 0 150 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 12 L110 5 L23 90 L140 80"
          stroke="#4a3e2a"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Button */}
      <button className="px-6 py-3 bg-green-500 text-white font-semibold text-base rounded-full shadow-lg hover:bg-green-600 transition">
        Chat With Expert
      </button>
    </div>
  );
}
