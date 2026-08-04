import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const VittOmniArchitecture: React.FC = () => {
  const [step, setStep] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setStep((prev) => { if (prev >= 12) { clearInterval(timer); return prev; } return prev + 1; });
    }, 200);
    return () => clearInterval(timer);
  }, [inView]);

  const layers = [
    {
      label: 'Presentation',
      blocks: [
        { title: 'Dashboard', icon: '📊' },
        { title: '13 Calculators', icon: '🧮' },
        { title: 'AI Chat', icon: '🤖' },
        { title: 'News Feed', icon: '📰' },
        { title: 'Goals', icon: '🎯' },
      ],
      color: '#3B82F6',
      step: 1,
    },
    {
      label: 'State & Services',
      blocks: [
        { title: 'Redux Toolkit', icon: '🔄' },
        { title: 'Insights Engine', icon: '💡' },
        { title: 'Calc Engines', icon: '⚙️' },
        { title: 'Notifications', icon: '🔔' },
      ],
      color: '#A855F7',
      step: 4,
    },
    {
      label: 'Backend (Firebase)',
      blocks: [
        { title: 'Auth', icon: '🔐' },
        { title: 'Firestore', icon: '🗄️' },
        { title: 'Cloud Functions', icon: '☁️' },
        { title: 'FCM', icon: '📬' },
      ],
      color: '#10B981',
      step: 7,
    },
    {
      label: 'External APIs',
      blocks: [
        { title: 'Gemini 1.5 Flash', icon: '🧠' },
        { title: 'ExchangeRate API', icon: '💱' },
        { title: 'GNews.io', icon: '📡' },
      ],
      color: '#F59E0B',
      step: 10,
    },
  ];

  return (
    <div ref={ref} className="w-full h-full p-3 sm:p-4 flex flex-col justify-between overflow-hidden">
      {/* Title */}
      <div className={`mb-2 transition-all duration-500 ${step >= 0 ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-sm font-bold text-white">Technical Architecture</h3>
        <p className="text-[10px] text-gray-500">React Native + Firebase + Gemini AI</p>
      </div>

      {/* Layers */}
      {layers.map((layer, layerIdx) => (
        <div key={layerIdx} className="mb-1.5">
          <p className={`text-[9px] font-medium uppercase tracking-wider mb-1 transition-opacity duration-400 ${step >= layer.step ? 'opacity-100' : 'opacity-0'}`} style={{ color: layer.color }}>
            {layer.label}
          </p>
          <div className="flex flex-wrap items-center gap-y-1">
            {layer.blocks.map((block, i) => (
              <React.Fragment key={i}>
                <div
                  className={`rounded-lg border px-2 py-1.5 transition-all duration-500 ${step >= layer.step + i ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${(layer.step + i) * 100}ms`, borderColor: `${layer.color}50`, backgroundColor: `${layer.color}10` }}
                >
                  <div className="flex items-center gap-1">
                    <span className="text-xs">{block.icon}</span>
                    <span className="text-[9px] font-semibold text-white">{block.title}</span>
                  </div>
                </div>
                {i < layer.blocks.length - 1 && (
                  <span className={`text-xs mx-0.5 transition-opacity duration-300 ${step >= layer.step + i + 1 ? 'opacity-100' : 'opacity-0'}`} style={{ color: `${layer.color}60` }}>→</span>
                )}
              </React.Fragment>
            ))}
          </div>
          {layerIdx < layers.length - 1 && (
            <div className={`text-center text-sm my-0.5 transition-opacity duration-300 ${step >= layer.step + 2 ? 'opacity-100' : 'opacity-0'}`} style={{ color: `${layer.color}40` }}>↓</div>
          )}
        </div>
      ))}

      {/* Caption */}
      <div className={`mt-auto p-2 bg-slate-800/60 border border-slate-700/40 rounded-lg transition-all duration-700 ${step >= 12 ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-[10px] text-gray-400">
          <span className="text-green-400 font-semibold">Live on Play Store</span> — offline-first, 13 calculators, AI advisor, cross-platform
        </p>
      </div>
    </div>
  );
};

export default VittOmniArchitecture;
