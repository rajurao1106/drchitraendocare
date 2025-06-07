"use client";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-blue-50 py-16 px-4 md:px-12 lg:px-24 font-[roboto]">
      <div className="text-center mb-12">
        <span className="inline-block text-xs  font-[Noto_Sans] text-blue-600 bg-blue-100 px-4 py-1 rounded-full font-semibold uppercase tracking-wide mb-3 shadow">
          Contact Us
        </span>
        <h2 className="text-4xl font-bold text-gray-800  font-[Noto_Sans]">
          Get More <span className="text-blue-600">Information</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          We'd love to hear from you! Reach out with your questions or book your next appointment.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md grid md:grid-cols-2 gap-8 p-6 md:p-12">
        {/* Contact Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium  font-[Noto_Sans]">Your Name *</label>
              <input
                type="text"
                placeholder="First name here"
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium  font-[Noto_Sans]">Telephone *</label>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium  font-[Noto_Sans]">Email Address *</label>
              <input
                type="email"
                placeholder="Add email"
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium  font-[Noto_Sans]">Subject</label>
              <input
                type="text"
                placeholder="How can we help you?"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium  font-[Noto_Sans]">Comments / Questions *</label>
            <textarea
              rows={4}
              placeholder="Your message"
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info & Map */}
        <div className="bg-blue-950 text-white rounded-xl p-6 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4  font-[Noto_Sans]">Contact Us</h3>
            <div className="flex items-start space-x-3 mb-3">
              <MapPin className="w-5 h-5 mt-1" />
              <span>Shankar Nagar, Raipur, Chhattisgarh, India</span>
            </div>
            <div className="flex items-start space-x-3 mb-3">
              <Mail className="w-5 h-5 mt-1" />
              <span>smilecareclinic@mail.com</span>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 mt-1" />
              <span>+91 98765 43210</span>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
           <iframe
              title="Shankar Nagar Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14666.178032664643!2d81.6319377586185!3d21.25059633407574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddf6fd830eef%3A0x9b6a1e0c45a39c4c!2sShankar%20Nagar%2C%20Raipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1717658937781!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
