import React from 'react';
import './Jumbo.css';

const Jumbo = () => {
  return (
    <div>
      <div className="text-container">
        <h1>HI, I'M OSCAR WIBERG.</h1>
        <p>
          I'M A JUNIOR DEVELOPER FROM STOCKHOLM. TAKE A LOOK AT MY RESUME AND MY
          EARLIER PROJECTS.
        </p>
      </div>
      <img className="img-ny" src="/images/ny.jpg" alt="new-york"></img>
    </div>
  );
};

export default Jumbo;
