import React, { createContext, useState } from 'react';

// Criando o Contexto de Tema
export const ThemeContext = createContext();

// Provedor de Tema
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Estado inicial: light (claro)

  // Alterna entre tema claro e escuro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
