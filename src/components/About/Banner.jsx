import React from "react";
import slide from "../../assets/slide.png";
// import leftArrow from "../../assets/left-arrow.png";
// import rightArrow from "../../assets/right-arrow.png";

const Banner = () => {
  return (
    <div
      id="imageCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="7000"
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {/* <button
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button> */}
      </div>

      {/* Carousel Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={slide} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={slide} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>

      {/* Custom Previous Button */}
      {/* <button
        className="carousel-control-prev custom-control"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="prev"
      >
        <img src={leftArrow} alt="Previous" className="arrow-icon" />
      </button> */}

      {/* Custom Next Button */}
      {/* <button
        className="carousel-control-next custom-control"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="next"
      >
        <img src={rightArrow} alt="Next" className="arrow-icon" />
      </button> */}
    </div>
  );
};

export default Banner;
