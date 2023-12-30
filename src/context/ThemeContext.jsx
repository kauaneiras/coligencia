import React, { createContext, useContext, useState, useEffect } from 'react';
import Theme from '../assets/theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storedDarkMode = localStorage.getItem('isDarkMode');
  const [isDarkMode, setDarkMode] = useState(storedDarkMode ? JSON.parse(storedDarkMode) : false);
  const theme = new Theme();

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const themeValue = {
    isDarkMode,
    toggleDarkMode,
    theme: isDarkMode ? theme.getDarkTheme() : theme.getLightTheme(),
  };

  return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
