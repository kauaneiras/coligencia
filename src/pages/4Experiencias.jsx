import styled from "styled-components";
import React, {useEffect} from "react";

export default function Experiencias() {
  useEffect(() => {
    const onScroll = () => {
      // Algoritmo para detectar se esta seção está na visualização
      // e então atualizar a URL.
      // Este é um exemplo simplificado:
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
        <h1>Experiencias</h1>
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