import React from 'react';
import { useInView } from 'react-intersection-observer';

interface SkillGroup {
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillGroups: SkillGroup[] = [
    {
      title: 'Generative AI & ML',
      icon: '🤖',
      color: '#3B82F6',
      skills: ['Azure OpenAI (GPT-4/5)', 'Agentic AI', 'Prompt Engineering', 'RAG Architecture', 'Explainable AI (XAI)', 'LLM Evaluation'],
    },
    {
      title: 'Product & Agile',
      icon: '📊',
      color: '#8B5CF6',
      skills: ['Product Roadmapping', 'Agile/Scrum (13 yrs)', 'PRDs & Specs', 'Backlog Prioritization', 'Cross-Functional Pods', 'Stakeholder Alignment'],
    },
    {
      title: 'Automation & APIs',
      icon: '⚡',
      color: '#10B981',
      skills: ['Python & Flask', 'REST APIs / Postman', 'Power Automate', 'JIRA Automation', 'AI Builder', 'Salesforce CRM'],
    },
    {
      title: 'Prototyping & Observability',
      icon: '🛠️',
      color: '#F59E0B',
      skills: ['Cursor / Claude / Stitch', 'Figma & Wireframes', 'New Relic / Splunk', 'Power BI / Kibana', 'GitHub Copilot', 'Cloud (Azure / Heroku)'],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 md:px-10 bg-[#0F172A] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-10 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block px-4 py-1.5 bg-sky-500/10 text-sky-400 rounded-full text-xs font-semibold border border-sky-500/20 mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Core <span className="text-sky-400">Competencies</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Where product thinking meets technical execution
          </p>
        </div>

        {/* Skills Grid - 4 compact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={`bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 transition-all duration-500 ease-out hover:border-slate-600/70 card-hover ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${sectionInView ? index * 100 : 0}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                  style={{ backgroundColor: `${group.color}15` }}
                >
                  {group.icon}
                </div>
                <h3 className="text-base font-bold text-white">{group.title}</h3>
              </div>

              {/* Skill pills in a flowing grid */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-slate-700/60 border border-slate-600/40 text-gray-300 text-xs rounded-lg font-medium hover:bg-slate-700 hover:text-white hover:border-slate-500 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools strip - single row of logos/names */}
        <div className={`mt-8 transition-all duration-700 ease-out delay-500 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-3">Daily Tools</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Azure OpenAI', 'Cursor IDE', 'Claude', 'JIRA', 'Confluence', 'Figma', 'Python', 'VS Code', 'Power Automate', 'Postman'].map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-slate-800/60 border border-slate-700/40 text-gray-500 text-xs rounded-full hover:text-sky-400 hover:border-sky-500/30 transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-16 max-w-4xl mx-auto" />
    </section>
  );
};

export default Skills;
