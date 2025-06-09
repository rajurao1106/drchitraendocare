import React from "react";
import Services from "./Services";
import AboutUs from "./AboutUs";
import WhyChooseUs from "./WhyChooseUs";
import Hero from "./Hero";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";

export default function Homepage() {
  return (
    <div className="font-[roboto]">
      <Hero/>
      <AboutUs />
      <Services />
      <WhyChooseUs/>
      <Testimonials/>
      <Gallery/>
      <ContactUs/>
    
    </div>
  );
}
