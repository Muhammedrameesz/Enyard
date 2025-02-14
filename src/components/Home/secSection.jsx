export default function secSection() {
  return (
    <div className="font-jakarta bg-white pt-16 pb-10 text-xl">
      <section className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-10">

        <div className="flex flex-col gap-5 p-2 rounded-3xl bg-gradient-to-tl ">
          <div className="flex gap-5 items-end">
            <h1 className="relative h-[50px] w-[50px] rounded-full bg-[#fff0c7]">
              <span className="absolute right-2 top-1/3 translate-y-1 text-4xl font-helvetica">
                1
              </span>
            </h1>
            <h1 className="text-xl font-semibold">More Efficiency
            </h1>
          </div>
          <p className="text-base">
          Automate tedious tasks and boost productivity with our intuitive software solutions.
          </p>
        </div>

        {/* SECOND COLUMN */}
        <div className="flex flex-col gap-5 p-2 rounded-3xl bg-gradient-to-tl  ">
          <div className="flex gap-5 items-end">
            <h1 className="relative h-[50px] w-[50px] rounded-full bg-[#e2ffca]">
              <span className="absolute right-2 top-1/3 translate-y-1 text-4xl font-helvetica">
                2
              </span>
            </h1>
            <h1 className="text-xl font-semibold">Enhance Team Collaboration</h1>
          </div>
          <p className=" text-base">
          Connect your team seamlessly and foster effective communication with our integrated platform.
          </p>
        </div>

        {/* 3RD COLUMN */}

        <div className="flex flex-col gap-5 p-2 rounded-3xl bg-gradient-to-tl   ">
          <div className="flex gap-5 items-end">
            <h1 className="relative h-[50px] w-[50px] rounded-full bg-[#cdedff]">
              <span className="absolute right-2 top-1/3 translate-y-1 text-4xl font-helvetica">
                3
              </span>
            </h1>
            <h1 className="text-xl font-semibold ">Grow Your Business</h1>
          </div>
          <p className="text-base ">
          Our Flexible and Scalable solutions adapt to your evolving needs,ensuring long-term growth and success.
          </p>
        </div>
      </section>
    </div>
  );
}
