import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

const Header = () => {
  const { user } = useContext(PortfolioContext);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <h1>{user.name}</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
