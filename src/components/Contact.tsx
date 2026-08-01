import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactItems = [
    {
      icon: <Mail size={20} className="text-sky-400" />,
      label: 'Email',
      value: 'manish4u14@gmail.com',
      href: 'mailto:manish4u14@gmail.com',
    },
    {
      icon: <Phone size={20} className="text-sky-400" />,
      label: 'Phone',
      value: '+1-984 895 9263',
      href: 'tel:+19848959263',
    },
    {
      icon: <Linkedin size={20} className="text-sky-400" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mkchaudhari',
      href: 'https://www.linkedin.com/in/mkchaudhari/',
    },
    {
      icon: <Github size={20} className="text-sky-400" />,
      label: 'GitHub',
      value: 'github.com/manish4u14-utexas',
      href: 'https://github.com/manish4u14-utexas',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 md:px-10 bg-[#0F172A] overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-10 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block px-4 py-1.5 bg-sky-500/10 text-sky-400 rounded-full text-xs font-semibold border border-sky-500/20 mb-4">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Get In <span className="text-sky-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Open to product leadership roles, AI consulting, and collaboration opportunities
          </p>
        </div>

        {/* Contact Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-700 ease-out delay-200 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-slate-800/40 border border-slate-700/40 rounded-xl p-4 hover:border-sky-500/30 hover:bg-slate-800/60 transition-all duration-300 group card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">{item.label}</p>
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
