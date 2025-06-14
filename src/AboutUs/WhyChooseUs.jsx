import React from "react";
import {
  CheckCircle,
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  Activity,
  ScanLine,
} from "lucide-react";
import img1 from "../assets/Homepage/Gallery/gallery1.jpg";
import img2 from "../assets/Homepage/Gallery/gallery2.jpg";
import img3 from "../assets/Homepage/Gallery/gallery3.jpg";
import img4 from "../assets/Homepage/Gallery/gallery4.jpg";
import img5 from "../assets/Homepage/Gallery/gallery5.jpg";
import img6 from "../assets/Homepage/Gallery/gallery6.jpg";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Sterilization and Hygiene",
      desc: "We maintain the highest standards of sterilization to ensure your safety.",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Patient-Centered Care",
      desc: "We prioritize the patient's needs, comfort, and satisfaction.",
    },

    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Expertise",
      desc: "Here, treatments are performed by experienced & super specialized dentists ensuring precise work.",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Sunday Availability",
      desc: "We are open from 10–2 on Sundays to accommodate your schedule & provide convenient access.",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Affordable Rates",
      desc: "We strive to provide the best quality dental care at affordable prices, making it accessible to everyone.",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Advanced Material",
      desc: (
        <>
          <p>
            Endocare Dental Clinic utilizes advanced dental materials: <br />{" "}
            Bioactive Material (MTA / Bidentine) Ceramic & porcelain for
            esthetic crowns and bridges Tooth replacement materials like EverX
            Flow, Composites Ozone therapy (for sensitivity){" "}
          </p>
        </>
      ),
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Advanced Technology",
      desc: "Advanced diagnostic tools e.g., Intra Oral Camera Advanced root canal devices e.g., Fi-P & Fi-G obturating device Portable X-ray for patient convenience Dental Scanner. By incorporating these advanced materials & technology, Endocare provides high-quality, effective dental care.",
    },
  ];
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div>
      <section className=" bg-white mt-4   flex justify-center items-center flex-col">
        <div className="w-full max-w-[1200px]">
          <h2 className="text-3xl w-full font-[Noto_Sans] text-left max-w-[1200px] md:text-4xl font-extrabold text-blue-600 mb-6">
            Why Choose Us
          </h2>
          <p className="text-base w-full text-left max-w-[600px] max-lg:text-center mb-8">
            Dr. Chitra Endocare Dental Clinic delivers exceptional care with a
            patient-first approach. Our skilled team ensures each visit is
            precise, comfortable, and focused on lasting oral health—making
            every smile healthier, brighter, and more confident.
          </p>
        </div>
        <div className="max-w-[1200px] w-full flex gap-10 max-lg:w-[90%]">
          {/* Image Grid */}
          <div className="flex flex-wrap w-[35rem] gap-10 max-lg:hidden">
            {images.map((img, index) => {
              let roundedClass = "";

              switch (index) {
                case 0:
                  roundedClass = "rounded-tr-[5rem] rounded-bl-[5rem]";
                  break;
                case 1:
                  roundedClass = "rounded-br-[5rem] rounded-tl-[5rem]";
                  break;
                case 2:
                  roundedClass = "rounded-tl-[5rem] rounded-br-[5rem]";
                  break;
                case 3:
                  roundedClass = "rounded-tr-[5rem] rounded-bl-[5rem]";
                  break;
                case 4:
                  roundedClass = "rounded-tr-[5rem] rounded-bl-[5rem]";
                  break;
                case 5:
                  roundedClass = "rounded-br-[5rem] rounded-tl-[5rem]";
                  break;
                default:
                  roundedClass = ""; // fallback
              }

              return (
                <img
                  key={index}
                  src={img}
                  alt={`Why Choose Us ${index + 1}`}
                  className={`object-cover w-[16rem] h-[16rem] shadow-md ${roundedClass}`}
                />
              );
            })}
          </div>

          {/* Feature List */}
          <div className="flex-1">
            {/* <h2 className="text-3xl font-bold text-[#007b7f] mb-6">
              Why Choose Us
            </h2> */}
            <div className="space-y-4">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-blue-100 p-4 rounded-lg shadow-sm"
                >
                  <div className="bg-blue-500 p-2 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold ">{item.title}</h3>
                    <p className="text-base ">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
