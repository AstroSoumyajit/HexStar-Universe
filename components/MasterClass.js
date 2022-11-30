import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css/pagination';
// import 'swiper/css'
// import 'swiper/css/navigation'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Pagination, Navigation, Autoplay } from "swiper";
import { useState } from "react";
import { Modal } from "@material-ui/core";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { BsCalendar4 } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SiRazorpay } from "react-icons/si";

const MasterClassData = [
  {
    image: "/Images/masterclassNew/image1.png",
    link: "https://unstop.com/workshop/asteroid-search-campaign-30-hex-star-universe-335553",
    image2: "/Images/masterclassNew/image1open.png",
    className: "CUBESAT Masterclass",
    instructor: "RR Elangovan",
    date: "27th-29th NOv",
    time: "7pm Onwards",
  },
  {
    image: "/Images/masterclassNew/image2.png",
    link: "https://rzp.io/l/DeepSkyImgProcessing",
    image2: "/Images/masterclassNew/image1open.png",
    className: "AI-ML in Space",
    instructor: "RR Elangovan",
    date: "27th-29th NOv",
    time: "7pm Onwards",
  },
  {
    image: "/Images/masterclassNew/image3.png",
    link: "https://pages.razorpay.com/orbitalmechanics",
    image2: "/Images/masterclassNew/image1open.png",
    className: "AstroBiology Masterclass",
    instructor: "RR Elangovan",
    date: "27th-29th NOv",
    time: "7pm Onwards",
  },
  {
    image: "/Images/masterclassNew/image4.png",
    link: "https://rzp.io/l/RocketrymasterclassNew",
    image2: "/Images/masterclassNew/image1open.png",
    className: "Orbital Mechanics",
    instructor: "RR Elangovan",
    date: "27th-29th NOv",
    time: "7pm Onwards",
  },
];

const MasterClass = () => {
  const [mySwiper, setMySwiper] = useState(null);
  const [open, setOpen] = useState(false);
  const [clickedMasterclass, setClickedMasterclass] = useState(0);
  return (
    <div className="space-y-4" id="masterclass">
      <div className="font-gilroy">
        <div className="flex w-full items-center">
          <h1 className="font-gilroy bg-clip-text md:text-4xl my-8 text-[#c4c4c4] text-lg mr-8 whitespace-nowrap">
            Masterclass
          </h1>
          <hr className="border-[#363636] border-2   w-full" />
        </div>
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
          {MasterClassData.map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center space-y-4 cursor-pointer">
                  <img
                    src={data.image}
                    className="max-w-[16rem]"
                    onClick={() => {
                      setClickedMasterclass(i);
                      setOpen(true);
                    }}
                  />
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
      {/* <div className="relative flex py-4 items-center">
        <button className="text-white border border-white rounded-full mx-auto  px-4 py-2 font-sweet_sans_pro text-xl">
          More
        </button>
      </div> */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="absolute outline-0 top-1/2 lg:w-[25vw] md:w-[50vw] w-[80vw]  left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <div className="backdrop-blur-md bg-[#0000]/30">
            <img src="/Images/masterclassNew/image1open.png" className="" />
            <div className=" space-y-4 p-8">
              <section className="flex justify-start items-center space-x-4 text-xl">
                <FaChalkboardTeacher className="text-3xl" />
                <h1>
                  <b>Classname: </b> {MasterClassData[clickedMasterclass].className}
                </h1>
              </section>
              <section className="flex justify-start items-center space-x-4 text-xl">
                <MdOutlineKeyboardVoice className="text-3xl" />
                <h1>
                  <b>Instructor: </b> {MasterClassData[clickedMasterclass].instructor}
                </h1>
              </section>
              <section className="flex justify-start items-center space-x-4 text-xl">
                <BsCalendar4 className="text-3xl" />
                <h1>
                  <b>Date: </b> {MasterClassData[clickedMasterclass].date}
                </h1>
              </section>
              <section className="flex justify-start items-center space-x-4 text-xl">
                <AiOutlineClockCircle className="text-3xl" />
                <h1>
                  <b>Time: </b> {MasterClassData[clickedMasterclass].time}
                </h1>
              </section>
              <button className="px-4 py-2 bg-gradient-to-r from-black to-[#626262] flex justify-between items-center space-x-6 rounded-md mx-auto">
                <SiRazorpay className="text-3xl" />
                <section>
                  <i className="text-2xl">
                    <b>Enroll Now</b>
                  </i>
                  <h1 className="text-sm text-[#b6b6b6] text-center">
                    <i>Secured by Razorpay</i>
                  </h1>
                </section>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MasterClass;
