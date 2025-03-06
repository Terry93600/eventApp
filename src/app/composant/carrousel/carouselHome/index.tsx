import React from "react";
import Slider from "react-slick";
import Image from "next/image";  // Importer next/image
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    slidesToScroll: 1,
    variableWidth: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="test">
      {images.map((src, index) => (
          <article key={index} className=" cardCarousel relative" style={{ width: 380, }}>
            <a href="">music</a>
            <a href="">heart</a>
            <div>
              <h3>International Jazz</h3>
              <p>30 April 2023 - Jakarta, Indonesia</p>
              <p>$135</p>
            </div>
            <figure className="relative ">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className=" rounded-lg"
              />
            </figure>
          </article>
        ))}
      </Slider>
    </div>
  );
}

export default VariableWidth;
