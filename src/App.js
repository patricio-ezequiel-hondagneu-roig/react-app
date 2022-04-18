
import './App.css';
import NavBar from './components/NavBar';

function App() {

  const styles = {
    header: ""
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1 className={styles.header}>Main content</h1>
      </header>
    </div>
  );
}

export default App;
