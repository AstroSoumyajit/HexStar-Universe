import React from 'react';
import Link from 'next/link';

const Collaborators = () => {
  return (
    <div className="mt-12 mb-36" id='collaborators'>
      <h1 className="font-cascade bg-clip-text md:text-4xl my-8 bg-gradient-to-b from-[#FFFFFF] to-[#8000FF] text-transparent text-lg">
        Collaborators & Partners
      </h1>
      <div className="grid grid-cols-2 gap-8 justify-items-center py-8">
        <Link href="https://sacitizensciencegroup.com/">
          <img src="/Images/collaborators/logo1.svg" className="md:w-72 w-56" />
        </Link>
        <Link href="https://theakashganga.com/">
          <img src="/Images/collaborators/logo2.svg" className="md:w-72 w-56" />
        </Link>
        <Link href="https://astronomyforum.org/">
          <img src="/Images/collaborators/logo3.svg" className="md:w-72 w-56" />
        </Link>
        <Link href="https://crux-view-centre.business.site/">
          <img src="/Images/collaborators/logo4.svg" className="md:w-72 w-56" />
        </Link>
        <Link href="https://www.youtube.com/c/TheMuddyShow">
          <img
            src="/Images/collaborators/logo5.svg"
            className="col-span-2 w-56 md:w-72 "
          />
        </Link>
      </div>

    </div>
  );
};

export default Collaborators;
