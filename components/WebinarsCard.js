import React from "react";
import Link from "next/link";

const WebinarsCard = ({ image, title, speakerImage, speaker, route }) => {
  // console.log(route)
  return (
    <div className="">
      <div className="space-y-4 hidden md:block w-fit hover:bg-[#161616] overflow-hidden hover:scale-110 duration-200 hover:p-4 rounded-xl group">
        <div className="relative">
          <img src={image} className="rounded-3xl" />
          {/* <Link href={`/${title}`}>
            <button className="font-sweet_sans_pro text-white rounded-md px-4 py-2 bg-[#2D2D2D] absolute bottom-4 left-4 ">
              Watch
            </button>
          </Link> */}
        </div>

        <div className="flex flex-row items-center space-x-4 max-w-[23rem]">
          <img src={speakerImage} />
          <div className="flex flex-col space-x-4">
            <h1 className="font-sweet_sans_pro tracking-wider text-white">
              {title}
            </h1>
            <h1 className="text-[#7B7A7A] text-md font-sweet_sans_pro_light">
              {speaker}
            </h1>
          </div>
        </div>
        <Link href={`/${route}/${title}`}>
          <button className="bg-gradient-to-r from-[#000AFF] to-[#DB00FF] w-full py-1.5 text-white font-sweet_sans_pro rounded-md invisible group-hover:visible">
            Watch Stream
          </button>
        </Link>
      </div>

      <div className="md:hidden grid grid-cols-7 gap-4">
        <img src={image} className="col-span-4 h-full object-contain" />
        <section className="flex flex-col space-y-2 sm:space-y-4 col-span-3">
          <h1 className="text-white font-sweet_sans_pro sm:text-xl text-sm font-medium">
            {title}
          </h1>
          <section className="flex justify-start space-x-2 sm:space-x-4 items-center">
            <img src={speakerImage} className="w-8 sm:w-16" />
            <h1 className="font-sweet_sans_pro_light text-[#7B7A7A] text-xs sm:text-base">
              {speaker}
            </h1>
          </section>
          <Link href={`/${route}/${title}`}>
            <button className="bg-[#2D2D2D] text-white rounded-md px-3 py-1 w-fit text-xs sm:text-base font-medium">
              watch
            </button>
          </Link>
        </section>
        <hr className="border-[#242424] border col-span-7 my-2" />
      </div>
    </div>
  );
};

export default WebinarsCard;
