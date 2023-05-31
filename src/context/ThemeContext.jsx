/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

// Crea el contexto del tema
export const ThemeContext = createContext();

// Crea el proveedor del contexto del tema
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';
  });

  // Actualiza la clase del elemento raíz al cargar la página
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Objeto de contexto que contiene el estado y la función para alternar temas
  const themeContextValue = {
    isDark,
    setIsDark,
  };

  // Renderiza el proveedor del contexto y pasa el valor del contexto a los componentes hijos
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
