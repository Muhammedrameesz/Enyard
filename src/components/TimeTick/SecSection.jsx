import {
  AiOutlineCloud,
  AiOutlineGlobal,
  AiOutlineCalculator,
  AiOutlineSafetyCertificate,
  AiOutlineBarChart,
  AiOutlineLink,
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineCheckCircle,
  AiOutlineAudit,
  AiOutlineLaptop,
  AiOutlineDatabase,
} from "react-icons/ai";

import Anim from "../../ui/TextAnimation/Anim.jsx"

export default function SecSection() {
  const features = [
    {
      title: "Instant Access, Anywhere",
      description: "Manage attendance in real-time from any location globally.",
      icon: <AiOutlineCloud />,
    },
    {
      title: "Collaboration",
      description: "Connect and unify teams worldwide through a centralized attendance platform.",
      icon: <AiOutlineGlobal />,
    },
    {
      title: "Easy Payroll Process",
      description: "Streamline payroll by automating time calculations for accurate compensation.",
      icon: <AiOutlineCalculator />,
    },
    {
      title: "Compliance Assurance",
      description: "Ensure adherence to labor laws and company policies, minimizing risks and penalties.",
      icon: <AiOutlineSafetyCertificate />,
    },
    {
      title: "Customized Reporting",
      description: "Gain insights into attendance patterns with detailed reports, enabling data-driven management decisions.",
      icon: <AiOutlineBarChart />,
    },
    {
      title: "Integration",
      description: "Seamlessly connect with existing HR and organizational systems for a unified workflow.",
      icon: <AiOutlineLink />,
    },
    {
      title: "Time Savings",
      description: "Automate attendance tracking, freeing up time for more strategic tasks.",
      icon: <AiOutlineClockCircle />,
    },
    {
      title: "Efficient Leave Management",
      description: "Streamline leave requests and approvals for accurate time-off tracking.",
      icon: <AiOutlineCalendar />,
    },
    {
      title: "Accuracy",
      description: "Eliminate errors from manual recording and calculation, ensuring precise payroll and compliance.",
      icon: <AiOutlineCheckCircle />,
    },
    {
      title: "Approval Workflow",
      description: "Implement a structured approval process for efficient leave request management.",
      icon: <AiOutlineAudit />,
    },
    {
      title: "Remote Work Support",
      description: "Empower remote employees to log their hours, facilitating flexible work arrangements.",
      icon: <AiOutlineLaptop />,
    },
    {
      title: "Leave Balances",
      description: "Provide real-time visibility into accrued, used, and remaining leave balances.",
      icon: <AiOutlineDatabase />,
    },
  ];
  const iconColors = [
    "text-blue-500",
    "text-green-500",
    "text-red-500",
    "text-yellow-500",
    "text-purple-500",
    "text-pink-500",
    "text-indigo-500",
    "text-teal-500",
    "text-orange-500",
    "text-cyan-500",
    "text-gray-500",
    "text-lime-500",
  ];

  return (
    <div className="py-10 pb-20 font-jakarta bg-white">
      <div className="flex flex-col justify-center items-center text-center mb-10 md:mb-16">
        <h1 className="font-semibold text-3xl md:text-4xl max-w-md text-gray-900">
        Enhancing Employee Efficiency
        </h1>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-10 mx-auto max-w-6xl gap-8">
        {features?.map((item, i) => (
          <Anim key={i} delay={i*0.2}>
          <div
            key={i}
            className={`flex flex-col gap-4 h-[230px] p-4 bg-white rounded-3xl 
                 ${
                   (i === 1) | (i === 4) | (i === 7) | (i === 10)
                     ? "shadow-custom2"
                     : "hover:shadow-custom2 transition-shadow duration-300"
                 }
                `}
          >
            <h1 className={`${iconColors[i]} text-5xl`}>{item.icon}</h1>
            <h1 className="text-lg font-semibold text-gray-900">{item.title}</h1>
            <p className="text-sm text-gray-600 font-medium">
              {item.description}
            </p>
          </div>
          </Anim>
        ))}
      </section>
    </div>
  );
}
