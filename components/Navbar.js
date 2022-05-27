import React from 'react';
import {BsInstagram} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {FaDiscord} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="h-24 bg-[#000000] border border-[#1E1E1E] flex flex-row justify-between items-center px-8 ml-16">
      <div className="flex flex-row space-x-8 items-center">
        <img src="/Images/logo.svg" />
        <div>
          <button className="flex flex-row items-center border-2 border-[#9E00FF] rounded-full font-gilroy text-[#9E00FF] px-2 py-[2px] font-semibold text-lg">
            <FaDiscord style={{fontSize:'30px', marginLeft:'4px', marginRight:'4px'}}/>
            Community
          </button>
        </div>

      </div>
      <div className="flex flex-row items-center space-x-8 text-lg">
        <button className="border-2 border-white rounded-full font-gilroy text-white px-2 py-[2px] ">
          Connect
        </button>
        <div className="flex flex-row items-center space-x-4 text-white text-3xl">
          <BsInstagram />
          <BsYoutube />
          <BsFacebook />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
