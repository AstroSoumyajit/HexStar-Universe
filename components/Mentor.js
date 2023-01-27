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
      <div className="flex w-full items-center">
        <h1 className="font-gilroy bg-clip-text md:text-4xl my-8 text-white text-lg mr-8 whitespace-nowrap">
          Mentor & Instructor
        </h1>
        <hr className="border-[#363636] border-2  w-full" />
      </div>
      <div className="flex justify-start xl:space-x-20 lg:space-x-16 md:space-x-12 space-x-6 items-center overflow-scroll scrollbar-hide ">
        {mentorData.map((data, i) => {
          return (
            <div className="flex flex-col items-center space-y-4" key={i}>
              <img src={data.image} className="max-w-[18rem]" />
            </div>
          );
        })}
        <div className="w-1/12 h-full bg-gradient-to-r from-transparent to-black absolute right-0 top-0">

        </div>
      </div>
    </div>
  );
};

export default Mentor;
