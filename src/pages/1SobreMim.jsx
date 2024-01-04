import React, {useState} from "react";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Tilt } from 'react-tilt'
import kauan from "../assets/images/kauan.png";


export default function SobreMim(){
  const navigate = useNavigate();
  const [color, setColor] = useState(localStorage.getItem('color') || 'ffffff');

  const NavigateTo = (path) => {
    navigate(path);
  }

  return (
    <Container color={color}>
        <Navbar />
        <About>
          {window.innerWidth > 768 ? <SobreMimDekstop color={color}/>  : <SobreMimMobile color={color}/>}
        </About>
        <Tilt options={defaultOptions} style={{ height: 200, width: 300 }}>
        <ButtonHabilidades color={color} onClick={() => NavigateTo('/habilidades')}>Habilidades</ButtonHabilidades>
        </Tilt>
    </Container>
  );
}

function SobreMimDekstop({color}){
  return (
    <>
    <Tilt options={defaultOptions} style={{ height: 350, width: 250 }}>
    <FotoKauan src={kauan} color={color}/>
    </Tilt>
    <Space/>
    <Tilt options={defaultOptions} style={{ height: 350, width: 550 }}>
    <Text color={color}>
      <h1>Olá, eu sou o Kauan</h1>
      <p>
        Desenvolvedor Full Stack e estudante de Engenharia de Software, apaixonado por tecnologia, 
        em busca de aprender coisas novas e me aperfeiçoar.
      </p>
    </Text>
    </Tilt>
    </>
  )
}

function SobreMimMobile({color}){
  return (
    <>
    <Tilt options={defaultOptions}>
    <FotoKauan src={kauan} color={color}/>
    </Tilt>
    <TextMobile color={color}>
      <h1>Olá, eu sou o Kauan</h1>
      <p>
        Desenvolvedor Full Stack, estudante de Engenharia de Software e apaixonado por tecnologia.
        Estou em busca de aprender coisas novas e me aperfeiçoar.
      </p>
    </TextMobile>
    </>
  )
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
    flex-direction: column;
    padding: 5%;
    border: 5px solid #${props => props.color};
    overflow: hidden;
`;

const FotoKauan = styled.img`
  box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);
  transform-style: preserve-3d;
  width: 200px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  background-color: #${props => props.color};
  border: 5px solid #${props => props.color};
  
  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 50%;
    
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 400px;
  }
`;

const Text = styled.div`
  border: 5px solid #${props => props.color};
  padding: 5%;
  display: flex;
  height: 300px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 500px;
  text-align: justify;
  magin-top: 5%;
  h1 {
    font-size: 2em;
    font-weight: 1000;
    font-family: 'Roboto', sans-serif;
    color: #${props => props.color};
    margin-bottom: 5%;
  }
  p {
    font-size: 1.5em;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    text-align: justify;
  }
`;

const TextMobile = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 500px;
  text-align: justify;
  magin-top: 10%;
  h1 {
    font-size: 1.8em;
    font-weight: 1000;
    font-family: 'Roboto', sans-serif;
    color: #${props => props.color};
    margin-bottom: 10%;
    align-self: center;
  }
  p {
    width: 80%;
    align-self: center;
    font-size: 1.4em;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    text-align: justify;
  }
`;

const ButtonHabilidades = styled.button`
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

const Space = styled.div`
  width: 10%;
`;
