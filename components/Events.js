import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {GrPrevious} from 'react-icons/gr';
import {GrNext} from 'react-icons/gr';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Pagination, Navigation} from 'swiper';

const Events = () => {
  return (
    <div className="box-border" id="events">
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
          <SwiperSlide>
            <Link href="https://unstop.com/workshop/asteroid-search-campaign-30-hex-star-universe-335553">
              <img src="/Images/Events/frame1.png" className="m-auto" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://unstop.com/quiz/cosmo-quiz-20-hex-star-universe-327402">
              <img src="/Images/Events/frame2.png" className="m-auto" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://unstop.com">
              <img src="/Images/Events/frame3.png" className="m-auto" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
};

export default Events;
