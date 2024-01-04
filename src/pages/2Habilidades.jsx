import styled from "styled-components";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Tilt } from 'react-tilt'
import NavBar from "../components/NavBar";
import Card from "../components/Card/Card";
import {LinPro, TecFront, TecBack, TecBD} from "../components/object";

export default function Habilidades() {
  const [color, setColor] = useState(localStorage.getItem('color') || '000000');
  const navigate = useNavigate();
  

  return (
    <Container color={color}>
      <NavBar />
      <H1>Linguagens e Tecnologias que tenho conhecimento:</H1>
      <CardsContainer>  
      <Tilt><Ca color={color}><Subtitle>Linguagens de Programação: </Subtitle><Cards color={color}>{ LinPro.map((item, index) => ( <Card key={index} name={item.name} description={item.description} icon={item.icon} color={color} /> )) }</Cards></Ca></Tilt>
      <Tilt><Ca color={color}><Subtitle>Tecnologias Front-end: </Subtitle><Cards color={color}>{ TecFront.map((item, index) => ( <Card key={index} name={item.name} description={item.description} icon={item.icon} color={color} /> )) }</Cards></Ca></Tilt>
      <div>
      <Tilt><Ca color={color}><Subtitle>Tecnologias Back-end: </Subtitle><Cards color={color}>{ TecBack.map((item, index) => ( <Card key={index} name={item.name} description={item.description} icon={item.icon} color={color} /> )) }</Cards></Ca></Tilt>
      <Tilt><Ca color={color}><Subtitle>Banco de Dados: </Subtitle><Cards color={color}>{ TecBD.map((item, index) => ( <Card key={index} name={item.name} description={item.description} icon={item.icon} color={color} /> )) }</Cards></Ca></Tilt>
      </div>
      </CardsContainer>
      <Tilt options={defaultOptions}>
      <Button color={color} onClick={() => navigate('/projetos')}>Ver Projetos</Button>
      </Tilt>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    background-color: #000;
    border: 5px solid #${props => props.color};

    @media (max-width: 800px) {
        height: 100%;
        justify-content: flex-start;
        align-items: flex-start;
        
    }
`;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    `;

const Cards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Ca = styled.div`
  border: 1px solid #${props => props.color};
  margin: 10px;
  width: 300px;
`;

const Subtitle = styled.h2`
    color: #fff;
    margin: 10px;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

const H1 = styled.h1`
    color: #fff;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
    @media (max-width: 800px) {
      margin-top: 100px;
    }
`;

const Button = styled.button`
    height: auto;
    width: 10em;
    font-size: 2em;
    font-weight: 600;
    margin-top: 4em;
    font-family: 'Roboto', sans-serif;
    background-color: transparent;
    cursor: pointer;
    border: none;
    color: #${props => props.color};
    border: 2px solid #${props => props.color};

    &:hover {
      background-color: #${props => props.color};
      color: #000;
    }

    @media (max-width: 768px) {
      margin-top: 1em;
    }
`;

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}