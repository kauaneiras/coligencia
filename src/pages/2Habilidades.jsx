import styled from "styled-components";
import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function Habilidades() {
  const navigate = useNavigate();
  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('home');
      const top = section.getBoundingClientRect().top;
      if (top >= 0 && top < window.innerHeight) {
        window.history.pushState("", "", "/home");
      }
    };
    window.addEventListener('scroll', onScroll);
  
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <Container>
      <Main>
        <h1>Habilidades</h1>
      </Main>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${props => (props.theme === 'dark' ? (props.theme.dark ? props.theme.dark.background : '') : (props.theme.light ? props.theme.light.background : ''))};
`;

const Main = styled.main`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;