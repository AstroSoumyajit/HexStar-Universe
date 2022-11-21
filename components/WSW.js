import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "@material-ui/core";

const WSW = () => {
  const Usw = [
    {
      image: "/Images/WSW/image1.png",
      link: "https://www.youtube.com/watch?v=aMqsGqciYi8&list=PLVxsiKzswmFS-RmPc7qYaGsThXuCUOD-v&index=2 ",
    },
    {
      image: "/Images/WSW/image2.png",
      link: "https://www.youtube.com/watch?v=u7z3l17rzYw&list=PLVxsiKzswmFS-RmPc7qYaGsThXuCUOD-v&index=1",
    },
    {
      image: "/Images/WSW/image3.png",
      link: "https://www.youtube.com/watch?v=kJkRK9-QwGE&list=PLVxsiKzswmFS-RmPc7qYaGsThXuCUOD-v&index=3",
    },
    {
      image: "/Images/WSW/image4.png",
      link: "https://www.youtube.com/watch?v=DtrL8KMIvLc&list=PLVxsiKzswmFS-RmPc7qYaGsThXuCUOD-v&index=4",
    },
    {
      image: "/Images/WSW/image5.png",
      link: "https://www.youtube.com/watch?v=IX3Ssw1JSeg&list=PLVxsiKzswmFS-RmPc7qYaGsThXuCUOD-v&index=5",
    },
    {
      image: "/Images/WSW/image6.png",
      link: "https://www.youtube.com/watch?v=90nPIjgzFBg&list=PLVxsiKzswmFS-RmPc7qYaGsThXuCUOD-v&index=6",
    },
    {
      image: "/Images/WSW/image7.png",
      link: "https://www.youtube.com/watch?v=jCjtvV5GvrQ&list=PLVxsiKzswmFS-RmPc7qYaGsThXuCUOD-v&index=7",
    },
  ];
  const [mySwiper, setMySwiper] = useState(null);
  return (
    <div>
      <div className="flex w-full items-center">
        <h1 className="font-gilroy bg-clip-text md:text-4xl my-8 text-white text-lg mr-8 whitespace-nowrap">
          WSW 2022
        </h1>
        <hr className="border-[#363636] border-2  w-full" />
      </div>
      <div className="py-8 w-full flex items-center justify-between">
        <button
          className="mr-1 text-[#fff] rounded-full"
          onClick={() => {
            if (mySwiper) mySwiper.slidePrev();
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
                <Link href={data.link}>
                  <div className="flex flex-col items-center space-y-4">
                    <img src={data.image} className="" />
                  </div>
                </Link>
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
          <IoIosArrowDroprightCircle size={30} />
        </button>
      </div>
    </div>
  );
};

export default WSW;
