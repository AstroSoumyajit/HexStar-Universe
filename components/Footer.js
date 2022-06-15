import React from 'react';
import Link from 'next/link';
import {FaDiscord} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';
import {MdEmail} from 'react-icons/md';

const Footer = () => {
  const footerItem = [
    {
      key: 'Home',
      name: 'Home',
      link: '/',
    },
    {
      key: 'Webinars',
      name: 'Webinars',
      link: '#webinars',
    },
    {
      key: 'Masterclass',
      name: 'Masterclass',
      link: '#masterclass',
    },
    {
      key: 'Events',
      name: 'Events',
      link: '#events',
    },
    {
      key: 'Citizen Science',
      name: 'Citizen Science',
      link: '#citizenscience',
    },
  ];
  return (
    <div className=" ">
      <div className="flex flex-col items-center h-full space-y-12 my-24">
        <img src="/Images/logo.svg" />
        <div className="flex md:flex-row flex-col items-center justify-center md:space-x-8 md:space-y-0 space-y-8">
          {footerItem.map (item => {
            return (
              <Link href={item.link} key={item.key}>
                <a
                  className="text-white font-sweet_sans_pro text-center w-full"
                  key={item.key}
                >
                  {item.name}
                </a>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-row space-x-8 text-white text-3xl my-8 child:cursor-pointer">
          <Link href=" https://discord.gg/XxuJMhAMaD">
            <a>
              <FaDiscord />
            </a>
          </Link>
          <Link href=" https://twitter.com/hexstaruniverse">
            <a>

              <FaTwitter />
            </a>
          </Link>
          <Link href="https://instagram.com/hexstar_universe?igshid=YmMyMTA2M2Y=">
            <a>
              <BsInstagram />
            </a>
          </Link>
          <Link href="https://www.facebook.com/HexStarUniverse">
            <a>
              <BsFacebook />
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <h1 className="text-white font-sweet_sans_pro items-center text-lg">
            Contact Us
          </h1>
          <div className="flex flex-row text-white text-3xl space-x-8">
            <Link href="https://wa.me/%2B918910123832?text=Hi%20Hex-Star%20Universe">
              <IoLogoWhatsapp />
            </Link>
            <Link href="mailto:hexstaruniverse@gmail.com">
              <MdEmail />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center relative bottom-0 text-white py-4">
        <footer className="text-center">
          Copyright © 2022 Hex-Star Universe - All Rights Reserved
        </footer>
      </div>
    </div>
  );
};

export default Footer;
