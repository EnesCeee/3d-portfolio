import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev } from 'react-icons/fa';

const blogs = [
  {
    title: "Flutter Mobile Development Best Practices",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@enesceylan.6699/flutter-mobile-development",
    description: "Learn best practices for Flutter mobile app development.",
  },
  {
    title: "React Native vs Flutter: A Comparison",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@enesceylan.6699/react-native-vs-flutter",
    description: "An in-depth comparison of React Native and Flutter frameworks.",
  },
  {
    title: "Getting Started with Mobile App Development",
    platform: "Dev.to",
    icon: <FaDev />,
    link: "https://dev.to/enesceylan/mobile-app-development",
    description: "A comprehensive guide to starting mobile app development.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on software development.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
