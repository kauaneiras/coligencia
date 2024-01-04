import React from "react";
import styled from "styled-components";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

export default function Card({ name, description, icon, color }) {
  return (
    <FlipCard color={color}>
      <FlipCardInner>
        <CardFront name={name} icon={icon} color="fff" />
        <CardBack name={name} description={description} color="fff" />
      </FlipCardInner>
    </FlipCard>
  );
}

const FlipCard = styled.div`
  background-color: transparent;
  margin: 10px;
  width: 100px;
  height: 100px;
  perspective: 1000px;
  `;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;
