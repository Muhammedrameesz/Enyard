import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { motion } from "framer-motion";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import Anim from "../../ui/TextAnimation/Anim.jsx"
import AnimRL from "../../ui/TextAnimation/AnimRL.jsx"

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(2, "Must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(2, "Must be at least 2 characters"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen py-10  font-jakarta">
      <div className="fixed inset-0 w-full h-full bg-[#f0f7f9] -z-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mx-auto px-6 md:px-6 max-w-6xl">

        <Anim>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-10 rounded-3xl shadow-md flex flex-col gap-4  "
        >
          <div className="flex flex-col gap-2 mb-2">
            <h2 className="text-3xl font-semibold ">Need Any Help?</h2>
            <p className="text-sm font-medium text-gray-500">
              {" "}
              Please fill out the form below and we&apos;ll get back to you as
              soon as possible.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <label className="form-control w-full md:w-1/2">
              <span className="label-text font-medium mb-2">First Name</span>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full"
                {...register("firstName")}
              />
              <span className="text-red-500 text-sm">
                {errors.firstName?.message}
              </span>
            </label>

            <label className="form-control w-full md:w-1/2">
              <span className="label-text font-medium mb-2">Last Name</span>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full"
                {...register("lastName")}
              />
              <span className="text-red-500 text-sm">
                {errors.lastName?.message}
              </span>
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-3">
            <label className="form-control w-full md:w-1/2">
              <span className="label-text font-medium mb-2">Email</span>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                {...register("email")}
              />
              <span className="text-red-500 text-sm">
                {errors.email?.message}
              </span>
            </label>

            <label className="form-control w-full md:w-1/2">
              <span className="label-text font-medium mb-2">Phone</span>
              <input
                type="text"
                placeholder="Your Phone"
                className="input input-bordered w-full"
                {...register("phone")}
              />
              <span className="text-red-500 text-sm">
                {errors.phone?.message}
              </span>
            </label>
          </div>

          <label className="form-control w-full mt-3">
            <span className="label-text font-medium mb-2">Message</span>
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full textarea-lg"
              {...register("message")}
            />
            <span className="text-red-500 text-sm">
              {errors.message?.message}
            </span>
          </label>

          <motion.button
            type="submit"
            className="btn relative overflow-hidden bg-[#0e1552] text-white hover:bg-[#0e1552] transition-colors duration-300 w-full mt-4"
            whileHover="hover"
          >
            <motion.span
              className="absolute text-base inset-0 flex items-center justify-center w-full h-full"
              initial={{ x: 0, opacity: 1 }} // Initially visible
              animate={{ y: "0%" }}
              variants={{
                hover: {
                  y: ["0%", "70%", "-70%", "0%"],
                  opacity: [1, 0, 0, 1],
                  transition: {
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                },
              }}
            >
              Submit
            </motion.span>
          </motion.button>
          <h1 className="text-sm text-center">
            How to take our service? visit{" "}
            <span className="text-blue-500 cursor-pointer font-medium">
              Terms & Conditions
            </span>{" "}
            page.
          </h1>
        </form>
        </Anim>

        <AnimRL>
        <div className="flex flex-col space-y-5 justify-center">
          <p className="text-red-500 font-medium">Contact Us</p>
          <h1 className="text-4xl font-semibold text-gray-900">
            Get In Touch With Us
          </h1>
          <p className="text-gray-500 font-medium text-sm max-w-lg ">
            We&apos;re always happy to hear from you. You can also reach us through
            the following platforms.
          </p>

          <div className="space-y-4 pt-6">
            <div className="flex items-center space-x-3">
              <MdOutlineMailOutline className="bg-white shadow-md rounded-full p-2 text-4xl text-blue-500" />
              <span className="text-sm font-medium">Email Now:</span>
              <a
                href="mailto:example@gmail.com"
                className="text-blue-500 text-sm font-medium"
              >
                example@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <CiInstagram className="bg-white shadow-md rounded-full p-2 text-4xl text-pink-500" />
              <span className="text-sm font-medium">Follow us:</span>
              <a
                href="mailto:example@gmail.com"
                className="text-blue-500 text-sm font-medium"
              >
                example@instagram.com
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <CiTwitter className="bg-white shadow-md rounded-full p-2 text-4xl text-black" />
              <span className="text-sm font-medium">Tweet us:</span>
              <a
                href="mailto:example@gmail.com"
                className="text-blue-500 text-sm font-medium"
              >
                example@x.com
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <LuPhoneCall className="bg-white shadow-md rounded-full p-2 text-4xl text-green-500" />
              <span className="text-sm font-medium">Call Us:</span>
              <a
                href="tel:+1234567890"
                className="text-blue-500 text-sm font-medium"
              >
                +123 456 7890
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <GrLocation className="bg-white shadow-md rounded-full p-2 text-4xl text-red-500" />
              <span className="text-sm font-medium">Visit Us:</span>
              <p className="text-blue-500 text-sm font-medium">
                123 Main Street, City, Country
              </p>
            </div>
          </div>
        </div>
        </AnimRL>


      </div>
    </div>
  );
}
