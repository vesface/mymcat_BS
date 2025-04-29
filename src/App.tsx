import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import LandingPage from './pages/LandingPage';
import WorldsPage from './pages/WorldsPage';
import CustomCursor from './components/CustomCursor';

const AppContainer = styled.div`
  min-height: 100vh;
  color: white;
  cursor: none;
`;

const GlowingElement = styled.div`
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
  }
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/worlds" element={<WorldsPage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App; 