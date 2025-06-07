"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Install lucide-react

const faqs = [
  {
    question: "How often should I have a dental check-up?",
    answer:
      "It is generally recommended to have a dental check-up every six months to ensure optimal oral health.",
  },
  {
    question: "What should I do if I have a dental emergency?",
    answer:
      "Contact your dentist immediately. In the meantime, rinse your mouth with warm water and apply a cold compress to reduce swelling.",
  },
  {
    question: "What is your approach to pain management during dental procedures?",
    answer:
      "We use modern anesthesia techniques and gentle care to ensure your comfort throughout the treatment.",
  },
  {
    question: "What options are available for replacing missing teeth?",
    answer:
      "We offer dental implants, bridges, and dentures to suit your needs and restore your smile.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white px-4 md:px-12 lg:px-24 py-16">
      <div className="text-center mb-12">
        <span className="inline-block font-[Noto_Sans] text-xs text-blue-600 bg-blue-100 px-3 py-1 rounded-full font-medium uppercase tracking-wide mb-2">
          FAQ
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold font-[Noto_Sans]">
          <span className="text-blue-600">Frequently</span> Asked Questions
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Find answers to common questions about our dental services and care.
        </p>
      </div>

      <div className="space-y-4 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full px-6 py-4 text-left flex text-lg font-bold justify-between items-center 
               transition-colors duration-300 font-[Noto_Sans] ${openIndex !== index?"text-gray-800":"text-blue-600"}`}
            >
              <span>{faq.question}</span>
             
                <ChevronDown className={`w-5 h-5 ${openIndex === index?" duration-500 rotate-180":" duration-500"}
                 text-blue-600`} />
              
            </button>

            <div
              className={`px-6 overflow-hidden text-gray-600  text-sm transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 py-4 " : "max-h-0"
              }`}
            >
              <div className="transition-opacity duration-300 text-base">
                {openIndex === index && <p>{faq.answer}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
