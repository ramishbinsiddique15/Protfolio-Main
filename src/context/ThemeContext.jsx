import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    const scrollY = window.scrollY;
    setIsDarkMode(prev => !prev);
    requestAnimationFrame(() => window.scrollTo(0, scrollY));
    document.activeElement?.blur();
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
