import React from "react";
import chitragohil from "../../assets/Homepage/Hero/chitragohil.png";
import { IoCall, IoTime } from "react-icons/io5";

export default function Hero1() {
  return (
    <section className="flex justify-center items-center relative overflow-hidden bg-[#F7F7F7]">
            <div className="w-full max-w-[1150px] flex max-lg:flex-col-reverse items-center justify-between">
              <div className="max-lg:text-center">
                <h1 className="text-5xl max-lg:text-3xl font-extrabold font-[Noto_Sans] text-gray-900 leading-tight mb-4">
                  We Don’t Just Treat Teeth <br /> We Listen, Explain, and <br />
                  <span className="text-blue-500">Heal with Care.</span>
                </h1>
                <p className="text-gray-600 text-base mb-8 max-w-xl">
                  At Dr. Chitra Endocare, we combine advanced dental expertise with
                  personalized care that makes you feel truly happier. From root
                  canals to smile makeovers, we’re here to care, comfort, and create
                  confident smiles
                </p>
                <div className="flex max-lg:hidden max-lg:flex-col items-center gap-6 mt-10 max-w-4xl">
                  <div className="bg-white shadow-lg px-6 py-4 border border-gray-200 rounded-xl text-center max-lg:w-[90%]">
                    <h3 className="text-4xl font-semibold text-blue-600">10+</h3>
                    <p className="mt-2 text-gray-700 font-medium">Years of Experience</p>
                  </div>
                  <div className="bg-white shadow-lg px-6 py-4 border border-gray-200 rounded-xl text-center max-lg:w-[90%]">
                    <h3 className="text-4xl font-semibold text-blue-600">6000+</h3>
                    <p className="mt-2 text-gray-700 font-medium">Root Canal Treatments</p>
                  </div>
                  <div className="bg-white shadow-lg px-6 py-4 max-lg:mb-5 border border-gray-200 rounded-xl text-center max-lg:w-[90%]">
                    <h3 className="text-4xl font-semibold text-blue-600">10,000+</h3>
                    <p className="mt-2 text-gray-700 font-medium">Restorations</p>
                  </div>
                </div>
              </div>
    
              {/* Doctor Image & Info */}
              <div className="relative max-lg:mb-8">
                <img
                  src={chitragohil}
                  alt="Doctor"
                  className="object-cover -scale-x-100 h-[35rem] max-lg:h-[25rem] pt-2"
                />
    
                <div className="absolute bottom-60 max-lg:bottom-40 -left-24 max-lg:-left-15 bg-white border border-blue-200 shadow-lg rounded-lg px-4 max-lg:px-1 py-4 max-lg:py-2 flex items-center gap-4">
                  <div className="text-5xl max-lg:text-2xl text-blue-500">
                    <IoCall />
                  </div>
                  <div>
                    <h1 className="font-semibold text-xl max-lg:text-base font-[Noto_Sans]">Need Dental Services?</h1>
                    <p className="max-lg:text-sm">Call: +91 7389181461</p>
                  </div>
                </div>
    
                <div className="absolute text-white bottom-18 max-lg:bottom-0 -right-10 max-lg:-left-0 bg-blue-500  rounded-lg px-4 max-lg:px-1 py-4 max-lg:py-2 flex items-center gap-4">
                  <div className="text-5xl max-lg:text-2xl">
                    <IoTime />
                  </div>
                  <div>
                    <h1 className="font-semibold text-xl max-lg:text-base font-[Noto_Sans]">Opening Hours</h1>
                    <p className="max-lg:text-sm">Mon to Sat 10 AM - 2 PM / 4 PM - 8 PM</p>
                    <p className="max-lg:text-sm">Sunday 10 AM - 2 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}
