import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface RoadmapMilestone {
  id: string;
  period: string;
  title: string;
  company: string;
  type: 'work' | 'education';
  position: { x: number; y: number };
  color: string;
  icon: string;
  details: {
    achievements: string[];
    technologies: string[];
    impact: string;
  };
}

const Experience: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<string>('current');
  const [pathProgress, setPathProgress] = useState(0);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones: RoadmapMilestone[] = [
    {
      id: 'start',
      period: '2013',
      title: 'Career Journey Begins',
      company: 'Microsoft',
      type: 'work',
      position: { x: 5, y: 85 },
      color: '#8B5CF6',
      icon: '🚀',
      details: {
        achievements: ['Started as Business Analyst', 'Quality Engineering Focus', 'Enterprise Projects'],
        technologies: ['Visual Studio', 'SQL Server', 'Azure DevOps'],
        impact: 'Foundation in enterprise software development'
      }
    },
    {
      id: 'microsoft-growth',
      period: '2013-2018',
      title: 'Business Analyst & QA Expert',
      company: 'Microsoft',
      type: 'work',
      position: { x: 25, y: 65 },
      color: '#8B5CF6',
      icon: '🏢',
      details: {
        achievements: ['Led UAT for enterprise projects', 'Authored detailed user stories', 'Established QA processes'],
        technologies: ['Visual Studio Team Services', 'SQL Server', 'SharePoint'],
        impact: '5+ years of enterprise software expertise'
      }
    },
    {
      id: 'align-transition',
      period: '2018',
      title: 'Transition to Align Technology',
      company: 'Align Technology',
      type: 'work',
      position: { x: 45, y: 45 },
      color: '#10B981',
      icon: '🔄',
      details: {
        achievements: ['Career transition', 'New industry expertise', 'Scrum Master role'],
        technologies: ['Agile methodologies', 'JIRA', 'Confluence'],
        impact: 'Expanded into healthcare technology'
      }
    },
    {
      id: 'scrum-master',
      period: '2018-2021',
      title: 'Technical BA & Scrum Master',
      company: 'Align Technology',
      type: 'work',
      position: { x: 65, y: 25 },
      color: '#10B981',
      icon: '👥',
      details: {
        achievements: ['Led cross-functional teams', 'Designed UI prototypes', 'Managed Heroku applications'],
        technologies: ['Figma', 'Heroku', 'Salesforce CRM', 'New Relic'],
        impact: 'Team leadership and technical implementation'
      }
    },
    {
      id: 'ai-pioneer',
      period: '2021-2024',
      title: 'Sr. Technical Business Analyst',
      company: 'Align Technology',
      type: 'work',
      position: { x: 85, y: 15 },
      color: '#3B82F6',
      icon: '🤖',
      details: {
        achievements: ['Pioneered Generative AI adoption', 'AI-driven sprint planning', 'Multiple Scrum teams'],
        technologies: ['Generative AI', 'Atlassian AI', 'Power Automate'],
        impact: '40% efficiency gain, 25% sprint accuracy improvement'
      }
    },
    {
      id: 'education-start',
      period: '2024',
      title: 'Started M.S. in AI',
      company: 'UT Austin',
      type: 'education',
      position: { x: 75, y: 35 },
      color: '#BF5700',
      icon: '🎓',
      details: {
        achievements: ['Enrolled in top AI program', 'Full-time work + study', 'Advanced coursework'],
        technologies: ['Machine Learning', 'Deep Learning', 'NLP'],
        impact: 'Formal AI education while working full-time'
      }
    },
    {
      id: 'current',
      period: '2024-Present',
      title: 'AI Solution Designer',
      company: 'Align Technology',
      type: 'work',
      position: { x: 95, y: 5 },
      color: '#F59E0B',
      icon: '⭐',
      details: {
        achievements: ['AI Documentation Architect', 'GPT-5 triage system', 'GitHub Copilot integration'],
        technologies: ['Azure OpenAI', 'GPT-4/5', 'GitHub Copilot', 'Amazon Q'],
        impact: '85% documentation time reduction, $200K+ savings'
      }
    }
  ];

  // Generate SVG path through all milestones
  const generatePath = () => {
    const pathData = milestones.map((milestone, index) => {
      const command = index === 0 ? 'M' : 'L';
      return `${command} ${milestone.position.x} ${milestone.position.y}`;
    }).join(' ');
    return pathData;
  };

  useEffect(() => {
    if (sectionInView) {
      const timer = setTimeout(() => {
        setPathProgress(100);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [sectionInView]);

  // Click outside to close popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (roadmapRef.current && !roadmapRef.current.contains(event.target as Node)) {
        setActiveMilestone('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Smart popup positioning with better bottom positioning
  const getPopupPosition = (milestone: RoadmapMilestone) => {
    const { x, y } = milestone.position;
    
    let popupClass = '';
    let transform = '';
    
    if (x < 30) {
      // Left side - popup to the right
      popupClass = 'left-16 top-1/2';
      transform = 'transform -translate-y-1/2';
    } else if (x > 70) {
      // Right side - popup to the left
      popupClass = 'right-16 top-1/2';
      transform = 'transform -translate-y-1/2';
    } else if (y < 30) {
      // Top area - popup below
      popupClass = 'top-16 left-1/2';
      transform = 'transform -translate-x-1/2';
    } else if (y > 60) {
      // Bottom area - popup above with more clearance
      popupClass = 'bottom-20 left-1/2';
      transform = 'transform -translate-x-1/2';
    } else {
      // Center area - popup below
      popupClass = 'top-16 left-1/2';
      transform = 'transform -translate-x-1/2';
    }
    
    return { popupClass, transform };
  };

  const handleMilestoneClick = (milestoneId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveMilestone(activeMilestone === milestoneId ? '' : milestoneId);
  };

  return (
    <section id="experience" className="py-20 px-4 md:px-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Professional journey
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Follow my professional journey through an animated career path. Click on any waypoint to explore details.
          </p>
        </div>

        {/* Interactive Roadmap */}
        <div 
          ref={roadmapRef}
          className="relative h-screen max-h-[700px] bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl p-8 backdrop-blur-sm border border-white/10 overflow-visible mb-8"
        >
          {/* Animated Path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="roadmapGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="25%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="75%" stopColor="#BF5700" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <filter id="roadmapGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d={generatePath()}
              stroke="url(#roadmapGradient)"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="100"
              strokeDashoffset={100 - pathProgress}
              className="transition-all duration-3000 ease-out"
              filter="url(#roadmapGlow)"
            />
          </svg>

          {/* Milestone Waypoints */}
          {milestones.map((milestone, index) => {
            const { popupClass, transform } = getPopupPosition(milestone);
            
            return (
              <div
                key={milestone.id}
                className={`absolute transition-all duration-700 ease-out ${
                  sectionInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                } ${activeMilestone === milestone.id ? 'z-50' : 'z-10'}`}
                style={{ 
                  left: `${milestone.position.x}%`, 
                  top: `${milestone.position.y}%`,
                  transitionDelay: `${sectionInView ? index * 200 : 0}ms`
                }}
              >
                {/* Waypoint Marker */}
                <div 
                  className={`relative cursor-pointer group ${activeMilestone === milestone.id ? 'z-50' : 'z-10'}`}
                  onClick={(e) => handleMilestoneClick(milestone.id, e)}
                >
                  {/* Pulsing Ring for Active Step */}
                  {activeMilestone === milestone.id && (
                    <div 
                      className="absolute inset-0 rounded-full animate-ping opacity-40"
                      style={{ backgroundColor: milestone.color, width: '60px', height: '60px', left: '-24px', top: '-24px' }}
                    ></div>
                  )}
                  
                  {/* Main Waypoint */}
                  <div 
                    className={`w-12 h-12 rounded-full border-4 border-white shadow-2xl transition-all duration-300 flex items-center justify-center text-lg group-hover:scale-125 transform -translate-x-1/2 -translate-y-1/2 ${
                      activeMilestone === milestone.id ? 'scale-150 shadow-3xl' : ''
                    }`}
                    style={{ backgroundColor: milestone.color }}
                  >
                    <span className="text-white">{milestone.icon}</span>
                  </div>

                  {/* Enhanced Year Label with Highlight */}
                  <div 
                    className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-md text-xs font-bold text-white whitespace-nowrap transition-all duration-300 ${
                      activeMilestone === milestone.id 
                        ? 'bg-white text-gray-800 scale-110 shadow-lg' 
                        : 'bg-black/50 backdrop-blur-sm'
                    }`}
                  >
                    {milestone.period}
                  </div>

                  {/* Company Badge */}
                  <div 
                    className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-md text-xs font-semibold text-white whitespace-nowrap transition-all duration-300 ${
                      activeMilestone === milestone.id ? 'scale-110' : ''
                    }`}
                    style={{ backgroundColor: milestone.color }}
                  >
                    {milestone.company}
                  </div>

                  {/* Detailed Info Card with Smart Positioning */}
                  <div 
                    className={`absolute ${popupClass} w-72 bg-white rounded-2xl shadow-2xl border-2 transition-all duration-500 ${transform} ${
                      activeMilestone === milestone.id
                        ? 'opacity-100 visible scale-100' 
                        : 'opacity-0 invisible scale-95'
                    }`}
                    style={{ borderColor: milestone.color }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-5 text-gray-800">
                      {/* Header with Period Highlight */}
                      <div className="text-center mb-4">
                        <div className="flex items-center justify-center mb-2">
                          <span className="text-2xl mr-2">{milestone.icon}</span>
                          <div 
                            className="px-4 py-2 rounded-full text-white font-bold text-sm"
                            style={{ backgroundColor: milestone.color }}
                          >
                            {milestone.period} • {milestone.type === 'education' ? 'Education' : 'Professional'}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold mb-1">{milestone.title}</h3>
                        <p className="text-sky-600 font-semibold text-sm">{milestone.company}</p>
                      </div>

                      {/* Impact */}
                      <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-l-4 border-green-400">
                        <h4 className="font-bold text-green-800 text-xs mb-1">Key Impact</h4>
                        <p className="text-green-700 text-xs">{milestone.details.impact}</p>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-xs flex items-center">
                          <span className="mr-1">🎯</span>Achievements
                        </h4>
                        <ul className="space-y-1">
                          {milestone.details.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-xs text-gray-600 flex items-start">
                              <span className="text-sky-500 mr-1 mt-0.5 flex-shrink-0">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2 text-xs flex items-center">
                          <span className="mr-1">🛠️</span>Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {milestone.details.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Close Button */}
                      <button
                        onClick={() => setActiveMilestone('')}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 text-xs transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Navigation Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {milestones.map((milestone, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeMilestone === milestone.id ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
                onClick={(e) => handleMilestoneClick(milestone.id, e)}
              />
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ease-out delay-2000 ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { label: 'Years of Experience', value: '10+', icon: '📅', color: '#8B5CF6' },
            { label: 'AI Projects Led', value: '25+', icon: '🤖', color: '#3B82F6' },
            { label: 'Teams Managed', value: '15+', icon: '👥', color: '#10B981' }
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
