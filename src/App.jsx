import React, { useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/contact/Contact';
import { PortfolioProvider } from './components/context/PortfolioContext';
import { ImOffice } from 'react-icons/im';


const App = () => {
  // Starta med dark mode som standard
  const [darkMode, setDarkMode] = useState(true);

  // Effekt för att hantera växlingen mellan dark och light mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <PortfolioProvider>
      <div>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </PortfolioProvider>
  );
};

export default App;