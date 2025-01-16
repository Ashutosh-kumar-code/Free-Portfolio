import React from 'react'
import Container from '../components/common/Container'
// import logo1 from "../assets/svg/logo.svg"
import logo1 from "../assets/images/logo_nav.png"
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react'

const Navbar = ({ scrollToSection, refs }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleButton = () => {
        console.log("button clicked")
    }

    return (
        <div className=''>
               <Container>
            <div className='flex justify-between items-center py-6  '>
                <div>
                    <img src={logo1} alt="" className='h-[45px] sm:h-[50px] md:h-[55px] lg:h-[65px] xl:h-[65px]' />
                </div>
                <div className='hidden lg:flex'>
                    <ul className='  flex   gap-10 justify-center items-center'>
                        <li><Link to={"/"} className='text-[#333333] font-medium text-base'>Home</Link></li>
                        <li><Link onClick={() => scrollToSection(refs.aboutusRef)} className='text-[#333333] font-medium text-base'>About</Link></li>
                        <li><Link onClick={() => scrollToSection(refs.Process)} className='text-[#333333] font-medium text-base'>Process</Link></li>
                        <li><Link onClick={() => scrollToSection(refs.ourMission)} className='text-[#333333] font-medium text-base'>Mission</Link></li>
                        <li><Link onClick={() => scrollToSection(refs.ourSkills)} className='text-[#333333] font-medium text-base'>Skills</Link></li>
                        <li><Link onClick={() => scrollToSection(refs.ourProjects)} className='text-[#333333] font-medium text-base'>Projects</Link></li>
                        {/* <li><Link onClick={() => scrollToSection(refs.ourProjects)} className='text-[#333333] font-medium text-base'>Services</Link></li> */}
                        {/* <li><Link to={'#'} className='text-[#333333] font-medium text-base'><Button onClick={handleButton} text={"Contacts"} type='button' /></Link></li> */}
                    </ul>
                </div>
                {/* Mobile Menu Icon */}
                <div className="lg:hidden">
                    {menuOpen ? (
                        <RxCross2
                            className="text-2xl cursor-pointer"
                            onClick={() => {
                                console.log('Close menu clicked');
                                setMenuOpen(false);
                            }}
                        />
                    ) : (
                        <IoMenuSharp
                            className="text-2xl cursor-pointer"
                            onClick={() => {
                                console.log('Open menu clicked');
                                setMenuOpen(true);
                            }}
                        />
                    )}
                </div>

                {/* Mobile Navigation Dropdown */}

                <div
                    className={`fixed z-20 top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}  >
                    <ul className="space-y-4 py-6">
                        {['Home', 'About', 'Process', 'Mission', 'Skills', 'Projects'].map((item, index) => (
                            <li
                                key={item}
                                className="text-[#333333] font-medium text-base transform transition-all duration-300 ease-in-out px-4 "
                                style={{
                                    transitionDelay: `${index * 50}ms`,
                                    opacity: menuOpen ? 1 : 0,
                                    transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)'
                                }}
                            >
                                <Link to="/" className="block">{item}</Link>
                            </li>
                        ))}
                        {/* <li className='px-4'>

                            <Button onClick={handleButton} text="Contacts" type="button" className="" />
                        </li> */}
                    </ul>
                </div>
                {menuOpen && (
                    <div
                        className=" fixed inset-0  bg-black transition-opacity duration-300 ease-in-out z-10"
                        style={{ opacity: menuOpen ? 0.5 : 0 }}
                        onClick={() => setMenuOpen(false)}
                    />
                )}
            </div>
        </Container>
        </div>
     
    )
}

export default Navbar

