"use client";
import React, { useState } from "react";
import { BiArrowFromTop, BiArrowToTop } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-center items-center shadow ">
      <div className="w-full  max-w-[1200px] ">
        {/* Top Bar */}
        <div className="bg-white text-gray-600 text-sm px-4 py-2 flex justify-between items-center ">
          <div className="flex gap-6 items-center flex-wrap">
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-blue-500" />
              <span>+91 7389181461</span>
            </div>
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Shankar Nagar, Raipur, Chhattisgarh</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <FaRegCalendarAlt className="text-blue-500" />
            <span>Monday - Saturday: 9 am - 11.30 pm</span>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-white px-4 py-3 flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* <img src="/logo.png" alt="logo" className="w-8 h-8" /> */}
            <h1 className="text-2xl font-bold">
              Chitra <span className="text-blue-600">Dentic</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-blue-600 font-semibold">
              Home
            </a>
            <a href="#" className="font-medium">
              About Us
            </a>

            <div className="relative group">
              <button className="font-medium flex justify-center items-center gap-2">
                Services{" "}
                <div className="group-hover:rotate-180 duration-500">
                  <IoIosArrowDown />
                </div>
              </button>
              {/* Dropdown (optional) */}
              <div className="absolute w-54 text-base left-0 hidden group-hover:block bg-white shadow-md p-2 rounded-md">
                <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                  Advanced Root Canal
                </a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                  Restoration/Fillings
                </a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                  Teeth Whitening
                </a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                  Smile Designing
                </a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                  Crown & Bridges
                </a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                  Extractions
                </a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                  Orthodontic Braces
                </a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                  Pediatric Dentistry
                </a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                  Removable & Fixed Denture
                </a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                  Laser Treatment
                </a>
              </div>
            </div>
            <a href="#" className="font-medium">
              Contact Us
            </a>
          </nav>

          {/* Appointment Button */}
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded">
            Make an Appointment
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={toggleMenu}>
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
              <a href="#" className="font-medium">
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
