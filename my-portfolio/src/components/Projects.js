// Projects.js
import './Projects.css';

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {/* First Project Card */}
        <div className="project-card">
          <img src="/images/upamanyu-academy.jpg" alt="Project 1" />
          <h3>Upamanyu Academy</h3>
          <p>
            An educational website covering video lectures and live sessions especially for SEE, NEB boards, and entrance appearing students. 
            This project is not completed and is under development.
          </p>
          <div className="project-links">
            <a href="https://github.com/yashudkl/Upamanyu-Academyk" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="http://www.mysitemyway.com/underconstruction" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        {/* Second Project Card */}
        <div className="project-card">
          <img src="data:image/png;base64,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" alt="Project 2" />
          <h3>Discord Fitness Bot</h3>
          <p>
            Fitness bot that keeps track of your workouts and diet, reminding you to stay on track.
          </p>
          <div className="project-links">
            <a href="https://github.com/yashudkl/Fitness-Bot" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="http://www.example.com/live-demo" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
