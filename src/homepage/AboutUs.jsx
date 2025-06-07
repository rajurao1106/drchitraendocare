import React from 'react'
import aboutusimage1 from '../assets/Homepage/AboutUs/aboutusimage1.jpg'
import aboutusimage2 from '../assets/Homepage/AboutUs/aboutusimage2.jpg'
import aboutusimage3 from '../assets/Homepage/AboutUs/aboutusimage3.jpg'

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
            className="rounded-3xl w-50 h-50 object-cover"
          />
          <img
            src={aboutusimage2}
            alt="Dental Image 2"
            className="rounded-3xl w-66 h-66 object-cover"
          />
          </div>
          <img
            src={aboutusimage1}
            alt="Dental Image 3"
            className="rounded-3xl w-60 h-full object-cover col-span-2"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <p className="text-blue-600 font-semibold mb-2 font-[Noto_Sans]">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight font-[Noto_Sans]">
            Professionals and <br />
            Personalized Dental Excellence
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl">
            We offer high-quality dental care tailored for the whole family. From
            routine checkups to advanced treatments, our compassionate team
            ensures your smile stays healthy and confident.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-6">
            <p className="flex items-center text-gray-700">
              <span className="text-blue-600 mr-2">✔</span> Personalized Treatment Plans
            </p>
            <p className="flex items-center text-gray-700">
              <span className="text-blue-600 mr-2">✔</span> State-of-the-Art Technology
            </p>
            <p className="flex items-center text-gray-700">
              <span className="text-blue-600 mr-2">✔</span> Gentle Care for Kids and Adults
            </p>
            <p className="flex items-center text-gray-700">
              <span className="text-blue-600 mr-2">✔</span> Flexible Appointment Scheduling
            </p>
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}

