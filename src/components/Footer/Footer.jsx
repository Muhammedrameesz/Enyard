import EnyardLogo from "../../assets/images/Enyard new.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import FooterBg from "../../assets/images/Footer-Bg-1-1.webp";
import {useNavigate} from "react-router-dom"

const Footer = () => {
    const navigate = useNavigate()
  return (
    <footer className="py-10  px-5 font-jakarta  relative w-full h-full">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover border -z-10 rotate-180 "
        style={{
          backgroundImage: `url(${FooterBg})`,
        }}
      ></div>

      <div className="container  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* First Column */}
        <div className="flex flex-col gap-5">
          <img onClick={()=>navigate("/")} src={EnyardLogo} alt="Company Logo" className="w-40 cursor-pointer" />
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum.
          </p>
          <div className="flex items-center gap-5">
            <div className="p-2 border-dashed border-2 border-red-500 rounded-full cursor-pointer">
              <FaFacebookF className="text-red-500" size={16} />
            </div>
            <div className="p-2 border-dashed border-2 border-red-500 rounded-full cursor-pointer">
              <FaInstagram className="text-red-500" size={16} />
            </div>
            <div className="p-2 border-dashed border-2 border-red-500 rounded-full cursor-pointer">
              <FaTwitter className="text-red-500" size={16} />
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Support</h2>
          <ul className="text-gray-600 space-y-2">
            <li>Forum Support</li>
            <li>Service</li>
            <li>Contact Us</li>
            <li>Pricing & Plans</li>
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Important
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>About Us</li>
            <li>Installation Process</li>
            <li>My Account</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <div className="flex items-center gap-3 mb-4">
            <FiPhone className="text-red-500" size={20} />
            <span className="text-gray-600">+123 456 7890</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <FiMail className="text-red-500" size={20} />
            <span className="text-gray-600">info@example.com</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t pt-5 text-center text-gray-600">
        <p>
          &copy;2025 Enyard. All Rights Reserved.{" "}
          <a href="/privacy-policy" className="text-red-500">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
