import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const MeetingOpsUserFlow: React.FC = () => {
  const [step, setStep] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setStep((prev) => { if (prev >= 12) { clearInterval(timer); return prev; } return prev + 1; });
    }, 200);
    return () => clearInterval(timer);
  }, [inView]);

  const journey = [
    { num: 1, title: 'Meeting Occurs', desc: 'Teams / Outlook', icon: '💬', color: '#3B82F6' },
    { num: 2, title: 'Artifact Available', desc: 'Notes / Transcript', icon: '📝', color: '#A855F7' },
    { num: 3, title: 'Power Automate', desc: 'Detects completion', icon: '⚡', color: '#10B981' },
    { num: 4, title: 'AI Agent', desc: 'Analyze & classify', icon: '🧠', color: '#F59E0B' },
    { num: 5, title: 'Adaptive Card', desc: 'Private notification', icon: '📱', color: '#06B6D4' },
    { num: 6, title: 'User Selects', desc: 'Choose action', icon: '👆', color: '#EF4444' },
    { num: 7, title: 'Execute & Deliver', desc: 'Generate output', icon: '✅', color: '#10B981' },
  ];

  const actions = [
    { title: 'Brief Me', icon: '📖', color: '#3B82F6' },
    { title: 'Generate MOM', icon: '📋', color: '#10B981' },
    { title: 'Draft Email', icon: '✉️', color: '#A855F7' },
    { title: 'Jira Draft', icon: '🎫', color: '#F59E0B' },
    { title: 'Save Artifact', icon: '💾', color: '#06B6D4' },
  ];

  return (
    <div ref={ref} className="w-full h-full p-3 sm:p-4 flex flex-col justify-between overflow-hidden">
      {/* Title */}
      <div className={`mb-2 transition-all duration-500 ${step >= 0 ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-sm font-bold text-white">User Flow</h3>
        <p className="text-[10px] text-gray-500">Meeting → AI Analysis → Private Card → Action</p>
      </div>

      {/* Journey Steps with arrows */}
      <div className="mb-3">
        <p className="text-[9px] text-gray-600 font-medium mb-1.5 uppercase tracking-wider">End-to-End Flow</p>
        <div className="flex flex-wrap items-center gap-y-2">
          {journey.map((s, i) => (
            <React.Fragment key={i}>
              <div
                className={`rounded-lg border px-2 py-1.5 transition-all duration-600 ${step >= 1 + i ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: `${200 + i * 250}ms`, borderColor: `${s.color}50`, backgroundColor: `${s.color}10`, minWidth: '80px' }}
              >
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="text-xs">{s.icon}</span>
                  <span className="text-[7px] font-bold px-1 rounded-full" style={{ backgroundColor: `${s.color}30`, color: s.color }}>{s.num}</span>
                </div>
                <h4 className="text-[9px] font-bold text-white leading-tight">{s.title}</h4>
                <p className="text-[7px] text-gray-500">{s.desc}</p>
              </div>
              {i < journey.length - 1 && (
                <span
                  className={`text-sky-400/60 text-sm mx-1 transition-opacity duration-400 ${step >= 2 + i ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${400 + i * 250}ms` }}
                >→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Arrow down to actions */}
      <div className={`text-center text-sky-400/50 text-sm mb-1 transition-opacity duration-400 ${step >= 6 ? 'opacity-100' : 'opacity-0'}`}>↓</div>

      {/* Adaptive Card Actions */}
      <div className={`transition-all duration-600 ${step >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: '2000ms' }}>
        <p className="text-[9px] text-gray-600 font-medium mb-1.5 uppercase tracking-wider">Adaptive Card Actions</p>
        <div className="flex flex-wrap items-center gap-1.5">
          {actions.map((a, i) => (
            <div
              key={i}
              className={`rounded-lg border px-2.5 py-2 text-center transition-all duration-500 ${step >= 8 + i ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${2400 + i * 200}ms`, borderColor: `${a.color}50`, backgroundColor: `${a.color}10` }}
            >
              <span className="text-base block">{a.icon}</span>
              <span className="text-[9px] font-semibold text-white mt-0.5 block">{a.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <div className={`mt-auto pt-2`}>
        <div className={`p-2 bg-slate-800/60 border border-slate-700/40 rounded-lg transition-all duration-700 ${step >= 12 ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-[10px] text-gray-400">
            <span className="text-green-400 font-semibold">In production</span> — private Teams notifications with one-click AI actions
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetingOpsUserFlow;
