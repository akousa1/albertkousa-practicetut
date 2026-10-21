import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Albert Kousa</h1>
        <h2>Software Engineer</h2>
        <div className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </header>
  );
}

export default Header;