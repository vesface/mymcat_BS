import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import LandingPage from './pages/LandingPage';
import WorldPage from './pages/WorldPage';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0a2a 0%, #1a1a3a 100%);
  color: white;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/world" element={<WorldPage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App; 