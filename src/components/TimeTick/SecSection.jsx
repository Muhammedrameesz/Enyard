import {
  AiOutlineCloud,
  AiOutlineGlobal,
  AiOutlineClockCircle,
  AiOutlineCheckCircle,
  AiOutlineCalculator,
  AiOutlineSafetyCertificate,
  AiOutlineBarChart,
  AiOutlineCalendar,
  AiOutlineLaptop,
  AiOutlineLink,
  AiOutlineAudit,
  AiOutlineDatabase,
} from "react-icons/ai";

export default function SecSection() {
  const features = [
    {
      title: "Anywhere, Anytime Access",
      description:
        "Unleash the power of real-time attendance management from any corner of the globe.",
      icon: <AiOutlineCloud />,
    },
    {
      title: "Global Collaboration",
      description:
        "Break down borders and unite teams worldwide with a cloud hub for attendance harmony.",
      icon: <AiOutlineGlobal />,
    },
    {
      title: "Time Savings",
      description:
        "Automation reduces the time spent on manual attendance tracking, allowing employees and managers to focus on more strategic tasks.",
      icon: <AiOutlineClockCircle />,
    },
    {
      title: "Accuracy",
      description:
        "Minimize errors associated with manual recording, calculation, and interpretation of attendance data, ensuring precision in payroll and compliance.",
      icon: <AiOutlineCheckCircle />,
    },
    {
      title: "Efficient Payroll Processing",
      description:
        "Streamline payroll by automating time calculations, ensuring accurate compensation based on worked hours and overtime.",
      icon: <AiOutlineCalculator />,
    },
    {
      title: "Compliance Assurance",
      description:
        "Maintain compliance with labour laws and organizational policies, reducing the risk of errors and penalties associated with non-compliance.",
      icon: <AiOutlineSafetyCertificate />,
    },
    {
      title: "Customized Reporting",
      description:
        "Generate detailed reports on attendance trends, helping management identify patterns and make data-driven decisions.",
      icon: <AiOutlineBarChart />,
    },
    {
      title: "Leave Management",
      description:
        "Simplify and streamline the leave request and approval process, ensuring accurate tracking of employees' time off.",
      icon: <AiOutlineCalendar />,
    },
    {
      title: "Remote Work Support",
      description:
        "With advanced features, support remote work scenarios by allowing employees to log their working hours, even when working off-site.",
      icon: <AiOutlineLaptop />,
    },
    {
      title: "Integration Capability",
      description:
        "Integrate seamlessly with other HR and organizational systems, creating a cohesive and interconnected workflow.",
      icon: <AiOutlineLink />,
    },
    {
      title: "Approval Workflow",
      description:
        "A structured workflow for managers to review and approve leave requests, ensuring efficient decision-making.",
      icon: <AiOutlineAudit />,
    },
    {
      title: "Leave Balances",
      description:
        "Real-time tracking of employees' leave balances, providing visibility into accrued, used, and remaining leave.",
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
          Unlocking The Benefits Of TimeTick For Employees
        </h1>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-10 mx-auto max-w-6xl gap-8">
        {features?.map((item, i) => (
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
            <h1 className="text-lg font-semibold">{item.title}</h1>
            <p className="text-sm text-gray-600 font-medium">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
