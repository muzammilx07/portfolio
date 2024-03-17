import React from 'react';
import './css/About.css'; 

const About = () => {
  return (
    <div className="main">
      <h1>About Me</h1>
      <div className="description">
        <p>💡 I like to explore new technologies and develop software solutions and quick hacks.
🎓 I'm currently studying Computer Science and AI/ML.
🌱 I'm on track for learning more about MERN technologies and Artificial Intelligence.
💬 Feel free to reach out to me for pro bono consulting and volunteering, or just for some interesting discussion.
✉️ You can shoot me an email at muzammilxshareef@gmail.com! I'll try to respond as soon as I can.
📄 Please have a look at my Résumé for more details about me. I'm open to feedback and suggestions!</p>
      </div>
      <h3>Primary Focus</h3>
      <div className="focus-list">
        <div className="focus-card">
          <h4>Web Design & Development</h4>
          <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
        </div>
        <div className="focus-card">
          <h4>Development Solutions</h4>
          <p>Utilizing JavaScript frameworks like React, Node, Next, Vue, and more to build interactive web applications.</p>
        </div>
      </div>
      <h3>Skills</h3>
      <div className="skills-list">
        <div className="card">
          <img src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" alt="" />
        </div>
        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="" />
        </div>
        <div className="card">
          <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />
        </div>
        <div className="card">
          <img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
