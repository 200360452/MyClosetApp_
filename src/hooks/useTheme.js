//hooks/UseTheme.js 
import React, { createContext, useContext } from 'react';
import { useTheme as useThemeHook } from './useTheme';

// Create a Context for the theme
const ThemeContext = createContext();

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useThemeHook();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
