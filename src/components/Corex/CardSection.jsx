import {
  FaObjectGroup,
  FaPlayCircle,
  FaChartBar,
  FaChartLine,
} from "react-icons/fa";
import Anim from "../../ui/TextAnimation/Anim.jsx";
import AnimRL from "../../ui/TextAnimation/AnimRL.jsx";

const features = [
  {
    icon: <FaPlayCircle className="text-red-500 text-4xl  " />,
    name: "Automation",
    description:
      "Routine activities like billing and stock management are done automatically. This minimizes mistakes and improves overall work speed.",
  },
  {
    icon: <FaChartBar className="text-purple-500 text-4xl " />,
    name: "Real-Time Reporting",
    description:
      "We provide up-to-the-minute views of business performance through visual dashboards. This helps in making quicker and smarter strategic decisions.",
  },
  {
    icon: <FaChartLine className="text-yellow-500 text-4xl " />,
    name: "Scalability",
    description:
      "CoreX can easily grow with your business. They can handle more users, new features, and increased operational complexity as needed.",
  },
];

export default function CardSection() {
  return (
    <div className="font-jakarta py-10 bg-white space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-3  px-6 md:px-10 mx-auto max-w-6xl gap-7  ">
        <section
          className="flex flex-col justify-center items-center text-center gap-5 col-span-1 md:col-span-2 
        bg-gradient-to-br from-customBlue via-customBlue to-mediumCustomBlue py-16  text-white rounded-3xl"
        >
          <Anim>
            <h1 className="text-transparent uppercase bg-clip-text bg-gradient-to-tr text-lg font-semibold from-orange-500 to-white">
              Mange Your Entire Business
            </h1>
            <h1 className="text-4xl font-semibold">
              Limitless Solutions, ONE Platform
            </h1>
            <h1 className="text-4xl font-bold"> CoreX Business Suit</h1>
          </Anim>
        </section>

        <section className="flex flex-col justify-center bg-white shadow-custom rounded-3xl space-y-5 p-8">
          <Anim>
          <div className="flex gap-5 items-center  ">
            <FaObjectGroup className="text-4xl text-green-500" />
            <h1 className="text-xl font-semibold text-gray-900">Integration</h1>
          </div>
          <h1 className="text-base font-medium text-gray-500">
            CoreX ERP systems consolidate core business operations, facilitating
            a smooth exchange of information between departments. This leads to
            better teamwork and more informed managerial choices.
          </h1>
          </Anim>
          <div className="bg-gray-100 h-[1px] w-[100%]" />
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-10 mx-auto max-w-6xl gap-7 ">
        {features.map((item, i) => (
          <section
            key={i}
            className="flex flex-col justify-center bg-white shadow-custom rounded-3xl space-y-5 p-8"
          >
            <AnimRL>
              <div className="flex items-center gap-5  ">
                <div className="">{item.icon}</div>
                <h1 className="text-xl font-semibold text-gray-900">
                  {item.name}{" "}
                </h1>
              </div>
            </AnimRL>
            <AnimRL>
              <h1 className="text-base font-medium text-gray-500">
                {item.description}
              </h1>
            </AnimRL>
            <div className="bg-gray-200 h-[1px] w-[100%]" />
          </section>
        ))}
      </div>
    </div>
  );
}
