import Image from "../../assets/AboutImages/image-section-2-2.webp";
import { motion } from "framer-motion";

export default function ExprtiseSection() {
  const progressData = [
    { title: "API Run Time", percentage: 98 },
    { title: "Remote Control", percentage: 71 },
    { title: "Update Notification", percentage: 83 },
  ];
  return (
    <div className="font-jakarta py-10 bg-[#fffaf3]">
      <section className="grid grid-cols-1 md:grid-cols-2 p-10 px-6 md:px-10 mx-auto gap-10 lg:gap-16">
        <div>
          <img src={Image} alt="imageSection" />
        </div>

        <div className="flex flex-col gap-5 ">
          <h1 className="text-red-500 text-base font-semibold">
            Always We Focused Our Skill
          </h1>
          <h1 className="text-gray-900 text-3xl md:text-4xl font-semibold">
            Know Our Expert Team They Develop Data Encrypted
          </h1>
          <p className="text-gray-700">
            Suspendisse sed lacus ornare pretium neque nec ornare lacus. In non
            eros augue dapibus quam Maecenas lacini varius convall.
          </p>
          <div className="p-6">
          {progressData.map((item, index) => (
            <div key={index} className="mb-10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-base  text-gray-950">
                  {item.title}
                </span>
                <span className="text-base text-gray-950">
                  {item.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-1 relative overflow-hidden">
                <motion.div
                  className="h-1 bg-red-500 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${item.percentage}%` }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </div>
            </div>
          ))}
        </div>
        </div>

       
      </section>
    </div>
  );
}
