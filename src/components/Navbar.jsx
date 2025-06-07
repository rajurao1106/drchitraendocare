"use client";
import React, { useState } from "react";
import { BiArrowFromTop, BiArrowToTop } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import logo from '../assets/dental clinic logo 2.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-center items-center shadow font-[roboto] sticky top-0 left-0 z-10 bg-white">
      <div className="w-full  max-w-[1200px] ">
        {/* Top Bar */}
        <div className=" text-gray-600 max-lg:hidden text-sm px-4 pt-2 flex justify-between items-center ">
          <div className="flex gap-6 items-center flex-wrap">
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-blue-500" />
              <a
                href="tel:+917389181461"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +91 7389181461
              </a>
            </div>
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-blue-500" />
              <a
                href="https://maps.app.goo.gl/y1s2Bs9Cj3XK24G46"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Shankar Nagar, Raipur, Chhattisgarh
              </a>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <FaRegCalendarAlt className="text-blue-500" />
            <a href="https://g.co/kgs/ZiFUwFF" className="hover:underline">Monday - Saturday: 9 am - 11.30 pm</a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-white px-4 py-3 flex justify-between items-center relative ">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* <img src="/logo.png" alt="logo" className="w-8 h-8" /> */}
            <h1 className="text-2xl font-bold flex justify-center items-center gap-2">
             <img src={logo} alt="" className="w-10 h-10 bg-gray-300 rounded-full" /> Chitra <span className="text-blue-600">Dentic</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-lg font-[Noto_Sans]">
            <a href="/" className="hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="/about" className="hover:text-blue-600 font-medium">
              About Us
            </a>

            <a href="#" className="hover:text-blue-600 font-medium">
              Services
            </a>

            <a href="/contact" className="hover:text-blue-600 font-medium">
              Contact Us
            </a>
          </nav>

          {/* Appointment Button */}
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded">
            Make an Appointment
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-4xl" onClick={toggleMenu}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col px-4 py-4 gap-4 md:hidden z-10">
              <a href="#" className="text-blue-600 font-semibold">
                Home
              </a>
              <a href="#" className="font-medium">
                About Us
              </a>
              <a href="#" className="font-medium">
                Services
              </a>
              <a href="#" className="font-medium">
                Page
              </a>
              <a href="/contact" className="font-medium">
                Contact Us
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded">
                Make an Appointment
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
