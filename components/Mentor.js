import React from 'react'

const Mentor = () => {
  return (
    <div className='space-y-8'>
        <div className="flex w-full items-center">
        <img src="/mentorHeading.png" className="mr-8 w-[20rem]" />
        <hr className="border-[#363636] border-2 w-full hidden md:block" />
      </div>
      <div className='flex justify-start sm:space-x-16  sm:flex-row flex-col space-y-8 sm:space-y-0'>
        <img src='/Images/mentor/image1.png' className='w-fit mx-auto sm:mx-0'/>
        <img src='/Images/mentor/image2.png' className='w-fit mx-auto sm:mx-0'/>
      </div>
    </div>
  )
}

export default Mentor