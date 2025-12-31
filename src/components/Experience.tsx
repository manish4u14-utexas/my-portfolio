import React, { useState, useEffect } from 'react';
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
  position: { x: number; y: number };
}

const Experience: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<string | null>(null);
  const [pathProgress, setPathProgress] = useState(0);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones: MilestoneData[] = [
    {
      id: 'foundation',
      period: '2013 – 2018',
      title: 'Business Analyst & Quality Engineering',
      company: 'Microsoft',
      visualMetric: '5+ Years Experience',
      color: '#8B5CF6',
      position: { x: 10, y: 20 },
      highlights: [
        'Defined functional specifications and performed User Acceptance Testing (UAT) for large-scale enterprise projects',
        'Authored detailed user stories and acceptance criteria, ensuring alignment between business needs and technical execution',
        'Gathered and documented functional requirements for global enterprise software systems'
      ]
    },
    {
      id: 'leadership',
      period: '2018 – 2021',
      title: 'Technical Business Analyst & Scrum Master',
      company: 'Align Technology',
      visualMetric: '3.5 Years Experience',
      color: '#10B981',
      position: { x: 70, y: 35 },
      highlights: [
        'Directed technical implementation efforts for web applications serving both consumer and provider portals',
        'Designed interactive wireframes and UI prototypes in Figma to streamline front-end application development',
        'Managed Heroku application lifecycles, including uptime monitoring and performance optimization via New Relic',
        'Led Agile workflows and implemented JIRA automation to drive team efficiency and velocity'
      ]
    },
    {
      id: 'ai-transition',
      period: '2021 – 2024',
      title: 'Sr. Technical Business Solution Analyst',
      company: 'Align Technology',
      visualMetric: '2.5 Years Experience',
      color: '#3B82F6',
      position: { x: 25, y: 65 },
      highlights: [
        'Pioneered the adoption of Generative AI for requirements and documentation, reducing manual effort by 40%',
        'Improved sprint accuracy by 25% by implementing AI-driven planning and backlog prioritization',
        'Managed multiple Scrum teams and utilized AI-assisted retrospectives to optimize performance',
        'Automated web application monitoring and reporting, increasing sprint visibility across the organization by 30%'
      ]
    },
    {
      id: 'ai-pinnacle',
      period: '2024 – Present',
      title: 'AI Solution Designer & Automation Expert',
      company: 'Align Technology',
      visualMetric: 'Current AI Focus',
      color: '#F59E0B',
      position: { x: 80, y: 80 },
      specialAchievement: {
        title: 'AI Documentation Architect',
        impact: '85% reduction in documentation time and $200,000+ annual cost savings'
      },
      highlights: [
        'Built a web application leveraging Azure OpenAI to automate user story and test case generation from raw requirements',
        'Engineered a GPT-5 triage system via Power Automate to classify and manage support tickets in real-time',
        'Integrated GitHub Copilot and Amazon Q into daily coding workflows to optimize developer productivity',
        'Strategic Growth: Leading AI transformation initiatives across enterprise workflows'
      ]
    }
  ];

  useEffect(() => {
    if (sectionInView) {
      const timer = setTimeout(() => {
        setPathProgress(100);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [sectionInView]);

  const pathData = `M ${milestones[0].position.x} ${milestones[0].position.y} 
                   Q 40 10 ${milestones[1].position.x} ${milestones[1].position.y} 
                   Q 90 50 ${milestones[2].position.x} ${milestones[2].position.y} 
                   Q 10 80 ${milestones[3].position.x} ${milestones[3].position.y}`;

  return (
    <section id="experience" className="py-20 px-4 md:px-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Career Evolution & AI Mastery
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Follow the interactive journey through my professional milestones and AI transformation
          </p>
        </div>

        {/* Interactive Snake Path */}
        <div className="relative h-screen max-h-[800px] mb-16">
          {/* Animated Snake Path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="33%" stopColor="#10B981" />
                <stop offset="66%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d={pathData}
              stroke="url(#snakeGradient)"
              strokeWidth="0.8"
              fill="none"
              strokeDasharray="200"
              strokeDashoffset={200 - (pathProgress * 2)}
              className="transition-all duration-4000 ease-out"
              filter="url(#glow)"
            />
          </svg>

          {/* Milestone Nodes */}
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${
                sectionInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{ 
                left: `${milestone.position.x}%`, 
                top: `${milestone.position.y}%`,
                transitionDelay: `${sectionInView ? (index + 1) * 600 : 0}ms`
              }}
            >
              {/* Milestone Marker */}
              <div 
                className={`relative cursor-pointer group ${activeMilestone === milestone.id ? 'z-50' : 'z-10'}`}
                onClick={() => setActiveMilestone(activeMilestone === milestone.id ? null : milestone.id)}
              >
                {/* Pulsing Ring */}
                <div 
                  className="absolute inset-0 rounded-full animate-ping opacity-30"
                  style={{ backgroundColor: milestone.color }}
                ></div>
                
                {/* Main Node */}
                <div 
                  className={`w-16 h-16 rounded-full border-4 border-white shadow-2xl transition-all duration-300 flex items-center justify-center text-white font-bold text-lg group-hover:scale-125 ${
                    activeMilestone === milestone.id ? 'scale-150 shadow-3xl' : ''
                  }`}
                  style={{ backgroundColor: milestone.color }}
                >
                  {index + 1}
                </div>

                {/* Year Badge */}
                <div 
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold text-white whitespace-nowrap"
                  style={{ backgroundColor: milestone.color }}
                >
                  {milestone.period}
                </div>

                {/* Expandable Detail Card */}
                <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-80 bg-white rounded-2xl shadow-2xl border-2 transition-all duration-500 ${
                  activeMilestone === milestone.id 
                    ? 'opacity-100 visible translate-y-0 scale-100' 
                    : 'opacity-0 invisible translate-y-4 scale-95'
                }`}
                style={{ borderColor: milestone.color }}
                >
                  <div className="p-6 text-gray-800">
                    {/* Header */}
                    <div className="text-center mb-4">
                      <div 
                        className="inline-block px-4 py-2 rounded-full text-white font-semibold text-sm mb-3"
                        style={{ backgroundColor: milestone.color }}
                      >
                        {milestone.visualMetric}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{milestone.title}</h3>
                      <p className="text-sky-600 font-semibold">{milestone.company}</p>
                    </div>

                    {/* Special Achievement (for current role) */}
                    {milestone.specialAchievement && (
                      <div className="mb-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-400">
                        <h4 className="font-bold text-yellow-800 text-sm">{milestone.specialAchievement.title}</h4>
                        <p className="text-yellow-700 text-xs mt-1">{milestone.specialAchievement.impact}</p>
                      </div>
                    )}

                    {/* What I Built */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center text-gray-800">
                        <span className="mr-2">🚀</span>What I Built
                      </h4>
                      <ul className="space-y-2">
                        {milestone.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-sky-500 mr-2 mt-1 flex-shrink-0">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow pointing to node */}
                    <div 
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45 border-l-2 border-t-2"
                      style={{ 
                        backgroundColor: 'white',
                        borderColor: milestone.color
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Always Visible Footer Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ease-out delay-2000 ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { label: 'Years of Professional Experience', value: '10+', icon: '📅', color: '#8B5CF6' },
            { label: 'AI Projects Led & Architected', value: '25+', icon: '🤖', color: '#3B82F6' },
            { label: 'Teams Managed via Agile/Scrum', value: '15+', icon: '👥', color: '#10B981' }
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <span className="text-4xl mb-3 block">{stat.icon}</span>
              <div className="text-3xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
