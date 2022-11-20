import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { Ticker } from "react-ticker";

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
      <div className="flex w-full items-center">
        <h1 className="font-gilroy bg-clip-text md:text-4xl my-8 text-white text-lg mr-8 whitespace-nowrap">
          Collaborators and Partners
        </h1>
        <div className="border-[#363636] border-2 w-full" />
      </div>
      <div className="overflow-hidden">
        <div className="flex -mx-4 img-ticker items-center">
          {collaboratorData.map((data, i) => {
            return (
              <img
                className="mx-16 flex-none"
                src={data.image}
                key={i}
              />
            );
          })}
          {collaboratorData.map((data, i) => {
            return (
              <img
                className="mx-16 flex-none"
                src={data.image}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
