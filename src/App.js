
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { GameContainer } from './components/GameListContainer/GameContainer';
import GameDetailItem from './components/GameListContainer/GameDetail/GameDetailItem';

function App() {

  const onAdd = (cant) => {
    alert(`Se agrego ${cant} al carrito`)
  }

  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ height: 87.2 + "vh" }}>
        <Routes>
          <Route path="/" element={<GameContainer />}></Route>
          <Route path="/category/:id" element={<GameContainer />}></Route>
          <Route path="/game/:gameId" element={<GameDetailItem stock={5} initial={1} onAdd={onAdd} />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
