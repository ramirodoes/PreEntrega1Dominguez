// ecommerce/src/App.jsx
import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemName) => {
    const updatedCartItems = cartItems.concat({ name: itemName, quantity: 1 });
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (itemName) => {
    const updatedCartItems = cartItems.filter(item => item.name !== itemName);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="App">
      <h1>Bienvenidos a la Tienda de La Escuelita</h1>
      <NavBar cartItems={cartItems} />
      <ItemListContainer greeting={'Racing'} addToCart={addToCart} />
    </div>
  )
}

export default App;