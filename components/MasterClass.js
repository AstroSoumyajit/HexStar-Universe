import React from 'react';
import Link from 'next/link';
import {Swiper, SwiperSlide} from 'swiper/react';
// import 'swiper/css/pagination';
// import 'swiper/css'
// import 'swiper/css/navigation'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Pagination, Navigation, Autoplay } from 'swiper'
import { useState } from 'react';

const MasterClassData = [
  {
    image: '/Images/masterclass/image1.png',
    link: 'https://pages.razorpay.com/orbitalmechanics',
    color: 'bg-[#312DFF]'
  },
  {
    image: '/Images/masterclass/image2.png',
    link: 'https://unstop.com/workshop/asteroid-search-campaign-30-hex-star-universe-335553',
    color: 'bg-[#9E00FF]'
  },
  {
    image: '/Images/masterclass/image3.png',
    link: 'https://rzp.io/l/RocketryMasterclass',
    color: 'bg-[#FF8A00]'
  },
];

const MasterClass = () => {
  const [mySwiper, setMySwiper] = useState(null)
  return (
    <div className="" id="masterclass">
      <h1 className="font-cascade bg-clip-text md:text-4xl my-8 bg-gradient-to-b from-[#FFFFFF] to-[#8000FF] text-transparent text-lg hidden md:block">
        MASTERCLASS
      </h1>
      <img src="/masterclassHeading.png" className="md:hidden" />
      <div className='w-full flex items-center justify-between'>
          <button
            className='mr-4 text-[#fff] rounded-full'
            onClick={() => {
              if (mySwiper) mySwiper.slidePrev()
            }}
          >
            <IoIosArrowBack size={30} />
          </button>
          <Swiper
            onInit={(ev) => setMySwiper(ev)}
            slidesPerView={2}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{ delay: 5000 }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className='mySwiper homeSwiperSliderCards mx-auto'
          >
             {MasterClassData.map ((data, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center space-y-4">
                <img src={data.image} className="w-3/4" />
                <Link href={data.link}>
                  <div className="relative">
                    <button className={`rounded-md px-4 font-sweet_sans_pro text-white py-[3px] ${data.color} text-lg relative z-20`}>
                      Register Now
                    </button>
                    <div className={`absolute ${data.color} w-full h-full inset-0 blur-md rounded-md`} />
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
          </Swiper>
          <button
            className='mr-4 text-[#fff] rounded-full'
            onClick={() => {
              if (mySwiper) mySwiper.slideNext()
            }}
          >
            <IoIosArrowForward size={30} />
          </button>
        </div>

      <div className="flex md:flex-row flex-col items-center justify-center md:space-x-8 space-y-8 md:space-y-0 my-8" />
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-[#363636]" />
        <span className="flex-shrink mx-12">
          <button className="text-white bg-gradient-to-b from-[#9E00FF] via-[#8F00FF] to-[#130EFF] rounded-full px-4 py-[3px] font-sweet_sans_pro text-lg">
            More
          </button>
        </span>
        <div className="flex-grow border-t border-[#363636]" />
      </div>
    </div>
  );
};

export default MasterClass;
