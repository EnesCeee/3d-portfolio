import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar';
import './Layout.css';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
