// "use client";

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const images = [
//   "../../../images/Card_1.jpg",
//   "/images/image2.jpg",
//   "/images/image3.jpg",
// ];

// const Carousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto">
//       <Slider {...settings}>
//         {images.map((src, index) => (
//           <article key={index} className="h-64 cardCarousel">
//             <a href="">music</a>
//             <a href="">heart</a>
//             <div>
//               <h3>internationnal jazz</h3>
//               <p>30 apirl 2023 - jakartar, indonesia</p>
//               <p>135 euros</p>
//             </div>
//             <figure>
//               <img
//                 src={src}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </figure>

//           </article>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;


"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";  // Importer next/image
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/images/Card_1.jpg",
  "/images/Card_1.jpg",
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((src, index) => (
          <article key={index} className=" cardCarousel relative">
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
};

export default Carousel;
