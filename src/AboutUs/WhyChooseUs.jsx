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
import img1 from "../assets/Homepage/contact/contact.png";
import img2 from "../assets/Homepage/contact/contact.png";
import img3 from "../assets/Homepage/contact/contact.png";
import img4 from "../assets/Homepage/contact/contact.png";
import img5 from "../assets/Homepage/contact/contact.png";
import img6 from "../assets/Homepage/contact/contact.png";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      title: "Advanced Materials and Instruments",
      desc: "Our experts use the latest materials and instruments for superior dental care.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      title: "Sterilization and Hygiene",
      desc: "We prioritize the highest standards of sterilization and hygiene.",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Patient-Centric Approach",
      desc: "We build strong bonds by understanding patient concerns deeply.",
    },
    {
      icon: <MapPin className="w-5 h-5 text-white" />,
      title: "Convenient Location",
      desc: "Centrally located in the heart of the city.",
    },
    {
      icon: <ScanLine className="w-5 h-5 text-white" />,
      title: "Portable X-ray Unit",
      desc: "Equipped with X-ray unit for minimal radiation exposure.",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Full-Time In-House Doctors",
      desc: "Our team includes full-time in-house doctors for immediate care.",
    },
    {
      icon: <Clock className="w-5 h-5 text-white" />,
      title: "Post-Operative Care Lounge",
      desc: "We offer a separate lounge area for post-operative care.",
    },
    {
      icon: <Star className="w-5 h-5 text-white" />,
      title: "Quality Work",
      desc: "Committed to top-quality dental services.",
    },
    {
      icon: <Clock className="w-5 h-5 text-white" />,
      title: "Sunday Availability",
      desc: "We are open on Sundays for your convenience.",
    },
    {
      icon: <Star className="w-5 h-5 text-white" />,
      title: "Excellent Lab Work",
      desc: "Partnering with top-tier labs for best results.",
    },
  ];
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div>
      <section className=" bg-white flex justify-center items-center">
        <div className="max-w-[1200px] w-full flex gap-10 ">
          {/* Image Grid */}
          <div className="flex flex-wrap w-[35rem] gap-10">
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
                  className={`object-cover w-[16rem] h-[16rem] border shadow-md ${roundedClass}`}
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
                  className="flex items-start gap-4 bg-[#e6f8f9] p-4 rounded-lg shadow-sm"
                >
                  <div className="bg-[#007b7f] p-2 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
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
