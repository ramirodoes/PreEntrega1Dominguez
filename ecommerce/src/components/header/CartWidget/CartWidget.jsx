import React from 'react';
import cart from './assets/cart.svg';

const CartWidget = ({ cartItems }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <img src={cart} alt="cart-widget" />
      {totalItems > 0 && <span>{totalItems}</span>}
    </div>
  );
}

export default CartWidget;
