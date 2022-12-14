import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
      <div>
        <h1 className="text-3xl font-signature ml-20">Momin khan</h1>
      </div>
      <ul className="hidden  md:flex space-x-8 mr-20">
        <li className="hover:text-gray-500 duration-200 cursor-pointer">
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-gray-500 duration-200 cursor-pointer">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-gray-500 duration-200 cursor-pointer">
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li className="hover:text-gray-500 duration-200 cursor-pointer">
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="hover:text-gray-500 duration-200 cursor-pointer">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div
        className="cursor-pointer pr-4 text-gray-500 z-10 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500">
          <li className="nav-item cursor-pointer py-6">
            <Link to="/" spy={true} smooth={true} offset={-70} duration={500}>
              {" "}
              Home
            </Link>
          </li>
          <li className="nav-item cursor-pointer py-6">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nav-item cursor-pointer py-6">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item cursor-pointer py-6">
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item cursor-pointer py-6">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
