import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;