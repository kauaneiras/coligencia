// StarField.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const twinkling = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.5);
  }
`;

const StarsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
`;

const Star = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: #fff;
  border-radius: 50%;
  pointer-events: none;
  transform-origin: center;
  animation: ${twinkling} ${(props) => props.twinkleDuration}s infinite alternate;
`;

const dimAndBright = keyframes`
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
`;

const StarField = () => {
  const [stars, setStars] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const createStars = () => {
      const newPositions = [];
      const newStars = [];

      for (let i = 0; i < 300; i++) {
        const size = Math.random() * 2 + 1;
        const twinkleDuration = Math.random() * 5 + 2;

        const position = {
          top: Math.random() * window.innerHeight,
          left: Math.random() * window.innerWidth,
        };

        newPositions.push(position);

        newStars.push(
          <Star
            key={i}
            size={size}
            twinkleDuration={twinkleDuration}
            style={{ top: position.top, left: position.left }}
          />
        );
      }

      setPositions(newPositions);
      setStars(newStars);
    };

    createStars();
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    // Reposicionar estrelas dentro de um raio de 10px
    const updatedStars = stars.map((star, index) => {
      const distance = Math.hypot(clientX - positions[index].left, clientY - positions[index].top);

      if (distance < 10) {
        // Reposicionar para fora do raio
        const angle = Math.atan2(clientY - positions[index].top, clientX - positions[index].left);
        const newPositionX = clientX + 10 * Math.cos(angle);
        const newPositionY = clientY + 10 * Math.sin(angle);

        positions[index] = { top: newPositionY, left: newPositionX };

        return React.cloneElement(star, {
          key: index,
          style: {
            ...star.props.style,
            transform: `translate(${newPositionX}px, ${newPositionY}px)`,
            opacity: 0,
          },
        });
      } else {
        // Manter a posição original
        return React.cloneElement(star, {
          key: index,
          style: {
            ...star.props.style,
            opacity: 1,
          },
        });
      }
    });

    setStars(updatedStars);
  };

  return (
    <StarsContainer onMouseMove={handleMouseMove}>
      {stars}
    </StarsContainer>
  );
};

export default StarField;
