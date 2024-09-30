import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
        <a href="#about" className="mx-2">About</a>
        <a href="#skills" className="mx-2">Skills</a>
        <a href="#projects" className="mx-2">Projects</a>
        <a href="#contact" className="mx-2">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
