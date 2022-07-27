import React from 'react';
import WebinarsCard from './WebinarsCard';
import Link from 'next/link';
import DrawerSection from './DrawerSection';
import {useState} from 'react';
// import {webinarData} from '../dummydb';

const Webinars = ({webinarData, title}) => {
  const [allWebinars, setAllWebinars] = React.useState (false);
  // console.log(webinarData)
  return (
    <div className="my-8" id="webinars">
      <h1 className="font-cascade bg-clip-text text-lg md:text-4xl my-8 bg-gradient-to-b from-[#FFFFFF] to-[#0047FF] text-transparent hidden md:block">
        {title}
      </h1>
      <img src="/webinarsHeading.png" className='md:hidden'/>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-auto md:gap-8 gap-12 align-items-center">
        {!allWebinars
          ? webinarData.slice (0, 6).map (data => {
              return (
                <WebinarsCard
                  key={data.key}
                  image={data.thumbnail}
                  title={data.title}
                  speaker={data.speaker}
                  speakerImage={data.speakerImage}
                />
              );
            })
          : webinarData.map (data => {
              return (
                <WebinarsCard
                  key={data.key}
                  image={data.thumbnail}
                  title={data.title}
                  speaker={data.speaker}
                  speakerImage={data.speakerImage}
                />
              );
            })}
      </div>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-[#363636]" />
        <span className="flex-shrink mx-12">

          <button
            className={`${allWebinars && 'hidden'} text-white bg-gradient-to-b from-[#9E00FF] via-[#8F00FF] to-[#130EFF] rounded-full px-4 py-[3px] font-sweet_sans_pro text-lg`}
            onClick={() => setAllWebinars (true)}
          >
            More
          </button>
          <button
            className={`${!allWebinars && 'hidden'} text-white bg-gradient-to-b from-[#9E00FF] via-[#8F00FF] to-[#130EFF] rounded-full px-4 py-[3px] font-sweet_sans_pro text-lg`}
            onClick={() => setAllWebinars (false)}
          >
            Less
          </button>

        </span>
        <div className="flex-grow border-t border-[#363636]" />
      </div>
    </div>
  );
};

export default Webinars;
