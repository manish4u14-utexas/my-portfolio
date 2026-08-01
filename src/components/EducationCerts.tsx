import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const EducationCerts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications'>('education');
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: 'M.S. in Artificial Intelligence',
      institution: 'University of Texas at Austin',
      period: 'Aug 2024 – Expected Jul 2026',
      status: 'In Progress',
      color: '#3B82F6',
      highlights: ['Deep Learning, NLP, Agentic AI', 'Published research on clinical LLM bias'],
    },
    {
      degree: 'B.E. in Computer Science',
      institution: 'SLIET, Longowal, Punjab',
      period: '2012',
      status: 'Completed',
      color: '#10B981',
      highlights: ['Software engineering fundamentals', 'Data structures & algorithms'],
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'SLIET, Longowal, Punjab',
      period: '2009',
      status: 'Completed',
      color: '#8B5CF6',
      highlights: ['Programming fundamentals', 'System administration'],
    },
  ];

  const certifications = [
    { title: 'Deep Learning', issuer: 'UT Austin', image: '/my-portfolio/certificates/Deep Learning.jpg', link: 'https://badgr.com/public/assertions/u5QxOdnzRYy6CYi69UZVUQ' },
    { title: 'Advanced Deep Learning', issuer: 'UT Austin', image: '/my-portfolio/certificates/ADL.jpg', link: 'https://badgr.com/public/assertions/8sgFgi0rQo-pSedtsLuZ9Q' },
    { title: 'Ethics in AI', issuer: 'UT Austin', image: '/my-portfolio/certificates/Ethics in AI.jpg', link: 'https://badgr.com/public/assertions/J0vFAk1JRJSf33qItyXlSg' },
    { title: 'Reinforcement Learning', issuer: 'UT Austin', image: '/my-portfolio/certificates/RL.jpg', link: 'https://utexas.badgr.com/public/assertions/_Trf_exiSkeuRIvwa2zq7g' },
    { title: 'PCEP (Python)', issuer: 'Python Institute', image: '/my-portfolio/certificates/PCEP.jpg', link: 'https://verify.openedg.org/?id=iZbd.EdJr.cjY1' },
    { title: 'AI for Product Mgmt', issuer: 'Pendo', image: '/my-portfolio/certificates/AIPM.jpg', link: 'https://www.credly.com/badges/5884cfe2-dc9b-4f27-bc5c-9ec9a7118cc0/linked_in_profi' },
    { title: 'Power Platform', issuer: 'Microsoft', image: '/my-portfolio/certificates/Power platform.jpg', link: 'https://www.credly.com/badges/a188fdf8-cd13-4eea-8ac8-b3c2ca419488/' },
    { title: 'JIRA Automation', issuer: 'Atlassian', image: '/my-portfolio/certificates/JIRA Automation.jpg', link: 'https://university.atlassian.com/student/award/arcaft2tezPFZhBUPexhjBxs' },
    { title: 'JQL for Admin', issuer: 'Atlassian', image: '/my-portfolio/certificates/JQL.jpg', link: 'https://university.atlassian.com/student/award/yP4wzbvA63CYcpfB1tocwBij' },
    { title: 'PSM I (Scrum Master)', issuer: 'Scrum.org', image: '/my-portfolio/certificates/PSM.jpg', link: 'https://www.credly.com/badges/83097d41-f796-4735-bb9a-e99c8b95aeb5' },
    { title: 'PSPO I & II', issuer: 'Scrum.org', image: '/my-portfolio/certificates/PSPO 2.jpg', link: 'https://www.credly.com/badges/c11ccf7e-e601-443f-9e5b-32fceeddea2f' },
  ];

  return (
    <section id="education" className="py-16 sm:py-20 px-4 md:px-10 bg-[#0F172A] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-8 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block px-4 py-1.5 bg-sky-500/10 text-sky-400 rounded-full text-xs font-semibold border border-sky-500/20 mb-4">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Education & <span className="text-sky-400">Certifications</span>
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className={`flex justify-center mb-8 transition-all duration-700 ease-out delay-200 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex bg-slate-800/60 border border-slate-700/50 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'education'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              🎓 Education
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'certifications'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              📜 Certifications ({certifications.length})
            </button>
          </div>
        </div>

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className={`space-y-4 transition-all duration-500 ${sectionInView ? 'opacity-100' : 'opacity-0'}`}>
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-5 hover:border-slate-600/60 transition-all duration-300 card-hover"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{edu.degree}</h3>
                    <p className="text-sky-400 text-sm font-medium">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-xs">{edu.period}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        edu.status === 'In Progress'
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : 'bg-slate-700/50 text-gray-400 border border-slate-600/30'
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {edu.highlights.map((h, idx) => (
                    <span key={idx} className="text-gray-400 text-xs flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-sky-400" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Tab - Flip Cards */}
        {activeTab === 'certifications' && (
          <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 transition-all duration-500 ${sectionInView ? 'opacity-100' : 'opacity-0'}`}>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="perspective-1000 h-52 sm:h-56 cursor-pointer"
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
              >
                <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${flippedCard === index ? 'rotate-y-180' : ''}`}>
                  {/* Front */}
                  <div className="absolute w-full h-full backface-hidden bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-sky-500/30 transition-colors">
                    <h4 className="text-sm font-bold text-white mb-1.5 leading-tight">{cert.title}</h4>
                    <p className="text-xs text-gray-500 mb-3">{cert.issuer}</p>
                    <div className="flex flex-col gap-2 w-full">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-1 px-3 py-1.5 bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded-lg text-xs font-medium hover:bg-sky-500/30 transition-colors"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Verify Credential
                      </a>
                      <span className="text-xs text-gray-600">Tap card to see certificate</span>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-slate-800 border border-slate-700/50 rounded-xl overflow-hidden flex flex-col">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="flex-1 w-full object-cover object-top"
                    />
                    <div className="flex">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 text-center py-2.5 bg-sky-500/20 text-sky-300 text-xs font-semibold hover:bg-sky-500/30 transition-colors border-t border-slate-700/50"
                      >
                        🔗 Verify Credential ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Section divider */}
      <div className="section-divider mt-16 max-w-4xl mx-auto" />
    </section>
  );
};

export default EducationCerts;
