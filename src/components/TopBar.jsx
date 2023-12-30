import styled from 'styled-components';
import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import StarField from '../assets/starsBackGround';

export default function TopBar() {
    const { isDarkMode, toggleDarkMode, theme } = useTheme();
    const { background, color } = theme;

    const [active, setActive] = React.useState(false);

    const navToggle = () => {
        setActive(!active);
    };

    return (
        <Nav theme={isDarkMode ? 'dark' : 'light'} style={{ background, color }}>
            <StarField />
            <NavBrand>
                <DarkModeSwitch
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={60}
                    moonColor={theme.colorMoon}
                    sunColor={theme.colorSun}
                />
            </NavBrand>
            <NavMenu active={active ? 'true' : 'false'}>
                <NavItem>
                    <NavLink to="/sobre" className="nav__link">
                        Sobre
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contato" className="nav__link">
                        Habilidades
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contato" className="nav__link">
                        Projetos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contato" className="nav__link">
                        Formação
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contato" className="nav__link">
                        Experiência
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contato" className="nav__link">
                        Contato
                    </NavLink>
                </NavItem>
            </NavMenu>
            <NavToggler onClick={navToggle}>
                <TogglerLine active={active} />
                <TogglerLine active={active} />
                <TogglerLine active={active} />
            </NavToggler>
        </Nav>
    );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 8vh;
  background: ${props => (props.theme === 'dark' ? (props.theme.dark ? props.theme.dark.backgroundNavBar : '') : (props.theme.light ? props.theme.light.backgroundNavBar : ''))};
  color: ${props => (props.theme === 'dark' ? (props.theme.dark ? props.theme.dark.fontColor : '') : (props.theme.light ? props.theme.light.fontColor : ''))};
  font-size: 1.2rem;
  position: relative;
  z-index: 100;
  font-family: 'Roboto', sans-serif;
`;

const NavBrand = styled.div`
  text-transform: uppercase;
`;

const NavItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  color: ${props => (props.theme === 'dark' ? (props.theme.dark ? props.theme.dark.fontColor : '') : (props.theme.light ? props.theme.light.fontColor : ''))};

  &:hover {
    border-bottom: 2px solid blue;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 7vh;
    right: 0;
    height: 93vh;
    width: 100vw;
    background: ${props => (props.theme === 'dark' ? props.theme.dark.backgroundNavBar : 'rgb(0, 33, 65)')};
    flex-direction: column;
    transform: translateX(${props => (props.active === 'true' ? '0%' : '100%')});
    transition: 0.5s ease-in;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.theme === 'dark' ? (props.theme.dark ? props.theme.dark.fontColor : '#fff') : (props.theme.light ? props.theme.light.fontColor : '#000'))};
  transition: 0.3s ease-in;
  font-weight: bold;
  font-size: 1.4rem;
`

const NavToggler = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const TogglerLine = styled.div`
  width: 2.5rem;
  height: 0.2rem;
  margin: 0.4rem;
  background: ${props => (props.theme === 'dark' ? (props.theme.dark ? '#ccc' : '') : (props.theme.light ? 'rgb(204, 204, 204)' : ''))};
  transition: 0.3s ease-in;

  ${props =>
    props.active === 'true' &&
    `
    &:first-child {
      transform: rotate(-45deg) translate(-4px, 5px);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:last-child {
      transform: rotate(45deg) translate(-4px, -5px);
    }
  `}
`;
