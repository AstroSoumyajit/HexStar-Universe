import React from 'react';
import {Drawer, Box, IconButton} from '@material-ui/core';
import {useState} from 'react';
import {HiOutlineX} from 'react-icons/hi';

const DrawerSection = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState (false);
  const sideNavItem = [
    {
      icons: '/Images/icons/TV-Show.svg',
      text: 'Webinars',
      key: 'Webinars',
    },
    {
      icons: '/Images/icons/Read-Online.svg',
      text: 'Masterclass',
      key: 'Masterclass',
    },
    {
      icons: '/Images/icons/Event-Accepted.svg',
      text: 'Events',
      key: 'Events',
    },
    {
      icons: '/Images/icons/Comet.svg',
      text: 'Citizen Science',
      key: 'Citizen Science',
    },
    {
      icons: '/Images/icons/User-Groups.svg',
      text: 'Collaborators',
      key: 'Collaborators',
    },
  ];
  return (
    <div className="font-sweet_sans_pro">
      <IconButton onClick={() => setIsDrawerOpen (true)}>
        <img src="/Images/icons/eva_menu-outline.svg" className='w-16'/>
      </IconButton>
      <Drawer
        style={{height: 'full'}}
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen (false)}
      >
        <Box p={2} textAlign="center" role="presentation">
          <div className="bg-[#000000] h-screen flex flex-col max-w-fit px-8 space-y-8 pt-4">
            <div className="text-white text-3xl flex flex-row items-center justify-between child:cursor-pointer">
              <img src="Images/logo.svg" className="w-36" />
              <HiOutlineX onClick={() => setIsDrawerOpen (false)} />
            </div>
            <div className="space-y-12">
              <div className="flex flex-row space-x-2 mr-8">
                <img src="/Images/icons/Search.svg" />
                <input
                  type="text"
                  className="focus:outline-none rounded-full border-2 border-white bg-[#000000] px-4 py-2 placeholder-white placeholder-opacitty-100 text-white placeholder:font-sweet_sans_pro placeholder:text-lg font-sweet_sans_pro text-lg"
                  placeholder="Search"
                />
              </div>
              {sideNavItem.map (item => {
                return (
                  <div className="flex flex-row items-center space-x-2 text-xl font-sweet_sans_pro cursor-pointer">
                    <img src={item.icons} className="w-8" />
                    <h1 className="text-white">{item.text}</h1>
                  </div>
                );
              })}
            </div>
            <div className='text-center'>
              <button className="border-2 border-white rounded-full font-gilroy text-white px-4 py-[2px] text-xl">
                Connect
              </button>

            </div>

          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerSection;
