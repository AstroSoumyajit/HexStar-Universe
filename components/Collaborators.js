import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const testimonials = [
  {
    key: Date.now(),
    comment:
      " “A good platform to learn new things. It will help the enthusiast people to know more about the universe”",
    speaker: "—  Md Ahsanul Haque Biplob",
    speakerdetails: "Bangladesh",
  },
  {
    key: Date.now(),
    comment:
      "“It's a great organization working towards creating interest in young minds regarding Space Science. ”",
    speaker: " —  Abhijeet Jadhav",
    speakerdetails: "Student",
  },
  {
    key: Date.now(),
    comment:
      "“A great initiative. Thank you for bringing such opportunities to everyone who are interested to learn about the universe.”",
    speaker: "—  Sowkhya Shanbhog, ",
    speakerdetails: "Student",
  },
];

const collaboratorData = [
  {
    image: "/Images/collaborators/image1.png",
  },
  {
    image: "/Images/collaborators/image2.png",
  },
  {
    image: "/Images/collaborators/image3.png",
  },
  {
    image: "/Images/collaborators/image4.png",
  },
  {
    image: "/Images/collaborators/image5.png",
  },
  {
    image: "/Images/collaborators/image6.png",
  },
  {
    image: "/Images/collaborators/image7.png",
  },
];

const Collaborators = () => {
  const [mySwiper, setMySwiper] = useState(null);
  return (
    <div className="mt-12 mb-36" id="collaborators">
      <h1 className="font-cascade bg-clip-text md:text-4xl my-8 bg-gradient-to-b from-[#FFFFFF] to-[#8000FF] text-transparent text-lg">
        Collaborators & Partners
      </h1>
      <div className="w-full flex items-center justify-between xl:py-12 md:py-8 py-4">
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
          autoplay={{ delay: 3000 }}
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
          {collaboratorData.map((data, i) => {
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
      <div className="md:w-4/5 mx-auto my-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            760: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((data) => {
            return (
              <SwiperSlide key={data.key}>
                <div className="relative border border-white rounded-3xl text-white font-gilroy space-y-8 md:p-12 p-8 md:text-lg text-sm text-center">
                  <img src="/QuoteLeft.png" className="absolute top-4 left-4" />
                  <h1>{data.comment}</h1>
                  <h1>⭐⭐⭐⭐⭐</h1>
                  <h1>
                    {data.speaker}, {data.speakerdetails}
                  </h1>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Collaborators;
