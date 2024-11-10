'use client'
import Image from "next/image";

import React, { useState } from 'react';
import AboutSection from "./about/page";
import Service from './components/services'
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  


  return (
    <>
        <div className="overlay"></div>
        <header className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
            {/* Logo Section */}
            <a href="#" className="logo text-3xl font-bold">
                <span className="text-blue-400">MS!</span>Talib
            </a>

            {/* Navigation */}
            <ul className="navlist hidden md:flex space-x-6">
                <li><a href="#home" className="active text-lg hover:text-blue-400">Home</a></li>
                <li><a href="#about" className="text-lg hover:text-blue-400">About</a></li>
                <li><a href="#services" className="text-lg hover:text-blue-400">Services</a></li>
                <li><a href="#portfolio" className="text-lg hover:text-blue-400">Portfolio</a></li>
                <li><a href="#blog" className="text-lg hover:text-blue-400">Blog</a></li>
                <li><a href="#contact" className="text-lg hover:text-blue-400">Contact</a></li>
            </ul>

            {/* Right Header Section (Buttons and Menu Icon) */}
            <div className="right-header flex items-center space-x-4">
                <a href="#contact" className="btn text-white bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600 hidden md:block">Let's chat <i className='bx bx-message-dots'></i></a>

                {/* Mobile Menu Icon */}
                <div className="menu-icon md:hidden cursor-pointer" onClick={toggleMenu}>
                    <div className="bar bg-white w-6 h-1 mb-1"></div>
                    <div className="bar bg-white w-6 h-1 mb-1"></div>
                    <div className="bar bg-white w-6 h-1"></div>
                </div>
            </div>
        </header>

        {/* Mobile Navigation (Dropdown Menu) */}
        <div className={`mobile-menu ${menuOpen ? 'block' : 'hidden'} md:hidden bg-gray-800 text-white py-4 absolute top-0 left-0 w-full`}>
            <ul className="flex flex-col items-center space-y-4">
                <li><a href="#home" className="text-lg hover:text-blue-400">Home</a></li>
                <li><a href="#about" className="text-lg hover:text-blue-400">About</a></li>
                <li><a href="#services" className="text-lg hover:text-blue-400">Services</a></li>
                <li><a href="#portfolio" className="text-lg hover:text-blue-400">Portfolio</a></li>
                <li><a href="#blog" className="text-lg hover:text-blue-400">Blog</a></li>
                <li><a href="#contact" className="text-lg hover:text-blue-400">Contact</a></li>
            </ul>
        </div>
<section className="home px-6 py-12 bg-gray-50" id="home">
  <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
    
    {/* Text Section */}
    <div className="hero-info flex-1 text-center md:text-left md:pr-10 space-y-6">
      <h3 className="text-3xl text-gray-700">Welcome To My World</h3>
      <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mt-4">Hi 👋, I'm Suleman</h1>

      <div className="text-animate mt-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-500">Frontend Developer</h2>
      </div>

      <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
        I design and build responsive web applications, focusing on user-friendly and high-performance solutions.
        I create dynamic interfaces, develop scalable and accessible solutions, and strive to deliver seamless user
        experiences. With a strong background in frontend development, I craft effective and engaging web applications
        that drive business results.
      </p>

      <div className="btn-box flex justify-center md:justify-start space-x-4 mt-8">
        <a 
          href="mailto:Suleman999ah@mail.com" 
          className="flex items-center gap-2 bg-blue-600 text-white py-2 px-8 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          <i className='bx bx-right-arrow-alt text-2xl transform transition-transform duration-300 hover:rotate-90'></i>
          <span>Hire Me Now</span>
        </a>
        <a 
          href="resumeme.html" 
          target="_blank" 
          className="flex items-center gap-2 bg-gray-800 text-white py-2 px-8 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
        >
          <i className='bx bx-download text-2xl transform transition-transform duration-300 hover:scale-110'></i>
          <span>Download CV</span>
        </a>
      </div>

      {/* Social Media Links */}
      <div className="social-media flex justify-center md:justify-start mt-8 space-x-6">
        <a href="http://www.linkedin.com/in/muhammad-suleman-a049902b5" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 text-3xl transition duration-300 ease-in-out relative">
          <i className='bx bxl-linkedin'></i>
          <span className="absolute inset-0 bg-blue-600 opacity-0 rounded-full transition-all duration-500 group-hover:opacity-100"></span>
        </a>
        <a href="https://github.com/Muhammad-Suleman-Talib" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-500 text-3xl transition duration-300 ease-in-out relative">
          <i className='bx bxl-github'></i>
          <span className="absolute inset-0 bg-gray-600 opacity-0 rounded-full transition-all duration-500 group-hover:opacity-100"></span>
        </a>
        <a href="mailto:Suleman999ah@gmail.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 text-3xl transition duration-300 ease-in-out relative">
          <i className='bx bxl-gmail'></i>
          <span className="absolute inset-0 bg-red-600 opacity-0 rounded-full transition-all duration-500 group-hover:opacity-100"></span>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61556357073556&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 text-3xl transition duration-300 ease-in-out relative">
          <i className='bx bxl-facebook'></i>
          <span className="absolute inset-0 bg-blue-600 opacity-0 rounded-full transition-all duration-500 group-hover:opacity-100"></span>
        </a>
      </div>
    </div>

    {/* Image Section */}
    <div className="img-hero flex-1 mt-10 md:mt-0 relative mx-auto max-w-xs md:max-w-md lg:max-w-lg order-first md:order-none">
      <div className="animate-frame absolute inset-0 border-4 border-transparent rounded-xl bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 p-1 animate-pulse"></div>
      <img src="Suleman.jpg" alt="Suleman" className="relative z-10 w-full h-auto rounded-lg shadow-lg" />
    </div>
  </div>
</section>


  
  <AboutSection/>
  <Service/>
    </>
);
}
