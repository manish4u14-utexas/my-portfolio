import React from 'react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  {/*const { ref: listRef, inView: listInView } = useInView*/}
  const { inView: listInView } = useInView({
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
            I am an AI Solution Designer & Architect with over 10 years of experience spearheading technical business transformations.
            My career is defined by bridging the gap between complex business requirements and production-ready Generative AI solutions. 
            Currently, I am advancing my technical depth through an M.S. in Artificial Intelligence at the University of Texas at Austin, focusing on LLMs, Agentic AI, and Deep Learning.
          </p>
          <p className="text-left pl-4 md:pl-6">
            I don't just analyze workflows; I automate them using a "vibe coding" approach—leveraging cutting-edge tools like GitHub Copilot, Amazon Q, and Cursor to accelerate development velocity. 
            My mission is to transform traditional enterprise processes into intelligent, self-optimizing systems.
          </p>
          <p className="text-left pl-4 md:pl-6">
            Expert in Web application development and API integration, Salesforce CRM optimization, and Heroku cloud management, consistently enhancing operational efficiency and user experience for consumer and provider-facing web applications. 
            A collaborative leader proficient in Agile methodologies.
          </p>
           <p className="text-left pl-4 md:pl-6">
            "Transitioning from traditional business analysis to AI-driven solution design while bridging technical and business stakeholders."
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
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-semibold text-sky-700 mb-2">AI Documentation Architect</h4>
                <p className="text-sm">Designed a full-stack web application using Azure OpenAI that reduced technical documentation time by 85%, resulting in $200,000+ in annual cost savings.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-semibold text-sky-700 mb-2">Deep Learning Researcher</h4>
                <p className="text-sm">Developed an LSTM model achieving 83% accuracy and an 0.89 AUC for Hindi fake news detection, outperforming traditional machine learning models.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-semibold text-sky-700 mb-2">Automation Lead</h4>
                <p className="text-sm">Engineered an end-to-end support triage system using the GPT-5 API and Power Automate, reducing email processing time to just 1–2 minutes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Current AI Tech Stack Section */}
        <div 
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
