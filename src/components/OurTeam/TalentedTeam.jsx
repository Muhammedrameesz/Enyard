import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import image1 from "../../assets/Team/team-member-1.webp";
import image2 from "../../assets/Team/team-member-2.webp";
import image3 from "../../assets/Team/team-member-3.webp";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { IoShareSocialOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function TalentedTeam() {
  const teamMembers = [
    {
      id: 1,
      image: image1,
      name: "John Doe",
      designation: "Full Stack Developer",
      contact: "+1 234 567 890",
      email: "nfo@example.com",
      des: "Mauris scelerisque ullamcorper pur. Sed aliquam eget erat ultrices.",
      social: {
        facebook: "https://facebook.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        twitter: "https://twitter.com/johndoe",
      },
      knowledge: [
        { skill: "React.js", proficiency: "90%" },
        { skill: "Node.js", proficiency: "85%" },
        { skill: "MongoDB", proficiency: "80%" },
      ],
    },
    {
      id: 2,
      image: image2,
      name: "Jane Smith",
      designation: "UI/UX Designer",
      contact: "+1 987 654 321",
      email: "nfo@example.com",
      des: "Mauris scelerisque ullamcorper pur. Sed aliquam eget erat ultrices.",
      social: {
        facebook: "https://facebook.com/janesmith",
        instagram: "https://instagram.com/janesmith",
        twitter: "https://twitter.com/janesmith",
      },
      knowledge: [
        { skill: "Figma", proficiency: "95%" },
        { skill: "Adobe XD", proficiency: "85%" },
        { skill: "CSS Animations", proficiency: "80%" },
      ],
    },
    {
      id: 3,
      image: image3,
      name: "Mike Johnson",
      designation: "Backend Engineer",
      contact: "+1 456 789 012",
      email: "nfo@example.com",
      des: "Mauris scelerisque ullamcorper pur. Sed aliquam eget erat ultrices.",
      social: {
        facebook: "https://facebook.com/mikejohnson",
        instagram: "https://instagram.com/mikejohnson",
        twitter: "https://twitter.com/mikejohnson",
      },
      knowledge: [
        { skill: "Express.js", proficiency: "88%" },
        { skill: "PostgreSQL", proficiency: "75%" },
        { skill: "Docker", proficiency: "70%" },
      ],
    },
  ];

  return (
    <div className="font-jakarta bg-[#fffaf2] py-10">
      <div className="px-6 lg:px-10 mx-auto flex flex-col gap-6 mb-8">
        {/* Heading Section */}
        <div className="relative inline-block text-left">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900">
            Talented{" "}
            <span className="relative">
              Team
              {/* SVG Underline - Inverted and Left-Aligned */}
              <svg
                className="absolute -left-5 -bottom-2"
                width="120"
                height="15"
                viewBox="0 0 120 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15 C40 -5, 90 -5, 125 15" // Inverted Curve
                  stroke="#ff5f55"
                  strokeWidth="3"
                  strokeLinecap="round"
                    fill="none"
                />
              </svg>
            </span>{" "}
            Members
          </h1>
        </div>

        {/* Subheading */}
        <h1 className="text-base text-gray-600 max-w-lg">
          Duis gravida augue velit dignism felis pose quis.
        </h1>
      </div>

      <section className="flex flex-col gap-10 px-6 md:px-10 mx-auto ">
        {teamMembers.map((item) => (
          <div
            key={item.id}
            className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center bg-white gap-5 p-5 rounded-3xl"
          >
            <img src={item.image} alt="" className="w-[180px] " />
            <section className="flex flex-col gap-3 text-gray-600">
              <h1 className="text-2xl font-semibold text-gray-900">
                {item.name}
              </h1>
              <h1>{item.designation}</h1>
              <h1>{item.des}</h1>
            </section>

            <section className="flex flex-col  gap-5">
              <h1 className="flex items-center  gap-2">
                <span className="text-2xl text-red-400">
                  <MdOutlinePhoneInTalk />
                </span>
                <span className="text-sm font-medium ">Call Now:</span>
                <span className="ml-1 text-sm text-gray-600">
                  {item.contact}
                </span>
              </h1>

              <h1 className="flex items-center gap-2">
                <span className="text-xl text-red-400">
                  <TfiEmail />
                </span>
                <span className="text-sm font-medium ">Mail Now:</span>
                <span className="ml-1 text-sm text-gray-600">{item.email}</span>
              </h1>

              <h1 className="flex items-center  gap-2">
                <span className="text-2xl text-red-400">
                  <IoShareSocialOutline />
                </span>
                <span className="text-base font-medium ">Follow us:</span>
                <div className="flex gap-3 ml-1 text-red-500">
                  <a href={item.social.facebook}>
                    <FaFacebookF />
                  </a>
                  <a href={item.social.instagram}>
                    <FaInstagram />
                  </a>
                  <a href={item.social.twitter}>
                    <FaTwitter />
                  </a>
                </div>
              </h1>
            </section>

            <section className="flex flex-col gap-5">
              {item.knowledge.map((data, i) => (
                <div key={i}>
                  {/* Skill and Percentage in a row */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-start text-sm font-medium">
                      {data.skill}
                    </span>
                    <span className="text-end text-sm font-medium">
                      {data.proficiency}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: data.proficiency }}
                      transition={{
                        duration: 0.9,
                        ease: "easeInOut",
                      }}
                      className="bg-red-500 h-1 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}
