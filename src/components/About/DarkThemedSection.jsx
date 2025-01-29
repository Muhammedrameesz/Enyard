import BgEffect from "../../assets/AboutImages/bg-effect-1-1-1.webp";
import { MdOutlineAccessTime } from "react-icons/md";
// import Vector35 from "../../assets/AboutImages/Vector-35.png";

export default function DarkThemedSection() {
  const features = [
    "Free 14-day trial",
    "No credit card required",
    "Support 24/7",
    "User friendly",
  ];
  return (
    <div className="relative font-jakarta ">
      {/* <div
        className="hidden md:block absolute left-1/3 top-1/2  h-full w-full z-10 object-cover bg-no-repeat object-center overflow-hidden"
        style={{
          backgroundImage: `url(${Vector35})`,
        }}
      /> */}
      <section className=" relative flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center gap-7  text-white py-10 bg-[#060a33]" >
        <div
          className="absolute  inset-0  bg-no-repeat bg-cover bg-center  -z-0"
          style={{ backgroundImage: `url(${BgEffect})` }}
        />

        <div className="text-center mb-8 flex flex-col gap-2 ">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Embedded{" "}
            <span className="relative inline-block">
              Analytics
              <svg
                className="absolute left-0 -bottom-1 w-full h-[10px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,4 C10,0 30,8 40,4 C50,0 70,8 80,4 C90,0 100,8 110,4"
                  stroke="#e26b77"
                  fill="none"
                  strokeWidth="2"
                />
              </svg>
            </span>{" "}
            Purpose-Built
          </h1>
          <h1 className="text-3xl md:text-4xl font-semibold">
            For Software Teams!
          </h1>
        </div>
        <p className="max-w-md text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority
        </p>
        <div className="flex gap-5 mt-6">
          <button className="bg-blue-500 rounded-full p-3 px-5 font-semibold z-10">
            APK Download
          </button>
          <button className="bg-red-500 rounded-full p-3 px-5 font-semibold z-10">
            Get Startd
          </button>
        </div>

        <div className=" flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-gray-400  py-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <MdOutlineAccessTime className="text-xl" />
              <span className="text-base ">{feature}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
