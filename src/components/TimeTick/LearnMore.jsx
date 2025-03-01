import { TbMessages } from "react-icons/tb";
import Anim from '../../ui/TextAnimation/Anim.jsx'

export default function LearnMore() {
  return (
    <div className="font-jakarta py-20 bg-[#191d27] text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-16 ">
     
      <div className="flex items-center justify-center bg-green-500 p-4 rounded-full shadow-lg shadow-green-500">
      {/* <Anim> */}
        <TbMessages className="text-4xl md:text-5xl text-white" />
        {/* </Anim> */}
      </div>
      

      <Anim>
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-3xl  font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 mb-4">
          Ready for an Upgrade ?
        </h1>
        <p className="text-gray-300 leading-relaxed">
          We welcome your feedback and questions. Contact us to start a
          conversation.
        </p>
      </div>
      </Anim>

      <Anim>
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
      </Anim>

      <Anim>
      <button className="px-6 py-3 bg-green-500 text-white font-semibold text-base rounded-full shadow-lg hover:bg-green-600 transition">
        Chat With Expert
      </button>
      </Anim>
    </div>
  );
}
