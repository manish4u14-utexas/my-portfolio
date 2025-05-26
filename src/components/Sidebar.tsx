import React, { useEffect, useState } from 'react';
import { Home, User, Briefcase, Code, Award, GraduationCap, Mail, FileText } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const navItems = [
    { name: 'Home', icon: <Home size={20} />, href: '#home', id: 'home' }, // Added Home
    { name: 'About', icon: <User size={20} />, href: '#about', id: 'about' },
    { name: 'Skills', icon: <Award size={20} />, href: '#skills', id: 'skills' },
    { name: 'Experience', icon: <Briefcase size={20} />, href: '#experience', id: 'experience' },
    { name: 'Education', icon: <GraduationCap size={20} />, href: '#education', id: 'education' },
    { name: 'Certifications', icon: <Award size={20} />, href: '#certifications', id: 'certifications' }, // Added Certifications
    { name: 'Projects', icon: <Code size={20} />, href: '#projects', id: 'projects' },
    { name: 'Contact', icon: <Mail size={20} />, href: '#contact', id: 'contact' },
    { name: 'Resume', icon: <FileText size={20} />, href: '/my-portfolio/Manish_Chaudhari_Resume_Updated.pdf', id: 'resume' } // Link to resume PDF
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (sectionId === 'resume') return; // Don't prevent default for resume link
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // setActiveSection(sectionId); // Set active on click, will be overridden by scroll spy
    }
  };

  useEffect(() => {
    const sections = navItems.filter(item => item.id !== 'resume').map(item => document.getElementById(item.id));
    
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.4, // 40% of the section is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navItems]);

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-slate-900 text-white p-6 flex flex-col shadow-lg z-50 transition-transform duration-300 ease-in-out md:translate-x-0 -translate-x-full">
      {/* Mobile toggle button can be added here if needed */}
      <div className="text-center mb-10 mt-4">
        <div className="w-24 h-24 bg-sky-500 rounded-full mx-auto flex items-center justify-center mb-3 ring-4 ring-sky-700 shadow-md">
          <span className="text-4xl font-bold text-slate-900">MC</span>
        </div>
        <h2 className="text-xl font-semibold">Manish Chaudhari</h2>
        <p className="text-sm text-sky-400">Senior AI Business Analyst</p>
      </div>
      <nav className="flex-grow overflow-y-auto">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-1">
              <a 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.id)}
                target={item.id === 'resume' ? '_blank' : '_self'}
                rel={item.id === 'resume' ? 'noopener noreferrer' : ''}
                className={`flex items-center py-3 px-4 rounded-md transition-all duration-200 group 
                            ${activeSection === item.id && item.id !== 'resume' ? 'bg-sky-600 text-white shadow-inner' : 'text-gray-300 hover:bg-sky-700 hover:text-white'}`}
              >
                <span className={`mr-3 transition-colors duration-200 ${activeSection === item.id ? 'text-sky-300' : 'group-hover:text-sky-300'}`}>{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto text-center text-xs text-gray-500 pt-4 border-t border-slate-700">
        <p>&copy; {new Date().getFullYear()} Manish Chaudhari</p>
      </div>
    </aside>
  );
};

export default Sidebar;

