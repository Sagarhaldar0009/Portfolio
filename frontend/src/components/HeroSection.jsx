import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoMdArrowRoundDown } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import API from '../api/index.js';

const HeroSection = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Frontend Development 💻",
      "Backend Development 👨🏻‍💻",
      "Full Stack Development 💻",
      "React Development ⚛️",
      "Software Development 👨🏻‍💻",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
    Cursor,
    cursorstyle: "|",
  });

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    // Fetch profile pic from your backend API
    const fetchProfile = async () => {
      try {
        const response = await API.get('/home'); // Update this URL to your actual backend API
        // console.log(response.data);
        setProfile(response.data[0]);
      } catch (error) {
        console.error('Error in fetching Profile Pic :', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center mb-20 mt-12 md:mb-20 md:mt-20 px-4 md:px-0">
      {/* LHS - Written Side */}
      <div className="md:w-1/2 w-full md:px-24 px-4 text-center md:text-left">
        <div className="flex flex-col gap-y-2">
          <div className="text-white text-3xl md:text-5xl mt-4 font-bold">Hi There,</div>
          <div className="text-white text-3xl md:text-5xl font-bold">
            I am Sagar <span className="text-orange-500">Haldar</span>
          </div>
          <div className="text-xl md:text-3xl font-bold mt-4 md:mt-6 mb-4 md:mb-5">
            I am into{" "}
            <span className="text-yellow-400 font-bold">{typeEffect}</span>
          </div>
          <div>
            <a href="#about">
              <button className="flex bg-blue-900 text-white rounded-full font-bold px-4 py-2 text-lg md:text-2xl gap-1 justify-center items-center mb-5 md:mb-7 mx-auto md:mx-0">
                About Me
                <span className="pt-1">
                  <IoMdArrowRoundDown />
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-3 text-3xl md:text-5xl mt-3 justify-center md:justify-start">
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
          {/* <NavLink to="#">
            <MdEmail className="bg-white text-black rounded-2xl" />
          </NavLink> */}
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

      {/* Image Portion */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-center">
        <img
          src={profile.profileUrl}
          className="w-2/3 md:w-3/4 lg:w-2/3 rounded-full shadow-md transition duration-300 hover:shadow-lg hover:shadow-yellow-500/50 pulse-shadow"
        />
      </div>

    </div>
  );
};

export default HeroSection;
