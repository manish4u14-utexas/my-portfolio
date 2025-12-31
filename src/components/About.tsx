import React from 'react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  {/*const { ref: listRef, inView: listInView } = useInView*/}
  const { ref: listRef,inView: listInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 300, // Delay for the list to appear after the main text
  });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-4 md:px-10 bg-white text-slate-800 overflow-hidden" 
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          className={`text-4xl font-bold text-center mb-12 text-sky-600 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          About Me
        </h2>
        <div className={`text-lg leading-relaxed space-y-6 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-left pl-4 md:pl-6">
            I am an <strong className="text-sky-700">AI Solution Designer & Architect</strong> with over <strong className="text-sky-700">10 years of experience</strong> spearheading technical business transformations.
            My career is defined by bridging the gap between complex business requirements and <strong className="text-sky-700">production-ready Generative AI solutions</strong>. 
            Currently, I am advancing my technical depth through an <strong className="text-sky-700">M.S. in Artificial Intelligence at the University of Texas at Austin</strong>, focusing on <strong>LLMs, Agentic AI, and Deep Learning</strong>.
          </p>
          <p className="text-left pl-4 md:pl-6">
            I don't just analyze workflows; I <strong className="text-sky-700">automate them</strong> using a <strong>"vibe coding" approach</strong>—leveraging cutting-edge tools like <strong>GitHub Copilot, Amazon Q, and Cursor</strong> to accelerate development velocity. 
            My mission is to transform traditional enterprise processes into <strong className="text-sky-700">intelligent, self-optimizing systems</strong>.
          </p>
          <p className="text-left pl-4 md:pl-6">
            Expert in <strong>Web application development and API integration</strong>, <strong>Salesforce CRM optimization</strong>, and <strong>Heroku cloud management</strong>, consistently enhancing <strong className="text-green-600">operational efficiency and user experience</strong> for consumer and provider-facing web applications. 
            A collaborative leader proficient in <strong>Agile methodologies</strong>.
          </p>
        </div>
                {/* New AI Impacts Section */}
        <div 
          className={`mt-12 pt-8 border-t border-slate-300 transition-all duration-700 ease-out ${listInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="text-2xl font-semibold mb-6 text-sky-600 flex items-center">
            <span className="mr-2">🚀</span>Signature AI Impacts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-gray-700 pl-4 md:pl-6">
            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-lg border-l-4 border-sky-500">
                <h4 className="font-bold text-sky-700 mb-3 text-base">Enterprise AI Documentation Architect</h4>
                <p className="text-sm mb-2">
                  Architected a web application using <strong>Azure OpenAI (GPT-4)</strong> and <strong>Flask</strong> that automates the generation of user stories and test cases.
                </p>
                <p className="text-sm text-green-700 font-medium">
                  <strong>Impact:</strong> Reduced manual documentation time by <strong>85%</strong> (7 hours down to 1) with a projected annual cost savings of <strong>$200,000+</strong>.
                </p>
              </div>
              
              <div className="bg-slate-50 p-5 rounded-lg border-l-4 border-sky-500">
                <h4 className="font-bold text-sky-700 mb-3 text-base">AI-Driven Reporting & Compliance</h4>
                <p className="text-sm mb-2">
                  Engineered a <strong>Power Automate + AI Builder</strong> solution to synthesize weekly email communications into structured, week-stamped project summaries.
                </p>
                <p className="text-sm text-green-700 font-medium">
                  <strong>Impact:</strong> Eliminated manual status tracking and created a traceable <strong>audit trail</strong> for project evidence.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-lg border-l-4 border-sky-500">
                <h4 className="font-bold text-sky-700 mb-3 text-base">Intelligent Support Automation Lead</h4>
                <p className="text-sm mb-2">
                  Developed an end-to-end support triage pipeline for the <strong>Doctor Locator platform</strong> using the <strong>GPT-5 API</strong> and <strong>Power Automate</strong>.
                </p>
                <p className="text-sm text-green-700 font-medium">
                  <strong>Impact:</strong> Automated request classification <strong>(Region/Issue Type)</strong> for a global distribution list, ensuring processing within <strong>1–2 minutes</strong> and providing real-time dashboard analytics.
                </p>
              </div>
              
              <div className="bg-slate-50 p-5 rounded-lg border-l-4 border-sky-500">
                <h4 className="font-bold text-sky-700 mb-3 text-base">Deep Learning Research (NLP)</h4>
                <p className="text-sm mb-2">
                  Authored research on <strong>Hindi Fake News Detection</strong> utilizing <strong>LSTM Deep Learning</strong> networks.
                </p>
                <p className="text-sm text-green-700 font-medium">
                  <strong>Impact:</strong> Achieved <strong>83.0% accuracy (0.89 AUC)</strong>, significantly outperforming traditional Machine Learning models <strong>(SVM/Logistic Regression)</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Current AI Tech Stack Section */}
        <div 
          ref={listRef}
          className={`mt-12 pt-8 border-t border-slate-300 transition-all duration-700 ease-out ${listInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="text-2xl font-semibold mb-6 text-sky-600 flex items-center">
            <span className="mr-2">🛠️</span>Current AI Tech Stack
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-gray-700 pl-4 md:pl-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sky-700 mb-2 flex items-center">
                  <span className="text-sky-600 mr-2">•</span>Models & Frameworks
                </h4>
                <p className="text-sm ml-4">Azure OpenAI (GPT-4/3.5), Agentic AI, LSTM, NLP (Tokenization, TF-IDF)</p>
              </div>
              <div>
                <h4 className="font-semibold text-sky-700 mb-2 flex items-center">
                  <span className="text-sky-600 mr-2">•</span>Low-Code & Automation
                </h4>
                <p className="text-sm ml-4">Power Automate, Power Apps, AI Builder, Dataverse, SharePoint</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sky-700 mb-2 flex items-center">
                  <span className="text-sky-600 mr-2">•</span>Pro-Code & Scripting
                </h4>
                <p className="text-sm ml-4">Python (Pandas, NumPy, Scikit-learn), Flask, Bash, SQL</p>
              </div>
              <div>
                <h4 className="font-semibold text-sky-700 mb-2 flex items-center">
                  <span className="text-sky-600 mr-2">•</span>Observability & Agile
                </h4>
                <p className="text-sm ml-4">New Relic, Splunk, Kibana, JIRA Automation, Atlassian AI</p>
              </div>
            </div>
          </div>
        </div>

        {/*<div 
          ref={listRef}
          className={`mt-12 pt-8 border-t border-slate-300 transition-all duration-700 ease-out ${listInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="text-2xl font-semibold mb-6 text-sky-600">Key Areas of Expertise:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700 pl-4 md:pl-6">
            {[
              "AI-Driven Business Analysis",
              "System & Workflow Automation",
              "Web App Design & API Integration",
              "Salesforce CRM Optimization",
              "Heroku Cloud Management",
              "Agile & Scrum Leadership",
              "Data Analysis & UAT Support",
              "Requirements Engineering",
              "Full Cycle Delivery",
              "Contentful Content Management"
            ].map((item, index) => (
              <li 
                key={index} 
                className={`flex items-center transition-all duration-500 ease-out ${listInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${listInView ? index * 100 : 0}ms` }}
              >
                <span className="text-sky-600 mr-3 text-xl">✔</span>{item}
              </li>
            ))}
          </ul>
        </div>*/}
      </div>
    </section>
  );
};

export default About;
