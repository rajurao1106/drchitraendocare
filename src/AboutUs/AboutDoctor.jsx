import React from "react";
import doctor from "../assets/AboutUs/aboutdoctor.png";

export default function AboutDoctor() {
  return (
    <section className="flex bg-[#F7F7F7] justify-center items-center flex-col py-10 px-4">
      <div className="max-w-[1100px] w-full flex flex-col lg:flex-row items-center gap-10">
        {/* Doctor Image */}
        <img
          src={doctor}
          alt="Dr. Chitra Gohil"
          className="w-64 sm:w-80 border-4 border-gray-50 rounded-3xl shadow-lg"
        />

        {/* Doctor Content */}
        <div className="w-full max-w-2xl max-lg:text-center">
          <h2 className="text-3xl font-bold font-[Noto_Sans] text-blue-600 mb-4">
            Dr. Chitra Gohil
          </h2>
          {/* <p className="mb-4 text-base font-bold text-gray-700">
            M.D.S in 2015 from Bapuji Dental College, Karnataka
          </p> */}
          <div className="space-y-1 mb-8">
            <p className="text-gray-700 leading-relaxed text-[17px]">
              At Dr. Chitra Endocare, we believe that a healthy smile is not
              just a reflection of good oral health, but also a key to
              confidence & happiness.
            </p>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              My team and I strive to create a warm and welcoming environment,
              where patients feel at ease and supported throughout their
              treatment journey.
            </p>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              I am passionate about staying at the forefront of dental
              advancements, ensuring that my patients receive the most modern &
              effective treatment available.
            </p>
           
          </div>

          <a href="/contact">
            <button
            className="bg-yellow-400 text-black font-[Noto_Sans] font-semibold px-6 py-3 rounded-lg 
          shadow hover:bg-yellow-500  transition-all duration-300"
          >
            Book Appointment
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}
