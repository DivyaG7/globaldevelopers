import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from '../../assets/client-logo1.png'
import client2 from '../../assets/client-logo2.png'
import client3 from '../../assets/client-logo3.png'
import client4 from '../../assets/client-logo4.png'
import client5 from '../../assets/client-logo5.png'
import client6 from '../../assets/client-logo6.png'
import client7 from '../../assets/client-logo7.png'

const clients = [client1, client2, client3, client4, client5, client6, client7];

function ClientCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings} className="clients mt-4">
      {clients.map((logo, index) => (
        <div key={index} className="col-lg-3 col-md-6 mb-3">
            <div className="client-box p-4">
          <img src={logo} alt="client-logo" className="img-fluid" />
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default ClientCarousel;
