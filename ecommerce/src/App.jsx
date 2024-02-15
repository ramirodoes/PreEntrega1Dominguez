import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Bienvenidos a la Tienda de La Escuelita</h1>
      <NavBar/>
      <ItemListContainer greeting={'Racing'}/>
    </div>
  )
}

export default App