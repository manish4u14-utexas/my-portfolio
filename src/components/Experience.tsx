import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Briefcase, GraduationCap, TrendingUp, Award, Code } from 'lucide-react';

interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  company: string;
  location: string;
  type: 'work' | 'education';
  color: string;
  icon: string;
  description: string;
  achievements: string[];
  technologies: string[];
  impact: string;
  metrics?: string[];
}

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('current');
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: ExperienceItem[] = [
    {
      id: 'current',
      period: 'June 2024 - Present',
      title: 'AI Solutions Designer / AI Integration & Automation',
      company: 'Align Technology',
      location: 'Morrisville, NC',
      type: 'work',
      color: '#F59E0B',
      icon: '🤖',
      description: 'Leading enterprise AI solutions using Azure OpenAI, designing RAG-enabled assistants, prompt-driven workflows, and Python/API integrations for scalable AI adoption.',
      achievements: [
        'Architected enterprise GenAI application on Azure OpenAI to transform raw requirements into user stories, test cases, and technical questionnaires using Python/Flask APIs and prompt-engineering',
        'Integrated with JIRA via Flask backend for one-click story creation, achieving 85% reduction in documentation time and $200,000+ annual cost savings',
        'Engineered Power Automate flow with GPT-5 API for Doctor Locator support automation, enabling automated detection of Region, Issue Type, and Status with real-time ticket management',
        'Built AI-Driven Weekly Project Summary Generator using Power Automate and AI Builder Custom Prompt, eliminating manual status reporting',
        'Supported responsible AI adoption through auditable workflows and human-in-the-loop validation',
        'Acted as primary bridge between stakeholders and AI engineers, eliciting requirements for agentic AI initiatives',
        'Optimized developer productivity by integrating GitHub Copilot and Amazon Q into daily coding workflows',
        'Centralized performance/log monitoring for 20+ web applications with AI-driven error detection',
        'Managed Agile ceremonies for multiple teams using Atlassian AI for sprint planning and EazyBI for velocity tracking'
      ],
      technologies: ['Azure OpenAI', 'GPT-4/GPT-5', 'Flask', 'Python', 'Power Automate', 'AI Builder', 'GitHub Copilot', 'Amazon Q', 'JIRA API', 'Atlassian AI', 'EazyBI', 'RAG', 'LangChain'],
      impact: '85% reduction in documentation time with $200K+ annual cost savings',
      metrics: ['$200K+ Cost Savings', '85% Time Reduction', '20+ Apps Monitored']
    },
    {
      id: 'education-ms',
      period: 'Aug 2024 - Present',
      title: 'M.S. in Artificial Intelligence',
      company: 'University of Texas at Austin',
      location: 'Austin, TX',
      type: 'education',
      color: '#BF5700',
      icon: '🎓',
      description: 'Pursuing advanced degree in AI while working full-time, focusing on LLMs, Agentic AI, and Deep Learning.',
      achievements: [
        'Enrolled in top-ranked AI program while maintaining full-time employment',
        'Coursework in Machine Learning, Deep Learning, Natural Language Processing',
        'Research focus on LLMs and Agentic AI systems',
        'Applying academic knowledge directly to enterprise AI solutions'
      ],
      technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'Agentic AI', 'Python', 'TensorFlow', 'PyTorch'],
      impact: 'Bridging academic AI research with enterprise applications'
    },
    {
      id: 'sr-technical-analyst',
      period: 'Dec 2021 - June 2024',
      title: 'Sr. Technical Solution Analyst',
      company: 'Align Technology',
      location: 'Morrisville, NC',
      type: 'work',
      color: '#3B82F6',
      icon: '🚀',
      description: 'Pioneered GenAI adoption for documentation and led agile transformation initiatives while delivering consumer/provider web applications.',
      achievements: [
        'Delivered consumer/provider web apps, ensuring seamless UX and robust technical implementation',
        'Led GenAI adoption for documentation and managed Scrum teams, utilizing AI-assisted retrospectives to reduce manual effort by 40%',
        'Automated web app monitoring and reporting, increasing sprint visibility by 30%',
        'Oversaw Salesforce CRM for lead/campaign management and analytics',
        'Implemented AI-driven sprint planning using Atlassian AI with 25% improvement in sprint accuracy',
        'Automated BI reporting with EazyBI Analytics for enhanced operational visibility'
      ],
      technologies: ['Generative AI', 'Atlassian AI', 'JIRA', 'EazyBI Analytics', 'Salesforce', 'SOQL', 'Power Automate', 'Agile/Scrum', 'New Relic'],
      impact: '40% reduction in manual effort, 30% increase in sprint visibility',
      metrics: ['40% Efficiency Gain', '30% Visibility Increase']
    },
    {
      id: 'sr-systems-analyst',
      period: 'Aug 2018 - Dec 2021',
      title: 'Sr. Systems Analyst',
      company: 'Align Technology',
      location: 'Hyderabad, India',
      type: 'work',
      color: '#10B981',
      icon: '👥',
      description: 'Led technical analysis and design for large-scale enterprise conversational systems and portals with focus on UX and cloud infrastructure.',
      achievements: [
        'Defined functional specifications and acceptance criteria for large-scale enterprise conversational systems and portals',
        'Led UAT and business sign-off for critical enterprise projects',
        'Designed interactive wireframes and UI prototypes in Figma for front-end applications',
        'Managed Heroku apps, monitored uptime/downtime and performance',
        'Served as Scrum Master for cross-functional development teams',
        'Optimized Salesforce CRM workflows and data management'
      ],
      technologies: ['Figma', 'Heroku', 'Salesforce CRM', 'New Relic', 'JIRA', 'Confluence', 'Lucid Chart', 'Agile/Scrum', 'UAT'],
      impact: 'Enhanced team collaboration and application performance for enterprise systems'
    },
    {
      id: 'microsoft',
      period: 'June 2013 - Aug 2018',
      title: 'Business Analyst / SQA',
      company: 'Microsoft',
      location: 'Hyderabad, India',
      type: 'work',
      color: '#8B5CF6',
      icon: '🏢',
      description: 'Established foundation in enterprise software development with focus on quality engineering, business analysis, and requirements management.',
      achievements: [
        'Defined functional specifications and performed UAT for large-scale enterprise projects',
        'Gathered and documented functional requirements, authored user stories and acceptance criteria',
        'Established QA processes and testing frameworks for enterprise applications',
        'Collaborated with development teams on Visual Studio Team Services',
        'Managed SQL Server databases and SharePoint integrations',
        'Led quality assurance initiatives across multiple product lines'
      ],
      technologies: ['Visual Studio', 'SQL Server', 'Azure DevOps', 'SharePoint', 'JIRA', 'Quality Engineering', 'UAT', 'Requirements Analysis'],
      impact: 'Built strong foundation in enterprise software development and quality assurance'
    }
  ];


  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 px-4 md:px-10 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-sky-500/20 text-sky-300 rounded-full text-sm font-semibold border border-sky-500/30">
              Career Timeline
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Professional Journey
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-4">
            10+ years of experience driving AI-powered transformations and enterprise solutions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500 via-blue-500 to-purple-500"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse"></div>
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              const isLeft = index % 2 === 0;
              
              // Individual card animation
              const { ref: cardRef, inView: cardInView } = useInView({
                triggerOnce: true,
                threshold: 0.2,
              });
              
              return (
                <div
                  key={exp.id}
                  ref={cardRef}
                  className={`relative transition-all duration-700 ease-out ${
                    cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${cardInView ? index * 100 : 0}ms` }}
                >
                  {/* Timeline Dot with Pulse Animation */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20">
                    {/* Outer Pulse Ring */}
                    <div 
                      className={`absolute inset-0 w-16 sm:w-20 h-16 sm:h-20 -left-2 -top-2 rounded-full animate-ping opacity-20`}
                      style={{ backgroundColor: exp.color, animationDuration: '3s' }}
                    ></div>
                    
                    {/* Middle Ring */}
                    <div 
                      className={`absolute inset-0 w-12 sm:w-16 h-12 sm:h-16 rounded-full transition-all duration-500 ${
                        isExpanded ? 'scale-150 opacity-30' : 'scale-100 opacity-20'
                      }`}
                      style={{ backgroundColor: exp.color }}
                    ></div>
                    
                    {/* Main Icon Circle */}
                    <div 
                      className={`relative w-12 sm:w-16 h-12 sm:h-16 rounded-full border-2 sm:border-4 border-slate-900 shadow-2xl flex items-center justify-center text-xl sm:text-2xl transition-all duration-500 cursor-pointer group touch-manipulation ${
                        isExpanded ? 'scale-125 shadow-[0_0_30px_rgba(59,130,246,0.6)]' : 'hover:scale-110'
                      }`}
                      style={{ backgroundColor: exp.color }}
                      onClick={() => toggleExpand(exp.id)}
                    >
                      <span className="relative z-10 transform group-hover:rotate-12 transition-transform duration-300">
                        {exp.icon}
                      </span>
                      
                      {/* Rotating Border Effect */}
                      {isExpanded && (
                        <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-spin" style={{ animationDuration: '3s' }}></div>
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${isLeft ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                    <div 
                      className={`group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 cursor-pointer relative ${
                        isExpanded 
                          ? 'border-opacity-100 shadow-[0_0_40px_rgba(59,130,246,0.4)] scale-105' 
                          : 'border-opacity-30 hover:border-opacity-60 hover:scale-102'
                      }`}
                      style={{ borderColor: exp.color }}
                      onClick={() => toggleExpand(exp.id)}
                    >
                      {/* Gradient Overlay */}
                      <div 
                        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                        style={{ background: `linear-gradient(135deg, ${exp.color} 0%, transparent 100%)` }}
                      ></div>

                      {/* Card Header */}
                      <div className="relative p-4 sm:p-6 pb-4">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1 min-w-0">
                            {/* Period Badge with Icon */}
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 flex-wrap">
                              <span 
                                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-white shadow-lg flex items-center gap-2 group-hover:scale-105 transition-transform"
                                style={{ backgroundColor: exp.color }}
                              >
                                {exp.type === 'education' ? (
                                  <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
                                ) : (
                                  <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                                )}
                                <span className="whitespace-nowrap">{exp.period}</span>
                              </span>
                              {exp.type === 'education' && (
                                <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-bold bg-purple-500/30 text-purple-300 border border-purple-500/50">
                                  Education
                                </span>
                              )}
                            </div>
                            
                            {/* Title with Gradient */}
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors leading-tight">
                              {exp.title}
                            </h3>
                            
                            {/* Company & Location */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sky-400 font-semibold mb-3">
                              <span className="text-base sm:text-lg">{exp.company}</span>
                              <span className="text-gray-500 hidden sm:inline">•</span>
                              <span className="text-gray-400 text-xs sm:text-sm">{exp.location}</span>
                            </div>
                          </div>
                          
                          {/* Expand/Collapse Button */}
                          <button
                            className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 touch-manipulation ml-2 ${
                              isExpanded ? 'rotate-180 bg-white/20' : ''
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(exp.id);
                            }}
                          >
                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </button>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Impact Badge - Always Visible with Animation */}
                        {exp.impact && (
                          <div className="p-3 sm:p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 backdrop-blur-sm group-hover:border-green-500/50 transition-all duration-300">
                            <div className="flex items-start gap-2 sm:gap-3">
                              <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-green-500/30 flex items-center justify-center">
                                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-green-300 text-xs mb-1 uppercase tracking-wide">Key Impact</h4>
                                <p className="text-green-100 text-xs sm:text-sm font-medium">{exp.impact}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Metrics - Always Visible */}
                        {exp.metrics && exp.metrics.length > 0 && (
                          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                            {exp.metrics.map((metric, idx) => (
                              <span 
                                key={idx}
                                className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-xs font-bold text-white border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                              >
                                {metric}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Expandable Details with Smooth Animation */}
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="relative p-6 pt-4 border-t border-white/10">
                          {/* Achievements Section */}
                          <div className="mb-6">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-8 h-8 rounded-lg bg-sky-500/30 flex items-center justify-center">
                                <Award className="w-5 h-5 text-sky-400" />
                              </div>
                              <h4 className="font-bold text-white text-lg">Key Achievements</h4>
                            </div>
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, idx) => (
                                <li 
                                  key={idx} 
                                  className="flex items-start gap-3 text-gray-300 text-sm group/item hover:text-white transition-colors"
                                >
                                  <span 
                                    className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 group-hover/item:scale-150 transition-transform"
                                    style={{ backgroundColor: exp.color }}
                                  ></span>
                                  <span className="flex-1">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies Section */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-8 h-8 rounded-lg bg-purple-500/30 flex items-center justify-center">
                                <Code className="w-5 h-5 text-purple-400" />
                              </div>
                              <h4 className="font-bold text-white text-lg">Technologies & Tools</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <span 
                                  key={idx}
                                  className="px-3 py-2 bg-gradient-to-r from-slate-700 to-slate-800 text-gray-200 text-xs font-medium rounded-lg border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Indicator */}
                      {!isExpanded && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Career Summary Stats with Animation */}
        <div 
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-700 ease-out delay-500 ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { label: 'Years Experience', value: '10+', icon: '📅', color: '#8B5CF6', gradient: 'from-purple-500 to-purple-700' },
            { label: 'AI Projects', value: '25+', icon: '🤖', color: '#3B82F6', gradient: 'from-blue-500 to-blue-700' },
            { label: 'Teams Led', value: '15+', icon: '👥', color: '#10B981', gradient: 'from-green-500 to-green-700' },
            { label: 'Cost Savings', value: '$200K+', icon: '💰', color: '#F59E0B', gradient: 'from-amber-500 to-amber-700' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`group bg-gradient-to-br ${stat.gradient} rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 cursor-default border border-white/20 hover:border-white/40 relative overflow-hidden`}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2 text-white">
                  {stat.value}
                </div>
                <div className="text-white/90 text-sm font-semibold uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
