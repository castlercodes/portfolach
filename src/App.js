import logo from './logo.svg';
import './App.css';
import image from './image.png'
import { useState } from 'react';
import Home from './Component/Home';
import Education from './Component/Education';
import Projects from './Component/Projects';
import Contact from './Component/Contact';

function App() {
  const [currentDetail, setCurrentDetail] = useState("home");

  return (
    <div className="App">
      <div className='firstsection'>
        <div className='image'><img src={image}/></div>
        <div className='name'>Achintya Singh</div>
      </div>
      <div className='secondsection'>
        <div className='btn' onClick={() => {
          setCurrentDetail("home");
        }}>
          Home</div>
        <div className='btn' onClick={() => {
          setCurrentDetail("education");
        }}>
          Education Details
          </div>
        <div className='btn' onClick={() => {
          setCurrentDetail("projects");
        }}>
          Projects</div>
        <div className='btn' onClick={() => {
          setCurrentDetail("contact");
        }}>
          Contact Me</div>
      </div>
      {currentDetail == "home" && <Home />}
      {currentDetail == "education" && <Education />}
      {currentDetail == "projects" && <Projects />}
      {currentDetail == "contact" && <Contact />}
    </div>
  );
}

export default App;
