import React from "react";
import doctor from "../assets/AboutUs/aboutdoctor.png";


export default function AboutDoctor() {
  return (
    <section className="flex justify-center items-center flex-col py-5">
      <div className="max-w-[1100px] w-full flex justify-between  items-center gap-14">
        <img
          src={doctor}
          alt="Dr. Chitra Gohil"
          className="w-[20rem] border-4 border-white rounded-4xl"
        />

        <div className=" w-full max-w-[700px]">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Dr. Chitra Gohil 
          </h2>
          <p className="mb-4 text-base font-bold text-gray-700">M.D.S in 2015 from Bapuji Dental College, Karnataka</p>
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed text-[17px]">
              With a reputation for exceptional skill,{" "}
              <strong>Dr. Chitra Gohil</strong> is a leading endodontist in
              Raipur. Her expertise in Root Canal treatment and restorations has
              earned her the trust of countless patients.
            </p>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              She completed her <strong>B.D.S</strong> from Shri Ramchandra
              Medical College, Chennai and her <strong>M.D.S</strong> in 2015
              from Bapuji Dental College, Karnataka. She also pursued a
              Fellowship in Esthetic Dentistry from Chennai.
            </p>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              Currently serving as an Associate Professor at{" "}
              <strong>Shri Balaji Dental Hospital</strong>, she specializes in
              procedures such as veneers, composite buildup, direct & indirect
              restorations, and root canal treatments.
            </p>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              She has successfully performed{" "}
              <strong>6000+ root canal treatments</strong> and over{" "}
              <strong>10,000 restorations</strong>.
            </p>
          </div>

          <button className="bg-yellow-400 text-black font-[Noto_Sans] font-semibold px-6 py-3 rounded-full shadow hover:bg-[#006469] transition-all duration-300">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
