import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  if (!Array.isArray(projects)) {
    return <div>Loading projects...</div>;
  }

  return (
    <section id="projects" className="bg-gray-700 text-white p-8">
      <h2 className="text-3xl mb-4 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <div key={project.id} className="bg-gray-800 p-4 rounded shadow-lg">
            <h3 className="text-xl mb-2">{project.name}</h3>
            <p className="mb-2">{project.description}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
