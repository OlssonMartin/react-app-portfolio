import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

const Home = () => {
  const { user } = useContext(PortfolioContext);

  return (
    <section id="home" className="bg-gray-700 text-white flex flex-col items-center justify-center p-8 min-h-screen">
      <h2 className="text-4xl mb-2">{user.title}</h2>
      <p className="mb-4">{user.description}</p>
      <div className="flex space-x-4">
        <a href={user.social.linkedin} className="text-2xl hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
        <a href={user.social.github} className="text-2xl hover:text-gray-300"><i className="fab fa-github"></i></a>
        <a href={user.social.email} className="text-2xl hover:text-gray-300"><i className="fas fa-envelope"></i></a>
      </div>
    </section>
  );
};

export default Home;
