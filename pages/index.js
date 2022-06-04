import CitizenScience from "../components/CitizenScience";
import Collaborators from "../components/Collaborators";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HeroCarouselCard from "../components/HeroCarouselCard";
import MasterClass from "../components/MasterClass";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import Webinars from "../components/Webinars";
import {webinarData} from '../dummydb'



export default function Home() {
  return (
    <div className='bg-[#000] overflow-x-auto'>
     <SideNav/>
     <Navbar/>
     <div className="md:ml-16 md:px-12 px-8">
     {/* <Hero/> */}
     <HeroCarouselCard/>
     <Webinars webinarData = {webinarData} title='Webinars'/>
     <MasterClass/>
     <Events/>
     <CitizenScience/>
     <Collaborators/>
     <Footer/>
     </div>
     


    </div>
  )
}
