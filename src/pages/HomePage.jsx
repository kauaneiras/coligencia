import styled from 'styled-components';
import React from 'react';
import TopBar from '../components/TopBar';
import { useTheme } from '../context/ThemeContext';


export default function HomePage(){

    const { isDarkMode, theme } = useTheme();
    const { background, color } = theme;

    return (
        <Container style={{ background, color }}>
            <TopBar />
            <Main>
                <h1>Home Page</h1>
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

