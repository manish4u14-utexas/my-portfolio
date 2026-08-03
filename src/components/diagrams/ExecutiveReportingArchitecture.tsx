import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ExecutiveReportingArchitecture: React.FC = () => {
  const [step, setStep] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev >= 10) { clearInterval(timer); return prev; }
        return prev + 1;
      });
    }, 400);
    return () => clearInterval(timer);
  }, [inView]);

  const topRow = [
    { title: 'Outlook Mailbox', icon: '📧', color: '#3B82F6' },
    { title: 'Power Automate', icon: '⚡', color: '#A855F7' },
    { title: 'Azure OpenAI', icon: '🧠', color: '#F59E0B' },
    { title: 'SharePoint', icon: '📁', color: '#10B981' },
    { title: 'Security', icon: '🛡️', color: '#EF4444' },
  ];

  const bottomRow = [
    { title: 'Email Cleanup', icon: '🧹', color: '#3B82F6' },
    { title: 'Chunking', icon: '✂️', color: '#A855F7' },
    { title: 'Extraction', icon: '📊', color: '#F59E0B' },
    { title: 'Report Builder', icon: '📋', color: '#10B981' },
    { title: 'Teams Delivery', icon: '💬', color: '#06B6D4' },
  ];

  return (
    <div ref={ref} className="w-full h-full p-3 sm:p-4 flex flex-col justify-between overflow-hidden">
      {/* Title */}
      <div className={`mb-3 transition-all duration-500 ${step >= 0 ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-sm font-bold text-white">Technical Architecture</h3>
        <p className="text-[10px] text-gray-500">Emails → AI Processing → Executive Reports</p>
      </div>

      {/* Top Row - Use 3+2 on mobile, 5 on desktop */}
      <div className="mb-2">
        <p className="text-[9px] text-gray-600 font-medium mb-1.5 uppercase tracking-wider">Infrastructure Layer</p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
          {topRow.map((block, i) => (
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

      {/* Flow direction */}
      <div className={`flex items-center justify-center gap-1 my-2 transition-all duration-500 ${step >= 5 ? 'opacity-100' : 'opacity-0'}`}>
        {['trigger', 'clean', 'extract', 'archive', 'publish'].map((l, i) => (
          <React.Fragment key={i}>
            <span className="text-[9px] px-1.5 py-0.5 bg-slate-700/60 text-gray-400 rounded">{l}</span>
            {i < 4 && <span className="text-gray-600 text-xs">→</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Bottom Row - Processing Pipeline */}
      <div className="mb-2">
        <p className="text-[9px] text-gray-600 font-medium mb-1.5 uppercase tracking-wider">Processing Pipeline</p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
          {bottomRow.map((block, i) => (
            <div
              key={i}
              className={`rounded-lg border px-2 py-2 transition-all duration-600 ${step >= 6 + Math.floor(i / 2) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${1800 + i * 200}ms`, borderColor: `${block.color}50`, backgroundColor: `${block.color}10` }}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-sm">{block.icon}</span>
                <span className="text-[10px] font-semibold text-white leading-tight">{block.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <div className={`mt-auto p-2 bg-slate-800/60 border border-slate-700/40 rounded-lg transition-all duration-700 ${step >= 10 ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-[10px] text-gray-400">
          <span className="text-yellow-400 font-semibold">Eliminated manual reporting</span> — weekly consolidation → fully autonomous workflow
        </p>
      </div>
    </div>
  );
};

export default ExecutiveReportingArchitecture;
