import React from 'react';

const MasterClass = () => {
  return (
    <div className="ml-16 px-12">
      <h1 className="font-cascade bg-clip-text text-4xl my-8 bg-gradient-to-b from-[#FFFFFF] to-[#8000FF] text-transparent">
        MASTERCLASS
      </h1>
      <div className="flex flex-row items-center justify-center space-x-8 my-8">
        <div className="flex flex-col items-center space-y-4">
          <img src="/Images/masterclass/image1.png" />
          <button className="bg-[312DFF] rounded-md px-4 font-sweet_sans_pro text-white py-[3px] bg-[#312DFF] text-lg">
            Register Now
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img src="/Images/masterclass/image2.png" />
          <button className="bg-[312DFF] rounded-md px-4 font-sweet_sans_pro text-white py-[3px] bg-[#9E00FF] text-lg">
            Register Now
          </button>
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

export default MasterClass;
