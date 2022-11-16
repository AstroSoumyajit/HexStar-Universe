import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css/pagination';
// import 'swiper/css'
// import 'swiper/css/navigation'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Pagination, Navigation, Autoplay } from "swiper";
import { useState } from "react";

const MasterClassData = [
  {
    image: "/Images/masterclassNew/image1.png",
    link: "https://unstop.com/workshop/asteroid-search-campaign-30-hex-star-universe-335553",
  },
  {
    image: "/Images/masterclassNew/image2.png",
    link: "https://rzp.io/l/DeepSkyImgProcessing",
  },
  {
    image: "/Images/masterclassNew/image3.png",
    link: "https://pages.razorpay.com/orbitalmechanics",
  },
  {
    image: "/Images/masterclassNew/image4.png",
    link: "https://rzp.io/l/RocketrymasterclassNew",
  },
];

const MasterClass = () => {
  const [mySwiper, setMySwiper] = useState(null);
  return (
    <div className="space-y-4" id="masterclass">
      <div className="hidden md:block">
        <div className="flex w-full items-center">
          <h1 className="font-gilroy bg-clip-text md:text-4xl my-8 text-white text-lg mr-8">
            Masterclass
          </h1>
          <hr className="border-[#363636] border-2  hidden md:block w-[80%]" />
        </div>
      </div>

      <img src="/masterclassHeading.png" className="md:hidden" />
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
          {MasterClassData.map((data, i) => {
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

      {/* <div className="flex md:flex-row flex-col items-center justify-center md:space-x-8 space-y-8 md:space-y-0 my-8" /> */}
      <div className="relative flex py-4 items-center">
        <button className="text-white border border-white rounded-full mx-auto  px-4 py-2 font-sweet_sans_pro text-xl">
          More
        </button>
      </div>
    </div>
  );
};

export default MasterClass;
