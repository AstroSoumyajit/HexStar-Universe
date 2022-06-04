import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation} from 'swiper';

const Hero = () => {
  return (
    <div className="my-8">
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src="/Images/HeroCarouselImage/group1.png" className="m-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/HeroCarouselImage/group2.png" className="m-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/HeroCarouselImage/group3.png" className="m-auto" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
