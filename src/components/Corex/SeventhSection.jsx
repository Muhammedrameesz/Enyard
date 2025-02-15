export default function SeventhSection() {
  const sectionsData = [
    {
      title: "Innovative Solutions for Modern Businesses",
      subheading: "Title",
      description:
        "We provide cutting-edge IT solutions tailored to meet the needs of businesses in a digital era. Our expertise ensures efficiency, scalability, and innovation.",
      image:
        "https://apptek.radiantthemes.com/wp-content/uploads/2022/10/10-1-768x458.webp", // Replace with actual image path
    },
    {
      title: "Seamless Integration & Performance",
      subheading: "Title",
      description:
        "Our services are designed to integrate seamlessly with your existing infrastructure while enhancing overall performance and security.",
      image:
        "https://apptek.radiantthemes.com/wp-content/uploads/2022/10/12-1-768x458.webp", // Replace with actual image path
    },
    {
      title: "Future-Proof Your Business",
      subheading: "Title",
      description:
        "Leverage our advanced technological solutions to future-proof your business and stay ahead in an ever-evolving market.Our services are designed to integrate seamlessly with your existing infrastructure ",
      image:
        "https://apptek.radiantthemes.com/wp-content/uploads/2022/10/6-3-768x458.webp", // Replace with actual image path
    },
  ];

  return (
    <div className="py-16 font-jakarta text-gray-950 bg-gray-100">
      <section className="space-y-6 text-center max-w-4xl mx-auto px-6 md:px-0 mb-10">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-snug">
          Hyper-Manage Operations With{" "}
          <span className="font-bold text-red-500">Rich Analytics</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facilis
          mollitia tempore saepe enim corporis odit, quisquam sapiente dolorem,
          iste harum, quis magni reiciendis inventore quos odio voluptatibus
          assumenda quod.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10 mx-auto max-w-7xl">
        {sectionsData.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform  hover:shadow-2xl"
          >
            {/* Image Section */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            {/* Content Section */}
            <div className="p-6 space-y-4">
              <p className="text-red-500 font-medium uppercase tracking-wide">
                {item.subheading}
              </p>
              <h1 className="text-gray-900 text-xl font-semibold">
                {item.title}
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Divider Line */}
              <div className="w-full h-[1px] bg-gray-400 rounded-md"></div>

              {/* Button */}
              <button className="mt-4 px-5 py-2 text-white bg-gray-900 hover:bg-gray-950 transition-all rounded-full text-sm font-medium">
                Know More
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
