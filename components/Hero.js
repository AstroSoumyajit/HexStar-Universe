import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Navigation, Pagination} from 'swiper';

const Hero = () => {
  return (
    <div className="my-8">
      <Swiper
        // navigation={true}
        pagination={true} 
        modules={[  Autoplay, Pagination]}
        className="mySwiper child:cursor-pointer"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            src="/Images/HeroCarouselImage/group1.png"
            className="m-auto"
            onClick={() =>
              (window.location.href =
                ' https://unstop.com/o/bg9OVwf?lb=vBuPjqb')}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Images/HeroCarouselImage/group2.png"
            className="m-auto"
            onClick={() =>
              (window.location.href =
                ' https://pages.razorpay.com/orbitalmechanics')}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Images/HeroCarouselImage/group3.png"
            className="m-auto"
            onClick={() =>
              (window.location.href = 'https://youtu.be/NCrA8CjO_tU')}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
