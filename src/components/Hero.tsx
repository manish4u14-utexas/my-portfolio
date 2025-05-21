import React from 'react';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white text-center p-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-grid-slate-700 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
      <div className="relative z-10">
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-4 transition-all duration-1000 ease-out ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Hi, I'm <span className="text-sky-400">Manish Chaudhari</span>.
        </h1>
        <p 
          className={`text-xl md:text-2xl mb-2 transition-all duration-1000 ease-out delay-300 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Senior AI Business Analyst | Technical System Integration | Agile Product Delivery
        </p>
        <p 
          className={`text-md md:text-lg italic text-sky-300 mb-8 transition-all duration-1000 ease-out delay-500 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          M.S. in Artificial Intelligence (In Progress), University of Texas at Austin
        </p>
        <div 
          className={`space-x-4 transition-opacity duration-1000 ease-out delay-700 ${heroInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <a 
            href="#contact" 
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-sky-400/50 active:scale-95"
          >
            Contact Me
          </a>
          <a 
            href="/my-portfolio/Manish_Chaudhari_Resume_Updated.pdf" // Assuming resume is in public folder
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-sky-700 text-sky-400 font-semibold hover:text-white py-3 px-8 border-2 border-sky-400 hover:border-transparent rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-sky-400/50 active:scale-95"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

