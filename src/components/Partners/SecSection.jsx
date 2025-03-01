import { FaCheckCircle } from "react-icons/fa"; 
import Anim from "../../ui/TextAnimation/Anim.jsx"
import AnimRL from "../../ui/TextAnimation/AnimRL.jsx"


export default function SecSection() {
  const contents = [
    { point: "Lorem ipsum dolor sit amet consectetur adipisicin." },
    { point: "Lorem ipsum dolor sit amet consectetur adipisicin." },
    { point: "Lorem ipsum dolor sit amet consectetur adipisicin." },
    { point: "Lorem ipsum dolor sit amet consectetur adipisicin." },
  ];
  return (
    <div className="bg-white py-16 font-jakarta text-gray-950">
      <main className=" grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 mx-auto max-w-7xl gap-5 md:gap-10  items-center">
            
            <Anim>
        <section className="space-y-7">

          <h1 className="font-semibold text-4xl md:text-5xl ">Heading</h1>
          <p className="text-gray-600 font-medium max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            architecto nemo maxime dolor laboriosam. Facilis quae velit expedita
            voluptatem enim delectus, animi vel! Aspernatur iste magnam
            dignissimos nobis debitis vitae?
          </p>

          <div className="space-y-5">
           {contents.map((item,i)=>(
            <div key={i} className="flex items-center gap-3">
                <FaCheckCircle className="text-lg text-purple-600"/>
              <h1 className="text-lg font-medium text-gray-600">{item.point}</h1>
            </div>
           ))}
          </div>
        </section>
        </Anim>
        
        <AnimRL>
        <section className="w-full">
            <img src="https://www.airtable.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl95ljfippl8%2F3OFDJYRVdmQhtUQFuGaaCJ%2Fb896327195792eb83f8445f7d39feafe%2FPartner_1_2560x1920.png%3Ffm%3Dwebp&w=1920&q=75" alt="image" 
             className="h-[90%] w-[90%]  rounded-3xl"
            />
        </section>
        </AnimRL>
      </main>
    </div>
  );
}
