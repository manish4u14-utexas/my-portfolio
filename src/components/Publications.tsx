import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface PublicationProps {
  title: string;
  authors: string;
  venue: string;
  date: string;
  doi: string;
  abstract: string;
  keywords: string[];
  index: number;
}

const PublicationCard: React.FC<PublicationProps> = ({
  title,
  authors,
  venue,
  date,
  doi,
  abstract,
  keywords,
  index
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDOIClick = () => {
    window.open(doi, '_blank', 'noopener,noreferrer');
  };

  const copyDOI = async () => {
    try {
      await navigator.clipboard.writeText(doi);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy DOI:', err);
    }
  };

  return (
    <div 
      ref={ref}
      className={`bg-white rounded-lg shadow-lg border border-slate-200 p-6 transition-all duration-700 ease-out hover:shadow-xl ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${inView ? index * 200 : 0}ms` }}
    >
      {/* Publication Title */}
      <h3 className="text-xl font-bold text-sky-700 mb-3 leading-tight">
        {title}
      </h3>
      
      {/* Authors and Venue */}
      <div className="mb-4 space-y-2">
        <p className="text-gray-700 font-medium">{authors}</p>
        <p className="text-gray-600 italic">{venue}, {date}</p>
      </div>
      
      {/* DOI and Actions */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <button
          onClick={handleDOIClick}
          className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View Paper
        </button>
        
        <button
          onClick={copyDOI}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy DOI
        </button>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sky-600 hover:text-sky-700 text-sm font-medium transition-colors duration-200"
        >
          {isExpanded ? 'Show Less' : 'Show Abstract'}
        </button>
      </div>
      
      {/* Expandable Abstract */}
      {isExpanded && (
        <div className="border-t border-gray-200 pt-4 space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Abstract</h4>
            <p className="text-gray-700 text-sm leading-relaxed">{abstract}</p>
          </div>
          
          {/* Keywords */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Keywords</h4>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Publications: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const publications = [
    {
      title: "Detecting Fake News in Hindi Using Machine Learning and Deep Learning Techniques",
      authors: "Manish Chaudhari",
      venue: "Zenodo Preprint",
      date: "January 2026",
      doi: "https://doi.org/10.5281/zenodo.18167945",
      abstract: "A research preprint evaluating ML and LSTM-based approaches for detecting fake news in the Hindi language. The study compares Logistic Regression, SVM, Naïve Bayes, Random Forest, and an LSTM model, with the LSTM achieving 83% accuracy and AUC 0.89.",
      keywords: ["Fake News Detection", "NLP", "Machine Learning", "Deep Learning", "LSTM", "Hindi Language Processing"]
    }
  ];

  return (
    <section id="publications" className="py-20 px-4 md:px-10 bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 
          ref={sectionRef}
          className={`text-4xl font-bold text-center mb-4 text-sky-600 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Publications & Research
        </h2>
        
        <p 
          className={`text-center text-gray-600 mb-12 max-w-2xl mx-auto transition-all duration-700 ease-out delay-200 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Contributing to the advancement of AI and machine learning through research and academic publications
        </p>
        
        <div className="space-y-8">
          {publications.map((publication, index) => (
            <PublicationCard 
              key={index}
              title={publication.title}
              authors={publication.authors}
              venue={publication.venue}
              date={publication.date}
              doi={publication.doi}
              abstract={publication.abstract}
              keywords={publication.keywords}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;