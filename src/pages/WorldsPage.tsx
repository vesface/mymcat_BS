import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Nebula';
    src: local('Nebula'),
         url('/fonts/Nebula-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 120px;
`;

const Title = styled.h1`
  font-family: 'Helvetica Neue LT Pro', sans-serif;
  font-size: 24px;
  margin: 0;
  color: white;
  padding: 35px 0;
  cursor: pointer;
  background: #080010;
  padding: 10px 45px;
  border-radius: 25px;
  font-size: 18px;
  cursor: none;
  backdrop-filter: blur(5px);
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled(motion.button)`
  background: #080010;
  border: 1px solid rgb(255, 255, 255);
  color: white;
  padding: 10px 45px;
  border-radius: 25px;
  font-family: "Helvetica Neue LT Pro", sans-serif;
  font-size: 18px;
  cursor: none;
  backdrop-filter: blur(5px);
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
`;

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #080010;
`;

const Video = styled.iframe`
  width: 50vw;
  height: 28.125vw; /* 16:9 aspect ratio */
  border: none;
  max-width: 800px;
  max-height: 450px;
  @media (max-width: 768px) {
    width: 90vw;
    height: 50.625vw; /* 16:9 aspect ratio */
  }
`;

const WorldsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <VideoContainer>
        <Video 
          src="https://www.youtube.com/embed/H999s0P1Er0?si=gAvCMfpNswAfwpsH&autoplay=1&mute=1&controls=1&playsinline=1&rel=0" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          playsInline
        />
      </VideoContainer>
      <Header>
        <Title onClick={() => navigate('/')}>Cosmonaut</Title>
        <NavButtons>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/worlds')}
          >
            Social
          </Button>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/worlds')}
          >
            Worlds
          </Button>
        </NavButtons>
      </Header>
    </>
  );
};

export default WorldsPage;
