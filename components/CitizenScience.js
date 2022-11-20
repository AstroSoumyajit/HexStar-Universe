import React from 'react';
import Link from 'next/link';

const CitizenScience = () => {
  const data = [
    {
      key: 'Citizen ASAS-SN',
      title: 'Citizen ASAS-SN',
      logo: '/Images/citizenScience/logo1.svg',
      link: 'https://www.zooniverse.org/projects/tharinduj/citizen-asas-sn',
    },
    {
      key: 'Planet Hunters TESS',
      title: 'Planet Hunters TESS',
      logo: '/Images/citizenScience/logo2.svg',
      link: 'https://www.zooniverse.org/projects/nora-dot-eisner/planet-hunters-tess',
    },
    {
      key: 'Galaxy Zoo',
      title: 'Galaxy Zoo',
      logo: '/Images/citizenScience/logo3.svg',
      link: 'https://www.zooniverse.org/projects/zookeeper/galaxy-zoo',
    },
    {
      key: 'Dark Energy Explorers',
      title: 'Dark Energy Explorers',
      logo: '/Images/citizenScience/logo4.svg',
      link: 'https://www.zooniverse.org/projects/erinmc/dark-energy-explorers',
    },
    {
      key: 'Disk Detective',
      title: 'Disk Detective',
      logo: '/Images/citizenScience/logo5.svg',
      link: 'https://www.zooniverse.org/projects/ssilverberg/disk-detective',
    },
    {
      key: 'NAOJ Citizen Science Project',
      title: 'NAOJ Citizen Science Project',
      logo: '/Images/citizenScience/logo6.svg',
      link: 'https://galaxycruise.mtk.nao.ac.jp/en/',
    },
  ];
  return (
    <div>
      <div className="" id='citizenscience'>
      <div className="flex w-full items-center justify-between">
        <h1 className="font-gilroy bg-clip-text md:text-4xl my-8 text-white text-lg mr-8 whitespace-nowrap">
          CITIZEN SCIENCE
        </h1>
        <hr className="border-[#363636] border-2 w-full" />
      </div>
        <div className="font-sweet_sans_pro text-xl text-white grid md:grid-cols-2 grid-cols-1 gap-y-8 aligh-items-center py-8">
          {data.map (item => {
            return (
              <Link href={item.link} key={item.key}>
                <div
                  className="flex flex-row items-center md:pl-12"
                  key={item.title}
                >
                  <img src={item.logo} className="w-28" />
                  <h1 className="mx-8">{item.title}</h1>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-[#363636]" />
          <span className="flex-shrink mx-12">
          <Link href=' https://www.zooniverse.org/'>
            <button className="text-white bg-gradient-to-b from-[#9E00FF] via-[#8F00FF] to-[#130EFF] rounded-full px-4 py-[3px] font-sweet_sans_pro text-lg">
              More
            </button>
          </Link>
          </span>
          <div className="flex-grow border-t border-[#363636]" />
        </div>
      </div>
    </div>
  );
};

export default CitizenScience;
