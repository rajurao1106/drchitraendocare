'use client'; // if using app directory in Next.js 13+

import { useState, useEffect } from 'react';
import { BsWhatsapp } from 'react-icons/bs';


export default function Whatsapp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 max-lg:bottom-10 text-4xl left-6 z-50 bg-green-500 text-white px-2 py-2 
        rounded-full shadow-lg hover:bg-gray-700 transition"
        aria-label="Scroll to top"
      >
        <BsWhatsapp/>
      </button>
    )
  );
}
