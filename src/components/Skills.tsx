import React from 'react';
import { useInView } from 'react-intersection-observer';

interface SkillCardProps {
  title: string;
  description: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`bg-white rounded-lg shadow-md p-6 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${inView ? index * 100 : 0}ms` }}
    >
      <h3 className="text-xl font-bold text-sky-600 mb-4">{title}</h3>
      <p className="text-gray-700 text-left">{description}</p>
    </div>
  );
};

const BulletPoint: React.FC<{point: string, index: number, inView: boolean}> = ({ point, index, inView }) => {
  return (
    <li 
      className="bg-white rounded-lg shadow-md p-5 text-left flex items-start"
      style={{ transitionDelay: `${inView ? index * 100 : 0}ms` }}
    >
      <span className="text-sky-500 mr-3 mt-1 flex-shrink-0">◆</span>
      <p className="text-gray-700">{point}</p>
    </li>
  );
};

const Skills: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: businessSkillsRef, inView: businessSkillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: technicalSkillsRef, inView: technicalSkillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: projectMgmtRef, inView: projectMgmtInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: softSkillsRef, inView: softSkillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const businessSkills = [
    {
      point: "Expertly gathering and translating business needs into actionable technical requirements, user stories, and process maps through comprehensive stakeholder collaboration.",
    },
    {
      point: "Developing detailed functional and non-functional requirements documentation, ensuring clarity and alignment with project objectives.",
    },
    {
      point: "Championing Agile & Scrum methodologies: Driving sprint planning, backlog grooming, daily stand-ups, and retrospectives to optimize team velocity and product delivery.",
    },
    {
      point: "Leveraging Jira, Confluence, and Atlassian AI for advanced sprint estimation, strategic roadmap planning, and transparent progress tracking.",
    },
    {
      point: "Conducting in-depth reverse engineering of existing systems to identify improvement opportunities and integration pathways.",
    },
    {
      point: "Applying AI-powered requirement analysis and workflow optimization techniques to enhance efficiency and accuracy.",
    },
    {
      point: "Performing thorough web application analysis and optimization for both consumer and provider platforms, focusing on user experience and performance.",
    },
    {
      point: "Proficiently managing Salesforce CRM for comprehensive lead generation, targeted campaign and event management, and meticulous contact and account management.",
    }
  ];

  const technicalSkills = [
    {
      title: "API & Middleware",
      description: "Designing, integrating, troubleshooting, and meticulously documenting Web APIs and middleware solutions."
    },
    {
      title: "Databases",
      description: "Proficient in MongoDB, SQL Server, and Salesforce SOQL for complex data retrieval, analysis, and robust reporting on leads & campaigns."
    },
    {
      title: "AI-Powered Productivity",
      description: "Strategically implementing Generative AI (ChatGPT, Claude, Bard) for AI-assisted user story writing, AI-driven workflow automation, and sophisticated prompt engineering to boost productivity."
    },
    {
      title: "Cloud Services (Heroku)",
      description: "Managing full lifecycle of Heroku applications including creation, environment variable configuration, proxy app setup, add-on integration (New Relic, Bug Snag, Pingdom), dyno scaling, and continuous performance monitoring."
    },
    {
      title: "AI & Business Intelligence Tools",
      description: "Utilizing Visily.ai for rapid AI-powered mockup creation, and employing EazyBI, Kibana, New Relic, Bug Snag, and Splunk for advanced analytics and system monitoring."
    },
    {
      title: "UI/UX Design Tools",
      description: "Creating intuitive user interfaces and clear process flows using Figma and Lucid Chart."
    },
    {
      title: "Scripting & Development Acumen",
      description: "Skilled in using Postman for API testing, with a strong understanding of Node.js and Bash; capable of reading, analyzing, and debugging code to facilitate technical discussions and solutions."
    }
  ];
  
  const projectManagementSkills = [
    {
      point: "Utilizing Jira, Confluence, Chalk, Asana, and Microsoft Project for effective project planning, execution, and tracking.",
    },
    {
      point: "Employing Atlassian AI for enhanced planning accuracy and data-driven sprint estimation.",
    }
  ];
  
  const softSkills = [
    {
      point: "Exceptional communication, presentation, and problem-solving abilities.",
    },
    {
      point: "Proven stakeholder engagement and cross-functional team collaboration.",
    },
    {
      point: "Mastery of Agile & Scrum methodologies for adaptive and efficient project delivery.",
    },
    {
      point: "Applying AI-driven insights for strategic decision-making and business process improvement.",
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-10 bg-gray-100 text-slate-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 
          className={`text-4xl font-bold text-center mb-16 text-sky-600 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          ref={sectionRef}
        >
          Core Competencies & AI Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Business & System Analysis */}
          <div 
            ref={businessSkillsRef}
            className={`transition-all duration-700 ease-out ${businessSkillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-sky-600">Business & System Analysis (Agile & Technical Focus)</h3>
            <ul className="space-y-6">
              {businessSkills.map((skill, index) => (
                <BulletPoint 
                  key={index}
                  point={skill.point}
                  index={index}
                  inView={businessSkillsInView}
                />
              ))}
            </ul>
          </div>

          {/* Technical & AI Prowess */}
          <div 
            ref={technicalSkillsRef}
            className={`transition-all duration-700 ease-out ${technicalSkillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-sky-600">Technical & AI Prowess</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillCard 
                  key={index}
                  title={skill.title}
                  description={skill.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Project Management & Soft Skills Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Management & Collaboration */}
          <div 
            ref={projectMgmtRef}
            className={`transition-all duration-700 ease-out ${projectMgmtInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-sky-600">Project Management & Collaboration</h3>
            <ul className="space-y-6">
              {projectManagementSkills.map((skill, index) => (
                <BulletPoint 
                  key={index}
                  point={skill.point}
                  index={index}
                  inView={projectMgmtInView}
                />
              ))}
            </ul>
          </div>

          {/* Strategic Soft Skills */}
          <div 
            ref={softSkillsRef}
            className={`transition-all duration-700 ease-out ${softSkillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-sky-600">Strategic Soft Skills</h3>
            <ul className="space-y-6">
              {softSkills.map((skill, index) => (
                <BulletPoint 
                  key={index}
                  point={skill.point}
                  index={index}
                  inView={softSkillsInView}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
