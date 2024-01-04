import React, {useState} from "react";
import Navbar from "../components/NavBar";
import styled from "styled-components";

export default function SobreMim(){
  const [color, setColor] = useState(localStorage.getItem('color') || '000000');
  console.log(color);

  return (
    <Container color={color}>
      <Navbar />
        <h1>Sobre Mim</h1>
    </Container>
  );
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
