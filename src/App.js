
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Card from "./components/Card/Card"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Card>
          <ItemListContainer />
        </Card>
      </header>
    </div>
  );
}

export default App;
