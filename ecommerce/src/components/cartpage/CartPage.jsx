import React from 'react';

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay elementos en el carrito</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} <button onClick={() => removeFromCart(item.name)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;