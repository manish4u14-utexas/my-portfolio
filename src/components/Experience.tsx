import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface ExperienceData {
  id: string;
  title: string;
  company: string;
  location: string;
  dates: string;
  duration: string;
  highlights: string[];
  technologies: string[];
  achievements: string[];
  companyLogo?: string;
  color: string;
}

const Experience: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState<string | null>(null);
  const [pathProgress, setPathProgress] = useState(0);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: ExperienceData[] = [
    {
      id: 'align-sr',
      title: 'Sr. Business Analyst - AI & Web Platform',
      company: 'Align Technology',
      location: 'Morrisville, NC',
      dates: 'December 2021 – Present',
      duration: '3+ Years',
      color: '#3B82F6',
      highlights: [
        'Pioneered Generative AI for requirement gathering (40% efficiency gain)',
        'Led AI-powered sprint planning with 25% accuracy improvement',
        'Deployed Heroku applications with performance optimization'
      ],
      technologies: ['Generative AI', 'Power Automate', 'Heroku', 'Salesforce'],
      achievements: ['85% Documentation Automation', '$200K+ Cost Savings', '30% Sprint Velocity Increase']
    },
    {
      id: 'align-scrum',
      title: 'Sr. Business Analyst & Scrum Master',
      company: 'Align Technology',
      location: 'Hyderabad, IN',
      dates: 'August 2018 – December 2021',
      duration: '3.5 Years',
      color: '#10B981',
      highlights: [
        'Led cross-functional teams for web application enhancement',
        'Designed interactive wireframes and UI prototypes in Figma',
        'Managed Salesforce CRM for comprehensive lead management'
      ],
      technologies: ['Salesforce CRM', 'Figma', 'Jira', 'Heroku'],
      achievements: ['Multi-team Leadership', 'UI/UX Innovation', 'CRM Optimization']
    },
    {
      id: 'microsoft',
      title: 'Business Analyst/SQA',
      company: 'Microsoft',
      location: 'Hyderabad, IN',
      dates: 'June 2013 – August 2018',
      duration: '5+ Years',
      color: '#8B5CF6',
      highlights: [
        'Collaborated with stakeholders for requirement gathering',
        'Developed comprehensive project documentation',
        'Led UAT phases with high success rates'
      ],
      technologies: ['Visual Studio', 'SQL Server', 'Azure DevOps'],
      achievements: ['Quality Assurance Excellence', 'Stakeholder Management', 'Process Documentation']
    }
  ];

  useEffect(() => {
    if (sectionInView) {
      const timer = setTimeout(() => {
        setPathProgress(100);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [sectionInView]);

  return (
    <section id="experience" className="py-20 px-4 md:px-10 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl font-bold text-sky-600 mb-4">
            Professional Journey & AI Evolution
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Click on any milestone to explore detailed achievements and technological evolution
          </p>
        </div>

        {/* Interactive Journey Map */}
        <div className="relative">
          {/* Animated Path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ height: '800px' }}>
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <path
              d="M 100 100 Q 300 200 500 150 T 900 250 Q 1100 300 800 450 T 400 600"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              fill="none"
              strokeDasharray="2000"
              strokeDashoffset={2000 - (pathProgress * 20)}
              className="transition-all duration-3000 ease-out"
            />
          </svg>

          {/* Experience Milestones */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative transition-all duration-500 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${sectionInView ? index * 300 : 0}ms` }}
              >
                {/* Milestone Marker */}
                <div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
                  onClick={() => setActiveExperience(activeExperience === exp.id ? null : exp.id)}
                >
                  <div 
                    className={`w-12 h-12 rounded-full border-4 border-white shadow-lg transition-all duration-300 hover:scale-110 ${
                      activeExperience === exp.id ? 'scale-125' : ''
                    }`}
                    style={{ backgroundColor: exp.color }}
                  >
                    <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Experience Card */}
                <div 
                  className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-500 cursor-pointer hover:shadow-xl ${
                    activeExperience === exp.id 
                      ? 'border-opacity-100 scale-105 shadow-2xl' 
                      : 'border-gray-200 hover:border-opacity-50'
                  }`}
                  style={{ 
                    borderColor: activeExperience === exp.id ? exp.color : undefined,
                    marginTop: '2rem'
                  }}
                  onClick={() => setActiveExperience(activeExperience === exp.id ? null : exp.id)}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="text-center mb-4">
                      <div 
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-2"
                        style={{ backgroundColor: exp.color }}
                      >
                        {exp.duration}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{exp.title}</h3>
                      <p className="text-sky-600 font-semibold">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.location} • {exp.dates}</p>
                    </div>

                    {/* Expandable Content */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeExperience === exp.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="space-y-4 pt-4 border-t border-gray-100">
                        {/* Key Highlights */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                            <span className="mr-2">🎯</span>Key Highlights
                          </h4>
                          <ul className="space-y-1">
                            {exp.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <span className="text-sky-500 mr-2 mt-1">•</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                            <span className="mr-2">🛠️</span>Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                            <span className="mr-2">🏆</span>Key Achievements
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {exp.achievements.map((achievement, idx) => (
                              <div 
                                key={idx}
                                className="bg-gradient-to-r from-green-50 to-blue-50 p-2 rounded-lg border-l-3"
                                style={{ borderLeftColor: exp.color }}
                              >
                                <span className="text-sm font-medium text-gray-700">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Click Indicator */}
                    {activeExperience !== exp.id && (
                      <div className="text-center mt-4">
                        <span className="text-gray-400 text-xs">Click to explore details</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ease-out delay-1000 ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { label: 'Years of Experience', value: '10+', icon: '📅' },
            { label: 'AI Projects Led', value: '25+', icon: '🤖' },
            { label: 'Teams Managed', value: '15+', icon: '👥' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
              <span className="text-3xl mb-2 block">{stat.icon}</span>
              <div className="text-2xl font-bold text-sky-600">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
