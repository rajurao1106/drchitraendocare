import React from 'react'

export default function AboutUs() {
  return (
    <section className="py-16 px-4 lg:px-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/dental-1.jpg"
            alt="Dental Image 1"
            className="rounded-xl w-full h-auto object-cover"
          />
          <img
            src="/images/dental-2.jpg"
            alt="Dental Image 2"
            className="rounded-xl w-full h-auto object-cover"
          />
          <img
            src="/images/dental-3.jpg"
            alt="Dental Image 3"
            className="rounded-xl w-full h-auto object-cover col-span-2"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <p className="text-blue-600 font-semibold mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
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

