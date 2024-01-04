import React from "react";
import styled from "styled-components";

export default function CardFront({ name, icon, color }) {
  return (
    <FrontContainer color={color}>
      <Icon src={icon} alt={`${name} icon`} />
    </FrontContainer>
  );
}

const FrontContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #${props => props.color};
  border-radius: 10px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
`;

const Icon = styled.img`
  width: 80%;
  height: auto;
`;
