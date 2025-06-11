import React from "react";
import OurAim from "./OurAim";
import WhyChooseUs from "./WhyChooseUs";
import AboutDoctor from "./AboutDoctor";
import KnowYourDoctor from "./KnowYourDoctor";

export default function AboutUs() {
  return (
    <div>
      <AboutDoctor />
      <KnowYourDoctor/>
      <OurAim />
      <WhyChooseUs />
    </div>
  );
}
