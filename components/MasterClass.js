import React from 'react';
import Link from 'next/link';

const MasterClass = () => {
  return (
    <div className="">
      <h1 className="font-cascade bg-clip-text md:text-4xl my-8 bg-gradient-to-b from-[#FFFFFF] to-[#8000FF] text-transparent text-2xl">
        MASTERCLASS
      </h1>
      <div className="flex md:flex-row flex-col items-center justify-center md:space-x-8 space-y-8 md:space-y-0 my-8">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/Images/masterclass/image1.png"
            className="md:w-full w-3/4"
          />
          <Link href=" https://pages.razorpay.com/orbitalmechanics">
            <button className="bg-[312DFF] rounded-md px-4 font-sweet_sans_pro text-white py-[3px] bg-[#312DFF] text-lg">
              Register Now
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/Images/masterclass/image2.png"
            className="md:w-full w-3/4"
          />
          <Link href="https://unstop.com/workshop/asteroid-search-campaign-30-hex-star-universe-335553">
            <button className="bg-[312DFF] rounded-md px-4 font-sweet_sans_pro text-white py-[3px] bg-[#9E00FF] text-lg">
              Register Now
            </button>
          </Link>
        </div>
      </div>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-[#363636]" />
        <span className="flex-shrink mx-12">
          <button className="text-white bg-gradient-to-b from-[#9E00FF] via-[#8F00FF] to-[#130EFF] rounded-full px-4 py-[3px] font-sweet_sans_pro text-lg">
            More
          </button>
        </span>
        <div className="flex-grow border-t border-[#363636]" />
      </div>
    </div>
  );
};

export default MasterClass;
