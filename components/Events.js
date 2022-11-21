import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Link from "next/link";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Events = () => {
  const [mySwiper, setMySwiper] = useState(null);
  const [showCounter, setShowCounter] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const windowHeight = window.pageYOffset;
      if (windowHeight >= 2800) {
        setShowCounter(true);
      }
    });
  }, []);
  return (
    <div className="box-border" id="events">
      <div className="flex w-full items-center">
        <h1 className="font-gilroy bg-clip-text md:text-4xl my-8 text-white text-lg mr-8 whitespace-nowrap">
          Events
        </h1>
        <hr className="border-[#363636] border-2 w-full" />
      </div>
  
      <div className="py-8 w-full flex items-center justify-between">
        <button
          className="mr-4 text-[#fff] rounded-full"
          onClick={() => {
            if (mySwiper) mySwiper.slidePrev();
          }}
        >
          <IoIosArrowBack size={30} />
        </button>
        <Swiper
          onInit={(ev) => setMySwiper(ev)}
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
            <Link href="https://forms.gle/TFfXEFbTfmYRDfgX9">
              <img src="/Images/EventComponent/frame6.png" className="m-auto" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="">
              <img src="/Images/EventComponent/frame2.png" className="m-auto" />
            </Link>
          </SwiperSlide>
        </Swiper>
        <button
          className="mr-4 text-[#fff] rounded-full"
          onClick={() => {
            if (mySwiper) mySwiper.slideNext();
          }}
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
      {showCounter && (
        <div className="flex flex-col md:flex-row justify-around py-14 text-3xl font-sweet_sans_pro md:space-y-0 space-y-12 bg-[#171717] rounded-md">
          <div className="flex flex-col items-center space-y-2">
            {/* <img src="Images/EventComponent/icon1.svg" className=" shadow-md" /> */}
            <div className="flex items-center justify-center text-white shadow-md font-gilroy font-bold text-4xl relative pb-4">
              <CountUp start={0} end={25} duration={5} />
              <span>K+</span>
              <img src="/border.png" className="absolute bottom-0 " />
            </div>
            <h1 className="text-white text-[18px] shadow-md font-gilroy">
              Students OutReach
            </h1>
          </div>
          <div className="flex flex-col items-center space-y-2">
            {/* <img src="Images/EventComponent/icon2.svg" /> */}
            <div className="flex items-center justify-center text-white font-gilroy font-bold text-4xl relative pb-1">
              <CountUp start={0} end={20} duration={5} />
              <span>+</span>
              <img src="/border.png" className="absolute bottom-0 " />
            </div>
            <h1 className="text-white text-[18px] font-gilroy">MasterClass</h1>
          </div>
          <div className="flex flex-col items-center space-y-2">
            {/* <img src="Images/EventComponent/icon3.svg" /> */}
            <div className="flex items-center justify-center text-white font-gilroy font-bold text-4xl relative pb-1">
              <CountUp start={0} end={100} duration={5} />
              <span>+</span>
              <img src="/border.png" className="absolute bottom-0 " />
            </div>
            <h1 className="text-white text-[18px] font-gilroy">Space Talks</h1>
          </div>
          <div className="flex flex-col items-center space-y-2">
            {/* <img src="Images/EventComponent/icon3.svg" /> */}
            <div className="flex items-center justify-center text-white font-gilroy font-bold text-4xl relative pb-1">
              <CountUp start={0} end={80} duration={5} />
              <span>+</span>
              <img src="/border.png" className="absolute bottom-0 " />
            </div>
            <h1 className="text-white text-[18px] font-gilroy">Events</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
