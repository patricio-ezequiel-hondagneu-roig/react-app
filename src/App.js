
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import GameListContainer from './components/GameListContainer/GameContainer';

function App() {

  const onAdd = () => {
    alert(`Se agrego al carrito`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <GameListContainer stock="5" initial="1" onAdd={onAdd} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
