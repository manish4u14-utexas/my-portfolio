import React from 'react';
import { useInView } from 'react-intersection-observer';

interface CertificationItemProps {
  name: string;
  issuer: string;
  date?: string; 
  index: number; // For staggered animation
}

const CertificationItem: React.FC<CertificationItemProps> = ({ name, issuer, date, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`bg-slate-800 p-4 rounded-lg shadow-xl hover:shadow-sky-500/30 transition-all duration-500 ease-out transform hover:-translate-y-1 text-center h-full flex flex-col justify-between ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${inView ? index * 100 : 0}ms` }}
    >
      <div>
        <div className={`w-16 h-16 bg-sky-700 rounded-full mx-auto mb-4 flex items-center justify-center text-sky-300 text-2xl font-semibold transition-all duration-300 ease-out ${inView ? 'scale-100' : 'scale-50'}`}>{name.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase()}</div>
        <h3 className="text-md font-bold text-sky-400 mb-1">{name}</h3>
        <p className="text-sm text-sky-300 mb-1">{issuer}</p>
      </div>
      {date && <p className="text-xs text-gray-400 mt-2">{date}</p>}
    </div>
  );
};

const Certifications: React.FC = () => {
  const { ref: sectionTitleRef, inView: sectionTitleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const certificationData: Omit<CertificationItemProps, 'index'>[] = [
    { name: "Professional Scrum Product Owner (PSPO)", issuer: "Scrum.org" },
    { name: "Professional Scrum Master (PSM)", issuer: "Scrum.org" },
    { name: "Business Analysis Certification", issuer: "IIBA" },
    { name: "Generative AI Certification", issuer: "Microsoft & LinkedIn" },
    { name: "Deep Learning & AI Ethics", issuer: "University of Texas at Austin (Coursework)" },
    { name: "JIRA Admin & Project Management", issuer: "Atlassian" },
    { name: "Python PCEP Certification", issuer: "Python Institute" },
  ];

  return (
    <section id="certifications" className="py-20 px-4 md:px-10 bg-slate-700 text-gray-200 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 
          ref={sectionTitleRef}
          className={`text-4xl font-bold text-center mb-16 text-sky-400 transition-all duration-700 ease-out ${sectionTitleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificationData.map((cert, index) => (
            <CertificationItem {...cert} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

