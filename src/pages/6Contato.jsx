import styled from "styled-components";
import React, {useEffect} from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

export default function Contato() {
  const navigate = useNavigate();
  return (
    <Container>
      <NavBar />
        <h1>ÁREA DE FORMAÇÃO EM ANDAMENTO...</h1>
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
