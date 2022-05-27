import CitizenScience from "../components/CitizenScience";
import Hero from "../components/Hero";
import HeroCarouselCard from "../components/HeroCarouselCard";
import MasterClass from "../components/MasterClass";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import Webinars from "../components/Webinars";


export default function Home() {
  return (
    <div className='bg-[#000]'>
     <SideNav/>
     <Navbar/>
     {/* <Hero/> */}
     {/* <HeroCarouselCard/> */}
     {/* <WebinarsCard/> */}
     <Webinars/>
     {/* <MasterClass/> */}
     <CitizenScience/>


    </div>
  )
}
