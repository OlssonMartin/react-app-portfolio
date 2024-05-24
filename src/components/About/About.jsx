import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

const About = () => {
  const { about } = useContext(PortfolioContext);

  return (
    <section id="about" className="bg-gray-700 text-white p-8">
      <h2 className="text-3xl mb-4 text-center">About me</h2>
      <div className="max-w-4xl mx-auto">
        <p className="mb-4">{about.text}</p>
        <ul className="list-disc list-inside">
          {about.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
