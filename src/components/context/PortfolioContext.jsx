import React, { createContext, useState, useEffect } from 'react';

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

  const [projects, setProjects] = useState([]);
  const [about, setAbout] = useState({
    text: `I am Martin, a frontend developer with a passion for creating beautiful and functional websites.
           With a strong background in HTML, CSS, and JavaScript, I specialize in building responsive and user-friendly interfaces.
           My goal is to deliver high-quality code and bring designs to life through innovative solutions.`,
    skills: [
      'HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Responsive Design', 'UI/UX Design'
    ]
  });

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/OlssonMartin/repos');
        const data = await response.json();
        const projectsWithDemo = data.map(project => ({
          ...project,
          demo_url: `https://example.com/demo/${project.name}` // Byt ut detta med rätt demo-URL
        }));
        setProjects(projectsWithDemo);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      }
    };

    fetchGitHubProjects();
  }, []);

  return (
    <PortfolioContext.Provider value={{ user, projects, about }}>
      {children}
    </PortfolioContext.Provider>
  );
};
