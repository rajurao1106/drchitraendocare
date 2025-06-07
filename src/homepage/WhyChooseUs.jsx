import React from "react";
import ico1 from "../assets/Homepage/WhyChooseUs/ico1.png";
import ico2 from "../assets/Homepage/WhyChooseUs/ico2.png";
import ico3 from "../assets/Homepage/WhyChooseUs/ico3.png";
import ico4 from "../assets/Homepage/WhyChooseUs/ico4.png";
import doctor1 from "../assets/Homepage/WhyChooseUs/whychooseus.jpg";

export default function WhyChooseUs() {
  const features = [
    {
      icon: ico1,
      title: "Experienced Dental",
      desc: "Skilled care backed by years of trusted dental experience.",
    },
    {
      icon: ico2,
      title: "Advanced Technology",
      desc: "Modern tools ensure accurate and efficient treatments.",
    },
    {
      icon: ico3,
      title: "Personalized Treatment",
      desc: "Custom care plans made to fit your lifestyle.",
    },
    {
      icon: ico4,
      title: "Family-Friendly",
      desc: "Welcoming space for kids, teens, adults, and seniors.",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Section - Text */}
        <div className="flex-1">
          <p className="text-blue-600 font-semibold mb-3 uppercase tracking-wide text-sm font-[Noto_Sans]">
            Why Choose Our Dental Care
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4 font-[Noto_Sans]">
            Exceptional Service With {" "} 
            <span className="text-blue-500">Personal Touch</span>
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl leading-relaxed">
            Choosing the right dental provider matters. We combine expert care,
            advanced technology, and a warm atmosphere to ensure every visit is
            comfortable, efficient, and tailored to your unique needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img src={item.icon} alt={item.title} className="w-12 h-12" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Images */}
        <div className="">
          <img
            src={doctor1}
            alt="Dental 1"
            className="rounded-2xl object-cover w-[30rem] shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
