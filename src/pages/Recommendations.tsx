import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/chris.jpg';

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="Yunus Yılmaz" className="profile-pic" />
          <div>
            <h3>Yunus Yılmaz</h3>
            <p>CEO & Founder @ Incursor Technology</p>
            <p className="date">March 18, 2024</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "Working with Enes has been an exceptional experience. His technical skills and dedication to delivering quality solutions have made significant contributions to our projects."</p>
          <p>Throughout our collaboration, Enes has demonstrated strong technical expertise, particularly in React and mobile development. His passion for problem-solving and eagerness to learn new technologies have been instrumental in our team's success.</p>
          <p>💼 "Enes also showed excellent teamwork and communication skills, effectively collaborating with different teams. His professionalism and positive attitude made working with him a pleasure."</p>
          <p>🌟 "I have no doubt that Enes will bring valuable contributions to any organization, and I wholeheartedly recommend him for future opportunities."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
