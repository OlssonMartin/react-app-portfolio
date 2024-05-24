import React from 'react';
import './App.css';
import { PortfolioProvider } from './components/context/PortfolioContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

function App() {
  return (
    <PortfolioProvider>
      <div className="App">
        <Header />
        <main>
          <Home />
          <Projects />
          <About />
        </main>
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;
