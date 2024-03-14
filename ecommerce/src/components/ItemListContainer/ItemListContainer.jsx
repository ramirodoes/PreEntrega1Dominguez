import React, { useState, useEffect } from 'react';
import { getProducts } from '../asyncMock';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams()

  useEffect(() => {
    getProducts()
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="item-list">
      <div className="product-section">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;