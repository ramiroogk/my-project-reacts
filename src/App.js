import './App.css';
import Micomponente from './Pages/Home/Home';
import NavigationBar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavigationBar></NavigationBar>
      </header>
    </div>
  );
}

export default App;
