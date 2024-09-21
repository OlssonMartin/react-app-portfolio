import React, { createContext, useState } from 'react';

// Skapa Context
export const PortfolioContext = createContext();

// Context Provider
export const PortfolioProvider = ({ children }) => {
  const [user] = useState({
    name: 'Martin Olsson',
    title: 'Frontend Utvecklare',
    bio: 'I build things for the web',
  });

  const [projects] = useState([
    {
      id: 1,
      name: 'Project One',
      description: 'This is a food app',
      html_url: 'https://github.com/OlssonMartin/mat-app-react',
      demo_url: 'https://ornate-palmier-28df74.netlify.app',
    },
    {
      id: 2,
      name: 'Project Two',
      description: 'This is the description for project two',
      html_url: 'https://github.com/yourusername/project-two',
      demo_url: 'https://project-two-demo.netlify.app',
    },
  ]);

  return (
    <PortfolioContext.Provider value={{ user, projects }}>
      {children}
    </PortfolioContext.Provider>
  );
};