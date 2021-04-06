import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} name="theme" type="button">
        test button
      </button>
    </div>
  );
}

export default Home;
