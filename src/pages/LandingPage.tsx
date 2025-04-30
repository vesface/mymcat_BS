import React, { useMemo, useEffect } from 'react';
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
  will-change: transform, opacity;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 2.6vw; /* Half of previous 5.2vw */
`;

const WelcomeImage = styled.img`
  position: absolute;
  width: 607px;  /* Reduced by 10px (5px on each side) */
  height: auto;
  left: 48.3%;
  top: 46%;
  transform: translate(-50%, -50%);
  z-index: 1;
  object-fit: cover;
  object-position: center;
  clip-path: inset(5px);  /* Crop 5px from all sides */
`;

const TextBox = styled.div`
  position: absolute;
  width: 1050px;
  height: 529px;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpacePNG = styled.img`
  width: 1000px;
  height: auto;
  object-fit: contain;
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
  height: 2.6vw;
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
  font-size: 1.25vw;
  font-weight: 500;
  color: white;
  padding: 0.775vw 0;
  will-change: transform;
  animation: scroll 300s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const scrollingText = "DESIGN + BRANDING + VISUAL IDENTITY + WEB DEVELOPMENT + BRAND STRATEGY • ";
  const longScrollingText = scrollingText.repeat(9);

  useEffect(() => {
    document.fonts.ready.then(() => {
      console.log('Fonts loaded:', document.fonts.check('12px Nebula'));
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header>
        <Title>Cosmonaut</Title>
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

      <Content>
        <WelcomeImage 
          src="https://media.discordapp.net/attachments/529811097511919639/1366844148895973487/5cb48d1b8dba5ee857fcff3f8179e891.jpg?ex=68126c4f&is=68111acf&hm=e6a4ae17c30d052506911c94a80cbba55efa090e79839ab545aa1baa8e97b18c&=&format=webp&width=1326&height=1658"
          alt="Cosmic Art"
        />
        <TextBox>
          <TopText>giving you the</TopText>
          <MiddleText>
            <SpacePNG src="/SPACE.png" alt="SPACE" />
          </MiddleText>
          <BottomText>you need</BottomText>
        </TextBox>
        <ScrollingText>
          <ScrollingTextContent>
            {longScrollingText}
          </ScrollingTextContent>
        </ScrollingText>
      </Content>
    </>
  );
};

export default React.memo(LandingPage); 