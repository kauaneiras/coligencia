import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState(localStorage.getItem('color') || '000000');

  const NavigateTo = (path) => {
    navigate(path);
  }

  return (
    <StyledCard color={color} tabIndex="0">
      <MenuIcon>☰</MenuIcon>
      <NavBarButtons>
      <NavBarButton color={color} onClick={() => NavigateTo('/sobre-mim')}>Sobre Mim</NavBarButton>
      <NavBarButton color={color} onClick={() => NavigateTo('/habilidades')}>Habilidades</NavBarButton>
      <NavBarButton color={color} onClick={() => NavigateTo('/projetos')}>Projetos</NavBarButton>
      <NavBarButton color={color} onClick={() => NavigateTo('/experiencias')}>Experiências</NavBarButton>
      <NavBarButton color={color} onClick={() => NavigateTo('/formacao')}>Formação</NavBarButton>
      <NavBarButton color={color} onClick={() => NavigateTo('/contato')}>Contato</NavBarButton>

      {/* <NavBarButton color={color}>Habilidades</NavBarButton>
      <NavBarButton color={color}>Projetos</NavBarButton>
      <NavBarButton color={color}>Experiências</NavBarButton>
      <NavBarButton color={color}>Formação</NavBarButton>
      <NavBarButton color={color}>Contato</NavBarButton> */}
      </NavBarButtons>
    </StyledCard>
  );
};

export default NavBar;

const hoverStyle = css`
  clip-path: circle(75% at 50% 50%);
  border-radius: 20px;
  box-shadow: 0px 3px 9px #${props => props.color}, 0px 3px 18px #${props => props.color};
  background: transparent;
`;

const StyledCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 42px 32px;
  clip-path: circle(5% at 10% 10%);
  transition: all ease-in-out .3s;
  background-color: #${props => props.color};
  &:hover {
    ${hoverStyle}
  }
`;

const MenuIcon = styled.span`
  position: fixed;
  transform: translate(-50%, -20%);
  font-size: 2em;
  color: #000000;
  transition: ease-out .3s;
  ${StyledCard}:hover & {
    opacity: 0;
  }
`;
const NavBarButton = styled.button`
  height: auto;
  width: 8em;
  font-size: 2em;
  font-weight: 600;
  margin-top: 1em;
  font-family: 'Roboto', sans-serif;
  background-color: transparent;
  cursor: pointer;
  border-radius: 1.4em;
  border: none;
  color: #${props => props.color};

  &:hover {
    background-color: #${props => props.color};
    color: #000;
  }
`;

const NavBarButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;