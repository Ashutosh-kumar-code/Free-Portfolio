import React, { useRef } from 'react'
import HeroSection from '../../components/home/HeroSection'
import WhatIdo from '../../components/home/WhatIdo'
import OurMission from '../../components/home/OurMission'
import ProjectDone from '../../components/home/ProjectDone'
import Testimonial from '../../components/home/Testimonial'
import WorkProcess from '../../components/home/WorkProcess'
import SkillsAbilities from '../../components/home/SkillsAbilities'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'

const Home = () => {

  const aboutusRef = useRef(null);
  const whatIdo = useRef(null);
  const ourMission = useRef(null);
  const ourSkills = useRef(null);
  const ourProjects = useRef(null);
  // const ourSkills = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
    {/* Top Navbar */}
<Navbar scrollToSection={scrollToSection} refs={{ aboutusRef, whatIdo, ourMission, ourSkills,ourProjects  }} />

{/* Below Section */}
      <HeroSection scrollToSection={scrollToSection} refs={{ aboutusRef, ourProjects }} />
      <WhatIdo refs={{whatIdo}} />
      <OurMission refs={{ourMission}} />
      <SkillsAbilities refs={{ourSkills}} />
      <ProjectDone refs={{ourProjects}} />
      <Testimonial/>
      <WorkProcess/>

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} refs={{ aboutusRef, whatIdo, ourMission, ourSkills,ourProjects  }} />

    </>
  )
}

export default Home
