import React from 'react'
import Container from '../components/common/Container'
import { Link } from 'react-router-dom'

const Footer = ({ scrollToSection, refs }) => {
    return (
        <div className='bg-[#2B384C] text-white'>
            <Container>
                <div >
                    <div className='flex flex-col  gap-10 justify-between py-10 sm:flex-row'>
                        <div className='flex flex-col gap-2 items-center sm:items-start'>
                            <h1 className='font-bold text-[#A53DFF] pb-3 text-lg xl:text-2xl' >Zenith Freelancer's Portfolio </h1>

                            <div className='text-center sm:w-64 sm:text-start' >Zenith Freelancer's Portfolio is more than just work—it's a story of passion, innovation, and excellence.Let's create something extraordinary together 🖥️!</div>
                        </div>
                        <div>
                            <div className='font-bold text-[#A53DFF] pb-3 text-lg text-center sm:text-start xl:text-2xl'>quick links  </div>
                            <ul className='flex flex-col items-center justify-center gap-2 sm:justify-center sm:items-start '>
                                <li><Link onClick={() => scrollToSection(refs.home)} >Home</Link></li>
                                <li><Link onClick={() => scrollToSection(refs.aboutusRef)} >About</Link></li>
                                <li><Link onClick={() => scrollToSection(refs.ourProjects)} >Projects</Link></li>
                                <li><Link onClick={() => scrollToSection(refs.ourSkills)} >Skills</Link></li>
                                <li><Link onClick={() => scrollToSection(refs.ourMission)} >Mission</Link></li>
                                
                            </ul>
                        </div>
                        <div>
                            <div className='font-bold text-[#A53DFF] pb-3 text-center sm:text-start xl:text-2xl'>Contact Info</div>
                            <ul className='flex flex-col gap-2 justify-center items-center sm:justify-center sm:items-start'>
                                <li>ashu2040kumar@gmail.com</li>
                                <li>Indore (Madhya Pradesh)</li>
                                <li>https://www.instagram.com/debug_and_grow</li>
                            </ul>
                        </div>
                    </div>

                </div>


            </Container>
            <div className='border-t border-t-slate-400 py-5 text-center'>
            © 2024 Zenith Freelancer. All Rights Reserved | Privacy Policy | Terms of Service
            </div>
        </div>
    )
}

export default Footer
