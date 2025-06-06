import React from "react";

const testimonials = [
  {
    name: "Dr. Meera S.",
    title: "Patient",
    quote:
      "Amazing service and friendly staff! I was nervous at first, but they made me feel very comfortable throughout the treatment.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rajiv Nair",
    title: "Client",
    quote:
      "Professional and clean environment. The results exceeded my expectations. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Priya Desai",
    title: "Patient",
    quote:
      "The entire team is so caring. I’ve never been more confident with my smile. Thank you!",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What Our <span className="text-blue-600">Patients Say</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Real experiences from our happy clients who trusted us with their dental care.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] p-6 rounded-xl shadow hover:shadow-md transition duration-300"
            >
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
              <p className="text-gray-700 text-sm leading-relaxed">"{item.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
