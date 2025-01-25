export default function secSection() {
  return (
    <div className="font-mono bg-white pt-16 pb-10 text-xl">
      <section className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-5 p-2 rounded-3xl bg-gradient-to-tl from-[#fff0c7] via-white to-transparent ">
          <div className="flex gap-5 items-end">
            <h1 className="relative h-[50px] w-[50px] rounded-full bg-[#fff0c7]">
              <span className="absolute right-0 top-1/2 -translate-y-1/3 text-5xl">
                1
              </span>
            </h1>
            <h1 className="text-2xl font-semibold">download the apps </h1>
          </div>
          <p className="font-poppins text-lg">
            Integer luctus dolor rutrum nibh interdum iaculis euismod ante
            conseqt. Proin eget.
          </p>
        </div>

        {/* SECOND COLUMN */}
        <div className="flex flex-col gap-5 p-2 rounded-3xl bg-gradient-to-tl  from-[#e2ffca] via-white to-transparent ">
          <div className="flex gap-5 items-end">
            <h1 className="relative h-[50px] w-[50px] rounded-full bg-[#e2ffca]">
              <span className="absolute right-0 top-1/2 -translate-y-1/3 text-5xl">
                2
              </span>
            </h1>
            <h1 className="text-2xl font-semibold">download the apps </h1>
          </div>
          <p className="font-poppins text-lg">
            Integer luctus dolor rutrum nibh interdum iaculis euismod ante
            conseqt. Proin eget.
          </p>
        </div>

        {/* 3RD COLUMN */}

        <div className="flex flex-col gap-5 p-2 rounded-3xl bg-gradient-to-tl  from-[#cdedff] via-white to-transparent ">
          <div className="flex gap-5 items-end">
            <h1 className="relative h-[50px] w-[50px] rounded-full bg-[#cdedff]">
              <span className="absolute right-0 top-1/2 -translate-y-1/3 text-5xl">
                3
              </span>
            </h1>
            <h1 className="text-2xl font-semibold">download the apps </h1>
          </div>
          <p className="font-poppins text-lg">
            Integer luctus dolor rutrum nibh interdum iaculis euismod ante
            conseqt. Proin eget.
          </p>
        </div>
      </section>
    </div>
  );
}
