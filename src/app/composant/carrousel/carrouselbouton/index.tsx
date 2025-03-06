
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"

const images = [
  "/images/Card_1.jpg",
  "/images/Card_1.jpg",
  "/images/Card_1.jpg",
  "/images/Card_1.jpg",
  "/images/Card_1.jpg",
];

function VariableWidth() {
  var settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 4,
    variableWidth: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="test">
      {images.map((src, index) => (
          <article key={index} className=" cardCarousel relative buttonCarou" style={{ width: 150, }}>
            <a href={src}>heart</a>
          </article>
        ))}
      </Slider>
    </div>
  );
}

export default VariableWidth;
