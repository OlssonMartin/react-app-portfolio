import React, { useContext, useState } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const [selectedProject, setSelectedProject] = useState(null);

  if (!Array.isArray(projects)) {
    return <div>Loading projects...</div>;
  }

  if (selectedProject) {
    return <ProjectDetails project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <section id="projects" className="bg-gray-700 text-white p-8">
      <h2 className="text-3xl mb-4 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <div key={project.id} className="bg-gray-800 p-4 rounded shadow-lg">
            <h3 className="text-xl mb-2">{project.name}</h3>
            <p className="mb-2">{project.description}</p>
            <button onClick={() => setSelectedProject(project)} className="text-blue-400 hover:underline">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
