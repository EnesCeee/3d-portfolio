import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/chris.jpg'; // Adjust the path based on your directory structure

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="Chris Smith" className="profile-pic" />
          <div>
            <h3>Chris Smith</h3>
            <p>Head of Kajima Community</p>
            <p className="date">October 24, 2024</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "It is with great pleasure that I write this reference for Enes, who worked with us as a mobile developer. His technical expertise and dedication to delivering high-quality solutions have been invaluable to our projects."</p>
          <p>During his time with us, Enes demonstrated strong technical expertise in mobile development, particularly with Flutter and React Native. His passion for problem-solving and willingness to learn new technologies greatly contributed to our team's success.</p>
          <p>💼 "Enes also showed exceptional teamwork and communication skills, effectively collaborating with cross-functional teams. His professionalism and positive attitude made him a pleasure to work with."</p>
          <p>🌟 "I have no doubt that Enes will be a valuable addition to any organization, and I wholeheartedly recommend him for any future opportunities."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
