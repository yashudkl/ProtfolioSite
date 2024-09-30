import React from 'react';
import './About.css';
const About = () => {
  return (
    <section id="about" className="p-4">
<img 
className="profile-image" src="/images/my-image.jpg" alt="me" />

      <h2 className="text-3xl font-bold mb-2">Hello! I’m Yashwant,</h2>
      <p> 
A budding developer passionate about web development and currently learning web development. I am learning about front-end technologies such as react as well as dedicated to improving backend skills.

This is a personal website to showcase my projects and share my journey in programming. I’m also starting to learn Data Structures and Algorithms (DSAs), as I believe they are fundamental to becoming a proficient developer. Although I'm just beginning this journey, I’m eager to tackle the challenges they present.

I believe that building real-world applications is the best way to learn, and I’m excited to explore new concepts and improve my coding abilities. Feel free to reach out if you’d like to connect, collaborate, or share ideas!
</p>
    </section>
  );
};

export default About;
