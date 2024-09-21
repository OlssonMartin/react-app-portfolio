import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

const Home = () => {
  const { user } = useContext(PortfolioContext);

  return (
    <section id="home" className="bg-lightBlue dark:bg-darkBlue text-gray-800 dark:text-white min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="text-xl text-blue-500 dark:text-lightBlue">Hi, my name is</p>
        <h1 className="text-5xl font-bold mb-4">{user.name}.</h1>
        <h2 className="text-4xl font-semibold mb-6">{user.title}</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          {user.bio}
        </p>
        <a href="#projects" className="text-lg bg-transparent border-2 border-blue-500 dark:border-lightBlue hover:bg-blue-500 dark:hover:bg-lightBlue text-blue-500 dark:text-lightBlue hover:text-white py-2 px-6 rounded-full transition">
          Check out my work!
        </a>
      </div>
    </section>
  );
};

export default Home;