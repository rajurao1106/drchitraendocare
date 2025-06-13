import React from "react";
import doctorImage from "../assets/Homepage/contact/contact.png"; // ✅ Replace with actual path to your image


const HappyClientSection = () => {
  return (
    <section className=" w-full py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl relative  mx-auto bg-blue-200 rounded-xl flex flex-col md:flex-row items-end justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-[650px] w-full text-center md:text-left p-8 max-lg:p-4 py-10">
          <button className="mb-4 text-blue-600 bg-blue-100 text-sm font-semibold px-4 py-1 rounded-full  font-[Noto_Sans]">
            Contact Us
          </button>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 font-[Noto_Sans]">
            Become The Next <br />
            Our <span className="text-blue-600">Happy Client</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base">
            Have questions or ready to book?  <br />
We re just a call away—let’s talk and solve your health related  problem.

          </p>
          <a href="/contact">
          <button className="mt-6 text-black bg-yellow-300 hover:bg-yellow-400 px-6 py-3 rounded-md font-medium">
            Book an Appointment
          </button></a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          {/* Use <img> if not using Next.js */}
          <img
            src={doctorImage}
            alt="Smiling Doctor"
            className="w-[30rem] absolute max-lg:relative bottom-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HappyClientSection;
