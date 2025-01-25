import imageSection3 from "../../assets/images/image-section-3.webp"
import { MdDone } from "react-icons/md";

export default function EighthSection() {
  return (
    <div className="py-10 font-poppins">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-5">
          <p className="text-red-800 text-base"># No 1 Best Performance</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Manage Your Fleet of Devices From One Platform
          </h1>
          <p className="text-lg text-gray-600">
            Duis gravida augue velit eu dignissim felis pos quis. Integ ante
            urna gravida nec molestie mattis ultricies risus sed.
          </p>

          <div className="flex gap-4 mb-3 mt-3">
            <h1 className="border border-dashed border-red-500 text-red-500 h-fit p-1 rounded-lg text-2xl">
              <MdDone />
            </h1>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">
                Enforce Passcode Policy
              </h1>
              <p className="text-bse text-gray-600">
                Duis gravida augue velit eu dignissim felis pos quis. Integ ante
                urna gravida nec molestie mattis ultricies risus sed.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <h1 className="border border-dashed border-red-500 text-red-500 h-fit p-1 rounded-lg text-2xl">
              <MdDone />
            </h1>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">
                Enforce Passcode Policy
              </h1>
              <p className="text-base text-gray-600">
                Duis gravida augue velit eu dignissim felis pos quis. Integ ante
                urna gravida nec molestie mattis ultricies risus sed.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div>
            <img src={imageSection3} alt="image" className="w-full h-full"/>
        </div>
      </section>
    </div>
  );
}
