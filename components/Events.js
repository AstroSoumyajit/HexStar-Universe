import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {GrPrevious} from 'react-icons/gr';
import {GrNext} from 'react-icons/gr';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import CountUp from 'react-countup';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Pagination, Navigation,} from 'swiper';

const Events = () => {
  const [mySwiper, setMySwiper] = useState (null);
  const [showCounter, setShowCounter] = useState (false);

  useEffect (() => {
    window.addEventListener ('scroll', () => {
      const windowHeight = window.pageYOffset;
      console.log (windowHeight);
      if (windowHeight >= 2800) {
        setShowCounter (true);
      }
    });
  }, []);
  return (
    <div className="box-border" id="events">
      <h1 className="font-cascade bg-clip-text md:text-4xl my-8 bg-gradient-to-b from-[#FFFFFF] to-[#00FFF0] text-transparent text-lg hidden md:block">
        Events
      </h1>
      <img src="/eventHeading.png" className="md:hidden" />
      <div className="py-8 w-full flex items-center justify-between">
        <button
          className="mr-4 text-[#fff] rounded-full"
          onClick={() => {
            if (mySwiper) mySwiper.slidePrev ();
          }}
        >
          <IoIosArrowBack size={30} />
        </button>
        <Swiper
          onInit={ev => setMySwiper (ev)}
          slidesPerView={1}
          pagination={true}
          spaceBetween={30}
          navigation={true}
          loop={true}
          // navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper homeSwiperSliderCards mx-auto"
        >
          <SwiperSlide>
            <Link href=" https://unstop.com">
              <img src="/Images/EventComponent/frame1.png" className="m-auto" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://unstop.com/workshop/asteroid-search-campaign-30-hex-star-universe-335553">
              <img src="/Images/EventComponent/frame2.png" className="m-auto" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://unstop.com/quiz/cosmo-quiz-20-hex-star-universe-327402">
              <img src="/Images/EventComponent/frame3.png" className="m-auto" />
            </Link>
          </SwiperSlide>
        </Swiper>
        <button
          className="mr-4 text-[#fff] rounded-full"
          onClick={() => {
            if (mySwiper) mySwiper.slideNext ();
          }}
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
      {showCounter &&
        <div className="flex flex-col md:flex-row justify-around my-12 text-3xl font-sweet_sans_pro md:space-y-0 space-y-12">
          <div className="flex flex-col items-center space-y-2">
            <img src="Images/EventComponent/icon1.svg" className=" shadow-md" />
            <div className="flex items-center justify-center text-white shadow-md">
              <CountUp start={0} end={2500} duration={5} /><span>+</span>
            </div>
            <h1 className="text-white text-[18px] shadow-md">
              Students OutReach
            </h1>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img src="Images/EventComponent/icon2.svg" />
            <div className="flex items-center justify-center text-white">
              <CountUp start={0} end={20} duration={5} /><span>+</span>
            </div>
            <h1 className="text-white text-[18px]">
              MasterClass
            </h1>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img src="Images/EventComponent/icon3.svg" />
            <div className="flex items-center justify-center text-white">
              <CountUp start={0} end={30} duration={5} />
              <span>+</span>
            </div>
            <h1 className="text-white text-[18px]">
              Events
            </h1>
          </div>
        </div>}

    </div>
  );
};

export default Events;
