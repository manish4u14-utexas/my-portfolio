import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ResearchPaper {
  title: string;
  abstract: string;
  date: string;
  doi: string;
  keywords: string[];
  metrics?: { label: string; value: string }[];
}

const Publications: React.FC = () => {
  const [expandedPaper, setExpandedPaper] = useState<number | null>(null);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const papers: ResearchPaper[] = [
    {
      title: 'The Persona Gap: Auditing In-Context Bias in Clinical LLMs Using Explainable AI',
      abstract: 'Research evaluating high-risk generative AI architectures in healthcare. Implemented SHAP visualizations to audit in-context bias and enforce Explainable AI (XAI) principles for responsible clinical AI deployment.',
      date: '2025',
      doi: 'https://doi.org/10.5281/zenodo.18167945',
      keywords: ['Explainable AI (XAI)', 'SHAP', 'Clinical LLMs', 'AI Governance', 'Healthcare AI', 'Bias Auditing'],
      metrics: [
        { label: 'Focus', value: 'XAI & Bias' },
        { label: 'Domain', value: 'Healthcare' },
        { label: 'Method', value: 'SHAP' },
      ],
    },
    {
      title: 'Detecting Fake News in Hindi Using Machine Learning and Deep Learning Techniques',
      abstract: 'Evaluating ML and LSTM-based approaches for detecting fake news in the Hindi language. Compares Logistic Regression, SVM, Naïve Bayes, Random Forest, and an LSTM model, with the LSTM achieving 83% accuracy and AUC 0.89.',
      date: 'January 2026',
      doi: 'https://doi.org/10.5281/zenodo.18167945',
      keywords: ['Fake News Detection', 'NLP', 'Machine Learning', 'Deep Learning', 'LSTM', 'Hindi Language'],
      metrics: [
        { label: 'Accuracy', value: '83%' },
        { label: 'AUC', value: '0.89' },
        { label: 'Model', value: 'LSTM' },
      ],
    },
  ];

  const copyDOI = async (doi: string) => {
    try { await navigator.clipboard.writeText(doi); } catch (err) { console.error(err); }
  };

  return (
    <section id="publications" className="py-16 sm:py-20 px-4 md:px-10 bg-[#0F172A] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-10 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block px-4 py-1.5 bg-sky-500/10 text-sky-400 rounded-full text-xs font-semibold border border-sky-500/20 mb-4">
            Academic Research
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            MSAI <span className="text-sky-400">Research Papers</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Published research from my M.S. in Artificial Intelligence at UT Austin — applying AI governance, NLP, and explainability to real-world problems
          </p>
        </div>

        {/* Papers */}
        <div className={`space-y-4 transition-all duration-700 ease-out delay-200 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {papers.map((paper, index) => (
            <div
              key={index}
              className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-5 hover:border-slate-600/60 transition-all duration-300 card-hover"
            >
              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">
                {paper.title}
              </h3>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3 text-sm">
                <span className="text-sky-400 font-medium">Manish Chaudhari</span>
                <span className="text-gray-600">•</span>
                <span className="text-gray-400 text-xs">UT Austin MSAI • {paper.date}</span>
              </div>

              {/* Metrics */}
              {paper.metrics && (
                <div className="flex gap-3 mb-3">
                  {paper.metrics.map((m, i) => (
                    <div key={i} className="bg-sky-500/10 border border-sky-500/20 rounded-lg px-2.5 py-1.5 text-center">
                      <div className="text-sky-400 font-bold text-sm">{m.value}</div>
                      <div className="text-gray-500 text-[10px]">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <a
                  href={paper.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded-lg text-xs font-medium hover:bg-sky-500/30 transition-colors"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View on Zenodo
                </a>
                <button
                  onClick={() => copyDOI(paper.doi)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-700/50 text-gray-300 border border-slate-600/50 rounded-lg text-xs font-medium hover:bg-slate-700 transition-colors"
                >
                  Copy DOI
                </button>
                <button
                  onClick={() => setExpandedPaper(expandedPaper === index ? null : index)}
                  className="text-sky-400/80 hover:text-sky-300 text-xs font-medium transition-colors"
                >
                  {expandedPaper === index ? 'Hide Details' : 'Show Abstract'}
                </button>
              </div>

              {/* Expandable Abstract */}
              <div className={`overflow-hidden transition-all duration-400 ease-in-out ${expandedPaper === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-3 border-t border-slate-700/50">
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{paper.abstract}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {paper.keywords.map((kw, idx) => (
                      <span key={idx} className="tech-pill">{kw}</span>
                    ))}
                  </div>
                </div>
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

export default Publications;
