import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface EducationData {
  id: string;
  degree: string;
  institution: string;
  dates: string;
  year: number;
  status: 'completed' | 'current' | 'upcoming';
  icon: string;
  color: string;
  details: string[];
  achievements: string[];
}

const Education: React.FC = () => {
  const [activeEducation, setActiveEducation] = useState<string>('');
  const [progressWidth, setProgressWidth] = useState(0);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData: EducationData[] = [
    {
      id: 'ms-ai',
      degree: 'Master of Science in Artificial Intelligence',
      institution: 'University of Texas at Austin',
      dates: 'Pursuing, Expected July 2026',
      year: 2026,
      status: 'current',
      icon: '🎓',
      color: '#3B82F6',
      details: [
        'Focus: LLMs, Agentic AI, Deep Learning',
        'Coursework: Machine Learning, Neural Networks, NLP',
        'Research: Hindi Fake News Detection using LSTM'
      ],
      achievements: [
        'Maintaining academic excellence while working full-time',
        'Applied AI research in real-world enterprise solutions',
        'Published research achieving 83% accuracy in fake news detection'
      ]
    },
    {
      id: 'be-cs',
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'SLIET, Longowal, Sangrur, Punjab',
      dates: '2012',
      year: 2012,
      status: 'completed',
      icon: '💻',
      color: '#10B981',
      details: [
        'Comprehensive computer science foundation',
        'Software engineering principles',
        'Data structures and algorithms'
      ],
      achievements: [
        'Strong foundation in programming and system design',
        'Developed early interest in automation and efficiency',
        'Leadership roles in technical projects'
      ]
    },
    {
      id: 'diploma-cs',
      degree: 'Diploma in Computer Science',
      institution: 'SLIET, Longowal, Sangrur, Punjab',
      dates: '2009',
      year: 2009,
      status: 'completed',
      icon: '📚',
      color: '#8B5CF6',
      details: [
        'Technical foundation in computer science',
        'Programming fundamentals',
        'System administration basics'
      ],
      achievements: [
        'First exposure to programming and technology',
        'Built strong analytical and problem-solving skills',
        'Established passion for technology innovation'
      ]
    }
  ];

  useEffect(() => {
    if (sectionInView) {
      const timer = setTimeout(() => setProgressWidth(100), 500);
      return () => clearTimeout(timer);
    }
  }, [sectionInView]);

  return (
    <section id="education" className="py-20 px-4 md:px-10 bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-800 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 
          ref={sectionRef}
          className={`text-4xl font-bold text-center mb-16 text-sky-400 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Educational Journey
        </h2>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-600 rounded-full">
            <div 
              className="bg-gradient-to-b from-sky-400 to-blue-500 w-full rounded-full transition-all duration-2000 ease-out"
              style={{ height: sectionInView ? `${progressWidth}%` : '0%' }}
            />
          </div>

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative pl-20 transition-all duration-700 ease-out cursor-pointer group ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${sectionInView ? index * 300 : 0}ms` }}
                onClick={() => setActiveEducation(activeEducation === edu.id ? '' : edu.id)}
              >
                {/* Timeline Dot */}
                <div 
                  className={`absolute left-6 w-6 h-6 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-sm transition-all duration-300 group-hover:scale-125 ${activeEducation === edu.id ? 'scale-150 shadow-xl' : ''}`}
                  style={{ backgroundColor: edu.color }}
                >
                  <span className="text-white text-xs">{edu.icon}</span>
                </div>

                {/* Year Badge */}
                <div 
                  className={`absolute left-0 top-8 px-2 py-1 rounded-md text-xs font-bold text-white transition-all duration-300 ${activeEducation === edu.id ? 'scale-110' : ''}`}
                  style={{ backgroundColor: edu.color }}
                >
                  {edu.year}
                </div>

                {/* Content Card */}
                <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${activeEducation === edu.id ? 'bg-white/20 border-white/60' : ''}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-sky-300 font-semibold">{edu.institution}</p>
                      <p className="text-gray-300 text-sm">{edu.dates}</p>
                    </div>
                    <div className={`transform transition-transform duration-300 ${activeEducation === edu.id ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    edu.status === 'current' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                    edu.status === 'completed' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                    'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                  }`}>
                    {edu.status === 'current' ? '🔄 In Progress' : edu.status === 'completed' ? '✅ Completed' : '⏳ Upcoming'}
                  </div>

                  {/* Expandable Details */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeEducation === edu.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-white/20 space-y-4">
                      <div>
                        <h4 className="font-semibold text-sky-300 mb-2 flex items-center">
                          <span className="mr-2">📋</span>Focus Areas
                        </h4>
                        <ul className="space-y-1">
                          {edu.details.map((detail, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-start">
                              <span className="text-sky-400 mr-2 mt-1 flex-shrink-0">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sky-300 mb-2 flex items-center">
                          <span className="mr-2">🏆</span>Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-start">
                              <span className="text-green-400 mr-2 mt-1 flex-shrink-0">✦</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

