import React from 'react';
import { useInView } from 'react-intersection-observer';

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  dates: string;
  responsibilities: string[];
  technologies?: string;
  index: number; // Added index for staggered animation
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, location, dates, responsibilities, technologies, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
 <div 
      ref={ref}
      className={`mb-12 p-6 bg-gray-100 rounded-lg shadow-md transition-all duration-700 ease-out hover:shadow-sky-500/20 transform hover:-translate-y-1 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${inView ? index * 100 : 0}ms` }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-sky-600">{title}</h3>
          <p className="text-lg font-semibold text-sky-500">{company}, {location}</p>
        </div>
        <p className="text-sm text-gray-500 whitespace-nowrap md:pl-2 mt-2 md:mt-0">{dates}</p>
      </div>
      <ul className="list-disc pl-5 space-y-3 text-gray-700 mb-4">
        {responsibilities.map((resp, idx) => (
          <li key={idx} className="text-left">{resp}</li>
        ))}
      </ul>
      {technologies && (
        <p className="text-sm text-sky-600 mt-4 pt-3 border-t border-gray-200">
          <span className="font-semibold">Key Technologies & Tools:</span> {technologies}
        </p>
      )}
    </div>
  );
};

const Experience: React.FC = () => {
  const { ref: sectionTitleRef, inView: sectionTitleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences: Omit<ExperienceItemProps, 'index'>[] = [
    {
      title: "Sr. Business Analyst",
      company: "Align Technology",
      location: "Morrisville, NC",
      dates: "December 2021 – Present",
      responsibilities: [
        "Spearheaded the analysis and enhancement of consumer and provider-facing web applications, directly contributing to improved user experience and seamless technical implementation.",
        "Pioneered the use of Generative AI for requirement gathering, user story creation, and documentation, achieving a 40% reduction in manual effort and accelerating project timelines.",
        "Created AI-powered mockups, technical architecture diagrams, and workflow visualizations using Visily.ai, enhancing clarity and stakeholder alignment.",
        "Implemented AI-driven sprint planning and estimation with Atlassian AI, resulting in a 25% improvement in sprint accuracy and more effective backlog prioritization.",
        // Shortened for brevity in this example, full content is in resume
      ],
      technologies: "Generative AI (ChatGPT, Bard), AI-driven automation, Web API, Salesforce Sales Cloud, Heroku, Figma, Postman, Node.js, Bash, Jira, Confluence, Chalk, New Relic, Kibana, Bug Snag, SQL Server, Microsoft Project, Contentful CMS, Lucid Chart, MS Visio, Balsamiq."
    },
    {
      title: "Sr. Business Analyst & Scrum Master",
      company: "Align Technology",
      location: "Hyderabad, IN",
      dates: "August 2018 – December 2021",
      responsibilities: [
        "Led cross-functional teams in the technical implementation and enhancement of critical web applications for consumer and provider portals, ensuring alignment with business goals.",
        "Designed highly interactive wireframes and UI prototypes in Figma, facilitating user-centric design for front-end applications and improving usability.",
        // Shortened
      ],
      technologies: "Salesforce CRM, SOQL, Heroku, AI-driven backlog management, Web API, MongoDB, Figma, Postman, Node.js, Bash, Jira, Confluence, SQL Server, Kibana, Splunk."
    },
    {
      title: "Business Analyst/SQA",
      company: "Microsoft",
      location: "Hyderabad, IN",
      dates: "June 2013 – August 2018",
      responsibilities: [
        "Collaborated effectively with diverse stakeholders to gather, define, and document project requirements, ensuring precise alignment with overarching business objectives.",
        // Shortened
      ],
      technologies: "Visual Studio Team Services, SQL Server, Jira, Confluence, AI-powered documentation tools (early adoption), Microsoft Visio, Lucid Chart."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-10 bg-white text-slate-800 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <h2 
          ref={sectionTitleRef}
          className={`text-4xl font-bold text-center mb-16 text-sky-600 transition-all duration-700 ease-out ${sectionTitleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Professional Experience & AI Integration
        </h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceItem {...exp} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
