import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductDetailPage from './components/ProductDetailPage';

class App extends React.Component {
  state = {
    cartItems: [],
    selectedCategory: null,
  };

  removeFromCart = (itemName) => {
    const updatedCartItems = this.state.cartItems.filter(item => item.name !== itemName);
    this.setState({ cartItems: updatedCartItems });
  };

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const { cartItems, selectedCategory } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <NavBar cartItems={cartItems} onCategorySelect={this.handleCategorySelect} />
          <Routes>
            <Route path='/' element={<ItemListContainer selectedCategory={selectedCategory} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer selectedCategory={selectedCategory} />} />
            <Route path='/item/:itemId' element={<ProductDetailPage />} />
            <Route path='*' element={<ItemListContainer selectedCategory={selectedCategory} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;