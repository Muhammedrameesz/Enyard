import image from "../../assets/TimeTickImages/spotlight-@2x-2-1-scaled.jpg";
import image1 from "../../assets/TimeTickImages/image01.webp";
import image2 from "../../assets/TimeTickImages/image02.webp";
import image3 from "../../assets/TimeTickImages/image03.webp";
import { MdArrowRightAlt } from "react-icons/md";

export default function SquareCards() {
  const contents = [
    {
      title: "Risk Assesments",
      subtitle: "Business Solutions",
      image: image1,
    },
    {
      title: "Risk Analytics",
      subtitle: "Financial Planning",
      image: image2,
    },
    {
      title: "Key Risk Indicators",
      subtitle: "Software Research",
      image: image3,
    },
  ];
  return (
    <div className="py-20 font-jakarta relative">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover -z-10"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="flex flex-col justify-center items-center text-center gap-2 px-6 md:px-10 mx-auto max-w-4xl mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Gain A{" "}
          <span className="relative inline-block">
            Comprehensive
            <svg
              className="absolute left-1/3 transform -translate-x-1/2 -bottom-2 w-full"
              width="120"
              height="20"
              viewBox="0 0 120 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 15 C50 30, 150 -5, 200 15"
                stroke="#7d80e6"
                strokeWidth="4"
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
          </span>{" "}
          View Of Real
        </h1>
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Time Data From The Field
        </h1>
        <p className="text-center text-base text-gray-600 font-medium ">
          Perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-10 mx-auto  gap-6">
        {contents?.map((item, i) => (
          <div key={i} className="relative w-full group cursor-pointer">
            <img src={item.image} alt="image" className="w-full h-auto" />
            <div
              className={`absolute bottom-0 w-[85%]  
                ${
                  i < 2
                    ? "bg-white group-hover:bg-green-600 transition-colors duration-300"
                    : "bg-green-600"
                }
                `}
            >
              <section className="flex justify-between items-center px-5 py-3">
                <div>
                  <h1
                    className={`font-semibold text-lg mb-1 
                    ${
                      i < 2
                        ? "text-gray-900 group-hover:text-white transition-colors duration-300"
                        : "text-white"
                    }
                    `}
                  >
                    {item.title}
                  </h1>
                  <h1
                    className={`text-gray-600 font-medium
                    ${
                      i < 2 
                        ? "text-gray-600 group-hover:text-gray-50 transition-colors duration-300"
                        : "text-gray-50"
                    }  
                    `}
                  >
                    {item.subtitle}
                  </h1>
                </div>
                <h1
                  className={`text-4xl ${
                    i < 2
                      ? "text-green-600 group-hover:text-white transition-colors duration-300"
                      : "text-white"
                  }`}
                >
                  <MdArrowRightAlt />
                </h1>
              </section>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
