import styled from "styled-components";
import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Experiencias() {
  const navigate = useNavigate();
  return (
    <Container>
      <NavBar />
        <h1>ÁREA DE EXPERIÊNCIAS EM ANDAMENTO...</h1>
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
