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
  ];
  const [mySwiper, setMySwiper] = useState(null);

  return (
    <div className="space-y-8 relative">
      <h1 className="lg:text-6xl md:text-4xl text-2xl font-gilroy font-bold text-white mb-3">
        Mentor
      </h1>
      <div className="flex justify-start xl:space-x-20 lg:space-x-16 md:space-x-12 space-x-6 items-center overflow-scroll scrollbar-hide ">
        {mentorData.map((data, i) => {
          return (
            <div className="flex flex-col items-center space-y-4" key={i}>
              <img src={data.image} className="max-w-[18rem]" />
            </div>
          );
        })}
        <div className="w-1/12 h-full bg-gradient-to-r from-transparent to-black absolute right-0 top-0"></div>
      </div>
    </div>
  );
};

export default Mentor;
