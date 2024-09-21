import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';

const About = () => {
  const { user } = useContext(PortfolioContext);

  // Lista över färdigheter
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'API', icon: <FaJs /> }, // Du kan byta till en mer passande ikon för API
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> }
  ];

  return (
    <section id="about" className="bg-white dark:bg-darkBlue text-gray-800 dark:text-white py-16">
      <div className="max-w-4xl mx-auto px-8 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hello! I'm {user.name}, a passionate software engineer who loves building things for the web.
          </p>
          <p className="text-lg mt-4">{user.bio}</p>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="flex items-center bg-blue-500 dark:bg-lightBlue text-white dark:text-black py-2 px-4 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition duration-300"
              >
                {skill.icon} <span className="ml-2">{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;