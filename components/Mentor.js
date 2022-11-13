import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { useState } from "react";

const Mentor = () => {
  const mentorData = [
    {
      image: "/Images/mentor/image1.png",
    },
    {
      image: "/Images/mentor/image2.png",
    },
    {
      image: "/Images/mentor/image3.png",
    },
    {
      image: "/Images/mentor/image4.png",
    },
    {
      image: "/Images/mentor/image5.png",
    },
  ];
  const [mySwiper, setMySwiper] = useState(null);

  return (
    <div className="space-y-8">
      <div className="flex w-full items-center">
        <img src="/mentorHeading.png" className="mr-8 lg:w-[30rem] w-[20rem]" />
        <hr className="border-[#363636] border-2 w-full hidden md:block" />
      </div>
      <div className="w-full flex items-center justify-between">
        <button
          className="mr-1 text-[#fff] rounded-full"
          onClick={() => {
            if (mySwiper) mySwiper.slidePrev();
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
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper homeSwiperSliderCards mx-auto"
        >
          {mentorData.map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center space-y-4">
                  <img src={data.image} className="max-w-[18rem]" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className="mr-1 text-[#fff] rounded-full"
          onClick={() => {
            if (mySwiper) mySwiper.slideNext();
          }}
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </div>
  );
};

export default Mentor;
