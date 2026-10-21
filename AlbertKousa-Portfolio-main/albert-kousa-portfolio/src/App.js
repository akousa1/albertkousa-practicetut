import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;