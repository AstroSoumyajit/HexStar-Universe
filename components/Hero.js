import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";

const swiperSlideData = [
  {
    imgSrc: "/Images/HeroCarouselImage/group7.png",
    href: "https://youtu.be/hoh2Qa51qFU",
  },
  {
    imgSrc: "/Images/HeroCarouselImage/group6.png",
    href: "https://rzp.io/l/RocketryMasterclass",
  },
  {
    imgSrc: "/Images/HeroCarouselImage/group1.png",
    href: "https://youtu.be/9yvBUORc-0s",
  },
  {
    imgSrc: "/Images/HeroCarouselImage/group2.png",
    href: "https://pages.razorpay.com/orbitalmechanics",
  },
  {
    imgSrc: "/Images/HeroCarouselImage/group3.png",
    href: "https://youtu.be/NCrA8CjO_tU",
  },
  {
    imgSrc: "/Images/HeroCarouselImage/group5.png",
    href: "https://youtu.be/x4ZpD2HYvfw",
  },
];

const Hero = () => {
  return (
    <div className="my-8">
      {/* <Swiper
        // navigation={true}
        pagination={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper child:cursor-pointer"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {swiperSlideData.map ((item, i) => {
          return (
            <SwiperSlide key={i}>
              <img
                src={item.imgSrc}
                className="m-auto"
                onClick={() =>
                  (window.location.href = `${item.href}`)}
              />
            </SwiperSlide>
          );
        })}

      </Swiper> */}
      {/* <div className="w-10/12  relative mx-auto sm:hidden">
        <img src="heroimage2.png" className="mx-auto hidden md:block" />
        <img src="heroimage2screen.png" className="mx-auto md:hidden" />
        <button className="bg-gradient-to-r from-[#FF3D00] to-[#FFE600]  md:px-4 px-2 md:py-2 py-1 xl:w-[20rem] lg:w-[15rem] md:w-[10rem] w-[8rem] md:text-lg text-xs text-white font-sweet_sans_pro rounded-md text-center absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-[60%]">
          Watch Now
        </button>
        <img
          src="/floatingIcon/floatingIcon1.png"
          className="absolute md:top-8 top-0 md:left-24 left-12 floating md:w-16 w-8"
        />
        <img
          src="Images/Webinars/english/person/person2.png"
          className="absolute top-1/2 md:left-44 left-0 floating md:w-16 w-8"
        />
        <img
          src="Images/Webinars/english/person/person9.png"
          className="absolute md:bottom-0 top-1/4 md:left-24 floating md:w-16 w-8"
        />
        <img
          src="Images/Webinars/english/person/person7.png"
          className="absolute md:top-8 top-0 md:right-24 right-12  floating md:w-16 w-8"
        />
        <img
          src="/floatingIcon/floatingIcon2.png"
          className="absolute top-1/2 md:right-44 right-0 floating md:w-16 w-8"
        />
        <img
          src="Images/Webinars/english/person/person13.png"
          className="absolute  bottom-0 top-1/4 md:right-24 left-1/2 floating md:w-16 w-8"
        />
      </div>
      <div className="w-10/12 relative mx-auto hidden sm:block">
        <img src="heroimage2.png" className="mx-auto" />
        <button className="bg-gradient-to-r from-[#FF3D00] to-[#FFE600]  md:px-4 px-2 md:py-2 py-1 xl:w-[20rem] lg:w-[15rem] md:w-[10rem] w-[8rem] md:text-lg text-xs text-white font-sweet_sans_pro rounded-md text-center absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-[70%]">
          Watch Now
        </button>
        <img
          src="/floatingIcon/floatingIcon1.png"
          className="absolute md:top-8 top-0 left-24 floating md:w-16 w-8"
        />
        <img
          src="Images/Webinars/english/person/person2.png"
          className="absolute top-1/2 md:left-44 left-0 floating md:w-16 w-8"
        />
        <img
          src="Images/Webinars/english/person/person9.png"
          className="absolute  bottom-0 left-24 floating md:w-16 w-8"
        />
        <img
          src="Images/Webinars/english/person/person7.png"
          className="absolute md:top-8 top-0 right-24 floating md:w-16 w-8"
        />
        <img
          src="/floatingIcon/floatingIcon2.png"
          className="absolute top-1/2 md:right-44 right-0 floating md:w-16 w-8"
        />
        <img
          src="Images/Webinars/english/person/person13.png"
          className="absolute  bottom-0 right-24 floating md:w-16 w-8"
        />
      </div> */}
      <div className="w-10/12  relative mx-auto sm:hidden">
        <img src="heroimage1.png" className="mx-auto hidden md:block" />
        <img src="heroimage1screen.png" className="mx-auto md:hidden" />
        <button className="bg-gradient-to-r from-[#2400FF] to-[#00D1FF]  md:px-4 px-2 md:py-2 py-1 xl:w-[20rem] lg:w-[15rem] w-[10rem] md:text-lg text-xs text-white font-sweet_sans_pro rounded-md text-center absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-[65%]">
        Get Started for free
        </button>
        <img
          src="/floatingIcon/floatingIcon1.png"
          className="absolute md:top-8 top-0 md:left-24 left-12 floating md:w-16 w-8"
        />
        <img
          src="Images/Webinars/english/person/person2.png"
          className="absolute bottom-1/3 md:left-44 left-0 floating md:w-16 w-8"
        />
        <img
          src="Images/Webinars/english/person/person9.png"
          className="absolute md:bottom-0 top-1/4 md:left-24 floating md:w-16 w-8"
        />
        <img
          src="Images/Webinars/english/person/person7.png"
          className="absolute md:top-8 top-0 md:right-24 right-12  floating md:w-16 w-8"
        />
        <img
          src="/floatingIcon/floatingIcon2.png"
          className="absolute bottom-1/3 md:right-44 right-0 floating md:w-16 w-8"
        />
        <img
          src="Images/Webinars/english/person/person13.png"
          className="absolute  bottom-0 top-1/4 md:right-24 left-1/2 floating md:w-16 w-8"
        />
      </div>
      <div className="w-10/12 relative mx-auto hidden sm:block">
        <img src="heroimage1.png" className="mx-auto" />
        <button className="bg-gradient-to-r from-[#2400FF] to-[#00D1FF]  md:px-4 px-2 md:py-2 py-1 xl:w-[20rem] lg:w-[15rem] md:w-[10rem] w-[8rem] md:text-lg text-xs text-white font-sweet_sans_pro rounded-md text-center absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-[65%]">
          Get Started for free
        </button>
        <img
          src="/floatingIcon/floatingIcon1.png"
          className="absolute md:top-8 top-0 left-24 floating md:w-16 w-8"
        />
        <img
          src="Images/Webinars/english/person/person2.png"
          className="absolute top-1/2 md:left-44 left-0 floating md:w-16 w-8"
        />
        <img
          src="Images/Webinars/english/person/person9.png"
          className="absolute  bottom-0 left-24 floating md:w-16 w-8"
        />
        <img
          src="Images/Webinars/english/person/person7.png"
          className="absolute md:top-8 top-0 right-24 floating md:w-16 w-8"
        />
        <img
          src="/floatingIcon/floatingIcon2.png"
          className="absolute top-1/2 md:right-44 right-0 floating md:w-16 w-8"
        />
        <img
          src="Images/Webinars/english/person/person13.png"
          className="absolute  bottom-0 right-24 floating md:w-16 w-8"
        />
      </div>
    </div>
  );
};

export default Hero;
