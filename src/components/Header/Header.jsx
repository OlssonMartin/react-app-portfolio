import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import './Header.css';

const Header = () => {
  const { user } = useContext(PortfolioContext);

  return (
    <header className="header">
      <div className="logo">
        <h1>{user.name}</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
