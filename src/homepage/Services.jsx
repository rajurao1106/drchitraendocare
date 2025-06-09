import { FaArrowRight } from "react-icons/fa";
// ✅ Import all images and icons (from /public or /src if configured)
import dentalfillings from "/src/assets/Homepage/Services/dentalfillings.jpg";
import tooth_filling from "/src/assets/Homepage/Services/tooth-filling.png";

import rootcanal from "/src/assets/Homepage/Services/rootcanal.jpg";
import root_canal_icon from "/src/assets/Homepage/Services/root-canal.png";

import extraction from "/src/assets/Homepage/Services/extraction.jpg";
import tooth_extraction_icon from "/src/assets/Homepage/Services/tooth-extraction.png";

import teethwhitening from "/src/assets/Homepage/Services/teethwhitening.jpg";
import tooth_whitening_icon from "/src/assets/Homepage/Services/tooth-whitening.png";

import cosmetictreatment from "/src/assets/Homepage/Services/cosmetictreatment.jpg";
import cosmetic_icon from "/src/assets/Homepage/Services/cosmetic.png";

import preventivecare from "/src/assets/Homepage/Services/preventivecare.jpg";
import prevention_icon from "/src/assets/Homepage/Services/prevention.png";

import pediatrictreatment from "/src/assets/Homepage/Services/pediatrictreatment.jpg";
import specialist_icon from "/src/assets/Homepage/Services/specialist.png";

import orthodonticbraces from "/src/assets/Homepage/Services/orthodonticbraces.jpg";
import cosmetic1_icon from "/src/assets/Homepage/Services/cosmetic (1).png";

const services = [
  {
    title: "Gentle Dental Fillings",
    description:
      "Used to restore damaged or decayed teeth by using tooth-colored material, ensuring a natural appearance.",
    image: dentalfillings,
    icon: tooth_filling,
  },
  {
    title: "Root Canal Therapy",
    description:
      "This procedure involves removing infected pulp from the root canal to relieve pain, clean and shape the canal.",
    image: rootcanal,
    icon: root_canal_icon,
  },
  {
    title: "Tooth Extractions",
    description:
      "Extractions are performed where the tooth is severely damaged or decayed and cannot be saved by root canal.",
    image: extraction,
    icon: tooth_extraction_icon,
  },
  {
    title: "Professional Teeth Whitening",
    description:
      "Used to restore damaged or decayed teeth by using tooth-colored material, ensuring a natural appearance.",
    image: teethwhitening,
    icon: tooth_whitening_icon,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "This procedure involves removing infected pulp from the root canal to relieve pain, clean and shape the canal.",
    image: cosmetictreatment,
    icon: cosmetic_icon,
  },
  {
    title: "Preventive Care",
    description:
      "Extractions are performed where the tooth is severely damaged or decayed and cannot be saved by root canal.",
    image: preventivecare,
    icon: prevention_icon,
  },
  {
    title: "Pediatric Treatment",
    description:
      "This procedure involves removing infected pulp from the root canal to relieve pain, clean and shape the canal.",
    image: pediatrictreatment,
    icon: specialist_icon,
  },
  {
    title: "Orthodontic Braces",
    description:
      "Extractions are performed where the tooth is severely damaged or decayed and cannot be saved by root canal.",
    image: orthodonticbraces,
    icon: cosmetic1_icon,
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[Noto_Sans]">
        <span className="text-blue-600">Our Specialized</span>{" "}
        <span className="text-gray-900">Services</span>
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12">
        Dr. Chitra Endocare Clinic is dedicated to providing personalized,
        expert care in a supportive environment, Discover our range of services
        designed with your well-being in mind
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
            <div
              className="absolute w-[75%] max-lg:w-full bottom-0 left-0 right-0 bg-white p-5 text-left rounded-tr-xl max-lg:rounded-none 
            shadow-lg translate-y-4 group-hover:translate-y-0 max-lg:group-hover:translate-y-4 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-10 max-lg:w-12 h-10 max-lg:h-12 text-blue-500"
                />
                <h3 className="text-base max-lg:text-xl font-bold text-gray-800 font-[Noto_Sans]">
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
