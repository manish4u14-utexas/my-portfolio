import React from 'react';
import { useInView } from 'react-intersection-observer';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  index: number;
}

const Project: React.FC<ProjectProps> = ({ title, description, technologies, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${inView ? index * 100 : 0}ms` }}
    >
      <h3 className="text-2xl font-bold text-sky-600 text-center mb-4">{title}</h3>
      <p className="text-gray-700 text-left mb-6">{description}</p>
      
      <p className="text-sky-600 font-semibold text-center mb-3">Key Technologies:</p>
      <div className="flex flex-wrap justify-center gap-2">
        {technologies.map((tech, i) => (
          <span 
            key={i} 
            className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Generative AI for Documentation Automation",
      description: "Pioneered the use of Generative AI for requirement gathering, user story creation, and documentation, achieving a 40% reduction in manual effort and accelerating project timelines. This involved prompt engineering and integrating AI tools into existing BA workflows.",
      technologies: ["Generative AI (ChatGPT, Bard)", "Prompt Engineering", "Jira", "Confluence", "Workflow Optimization"]
    },
    {
      title: "AI-Driven Agile Sprint Optimization",
      description: "Implemented AI-driven sprint planning and estimation using Atlassian AI, resulting in a 25% improvement in sprint accuracy and more effective backlog prioritization. This enhanced team velocity and predictability.",
      technologies: ["Atlassian AI", "Jira", "Agile Methodologies", "Scrum", "Sprint Planning", "Data Analysis"]
    },
    {
      title: "Automated Business Intelligence Reporting",
      description: "Automated critical reporting and data visualization processes using EazyBI Analytics, significantly increasing visibility into sprint progress and team velocity by 30%. This provided actionable insights for stakeholders and leadership.",
      technologies: ["EazyBI Analytics", "Jira", "Data Visualization", "Business Intelligence", "Automation"]
    },
    {
      title: "Salesforce CRM Enhancement for Lead Management",
      description: "Managed and optimized Salesforce CRM for doctor-facing operations, including lead generation, targeted marketing campaigns, and event management. Developed insightful SOQL-based reports for detailed lead tracking and campaign performance analysis.",
      technologies: ["Salesforce Sales Cloud", "SOQL", "CRM Optimization", "Lead Management", "Campaign Analytics"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-10 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={sectionRef}
          className={`text-4xl font-bold text-center mb-16 text-sky-400 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Key Projects & Initiatives
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Project 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
