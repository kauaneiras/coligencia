import React, {useState} from "react";
import Navbar from "../components/NavBar";
import styled from "styled-components";
import { Tilt } from 'react-tilt'
import kauan from "../assets/images/kauan.png";

export default function SobreMim(){
  const [color, setColor] = useState(localStorage.getItem('color') || '000000');
  console.log(color);

  return (
    <Container color={color}>
        <Navbar />
        <About>
        <Tilt options={defaultOptions} style={{ height: 300, width: 200 }}>
        <FotoKauan src={kauan} />
        </Tilt>
        <Tilt options={defaultOptions} style={{ height: 200, width: 550 }}>
        <Text color={color}>
          <h1>Olá, eu sou o Kauan</h1>
          <p>
            Sou desenvolvedor Full Stack e estudante de Engenharia de Software, apaixonado por tecnologia, 
            em busca de aprender coisas novas e me aperfeiçoar.
          </p>
        </Text>
        </Tilt>

        </About>
    </Container>
  );
}

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

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    padding: 5%;
    border: 5px solid #${props => props.color};
    overflow: hidden;
`;

const FotoKauan = styled.img`
  box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);
  transform-style: preserve-3d;
  margin: 50px auto;
  width: 200px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 5%;
  max-width: 500px;
  text-align: justify;
  h1 {
    font-size: 3em;
    font-weight: 1000;
    font-family: 'Roboto', sans-serif;
    color: #${props => props.color};
    margin-bottom: 10%;
  }
  p {
    font-size: 1.5em;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    color: #${props => props.color};
    text-align: justify;
  }
`;