import React from 'react';

const HeroCarouselCard = () => {
  return (
    <div className='flex flex-row bg-[#111014] max-w-fit rounded-3xl font-sweet_sans_pro text-white pr-8'>
      <div>
        <img src="/Images/HeroCarouselImage/image1.png" />
      </div>
      <div className=' flex flex-col items-center space-y-12 justify-center text-center w-44'>
        <div className='space-y-4'>
          <h1>
            ASTEROID SEARCH CAMPAIGN 3.0
          </h1>
          <h1 className='text-sm font-sweet_sans_pro_light text-[#605D5D]'>
            In Association with NASA and IASC
          </h1>
        </div>
        <div>
            <button className='bg-[#9E00FF] p-2 rounded-md'>
                REGISTER
            </button>
        </div>
      </div>

    </div>
  );
};

export default HeroCarouselCard;
