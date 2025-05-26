import React from 'react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: listRef, inView: listInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 300, // Delay for the list to appear after the main text
  });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-4 md:px-10 bg-white text-slate-800 overflow-hidden" 
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          className={`text-4xl font-bold text-center mb-12 text-sky-600 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          About Me
        </h2>
        <div className={`text-lg leading-relaxed space-y-6 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-left pl-4 md:pl-6">
            A results-driven Senior Business Systems Analyst with over 10 years of experience, spearheading AI-driven business transformation and delivering impactful system solutions. 
            Proven expertise in optimizing workflows through AI, achieving up to 40% reduction in manual effort for documentation and a 25% improvement in sprint accuracy. 
          </p>
          <p className="text-left pl-4 md:pl-6">
            Expert in Web application development and API integration, Salesforce CRM optimization, and Heroku cloud management, consistently enhancing operational efficiency and user experience for consumer and provider-facing web applications. 
            A collaborative leader proficient in Agile methodologies, data analysis, and UAT support, currently advancing AI capabilities through an M.S. in Artificial Intelligence at the University of Texas at Austin.
          </p>
           <p className="text-left pl-4 md:pl-6">
            "Transitioning from traditional business analysis to AI-driven solution design while bridging technical and business stakeholders."
          </p>
        </div>
        <div 
          ref={listRef}
          className={`mt-12 pt-8 border-t border-slate-300 transition-all duration-700 ease-out ${listInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="text-2xl font-semibold mb-6 text-sky-600">Key Areas of Expertise:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700 pl-4 md:pl-6">
            {[
              "AI-Driven Business Analysis",
              "System & Workflow Automation",
              "Web App Design & API Integration",
              "Salesforce CRM Optimization",
              "Heroku Cloud Management",
              "Agile & Scrum Leadership",
              "Data Analysis & UAT Support",
              "Requirements Engineering",
              "Full Cycle Delivery",
              "Contentful Content Management"
            ].map((item, index) => (
              <li 
                key={index} 
                className={`flex items-center transition-all duration-500 ease-out ${listInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${listInView ? index * 100 : 0}ms` }}
              >
                <span className="text-sky-600 mr-3 text-xl">✔</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
