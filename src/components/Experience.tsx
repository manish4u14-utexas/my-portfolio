import React from 'react';
import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  company: string;
  location: string;
  type: 'work' | 'education';
  color: string;
  bullets: string[];
  technologies: string[];
}

// Individual card component so useInView is called at top level of a component
const ExperienceCard: React.FC<{ exp: ExperienceItem; index: number }> = ({ exp, index }) => {
  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={cardRef}
      className={`relative pl-12 sm:pl-16 transition-all duration-700 ease-out ${
        cardInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
      style={{ transitionDelay: `${cardInView ? index * 80 : 0}ms` }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-2.5 sm:left-4 top-5 w-3 h-3 rounded-full border-2 border-[#0F172A] shadow-md"
        style={{ backgroundColor: exp.color }}
      />

      {/* Card */}
      <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4 sm:p-5 hover:border-slate-600/60 transition-all duration-300">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
              {exp.title}
            </h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-sky-400 text-sm font-medium">{exp.company}</span>
              <span className="text-gray-600 text-xs hidden sm:inline">•</span>
              <span className="text-gray-500 text-xs hidden sm:inline">{exp.location}</span>
            </div>
          </div>
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white self-start sm:self-auto whitespace-nowrap"
            style={{ backgroundColor: exp.color }}
          >
            {exp.type === 'education' ? '🎓' : '💼'}
            {exp.period}
          </span>
        </div>

        {/* Metric-driven bullets - max 2 */}
        <ul className="space-y-1.5 mb-3">
          {exp.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags - compact */}
        <div className="flex flex-wrap gap-1.5">
          {exp.technologies.map((tech, idx) => (
            <span key={idx} className="tech-pill">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: ExperienceItem[] = [
    {
      id: 'current',
      period: 'Jun 2024 – Present',
      title: 'Product Manager & AI Solution Lead',
      company: 'Align Technology (via TCS)',
      location: 'Morrisville, NC',
      type: 'work',
      color: '#F59E0B',
      bullets: [
        'Architected GenAI workflow on Azure OpenAI → 85% documentation reduction, $200K+ annual savings',
        'Managed cross-functional pods deploying intelligent support triage with GPT APIs & Power Automate',
      ],
      technologies: ['Azure OpenAI', 'Python/Flask', 'JIRA API', 'Cursor', 'Claude'],
    },
    {
      id: 'education-ms',
      period: 'Aug 2024 – Present',
      title: 'M.S. in Artificial Intelligence',
      company: 'University of Texas at Austin',
      location: 'Austin, TX',
      type: 'education',
      color: '#BF5700',
      bullets: [
        'Published research on clinical LLM bias auditing using Explainable AI (XAI) & SHAP',
        'Coursework: Deep Learning, NLP, Agentic AI, AI Governance & Ethics',
      ],
      technologies: ['Deep Learning', 'NLP', 'XAI', 'PyTorch', 'SHAP'],
    },
    {
      id: 'sr-technical-analyst',
      period: 'Dec 2021 – Jun 2024',
      title: 'Sr. Technical Solution Analyst & Product Owner',
      company: 'Align Technology (via TCS)',
      location: 'Morrisville, NC',
      type: 'work',
      color: '#3B82F6',
      bullets: [
        'Achieved 40% reduction in manual documentation via AI-assisted Jira workflows',
        'Implemented New Relic + EazyBI dashboards → 30% increase in sprint visibility for executives',
      ],
      technologies: ['Salesforce CRM', 'New Relic', 'EazyBI', 'JIRA', 'Agile/Scrum'],
    },
    {
      id: 'sr-systems-analyst',
      period: 'Aug 2018 – Dec 2021',
      title: 'Sr. Analyst',
      company: 'Align Technology (via TCS)',
      location: 'Hyderabad, India',
      type: 'work',
      color: '#10B981',
      bullets: [
        'Transformed business requests into technical blueprints ensuring 99.9% uptime across Heroku apps',
        'Designed Figma prototypes & validated complex API integrations with Postman + SQL Server',
      ],
      technologies: ['Figma', 'Postman', 'Heroku', 'SQL Server', 'Scrum Master'],
    },
    {
      id: 'microsoft',
      period: 'Jun 2013 – Aug 2018',
      title: 'Business Analyst & SQA',
      company: 'Microsoft (via TCS)',
      location: 'Hyderabad, India',
      type: 'work',
      color: '#8B5CF6',
      bullets: [
        'Delivered flawless enterprise releases through detailed BRDs, FSDs & UAT processes',
        'Managed SQL Server databases and established QA frameworks across product lines',
      ],
      technologies: ['Business Analysis', 'UAT', 'SQL Server', 'SharePoint', 'Azure DevOps'],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 md:px-10 bg-[#0F172A] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-12 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block px-4 py-1.5 bg-sky-500/10 text-sky-400 rounded-full text-xs font-semibold border border-sky-500/20 mb-4">
            Career Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Professional <span className="text-sky-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-sm">
            13 years of enterprise product delivery — from Microsoft to AI-native products
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-purple-500/30 to-slate-700/20" />

          {/* Experience Items */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-16 max-w-4xl mx-auto" />
    </section>
  );
};

export default Experience;
