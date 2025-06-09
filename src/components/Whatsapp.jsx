"use client"; // if using app directory in Next.js 13+

import { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";

export default function Whatsapp() {
  return (
    <button
      className="fixed bottom-6 max-lg:bottom-10 text-4xl left-6 z-50 bg-green-500 text-white px-2 py-2 
        rounded-full shadow-lg  transition"
      aria-label="Scroll to top"
    >
      <a href="https://wa.me/917389181461">
        <BsWhatsapp />
      </a>
    </button>
  );
}
