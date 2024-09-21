import React from 'react';

const ProjectDetails = ({ project }) => {
  return (
    <div>
      <h2 className="text-3xl mb-4">{project.name}</h2>
      <p className="mb-4">{project.description}</p>
      <iframe
        src={project.demo_url}
        title={project.name}
        className="w-full h-64 border-none"
        allowFullScreen
      ></iframe>
      <div className="mt-4">
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mr-4"
        >
          View on GitHub
        </a>
        <a
          href={project.demo_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
