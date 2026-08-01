import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Publications: React.FC = () => {
  const [showAbstract, setShowAbstract] = useState(false);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const publication = {
    title: "Detecting Fake News in Hindi Using Machine Learning and Deep Learning Techniques",
    authors: "Manish Chaudhari",
    venue: "Zenodo Preprint",
    date: "January 2026",
    doi: "https://doi.org/10.5281/zenodo.18167945",
    abstract: "A research preprint evaluating ML and LSTM-based approaches for detecting fake news in the Hindi language. The study compares Logistic Regression, SVM, Naïve Bayes, Random Forest, and an LSTM model, with the LSTM achieving 83% accuracy and AUC 0.89.",
    keywords: ["Fake News Detection", "NLP", "Machine Learning", "Deep Learning", "LSTM", "Hindi Language Processing"],
    metrics: { accuracy: '83%', auc: '0.89' },
  };

  const copyDOI = async () => {
    try {
      await navigator.clipboard.writeText(publication.doi);
    } catch (err) {
      console.error('Failed to copy DOI:', err);
    }
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
            Research
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Publications & <span className="text-sky-400">Research</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Contributing to AI advancement through academic research
          </p>
        </div>

        {/* Publication Card */}
        <div className={`bg-slate-800/40 border border-slate-700/40 rounded-xl p-5 sm:p-6 transition-all duration-700 ease-out delay-200 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight">
            {publication.title}
          </h3>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
            <span className="text-sky-400 font-medium">{publication.authors}</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400 italic">{publication.venue}, {publication.date}</span>
          </div>

          {/* Key metrics */}
          <div className="flex gap-4 mb-4">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2 text-center">
              <div className="text-green-400 font-bold text-lg">{publication.metrics.accuracy}</div>
              <div className="text-gray-500 text-xs">Accuracy</div>
            </div>
            <div className="bg-sky-500/10 border border-sky-500/20 rounded-lg px-3 py-2 text-center">
              <div className="text-sky-400 font-bold text-lg">{publication.metrics.auc}</div>
              <div className="text-gray-500 text-xs">AUC Score</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <a
              href={publication.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded-lg text-sm font-medium hover:bg-sky-500/30 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Paper
            </a>
            <button
              onClick={copyDOI}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-700/50 text-gray-300 border border-slate-600/50 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy DOI
            </button>
            <button
              onClick={() => setShowAbstract(!showAbstract)}
              className="text-sky-400/80 hover:text-sky-300 text-sm font-medium transition-colors"
            >
              {showAbstract ? 'Hide Abstract' : 'Show Abstract'}
            </button>
          </div>

          {/* Expandable Abstract */}
          <div className={`overflow-hidden transition-all duration-400 ease-in-out ${showAbstract ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pt-4 border-t border-slate-700/50">
              <p className="text-gray-400 text-sm leading-relaxed mb-3">{publication.abstract}</p>
              <div className="flex flex-wrap gap-1.5">
                {publication.keywords.map((kw, idx) => (
                  <span key={idx} className="tech-pill">{kw}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-16 max-w-4xl mx-auto" />
    </section>
  );
};

export default Publications;
