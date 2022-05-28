import React from 'react';
import WebinarsCard from './WebinarsCard';

const Webinars = () => {
  return (
    <div className="">
      <h1 className="font-cascade bg-clip-text text-2xl md:text-4xl my-8 bg-gradient-to-b from-[#FFFFFF] to-[#0047FF] text-transparent ">
        WEBINARS
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-auto md:gap-8 gap-12 align-items-center">
        <div>
          <WebinarsCard />
        </div>
        <div>
          <WebinarsCard />
        </div>
        <div>
          <WebinarsCard />
        </div>
        <div>
          <WebinarsCard />
        </div>
        <div>
          <WebinarsCard />
        </div>
        <div>
          <WebinarsCard />
        </div>
        <div>
          <WebinarsCard />
        </div>
        <div>
          <WebinarsCard />
        </div>
        <div>
          <WebinarsCard />
        </div>
      </div>
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-[#363636]" />
        <span class="flex-shrink mx-12">
          <button className="text-white bg-gradient-to-b from-[#9E00FF] via-[#8F00FF] to-[#130EFF] rounded-full px-4 py-[3px] font-sweet_sans_pro text-lg">
            More
          </button>
        </span>
        <div class="flex-grow border-t border-[#363636]" />
      </div>
    </div>
  );
};

export default Webinars;
{
  /*  */
}
