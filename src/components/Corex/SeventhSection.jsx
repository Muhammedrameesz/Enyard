import Anim from "../../ui/TextAnimation/Anim.jsx"

export default function SeventhSection() {
  const sectionsData = [
    {
      title: "Seamless Integration & Performance",
      subheading: "Title",
      description:
        "CoreX seamlessly integrates with a wide range of third-party applications and systems, eliminating manual data entry and minimizing the potential for errors.  From accounting software and CRM platforms to e-commerce solutions and other essential business tools, CoreX streamlines your workflows and maintains consistent data across all platforms.",
      image:
        "https://img.freepik.com/free-vector/isometric-devops-illustration_52683-84175.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    },

    {
      title: "Expert Data Analytics",
      subheading: "Title",
      description:
        "CoreX equips you with robust analytics and reporting tools, providing a comprehensive understanding of your business performance.  Interactive dashboards and customizable reports offer valuable insights into key metrics, including sales trends, inventory levels, customer behavior, and financial performance. This data-driven approach empowers you to make informed decisions and optimize your operations for maximum efficiency.",
      image:
        "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241211.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    },
    {
      title: "Robust Security",
      subheading: "Title",
      description:
        "CoreX ERP prioritizes robust security.  Built on a secure, cloud-based architecture, CoreX leverages the power and reliability of Amazon AWS for its hosting.  This ensures high availability and data protection through advanced security measures, including encryption, access controls, and regular security audits.  Your business data is safe and accessible within CoreX's secure environment.",
      image:
        "https://img.freepik.com/free-vector/wireframe-chain-with-digital-code-lock-blockchain-cyber-security-safe-privacy-concept_127544-953.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    },
  ];

  return (
    <div className="py-16 font-jakarta text-gray-950 bg-gray-100">
      <Anim>
      <section className="space-y-6 text-center max-w-4xl mx-auto px-6 md:px-10 mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-snug">
          Drive Business Success with
          <span className="font-bold text-red-500 ml-2">
            Meticulous Features
          </span>
        </h1>
      </section>
      </Anim>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10 mx-auto max-w-7xl">
        {sectionsData.map((item, i) => (
          <Anim key={i} delay={i*0.2}>
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-custom transition-all duration-300"
          >
            {/* Image Section */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            {/* Content Section */}
            <div className="p-6 space-y-4 relative min-h-[340px]">
             
             {/* <div className="w-full h-[1px] bg-gray-400 rounded-md"></div> */}

             
              <h1 className="text-gray-900 text-xl font-semibold">
                {item.title}
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Divider Line */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2  w-[90%] h-[1px] bg-gray-400 rounded-md"></div>
            </div>
          </div>
          </Anim>
        ))}
      </section>
    </div>
  );
}
