import React from 'react';

const ProjectDetails = ({ project, onBack }) => {
  return (
    <div className="bg-gray-700 text-white p-8 min-h-screen">
      <button onClick={onBack} className="text-blue-400 hover:underline mb-4">Back to Projects</button>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mb-4">{project.name}</h2>
        <p className="mb-4">{project.description}</p>
        <div className="mb-4">
          <iframe
            src={project.demo_url}
            title={project.name}
            className="w-full h-96 border-none"
            allowFullScreen
          ></iframe>
        </div>
        <div>
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
    </div>
  );
};

export default ProjectDetails;
