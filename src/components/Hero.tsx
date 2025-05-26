//import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect'; // We'll need to install this package

const Hero: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const roles = [
    "Sr. Business Analyst",
    "Technical Business Analyst",
    "AI Business Analyst",
    "Agile Project Delivery",
    "Technical Business Analyst Specializing in AI Solutions"
  ];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white text-center p-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-grid-slate-700 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
        {/* Profile Photo - Moved up with more space */}
        <div className={`mb-12 transition-all duration-700 ease-out ${heroInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <img 
            src="/my-portfolio/profile-photo.jpg" 
            alt="Manish Chaudhari" 
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-sky-400 shadow-xl object-cover transition-all duration-500 hover:scale-105"
          />
        </div>
        
        {/* Name */}
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-2 transition-all duration-1000 ease-out ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Hi, I'm <span className="text-sky-400">Manish Chaudhari</span>.
        </h1>

        {/* Education - Moved up right below name */}
        <p 
          className={`text-md md:text-lg italic text-gray-300 mb-6 transition-all duration-1000 ease-out delay-300 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          M.S. in Artificial Intelligence (In Progress), University of Texas at Austin
        </p>
        
        {/* Animated Roles */}
        <div 
          className={`h-12 text-xl md:text-2xl mb-10 transition-all duration-1000 ease-out delay-500 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <Typewriter
            options={{
              strings: roles,
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              //pauseFor: 1500,
              wrapperClassName: "text-white font-bold",
              cursorClassName: "text-sky-300"
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1500) // Add pause between cycles
                .start();
            }}
          />
        </div>
        
        {/* Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:space-x-4 transition-opacity duration-1000 ease-out delay-700 ${heroInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <a 
            href="#contact" 
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-sky-400/50 active:scale-95 w-full sm:w-auto text-center"
          >
            Contact Me
          </a>
          <a 
            href="/my-portfolio/Manish_Chaudhari_Resume_Updated.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-sky-700 text-sky-400 font-semibold hover:text-white py-3 px-8 border-2 border-sky-400 hover:border-transparent rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-sky-400/50 active:scale-95 w-full sm:w-auto text-center"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
