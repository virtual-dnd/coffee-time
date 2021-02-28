import ThemeProvider from '../context/ThemeProvider/ThemeProvider'
import defaultTheme from '../utils/themeCache';
import styles from "./App.module.css"

function App() {
  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <div className={styles.App}>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App
