import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out through any of the platforms below:</p>
      <ul className="contact-list">
        <li>
          <a href="mailto:yashudkl@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>yashudkl@gmail.com
          </a>
        </li>
        <li>
          <a href="https://github.com/yashudkl" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yashwant-dhakal-225060327/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
