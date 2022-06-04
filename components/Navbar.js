import React from 'react';
import {BsInstagram} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {FaDiscord} from 'react-icons/fa';
import DrawerSection from './DrawerSection';
import Link from 'next/link';

const Navbar = ({active}) => {
  return (
    <div className="h-24 bg-[#000000] border border-[#1E1E1E] flex flex-row justify-between items-center md:ml-16 md:px-8 px-4">
      <div className="flex flex-row md:space-x-8 space-x-4 items-center">
        <Link href="/">
          <img
            src="/Images/logo.svg"
            className="w-3/4 md:w-full cursor-pointer"
          />
        </Link>
        <div className="hidden md:block">
          <Link href="https://discord.com/invite/XxuJMhAMaD">
            <button className="flex flex-row items-center border-2 border-[#9E00FF] rounded-full font-gilroy text-[#9E00FF] px-2 py-[2px] font-semibold md:text-lg text-sm">
              <FaDiscord
                style={{
                  fontSize: '30px',
                  marginLeft: '4px',
                  marginRight: '4px',
                }}
              />
              Community
            </button>
          </Link>
        </div>

      </div>
      <div className="hidden md:block">
        <div className="flex flex-row items-center space-x-8 text-lg">
          <Link href="/connect">
            <button
              className={
                active === 'active'
                  ? 'bg-white text-black rounded-full font-gilroy px-2 py-[2px] font-semibold'
                  : 'border-2 border-white rounded-full font-gilroy text-white px-2 py-[2px] '
              }
            >
              Connect
            </button>
          </Link>

          <div className="flex flex-row items-center space-x-4 text-white text-3xl child:cursor-pointer">
            <Link href="https://instagram.com/hexstar_universe?igshid=YmMyMTA2M2Y=">
              <a>
                <BsInstagram />
              </a>
            </Link>
            <Link href="https://youtube.com/channel/UCxiuN3r_ibdAfHqlBBKuTwQ?sub_confirmation=1 ">
              <a>
                <BsYoutube />
              </a>
            </Link>
            <Link href="https://www.facebook.com/HexStarUniverse">
              <a>
                <BsFacebook />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex flex-row space-x-2 items-center">
          <Link href="https://discord.com/invite/XxuJMhAMaD">
            <button className="flex flex-row items-center border-2 border-[#9E00FF] rounded-full font-gilroy text-[#9E00FF] px-2 py-[2px] font-semibold md:text-lg text-md">
              <FaDiscord
                style={{
                  fontSize: '20px',
                  marginLeft: '4px',
                  marginRight: '4px',
                }}
              />
              Community
            </button>
          </Link>
          <DrawerSection />
        </div>
      </div>

    </div>
  );
};

export default Navbar;
