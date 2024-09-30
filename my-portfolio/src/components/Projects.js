import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="p-4">
      <h2 className="text-3xl font-bold mb-2">Projects</h2>
      <div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p>Details about the project...</p>
          <a href="https://github.com/yourproject" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div>
          <h3 className="text-xl font-bold">Project 2</h3>
          <p>Details about the project...</p>
          <a href="https://github.com/yourproject" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
