import React from "react";
import clinicLogo from "../assets/AboutUs/dental clinic logo 2.png"; // replace with your actual logo path
import dentalImage from "../assets/AboutUs/dental clinic logo 2.png"; // replace with your actual image path

const services = [
  {
    title: "Dental Fillings",
    description:
      "Dental fillings restore teeth damaged by decay using tooth-colored composite materials. They help prevent further decay, preserve your tooth’s natural structure, and maintain a natural appearance. This treatment is quick, painless, and ideal for small to moderate cavities caused by caries or minor fractures.",
    image: "/services/service-1.jpg",
  },
  {
    title: "Root Canal Treatment",
    description:
      "Root canal treatment removes infected pulp from inside the tooth. It relieves pain, cleans and shapes the root canals, then seals them to prevent reinfection. It helps save the natural tooth and avoids the need for extraction when deep decay or trauma has affected the pulp.",
    image: "/services/service-2.jpg",
  },
  {
    title: "Extraction",
    description:
      "Tooth extraction is done when a tooth is severely damaged or decayed and cannot be saved. It helps relieve pain, prevent the spread of infection, and make space for other dental treatments like implants or braces. Extractions are performed carefully with minimal discomfort and proper aftercare.",
    image: "/services/service-3.jpg",
  },
  {
    title: "Teeth Whitening",
    description:
      "Teeth whitening is a safe cosmetic procedure that removes stains and discoloration. It uses professional bleaching agents to brighten the teeth several shades lighter, enhancing your smile. Ideal for those with stained teeth from food, drinks, smoking, or aging. It is fast and non-invasive.",
    image: "/services/service-4.jpg",
  },
  {
    title: "Cosmetic Treatment",
    description:
      "Cosmetic treatments improve your smile with options like veneers, crowns, and implants. Veneers cover imperfections, crowns restore shape and function of treated teeth, and implants replace missing teeth permanently. These procedures provide natural-looking, long-lasting solutions to boost confidence and oral aesthetics.",
    image: "/services/service-5.jpg",
  },
  {
    title: "Preventive Care",
    description:
      "Preventive care includes dental cleanings, fluoride application, and sealants to protect teeth from cavities. Regular checkups help detect issues early and maintain healthy teeth and gums. Our goal is to stop problems before they start, ensuring long-term oral health and hygiene.",
    image: "/services/service-6.jpg",
  },
  {
    title: "Pediatric Treatment",
    description:
      "Pediatric dentistry focuses on children's oral health. From teething to permanent teeth, we provide specialized care to ensure healthy growth. Our services are gentle, child-friendly, and designed to make kids comfortable during their dental visits and treatments.",
    image: "/services/service-7.jpg",
  },
  {
    title: "Orthodontic Braces",
    description:
      "Orthodontic braces correct misaligned teeth and jaws. We offer metal and ceramic braces for children and adults to improve function and appearance. Braces gradually shift teeth into the right position, enhancing your bite and boosting self-confidence over time.",
    image: "/services/service-8.jpg",
  },
];

export default function Services() {
  return (
    <section className="">
      <div className="flex justify-center items-center bg-[#009FE3]">
        <div
        className=" max-w-[1300px] text-white w-full py-12 px-6 md:px-20 flex flex-col md:flex-row 
      items-center justify-between gap-6 md:gap-12 overflow-hidden "
      >
        {/* Left: Logo & Clinic Name */}
        {/* <div className="flex items-center gap-4 flex-shrink-0">
          <img
            src={clinicLogo}
            alt="Clinic Logo"
            className="rounded-full shadow-md bg-white p-1 w-10 h-10"
          />
          <h2 className="text-2xl font-bold">Dr. Chitra Endocare</h2>
        </div> */}

        {/* Center: Tagline */}
        <div className="text-center flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Our Dental Services
          </h1>
          <p className="text-lg md:text-lg text-white/90">
            Compassionate care, advanced treatments, confident smiles.
          </p>
        </div>

        {/* Right: Dental Illustration */}
        {/* <div className="flex-shrink-0">
          <img
            src={dentalImage}
            alt="Dental Tools"
            className="rounded-full shadow-xl bg-white p-2 w-10 h-10"
          />
        </div> */}
      </div>
      </div>
      <div className="flex justify-center items-center">
        <section className="py-16 px-4 max-w-[1200px] w-full mx-auto">
       
          <div className="grid md:grid-cols-1 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row w-full items-center gap-6 p-6 rounded-2xl shadow-lg bg-white"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-[40rem] h-[20rem] rounded-xl shadow"
                />
                <div className="w-full">
                  <h3 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
