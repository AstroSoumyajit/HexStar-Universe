import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const WSW = () => {
  const Usw = [
    {
      image: "/Images/WSW/image1.png",
      link: "https://unstop.com/workshop/asteroid-search-campaign-30-hex-star-universe-335553",
    },
    {
      image: "/Images/WSW/image2.png",
      link: "https://rzp.io/l/DeepSkyImgProcessing",
    },
    {
      image: "/Images/WSW/image3.png",
      link: "https://pages.razorpay.com/orbitalmechanics",
    },
    {
      image: "/Images/WSW/image4.png",
      link: "https://rzp.io/l/RocketryMasterclass",
    },
    {
      image: "/Images/WSW/image5.png",
      link: "https://rzp.io/l/RocketryMasterclass",
    },
    {
      image: "/Images/WSW/image6.png",
      link: "https://rzp.io/l/RocketryMasterclass",
    },
    {
      image: "/Images/WSW/image7.png",
      link: "https://rzp.io/l/RocketryMasterclass",
    },
  ];
  const [mySwiper, setMySwiper] = useState(null)
  return (
    <div>
      <div className="flex w-full items-center">
        <img src="/headingWSW.png" className="md:mr-8 w-[12rem] md:w-fit mr-4" />
        <hr className="border-[#363636] border-2 w-full" />
      </div>
      <div className="py-8 w-full flex items-center justify-between">
      <button
            className='mr-1 text-[#fff] rounded-full'
            onClick={() => {
              if (mySwiper) mySwiper.slidePrev()
            }}
          >
            <IoIosArrowDropleftCircle size={30} />
          </button>
        <Swiper
          onInit={(ev) => setMySwiper(ev)}
          slidesPerView={2}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{ delay: 2000 }}
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
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper homeSwiperSliderCards mx-auto"
        >
          {Usw.map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center space-y-4">
                  <img src={data.image} className="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
            className='mr-1 text-[#fff] rounded-full'
            onClick={() => {
              if (mySwiper) mySwiper.slideNext()
            }}
          >
            <IoIosArrowDroprightCircle size={30} />
          </button>
      </div>
    </div>
  );
};

export default WSW;
