import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { FaPhone, FaInstagram, FaFacebook, FaTelegram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaMapLocationDot } from 'react-icons/fa6';
import { IoLogoGithub } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="flex bg-[rgb(11,26,51)] text-white w-full justify-center">
      <div className="flex flex-col w-11/12 lg:w-10/12 py-8">
        {/* 3 divs */}
        <div className="flex flex-col md:flex-row pt-10 mb-5 w-full justify-between">
          {/* 1st Box */}
          <div className="w-full md:w-5/12 mb-8 md:mb-0 gap-y-5 flex flex-col">
            <div className="text-2xl md:text-3xl font-bold">Sagar's Portfolio</div>
            <div>
              <p>
                Thank you for visiting my personal portfolio website.
                <br /> Connect with me over socials.
              </p>
            </div>
            <div>
              <p>
                Keep Rising 🚀. Connect with me over live chat!
              </p>
            </div>
          </div>

          {/* 2nd Box */}
          <div className="flex flex-col gap-y-3 mb-8 md:mb-0">
            <div className="text-2xl md:text-3xl font-bold">Quick Links</div>
            <div className="flex flex-col gap-y-1.5">
              <a href="#home" className="flex gap-x-2 group">
                <div className="bg-white text-black rounded-full group-hover:text-orange-500 transition ease-in duration-200">
                  <IoIosArrowForward className="m-1" />
                </div>
                <h1 className="group-hover:text-orange-500 transition ease-in duration-200">Home</h1>
              </a>
              <a href="#about" className="flex gap-x-2 group">
                <div className="bg-white text-black rounded-full group-hover:text-orange-500 transition ease-in duration-200">
                  <IoIosArrowForward className="m-1" />
                </div>
                <h1 className="group-hover:text-orange-500 transition ease-in duration-200">About</h1>
              </a>
              <a href="#skills" className="flex gap-x-2 group">
                <div className="bg-white text-black rounded-full group-hover:text-orange-500 transition ease-in duration-200">
                  <IoIosArrowForward className="m-1" />
                </div>
                <h1 className="group-hover:text-orange-500 transition ease-in duration-200">Skills</h1>
              </a>
              <a href="#education" className="flex gap-x-2 group">
                <div className="bg-white text-black rounded-full group-hover:text-orange-500 transition ease-in duration-200">
                  <IoIosArrowForward className="m-1" />
                </div>
                <h1 className="group-hover:text-orange-500 transition ease-in duration-200">Education</h1>
              </a>
              <a href="#projects" className="flex gap-x-2 group">
                <div className="bg-white text-black rounded-full group-hover:text-orange-500 transition ease-in duration-200">
                  <IoIosArrowForward className="m-1" />
                </div>
                <h1 className="group-hover:text-orange-500 transition ease-in duration-200">Projects</h1>
              </a>
              <a href="#experience" className="flex gap-x-2 group">
                <div className="bg-white text-black rounded-full group-hover:text-orange-500 transition ease-in duration-200">
                  <IoIosArrowForward className="m-1" />
                </div>
                <h1 className="group-hover:text-orange-500 transition ease-in duration-200">Experience</h1>
              </a>
            </div>
          </div>

          {/* 3rd Box */}
          <div className="flex flex-col gap-y-3">
            <div className="text-2xl md:text-3xl font-bold">Contact Info</div>
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-2 items-center">
                <FaPhone className="text-orange-400" />
                <h1>+91 9625-813-605</h1>
              </div>
              <div className="flex gap-2 items-center">
                <MdEmail className="text-orange-400" />
                <h1>sagarhaldar987@gmail.com</h1>
              </div>
              <div className="flex gap-2 items-center">
                <FaMapLocationDot className="text-orange-400" />
                <h1>New Delhi, India-110096</h1>
              </div>
              <div className="flex gap-3 text-3xl md:text-4xl mt-3">
                <NavLink to="https://www.linkedin.com/in/sagar-haldar-87282b201/">
                  <FaLinkedin className="bg-white text-black rounded-xl" />
                </NavLink>
                <NavLink to="https://www.instagram.com/sagar_haldar987?igsh=MTdvcHRmYWh2aHVpaQ==">
                  <FaInstagram className="bg-white text-black rounded-xl" />
                </NavLink>
                <NavLink to="https://www.facebook.com/profile.php?id=100008412815236">
                  <FaFacebook className="bg-white text-black rounded-full" />
                </NavLink>
                <NavLink to="https://github.com/Sagarhaldar0009">
                  <IoLogoGithub className="bg-white text-black rounded-full" />
                </NavLink>
                <a href="mailto:sagarhaldar987@gmail.com">
                  <MdEmail className="bg-white text-black rounded-2xl" />
                </a>
                <NavLink to="https://twitter.com/sagar09122001">
                  <FaXTwitter className="bg-white text-black rounded-2xl" />
                </NavLink>
                <NavLink to="https://t.me/Sagar09122001">
                  <FaTelegram className="bg-white text-black rounded-full" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-slate-600"></div>

        {/* Bottom Div */}
        <div className="flex justify-center pb-4 mt-3">
          <h1>
            Designed with <span>❤️</span> by <span className="text-orange-500">Sagar Haldar</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
