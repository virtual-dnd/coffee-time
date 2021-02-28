import { createContext, Dispatch, memo, PropsWithChildren, SetStateAction, useMemo, useState } from 'react';

export enum ThemeOptions {
  LIGHT = 'light',
  DARK = 'dark'
};

type ThemeContextProps = [ThemeOptions, Dispatch<SetStateAction<ThemeOptions>>]

export const ThemeContext = createContext<ThemeContextProps>([] as unknown as ThemeContextProps)
ThemeContext.displayName = 'ThemeContext'

interface Props {
  defaultTheme: ThemeOptions;
};

function ThemeProvider(props: PropsWithChildren<Props>) {
  const { defaultTheme = ThemeOptions.LIGHT } = props;
  const [theme, setTheme] = useState(() => defaultTheme);
  const value = useMemo(() => [theme, setTheme], [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value as ThemeContextProps}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default memo(ThemeProvider)