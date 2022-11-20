import React from 'react';
import {Drawer, Box, IconButton} from '@material-ui/core';
import {useState} from 'react';
import {HiOutlineX} from 'react-icons/hi';
import Link from 'next/link';
import {webinarData} from '../dummydb';

const DrawerSection = ({path}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState (false);
  const [searchInput, setSearchInput] = useState ('');
  function handleSearch () {
    if (searchInput === '') {
      return;
    } else {
      let filtered = webinarData.filter (obj => {
        if (obj.title.toLowerCase ().includes (searchInput.toLowerCase ())) {
          return obj;
        }
      });
      if (filtered.length === 0) {
        alert ('data nor found');
      } else {
        window.location.href = `/${filtered[0].language}/${filtered[0].title}`;
      }
    }
  }
  const sideNavItem = [
    {
      icons: '/Images/icons/TV-Show.svg',
      text: 'Webinars',
      key: 'Webinars',
      link: '#webinars',
    },
    {
      icons: '/Images/icons/Read-Online.svg',
      text: 'Masterclass',
      key: 'Masterclass',
      link: '#masterclass',
    },
    {
      icons: '/Images/icons/Event-Accepted.svg',
      text: 'Events',
      key: 'Events',
      link: '#events',
    },
    {
      icons: '/Images/icons/Comet.svg',
      text: 'Citizen Science',
      key: 'Citizen Science',
      link: '#citizenscience',
    },
    {
      icons: '/Images/icons/User-Groups.svg',
      text: 'Collaborators',
      key: 'Collaborators',
      link: '#collaborators',
    },
  ];
  return (
    <div className="font-sweet_sans_pro">
      <IconButton onClick={() => setIsDrawerOpen (true)}>
        <img src="/Images/icons/eva_menu-outline.svg" className="" />
      </IconButton>
      <Drawer
        style={{height: 'full'}}
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen (false)}
      >
        <Box textAlign="center" role="presentation">
          <div className="bg-[#000000] min-h-screen sm:h-full h-full flex flex-col text-lgit md:px-8 px-4 md:w-fit w-[80vw] space-y-8 py-4">
            <div className="text-white text-3xl flex flex-row items-center justify-between child:cursor-pointer">
            <Link href="/">
              <img src="/Images/logo.svg" className="w-36" />
            </Link>
              <HiOutlineX onClick={() => setIsDrawerOpen (false)} />
            </div>
            <div className="space-y-12">
              <div className="flex flex-row space-x-2 md:mr-8">
                <img src="/Images/icons/Search.svg" onClick={handleSearch} />
                <input
                  type="text"
                  className="focus:outline-none rounded-full border-2 border-white bg-[#000000] px-4 py-2 placeholder-white placeholder-opacity-100 text-white placeholder:font-sweet_sans_pro placeholder:text-lg font-sweet_sans_pro text-lg w-full"
                  placeholder="Search"
                  onChange={e => setSearchInput (e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && handleSearch ()}
                />
              </div>
              {sideNavItem.map (item => {
                return (
                  <Link
                    key={item.key}
                    href={path === '/' ? `${item.link}` : '/'}
                  >
                    <div
                      className="flex flex-row items-center space-x-2 md:text-xl text-lg font-sweet_sans_pro cursor-pointer"
                      onClick={() => {
                        setIsDrawerOpen (false);
                      }}
                    >
                      <img src={item.icons} className="w-8" />
                      <h1 className="text-white">{item.text}</h1>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="text-center">
              <Link href="/connect">
                <button className="border-2 border-white rounded-full font-gilroy text-white px-4 py-[2px] text-xl">
                  Connect
                </button>
              </Link>

            </div>

          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerSection;
