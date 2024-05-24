import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

const About = () => {
  const { about } = useContext(PortfolioContext);

  return (
    <section id="about" className="bg-gray-700 text-white p-8">
      <h2 className="text-3xl mb-4 text-center">About me</h2>
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
        <div className="lg:w-1/2 w-full">
          <p className="mb-4">{about.text}</p>
        </div>
        <div className="lg:w-1/2 w-full flex flex-wrap gap-2 justify-center lg:justify-end">
          {about.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm hover:bg-blue-700 transition duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
