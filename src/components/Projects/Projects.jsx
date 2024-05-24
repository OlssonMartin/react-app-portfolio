import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import './Projects.css';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
