import React from "react";
import chitragohil from "../assets/Homepage/Hero/chitragohil.png";
import bgclinic from "../assets/Homepage/Hero/bgclinic.jpg";
import { IoCall, IoTime } from "react-icons/io5";

export default function Hero() {
  return (
    <section className="flex justify-center items-center relative overflow-hidden ">
{/* <img src={bgclinic} alt="" className="absolute object-cover -z-10" /> */}
      <div className=" w-full max-w-[1150px] flex items-center justify-between">
        {/* Left: Text Content */}
        <div className="">
          {/* <div className="bg-blue-50 text-blue-600 font-semibold inline-block px-4 py-1 rounded mb-4 text-sm">
            👋 Hey! We Are Dentic
          </div> */}
          <h1 className="text-4xl md:text-5xl font-extrabold font-[Noto_Sans] text-gray-900 leading-tight mb-4">
            We help you confidently <br /> restore your natural and <br />
            <span className="text-blue-500">Beautiful Happy Smile</span>
          </h1>
          <p className="text-gray-600 text-base mb-8  max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-4xl">
            <div className="bg-white shadow-lg px-6 py-4 border border-gray-200 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-blue-600">10+</h3>
              <p className="mt-2 text-gray-700 font-medium ">
                Years of Experience
              </p>
            </div>
            <div className="bg-white shadow-lg px-6 py-4 border border-gray-200 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-blue-600">6000+</h3>
              <p className="mt-2 text-gray-700 font-medium ">Root Canal Treatments</p>
            </div>
            <div className="bg-white shadow-lg px-6 py-4 border border-gray-200 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-blue-600">10,000+ </h3>
              <p className="mt-2 text-gray-700 font-medium ">
                Restorations
              </p>
            </div>
          </div>
        </div>

        {/* Right: Doctor Image + Review */}
        <div className="relative">
          <img
            src={chitragohil}
            alt="Doctor"
            className="object-cover -scale-x-100 h-[35rem] pt-2"
          />

          {/* Review Badge */}
          <div className="absolute text-white bottom-50 -right-16 bg-blue-500 shadow-lg rounded-lg px-4 py-4 flex items-center gap-4">
            <div className="text-5xl ">
              <IoTime />
            </div>
            <div>
              <h1 className="font-semibold text-xl font-[Noto_Sans]">Opening Hours</h1>
              <p>Mon to Sat 10:00 - 14:00</p>
            </div>
          </div>
          <div className="absolute bottom-18 -left-10 bg-white border border-blue-200 shadow-lg rounded-lg px-4 py-4 flex items-center gap-4">
            <div className="text-5xl text-blue-500">
              <IoCall />
            </div>
            <div>
              <h1 className="font-semibold text-xl font-[Noto_Sans]">Need Dental Services?</h1>
              <p>Call: +1 123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
