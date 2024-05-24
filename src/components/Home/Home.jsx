import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import './Home.css';

const Home = () => {
  const { user } = useContext(PortfolioContext);

  return (
    <section id="home" className="home">
      {/* Kommentera ut bildreferensen för att testa utan bild */}
      {/* <img src="%PUBLIC_URL%/images/profile.jpg" alt="Profile" className="profile-image" /> */}
      <h2>{user.title}</h2>
      <p>{user.description}</p>
      <div className="social-links">
        <a href={user.social.linkedin}><i className="fab fa-linkedin"></i></a>
        <a href={user.social.github}><i className="fab fa-github"></i></a>
        <a href={user.social.email}><i className="fas fa-envelope"></i></a>
      </div>
    </section>
  );
};

export default Home;
