import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const toggleTheme = () => {
    return setIsDark(!isDark);
  };
  return { isDark, setIsDark, toggleTheme };
};
