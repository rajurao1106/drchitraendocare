"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import bgclinic from "../assets/ContactUs/contactus.jpg";

export default function ContactPage() {
  const services = [
    "Gentle Dental Fillings",
    "Root Canal Therapy",
    "Tooth Extractions",
    "Professional Teeth Whitening",
    "Cosmetic Dentistry",
    "Preventive Care",
    "Pediatric Treatment",
    "Orthodontic Braces",
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="relative bg-[#000000c0] font-[roboto] flex items-center justify-center overflow-hidden">
        <img
          src={bgclinic}
          alt="Clinic Background"
          className="absolute w-full h-full object-cover -z-10"
        />
        <div className="max-w-[1300px] w-full px-6 py-20 md:px-20 text-center text-white flex flex-col items-center justify-center">
          <span className="inline-block text-xs font-[Noto_Sans] text-blue-600 bg-blue-100 px-4 py-1 rounded-full font-semibold uppercase tracking-wide mb-3 shadow">
            Book Appointment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[Noto_Sans]">
            Schedule Your Visit
          </h2>
          <p className="text-gray-200 mt-2 max-w-2xl">
            Fill out the form below to book an appointment with us.
          </p>
        </div>
      </div>

      {/* Form & Contact Info */}
      <section className="bg-blue-50 py-16 px-4 sm:px-8 md:px-12 lg:px-24 font-[roboto]">
        <div className="grid gap-8 md:grid-cols-2 bg-white p-6 md:p-12 rounded-xl shadow-md">
          {/* Form Section */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-[Noto_Sans] font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-[Noto_Sans] font-medium">
                  Phone *
                </label>
                <input
                  type="tel"
                  placeholder="Enter your mobile"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-[Noto_Sans] font-medium">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-[Noto_Sans] font-medium">
                  Gender *
                </label>
                <select
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-[Noto_Sans] font-medium">
                  City *
                </label>
                <input
                  type="text"
                  placeholder="Your city"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-[Noto_Sans] font-medium">
                  Select a Service *
                </label>
                <select
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                >
                  <option value="">-- Choose a Service --</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-[Noto_Sans] font-medium">
                  Appointment Date *
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-[Noto_Sans] font-medium">
                  Time *
                </label>
                <input
                  type="time"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-2 rounded font-bold text-black bg-yellow-300 hover:bg-yellow-400 transition mt-4"
            >
              Book an Appointment
            </button>
          </form>

          {/* Contact Info & Map */}
          <div className="bg-blue-950 text-white rounded-xl p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold font-[Noto_Sans] mb-2">
                Contact Us
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <span>
                  MIG-2, beside Central Bank Of India, Sector-3, Shankar Nagar,
                  Raipur, Chhattisgarh
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1" />
                <span>gohil.chitra@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1" />
                <span>+91 7389181481</span>
              </div>
            </div>

            <div className="mt-6 rounded overflow-hidden w-full aspect-video">
              <iframe
                title="Dr. Chitra's Endocare Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.558132404149!2d81.6641901!3d21.2534426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd69bfaa335d%3A0x3f1ae16ce2a60c6c!2sDr.%20Chitra's%20Endocare%20%26%20Multispeciality%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1718361869487!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
