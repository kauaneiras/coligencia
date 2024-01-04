import React from "react";
import styled from "styled-components";

export default function CardBack({ name, description, color }) {
  return (
    <BackContainer color={color}>
      <h1>{name}</h1>
      <p>{description}</p>
    </BackContainer>
  );
}

const BackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #${props => props.color};
  border-radius: 10px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  transform-style: preserve-3d;

  h1 {
    font-size: 1.2rem;
    color: #000;
    text-align: center;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    color: #000;
    text-align: center;
  }
`;
