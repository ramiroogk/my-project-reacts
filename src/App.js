import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Micomponente from './Pages/Home/Home';
import NavigationBar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './Components/ItemCount/ItemCount';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavigationBar/>
      <itemDetailContainer/>
      <itemDetailContainer/>
      <ItemListContainer />
      </header>
    
    </div>
  );
}

export default App;
