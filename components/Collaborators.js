import React from 'react'

const Collaborators = () => {
  return (
    <div className='mt-12 mb-36'>
    <h1 className="font-cascade bg-clip-text md:text-4xl my-8 bg-gradient-to-b from-[#FFFFFF] to-[#8000FF] text-transparent text-xl">
    Collaborators & Partners
      </h1>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-8 justify-items-center py-8'>
          <img src='/Images/collaborators/logo1.svg' className='md:w-72 w-56'/>
          <img src='/Images/collaborators/logo2.svg' className='md:w-72 w-56'/>
          <img src='/Images/collaborators/logo3.svg' className='md:w-72 w-56'/>
          <img src='/Images/collaborators/logo4.svg' className='md:w-72 w-56'/>
          <img src='/Images/collaborators/logo5.svg' className='md:md:col-span-2 w-56 md:w-72 '/>
      </div>

    </div>
  )
}

export default Collaborators