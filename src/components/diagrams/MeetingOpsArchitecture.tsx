import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const MeetingOpsArchitecture: React.FC = () => {
  const [step, setStep] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setStep((prev) => { if (prev >= 12) { clearInterval(timer); return prev; } return prev + 1; });
    }, 350);
    return () => clearInterval(timer);
  }, [inView]);

  const triggers = [
    { title: 'Teams Meeting', icon: '💬', color: '#3B82F6' },
    { title: 'Outlook Calendar', icon: '📅', color: '#A855F7' },
    { title: 'Microsoft Graph', icon: '🔌', color: '#10B981' },
  ];

  const skills = [
    { title: 'Analyze Meeting', icon: '🔍' },
    { title: 'Missed Meeting Brief', icon: '⚠️' },
    { title: 'Generate MOM', icon: '📋' },
    { title: 'Draft Email', icon: '✉️' },
    { title: 'Create Jira Draft', icon: '🎫' },
    { title: 'Create KT Doc', icon: '📄' },
  ];

  const tools = [
    { title: 'Teams Notification', icon: '🔔' },
    { title: 'Save Artifact', icon: '💾' },
    { title: 'Outlook Draft', icon: '📧' },
    { title: 'Jira Integration', icon: '🔗' },
  ];

  const integrations = [
    { title: 'SharePoint / OneDrive', icon: '📁', color: '#10B981' },
    { title: 'Microsoft Teams', icon: '💬', color: '#3B82F6' },
    { title: 'Outlook', icon: '📧', color: '#A855F7' },
    { title: 'Jira', icon: '🎫', color: '#F59E0B' },
  ];

  return (
    <div ref={ref} className="w-full h-full p-3 sm:p-4 flex flex-col justify-between overflow-hidden">
      {/* Title */}
      <div className={`mb-2 transition-all duration-500 ${step >= 0 ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-sm font-bold text-white">Technical Architecture</h3>
        <p className="text-[10px] text-gray-500">Copilot Studio Agent + Power Automate + M365</p>
      </div>

      {/* Row 1: Triggers */}
      <div className={`mb-2 transition-all duration-600 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <p className="text-[9px] text-gray-600 font-medium mb-1 uppercase tracking-wider">Triggers</p>
        <div className="grid grid-cols-3 gap-1.5">
          {triggers.map((t, i) => (
            <div key={i} className="rounded-lg border px-2 py-1.5" style={{ borderColor: `${t.color}50`, backgroundColor: `${t.color}10` }}>
              <div className="flex items-center gap-1">
                <span className="text-sm">{t.icon}</span>
                <span className="text-[10px] font-semibold text-white">{t.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className={`text-center text-sky-400/50 text-sm mb-1 transition-opacity duration-400 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>↓</div>

      {/* Row 2: Copilot Studio Agent - Skills */}
      <div className={`mb-2 transition-all duration-600 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: '800ms' }}>
        <p className="text-[9px] text-gray-600 font-medium mb-1 uppercase tracking-wider">Copilot Studio — Skills</p>
        <div className="flex flex-wrap items-center gap-1">
          {skills.map((s, i) => (
            <React.Fragment key={i}>
              <div className="rounded border border-sky-500/40 bg-sky-500/8 px-1.5 py-1.5 text-center">
                <span className="text-sm block">{s.icon}</span>
                <span className="text-[8px] font-medium text-sky-300 leading-tight block mt-0.5">{s.title}</span>
              </div>
              {i < skills.length - 1 && <span className="text-sky-400/40 text-xs">→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className={`text-center text-sky-400/50 text-sm mb-1 transition-opacity duration-400 ${step >= 7 ? 'opacity-100' : 'opacity-0'}`}>↓</div>

      {/* Row 3: Tools */}
      <div className={`mb-2 transition-all duration-600 ${step >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: '1600ms' }}>
        <p className="text-[9px] text-gray-600 font-medium mb-1 uppercase tracking-wider">Action Tools</p>
        <div className="flex flex-wrap items-center gap-1">
          {tools.map((t, i) => (
            <React.Fragment key={i}>
              <div className="rounded border border-purple-500/40 bg-purple-500/8 px-1.5 py-1.5 text-center">
                <span className="text-sm block">{t.icon}</span>
                <span className="text-[8px] font-medium text-purple-300 leading-tight block mt-0.5">{t.title}</span>
              </div>
              {i < tools.length - 1 && <span className="text-purple-400/40 text-xs">→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className={`text-center text-sky-400/50 text-sm mb-1 transition-opacity duration-400 ${step >= 9 ? 'opacity-100' : 'opacity-0'}`}>↓</div>

      {/* Row 4: Data & Integrations */}
      <div className={`mb-2 transition-all duration-600 ${step >= 10 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: '2400ms' }}>
        <p className="text-[9px] text-gray-600 font-medium mb-1 uppercase tracking-wider">Integrations & Output</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          {integrations.map((t, i) => (
            <div key={i} className="rounded-lg border px-2 py-1.5" style={{ borderColor: `${t.color}50`, backgroundColor: `${t.color}10` }}>
              <div className="flex items-center gap-1">
                <span className="text-sm">{t.icon}</span>
                <span className="text-[10px] font-semibold text-white">{t.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <div className={`mt-auto p-2 bg-slate-800/60 border border-slate-700/40 rounded-lg transition-all duration-700 ${step >= 12 ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-[10px] text-gray-400">
          <span className="text-sky-400 font-semibold">Personal AI agent</span> — built on Copilot Studio with Power Automate orchestration
        </p>
      </div>
    </div>
  );
};

export default MeetingOpsArchitecture;
