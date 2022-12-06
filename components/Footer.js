import React from "react";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import {
  IoLogoWhatsapp,
  IoIosArrowDroprightCircle,
  IoCallOutline,
} from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  const footerItem = [
    {
      key: "Home",
      name: "Home",
      link: "/",
    },
    {
      key: "Webinars",
      name: "Webinars",
      link: "#webinars",
    },
    {
      key: "Masterclass",
      name: "Masterclass",
      link: "#masterclass",
    },
    {
      key: "Events",
      name: "Events",
      link: "#events",
    },
    {
      key: "Citizen Science",
      name: "Citizen Science",
      link: "#citizenscience",
    },
  ];
  return (
    <div className="text-white">
      <div className="space-y-12 lg:my-24 my-12" id="footer">
        <img src="/Images/logo.svg" />
        <div className="grid lg:grid-cols-5 grid-cols-1 space-y-4 lg:space-y-0">
          <section className="col-span-2 space-y-8">
            <h1 className="text-base font-gilroy text-white">
              Get updates on new programs, workshops, the latest developments,
              and community activities, straight to your inbox.
            </h1>

            <div className="w-[18rem] ">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-white font-gilroy rounded-full pl-2 pr-12 focus:outline-none py-2 w-full "
                />
                <IoIosArrowDroprightCircle className="absolute text-5xl -right-1 -top-1" />
              </div>
              <div className="flex justify-between text-white text-3xl my-8 child:cursor-pointer">
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
              <div className="space-y-4 hidden lg:block">
                <span className="font-gilroy text-xl ">
                  <b>Contact Us</b>
                </span>
                <h1 className="flex justify-start items-start">
                  <BiHomeAlt className="text-5xl mr-4" />
                  Address: 23/3 Jadav Sarkar road, Sonarpur, Kolkata - 700149
                </h1>
                <h1 className="flex justify-start items-center">
                  <FiPhoneCall className="text-2xl mr-4" />
                  +918910123832
                </h1>
                <h1 className="flex justify-start items-center">
                  <MdEmail className="text-2xl mr-4" />
                  network@hexstaruniverse.com
                </h1>
              </div>
            </div>
          </section>
          <section className="col-span-3 flex flex-row  justify-around space-x-4 space-y-0">
            <div className="font-gilroy text-white sm:text-base md:text-base lg:text-lg xl:text-xl flex-col flex  md:space-x-16 space-x-0 space-y-4  text-sm text-left lg:space-x-0 lg:space-y-8">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/webinars">
                <a>Webinars</a>
              </Link>
              <Link href="/masterclass">
                <a>Masterclass</a>
              </Link>
              <Link href="/events">
                <a>Events</a>
              </Link>
              <Link href="/citizen Science">
                <a>Citizen Science</a>
              </Link>
            </div>
            <div className="font-gilroy text-white sm:text-base md:text-base lg:text-lg xl:text-xl flex-col flex md:space-x-16 space-x-0 space-y-4  text-sm text-left lg:space-x-0 lg:space-y-8">
              <Link href="/aboutus">
                <a>About Us</a>
              </Link>
              <Link href="/privacy&policy">
                <a>Privacy & Policy</a>
              </Link>
              <Link href="/terms&condition">
                <a>Terms & Condition</a>
              </Link>
              <Link href="/refundPolicy">
                <a>Refund Policy</a>
              </Link>
            </div>
            <div className="font-gilroy text-white sm:text-base md:text-base lg:text-lg xl:text-xl flex-col flex md:space-x-16 space-x-0 space-y-4  text-sm text-left lg:space-x-0 lg:space-y-8">
              <Link href="https://discord.com/invite/XxuJMhAMaD">
                <a>Community</a>
              </Link>
              <Link href="https://forms.gle/kUhN9mFZCLsATEji6">
                <a>Apply as Member</a>
              </Link>
              <Link href="https://forms.gle/cwzsiUy8jDhj7dzC9">
                <a>Feedback</a>
              </Link>
            </div>
          </section>
          <div className="space-y-2 lg:hidden text-sm mt-4">
            <span className="font-gilroy text-lg">
              <b>Contact Us</b>
            </span>
            <h1 className="flex justify-start items-start">
              <BiHomeAlt className="text-3xl mr-4" />
              Address: 23/3 Jadav Sarkar road, Sonarpur, Kolkata - 700149
            </h1>
            <h1 className="flex justify-start items-center">
              <FiPhoneCall className="text-2xl mr-4" />
              +918910123832
            </h1>
            <h1 className="flex justify-start items-center">
              <MdEmail className="text-2xl mr-4" />
              network@hexstaruniverse.com
            </h1>
          </div>
        </div>
      </div>

      <div className="text-center relative bottom-0 text-white py-4 space-y-4 lg:text-xl md:text-lg text-sm">
        <footer className="text-center">
          Copyright © 2022 Hex-Star Universe - All Rights Reserved
        </footer>
      </div>
    </div>
  );
};

export default Footer;
