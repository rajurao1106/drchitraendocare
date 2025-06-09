import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section className="flex justify-center items-center bg-[#0D1B2A] font-[roboto]">
        <footer className=" text-white py-12 w-full max-w-[1200px]">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* <img src="/logo.png" alt="logo" className="w-8 h-8" /> */}
            <h2 className="text-2xl font-bold">
              Chitra <span className="text-blue-600">Dentic</span>
            </h2>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-4 text-xl text-white">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-blue-500 cursor-pointer" />
            <FaYoutube className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>

        {/* Helpful Link */}
        <div>
          <h4 className="text-lg font-semibold mb-4 font-[Noto_Sans]">Helpfull Link</h4>
          <div className="w-10 h-1 bg-blue-500 mb-4"></div>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4 font-[Noto_Sans]">Support</h4>
          <div className="w-10 h-1 bg-blue-500 mb-4"></div>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-lg font-semibold mb-4 font-[Noto_Sans]">Contact Us</h4>
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
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 text-center">
        <p>
          Copyright © {new Date().getFullYear()}. All rights reserved, Design
          and developed by <a href="" className="text-white">SP Advertising Agency</a>
        </p>
      </div>
    </footer>
    </section>
  );
}
