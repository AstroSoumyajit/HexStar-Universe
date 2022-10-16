import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import DrawerSection from "./DrawerSection";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { webinarData } from "../dummydb";

const Navbar = ({ active, path }) => {
  const [searchInput, setSearchInput] = useState("");

  function handleSearch() {
    if (searchInput === "") {
      return;
    } else {
      let filtered = webinarData.filter((obj) => {
        if (obj.title.toLowerCase().includes(searchInput.toLowerCase())) {
          return obj;
        }
      });
      if (filtered.length === 0) {
        alert("data nor found");
      } else {
        window.location.href = `/${filtered[0].language}/${filtered[0].title}`;
      }
    }
  }
  return (
    <div className="w-full z-50">
      <div className="md:h-24 h-16 bg-[#000000] border border-[#1E1E1E] flex flex-row justify-between items-center md:ml-16 md:px-8 px-4 space-x-4">
        <div className="flex flex-row md:space-x-8 space-x-2 items-center">
          <Link href="/">
            <img
              src="/Images/logo.svg"
              className="w-3/4 md:w-full cursor-pointer"
            />
          </Link>
          <div className="hidden md:block lg:w-1/2 min-w-[25rem] relative">
            <input
              type="text"
              placeholder="Search for space talks, events, etc..."
              className="w-full bg-transparent focus:outline-none border border-zinc-500 pl-4 pr-12 py-2 rounded-full font-gilroy text-white"
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <FiSearch
              className="text-zinc-300 absolute top-2 right-4 text-2xl cursor-pointer"
              onClick={handleSearch}
            />
          </div>
        </div>

        <div className="hidden md:block">
          {/* <div className="flex flex-row items-center space-x-8 text-lg">
            <Link href="/connect">
              <button
                className={
                  active === "active"
                    ? "bg-white text-black rounded-full font-gilroy px-2 py-[2px] font-semibold"
                    : "border-2 border-white rounded-full font-gilroy text-white px-2 py-[2px] "
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
          </div> */}
          <div className="flex justify-between items-center space-x-4">
            <div className="hidden md:block">
              <Link href="https://discord.com/invite/XxuJMhAMaD" passHref>
                <button className="flex flex-row items-center border-2 border-[#9E00FF] rounded-full font-gilroy text-[#9E00FF] px-2 py-[2px] font-semibold md:text-lg text-sm">
                  <FaDiscord
                    style={{
                      fontSize: "30px",
                      marginLeft: "4px",
                      marginRight: "4px",
                    }}
                  />
                  Community
                </button>
              </Link>
            </div>
            <div>
              <Link href="#">
                <a className="text-white border-2 font-gilroy border-white rounded-full px-4 py-2 font-semibold">
                  Apply as Mentor
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex flex-row space-x items-center">
            <Link href="https://discord.com/invite/XxuJMhAMaD">
              <button className="flex flex-row items-center border-2 border-[#9E00FF] rounded-full font-gilroy text-[#9E00FF] px-2 py-[2px] font-semibold md:text-lg text-[10px] sm:text-md">
                <FaDiscord
                  style={{
                    fontSize: "20px",
                    marginLeft: "4px",
                    marginRight: "4px",
                  }}
                />
                Community
              </button>
            </Link>
            <div className="w-14">
              <DrawerSection path={path} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
