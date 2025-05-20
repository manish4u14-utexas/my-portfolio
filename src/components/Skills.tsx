import React from 'react';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const { ref: sectionTitleRef, inView: sectionTitleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillsData = {
    businessAnalysis: {
      title: "Business & System Analysis (Agile & Technical Focus)",
      items: [
        "Expertly gathering and translating business needs into actionable technical requirements, user stories, and process maps through comprehensive stakeholder collaboration.",
        "Developing detailed functional and non-functional requirements documentation, ensuring clarity and alignment with project objectives.",
        "Championing Agile & Scrum methodologies: Driving sprint planning, backlog grooming, daily stand-ups, and retrospectives to optimize team velocity and product delivery.",
        "Leveraging Jira, Confluence, and Atlassian AI for advanced sprint estimation, strategic roadmap planning, and transparent progress tracking.",
        "Conducting in-depth reverse engineering of existing systems to identify improvement opportunities and integration pathways.",
        "Applying AI-powered requirement analysis and workflow optimization techniques to enhance efficiency and accuracy.",
        "Performing thorough web application analysis and optimization for both consumer and provider platforms, focusing on user experience and performance.",
        "Proficiently managing Salesforce CRM for comprehensive lead generation, targeted campaign and event management, and meticulous contact and account management."
      ]
    },
    technicalAI: {
      title: "Technical & AI Prowess",
      items: [
        { name: "API & Middleware", description: "Designing, integrating, troubleshooting, and meticulously documenting Web APIs and middleware solutions." },
        { name: "Databases", description: "Proficient in MongoDB, SQL Server, and Salesforce SOQL for complex data retrieval, analysis, and robust reporting on leads & campaigns." },
        { name: "AI-Powered Productivity", description: "Strategically implementing Generative AI (ChatGPT, Claude, Bard) for AI-assisted user story writing, AI-driven workflow automation, and sophisticated prompt engineering to boost productivity." },
        { name: "Cloud Services (Heroku)", description: "Managing full lifecycle of Heroku applications including creation, environment variable configuration, proxy app setup, add-on integration (New Relic, Bug Snag, Pingdom), dyno scaling, and continuous performance monitoring." },
        { name: "AI & Business Intelligence Tools", description: "Utilizing Visily.ai for rapid AI-powered mockup creation, and employing EazyBI, Kibana, New Relic, Bug Snag, and Splunk for advanced analytics and system monitoring." },
        { name: "UI/UX Design Tools", description: "Creating intuitive user interfaces and clear process flows using Figma and Lucid Chart." },
        { name: "Scripting & Development Acumen", description: "Skilled in using Postman for API testing, with a strong understanding of Node.js and Bash; capable of reading, analyzing, and debugging code to facilitate technical discussions and solutions." },
      ]
    },
    projectManagement: {
      title: "Project Management & Collaboration",
      items: [
        "Utilizing Jira, Confluence, Chalk, Asana, and Microsoft Project for effective project planning, execution, and tracking.",
        "Employing Atlassian AI for enhanced planning accuracy and data-driven sprint estimation."
      ]
    },
    softSkills: {
      title: "Strategic Soft Skills",
      items: [
        "Exceptional communication, presentation, and problem-solving abilities.",
        "Proven stakeholder engagement and cross-functional team collaboration.",
        "Mastery of Agile & Scrum methodologies for adaptive and efficient project delivery.",
        "Applying AI-driven insights for strategic decision-making and business process improvement."
      ]
    }
  };

  const SkillCategory: React.FC<{ title: string; items: any[]; isTechnical?: boolean; categoryIndex: number }> = ({ title, items, isTechnical, categoryIndex }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
      // delay: categoryIndex * 200, // Stagger category appearance
    });

    return (
      <div 
        ref={ref}
        className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: `${inView ? categoryIndex * 150 : 0}ms` }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-sky-300">{title}</h3>
        {isTechnical ? (
          <div className="space-y-4">
            {items.map((skill, index) => {
              const { ref: itemRef, inView: itemInView } = useInView({ triggerOnce: true, threshold: 0.1 });
              return (
                <div 
                  ref={itemRef}
                  key={`tech-${index}`}
                  className={`p-4 bg-slate-800 rounded-lg shadow-md hover:shadow-sky-500/30 transition-all duration-300 ease-out transform hover:-translate-y-0.5 ${itemInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                  style={{ transitionDelay: `${itemInView ? index * 50 : 0}ms` }}
                >
                  <h4 className="font-semibold text-sky-400 text-lg mb-1">{skill.name}</h4>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <ul className="list-none space-y-3 text-gray-300">
            {items.map((skill, index) => {
              const { ref: itemRef, inView: itemInView } = useInView({ triggerOnce: true, threshold: 0.1 });
              return (
                <li 
                  ref={itemRef}
                  key={`skill-${index}`}
                  className={`flex items-start transition-all duration-300 ease-out ${itemInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                  style={{ transitionDelay: `${itemInView ? index * 50 : 0}ms` }}
                >
                  <span className="text-sky-500 mr-3 mt-1 text-lg">❖</span>{skill}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-10 bg-gray-900 text-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={sectionTitleRef}
          className={`text-4xl font-bold text-center mb-16 text-sky-400 transition-all duration-700 ease-out ${sectionTitleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Core Competencies & AI Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <SkillCategory title={skillsData.businessAnalysis.title} items={skillsData.businessAnalysis.items} categoryIndex={0} />
          <SkillCategory title={skillsData.technicalAI.title} items={skillsData.technicalAI.items} isTechnical categoryIndex={1} />
          <SkillCategory title={skillsData.projectManagement.title} items={skillsData.projectManagement.items} categoryIndex={2} />
          <SkillCategory title={skillsData.softSkills.title} items={skillsData.softSkills.items} categoryIndex={3} />
        </div>
      </div>
    </section>
  );
};

export default Skills;

