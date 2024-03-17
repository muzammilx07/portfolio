import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Certificates from './component/Certificates.js';
import About from './component/About.js'; 
import Contact from './component/Contact.js';
import Projects from './component/Projects.js';
import './App.css';
import './data.css';
import './navbar.css'

function Template() {
  return (
    <div className="container">
      <div className="side-data">
        <div className="image-container">
          <img src="https://avatars.githubusercontent.com/u/130690928?v=4" alt="" />
        </div>
        <h2 className="name">Muzammil</h2>
        <p className="address">India</p>
        <div className="sociallinks">
          <a href="" className="github-link"><span>G</span></a>
          <a href="" className="LinkedIn-link"><span>I</span></a>
        </div>
      </div>
      <div className="right-data">
        <nav className="navbar">
            <div className="navbar-links">
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/certificates">Certificates</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/project">Project</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="about" element={<About />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Projects/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
