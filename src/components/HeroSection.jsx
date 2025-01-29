import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './HeroSection.css';

const HeroSection = () => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed of autoplay
  };

  return (
    <section className="main-hero">
      <div className="overlay-bg"></div> {/* Overlay that covers the entire background */}
      <div className="content-box">
        <h1 className="headline">Welcome to My Awesome Website!</h1>
        <p className="subheadline">
          We provide innovative solutions to take your business to the next level.
        </p>
        <a href="/services" className="cta-link">
          Explore Our Services
        </a>
      </div>

      {/* Carousel */}
      <div className="slider-wrapper">
        <Slider {...settings}>
          <div className="slide-item">
            <img
              src="https://media.istockphoto.com/id/1465056864/photo/large-production-line-with-industrial-robot-arms-at-modern-bright-factory-solar-panels-are.jpg?s=612x612&w=0&k=20&c=yqclk4Li5opfMfpaoPua734of0ZaDv39NDT6C3goDC4="
              alt="Slide 1"
              className="slider-image"
            />
          </div>
          <div className="slide-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWJbt8Li2HrA8NbT6naYelnAlJrxS209T7w&s"
              alt="Slide 2"
              className="slider-image"
            />
          </div>
          <div className="slide-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_tD3r-JPgIu4ow9WTNfTZz-0DP4enIUklT1IL_x215jzoG16-4DW6RwjDs5kaWaVNr4&usqp=CAU"
              alt="Slide 3"
              className="slider-image"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
