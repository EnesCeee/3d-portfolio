import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import netflixLogo from '../images/logo-2.png';
const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const profileImage = location.state?.profileImage || '/path/to/default-profile.png'; // Fallback to a default profile image

  const redirectToBrowse = () => { 
    navigate('/browse');
  }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={netflixLogo} alt="Netflix" />
        </Link>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tv-shows">TV Shows</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/new-popular">New & Popular</Link></li>
          <li><Link to="/my-list">My List</Link></li>
          <li><Link to="/browse-by-language">Browse by Language</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="profile-dropdown" onClick={redirectToBrowse}>
          <img src={profileImage} alt="Profile" className="profile-icon" />
          <span className="dropdown-arrow">▼</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
