import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/AboutUs/logo.png";

export default function Footer() {
  return (
    <section className="flex justify-center items-center bg-[#0D1B2A] font-[roboto]">
      <footer className=" text-white py-12 w-full max-w-[1200px] max-lg:w-[90%]">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo + Description */}
          <div className="flex flex-col">
            <div className="flex flex-col items-start gap-2 mb-4">
              <img src={logo} alt="Logo" className="w-14 h-14" />
              {/* <img src="/logo.png" alt="logo" className="w-8 h-8" /> */}
              <h2 className="text-2xl font-bold">
                Dr. Chitra <span className="text-yellow-400">Endocare</span>
              </h2>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Chitra Smile Care offers gentle, friendly dental care to keep your
              smile healthy and bright.
            </p>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-[Noto_Sans]">
              Support
            </h4>
            <div className="w-10 h-1 bg-blue-500 mb-4"></div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Helpful Link */}
          <div className="flex flex-col ">
            <h4 className="text-lg font-semibold mb-4 font-[Noto_Sans]">
              Our Services
            </h4>
            <div className="w-10 h-1 bg-blue-500 mb-4"></div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="/services" className="hover:text-white">
                  Gentle Dental Fillings
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Root Canal Therapy
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Tooth Extractions
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Professional Teeth Whitening
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Cosmetic Dentistry
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Preventive Care
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Pediatric Treatment
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Orthodontic Braces
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-[Noto_Sans]">
              Contact Us
            </h4>
            <div className="w-10 h-1 bg-blue-500 mb-4"></div>
            {/* <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Your Email Address..."
              className="text-black px-4 py-2 rounded-l w-full"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r">
              Sign Up
            </button>
          </div> */}
            <div className="flex items-start gap-2 text-sm text-gray-300 mb-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>Shankar Nagar, Raipur, Chhattisgarh</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-300">
              <FaPhoneAlt className="mt-1" />
              <span>+91 7389181461</span>
            </div>
            <div className="flex flex-col text-xl text-white mt-4">
              <h4 className="text-lg  font-semibold mb-4 font-[Noto_Sans]">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <FaFacebookF className="hover:text-blue-500 cursor-pointer" />

                <FaInstagram className="hover:text-red-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 text-center">
          <p>
            Copyright © {new Date().getFullYear()}. All rights reserved, Design
            and developed by{" "}
            <a href="https://spadvertising.in" className="text-white">
              SP Advertising
            </a>
          </p>
        </div>
      </footer>
    </section>
  );
}
