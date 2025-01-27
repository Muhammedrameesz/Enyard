import Client from "../../assets/AboutImages/image-section-1-3.webp";
import Vector from "../../assets/AboutImages/Vector-629.png";
import Mask from "../../assets/AboutImages/Mask-group-pvk8c5osuzhwixqikf35jh3wvdzmur0tdbvmwxdgs8.png";

export default function ReviewSection() {
  return (
    <div className="font-jakarta py-10 pb-16 bg-white">
      <section className="grid grid-cols-1 md:grid-cols-2 mx-auto px-6 md:px-10 relative">
        <img src={Vector} alt="" className="absolute -left-36 -bottom-20 w-[600px] h-[300px] overflow-x-hidden" />
        <img src={Client} alt="clients" className="w-full h-full" />
        <div className="bg-[#060a33] rounded-br-3xl rounded-tr-3xl p-10 md:p-20">
          <h1 className=" text-white mb-10">
            “ Nulla ultrices, dui id sollicitudin pretium, lacus mi maximus
            velit et vulputate justo elit id purus. In iaculis vitae enim id
            dictum. Curabitur hendrerit facilisis erat eget molestie.
            Suspendisse in enim iaculis, mollis dolor ac, molestie arcu. ”
          </h1>
          <img src={Mask} alt="avatar" className="w-16 h-16 " />
          <div className="flex flex-col gap-3 mt-3 text-white">
            <h1 className="text-lg font-semibold">Jean D. Earnhardt </h1>
            <p className="text-sm">CEO & Founder</p>
          </div>
        </div>
      </section>
    </div>
  );
}
