import CitizenScience from '../components/CitizenScience';
import Collaborators from '../components/Collaborators';
import Events from '../components/Events';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MasterClass from '../components/MasterClass';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import Webinars from '../components/Webinars';
import {webinarData} from '../dummydb';
import {useRouter} from 'next/router';
import Head from 'next/head';
import BoostButton from '../components/BoostButton';
import Link from 'next/link';

export default function Home () {
  const route = useRouter ().pathname;
  console.log (route);
  return (
    <div className="bg-[#000] overflow-x-auto">
      <Head>
        <title>HexStar Universe</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <SideNav path={route} />
      <Navbar path={route} />
      <div className="md:ml-16 md:px-12 px-8">
        <Hero />
        <Link  href='/event'>
        <img src="/scholarship.png" className='w-full cursor-pointer'/>
        </Link>
        <Webinars webinarData={webinarData} title="Webinars" />
        <MasterClass />
        <Events />
        <CitizenScience />
        <Collaborators />
        <Footer />
        <BoostButton/>
      </div>

    </div>
  );
}
