import { useCallback, useEffect } from 'react';
import { ThemeOptions } from 'context/ThemeProvider/ThemeProvider';
import useTheme from 'hooks/useTheme';
import { THEME_KEY } from 'utils/themeCache'

function Home() {
  const [theme, setTheme] = useTheme()

  const handleSetTheme = useCallback(() => {
    setTheme((currentTheme: ThemeOptions) => {
      if (currentTheme === ThemeOptions.LIGHT) {
        return ThemeOptions.DARK;
      }
      return ThemeOptions.LIGHT;
    });
  }, [setTheme]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <div>
      <p>mode: {theme}</p>
      <button name="theme" onClick={handleSetTheme} type="button" >
        toggle mode
      </button>
    </div>
  );
}

export default Home;