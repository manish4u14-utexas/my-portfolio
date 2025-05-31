import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CertificationProps {
  title: string;
  issuer: string;
  certificateImage?: string;
  verificationLink?: string;
  index: number;
}

const CertificationCard: React.FC<CertificationProps> = ({ 
  title, 
  issuer,
  certificateImage,
  verificationLink,
  index 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleVerificationClick = (e: React.MouseEvent) => {
    if (verificationLink) {
      e.stopPropagation(); // Prevent card from flipping back
      window.open(verificationLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      ref={ref}
      className={`h-64 w-full perspective-1000 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${inView ? index * 100 : 0}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of Card */}
        <div 
          className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer"
          onClick={handleFlip}
        >
          <h3 className="text-xl font-bold text-sky-600 mb-3 text-center">{title}</h3>
          <p className="text-gray-700 font-medium text-center">{issuer}</p>
          
          {/* Hover message - only shows when hovered and not flipped */}
          <div className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-lg transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-white text-lg font-semibold">Click to see the certificate</p>
          </div>
        </div>
        
        {/* Back of Card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
          {certificateImage ? (
            <img 
              src={certificateImage} 
              alt={`${title} Certificate`} 
              className="max-w-full max-h-full object-contain rounded shadow-md cursor-pointer"
              onClick={handleFlip}
            />
          ) : (
            <div className="text-gray-500 italic">Certificate image not available</div>
          )}
          
          {/* Verification button - always visible when flipped */}
          {verificationLink && (
            <button
              onClick={handleVerificationClick}
              className="mt-4 bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md text-sm transition-colors duration-200 z-10"
            >
              Verify Certificate
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: "Deep Learning",
      issuer: "University of Texas at Austin (Course Work )",
      certificateImage: "/my-portfolio/certificates/Deep Learning.jpg",
      verificationLink: "https://badgr.com/public/assertions/u5QxOdnzRYy6CYi69UZVUQ"
    },
    {
      title: "Certified Python Programmer (PCEP)",
      issuer: "Python Institute",
      certificateImage: "/my-portfolio/certificates/PCEP.jpg",
      verificationLink: "https://verify.openedg.org/?id=iZbd.EdJr.cjY1"
    },
    {
      title: "AI For Product Management (AIPM)",
      issuer: "Pendo",
      certificateImage: "/my-portfolio/certificates/AIPM.jpg",
      verificationLink: "https://www.credly.com/badges/5884cfe2-dc9b-4f27-bc5c-9ec9a7118cc0/linked_in_profi"
    },
    {
      title: "Power Platform",
      issuer: "Microsoft",
      certificateImage: "/my-portfolio/certificates/Power platform.jpg",
      verificationLink: "https://www.credly.com/badges/a188fdf8-cd13-4eea-8ac8-b3c2ca419488/"
    },
    {
      title: "JIRA Automation for Admin",
      issuer: "Atlassian",
      certificateImage: "/my-portfolio/certificates/JIRA Automation.jpg",
      verificationLink: "https://university.atlassian.com/student/award/arcaft2tezPFZhBUPexhjBxs"
    },
    {
      title: "JQL for Admin",
      issuer: "Atlassian",
      certificateImage: "/my-portfolio/certificates/JQL.jpg",
      verificationLink: "https://university.atlassian.com/student/award/yP4wzbvA63CYcpfB1tocwBij"
    },
    {
      title: "Professional Scrum Master (PSM I)",
      issuer: "Scrum.org",
      certificateImage: "/my-portfolio/certificates/PSM.jpg",
      verificationLink: "https://www.credly.com/badges/83097d41-f796-4735-bb9a-e99c8b95aeb5"
    },
    {
      title: "Professional Scrum Product Owner (PSPO I & II)",
      issuer: "Scrum.org",
      certificateImage: "/my-portfolio/certificates/PSPO 2.jpg",
      verificationLink: "https://www.credly.com/badges/c11ccf7e-e601-443f-9e5b-32fceeddea2f"
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 md:px-10 bg-white text-slate-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={sectionRef}
          className={`text-4xl font-bold text-center mb-16 text-sky-600 transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Certifications & Professional Development
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard 
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              certificateImage={cert.certificateImage}
              verificationLink={cert.verificationLink}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
