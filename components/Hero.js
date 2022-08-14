import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Navigation, Pagination} from 'swiper';

const swiperSlideData = [
  {
    imgSrc: '/Images/HeroCarouselImage/group7.png',
    href: '#',
  },
  {
    imgSrc: '/Images/HeroCarouselImage/group6.png',
    href: 'https://rzp.io/l/RocketryMasterclass',
  },
  {
    imgSrc: '/Images/HeroCarouselImage/group1.png',
    href: 'https://youtu.be/9yvBUORc-0s',
  },
  {
    imgSrc: '/Images/HeroCarouselImage/group2.png',
    href: 'https://pages.razorpay.com/orbitalmechanics',
  },
  {
    imgSrc: '/Images/HeroCarouselImage/group3.png',
    href: 'https://youtu.be/NCrA8CjO_tU',
  },
  {
    imgSrc: '/Images/HeroCarouselImage/group5.png',
    href: 'https://youtu.be/x4ZpD2HYvfw',
  },
];

const Hero = () => {
  return (
    <div className="my-8">
      <Swiper
        // navigation={true}
        pagination={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper child:cursor-pointer"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {swiperSlideData.map ((item, i) => {
          return (
            <SwiperSlide key={i}>
              <img
                src={item.imgSrc}
                className="m-auto"
                onClick={() =>
                  (window.location.href = `${item.href}`)}
              />
            </SwiperSlide>
          );
        })}

      </Swiper>
    </div>
  );
};

export default Hero;