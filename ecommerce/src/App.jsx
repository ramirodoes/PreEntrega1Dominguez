import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartPage from './components/cartpage/CartPage';

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
    <Router>
      <div className="App">
        <NavBar cartItems={cartItems} />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer addToCart={addToCart} />
          </Route>
          <Route path="/cart">
            <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;