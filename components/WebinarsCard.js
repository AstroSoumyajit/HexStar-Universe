import React from "react";
import Link from "next/link";

const WebinarsCard = ({ image, title, speakerImage, speaker }) => {
  return (
    <div>
      <div className=" space-y-4 hidden md:block">
        <div className="relative">
          <img src={image} className="rounded-3xl" />
          <Link href={`/${title}`}>
            <button className="font-sweet_sans_pro text-white rounded-md px-4 py-2 bg-[#2D2D2D] absolute bottom-4 left-4 ">
              Watch
            </button>
          </Link>
        </div>

        <div className="flex flex-row items-center w-full space-x-4">
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
      </div>

      <div className="md:hidden grid grid-cols-5 gap-4">
        <img src={image} className="col-span-3 h-full object-cover"/>
        <section className="flex flex-col space-y-2 sm:space-y-4 col-span-2">
          <h1 className="text-white font-sweet_sans_pro sm:text-xl text-sm font-medium">
            {title}
          </h1>
          <section className="flex justify-start space-x-2 sm:space-x-4 items-center">
            <img src={speakerImage} className="w-8 sm:w-16"/>
            <h1 className="font-sweet_sans_pro_light text-[#7B7A7A] text-xs sm:text-base">
              {speaker}
            </h1>
          </section>
          <button className="bg-[#2D2D2D] text-white rounded-md px-3 py-1 w-fit text-xs sm:text-base font-medium">
            watch
          </button>
        </section>
        <hr className="border-[#242424] border col-span-5 my-2"/>
      </div>

    </div>
  );
};

export default WebinarsCard;
