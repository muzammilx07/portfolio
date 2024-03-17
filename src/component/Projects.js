import React from 'react';
import projectData from './projectData.json'; // Assuming you have a JSON file named projectData.json

function Projects() {
  // Function to render project cards
  const renderProjectCards = () => {
    return projectData.map((project, index) => (
      <div className="card" key={index}>
        <img src={project.image} alt={project.name} />
        <div className="text">
          <h4>Project Name: {project.name}</h4>
          <p>{project.description}</p>
        </div>
        <button className="demo" onClick={() => window.location.href = project['preview-link']}>Preview</button>
        <button className='link' onClick={() => window.location.href = project['github-link']}>Github</button>
      </div>
    ));
  };

  return (
    <div className='main'>
      <h1>Projects</h1>
      <div className="card-container">
        {renderProjectCards()}
      </div>
    </div>
  );
}

export default Projects;
