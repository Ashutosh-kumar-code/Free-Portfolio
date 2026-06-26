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
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleButton = () => {
        console.log("button clicked")
    }

    const navItems = [
  { label: 'Home', ref: refs.home_section },
  { label: 'About', ref: refs.aboutusRef },
  { label: 'Mission', ref: refs.ourMission },
  { label: 'Skills', ref: refs.ourSkills },
  { label: 'Projects', ref: refs.ourProjects },
];


    return (
        <div className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'navbar-scrolled' : ''}`}>
               <Container>
            <div className='flex justify-between items-center py-3'>
                <div>
                    <img src={logo1} alt="" className='h-[34px] sm:h-[38px] md:h-[40px] lg:h-[44px] xl:h-[44px]' />
                </div>
                <div className='hidden lg:flex'>
                    <ul className='flex gap-10 justify-center items-center'>
                        <li><Link onClick={() => scrollToSection(refs.home_section)} className='text-[#333333] font-medium text-base relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#A53DFF] after:transition-all after:duration-300 hover:after:w-full hover:text-[#A53DFF]'>Home</Link></li>
                        <li><Link onClick={() => scrollToSection(refs.aboutusRef)} className='text-[#333333] font-medium text-base relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#A53DFF] after:transition-all after:duration-300 hover:after:w-full hover:text-[#A53DFF]'>About</Link></li>
                        <li><Link onClick={() => scrollToSection(refs.ourMission)} className='text-[#333333] font-medium text-base relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#A53DFF] after:transition-all after:duration-300 hover:after:w-full hover:text-[#A53DFF]'>Mission</Link></li>
                        <li><Link onClick={() => scrollToSection(refs.ourSkills)} className='text-[#333333] font-medium text-base relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#A53DFF] after:transition-all after:duration-300 hover:after:w-full hover:text-[#A53DFF]'>Skills</Link></li>
                        <li><Link onClick={() => scrollToSection(refs.ourProjects)} className='text-[#333333] font-medium text-base relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#A53DFF] after:transition-all after:duration-300 hover:after:w-full hover:text-[#A53DFF]'>Projects</Link></li>
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
                        {navItems.map(({ label, ref }, index) => (
                            <li
                                key={label}
                                className="text-[#333333] font-medium text-base transform transition-all duration-300 ease-in-out px-4 "
                                style={{
                                    transitionDelay: `${index * 50}ms`,
                                    opacity: menuOpen ? 1 : 0,
                                    transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)'
                                }}
                            >
                                {/* <Link to="/" className="block">{item}</Link> */}
                                <button
        onClick={() => {
          scrollToSection(ref);
          setMenuOpen(false); // close the menu after clicking
        }}
        className="block w-full text-left"
      >
        {label}
      </button>
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

