import React from 'react';
import Link from 'next/link';
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';


const Footer = () => {
  const footerItem = [
    {
      key: 'Home',
      name: 'Home',
      link: '#',
    },
    {
      key: 'Webinars',
      name: 'Webinars',
      link: '#',
    },
    {
      key: 'Masterclass',
      name: 'Masterclass',
      link: '#',
    },
    {
      key: 'Events',
      name: 'Events',
      link: '#',
    },
    {
      key: 'Citizen Science',
      name: 'Citizen Science',
      link: '#',
    },
  ];
  return (
    <div className='ml-16 px-12 '>
    <div className='flex flex-col items-center h-full space-y-12 my-24'>
    <img src="/Images/logo.svg" />
      <div className='flex flex-row items-center justify-center space-x-8'>
        {footerItem.map (item => {
          return (
            <Link href={item.link}>
              <a className="text-white font-sweet_sans_pro" key={item.key}>
                {item.name}
              </a>
            </Link>
          );
        })}
      </div>
      <div className='flex flex-row space-x-8 text-white text-3xl my-8'>
          <FaDiscord/>
          <FaTwitter/>
          <BsInstagram/>
          <BsFacebook/>
      </div>
    </div>
      
      <div className='text-center relative bottom-0 text-white py-4'>
          <footer className='text-center'>
          Copyright © 2022 Hex-Star Universe - All Rights Reserved
          </footer>
      </div>
    </div>
  );
};

export default Footer;
