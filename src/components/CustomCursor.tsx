import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CursorContainer = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
`;

const Cursor = styled.div<{ x: number; y: number }>`
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
              0 0 40px rgba(255, 255, 255, 0.6),
              0 0 60px rgba(255, 255, 255, 0.4);
  transform: translate(-50%, -50%);
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  transition: all 0.1s ease-out;
`;

const GlowEffect = styled.div<{ x: number; y: number }>`
  position: fixed;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
  transform: translate(-50%, -50%);
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  pointer-events: none;
  transition: all 0.2s ease-out;
`;

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <CursorContainer>
      <Cursor x={position.x} y={position.y} />
      <GlowEffect x={position.x} y={position.y} />
    </CursorContainer>
  );
};

export default CustomCursor; 