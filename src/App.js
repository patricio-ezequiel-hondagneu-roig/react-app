
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { GameContainer } from './components/GameListContainer/GameContainer';

function App() {

  const onAdd = (cant) => {
    alert(`Se agrego ${cant} al carrito`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <GameContainer stock={5} initial={1} onAdd={onAdd} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
