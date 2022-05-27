import React from 'react';

const CitizenScience = () => {
  const data = [
    {
      key: 'Citizen ASAS-SN',
      title: 'Citizen ASAS-SN',
      logo: '/Images/citizenScience/logo1.svg',
    },
    {
      key: 'Planet Hunters TESS',
      title: 'Planet Hunters TESS',
      logo: '/Images/citizenScience/logo2.svg',
    },
    {
      key: 'Galaxy Zoo',
      title: 'Galaxy Zoo',
      logo: '/Images/citizenScience/logo3.svg',
    },
    {
      key: 'Dark Energy Explorers',
      title: 'Dark Energy Explorers',
      logo: '/Images/citizenScience/logo4.svg',
    },
    {
      key: 'Disk Detective',
      title: 'Disk Detective',
      logo: '/Images/citizenScience/logo5.svg',
    },
    {
      key: 'NAOJ Citizen Science Project',
      title: 'NAOJ Citizen Science Project',
      logo: '/Images/citizenScience/logo6.svg',
    },
  ];
  return (
    <div>
      <div className="ml-16 px-12">
        <h1 className="font-cascade bg-clip-text text-4xl my-8 bg-gradient-to-b from-[#FFFFFF] to-[rgba(0, 0, 0, 0.96)] text-transparent">
          CITIZEN SCIENCE
        </h1>
        <div className="font-sweet_sans_pro text-lg text-white grid grid-cols-2 gap-y-8 aligh-items-center py-8">
          {data.map (item => {
            return (
              <div className="flex flex-row items-center pl-12" key={item.title}>
                <img src={item.logo} className="w-28" />
                <h1 className="mx-8">{item.title}</h1>
              </div>
            );
          })}
        </div>
        <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-[#363636]" />
        <span class="flex-shrink mx-12">
          <button className="text-white bg-gradient-to-b from-[#9E00FF] via-[#8F00FF] to-[#130EFF] rounded-full px-4 py-[3px] font-sweet_sans_pro text-lg">
            More
          </button>
        </span>
        <div class="flex-grow border-t border-[#363636]"/>
      </div>
      </div>
    </div>
  );
};

export default CitizenScience;
