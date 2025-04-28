import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  padding: 2rem;
  min-height: 100vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  margin-top: 80px;
`;

const ImageCard = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ImageCard}:hover & {
    opacity: 1;
  }
`;

const AddButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WorldPage: React.FC = () => {
  const [images, setImages] = useState<string[]>([
    'https://source.unsplash.com/random/300x300?space',
    'https://source.unsplash.com/random/300x300?galaxy',
    'https://source.unsplash.com/random/300x300?stars',
    'https://source.unsplash.com/random/300x300?universe',
  ]);

  const handleAddImage = () => {
    const newImage = `https://source.unsplash.com/random/300x300?space${Math.random()}`;
    setImages([...images, newImage]);
  };

  return (
    <Container>
      <Grid>
        {images.map((image, index) => (
          <ImageCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image src={image} alt={`Space image ${index + 1}`} />
            <Overlay
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  cursor: 'pointer',
                }}
              >
                View Details
              </motion.button>
            </Overlay>
          </ImageCard>
        ))}
      </Grid>
      <AddButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleAddImage}
      >
        +
      </AddButton>
    </Container>
  );
};

export default WorldPage; 