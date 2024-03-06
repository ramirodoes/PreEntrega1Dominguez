import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "../header/CartWidget/CartWidget";

const NavBar = ({ cartItems }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">La Escuelita de Sayago</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link btn btn-link" to="/cart">Carrito</Link>
            </li>
          </ul>
        </div>
        <CartWidget cartItems={cartItems} />
      </div>
    </nav>
  );
}

export default NavBar;