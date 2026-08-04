import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const SprintPulseUserFlow: React.FC = () => {
  const [step, setStep] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setStep((prev) => { if (prev >= 10) { clearInterval(timer); return prev; } return prev + 1; });
    }, 200);
    return () => clearInterval(timer);
  }, [inView]);

  const steps = [
    { num: 1, title: 'Create Workspace', desc: 'Sign in, create org', icon: '👥', color: '#3B82F6' },
    { num: 2, title: 'Connect Jira', desc: 'Auth & sync boards', icon: '🔗', color: '#10B981' },
    { num: 3, title: 'Add Capacity', desc: 'Availability & holidays', icon: '📊', color: '#F59E0B' },
    { num: 4, title: 'Sprint View', desc: 'Velocity & risks', icon: '📈', color: '#A855F7' },
    { num: 5, title: 'Ask AI', desc: 'NL queries & what-if', icon: '🧠', color: '#06B6D4' },
  ];

  const outputs = [
    { title: 'Capacity Plan', icon: '📋', color: '#F59E0B' },
    { title: 'Sprint Health', icon: '❤️', color: '#EF4444' },
    { title: 'AI Insights', icon: '🤖', color: '#06B6D4' },
    { title: 'Share Story', icon: '📤', color: '#8B5CF6' },
  ];

  return (
    <div ref={ref} className="w-full h-full p-3 sm:p-4 flex flex-col justify-between overflow-hidden">
      {/* Title */}
      <div className={`mb-3 transition-all duration-500 ${step >= 0 ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-sm font-bold text-white">User Flow</h3>
        <p className="text-[10px] text-gray-500">Workspace setup → AI-assisted delivery insights</p>
      </div>

      {/* Steps with arrows */}
      <div className="mb-3">
        <p className="text-[9px] text-gray-600 font-medium mb-1.5 uppercase tracking-wider">Journey Steps</p>
        <div className="flex flex-wrap items-center gap-y-2">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div
                className={`rounded-lg border px-2 py-1.5 transition-all duration-600 ${step >= 1 + i ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: `${200 + i * 300}ms`, borderColor: `${s.color}50`, backgroundColor: `${s.color}10`, minWidth: '85px' }}
              >
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="text-xs">{s.icon}</span>
                  <span className="text-[7px] font-bold px-1 rounded-full" style={{ backgroundColor: `${s.color}30`, color: s.color }}>{s.num}</span>
                </div>
                <h4 className="text-[10px] font-bold text-white leading-tight">{s.title}</h4>
                <p className="text-[8px] text-gray-500">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <span className={`text-sky-400/60 text-sm mx-1 transition-opacity duration-400 ${step >= 2 + i ? 'opacity-100' : 'opacity-0'}`}>→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Arrow down */}
      <div className={`text-center text-sky-400/50 text-sm mb-1 transition-opacity duration-400 ${step >= 6 ? 'opacity-100' : 'opacity-0'}`}>↓ outputs</div>

      {/* Outputs with separators */}
      <div className="mb-2">
        <p className="text-[9px] text-gray-600 font-medium mb-1.5 uppercase tracking-wider">Deliverables</p>
        <div className="flex flex-wrap items-center gap-y-1.5">
          {outputs.map((out, i) => (
            <React.Fragment key={i}>
              <div
                className={`rounded-lg border px-2 py-2 transition-all duration-600 ${step >= 7 + i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                style={{ transitionDelay: `${2200 + i * 200}ms`, borderColor: `${out.color}50`, backgroundColor: `${out.color}10` }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">{out.icon}</span>
                  <span className="text-[10px] font-semibold text-white">{out.title}</span>
                </div>
              </div>
              {i < outputs.length - 1 && (
                <span className={`text-sky-400/40 text-xs mx-1 transition-opacity duration-300 ${step >= 8 + i ? 'opacity-100' : 'opacity-0'}`}>•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Caption */}
      <div className={`mt-auto p-2 bg-slate-800/60 border border-slate-700/40 rounded-lg transition-all duration-700 ${step >= 10 ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-[10px] text-gray-400">
          <span className="text-sky-400 font-semibold">MVP live with real users</span> — AI-native capacity & delivery command center
        </p>
      </div>
    </div>
  );
};

export default SprintPulseUserFlow;
