import React from 'react';
import './About.css';
import TypingEffect from 'react-typing-effect';
const About = () => {
  return (
    <section id="about" className="p-4">
<img 
className="profile-image" src="/images/my-image.jpg" alt="me" />

      <h2 className="text-3xl font-bold mb-2"> <TypingEffect
          text={["Hello! I’m Yashwant,"]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={500}
          cursorColor="#000"
        /></h2>
      <p> 
 Computer Science student at Kathmandu University also a budding developer passionate about web development and currently learning it. 

 I’m also starting to learn Data Structures and Algorithms (DSAs), as I believe they are fundamental to becoming a proficient developer. Although I'm just beginning this journey, I’m eager to tackle the challenges they present.

I believe that building real-world applications is the best way to learn, and I’m excited to explore new concepts and improve my coding abilities. Feel free to reach out if you’d like to connect, collaborate, or share ideas!
</p>
    </section>
  );
};

export default About;
