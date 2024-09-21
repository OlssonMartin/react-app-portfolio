import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';


const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section id="projects" className="bg-lightBlue dark:bg-darkBlue text-gray-800 dark:text-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Some Things I've Built</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-lightBlue">
                    <FaGithub className="inline-block mr-2" /> GitHub
                  </a>
                  <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-lightBlue">
                    <FaExternalLinkAlt className="inline-block mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;