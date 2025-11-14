// ClientCarousel.jsx
import React from "react";
import Slider from "react-slick";

// IMPORTANT: keep slick CSS imports at top-level (e.g. in index.js or this file)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import client1 from '../../assets/client-logo1.png';
import client2 from '../../assets/client-logo2.png';
import client3 from '../../assets/client-logo3.png';
import client4 from '../../assets/client-logo4.png';
import client5 from '../../assets/client-logo5.png';
import client6 from '../../assets/client-logo6.png';
import client7 from '../../assets/client-logo7.png';

const clients = [client1, client2, client3, client4, client5, client6, client7];

export default function ClientCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,            // transition duration
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,    // NOT 0 — more reliable across devices
    cssEase: "linear",
    pauseOnHover: true,     // true helps mobile when user touches
    arrows: false,
    adaptiveHeight: true,
    centerMode: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="client-carousel-wrapper p-3">
      <Slider {...settings} className="clients">
        {clients.map((logo, index) => (
          <div key={index} className="client-slide">
            <div className="client-box p-3">
              <img src={logo} alt={`client-${index}`} className="client-img" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
