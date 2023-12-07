import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import NavigationBar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "./Components/ItemList/ItemList";
import HeroStore from "./Components/HeroStore/HeroStore";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar tieneCarrito={false} />
      </header>
      <div>
        <HeroStore />
      </div>
      <div id='catalogo' style={{ marginTop: '70px' }}>
        <ItemList />
      </div>
    </div>
  );
}

export default App;
