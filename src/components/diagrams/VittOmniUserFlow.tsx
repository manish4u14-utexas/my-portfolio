import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const VittOmniUserFlow: React.FC = () => {
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
    { num: 1, title: 'App Launch', desc: 'Onboarding + Region', icon: '🚀', color: '#3B82F6' },
    { num: 2, title: 'Dashboard', desc: 'All features visible', icon: '📊', color: '#A855F7' },
    { num: 3, title: 'Use Calculators', desc: '13 tools, no login', icon: '🧮', color: '#10B981' },
    { num: 4, title: 'AI Chat', desc: 'Triggers signup gate', icon: '🤖', color: '#F59E0B' },
    { num: 5, title: 'One-tap Auth', desc: 'Google / Phone / Email', icon: '🔐', color: '#06B6D4' },
    { num: 6, title: 'Get AI Advice', desc: '10 msgs/day limit', icon: '💬', color: '#10B981' },
  ];

  const features = [
    { title: '13 Calculators', icon: '🧮', color: '#3B82F6' },
    { title: 'AI Advisor', icon: '🤖', color: '#10B981' },
    { title: 'Live Rates', icon: '💱', color: '#F59E0B' },
    { title: 'Goal Tracker', icon: '🎯', color: '#A855F7' },
    { title: 'Smart Insights', icon: '💡', color: '#06B6D4' },
    { title: 'News Feed', icon: '📰', color: '#EF4444' },
  ];

  return (
    <div ref={ref} className="w-full h-full p-3 sm:p-4 flex flex-col justify-between overflow-hidden">
      {/* Title */}
      <div className={`mb-2 transition-all duration-500 ${step >= 0 ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-sm font-bold text-white">User Flow</h3>
        <p className="text-[10px] text-gray-500">Onboarding → Free use → Signup gate → AI unlock</p>
      </div>

      {/* Journey Steps with arrows */}
      <div className="mb-3">
        <p className="text-[9px] text-gray-600 font-medium mb-1.5 uppercase tracking-wider">User Journey</p>
        <div className="flex flex-wrap items-center gap-y-2">
          {journey.map((s, i) => (
            <React.Fragment key={i}>
              <div
                className={`rounded-lg border px-2 py-1.5 transition-all duration-500 ${step >= 1 + i ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: `${i * 100}ms`, borderColor: `${s.color}50`, backgroundColor: `${s.color}10`, minWidth: '80px' }}
              >
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="text-xs">{s.icon}</span>
                  <span className="text-[7px] font-bold px-1 rounded-full" style={{ backgroundColor: `${s.color}30`, color: s.color }}>{s.num}</span>
                </div>
                <h4 className="text-[9px] font-bold text-white leading-tight">{s.title}</h4>
                <p className="text-[7px] text-gray-500">{s.desc}</p>
              </div>
              {i < journey.length - 1 && (
                <span className={`text-sky-400/60 text-sm mx-1 transition-opacity duration-300 ${step >= 2 + i ? 'opacity-100' : 'opacity-0'}`}>→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Arrow down */}
      <div className={`text-center text-sky-400/50 text-sm mb-1 transition-opacity duration-400 ${step >= 8 ? 'opacity-100' : 'opacity-0'}`}>↓ feature set</div>

      {/* Features grid */}
      <div className={`transition-all duration-500 ${step >= 9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <p className="text-[9px] text-gray-600 font-medium mb-1.5 uppercase tracking-wider">Core Features</p>
        <div className="flex flex-wrap items-center gap-1.5">
          {features.map((f, i) => (
            <div
              key={i}
              className={`rounded-lg border px-2 py-1.5 transition-all duration-500 ${step >= 9 + Math.floor(i / 3) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${1800 + i * 100}ms`, borderColor: `${f.color}50`, backgroundColor: `${f.color}10` }}
            >
              <div className="flex items-center gap-1">
                <span className="text-xs">{f.icon}</span>
                <span className="text-[9px] font-semibold text-white">{f.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <div className={`mt-auto pt-2`}>
        <div className={`p-2 bg-slate-800/60 border border-slate-700/40 rounded-lg transition-all duration-700 ${step >= 12 ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-[10px] text-gray-400">
            <span className="text-green-400 font-semibold">Live on Play Store</span> — offline-first financial toolkit for Indians & NRIs
          </p>
        </div>
      </div>
    </div>
  );
};

export default VittOmniUserFlow;
