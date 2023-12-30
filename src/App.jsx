import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    );
  }
}
