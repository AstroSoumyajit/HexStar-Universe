import React from "react";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp, IoIosArrowDroprightCircle } from "react-icons/io";
import { MdEmail } from "react-icons/md";

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
    <div className="">
      <div className="space-y-12 my-24" id="footer">
        <img src="/Images/logo.svg" />
        <div className="grid grid-cols-5">
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
            </div>
          </section>
          <section className="col-span-3 flex justify-around">
            <div className="font-gilroy text-white text-xl flex flex-col space-y-8">
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
            <div className="font-gilroy text-white text-xl flex flex-col space-y-8">
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
            <div className="font-gilroy text-white text-xl flex flex-col space-y-8">
              <Link href="/aboutus">
                <a>Community</a>
              </Link>
              <Link href="/privacy&policy">
                <a>Apply as Member</a>
              </Link>
              <Link href="/terms&condition">
                <a>Feedback</a>
              </Link>
            </div>
          </section>
        </div>
      </div>

      <div className="text-center relative bottom-0 text-white py-4 space-y-4 text-xl">
        <footer className="text-center">
          Copyright © 2022 Hex-Star Universe - All Rights Reserved
        </footer>
      </div>
    </div>
  );
};

export default Footer;
