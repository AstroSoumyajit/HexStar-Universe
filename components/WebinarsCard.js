import React from 'react';

const WebinarsCard = () => {
  return (
    <div className='space-y-4'>
      <img src="/Images/Webinars/image/image1.png" className='rounded-3xl'/>
      <div className='flex flex-row space-x-4'>
        <img src="/Images/Webinars/person/person1.png" />
        <div>
          <h1 className='font-sweet_sans_pro tracking-wider text-white'>How to become ISRO scientist</h1>
          <h1 className='text-[#7B7A7A] text-md font-sweet_sans_pro_light'>- RR Elan Govan</h1>
        </div>
      </div>
    </div>
  );
};

export default WebinarsCard;
