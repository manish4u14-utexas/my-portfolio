import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface CircularSkillProps {
  title: string;
  percentage: number;
  color: string;
  icon: string;
  skills: string[];
  index: number;
  inView: boolean;
}

const CircularSkill: React.FC<CircularSkillProps> = ({ 
  title, 
  percentage, 
  color, 
  icon, 
  skills, 
  index, 
  inView 
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedPercentage(percentage);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [inView, percentage, index]);

  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div 
      className={`relative group cursor-pointer transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${inView ? index * 150 : 0}ms` }}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      {/* Circular Progress Ring */}
      <div className="relative w-32 h-32 mx-auto mb-4">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-200"
          />
          {/* Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        
        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl mb-1">{icon}</span>
          <span className="text-lg font-bold text-gray-700">
            {animatedPercentage}%
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-center text-gray-800 mb-2 group-hover:text-sky-600 transition-colors">
        {title}
      </h3>

      {/* Hover Details Card */}
      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-10 transition-all duration-300 ${
        showDetails ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
      }`}>
        <div className="space-y-2">
          {skills.map((skill, skillIndex) => (
            <div key={skillIndex} className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></div>
              <span className="text-sm text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
        {/* Arrow */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <div className="w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillsData = [
    {
      title: 'AI & Automation',
      percentage: 95,
      color: '#3B82F6',
      icon: '🤖',
      skills: [
        'Generative AI & LLM Architecture',
        'Agentic AI & Prompt Engineering',
        'Power Automate & AI Builder',
        'Workflow Optimization (85% gains)',
        'Azure OpenAI Integration'
      ]
    },
    {
      title: 'Technical Development',
      percentage: 90,
      color: '#10B981',
      icon: '⚡',
      skills: [
        'Full-Stack Web Development',
        'API Design & Integration',
        'Python, Flask, SQL',
        'Cloud Services (Heroku)',
        'Database Management'
      ]
    },
    {
      title: 'Business Analysis',
      percentage: 92,
      color: '#8B5CF6',
      icon: '📊',
      skills: [
        'Requirements Engineering',
        'Process Mapping & Optimization',
        'Stakeholder Management',
        'User Story Development',
        'System Analysis'
      ]
    },
    {
      title: 'Agile Leadership',
      percentage: 88,
      color: '#F59E0B',
      icon: '🎯',
      skills: [
        'Scrum Master (PSM/PSPO)',
        'Sprint Planning & Execution',
        'Cross-functional Team Leadership',
        'Continuous Improvement',
        'Strategic Planning'
      ]
    },
    {
      title: 'Data & Analytics',
      percentage: 85,
      color: '#EF4444',
      icon: '📈',
      skills: [
        'Data Analysis & Visualization',
        'SQL Server & MongoDB',
        'Salesforce SOQL',
        'Performance Monitoring',
        'KPI Development'
      ]
    },
    {
      title: 'Communication',
      percentage: 93,
      color: '#06B6D4',
      icon: '💬',
      skills: [
        'Executive Presentations',
        'Stakeholder Workshops',
        'Cross-functional Collaboration',
        'Technical Documentation',
        'Change Management'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-10 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-sky-600 mb-4">
            Core Competencies & Expertise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hover over each skill to see detailed capabilities and achievements
          </p>
        </div>

        <div 
          ref={skillsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative"
        >
          {skillsData.map((skill, index) => (
            <CircularSkill
              key={index}
              title={skill.title}
              percentage={skill.percentage}
              color={skill.color}
              icon={skill.icon}
              skills={skill.skills}
              index={index}
              inView={skillsInView}
            />
          ))}
        </div>

        {/* Legend */}
        <div className={`mt-16 text-center transition-all duration-700 ease-out delay-1000 ${
          skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-500 text-sm">
            Percentages represent proficiency levels based on years of experience and project impact
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
