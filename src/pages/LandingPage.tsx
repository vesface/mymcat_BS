import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    filter: brightness(1.2);
  }
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin: 0;
  background: linear-gradient(45deg, #fff, #a8a8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
  
  &:hover {
    filter: brightness(1.2);
    transform: scale(1.05);
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled(motion.button)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-family: 'Helvetica Neue LT Pro', sans-serif;
  font-size: 1rem;
  cursor: none;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
`;

const SpaceBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const Star = styled(motion.div)`
  position: absolute;
  background: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.5);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`;

const Content = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  gap: 4rem;
  
  &:hover {
    filter: brightness(1.1);
  }
`;

const WelcomeImage = styled.img`
  height: 400px;
  width: auto;
  object-fit: contain;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
  }
`;

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const Subtitle = styled.h2`
  font-family: 'Helvetica Neue LT Pro', sans-serif;
  font-size: 1.5rem;
  margin-top: 2rem;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    color: rgba(255, 255, 255, 1);
  }
`;

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const createStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 3;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 5 + 5;
      
      stars.push(
        <Star
          key={i}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${x}%`,
            top: `${y}%`,
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      );
    }
    return stars;
  };

  return (
    <>
      <Header>
        <Title>Cosmic Journey</Title>
        <NavButtons>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://social.example.com', '_blank')}
          >
            Social
          </Button>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/world')}
          >
            World
          </Button>
        </NavButtons>
      </Header>
      
      <SpaceBackground>
        {createStars()}
      </SpaceBackground>

      <Content>
        <WelcomeImage 
          src="https://media.discordapp.net/attachments/529811097511919639/1366613037431263273/5cb48d1b8dba5ee857fcff3f8179e891.jpg?ex=68119512&is=68104392&hm=2fee3e0aeebd5d64f85a12ef6fcb8e2ba10ca161fdfaf8ccda94e519008044cc&=&format=webp&width=1326&height=1658"
          alt="Cosmic Art"
        />
        <TextContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Title style={{ fontSize: '4rem' }}>Welcome to the Cosmos</Title>
          <Subtitle>Explore the infinite possibilities of your digital universe</Subtitle>
        </TextContent>
      </Content>
    </>
  );
};

export default LandingPage; 