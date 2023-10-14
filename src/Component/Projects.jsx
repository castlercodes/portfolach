import React from 'react';

function Projects() {
  const handleClick = (url) => {
    window.location.replace(url); 
  };

  return (
    <div className="education" style={{ backgroundColor: 'lightgreen', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }}>
        <div
          onClick={() => {
            handleClick('https://github.com/AchintyaSingh0220/TechnoVIT_Hackathon');
          }}

          className='projectlink'
        >
          TrackItLive
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div
          onClick={() => {
            handleClick('https://github.com/AchintyaSingh0220/Calculator_WebApp');
          }}

          className='projectlink'
        >
          Calculator
        </div>
      </div>
    </div>
  );
}

export default Projects;
