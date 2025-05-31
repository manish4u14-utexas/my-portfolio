import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  certificateImage: string;
  verificationLink?: string;
  index: number;
}

const CertificationCard: React.FC<CertificationProps> = ({ 
  title, 
  issuer, 
  date, 
  description, 
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

  const handleImageClick = (e: React.MouseEvent) => {
    if (verificationLink) {
      e.stopPropagation();
      window.open(verificationLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      ref={ref}
      className={`h-96 w-full perspective-1000 cursor-pointer transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${inView ? index * 100 : 0}ms` }}
      onClick={handleFlip}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of Card */}
        <div className="absolute w-full h-full backface-hidden bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col">
          <h3 className="text-xl font-bold text-sky-600 mb-2">{title}</h3>
          <p className="text-gray-700 font-medium mb-1">{issuer}</p>
          <p className="text-gray-500 text-sm mb-4">{date}</p>
          <p className="text-gray-700 flex-grow">{description}</p>
          
          {/* Hover message - only shows when hovered and not flipped */}
          <div className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-lg transition-opacity duration-300 ${isHovered && !isFlipped ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-white text-lg font-semibold">Click to see the certificate</p>
          </div>
        </div>
        
        {/* Back of Card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
          <img 
            src={certificateImage} 
            alt={`${title} Certificate`} 
            className="max-w-full max-h-full object-contain rounded shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={handleImageClick}
          />
          
          {/* Hover message for certificate verification - only shows when hovered and flipped */}
          {verificationLink && (
            <div className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-lg transition-opacity duration-300 ${isHovered && isFlipped ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-white text-lg font-semibold">Click to validate the certificate</p>
            </div>
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
      issuer: "University of Texas at Austin (Course Work)",
      date: "",
      description: "",
      certificateImage: "/my-portfolio/certificates/Deep Learning.jpg", // Add your certificate image path here
      verificationLink: "https://badgr.com/public/assertions/u5QxOdnzRYy6CYi69UZVUQ"
    },
    {
      title: "Certified Python Programmer (PCEP)",
      issuer: "Python Institute",
      date: "",
      description: "",
      certificateImage: "/my-portfolio/certificates/PCEP.jpg", // Add your certificate image path here
      verificationLink: "https://verify.openedg.org/?id=iZbd.EdJr.cjY1"
    },
    {
      title: "AI For Product Management (AIPM)",
      issuer: "Pendo",
      date: "",
      description: "",
      certificateImage: "/my-portfolio/certificates/AIPM.jpg", // Add your certificate image path here
      verificationLink: "https://www.credly.com/badges/5884cfe2-dc9b-4f27-bc5c-9ec9a7118cc0/linked_in_profi"
    },
    {
      title: "Power Platform",
      issuer: "Microsoft",
      date: "",
      description: "",
      certificateImage: "/my-portfolio/certificates/Power platform.jpg", // Add your certificate image path here
      verificationLink: "https://www.credly.com/badges/a188fdf8-cd13-4eea-8ac8-b3c2ca419488/"
    },
    {
      title: "JIRA Automation for Admin",
      issuer: "Atlassian",
      date: "",
      description: "",
      certificateImage: "/my-portfolio/certificates/JIRA Automation.jpg", // Add your certificate image path here
      verificationLink: "https://university.atlassian.com/student/award/arcaft2tezPFZhBUPexhjBxs"
    },
    {
      title: "JQL for Admin",
      issuer: "Atlassian",
      date: "",
      description: "",
      certificateImage: "/my-portfolio/certificates/JQL.jpg", // Add your certificate image path here
      verificationLink: "https://university.atlassian.com/student/award/yP4wzbvA63CYcpfB1tocwBij"
    },
    {
      title: "Professionla Scrum Product Owner (PSPO I & II)",
      issuer: "Scrum.org",
      date: "",
      description: "",
      certificateImage: "/my-portfolio/certificates/PSPO 2.jpg", // Add your certificate image path here
      verificationLink: "https://www.credly.com/badges/c11ccf7e-e601-443f-9e5b-32fceeddea2f"
    },
    {
      title: "Professional Scrum Master I (PSM I)",
      issuer: "Scrum.org",
      date: "",
      description: "",
      certificateImage: "/my-portfolio/certificates/PSM.jpg", // Add your certificate image path here
      verificationLink: "https://www.credly.com/badges/83097d41-f796-4735-bb9a-e99c8b95aeb5"
    },

    // Add your other certifications here
    // Add more certifications as needed
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
          {certifications.map((cert, index ) => (
            <CertificationCard 
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              description={cert.description}
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
