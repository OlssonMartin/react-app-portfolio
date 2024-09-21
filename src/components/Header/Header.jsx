import React from 'react';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white dark:bg-darkBlue text-gray-800 dark:text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            {/* Lägg till CV-länk */}
            <li>
              <a
                href="https://drive.google.com/file/d/15cqMYFOznF4GBZAewG4bDEQDRjejs3nH/view?usp=sharing"  // URL till din PDF-fil
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500"
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
        {/* Mörk-/ljuslägesknapp */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 bg-gray-800 dark:bg-gray-100 text-white dark:text-black py-2 px-4 rounded-full"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;