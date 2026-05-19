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
      id: 'generative-ai',
      title: 'Generative AI & ML Architecture',
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'Azure OpenAI (GPT-4 / GPT-4o)',
        'Agentic AI & Prompt Engineering',
        'Retrieval-Augmented Generation (RAG)',
        'Explainable AI (XAI) & Model Auditing',
        'AI-Native IDEs (Cursor, Claude Code)',
        'NLP & Large-Scale Data Synthesis',
        'LLM Evaluation & Solution Validation',
        'Google AI Pro & BigQuery'
      ]
    },
    {
      id: 'product-strategy',
      title: 'Product Strategy & Agile Leadership',
      icon: '📊',
      color: 'from-purple-500 to-pink-500',
      skills: [
        'Product Vision & Roadmapping',
        'Expert Agile & Scrum Leadership (13 Years)',
        'Requirements Gathering (PRDs & Functional Specs)',
        'User Stories, Backlog Grooming & UAT',
        'Cross-Functional Engineering Pod Management',
        'Data-Driven Prioritization (Value vs. Complexity)',
        'Stakeholder Management & Alignment',
        'Atlassian AI (Sprint Planning & Estimation)'
      ]
    },
    {
      id: 'automation-apis',
      title: 'Enterprise Automation & APIs',
      icon: '⚡',
      color: 'from-green-500 to-emerald-500',
      skills: [
        'API Strategy & Design (REST, Postman)',
        'Python & Flask Backend Integrations',
        'Power Automate, Power Apps & Dataverse',
        'AI Builder & Custom Prompts',
        'Salesforce CRM Optimization',
        'Automated BI Reporting (Power BI, EazyBI)',
        'Jira Automation & Workflow Orchestration',
        'Cloud Infrastructure Concepts (Azure / Heroku)'
      ]
    },
    {
      id: 'ux-observability',
      title: 'UX Prototyping & Observability',
      icon: '🛠️',
      color: 'from-orange-500 to-red-500',
      skills: [
        'Rapid UI Prototyping (Figma, Stitch)',
        'Interactive Wireframing & User Journeys',
        'Technical Feasibility Validation',
        'System Observability (New Relic, Splunk)',
        'Product Analytics & Dashboards (Kibana)',
        'Performance & Error Monitoring (Bugsnag)',
        'VS Code & GitHub Copilot',
        'Asana & Jira Confluence Suite'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-10 bg-gradient-to-br from-gray-100 via-slate-100 to-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl font-bold text-sky-600 mb-4">
            Core Competencies & Expertise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Click on each category to explore detailed technical capabilities and AI-powered solutions
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${category.color} p-1 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl`}>
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
                    <p className="text-gray-500 text-sm mt-2">Click to explore {category.skills.length} specialized skills</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-12 text-center transition-all duration-700 ease-out delay-1000 ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">🎯 Specialized Focus Areas</h4>
            <p className="text-gray-600 text-sm">
              <strong>Workflow Optimization:</strong> 85% documentation efficiency gains • 
              <strong> AI Product Strategy:</strong> Enterprise-scale Generative AI architectures • 
              <strong> Leadership:</strong> 13 years Agile product delivery & cross-functional execution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
