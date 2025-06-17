"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import bgclinic from "../assets/ContactUs/contactus.jpg";
import axios from "axios";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dob: "",
    gender: "",
    city: "",
    service: "",
    appointmentDate: "",
    time: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "https://drchitraendocare-0zlt.onrender.com/api/appointment",
        formData
      );
      setMessage(res.data.message);
      setFormData({
        name: "",
        phone: "",
        dob: "",
        gender: "",
        city: "",
        service: "",
        appointmentDate: "",
        time: "",
      });
    } catch (error) {
      setMessage("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
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
        <div className="max-w-[1300px] w-full px-6 py-20 md:px-20 text-center text-white 
        flex flex-col items-center justify-center">
          <span className="inline-block text-xs font-[Noto_Sans] text-blue-600 bg-blue-100 px-4 py-1
           rounded-full font-semibold uppercase tracking-wide mb-3 shadow">
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
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto p-4"
          >
            <input
              name="name"
              placeholder="Full name"
              required
              value={formData.name}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              name="phone"
              placeholder="Enter your mobile"
              required
              value={formData.phone}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="date"
              name="dob"
              required
              value={formData.dob}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <select
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              name="city"
              placeholder="Your city"
              required
              value={formData.city}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="">-- Choose a Service --</option>
              <option value="Dental Cleaning">Dental Cleaning</option>
              <option value="Root Canal">Root Canal</option>
              <option value="Braces">Braces</option>
              {/* Add more as needed */}
            </select>
            <input
              type="date"
              name="appointmentDate"
              required
              value={formData.appointmentDate}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="p-2 border rounded"
            />

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500"
            >
              {loading ? "Booking..." : "Book an Appointment"}
            </button>

            {message && (
              <p className="md:col-span-2 text-green-600 mt-2">{message}</p>
            )}
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
                <span>smilecareclinic@mail.com</span>
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
