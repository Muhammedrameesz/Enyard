import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import image from "../../assets/Team/team-skill-member-2-scaled.webp"

const stats = [
  { percentage: 89, title: "Interface Design" },
  { percentage: 76, title: "User Experience" },
  { percentage: 92, title: "Web Development" },
  { percentage: 85, title: "Graphic Design" },
];

export default function OurTeamSkills() {
  return (
    <div className="py-20 font-jakarta bg-[#e4f3f6]">
      {/* Section Header */}
      <section className="flex flex-col justify-center items-center gap-5 text-center">
        <h1 className="text-3xl md:text-4xl text-gray-900 font-semibold">
          Our Team Skills
        </h1>
        <p className="text-gray-600 text-base">
          Duis gravida augue velit eu dignissim felis posuere.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center text-center my-10 px-5 lg:px-10">
        {stats.map((stat, index) => (
          <SkillCard key={index} percentage={stat.percentage} title={stat.title} delay={index * 0.2} />
        ))}
      </section>

      <section className="mt-10 lg:mt-16 px-5">
        <img src={image} alt="" />
      </section>
    </div>
  );
}

// 🔥 Separate Component for Each Skill Card
function SkillCard({ percentage, title, delay }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = percentage / 50; // Adjust for smoothness
      const interval = setInterval(() => {
        start += increment;
        if (start >= percentage) {
          start = percentage;
          clearInterval(interval);
        }
        setCount(Math.floor(start));
      }, 30);

      return () => clearInterval(interval);
    }
  }, [inView, percentage]);

  return (
    <motion.div
      className="p-6 bg-gray-800  rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay }}
      onViewportEnter={() => setInView(true)} 
      onViewportLeave={() => setInView(false)} 
    >
      <motion.h1 className="text-4xl font-semibold text-white">
        {count}%
      </motion.h1>
      <h2 className="text-base font-medium text-gray-300 mt-2">{title}</h2>
    </motion.div>
  );
}
