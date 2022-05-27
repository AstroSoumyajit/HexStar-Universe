import React from 'react'

const Collaborators = () => {
  return (
    <div className='ml-16 px-12 mt-12 mb-36'>
    <h1 className="font-cascade bg-clip-text text-4xl my-8 bg-gradient-to-b from-[#FFFFFF] to-[#8000FF] text-transparent">
    Collaborators & Partners
      </h1>
      <div className='grid grid-cols-2 gap-8 justify-items-center py-8'>
          <img src='/Images/collaborators/logo1.svg' className='w-72'/>
          <img src='/Images/collaborators/logo2.svg' className='w-72'/>
          <img src='/Images/collaborators/logo3.svg' className='w-72'/>
          <img src='/Images/collaborators/logo4.svg' className='w-72'/>
          <img src='/Images/collaborators/logo5.svg' className='col-span-2 w-72'/>
      </div>

    </div>
  )
}

export default Collaborators