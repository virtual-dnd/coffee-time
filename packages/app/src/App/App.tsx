import ThemeProvider from 'context/ThemeProvider/ThemeProvider';
import defaultTheme from 'utils/themeCache';
import styles from './App.module.css';

// routes
import Home from 'routes/Home/Home';

function App() {
  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <div className={styles.App} data-testid="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
