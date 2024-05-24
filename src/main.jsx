import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import ProjectDetails from './components/ProjectDetails//ProjectDetails';
import { PortfolioProvider } from './components/context/PortfolioContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </PortfolioProvider>
  </React.StrictMode>
);