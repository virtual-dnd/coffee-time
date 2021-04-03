import styles from './App.module.css';

// routes
import Home from 'routes/Home/Home';

function App() {
  return (
    <div className={styles.App} data-testid="App">
      <Home />
    </div>
  );
}

export default App;
