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
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const WorldsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <VideoContainer>
        <Video autoPlay loop muted playsInline>
          <source src="/videos/space.mp4" type="video/mp4" />
        </Video>
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
