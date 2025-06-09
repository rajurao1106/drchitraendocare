import React from "react";
import bgclinic from "../assets/Services/bgclinic.jpg";
import serviceimg1 from "../assets/Services/bgclinic.jpg";
import serviceimg2 from "../assets/Services/bgclinic.jpg";
import serviceimg3 from "../assets/Services/bgclinic.jpg";
import serviceimg4 from "../assets/Services/bgclinic.jpg";
import serviceimg5 from "../assets/Services/bgclinic.jpg";
import serviceimg6 from "../assets/Services/bgclinic.jpg";
import serviceimg7 from "../assets/Services/bgclinic.jpg";
import serviceimg8 from "../assets/Services/bgclinic.jpg";

const services = [
  {
    title: "Dental Fillings",
    description:
      "Dental fillings restore teeth damaged by decay using tooth-colored composite materials. They help prevent further decay, preserve your tooth’s natural structure, and maintain a natural appearance.",
    image: serviceimg1,
  },
  {
    title: "Root Canal Treatment",
    description:
      "Root canal treatment removes infected pulp from inside the tooth. It relieves pain, cleans and shapes the root canals, then seals them to prevent reinfection.",
    image: serviceimg2,
  },
  {
    title: "Extraction",
    description:
      "Tooth extraction is done when a tooth is severely damaged or decayed and cannot be saved. It helps relieve pain, prevent infection, and make space for other treatments.",
    image: serviceimg3,
  },
  {
    title: "Teeth Whitening",
    description:
      "Teeth whitening removes stains and discoloration using professional bleaching agents to brighten teeth. Ideal for stains from food, drinks, smoking, or aging.",
    image: serviceimg4,
  },
  {
    title: "Cosmetic Treatment",
    description:
      "Cosmetic treatments like veneers, crowns, and implants improve smile aesthetics and function. These solutions are long-lasting and natural-looking.",
    image: serviceimg5,
  },
  {
    title: "Preventive Care",
    description:
      "Includes cleanings, fluoride application, and sealants to prevent decay. Regular checkups help maintain healthy teeth and gums.",
    image: serviceimg6,
  },
  {
    title: "Pediatric Treatment",
    description:
      "Specialized care for children from teething to permanent teeth. Gentle and child-friendly approach to ensure a positive dental experience.",
    image: serviceimg7,
  },
  {
    title: "Orthodontic Braces",
    description:
      "Braces align teeth and jaws. We offer both metal and ceramic braces to gradually move teeth into proper alignment for improved function and appearance.",
    image: serviceimg8,
  },
];

export default function Services() {
  return (
    <section>
      {/* Header Section */}
      <div className="flex justify-center relative items-center bg-[#000000c0] overflow-hidden">
        <img
          src={bgclinic}
          alt=""
          className="absolute w-full -z-10 object-cover h-full"
        />
        <div className="max-w-[1300px] text-white w-full py-20 px-6 md:px-20 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Our Dental Services
          </h1>
          <p className="text-lg text-white/90">
            Compassionate care, advanced treatments, confident smiles.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="flex justify-center items-center">
        <section className="py-16 px-4 max-w-[1200px] w-full mx-auto">
          <div className="grid md:grid-cols-1 gap-10">
            {services.map((service, index) => {
              let layoutDirection =
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row";

              return (
                <div
                  key={index}
                  className={`flex flex-col ${layoutDirection} w-full items-center gap-6 p-6 rounded-2xl shadow-[0_0_10_lightgray] bg-white`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-[40rem] h-[20rem] object-cover rounded-xl shadow"
                  />
                  <div className="w-full">
                    <h3 className="text-2xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-xl mb-4">
                      {service.description}
                    </p>
                    <button
                      className="hidden md:block bg-yellow-300 hover:bg-yellow-400 text-black font-[Noto_Sans] 
        font-semibold px-5 py-2 rounded-lg"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
