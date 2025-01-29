import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Image1 from "../../assets/AboutImages/smart-phone-app.webp";
import Bg from "../../assets/AboutImages/Section-bg-1.webp";

export default function ExperienceSection() {
  return (
    <div className="font-jakarta py-10 bg-white relative">
      <div
        className="absolute inset-0 bg-no-repeat bg-center w-full h-full bg-cover z-0"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-16  p-10 ">
        <div className="flex flex-col gap-8 justify-center text-white z-10">
          <h1 className="text-base  font-medium">App Installation</h1>
          <h1 className="text-3xl md:text-4xl font-semibold">
            This App Is
            <span className="underline"> Available</span> For Your Smart Phone
          </h1>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            ipsa molestias rerum repellendus voluptatem sit quidem, voluptas id
            doloribus omnis esse molestiae provident veniam veritatis sunt
            voluptatum? Tempore, nisi veritatis.
          </p>

          {/* Store Buttons */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Google Play Store Button */}
            <div className="flex items-center justify-center p-2 px-4 bg-gray-900 gap-2 text-white cursor-pointer rounded-full shadow-md">
              <h1 className="text-3xl">
                <IoLogoGooglePlaystore />
              </h1>
              <div>
                <p className="text-xs text-gray-200">Available on the</p>
                <h1 className="text-base">Google Play</h1>
              </div>
            </div>

            {/* Apple App Store Button */}
            <div className="flex items-center justify-center gap-2 bg-gray-900 text-white cursor-pointer p-2 px-4 rounded-full shadow-md">
              <h1 className="text-4xl">
                <FaApple />
              </h1>
              <div>
                <p className="text-xs text-gray-200">Downloaded on the</p>
                <h1 className="text-lg">App Store</h1>
              </div>
            </div>
          </section>
          <p className="font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Image Section */}
        <div className="z-10">
          <img src={Image1} alt="smartphone" className="w-full h-auto transform hover:-translate-y-2 transition-transform duration-300" />
        </div>
      </section>
    </div>
  );
}
