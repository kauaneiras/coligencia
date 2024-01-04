import styled from "styled-components";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Projetos() {
  const navigate = useNavigate();
  const [color, setColor] = useState(localStorage.getItem('color') || '000000');

  return (
    <Container>
      <NavBar />
        <h1>ÁREA DE PROJETOS EM ANDAMENTO...</h1>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #000;

    h1 {
        color: #fff;
    }
`;
