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
      point: "Translate business needs into clear user stories, functional specs, and process maps.",
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
      point: "Proficiently managing Salesforce CRM for comprehensive lead generation, targeted campaign and event management, and account lifecycle workflows..",
    }
  ];

  const technicalSkills = [
     {
      title: "Web App Development",
      description: "Skilled in end-to-end design, analysis, and optimization of large-scale web applications."
    },
    {
      title: "API & Middleware",
      description: "Design, test, and document APIs with Postman; troubleshoot middleware integrations."
    },
    {
      title: "Databases",
      description: "Advanced in SQL Server, MongoDB, and Salesforce SOQL for data extraction and reporting."
    },
    {
      title: "Generative AI Tools",
      description: "Deep experience using ChatGPT, DeepSeek, Copilot, Gamini, Manus, and Claude for prompt engineering, workflow optimization, and agent creation."
    },
    {
      title: "AI Agent Creation",
      description: "Build AI agents using Microsoft Power Automate and Manus AI for business workflows and support automation."
    },
    {
      title: "Automation Expertise",
      description: "Expert in using Zapier, Power Automate, and JIRA Automation for workflow optimization."
    },
    {
      title: "Cloud Services (Heroku)",
      description: "Managing full lifecycle of Heroku applications including creation, environment variable configuration, proxy app setup, add-on integration (New Relic, Bug Snag, Pingdom), dyno scaling, and continuous performance monitoring."
    },
    {
      title: "CMS Systems",
      description: "Advanced knowledge of Contentful CMS for scalable content management and localization workflows."
    },
    {
      title: "UI/UX Design Tools",
      description: "Creating intuitive user interfaces and clear process flows using Figma and Lucid Chart."
    }
  ];
  
  const projectManagementSkills = [
    {
      point: "Manage Agile delivery using Jira, Asana, Chalk, and Microsoft Project.",
    },
    {
      point: "Design UI/UX wireframes and architecture diagrams using Figma, Lucidchart, Miro, Draw.io and Visily.ai.",
    },
    {
      point: "Collaborate across teams to align business requirements with technical design and product execution.",
    }
  ];
  
  const softSkills = [
    {
      point: "Strong communicator with proven stakeholder engagement across technical and business units.",
    },
    {
      point: "Skilled in delivering presentations, leading workshops, and influencing product strategy.",
    },
    {
      point: "Drive continuous improvement with AI-driven insights and cross-functional collaboration.",
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
            <h3 className="text-2xl font-bold text-center mb-8 text-sky-600">Business Systems Analysis (AI & Agile Focus)</h3>
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
            <h3 className="text-2xl font-bold text-center mb-8 text-sky-600">Technical Proficiency & AI Integration</h3>
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
