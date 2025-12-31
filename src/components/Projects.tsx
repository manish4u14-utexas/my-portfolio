import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  color: string;
  impact: string;
  metrics: string;
  category: 'ai' | 'automation' | 'crm' | 'analytics';
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: ProjectData[] = [
    {
      id: 'ai-docs',
      title: 'Generative AI for Documentation Automation',
      description: 'Pioneered the use of Generative AI for requirement gathering, user story creation, and documentation, achieving a 40% reduction in manual effort and accelerating project timelines.',
      technologies: ['Azure OpenAI', 'GPT-4', 'Flask', 'Python', 'Prompt Engineering'],
      icon: '🤖',
      color: '#3B82F6',
      impact: 'Reduced documentation time by 85% (7 hours to 1 hour)',
      metrics: '$200K+ annual cost savings',
      category: 'ai'
    },
    {
      id: 'sprint-ai',
      title: 'AI-Driven Agile Sprint Optimization',
      description: 'Implemented AI-driven sprint planning and estimation using Atlassian AI, resulting in a 25% improvement in sprint accuracy and more effective backlog prioritization.',
      technologies: ['Atlassian AI', 'JIRA', 'Agile', 'Scrum', 'Data Analysis'],
      icon: '🚀',
      color: '#10B981',
      impact: '25% improvement in sprint accuracy',
      metrics: 'Enhanced team velocity and predictability',
      category: 'automation'
    },
    {
      id: 'bi-reporting',
      title: 'Automated Business Intelligence Reporting',
      description: 'Automated critical reporting and data visualization processes using EazyBI Analytics, significantly increasing visibility into sprint progress and team velocity.',
      technologies: ['EazyBI Analytics', 'JIRA', 'Data Visualization', 'Business Intelligence'],
      icon: '📊',
      color: '#8B5CF6',
      impact: '30% increase in operational visibility',
      metrics: 'Real-time actionable insights for leadership',
      category: 'analytics'
    },
    {
      id: 'crm-enhancement',
      title: 'Salesforce CRM Enhancement for Lead Management',
      description: 'Managed and optimized Salesforce CRM for doctor-facing operations, including lead generation, targeted marketing campaigns, and event management.',
      technologies: ['Salesforce', 'SOQL', 'CRM Optimization', 'Lead Management', 'Campaign Analytics'],
      icon: '🎨',
      color: '#F59E0B',
      impact: 'Streamlined lead management workflow',
      metrics: 'Enhanced campaign performance tracking',
      category: 'crm'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: '📋' },
    { id: 'ai', label: 'AI Solutions', icon: '🤖' },
    { id: 'automation', label: 'Automation', icon: '⚙️' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'crm', label: 'CRM', icon: '🎨' }
  ];

  const filteredProjects = filterCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === filterCategory);

  return (
    <section id="projects" className="py-20 px-4 md:px-10 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={sectionRef}
          className={`text-4xl font-bold text-center mb-8 text-sky-400 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Key Projects & Initiatives
        </h2>
        
        <p className={`text-center text-gray-300 mb-12 transition-all duration-700 ease-out delay-300 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Interactive showcase of AI-powered solutions and enterprise transformations
        </p>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ease-out delay-500 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilterCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                filterCategory === category.id
                  ? 'bg-sky-500 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${sectionInView ? index * 200 : 0}ms` }}
              onClick={() => setActiveProject(activeProject === project.id ? '' : project.id)}
            >
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${activeProject === project.id ? 'bg-white/20 border-white/60 scale-105' : ''}`}>
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                        style={{ backgroundColor: project.color }}
                      >
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className={`transform transition-transform duration-300 ${activeProject === project.id ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                  
                  {/* Impact Preview */}
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <span className="text-green-400">✨</span>
                      <span className="text-green-300 font-medium">{project.impact}</span>
                    </div>
                  </div>
                </div>

                {/* Expandable Details */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeProject === project.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 pt-2 border-t border-white/20">
                    {/* Detailed Impact */}
                    <div className="mb-4 p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-bold text-green-300 text-xs mb-1">Business Impact</h4>
                      <p className="text-green-200 text-xs mb-1">{project.impact}</p>
                      <p className="text-blue-200 text-xs">{project.metrics}</p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-sky-300 mb-3 text-sm flex items-center">
                        <span className="mr-2">🛠️</span>Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ease-out delay-1000 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { label: 'AI Projects Delivered', value: '25+', icon: '🤖', color: '#3B82F6' },
            { label: 'Efficiency Improvement', value: '85%', icon: '⚡', color: '#10B981' },
            { label: 'Cost Savings Generated', value: '$200K+', icon: '💰', color: '#F59E0B' }
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <span className="text-3xl mb-3 block">{stat.icon}</span>
              <div className="text-2xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
