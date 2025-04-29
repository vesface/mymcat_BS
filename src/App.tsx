import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import LandingPage from './pages/LandingPage';
import WorldPage from './pages/WorldPage';
import CustomCursor from './components/CustomCursor';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0a2a 0%, #1a1a3a 100%);
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

function App() {
  return (
    <Router>
      <AppContainer>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/world" element={<WorldPage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App; 