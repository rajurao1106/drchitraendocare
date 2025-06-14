import React from "react";
import chitragohil from "../assets/AboutUs/chitragohil.png";

export default function OurAim() {
  return (
    <section className="bg-[#F7F7F7] py-12 px-4 flex justify-center items-center">
      <div className="max-w-[1200px] w-full flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-12">
        {/* Doctor Image */}
        <div className="flex-shrink-0">
          <img
            src={chitragohil}
            alt="Dr. Chitra Gohil"
            className="w-64 sm:w-80 md:w-[28rem] lg:w-[30rem] -scale-x-100 rounded-3xl shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-3xl md:text-4xl font-[Noto_Sans] font-extrabold text-blue-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            At Dr. Chitra Endocare, we are committed to listening carefully to your concerns and needs.
            We strive to provide clear explanations, transparent treatment plans, and high-quality care with compassion.
            Our goal is to support you at every step of your journey toward a healthy, confident smile.
          </p>
        </div>
      </div>
    </section>
  );
}
