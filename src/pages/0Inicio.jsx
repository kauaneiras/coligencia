import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import WavesBackground from '../assets/backgrounds/BackgroundWave';

export default function Inicio({color, setColor, hoverColor, setHoverColor}) {
  const navigate = useNavigate();

  const handleMouseEnter = (newColor) => {
    setHoverColor(newColor);
  };

  const handleMouseLeave = () => {
    setHoverColor(null);
  };

  const NavigateToSobreMim = () => {
    navigate('/sobre-mim');
  };

  return (
    <>
    <WavesBackground />
      <Main color={`#${hoverColor || color}`}> 
        <BemVindo color={`#${hoverColor || color}`}>Bem Vindo</BemVindo>
        <EscolhaCor>Antes de seguir para o meu portifólio, selecione a cor que mais lhe agrada</EscolhaCor>
        <ColorsMenu>
          <Color onMouseEnter={() => handleMouseEnter('ffffff')} onMouseLeave={handleMouseLeave} onClick={() => setColor('ffffff')} color='ffffff' selected={color === 'ffffff'} />          
          <Color onMouseEnter={() => handleMouseEnter('01CB57')} onMouseLeave={handleMouseLeave} onClick={() => setColor('01CB57')} color='01CB57' selected={color === '01CB57'} />
          <Color onMouseEnter={() => handleMouseEnter('00F0BC')} onMouseLeave={handleMouseLeave} onClick={() => setColor('00F0BC')} color='00F0BC' selected={color === '00F0BC'} />
          <Color onMouseEnter={() => handleMouseEnter('00DEF0')} onMouseLeave={handleMouseLeave} onClick={() => setColor('00DEF0')} color='00DEF0' selected={color === '00DEF0'} />
          <Color onMouseEnter={() => handleMouseEnter('5391E0')} onMouseLeave={handleMouseLeave} onClick={() => setColor('5391E0')} color='5391E0' selected={color === '5391E0'} />
          <Color onMouseEnter={() => handleMouseEnter('C500E0')} onMouseLeave={handleMouseLeave} onClick={() => setColor('C500E0')} color='C500E0' selected={color === 'C500E0'} />
          <Color onMouseEnter={() => handleMouseEnter('E02BC8')} onMouseLeave={handleMouseLeave} onClick={() => setColor('E02BC8')} color='E02BC8' selected={color === 'E02BC8'} />
          <Color onMouseEnter={() => handleMouseEnter('E00869')} onMouseLeave={handleMouseLeave} onClick={() => setColor('E00869')} color='E00869' selected={color === 'E00869'} />
          <Color onMouseEnter={() => handleMouseEnter('CF1101')} onMouseLeave={handleMouseLeave} onClick={() => setColor('CF1101')} color='CF1101' selected={color === 'CF1101'} />
          <Color onMouseEnter={() => handleMouseEnter('FCBB28')} onMouseLeave={handleMouseLeave} onClick={() => setColor('FCBB28')} color='FCBB28' selected={color === 'FCBB28'} />
        </ColorsMenu>
        <Continuar color={`#${hoverColor || color}`} onClick={()=> NavigateToSobreMim()}>Continuar</Continuar>
      </Main>
    </>
  );
}

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.color}; 
`;

const BemVindo = styled.h1`
  font-size: 5em;
  font-weight: 1000;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.color}; 
  text-align: center;
`;

const ColorsMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1em;
`;

const Color = styled.div`
  width: 2em;
  height: 2em;
  margin: 0 0.1em;
  cursor: pointer;
  background-color: ${props => `#${props.color}`};
  border: ${props => props.selected ? '2px solid #ffffff' : 'none'};
`;

const EscolhaCor = styled.p`
  font-size: 1.5em;
  font-weight: 600;
  width: 15em;
  margin-bottom: 1em;
  margin-top: 2em;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.color}; 
  text-align: justify;
`;

const Continuar = styled.button`
  height: auto;
  width: 10em;
  font-size: 2em;
  font-weight: 600;
  margin-top: 1em;
  font-family: 'Roboto', sans-serif;
  background-color: transparent;
  cursor: pointer;
  margin-top: 4em;
  border-radius: 1.4em;
  border: none;
  color: ${props => props.color};

  &:hover {
    background-color: ${props => props.color};
    color: #000;
  }
`;