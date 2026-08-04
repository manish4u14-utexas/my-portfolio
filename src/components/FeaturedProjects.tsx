import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SprintPulseArchitecture from './diagrams/SprintPulseArchitecture';
import SprintPulseUserFlow from './diagrams/SprintPulseUserFlow';
import ExecutiveReportingArchitecture from './diagrams/ExecutiveReportingArchitecture';
import ExecutiveReportingUserFlow from './diagrams/ExecutiveReportingUserFlow';
import ExecutiveReportingGovernance from './diagrams/ExecutiveReportingGovernance';
import MeetingOpsArchitecture from './diagrams/MeetingOpsArchitecture';
import MeetingOpsUserFlow from './diagrams/MeetingOpsUserFlow';
import VittOmniArchitecture from './diagrams/VittOmniArchitecture';
import VittOmniUserFlow from './diagrams/VittOmniUserFlow';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  impact: { label: string; value: string }[];
  technologies: string[];
  color: string;
  icon: string;
  archPlaceholder: string;
  demoPlaceholder: string;
}

const MediaToggle: React.FC<{ archSrc: string; demoSrc: string; title: string; projectId: string }> = ({ archSrc, demoSrc, title, projectId }) => {
  const [view, setView] = useState<'architecture' | 'demo' | 'governance'>('architecture');

  // Determine which project has custom animated diagrams
  const hasAnimated = projectId === 'sprintpulse' || projectId === 'exec-reporting' || projectId === 'meetingops' || projectId === 'vittomni';
  const hasGovernanceTab = projectId === 'exec-reporting';

  const getTabLabel = () => {
    return 'User Flow';
  };

  return (
    <div className="h-full flex flex-col">
      {/* Toggle buttons */}
      <div className="flex gap-2 mb-3 flex-wrap">
        <button
          onClick={() => setView('architecture')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
            view === 'architecture'
              ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
              : 'bg-slate-700/50 text-gray-400 border border-slate-600/50 hover:text-gray-300'
          }`}
        >
          🏗️ Architecture
        </button>
        <button
          onClick={() => setView('demo')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
            view === 'demo'
              ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
              : 'bg-slate-700/50 text-gray-400 border border-slate-600/50 hover:text-gray-300'
          }`}
        >
          ▶️ {getTabLabel()}
        </button>
        {hasGovernanceTab && (
          <button
            onClick={() => setView('governance')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              view === 'governance'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                : 'bg-slate-700/50 text-gray-400 border border-slate-600/50 hover:text-gray-300'
            }`}
          >
            🛡️ AI Governance
          </button>
        )}
      </div>

      {/* Media container */}
      <div className="flex-1 min-h-[280px] sm:min-h-[320px] bg-slate-800 rounded-xl border border-slate-700/50 overflow-hidden relative shadow-inner">
        {view === 'architecture' && (
          hasAnimated ? (
            projectId === 'sprintpulse' ? <SprintPulseArchitecture /> :
            projectId === 'meetingops' ? <MeetingOpsArchitecture /> :
            projectId === 'vittomni' ? <VittOmniArchitecture /> :
            <ExecutiveReportingArchitecture />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-4">
              <img
                src={archSrc}
                alt={`${title} Architecture`}
                className="w-full h-auto rounded-lg object-contain max-h-[280px]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full text-center p-6">
                      <div class="shimmer-placeholder w-full h-48 rounded-lg mb-4"></div>
                      <p class="text-gray-500 text-xs">Architecture diagram coming soon</p>
                    </div>
                  `;
                }}
              />
            </div>
          )
        )}
        {view === 'demo' && (
          hasAnimated ? (
            projectId === 'sprintpulse' ? <SprintPulseUserFlow /> :
            projectId === 'meetingops' ? <MeetingOpsUserFlow /> :
            projectId === 'vittomni' ? <VittOmniUserFlow /> :
            <ExecutiveReportingUserFlow />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-4">
              <video
                src={demoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-lg max-h-[280px]"
                onError={(e) => {
                  const target = e.target as HTMLVideoElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full text-center p-6">
                      <div class="w-16 h-16 rounded-full bg-sky-500/20 flex items-center justify-center mb-4">
                        <svg class="w-8 h-8 text-sky-400" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                      <p class="text-gray-500 text-xs">Demo video coming soon</p>
                    </div>
                  `;
                }}
              />
            </div>
          )
        )}
        {view === 'governance' && projectId === 'exec-reporting' && (
          <ExecutiveReportingGovernance />
        )}
      </div>
    </div>
  );
};

const FeaturedProjects: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const caseStudies: CaseStudy[] = [
    {
      id: 'exec-reporting',
      title: 'Executive Status Reporting Agent',
      subtitle: 'Production AI Automation',
      description: 'Production-grade AI platform that transforms unstructured leadership emails into executive-ready portfolio status reports using Azure OpenAI, Power Automate, and Teams — eliminating manual weekly reporting.',
      impact: [
        { label: 'Weekly Hours Saved', value: '4-6 hrs' },
        { label: 'Emails Processed', value: '50+/week' },
        { label: 'Governance', value: 'HITL → Autopilot' },
      ],
      technologies: ['Azure OpenAI', 'Power Automate', 'SharePoint', 'Teams', 'Prompt Engineering', 'AI Governance'],
      color: '#3B82F6',
      icon: '📊',
      archPlaceholder: '/my-portfolio/exec-reporting-arch.png',
      demoPlaceholder: '/my-portfolio/exec-reporting-demo.mp4',
    },
    {
      id: 'sprintpulse',
      title: 'SprintPulse.ai',
      subtitle: 'AI-Native Agile SaaS (Founder)',
      description: 'Building a multi-agent SaaS that integrates with Jira & Asana to automate sprint reporting, backlog grooming, and stakeholder communications using agentic AI.',
      impact: [
        { label: 'Architecture', value: 'Multi-Agent' },
        { label: 'Integrations', value: 'Jira + Asana' },
        { label: 'Status', value: 'MVP Live' },
      ],
      technologies: ['Agentic AI', 'Multi-Agent Systems', 'JIRA API', 'Next.js', 'SaaS Architecture'],
      color: '#10B981',
      icon: '🚀',
      archPlaceholder: '/my-portfolio/sprintpulse-arch.png',
      demoPlaceholder: '/my-portfolio/sprintpulse-demo.mp4',
    },
    {
      id: 'meetingops',
      title: 'MeetingOps AI',
      subtitle: 'Copilot Studio Agent (Personal Tool)',
      description: 'M365 Copilot Studio agent that converts post-meeting artifacts into actionable outputs — MOM, follow-up emails, Jira drafts, and KT docs via private Teams adaptive cards.',
      impact: [
        { label: 'Follow-up Time', value: '~0 min' },
        { label: 'Actions Available', value: '5 one-click' },
        { label: 'Status', value: 'In Use' },
      ],
      technologies: ['Copilot Studio', 'Power Automate', 'Teams', 'Microsoft Graph', 'SharePoint', 'Adaptive Cards'],
      color: '#6366F1',
      icon: '🤖',
      archPlaceholder: '/my-portfolio/meetingops-arch.png',
      demoPlaceholder: '/my-portfolio/meetingops-demo.mp4',
    },
    {
      id: 'vittomni',
      title: 'Vitt-Omni',
      subtitle: 'Cross-Platform Financial Toolkit (Founder)',
      description: 'Full-stack mobile app combining 13 financial calculators, AI-powered advisory (Gemini), live currency rates, goal tracking, and smart insights — built from scratch and shipped to Play Store.',
      impact: [
        { label: 'Calculators', value: '13' },
        { label: 'Platform', value: 'Play Store' },
        { label: 'AI Model', value: 'Gemini 1.5' },
      ],
      technologies: ['React Native', 'Firebase', 'Gemini AI', 'Redux Toolkit', 'TypeScript', 'Expo'],
      color: '#10B981',
      icon: '💰',
      archPlaceholder: '/my-portfolio/vittomni-arch.png',
      demoPlaceholder: '/my-portfolio/vittomni-demo.mp4',
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 md:px-10 bg-[#0F172A] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-12 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block px-4 py-1.5 bg-sky-500/10 text-sky-400 rounded-full text-xs font-semibold border border-sky-500/20 mb-4">
            AI Products & Agents
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Featured AI <span className="text-sky-400">Products</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Production AI agents and products I built, shipped, and use daily — with measurable business impact
          </p>
        </div>

        {/* Case Studies - Split Pane Layout */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${sectionInView ? index * 150 : 0}ms` }}
            >
              <div className="split-pane bg-slate-800/30 border border-slate-700/50 rounded-2xl p-5 sm:p-6 hover:border-slate-600/60 transition-all duration-300">
                {/* Left Pane - Content */}
                <div className="flex flex-col justify-between">
                  {/* Title row */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-lg"
                        style={{ backgroundColor: `${study.color}20` }}
                      >
                        {study.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{study.title}</h3>
                        <p className="text-xs text-sky-400 font-medium">{study.subtitle}</p>
                      </div>
                    </div>

                    {/* Description - 2 sentences max */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {study.description}
                    </p>
                  </div>

                  {/* Impact Box */}
                  <div className="impact-box mb-4">
                    <h4 className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">Business Impact / ROI</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {study.impact.map((item, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-white font-bold text-sm sm:text-base">{item.value}</div>
                          <div className="text-gray-500 text-xs">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Right Pane - Media */}
                <MediaToggle
                  archSrc={study.archPlaceholder}
                  demoSrc={study.demoPlaceholder}
                  title={study.title}
                  projectId={study.id}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-16 max-w-4xl mx-auto" />
    </section>
  );
};

export default FeaturedProjects;
