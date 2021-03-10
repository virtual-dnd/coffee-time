import { ThemeOptions } from 'context/ThemeProvider/ThemeProvider';

export const THEME_KEY = 'theme';
const savedTheme = () => localStorage.getItem(THEME_KEY);

if (!savedTheme()) {
  localStorage.setItem(THEME_KEY, ThemeOptions.LIGHT);
}

const defaultTheme = savedTheme() ?? ThemeOptions.LIGHT;

export default defaultTheme as ThemeOptions;
