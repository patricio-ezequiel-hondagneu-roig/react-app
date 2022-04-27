
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Card from "./components/Card/Card"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';

function App() {

  const onAdd = () => {
    alert(`Se agrego al carrito`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Card>
          <ItemListContainer stock="5" initial="1" onAdd={onAdd} />
        </Card>
        <Footer />
      </header>
    </div>
  );
}

export default App;
