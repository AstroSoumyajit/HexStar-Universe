import React from 'react';
import DrawerSection from './DrawerSection';
import Link from 'next/link';

const SideNav = ({path}) => {
  return (
    <div className="hidden md:block">
      <div className="bg-[#000000] w-16 flex flex-col items-center space-y-8 py-8 z-100 fixed left-0 h-screen border border-[#1E1E1E] child:cursor-pointer">
        <DrawerSection path={path}/>
        <Link href="#">
          <a>
            <img src="/Images/icons/Search.svg"  />
          </a>
        </Link>
        <Link href="#webinars">
          <a>
            <img src="/Images/icons/TV-Show.svg"  />
          </a>
        </Link>
        <Link href="#masterclass">
          <a>
            <img
              src="/Images/icons/Read-Online.svg"
              
            />
          </a>
        </Link>
        <Link href="#events">
          <a>
            <img
              src="/Images/icons/Event-Accepted.svg"
            />
          </a>
        </Link>
        <Link href="#citizenscience">
          <a>
            <img src="/Images/icons/Comet.svg" />
          </a>
        </Link>
        <Link href="#collaborators">
          <a>
            <img
              src="/Images/icons/User-Groups.svg"
              
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
