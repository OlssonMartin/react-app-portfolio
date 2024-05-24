import React, { createContext, useState } from 'react';

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Martin Olsson',
    title: 'Frontend Developer',
    description: 'My name is Martin, take a look around',
    social: {
      linkedin: '#',
      github: '#',
      email: 'mailto:example@example.com'
    }
  });

  const [projects, setProjects] = useState([
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3' },
    { id: 4, title: 'Project 4', description: 'Description of Project 4' },
    { id: 5, title: 'Project 5', description: 'Description of Project 5' },
    { id: 6, title: 'Project 6', description: 'Description of Project 6' }
  ]);

  const [about, setAbout] = useState({
    text: `I am Martin, a frontend developer with a passion for creating beautiful and functional websites.
           With a strong background in HTML, CSS, and JavaScript, I specialize in building responsive and user-friendly interfaces.
           My goal is to deliver high-quality code and bring designs to life through innovative solutions.`,
    skills: [
      'HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Responsive Design', 'UI/UX Design'
    ]
  });

  return (
    <PortfolioContext.Provider value={{ user, projects, about }}>
      {children}
    </PortfolioContext.Provider>
  );
};
