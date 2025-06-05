import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Dental Fillings",
    description: "Used to restore damaged or decayed teeth by using tooth-colored material, ensuring a natural appearance.",
    image: "/src/assets/Homepage/Services/dentalfillings.jpg", // Replace with actual image path
    icon: "/src/assets/Homepage/Services/tooth-filling.png", // Replace with actual icon path
  },
  {
    title: "Root Canal Treatment",
    description: "This procedure involves removing infected pulp from the root canal to relieve pain, clean and shape the canal",
    image: "/src/assets/Homepage/Services/rootcanal.jpg", // Replace with actual image path
    icon: "/src/assets/Homepage/Services/root-canal.png", // Replace with actual icon path
  },
  {
    title: "Extraction",
    description: "Extractions are performed where the tooth is severely damaged or decayed and cannot be saved by root canal.",
    image: "/src/assets/Homepage/Services/extraction.jpg", // Replace with actual image path
    icon: "/src/assets/Homepage/Services/tooth-extraction.png ", // Replace with actual icon path
  },
   {
    title: "Dental Fillings",
    description: "Used to restore damaged or decayed teeth by using tooth-colored material, ensuring a natural appearance.",
    image: "/src/assets/Homepage/Services/dentalfillings.jpg", // Replace with actual image path
    icon: "/src/assets/Homepage/Services/tooth-filling.png", // Replace with actual icon path
  },
  {
    title: "Root Canal Treatment",
    description: "This procedure involves removing infected pulp from the root canal to relieve pain, clean and shape the canal",
    image: "/src/assets/Homepage/Services/rootcanal.jpg", // Replace with actual image path
    icon: "/src/assets/Homepage/Services/root-canal.png", // Replace with actual icon path
  },
  {
    title: "Extraction",
    description: "Extractions are performed where the tooth is severely damaged or decayed and cannot be saved by root canal.",
    image: "/src/assets/Homepage/Services/extraction.jpg", // Replace with actual image path
    icon: "/src/assets/Homepage/Services/tooth-extraction.png ", // Replace with actual icon path
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        <span className="text-blue-600">Best Quality</span>{" "}
        <span className="text-gray-900">Services</span>
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
        ligula aenean massa.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md group"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full object-cover"
            />
            <div className="absolute w-[75%] max-lg:w-full bottom-0 left-0 right-0 bg-white p-5 text-left rounded-tr-xl max-lg:rounded-none 
            shadow-lg translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <img src={service.icon} alt="" className="w-10 h-10 text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-gray-500">{service.description}</p>
              <a
                href="#"
                className="text-blue-600 font-medium mt-2 inline-flex items-center gap-1 hover:underline"
              >
                Learn More <FaArrowRight className="text-sm" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
