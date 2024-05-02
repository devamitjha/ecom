import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.scss";
function Hero() {
  const sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className='custome_nav'>
        <div className='slide slide_prev' onClick={previous}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div className='slide slide_next' onClick={next}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        <div className="hero-item">
          <img src={process.env.PUBLIC_URL + "/images/fs.jpg"} alt="fs" />
        </div>
        <div className="hero-item">
          <img src={process.env.PUBLIC_URL + "/images/platinum.jpg"} alt="platinum" />
        </div>
      </Slider>
    </>
  )
}

export default Hero