import React from 'react';
import {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeroCarouselCard from './HeroCarouselCard';
import {GrNext} from 'react-icons/gr';
import {GrPrevious} from 'react-icons/gr';

const Hero = () => {
  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState (0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow style={{color:'black'}}/>,
    prevArrow: <PrevArrow style={{color:'black'}}/>,
    beforeChange: (current, next) => setImageIndex (next),
  };
  return (
    <div className="ml-16 App">
      <Slider {...settings}>
        <HeroCarouselCard />
      </Slider>

    </div>
  );
};

export default Hero;
