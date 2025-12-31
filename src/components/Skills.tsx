import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      id: 'ai-automation',
      title: 'AI & Automation',
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'Generative AI & LLM Architecture (GPT-4/5)',
        'Agentic AI & Prompt Engineering',
        'Power Automate & AI Builder',
        'Workflow Optimization (85% efficiency gains)',
        'Azure OpenAI Integration'
      ]
    },
    {
      id: 'technical',
      title: 'Technical Development',
      icon: '⚡',
      color: 'from-green-500 to-emerald-500',
      skills: [
        'Full-Stack Web Development',
        'API Design & Integration',
        'Python, Flask, SQL',
        'Cloud Services (Heroku)',
        'Database Management'
      ]
    },
    {
      id: 'business',
      title: 'Business Analysis',
      icon: '📊',
      color: 'from-purple-500 to-pink-500',
      skills: [
        'Requirements Engineering',
        'Process Mapping & Optimization',
        'Stakeholder Management',
        'User Story Development',
        'System Analysis'
      ]
    },
    {
      id: 'leadership',
      title: 'Agile Leadership',
      icon: '🎯',
      color: 'from-orange-500 to-red-500',
      skills: [
        'Scrum Master (PSM/PSPO)',
        'Sprint Planning & Execution',
        'Cross-functional Team Leadership',
        'Continuous Improvement',
        'Strategic Planning'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-10 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl font-bold text-sky-600 mb-4">
            Core Competencies & Expertise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transforming business challenges into AI-powered solutions through technical excellence and strategic leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={`group cursor-pointer transition-all duration-500 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${sectionInView ? index * 150 : 0}ms` }}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
            >
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${category.color} p-1 hover:scale-105 transition-transform duration-300`}>
                <div className="bg-white rounded-xl p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{category.icon}</span>
                      <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                    </div>
                    <div className={`transform transition-transform duration-300 ${activeCategory === category.id ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeCategory === category.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                          <span className="text-gray-700 text-sm font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {activeCategory !== category.id && (
                    <p className="text-gray-500 text-sm mt-2">Click to explore skills</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
