import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 35px 1.5rem;
  border-radius: 25px;
  font-family: 'Helvetica Neue LT Pro', sans-serif;
  font-size: 24px;
  cursor: none;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const WelcomeImage = styled.img`
  position: absolute;
  width: 617px;
  height: auto;
  left: 664px;
  top: 154px;
  z-index: 1;
`;

const TextBox = styled.div`
  position: absolute;
  width: 1050px;
  height: 572px;
  left: 448px;
  top: 268px;
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
  font-family: 'Helvetica Neue LT Pro', sans-serif;
  font-size: 150px;
  color: white;
  text-align: center;
`;

const BottomText = styled.div`
  font-family: 'Helvetica Neue LT Pro', sans-serif;
  font-size: 18px;
  color: white;
  text-align: right;
`;

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

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

      <Content>
        <WelcomeImage 
          src="https://media.discordapp.net/attachments/529811097511919639/1366613037431263273/5cb48d1b8dba5ee857fcff3f8179e891.jpg?ex=68119512&is=68104392&hm=2fee3e0aeebd5d64f85a12ef6fcb8e2ba10ca161fdfaf8ccda94e519008044cc&=&format=webp&width=1326&height=1658"
          alt="Cosmic Art"
        />
        <TextBox>
          <TopText>Giving you the</TopText>
          <MiddleText>SPACE</MiddleText>
          <BottomText>you need</BottomText>
        </TextBox>
      </Content>
    </>
  );
};

export default LandingPage; 