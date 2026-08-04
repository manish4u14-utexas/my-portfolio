import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ExecutiveReportingGovernance: React.FC = () => {
  const [step, setStep] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev >= 10) { clearInterval(timer); return prev; }
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(timer);
  }, [inView]);

  const pipeline = [
    { title: '50+ Emails', icon: '📧', color: '#3B82F6' },
    { title: 'Noise Removal', icon: '🧹', color: '#10B981' },
    { title: 'SharePoint Archive', icon: '📁', color: '#A855F7' },
    { title: 'Chunking (4 batches)', icon: '✂️', color: '#F59E0B' },
    { title: 'Azure OpenAI', icon: '🧠', color: '#06B6D4' },
    { title: 'Structured JSON', icon: '{ }', color: '#F59E0B' },
    { title: 'Aggregation', icon: '🔗', color: '#A855F7' },
    { title: 'Executive Report', icon: '📊', color: '#10B981' },
  ];

  return (
    <div ref={ref} className="w-full h-full p-3 sm:p-4 flex flex-col justify-between overflow-hidden">
      {/* Title */}
      <div className={`mb-3 transition-all duration-500 ${step >= 0 ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-sm font-bold text-white">AI Governance Pipeline</h3>
        <p className="text-[10px] text-gray-500">Chunking → hallucination control → HITL → autopilot</p>
      </div>

      {/* Pipeline blocks - responsive grid 2x4 on mobile, 4x2 on desktop */}
      <div className="mb-3">
        <p className="text-[9px] text-gray-600 font-medium mb-1.5 uppercase tracking-wider">Processing Chain</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          {pipeline.map((block, i) => (
            <div
              key={i}
              className={`rounded-lg border px-2 py-2 transition-all duration-600 ${step >= 1 + Math.floor(i / 2) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${200 + i * 200}ms`, borderColor: `${block.color}50`, backgroundColor: `${block.color}10` }}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-sm">{block.icon}</span>
                <span className="text-[10px] font-semibold text-white leading-tight">{block.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Governance Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
        {/* Hallucination Controls */}
        <div
          className={`rounded-lg border p-2.5 transition-all duration-700 ${step >= 6 ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '2200ms', borderColor: '#EF444450', backgroundColor: '#EF444408' }}
        >
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-sm">🛡️</span>
            <h4 className="text-[11px] font-bold text-white">Hallucination Controls</h4>
          </div>
          <div className="flex flex-wrap gap-1">
            {['Temp = 0', 'Facts only', 'N/A if missing', 'Approved list'].map((item, i) => (
              <span key={i} className="text-[9px] px-1.5 py-0.5 bg-red-500/10 text-red-300 border border-red-500/30 rounded">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Governance Rollout */}
        <div
          className={`rounded-lg border p-2.5 transition-all duration-700 ${step >= 8 ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '2600ms', borderColor: '#10B98150', backgroundColor: '#10B98108' }}
        >
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-sm">🚦</span>
            <h4 className="text-[11px] font-bold text-white">Copilot → Autopilot</h4>
          </div>
          <div className="flex flex-wrap gap-1">
            {['HITL approval', 'Reliability monitoring', 'Autonomous publish', 'Enterprise-grade'].map((item, i) => (
              <span key={i} className="text-[9px] px-1.5 py-0.5 bg-green-500/10 text-green-300 border border-green-500/30 rounded">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className={`mt-auto p-2 bg-slate-800/60 border border-slate-700/40 rounded-lg transition-all duration-700 ${step >= 10 ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-[10px] text-gray-400">
          <span className="text-green-400 font-semibold">Production GenAI governance</span> — controlled transition to full autopilot
        </p>
      </div>
    </div>
  );
};

export default ExecutiveReportingGovernance;
