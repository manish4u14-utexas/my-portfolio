import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface MilestoneData {
  id: string;
  period: string;
  title: string;
  company: string;
  visualMetric: string;
  highlights: string[];
  specialAchievement?: {
    title: string;
    impact: string;
  };
  color: string;
  companyLogo: string;
}

const Experience: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<string | null>(null);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones: MilestoneData[] = [
    {
      id: 'ai-pinnacle',
      period: '2024 – Present',
      title: 'AI Solution Designer & Automation Expert',
      company: 'Align Technology',
      visualMetric: 'Current AI Focus',
      color: '#F59E0B',
      companyLogo: '🏢',
      specialAchievement: {
        title: 'AI Documentation Architect',
        impact: '85% reduction in documentation time and $200,000+ annual cost savings'
      },
      highlights: [
        'Built a web application leveraging Azure OpenAI to automate user story and test case generation',
        'Engineered a GPT-5 triage system via Power Automate for real-time support ticket management',
        'Integrated GitHub Copilot and Amazon Q into daily coding workflows',
        'Leading AI transformation initiatives across enterprise workflows'
      ]
    },
    {
      id: 'ms-ai-education',
      period: '2023 – Present',
      title: 'M.S. in Artificial Intelligence (In Progress)',
      company: 'University of Texas at Austin',
      visualMetric: 'Academic Excellence',
      color: '#BF5700',
      companyLogo: '🎓',
      specialAchievement: {
        title: 'Full-Time Professional + Full-Time Student',
        impact: 'Balancing demanding career while pursuing advanced AI degree'
      },
      highlights: [
        'Pursuing advanced coursework in Machine Learning, Deep Learning, and NLP',
        'Applying academic AI concepts directly to professional projects',
        'Conducting research in LLM applications for enterprise automation',
        'Maintaining full-time professional responsibilities while excelling academically'
      ]
    },
    {
      id: 'ai-transition',
      period: '2021 – 2024',
      title: 'Sr. Technical Business Solution Analyst',
      company: 'Align Technology',
      visualMetric: '2.5 Years Experience',
      color: '#3B82F6',
      companyLogo: '🏢',
      highlights: [
        'Pioneered Generative AI adoption for requirements and documentation (40% efficiency gain)',
        'Improved sprint accuracy by 25% through AI-driven planning and backlog prioritization',
        'Managed multiple Scrum teams with AI-assisted retrospectives',
        'Automated web application monitoring, increasing sprint visibility by 30%'
      ]
    },
    {
      id: 'leadership',
      period: '2018 – 2021',
      title: 'Technical Business Analyst & Scrum Master',
      company: 'Align Technology',
      visualMetric: '3.5 Years Experience',
      color: '#10B981',
      companyLogo: '🏢',
      highlights: [
        'Directed technical implementation for consumer and provider web applications',
        'Designed interactive wireframes and UI prototypes in Figma',
        'Managed Heroku application lifecycles with performance optimization',
        'Led Agile workflows and implemented JIRA automation'
      ]
    },
    {
      id: 'foundation',
      period: '2013 – 2018',
      title: 'Business Analyst & Quality Engineering',
      company: 'Microsoft',
      visualMetric: '5+ Years Experience',
      color: '#8B5CF6',
      companyLogo: '🏢',
      highlights: [
        'Defined functional specifications and performed UAT for enterprise projects',
        'Authored detailed user stories and acceptance criteria',
        'Gathered and documented functional requirements for global software systems',
        'Established quality assurance processes and testing frameworks'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-10 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl font-bold text-sky-600 mb-4">
            Professional Journey & AI Evolution
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Click on any milestone to explore detailed achievements and impact
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-orange-500 via-blue-500 via-green-500 to-purple-500 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className={`relative transition-all duration-700 ease-out ${
                  sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${sectionInView ? index * 200 : 0}ms` }}
              >
                {/* Timeline Node */}
                <div 
                  className="absolute left-6 w-6 h-6 rounded-full border-4 border-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-125"
                  style={{ backgroundColor: milestone.color }}
                  onClick={() => setActiveMilestone(activeMilestone === milestone.id ? null : milestone.id)}
                ></div>

                {/* Content Card */}
                <div className="ml-20">
                  <div 
                    className={`bg-white rounded-2xl shadow-lg border-l-4 p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                      activeMilestone === milestone.id ? 'shadow-2xl scale-[1.02]' : ''
                    }`}
                    style={{ borderLeftColor: milestone.color }}
                    onClick={() => setActiveMilestone(activeMilestone === milestone.id ? null : milestone.id)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{milestone.companyLogo}</span>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                          <p className="text-sky-600 font-semibold">{milestone.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div 
                          className="px-3 py-1 rounded-full text-xs font-semibold text-white mb-1"
                          style={{ backgroundColor: milestone.color }}
                        >
                          {milestone.period}
                        </div>
                        <p className="text-gray-500 text-sm">{milestone.visualMetric}</p>
                      </div>
                    </div>

                    {/* Special Achievement Badge */}
                    {milestone.specialAchievement && (
                      <div className="mb-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-400">
                        <div className="flex items-center mb-1">
                          <span className="text-yellow-600 mr-2">🏆</span>
                          <h4 className="font-bold text-yellow-800 text-sm">{milestone.specialAchievement.title}</h4>
                        </div>
                        <p className="text-yellow-700 text-xs">{milestone.specialAchievement.impact}</p>
                      </div>
                    )}

                    {/* Expandable Content */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeMilestone === milestone.id ? 'max-h-96 opacity-100' : 'max-h-20 opacity-70'
                    }`}>
                      <div className="space-y-2">
                        {milestone.highlights.slice(0, activeMilestone === milestone.id ? undefined : 2).map((highlight, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <span className="text-sky-500 mt-1 flex-shrink-0">•</span>
                            <p className="text-gray-600 text-sm">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expand/Collapse Indicator */}
                    <div className="mt-4 text-center">
                      <button 
                        className="text-sky-600 text-xs font-medium hover:text-sky-700 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMilestone(activeMilestone === milestone.id ? null : milestone.id);
                        }}
                      >
                        {activeMilestone === milestone.id ? 'Show Less ↑' : 'Show More ↓'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Stats - Properly Spaced */}
        <div className={`mt-20 pt-16 border-t border-gray-200 transition-all duration-700 ease-out delay-1000 ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Career Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Years of Professional Experience', value: '10+', icon: '📅', color: '#8B5CF6' },
              { label: 'AI Projects Led & Architected', value: '25+', icon: '🤖', color: '#3B82F6' },
              { label: 'Teams Managed via Agile/Scrum', value: '15+', icon: '👥', color: '#10B981' }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:scale-105">
                <span className="text-3xl mb-3 block">{stat.icon}</span>
                <div className="text-2xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
