import React from "react";
import Slider from "react-slick";
import { IoCall, IoTime } from "react-icons/io5";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";

export default function HeroSlider() {
  const settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    // autoplay: true,
    // autoplaySpeed: 5000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // pauseOnHover: false,
    arrows: false,
  };

  const slides = [<Hero1 />, <Hero2 />,<Hero3/>];

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>{slide}</div>
        ))}
      </Slider>
    </div>
  );
}
