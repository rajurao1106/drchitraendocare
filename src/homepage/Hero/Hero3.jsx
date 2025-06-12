import React from "react";
import ladyPointing from "../../assets/Homepage/Hero/pointinglady.jpg";
import { FaTooth, FaRegSmile, FaUserMd } from "react-icons/fa";

export default function HeroSection() {
  const services = [
    { name: "Dental Checkup", icon: <FaTooth /> },
    { name: "Smile Design", icon: <FaRegSmile /> },
    { name: "Expert Doctors", icon: <FaUserMd /> },
    { name: "Teeth Whitening", icon: <FaTooth /> },
    { name: "Gum Care", icon: <FaTooth /> },
    { name: "Braces", icon: <FaTooth /> },
    { name: "Implants", icon: <FaTooth /> },
    { name: "Root Canal", icon: <FaTooth /> },
  ];

  return (
    <section className="bg-[#F9FAFB] pt-8 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto  flex flex-col-reverse lg:flex-row items-start justify-between gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Bring the Bright Smile <br />
            Using Our <span className="text-blue-600">Dental Services</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            We offer a wide range of dental care services designed to make your smile brighter
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex gap-5 items-center bg-white shadow-md hover:shadow-xl transition p-4 rounded-xl"
              >
                <div className="text-3xl text-blue-600 mb-2">{service.icon}</div>
                <p className="text-sm font-medium text-gray-700">{service.name}</p>
              </div>
            ))}
          </div>

          
        </div>

        {/* Right Image */}
        <div className=" flex flex-col justify-center">
          <img
            src={ladyPointing}
            alt="Lady pointing towards dental services"
            className="w-[28rem] max-w-full rounded-lg"
          />
          {/* Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Book Appointment
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition">
              Contact Us
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
