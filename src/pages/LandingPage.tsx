import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Nebula';
    src: url('/fonts/Nebula-Regular.otf') format('opentype');
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
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 100px; /* Space for the scrolling text */
`;

const WelcomeImage = styled.img`
  position: absolute;
  width: 617px;
  height: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const TextBox = styled.div`
  position: absolute;
  width: 1050px;
  height: 529px;
  left: 50%;
  transform: translateX(-50%);
  top: 183px; /* Distance from nav bar */
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopText = styled.div`
  font-family: 'Helvetica Neue LT Pro', sans-serif;
  font-size: 18px;
  color: white;
  text-align: left;
`;

const MiddleText = styled.div`
  font-family: 'Nebula', sans-serif;
  font-size: 250px;
  color: white;
  text-align: center;
  letter-spacing: normal;
  
  span {
    display: inline-block;
  }
  
  span:nth-child(3) {
    margin-left: -0.3em;
  }
`;

const BottomText = styled.div`
  font-family: 'Helvetica Neue LT Pro', sans-serif;
  font-size: 18px;
  color: white;
  text-align: right;
`;

const ScrollingText = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: transparent;
  overflow: hidden;
  white-space: nowrap;
  z-index: 3;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`;

const ScrollingTextContent = styled(motion.div)`
  display: inline-block;
  font-family: 'Helvetica Neue LT Pro', sans-serif;
  font-size: 48px;
  font-weight: 500;
  color: white;
  padding: 30px 0;
  animation: scroll 100s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
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
        <Title>Cosmonaut</Title>
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
          src="https://media.discordapp.net/attachments/529811097511919639/1366844148895973487/5cb48d1b8dba5ee857fcff3f8179e891.jpg?ex=68126c4f&is=68111acf&hm=e6a4ae17c30d052506911c94a80cbba55efa090e79839ab545aa1baa8e97b18c&=&format=webp&width=1326&height=1658"
          alt="Cosmic Art"
        />
        <TextBox>
          <TopText>Giving you the</TopText>
          <MiddleText>
            <span>S</span>
            <span>P</span>
            <span>A</span>
            <span>C</span>
            <span>E</span>
          </MiddleText>
          <BottomText>you need</BottomText>
        </TextBox>
        <ScrollingText>
          <ScrollingTextContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ScrollingTextContent>
        </ScrollingText>
      </Content>
    </>
  );
};

export default LandingPage; 