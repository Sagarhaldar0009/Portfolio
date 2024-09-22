import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdAdminPanelSettings } from 'react-icons/md'; 
import PortfolioLogo from '../../assets/Portfolio_Logo.jpg';

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setNavOpen(false);
    }
  };

  return (
    <div className='shadow-lg sticky top-0 z-50 bg-[rgb(11,26,51)] text-white'>
      <div className='flex items-center justify-between max-w-6xl mx-auto p-3'>
        {/* Personal Name and Logo */}
        <div className='flex items-center'>
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className='flex items-center text-3xl hover:text-orange-500 transition ease-in duration-200'>
            <img src={PortfolioLogo} height="70px" width="70px" alt="Logo" className='mr-2 rounded-full' />
            <span>Sagar</span>
          </a>
        </div>

        {/* Navigation Links for Large Screens */}
        <div className='hidden md:flex items-center gap-4 text-xl'>
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className='hover:text-yellow-400 hover:border-b hover:border-b-blue-800 transition ease-in duration-200'>Home</a>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className='hover:text-yellow-400 hover:border-b hover:border-b-blue-800 transition ease-in duration-200'>About</a>
          <a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} className='hover:text-yellow-400 hover:border-b hover:border-b-blue-800 transition ease-in duration-200'>Experience</a>
          <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className='hover:text-yellow-400 hover:border-b hover:border-b-blue-800 transition ease-in duration-200'>Skills</a>          
          <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className='hover:text-yellow-400 hover:border-b hover:border-b-blue-800 transition ease-in duration-200'>Projects</a>
          <a href="#education" onClick={(e) => handleLinkClick(e, 'education')} className='hover:text-yellow-400 hover:border-b hover:border-b-blue-800 transition ease-in duration-200'>Education</a>
          <a href="#leetcode" onClick={(e) => handleLinkClick(e, 'leetcode')} className='hover:text-yellow-400 hover:border-b hover:border-b-blue-800 transition ease-in duration-200'>Coding</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className='hover:text-yellow-400 hover:border-b hover:border-b-blue-800 transition ease-in duration-200'>Contact</a>
        </div>

        {/* Admin Panel Link */}
        {/* <div className='hidden md:flex items-center'>
          <Link to="/login" className='flex items-center text-xl p-5 hover:text-blue-800 transition ease-in duration-200'>
            <MdAdminPanelSettings className="text-blue-500 text-4xl" />
            <span className="ml-2 text-2xl font-bold">Admin</span>
          </Link>
        </div> */}

        {/* Hamburger Icon for Mobile */}
        <div className='md:hidden flex items-center'>
          <button onClick={handleNavToggle} className='text-2xl'>
            {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className='md:hidden bg-white shadow-lg'>
          <div className='flex flex-col items-center gap-4 p-5 text-xl bg-[rgb(11,26,51)] text-white'>
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className='hover:text-yellow-400 transition ease-in duration-200'>Home</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className='hover:text-yellow-400 transition ease-in duration-200'>About</a>
            <a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} className='hover:text-yellow-400 transition ease-in duration-200'>Experience</a>
            <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className='hover:text-yellow-400 transition ease-in duration-200'>Skills</a>
            <a href="#education" onClick={(e) => handleLinkClick(e, 'education')} className='hover:text-yellow-400 transition ease-in duration-200'>Education</a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className='hover:text-yellow-400 transition ease-in duration-200'>Projects</a>
            <a href="#leetcode" onClick={(e) => handleLinkClick(e, 'leetcode')} className='hover:text-yellow-400 hover:border-b hover:border-b-blue-800 transition ease-in duration-200'>Coding</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className='hover:text-yellow-400 transition ease-in duration-200'>Contact</a>     
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;