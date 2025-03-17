import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';

const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />
}

const mockCertifications = [
  {
    title: "React - The Complete Guide 2024",
    issuer: "Udemy",
    issuedDate: "March 2024",
    link: "https://www.udemy.com/certificate/UC-123456",
    iconName: "udemy"
  },
  {
    title: "Flutter & Dart - The Complete Guide",
    issuer: "Udemy",
    issuedDate: "February 2024",
    link: "https://www.udemy.com/certificate/UC-789012",
    iconName: "udemy"
  },
  {
    title: "AWS Certified Developer",
    issuer: "Coursera",
    issuedDate: "January 2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/ABC123",
    iconName: "coursera"
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    issuedDate: "December 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/XYZ789",
    iconName: "coursera"
  },
  {
    title: "Advanced Software Architecture",
    issuer: "IEEE",
    issuedDate: "November 2023",
    link: "https://www.ieee.org/certificates/DEF456",
    iconName: "ieee"
  },
  {
    title: "Computer Engineering",
    issuer: "Sakarya University",
    issuedDate: "June 2023",
    link: "https://www.sau.edu.tr",
    iconName: "university"
  }
];

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {mockCertifications.map((cert, index) => (
          <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="certification-content">
              <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
