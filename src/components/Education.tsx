import React from 'react';
import { useInView } from 'react-intersection-observer';

interface EducationItemProps {
  degree: string;
  institution: string;
  dates: string;
  details?: string[];
  index: number; // For staggered animation
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, dates, details, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`mb-8 p-6 bg-slate-800 rounded-lg shadow-xl hover:shadow-sky-500/40 transition-all duration-500 ease-out transform hover:-translate-y-1 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${inView ? index * 100 : 0}ms` }}
    >
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-xl font-bold text-sky-400">{degree}</h3>
        <p className="text-sm text-gray-400 whitespace-nowrap pl-4">{dates}</p>
      </div>
      <p className="text-lg font-semibold text-sky-300 mb-2">{institution}</p>
      {details && (
        <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
          {details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Education: React.FC = () => {
  const { ref: sectionTitleRef, inView: sectionTitleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const educationData: Omit<EducationItemProps, 'index'>[] = [
    {
      degree: "Master of Science in Artificial Intelligence",
      institution: "University of Texas at Austin",
      dates: "Pursuing, Expected July 2026",
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "SLIET, Sangrur, Punjab",
      dates: "2012",
    },
    {
      degree: "Diploma in Computer Science",
      institution: "SLIET, Longowal, Punjab",
      dates: "", 
    },
  ];

  return (
    <section id="education" className="py-20 px-4 md:px-10 bg-slate-700 text-gray-200 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <h2 
          ref={sectionTitleRef}
          className={`text-4xl font-bold text-center mb-16 text-sky-400 transition-all duration-700 ease-out ${sectionTitleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Education
        </h2>
        <div>
          {educationData.map((edu, index) => (
            <EducationItem {...edu} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

