import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeProvider, { ThemeOptions } from './ThemeProvider';
import useTheme from '../../hooks/useTheme';

describe('ThemeProvider', () => {
  function Test() {
    const [theme, setTheme] = useTheme();

    function handleToggleTheme() {
      setTheme((prevTheme: ThemeOptions) => {
        if (prevTheme === ThemeOptions.LIGHT) {
          return ThemeOptions.DARK;
        }

        return ThemeOptions.DARK;
      });
    }

    return (
      <div>
        <p>theme: {theme}</p>
        <button type="button" name="theme" onClick={handleToggleTheme}>
          set theme
        </button>
      </div>
    );
  }

  test('passes theme to child components', () => {
    render(<Test />, { wrapper: ThemeProvider });
    expect(screen.getByText(/theme: light/i)).toBeInTheDocument();
  });

  test('updates theme when setter called', () => {
    render(<Test />, { wrapper: ThemeProvider });
    userEvent.click(screen.getByRole('button', { name: /set theme/i }));
    expect(screen.getByText(/theme: dark/i)).toBeInTheDocument();
    expect(screen.queryByText(/theme: light/i)).not.toBeInTheDocument();
  });
});
