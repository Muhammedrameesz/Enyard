import { motion } from "framer-motion";
import Email from "../../assets/dummyLogo/email.svg";
import Github from "../../assets/dummyLogo/github.svg";
import Gcalender from "../../assets/dummyLogo/googleCalendar.svg";
import Tableau from "../../assets/dummyLogo/image_88.svg";
import Outlook from "../../assets/dummyLogo/outlook.svg";
import Slack from "../../assets/dummyLogo/slack.svg";
import Stripe from "../../assets/dummyLogo/stripe.svg";

import AnimatedButton from "../../ui/AnimatedButton";

export default function PartnersQuick() {
  const text = "View all";
  const partners = [
    { id: 1, img: Email, name: "Email" },
    { id: 2, img: Github, name: "GitHub" },
    { id: 3, img: Gcalender, name: "Google Calendar" },
    { id: 4, img: Tableau, name: "Tableau" },
    { id: 5, img: Outlook, name: "Outlook" },
    { id: 6, img: Slack, name: "Slack" },
    { id: 7, img: Stripe, name: "Stripe" }
  ];

  return (
    <div className="bg-white py-16 font-jakarta text-gray-950">
      <main className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-10 mx-auto max-w-7xl gap-10 md:gap-16 items-center">
        {/* Left Section */}
        <section className="space-y-7 col-span-1">
          <h1 className="font-semibold text-4xl md:text-5xl">
            Meet our Integration Partners
          </h1>
          <p className="text-gray-600 font-medium max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            blanditiis. Nemo esse nam fuga sit aut sunt optio totam officia
            ducimus earum velit consectetur quibusdam, ea ab repellat suscipit?
            Fuga!
          </p>
          <AnimatedButton text={text} />
        </section>

        {/* Carousel Section */}
        <div className="overflow-hidden col-span-2 space-y-10">

                {/* 1st RAw */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: ["-100%", "0%"]
            }}
            transition={{
              duration: 12,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {/* Duplicate items for smooth looping */}
            {[...partners, ...partners,...partners].map((partner, index) => (
              <div
                key={index}
                className="rounded-3xl flex bg-gray-100 items-center justify-center w-fit px-8 py-1"
              >
                <img src={partner.img} alt={partner.name} className="w-8 h-8"/>
                <div className="ml-3">
                  <h1 className="text-gray-900 font-medium">{partner.name}</h1>
                
                </div>
              </div>
            ))}
          </motion.div>
             

             {/* 2n Raw */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: ["0%", "-100%"]
            }}
            transition={{
              duration: 12,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {/* Duplicate items for smooth looping */}
            {[...partners, ...partners,...partners].map((partner, index) => (
              <div
                key={index}
                className="rounded-3xl flex bg-gray-100 items-center justify-center w-fit px-8 py-1"
              >
                <img src={partner.img} alt={partner.name} className="w-8 h-8"/>
                <div className="ml-3">
                  <h1 className="text-gray-900 font-medium">{partner.name}</h1>
                
                </div>
              </div>
            ))}
          </motion.div>
                

                {/* 3rd ROW */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: ["-100%", "0%"]
            }}
            transition={{
              duration: 12,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {/* Duplicate items for smooth looping */}
            {[...partners, ...partners,...partners].map((partner, index) => (
              <div
                key={index}
                className="rounded-3xl flex bg-gray-100 items-center justify-center w-fit px-8 py-1"
              >
                <img src={partner.img} alt={partner.name} className="w-8 h-8"/>
                <div className="ml-3">
                  <h1 className="text-gray-900 font-medium">{partner.name}</h1>
                
                </div>
              </div>
            ))}
          </motion.div>


        </div>
      </main>
    </div>
  );
}
