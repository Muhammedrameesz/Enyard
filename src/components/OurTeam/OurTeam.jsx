import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Team1 from "../../assets/Team/core-team-member-1.webp";
import Team2 from "../../assets/Team/core-team-member-22.webp";
import Team3 from "../../assets/Team/core-team-member-3.webp";
export default function OurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      designation: "Frontend Developer",
      image: Team1,
      social: {
        facebook: "https://facebook.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "UI/UX Designer",
      image: Team2,
      social: {
        facebook: "https://facebook.com/janesmith",
        twitter: "https://twitter.com/janesmith",
        instagram: "https://instagram.com/janesmith",
      },
    },
    {
      id: 3,
      name: "Michael Brown",
      designation: "Backend Developer",
      image: Team3,
      social: {
        facebook: "https://facebook.com/michaelbrown",
        twitter: "https://twitter.com/michaelbrown",
        instagram: "https://instagram.com/michaelbrown",
      },
    },
    {
      id: 4,
      name: "Emily Johnson",
      designation: "Project Manager",
      image: Team2,
      social: {
        facebook: "https://facebook.com/emilyjohnson",
        twitter: "https://twitter.com/emilyjohnson",
        instagram: "https://instagram.com/emilyjohnson",
      },
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="py-16 font-jakarta">
      <div className="flex flex-col justify-center items-center text-center gap-5 mb-7">
        <h1 className="text-red-500 font-medium">Our Employee</h1>
        <h1 className="text-3xl md:text-4xl text-gray-900 font-semibold">Our Core Members</h1>
      </div>
      <div className=" flex justify-center ">
        <div
          className="absolute inset-0 bg-no-repeat bg-center -z-10 bg-cover bg-[#fffaf2]"
          style={{ width: "100%" }}
        />

        <section className="w-full max-w-5xl ">
          <Slider {...settings} className="mx-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="p-2">
                <div
                  className={`flex gap-5 md:gap-10 items-center  shadow-md p-4 rounded-lg min-h-[200px]
                ${member.id === 1 && "bg-red-200"} 
                ${member.id === 2 && "bg-green-200"} 
                ${member.id === 3 && "bg-blue-200"} 
                ${member.id === 4 && "bg-orange-200"}
                `}
                >
                  {/* Increased Image Size & Kept in Column Layout */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full object-cover "
                  />
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg font-semibold mb-1 text-gray-900 ">{member.name}</h3>
                    <p className="text-gray-600 text-sm font-medium">
                      {member.designation}
                    </p>
                    <div className="flex gap-3 mt-5">
                      <a
                        href={member.social.facebook}
                        className="text-blue-600 text-lg bg-white rounded-full p-1"
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="text-blue-400 text-lg bg-white rounded-full p-1"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href={member.social.instagram}
                        className="text-pink-500 text-lg bg-white rounded-full p-1"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </div>
  );
}
