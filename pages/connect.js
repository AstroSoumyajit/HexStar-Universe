import React from 'react';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import {useRouter} from 'next/router';
import Link from 'next/link';

const Connect = () => {
  const router = useRouter ();
  return (
    <div className="bg-connectbg h-full md:h-screen bg-cover">
      <SideNav />
      <Navbar active={router.pathname === '/connect' ? 'active' : ''} />
      <div className=" flex md:flex-row flex-col items-center justify-evenly md:space-y-0 space-y-8 py-24">
        <div className="flex flex-col items-center space-y-4">
          <img src="/Images/connect/svg1.svg" />
          <h1 className="font-gilroy text-lg text-white">
            Wanna suggest something
          </h1>
          <Link href="https://forms.gle/jj5yoc4ZWdsyAiUv5">
            <button className="bg-black border-2 border-white text-white rounded-full px-4 py-2 font-semibold">
              Click Here
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img src="/Images/connect/svg2.svg" />
          <h1 className="font-gilroy text-lg text-white">
            Wanna host any Session
            or Masterclass
          </h1>
          <Link href="https://forms.gle/Dc3fDbFHhA3vZNs3A">
            <button className="bg-black border-2 border-white text-white rounded-full px-4 py-2 font-semibold">
              Click Here
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Connect;
