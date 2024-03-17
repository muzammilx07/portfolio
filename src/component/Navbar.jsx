import React from 'react';
import { Link } from "react-router-dom";
import './css/Navbar.css';

const Navbar = () => {
  return (
    <div className="container">
    <div className="side-data">
        data
    </div>
    <div className="right-data">
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">Logo</Link>
        <div className="navbar-links">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    </div>
    </div>
  );
}

export default Navbar;

