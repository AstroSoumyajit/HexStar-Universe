import React from 'react';
import Link from 'next/link';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Navigation} from 'swiper';

const testimonials = [
  {
    key: Date.now (),
    comment: ' “A good platform to learn new things. It will help the enthusiast people to know more about the universe”',
    speaker: '—  Md Ahsanul Haque Biplob',
    speakerdetails: 'Bangladesh',
  },
  {
    key: Date.now (),
    comment: "“It's a great organization working towards creating interest in young minds regarding Space Science. ”",
    speaker: ' —  Abhijeet Jadhav',
    speakerdetails: 'Student',
  },
  {
    key: Date.now (),
    comment: '“A great initiative. Thank you for bringing such opportunities to everyone who are interested to learn about the universe.”',
    speaker: '—  Sowkhya Shanbhog, ',
    speakerdetails: 'Student',
  },
];

const Collaborators = () => {
  return (
    <div className="mt-12 mb-36" id="collaborators">
      <h1 className="font-cascade bg-clip-text md:text-4xl my-8 bg-gradient-to-b from-[#FFFFFF] to-[#8000FF] text-transparent text-lg">
        Collaborators & Partners
      </h1>
      <div className="grid grid-cols-2 gap-8 justify-items-center py-8">
        <Link href="https://sacitizensciencegroup.com/">
          <img src="/Images/collaborators/logo1.svg" className="md:w-72 w-56" />
        </Link>
        <Link href="https://theakashganga.com/">
          <img src="/Images/collaborators/logo2.svg" className="md:w-72 w-56" />
        </Link>
        <Link href="https://astronomyforum.org/">
          <img src="/Images/collaborators/logo3.svg" className="md:w-72 w-56" />
        </Link>
        <Link href="https://crux-view-centre.business.site/">
          <img src="/Images/collaborators/logo4.svg" className="md:w-72 w-56" />
        </Link>
        <Link href="https://www.youtube.com/c/TheMuddyShow">
          <img
            src="/Images/collaborators/logo5.svg"
            className="col-span-2 w-56 md:w-72 "
          />
        </Link>
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
          {testimonials.map (data => {
            return (
              <SwiperSlide key={data.key}>
                <div className="relative border border-white rounded-3xl text-white font-gilroy space-y-8 md:p-12 p-8 md:text-lg text-sm text-center">
                  <img src="/QuoteLeft.png" className="absolute top-4 left-4" />
                  <h1>
                    {data.comment}
                  </h1>
                  <h1>
                    ⭐⭐⭐⭐⭐
                  </h1>
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
