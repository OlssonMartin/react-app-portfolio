import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import './About.css';

const About = () => {
  const { about } = useContext(PortfolioContext);

  return (
    <section id="about" className="about">
      <h2>About me</h2>
      <div className="about-content">
        <p>{about.text}</p>
        <ul>
          {about.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
