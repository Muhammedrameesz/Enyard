import { IoShieldHalfSharp } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";

export default function Reviews() {
  return (
    <div className="pb-10 bg-white font-jakarta">
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-4xl mb-12 font-medium text-gray-900">
          Customers Have Consistently{" "}
          <span className="font-semibold">Rated Corex 4.9/5</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 text-gray-900">
          <section className="flex flex-col justify-center items-center gap-4">
            <IoShieldHalfSharp className="text-6xl text-red-500" />
            <h1 className="text-4xl font-semibold  ">Title</h1>
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <div key={index}>
                  <TiStarFullOutline className="text-yellow-400 text-lg" />
                </div>
              ))}
            </div>
            <p className="text-gray-600 font-medium">
              &quot;Lorem ipsum dolor sit amet&quot;
            </p>
          </section>

          <section className="flex flex-col justify-center items-center text-center gap-4">
            <IoShieldHalfSharp className="text-6xl text-green-500" />
            <h1 className="text-4xl font-semibold">Title</h1>
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <div key={index}>
                  <TiStarFullOutline className="text-yellow-400 text-lg" />
                </div>
              ))}
            </div>
            <p className="text-gray-600 font-medium">
              &quot;Lorem ipsum dolor sit amet&quot;
            </p>
          </section>

          <section className="flex flex-col justify-center items-center text-center gap-4">
            <IoShieldHalfSharp className="text-6xl text-blue-500" />
            <h1 className="text-4xl font-semibold">Title</h1>
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <div key={index}>
                  <TiStarFullOutline className="text-yellow-400 text-lg" />
                </div>
              ))}
            </div>
            <p className="text-gray-600 font-medium">
              &quot;Lorem ipsum dolor sit amet&quot;
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
