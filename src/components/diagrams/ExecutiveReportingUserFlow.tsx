import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ExecutiveReportingUserFlow: React.FC = () => {
  const [step, setStep] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setStep((prev) => { if (prev >= 10) { clearInterval(timer); return prev; } return prev + 1; });
    }, 400);
    return () => clearInterval(timer);
  }, [inView]);

  const steps = [
    { num: 1, title: 'Leadership Emails', desc: 'Weekly updates & status', icon: '📧', color: '#3B82F6' },
    { num: 2, title: 'Scheduled Trigger', desc: 'Friday Power Automate', icon: '⏰', color: '#A855F7' },
    { num: 3, title: 'Email Cleanup', desc: 'Remove noise & OOO', icon: '🧹', color: '#10B981' },
    { num: 4, title: 'AI Analysis', desc: 'Chunk & classify', icon: '🧠', color: '#F59E0B' },
    { num: 5, title: 'Generate Report', desc: 'Executive summary', icon: '📊', color: '#06B6D4' },
  ];

  const outputs = [
    { title: 'Compliance Archive', icon: '🗂️', color: '#10B981' },
    { title: 'Status Report', icon: '📋', color: '#F59E0B' },
    { title: 'Executive Insights', icon: '📈', color: '#A855F7' },
    { title: 'Teams Dashboard', icon: '💬', color: '#06B6D4' },
  ];

  return (
    <div ref={ref} className="w-full h-full p-3 sm:p-4 flex flex-col justify-between overflow-hidden">
      {/* Title */}
      <div className={`mb-3 transition-all duration-500 ${step >= 0 ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-sm font-bold text-white">User Flow</h3>
        <p className="text-[10px] text-gray-500">Leadership emails → AI reports → Teams publishing</p>
      </div>

      {/* Steps with arrows */}
      <div className="mb-3">
        <p className="text-[9px] text-gray-600 font-medium mb-1.5 uppercase tracking-wider">Pipeline Steps</p>
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

      {/* Outputs with arrows */}
      <div className="mb-2">
        <p className="text-[9px] text-gray-600 font-medium mb-1.5 uppercase tracking-wider">Outputs</p>
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
          <span className="text-sky-400 font-semibold">Production workflow</span> — unstructured emails to executive-ready reports
        </p>
      </div>
    </div>
  );
};

export default ExecutiveReportingUserFlow;
