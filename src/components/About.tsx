import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from '../hooks/useCountUp';

// Animated stat counter component
const StatCounter: React.FC<{ end: number; suffix: string; prefix?: string; label: string; icon: string; enabled: boolean; delay: number }> = ({ end, suffix, prefix = '', label, icon, enabled, delay }) => {
  const value = useCountUp({ end, suffix, prefix, enabled, duration: 2000 + delay });

  return (
    <div className="text-center group">
      <div className="glow-pulse bg-slate-800/80 border border-slate-700/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-sky-500/40 hover:bg-slate-800">
        <div className="text-2xl sm:text-3xl mb-2">{icon}</div>
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
          {value}
        </div>
        <div className="text-xs sm:text-sm text-gray-400 font-medium">{label}</div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { end: 13, suffix: '+', label: 'Years Experience', icon: '📅', delay: 0 },
    { end: 85, suffix: '%', label: 'Efficiency Gains', icon: '⚡', delay: 200 },
    { end: 200, suffix: 'K+', prefix: '$', label: 'Cost Savings', icon: '💰', delay: 400 },
    { end: 30, suffix: '+', label: 'Awards & Certs', icon: '🏆', delay: 600 },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 md:px-10 bg-[#0F172A] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-12 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block px-4 py-1.5 bg-sky-500/10 text-sky-400 rounded-full text-xs font-semibold border border-sky-500/20 mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Builder PM Who <span className="text-sky-400">Ships AI Products</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            I don't just manage backlogs — I architect GenAI workflows, prototype with code, and bridge the gap between business vision and scalable engineering execution.
          </p>
        </div>

        {/* Quick Identity Cards - 2 compact cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 transition-all duration-700 ease-out delay-200 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* What I Do */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 card-hover">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center text-lg">⚡</div>
              <h3 className="text-lg font-bold text-white">What I Do</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lead enterprise AI product strategy at <strong className="text-sky-300">Align Technology</strong>. I use Azure OpenAI, Cursor & Claude to rapidly prototype, validate feasibility, and automate documentation — cutting manual effort by 85%.
            </p>
          </div>

          {/* My Edge */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 card-hover">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-lg">🧠</div>
              <h3 className="text-lg font-bold text-white">My Edge</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pursuing <strong className="text-sky-300">M.S. in AI at UT Austin</strong> while shipping production AI products. I bring academic depth (LLMs, XAI, Deep Learning) with 13 years of enterprise execution at Microsoft & Align.
            </p>
          </div>
        </div>

        {/* Animated Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 transition-all duration-700 ease-out delay-400 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              end={stat.end}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              icon={stat.icon}
              enabled={sectionInView}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Signature Impacts - condensed into one visual row */}
        <div className={`mt-12 transition-all duration-700 ease-out delay-500 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-center text-sm font-semibold text-sky-400 uppercase tracking-wider mb-6">
            Signature AI Impacts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                title: 'GenAI Documentation Engine',
                impact: '85% time saved, $200K+ annually',
                tech: 'Azure OpenAI + Flask + JIRA API',
              },
              {
                title: 'Intelligent Support Triage',
                impact: 'Auto-classification in 1-2 min',
                tech: 'GPT APIs + Power Automate',
              },
              {
                title: 'AI-Native Prototyping',
                impact: 'Discovery-to-release acceleration',
                tech: 'Cursor + Claude + Stitch',
              },
            ].map((item, idx) => (
              <div key={idx} className="impact-box group hover:border-l-sky-400 transition-all duration-300">
                <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                <p className="text-green-400 text-xs font-medium mb-1">{item.impact}</p>
                <p className="text-gray-500 text-xs">{item.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-16 max-w-4xl mx-auto" />
    </section>
  );
};

export default About;
