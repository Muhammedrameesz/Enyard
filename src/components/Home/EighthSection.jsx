import imageSection3 from "../../assets/images/image-section-3.webp";
import { MdDone } from "react-icons/md";

export default function EighthSection() {
  return (
    <div className="py-10 font-jakarta">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-5">
          <p className="text-red-800 text-base"># No 1 Best Performance</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
            Power Your Online Presence with <span className="text-red-500">Enyard</span>&apos;s Premium Hosting
          </h1>
          <p className="text-base text-gray-600">
            Fast, Secure, and Scalable Hosting Solutions
          </p>

          <div className="flex gap-4 mb-3 mt-3">
            <h1 className="border border-dashed border-red-500 text-red-500 h-fit p-1 rounded-lg text-2xl">
              <MdDone />
            </h1>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold text-gray-900">
                Reliability & Performance
              </h1>
              <p className="text-bse text-gray-600">
                Experience unparalleled uptime and lightning-fast speeds with
                Enyard&apos;s cutting-edge hosting infrastructure to ensure your
                website loads quickly and reliably.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <h1 className="border border-dashed border-red-500 text-red-500 h-fit p-1 rounded-lg text-2xl">
              <MdDone />
            </h1>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold text-gray-900">
                Security & Protection
              </h1>
              <p className="text-base text-gray-600">
                Your website&apos;s security is our top priority. We offer
                advanced security features to safeguard your data and protect
                your website from online threats.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div>
          <img src={imageSection3} alt="image" className="w-full h-full" />
        </div>
      </section>
    </div>
  );
}
