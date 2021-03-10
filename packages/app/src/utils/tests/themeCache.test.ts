import { ThemeOptions } from '../../context/ThemeProvider/ThemeProvider';
import defaultTheme from '../themeCache';

describe('themeCache', () => {
  test('should return a theme value', () => {
    expect(defaultTheme).toEqual(ThemeOptions.LIGHT);
  });
});
