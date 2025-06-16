import React from "react";
import Slider from "react-slick";
import patient1 from "../assets/Homepage/Testimonials/patient1.png";
import patient2 from "../assets/Homepage/Testimonials/patient2.png";
import patient3 from "../assets/Homepage/Testimonials/patient3.png";
import patient4 from "../assets/Homepage/Testimonials/patient4.png";
import patient5 from "../assets/Homepage/Testimonials/patient5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Anup Dave",
    title: "Patient",
    quote:
      "It is very genuine click. Charges are very reasonable and treatment is excellent.",
    image: patient1,
  },
  {
    name: "Vinayak Dave",
    title: "Patient",
    quote:
      "Excellent dental clinic with highly skilled dentist and modern equipment. The clinic maintains top-notch hygiene standards. The staff is friendly, professional, and always attentive to patient comfort. Highly recommended for anyone looking for reliable and good dental care in Raipur!",
    image: patient3,
  },
  {
    name: "Kesri Rituraj",
    title: "Patient",
    quote: "Great ambience and humble doctor — a rare combination.",
    image: patient5,
  },
  {
    name: " Pramod Kr Dalmia",
    title: "Patient",
    quote:
      "Very polite & accurate work. Not like typical dentist clinics where one work become multiple sittings. Quite reasonable treatment cost. Good advice for dental care.",
    image: patient4,
  },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20 flex justify-center items-center flex-col">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-[Noto_Sans]">
          What Our <span className="text-blue-600">Patients Say</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Real experiences from our happy clients who trusted us with their
          dental care.
        </p>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-[#F8FAFC] p-6 rounded-xl shadow hover:shadow-md transition duration-300 max-w-2xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <a href="https://www.google.com/search?q=chitra+dental+clinic&oq=chit&gs_lcrp=EgZjaHJvbWUqDggBEEUYJxg7GIAEGIoFMgYIABBFGDwyDggBEEUYJxg7GIAEGIoFMgYIAhBFGDkyCggDEC4YsQMYgAQyCggEEC4YsQMYgAQyEAgFEC4YrwEYxwEYsQMYgAQyBggGEEUYPTIGCAcQRRg90gEINzQ2OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x3a28dd69bfaa335d:0x3f1ae16ce2a60c6c,1,,,,">
        <button
          className="hidden md:block bg-yellow-300 hover:bg-yellow-400 text-black font-[Noto_Sans] 
              font-semibold px-8 py-3 rounded-lg"
        >
          Read More
        </button>
      </a>
    </section>
  );
};

export default Testimonials;
