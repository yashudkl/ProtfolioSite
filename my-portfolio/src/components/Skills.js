
import React from 'react';
import './Skills.css'; 

function Skills() {
  return (
    <section id="skills">
      <h2 className='skills-title'>My Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <h3>Web Development</h3>
          <p>
            <strong>MERN:</strong> Learning MERN Stack and seeking to create awsome projects and web apps, which will enhance both my front-end and backend.
          </p>
          <p>
            <strong>HTML & CSS:</strong> The building blocks of the web! I enjoy crafting responsive and visually appealing layouts that look great on any device.
          </p>
        </div>

        <div className="skill">
          <h3>Programming Languages</h3>
          <p>
            <strong>JavaScript:</strong> The language of the web! I'm diving into its nuances to write clean and efficient code that brings my projects to life.
          </p>
          <p>
            <strong>C/C++</strong>Currently learning Object Oriented Programming (OOP) in C++ and have my basics cleared for C.
          </p>
        </div>

        <div className="skill">
          <h3>Data Structures & Algorithms</h3>
          <p>
            <strong>DSA:</strong> I’ve just started my journey into Data Structures and Algorithms. I’m excited to unlock the power of efficient problem-solving and algorithmic thinking!
          </p>
        </div>

        <div className="skill">
          <h3>Continuous Learning</h3>
          <p>
            <strong>Always Curious:</strong> I’m constantly exploring new technologies and frameworks. Whether it’s diving into a new library or picking up best practices, I thrive on learning and growing as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
