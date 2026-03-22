import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Achievements />
      <Education />
      <Contact />
    </div>
  );
}

export default App;