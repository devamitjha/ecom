import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./categorySlider.scss";

const CategorySlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll:2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="slider-container">
        <Slider {...settings}>
            <div className="slider-item position-relative">
                <img src={process.env.PUBLIC_URL + "/images/category/1.jpg"} alt="category" />
                <div className="cat-name position-absolute start-50 translate-middle-x"> Women's Shirts </div>
            </div>
            <div className="slider-item position-relative">
                <img src={process.env.PUBLIC_URL + "/images/category/2.jpg"} alt="category" />
                <div className="cat-name position-absolute start-50 translate-middle-x">Dresses</div>
            </div>
            <div className="slider-item position-relative">
                <img src={process.env.PUBLIC_URL + "/images/category/3.jpg"} alt="category" />
                <div className="cat-name position-absolute start-50 translate-middle-x">Blazers</div>
            </div>
            <div className="slider-item position-relative">
                <img src={process.env.PUBLIC_URL + "/images/category/7.jpg"} alt="category" />
                <div className="cat-name position-absolute start-50 translate-middle-x"> Women's Shirts </div>
            </div>
            <div className="slider-item position-relative">
                <img src={process.env.PUBLIC_URL + "/images/category/4.jpg"} alt="category" />
                <div className="cat-name position-absolute start-50 translate-middle-x">Sports Wear</div>
            </div>
            <div className="slider-item position-relative">
                <img src={process.env.PUBLIC_URL + "/images/category/5.jpg"} alt="category" />
                <div className="cat-name position-absolute start-50 translate-middle-x">Tshirt</div>
            </div>
            <div className="slider-item position-relative">
                <img src={process.env.PUBLIC_URL + "/images/category/6.jpg"} alt="category" />
                <div className="cat-name position-absolute start-50 translate-middle-x">Winter Coat</div>
            </div>            
            <div className="slider-item position-relative">
                <img src={process.env.PUBLIC_URL + "/images/category/8.jpg"} alt="category" />
                <div className="cat-name position-absolute start-50 translate-middle-x"> Women's Shirts </div>
            </div>
        </Slider>
    </div>
  )
}

export default CategorySlider