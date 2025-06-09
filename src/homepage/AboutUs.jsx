import React from "react";
import aboutusimage1 from "../assets/Homepage/AboutUs/aboutusimage1.jpg";
import aboutusimage2 from "../assets/Homepage/AboutUs/aboutusimage2.jpg";
import aboutusimage3 from "../assets/Homepage/AboutUs/aboutusimage3.jpg";

export default function AboutUs() {
  return (
    <section className="py-16 px-4 lg:px-20 bg-white flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-[1200px]">
        {/* Left: Image Grid */}
        <div className="flex gap-5 justify-center items-center">
          <div className="flex flex-col gap-8 justify-center items-end">
            <img
              src={aboutusimage3}
              alt="Dental Image 1"
              className="rounded-3xl w-50 h-50 max-lg:h-38 object-cover"
            />
            <img
              src={aboutusimage2}
              alt="Dental Image 2"
              className="rounded-3xl w-66 h-66 max-lg:h-60 object-cover"
            />
          </div>
          <img
            src={aboutusimage1}
            alt="Dental Image 3"
            className="rounded-3xl w-60 max-lg:w-48 h-full object-cover col-span-2"
          />
        </div>

        {/* Right: Text Content */}
        <div className="max-lg:text-center">
          <p className="text-blue-600 font-semibold mb-2 font-[Noto_Sans]">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight font-[Noto_Sans]">
            Your Smile is More <br /> Than Our Goal <br /> It’s Our Shared Success Story
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl">
            At Dr. Chitra Endocare, we blend advanced dental care with a gentle
            touch. Led by Dr. Chitra Gohil specialist in Root Canals and
            Esthetic Dentistry we offer expert treatments using the latest
            technology, strict hygiene, and patient-first care.
          </p>

          <div className="grid grid-cols-0 sm:grid-cols-2 gap-y-4 gap-x-6 mb-6 ">
            <p className="flex items-start text-gray-700">
              <span className="text-blue-600 mr-2 ">✔</span> 6,000+ Root Canals
              & 10,000+ Restorations
            </p>

            <p className="flex items-start text-gray-700">
              <span className="text-blue-600 mr-2 ">✔</span> Top-tier hygiene &
              sterilization standards
            </p>

            <p className="flex items-start text-gray-700">
              <span className="text-blue-600 mr-2 ">✔</span>Sunday appointments
              for your convenience
            </p>
            <p className="flex items-start text-gray-700">
              <span className="text-blue-600 mr-2 ">✔</span> Latest tech &
              high-quality materials
            </p>
          </div>

             <button className="hidden md:block bg-yellow-300 hover:bg-yellow-400 text-black font-[Noto_Sans] 
        font-semibold px-8 py-3 rounded-lg">
           Read More
          </button>
        </div>
      </div>
    </section>
  );
}
