import React from 'react';
import Link from 'next/link';

const WebinarsCard = ({image, title, speakerImage, speaker}) => {
  return (
    <div className=" space-y-4">
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
  );
};

export default WebinarsCard;
