import React from 'react';
import './css/Contact.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const copyEmailToClipboard = () => {
    const email = 'muzammilxshareef@gmail.com';
    toast.success('🦄 Copied!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });
  };

  return (
    <div className='main'>
        <div className="email">
            <h2>Email:</h2>
            <div className="email-field">
                <p>muzammilxshareef@gmail.com</p>
                <button onClick={copyEmailToClipboard}>Copy</button>
            </div>
        </div>
        <div className="social-media">
            <a href=""><span className='github-link'>G</span></a>
            <a href=""><span className='linkedin-link'>I</span></a>
            <a href=""><span className='twitter-link'>T</span></a>
            <a href=""><span className='inst-link'>I</span></a>
        </div>
        <ToastContainer />
    </div>
  );
}

export default Contact;
