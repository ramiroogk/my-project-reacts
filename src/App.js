import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Micomponente from './Pages/Home/Home';
import NavigationBar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './Components/ItemCount/ItemCount';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavigationBar/>
      <ItemListContainer />
      </header>
    
    </div>
    
   
  
  );
}

export default App;
