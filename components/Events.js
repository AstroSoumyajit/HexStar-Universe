import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {GrPrevious} from 'react-icons/gr';
import {GrNext} from 'react-icons/gr';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Pagination, Navigation} from 'swiper';

const Events = () => {
  return (
    <div className='box-border'>
      <h1 className="font-cascade bg-clip-text md:text-4xl my-8 bg-gradient-to-b from-[#FFFFFF] to-[#00FFF0] text-transparent text-2xl">
        Events
      </h1>
      <div className="py-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          showsPagination={false}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src='/Images/Events/frame1.png' className='m-auto'/></SwiperSlide>
          <SwiperSlide><img src='/Images/Events/frame2.png' className='m-auto'/></SwiperSlide>
          <SwiperSlide><img src='/Images/Events/frame3.png' className='m-auto'/></SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
};

export default Events;
