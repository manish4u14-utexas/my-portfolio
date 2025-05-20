import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  index: number; // For staggered animation
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value, href, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <a 
      ref={ref}
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      className={`bg-slate-800 p-6 rounded-lg shadow-xl hover:shadow-sky-500/40 transition-all duration-500 ease-out group flex items-center space-x-4 transform hover:-translate-y-1 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${inView ? index * 100 : 0}ms` }}
    >
      <div>{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-sky-300 group-hover:text-sky-200 transition-colors duration-200">{label}</h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">{value}</p>
      </div>
    </a>
  );
}

const Contact: React.FC = () => {
  const { ref: sectionTitleRef, inView: sectionTitleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contactDetails: Omit<ContactItemProps, 'index'>[] = [
    {
      icon: <Mail size={28} className="text-sky-400 group-hover:text-sky-300 transition-colors duration-200" />,
      label: "Email",
      value: "manish4u14@gmail.com",
      href: "mailto:manish4u14@gmail.com",
    },
    {
      icon: <Phone size={28} className="text-sky-400 group-hover:text-sky-300 transition-colors duration-200" />,
      label: "Phone",
      value: "+1-984 895 9263",
      href: "tel:+19848959263",
    },
    {
      icon: <Linkedin size={28} className="text-sky-400 group-hover:text-sky-300 transition-colors duration-200" />,
      label: "LinkedIn",
      value: "linkedin.com/in/manish-chaudhari-ai", // User to provide actual LinkedIn
      href: "https://www.linkedin.com/in/manish-chaudhari-ai/", // Placeholder, user to provide actual LinkedIn
    },
    {
      icon: <Github size={28} className="text-sky-400 group-hover:text-sky-300 transition-colors duration-200" />,
      label: "GitHub",
      value: "github.com/manish4u14-utexas",
      href: "https://github.com/manish4u14-utexas",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-10 bg-gray-900 text-gray-200 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <h2 
          ref={sectionTitleRef}
          className={`text-4xl font-bold text-center mb-16 text-sky-400 transition-all duration-700 ease-out ${sectionTitleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactDetails.map((item, index) => (
            <ContactItem {...item} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

