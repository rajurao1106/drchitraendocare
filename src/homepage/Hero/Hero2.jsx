
import familyImg from "../../assets/Homepage/Hero/family.png"; // Replace with your image path

export default function Hero2() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-[#F7F7F7] relative overflow-hidden">
      <div className="absolute  opacity-90 z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={familyImg}
            alt="Happy Family"
            width={600}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2  ">
          <h4 className="text-xl md:text-2xl font-light">Welcome to Dental Clinic</h4>
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Caring for all your <br />
            <span className="bg-white text-blue-800 px-2">family’s dental needs.</span>
          </h1>
          <p className="text-sm md:text-base max-w-md">
            Lorem ipsum dolor sit amet, consectetur cing elit. Suscisagittis leo sit met condimentum esti.
          </p>

          {/* Buttons */}
          <div className="space-x-4">
            <button className="bg-white text-blue-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-100">
              Book Now
            </button>
            <button className="border border-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
