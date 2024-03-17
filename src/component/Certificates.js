import React from 'react';
import './css/Certificates.css';

function Certificates() {
  return (
    <div className="main">
      <h1 className="heading">Certificates</h1>
      <div className="certi-card">
        <img src="https://www.w3schools.com/react/img_cert_react.jpg" alt="" />
        <h3 className="certificate-heading">Demo React Certificate</h3>
      </div>
      <div className="certi-card">
        <img src="https://www.w3schools.com/react/img_cert_react.jpg" alt="" />
        <h3 className="certificate-heading">Demo React Certificate</h3>
      </div>
      <div className="certi-card">
        <img src="https://www.w3schools.com/react/img_cert_react.jpg" alt="" />
        <h3 className="certificate-heading">Demo React Certificate</h3>
      </div>
    </div>
  );
}

export default Certificates;
